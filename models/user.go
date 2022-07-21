package models

import (
	"gorm.io/gorm"
	"time"
)

//type Data struct {
//	//ID string `json:"id"`
//	Permission string `json:"permission"`
//}
type ListResponse struct {
	Code       int         `json:"code"`
	Msg        string      `json:"msg"`
	TotalCount int64       `json:"totalCount"`
	Data       interface{} `json:"data"`
}
type User struct {
	gorm.Model
	//ID          string    `json:"id"`
	Username    string    `json:"username"`
	Password    string    `json:"password"`
	LastLogin   time.Time `json:"lastLogin"`
	Money       float64   `json:"money"`
	WantedMoney float64   `json:"wanted_money"`
	Intercept   int       `json:"intercept"`
	//Permissions []string  `json:"permissions"`
}

type SearchCode struct {
	gorm.Model
	Code string `json:"seachcode"`
}

type UserPage struct {
	PageNo   int `json:"pageNo"`
	PageSize int `json:"pageSize"`
}
