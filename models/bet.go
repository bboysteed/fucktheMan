package models

type BetReq struct {
	Lottery    string `json:"lottery"`
	DrawNumber string `json:"drawNumber"`
	Bets       []Bet  `json:"bets"`
	Ignore     bool   `json:"ignore"`
}
type Bet struct {
	Game     string  `json:"game"`
	Contents string  `json:"contents"`
	Amount   int     `json:"amount"`
	Odds     float64 `json:"odds"`
	Title    string  `json:"title"`
}

type MBetReq struct {
	Lottery    string `json:"lottery"`
	DrawNumber string `json:"drawNumber"`
	MBets      []MBet `json:"bets"`
}
type MBet struct {
	Game     string  `json:"game"`
	Contents string  `json:"contents"`
	Amount   int     `json:"amount"`
	Odds     float64 `json:"odds"`
}

type BetResponse struct {
	Account       Account  `json:"account"`
	DisplayBetLog bool     `json:"displayBetLog"`
	Ids           []string `json:"ids"`
	Odds          []string `json:"odds"`
	Sb            string   `json:"sb"`
	Status        int      `json:"status"`
}
type Account struct {
	Balance  float64 `json:"balance"`
	Betting  float64 `json:"betting"`
	MaxLimit float64 `json:"maxLimit"`
	Result   float64 `json:"result"`
	Type     int     `json:"type"`
	Userid   string  `json:"userid"`
}

//mobile

type MobileUserInfo struct {
	Message string `json:"message"`
	Result  struct {
		Accounts []struct {
			Balance  float64 `json:"balance"`
			Betting  float64 `json:"betting,omitempty"`
			MaxLimit float64 `json:"maxLimit"`
			Result   float64 `json:"result,omitempty"`
			Type     int     `json:"type"`
		} `json:"accounts"`
		Atypes   []int `json:"atypes"`
		Lotterys struct {
			Num0 []struct {
				AccountType    int      `json:"accountType"`
				Balls          []string `json:"balls"`
				CanBack        bool     `json:"canBack"`
				DrawCount      int      `json:"drawCount"`
				ID             string   `json:"id"`
				LotterySubType int      `json:"lotterySubType"`
				MaxBall        int      `json:"maxBall"`
				MinBall        int      `json:"minBall"`
				Name           string   `json:"name"`
				Repeatable     bool     `json:"repeatable"`
				SortResult     bool     `json:"sortResult"`
				Tb             int      `json:"tb"`
				Template       string   `json:"template"`
				Type           int      `json:"type"`
			} `json:"0"`
		} `json:"lotterys"`
		User struct {
			Created       int64  `json:"created"`
			GameEnable    bool   `json:"gameEnable"`
			ID            string `json:"id"`
			IP            string `json:"ip"`
			IPAddress     string `json:"ipAddress"`
			LoginTime     int64  `json:"loginTime"`
			Lv            int    `json:"lv"`
			Oid           string `json:"oid"`
			Online        bool   `json:"online"`
			Parent        string `json:"parent"`
			Platform      string `json:"platform"`
			Range         string `json:"range"`
			ResetType     int    `json:"resetType"`
			Server        string `json:"server"`
			ShareMode     int    `json:"shareMode"`
			Status        int    `json:"status"`
			Type          int    `json:"type"`
			UserKey       string `json:"userKey"`
			Username      string `json:"username"`
			Userpass      string `json:"userpass"`
			WechatEnabled int    `json:"wechatEnabled"`
		} `json:"user"`
	} `json:"result"`
	Status     string `json:"status"`
	StatusCode int    `json:"statusCode"`
}

type ConsultBets struct {
	Message string `json:"message"`
	Result  struct {
		Begin int `json:"begin"`
		Count int `json:"count"`
		End   int `json:"end"`
		Index int `json:"index"`
		List  []struct {
			Bid          string  `json:"bid"`
			Game         string  `json:"game"`
			Text         string  `json:"text"`
			GameText     string  `json:"gameText"`
			Multiple     int     `json:"multiple"`
			OddsText     string  `json:"oddsText"`
			OddsDetail   string  `json:"oddsDetail"`
			Amount       int     `json:"amount"`
			Dividend     float64 `json:"dividend"`
			Cm           int     `json:"cm"`
			Range        string  `json:"range"`
			Lottery      string  `json:"lottery"`
			DrawNumber   string  `json:"drawNumber"`
			Created      int64   `json:"created"`
			Status       int     `json:"status"`
			FreezeAmount int     `json:"freezeAmount"`
		} `json:"list"`
		PageCount int `json:"pageCount"`
		Size      int `json:"size"`
		Total     struct {
			C                 int     `json:"c"`
			Amount            int     `json:"amount"`
			Dividend          float64 `json:"dividend"`
			FreezeAmountTotal int     `json:"freezeAmountTotal"`
		} `json:"total"`
	} `json:"result"`
	Status     string `json:"status"`
	StatusCode int    `json:"statusCode"`
}
