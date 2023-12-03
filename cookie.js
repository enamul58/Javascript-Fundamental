function setCookie(cname, cvalue, expireDay) {
  //creat expire date
  const currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + expireDay * 24 * 60 * 60 * 1000);
  let expire = "expire=" + currentDate.toUTCString();

  //set cookie
  document.cookie = cname + "=" + cvalue + ";" + expire + ";path/";
}

function getCookie(cname) {
  // recive parameter
  let name = cname + "=";

  let cookieArray = document.cookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookieArrayItem = cookieArray[i];

    while (cookieArrayItem.charAt(0) === " ") {
      cookieArrayItem = cookieArrayItem.substring(1);
    }

    if (cookieArrayItem.indexOf(name) === 0) {
      return cookieArrayItem.substring(name.length);
    }
  }
  return "";
}

// check cookie name value
function checkCookie(cname) {
  let cnameValue = getCookie(cname);

  if (cnameValue != "") {
    alert("Welcome Again: " + cnameValue);
  } else {
    let cnameValue = prompt("Enter Cookie Value:");
    setCookie(cname, cnameValue, 2);
  }
}
