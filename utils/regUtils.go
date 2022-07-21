package utils

import (
	"fmt"
	"regexp"
	"strings"
)

var mapping = map[string]string{
	"小": "大",
	"单": "双",
	"双": "单",
	"大": "小",
}

func SearchTime(s string) string {
	//s := `com/code?_=1657978875679"`
	re := regexp.MustCompile(`code\?_=(\d+)"`)
	ans := re.FindAllStringSubmatch(s, -1)[0]
	fmt.Println(ans[1])
	return ans[1]
}

func Replace(or string) string {
	//<span class="text">冠军 大</span> @ <span
	re := regexp.MustCompile(`<span class="text">.*?\s(.*)</span> @ <span`)
	ans := re.FindAllStringSubmatch(or, -1)
	fmt.Println("ans->", ans)
	for i := 0; i < len(ans); i++ {
		//ans[i][26] = "了"
		//ans[i][0][26]
		fmt.Printf("%v--%v\n", ans[i][0], ans[i][1])
		if mapping[ans[i][1]] != "" {
			newSam := strings.ReplaceAll(ans[i][0], ans[i][1], mapping[ans[i][1]])
			fmt.Printf("%v--%v\n", ans[i][0], ans[i][1])
			or = strings.ReplaceAll(or, ans[i][0], newSam)
		}

	}
	//submactch = mapping[submactch]
	//strings.ReplaceAll()
	//fmt.Println(or)
	return or
}

func Zhudanreplace(in string) string {
	///[{"id":"202207211523442651299860001","t":"冠军 双","o":"1.9799","a":1}]
	key := strings.Split(in, " ")
	fmt.Println("replace->", key[0]+" "+mapping[key[1]])
	return key[0] + " " + mapping[key[1]]
}
