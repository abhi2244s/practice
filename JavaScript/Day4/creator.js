function create(){
       
    var div = document.querySelector('#headings')

    var element = document.createElement('h1')

    element.textContent= "Masai"

    div.append(element)
    
}

function createH2(){

    var div = document.querySelector('#headings')
    var element  = document.createElement('h3')
    element.textContent = "MaSAI School"
    var element1 = document.createElement('h3')
    element1.textContent  = "A learn"
    div.append(element)
    div.append(element1)
   


}

function divs(){
    var div = document.querySelector('#cont')

    
     for ( var i = 0; i<10; i++){
        var element = document.createElement('div')
        element = "content "  +i
        div.append(element)

     }
    
}

// function addStudent(){
//       var div =  document.querySelector('#vikings')

//      for (var i =0; i<students.length; i++){
//          var li  = document.createElement('li')
//          li.textContent = students[i];
//          div.appendChild(li)


//      }


// }

function copy(){
    var element = document.createElement('p')
    element.textContent = "Masai";
    document.body.insertBefore(element,createHeading)
}