package dataDb

import (
	"fmt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"makeMonkey/models"
)

//type User struct {
//	gorm.Model
//	Username  string    `json:"username"`
//	Password  string    `json:"password"`
//	Lastlogin time.Time `json:"lastlogin"`
//}

func InitDB() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("dataAll.dataDb"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	err = db.AutoMigrate(&models.User{})

	if err != nil {
		fmt.Println("migrate user failed", err)
	}
	db.AutoMigrate(&models.SearchCode{})

	return db
}
