package utils

import (
	"bytes"
	"compress/gzip"
	"io"
	"log"
)

func GzipDecode(cnt []byte) *bytes.Buffer {
	zr, err := gzip.NewReader(bytes.NewReader(cnt))
	if err != nil {
		log.Fatal(err)
	}
	buf := make([]byte, 0)
	recv := bytes.NewBuffer(buf)
	if _, err := io.Copy(recv, zr); err != nil {
		log.Fatal(err)
	}
	if err := zr.Close(); err != nil {
		log.Fatal(err)
	}
	return recv

}
