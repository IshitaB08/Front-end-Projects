function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var ucountry = document.registration.country;
var uemail = document.registration.email;
var age = document.registration.age;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,13))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(countryselect(ucountry))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;
}
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my");
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx ||passid==username)
{
alert("Password should not be empty / length be between "+mx+" to "+my+" / other than username");
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}




