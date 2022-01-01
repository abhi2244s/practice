function Login(){
    var user = document.getElementById('user').value 
    var pass = document.getElementById('pass').value 

    localStorage.setItem('user', "Abhi")
    localStorage.setItem('pass', "2244")

    var uname = localStorage.getItem('user')
    var upass = localStorage.getItem('pass')

    if (user ==uname && pass==upass){
        window.location.href = "dash.html"
    }
    else {
        alert("No verification Found")
    }

}











window.addEventListener('load',function (){
    var btn =document.getElementById('button')
    btn.addEventListener('click',Login)
})