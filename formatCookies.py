"""
# HTTrack Website Copier Cookie File
# This file format is compatible with Netscape cookies
www.httrack.com	TRUE	/	FALSE	1999999999	foo	bar
www.example.com	TRUE	/folder	FALSE	1999999999	JSESSIONID	xxx1234
www.example.com	TRUE	/hello	FALSE	1999999999	JSESSIONID	yyy1234

"""
import json
with open("./cookiesOringin.txt","r") as f:
	cnt = f.read()
	cookies = json.loads(cnt) #[{},{}]
	print(cookies,type(cookies))

	# print(cookies)
	with open("./cookies.txt","w+") as out:
		for ck in cookies:
			date = ""
			if "expirationDate" in ck.keys():
				date = ck["expirationDate"]
			else:
				date = ""
			out.write("\t".join([str(i) for i in [ck["domain"],ck["hostOnly"],ck["path"],ck["secure"],
				date,ck["name"],ck["value"]]])+"\n")


