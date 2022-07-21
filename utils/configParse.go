package utils

import (
	yaml "gopkg.in/yaml.v3"
	"io/ioutil"
	"log"
)

type Yaml struct {
	Baseip string `yaml:"baseip"`
	Open   bool   `yaml:"open"`
	Name   string `yaml:"name"`
}

func ParseYaml() (*Yaml, error) {
	t := Yaml{}
	cnt, err := ioutil.ReadFile("./conf.yaml")
	if err != nil {
		log.Fatalln("读取配置文件失败，", err)
	}
	err = yaml.Unmarshal(cnt, &t)
	if err != nil {
		log.Fatalln("解析配置文件失败，", err)
	}
	return &t, err
}

func StoreYaml(conf *Yaml) {
	cnt, _ := yaml.Marshal(conf)
	ioutil.WriteFile("./conf.yaml", cnt, 0755)

}
