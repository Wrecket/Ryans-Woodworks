<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "example.com" or host = "www.example.com" then
response.redirect("http://ryanswoodworks.co.uk/")

else
response.redirect(http://ryanswoodworks.co.uk/error.htm")

end if
%>