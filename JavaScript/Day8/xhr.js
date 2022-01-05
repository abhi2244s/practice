function getDetails() {
  var xhr = new XMLHttpRequest();
  var query = document.getElementById("input").value;
  xhr.open("GET", "https://api.github.com/search/users?q=" + query);
  xhr.send();
  xhr.onload = function () {
   var data= JSON.parse(this.response)
   displayDetails(data)

  };
}

function displayDetails(data){
var div = document.getElementById('res')
div.innerHTML = ""
var count = data.total_count;
var p = document.createElement('p')
p.textContent = count  + " user found"

var ol = document.createElement('ol')
var items = data.items
for ( var i =0;i<items.length;i++){
    var li = document.createElement('li')
    li.innerText = items[i].login  + " " + items[i].avatar_url
    ol.append(li)
}
div.append(p,ol)


}

window.addEventListener("load", function () {
  var btn = document.getElementById("button");
  btn.addEventListener("click", getDetails);
});
