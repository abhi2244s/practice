var customerArr = []
function User(firstName,lastName,dob,balance,holder){
    this.firstName = firstName,
    this.lastName = lastName,
    this.dob = dob,
    this.balance = balance,
    this.holder = holder
    this.display = function (){
        var out  = 'First :' + this.firstName + '\n' 
        out  += 'last :' + this.lastName + '\n' 
         out  += 'dob :' + this.dob + '\n' 
        out += 'balance :' + this.balance + '\n' 
         out+= 'First :' + this.holder + '\n' 
         return out
    }
}



function addCustomer(){
    var firstName= document.getElementById ('firstName').value
    var lastName= document.getElementById ('lastName').value
    var dob= document.getElementById('dob').value
    var balance= document.getElementById('balance').value
    var holder= document.getElementById('holder').value.split(',')


    var customer = new User(firstName,lastName,dob,balance,holder)
    customerArr.push(customer)
    console.log(customerArr)
}

function displayCustomer(){
  var div= document.getElementById('res')
  div.innerHTML = ""
  customerArr.forEach(function (customer){
      var res = document.createElement('div')
      res.textContent = customer.display()
      div.append(res)
  })
}


window.addEventListener('load',function(){
    var display = document.getElementById('display')
    display.addEventListener('click',displayCustomer)
})


window.addEventListener('load',function(){
    var btn = document.getElementById('button')
    btn.addEventListener('click', addCustomer)
})