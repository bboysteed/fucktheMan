package main

import "makeMonkey/utils"

func main() {
	//var urlStr string = "https://www.baidu.com"
	//escapeUrl := url.QueryEscape(urlStr)
	//fmt.Println("编码:", escapeUrl)
	//
	//enEscapeUrl, _ := url.QueryUnescape(escapeUrl)
	//fmt.Println("解码:", enEscapeUrl)

	var ts = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Welcome</title>
<link rel="stylesheet" type="text/css" href="/static/default/css/table.css" />
<script type="text/javascript" src="/js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/js/libs.js"></script>
<script type="text/javascript" src="/static/default/js/skin.js"></script>
<script type="text/javascript">$(function(){LIBS.colorMoney('.color','minus')})</script>
</head>
<body>
<div class="main report">
<div class="search">
</div>
<table class="list table">
<thead><tr><th>注单号</th><th>时间</th><th>类型</th><th>玩法</th><th>盘口</th><th>下注金额</th><th>退水(%)</th><th>可赢金额</th></tr></thead>
<tbody>
<tr><td>202207211440402649037250002</td><td class="time">2022-07-21<br />14:40:40</td>
<td class="period"><span class="lottery">极速赛车</span><br /><span class="draw_number">第 32407698 期</span></td>
<td class="contents">
<span class="text">冠军 龙</span> @ <span class="odds">1.9799</span></td>
<td class="range">A</td><td class="amount">1</td><td>0%</td><td class="result color">1.0</td>
</tr>
<tr><td>202207211440402649037250001</td><td class="time">2022-07-21<br />14:40:40</td>
<td class="period"><span class="lottery">极速赛车</span><br /><span class="draw_number">第 32407698 期</span></td>
<td class="contents">
<span class="text">冠军 大</span> @ <span class="odds">1.9799</span></td>
<td class="range">A</td><td class="amount">1</td><td>0%</td><td class="result color">1.0</td>
</tr>
</tbody>
<tfoot>
<tr><td></td><td></td><td></td><td></td><th>总计</th><td>2</td><td></td><td class="result color">2.0</td></tr>
</tfoot>
</table>
<script>
  $(document).ready(function(){
    $(".page-jump input").on("keydown", function(e){
      if(e.keyCode === 13){
        e.stopPropagation();
        $(this).blur();
        if($(this).val() <= 0 || $(this).parent().data("total-page") < $(this).val()){
          alert("页面不存在");
          return;
        } else{
          var navigatePage = $(this).parent().data("page-url").replace("page=1", "page=" + $(this).val());
          location.href = location.origin + location.pathname + navigatePage;
        }
      }
    })
  })

</script><div class="page_info">
<span class="record">共 2 笔记录</span>
<span class="page_count">共 1 页</span>
<span class="page_control">
  <a class="previous">首页</a> |
<span class="page-jump" data-total-page="1" data-page-url="?page=1
">跳转至<input type="number" style="width: 50px" maxlength="3"/>页 </span>
<a class="previous">前一页</a>『
<span class="current">1</span>
』<a class="next">后一页</a> |
  <a class="next">末页</a>
</span>
</div>
</div>
</body>
</html>`

	utils.Replace(ts)
}
