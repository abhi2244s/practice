function getDetails() {
  var select = document.getElementById("select").value;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8080/codenames/android");
  xhr.send();
  xhr.onload = function () {
    console.log(this.response);
  };
}

// function displayDetails(data){
// var div = document.getElementById("res");
// div.innerHTML = "";
// for (var i = c; i < div.length; i++) {
//   var count = data.version;
//   var p = document.createElement("p");
//   p.textContent = count;
//   div.append(p);
// }

// }

window.addEventListener("load", function () {
  var btn = this.document.getElementById("details");
  btn.addEventListener("click", getDetails);
});

// window.addEventListener('load',function(){
//     var btn = this.document.getElementById('button')
//     btn.addEventListener('click',displayDetails)
// })
