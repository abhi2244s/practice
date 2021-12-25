function changeH1(){
    var element = document.querySelector('#colorh1')
    element.style.color = "red"
}


function changeH3(){
    var element = document.querySelector('#colorh3')
    element.style.color = "green"
}


function changeH5(){
    var element = document.querySelector('#colorh5')
    element.style.color = "blue"
}

function changeGreen(){
    var elements = document.querySelectorAll('.green')

    for (var i=0 ; i<elements.length; i++){
        var element =  elements[i];
        element.style.color = "green"


    }
}

function changeBlue(){

    var elements = document.querySelectorAll('.blue')

    for (var i =0; i<elements.length; i ++){
        var element = elements[i]
        element.style.color = "blue"
    }
}

function changeRed(){

    var elements = document.querySelectorAll('.red')
    
    for (var i =0 ;i<elements.length ; i++){

        var element = elements[i]
        element.style.color = "red"
    }
      
}