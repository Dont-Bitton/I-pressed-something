var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/brat.png") {
    myImage.setAttribute("src", "images/orig.jpg");
  } else {
    myImage.setAttribute("src", "images/brat.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Ты кто такой?.");
    localStorage.setItem("name", myName);
    myHeading.textContent = myName +" ,меня доебали твои охуительные истории";
  }
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = myName +" ,меня доебали твои охуительные истории";
}  
myButton.onclick = function () {
    setUserName();
  };
