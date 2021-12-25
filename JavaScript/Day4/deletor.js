function removeHeading1(){
    var element = document.querySelector('#first')
     var body =  document.querySelector('body')
     body.removeChild(element)
}

function removeHeading3(){
    var element = document.querySelectorAll('.heading3')
    for (var i =0 ; i<element.length ; i++){
        elements = element[i];
        var body = document.querySelector('body')
        body.removeChild(elements)
    }
}

function removeHeading5(){
    var element = document.querySelectorAll('.heading5')
    for (var i =0 ; i<element.length ; i++){
        elements = element[i]
        var body = document.querySelector('#headings')
        body.removeChild(elements)
    }
}

function removeRed(){
    var element = document.querySelectorAll('.red')
    for (var i =0 ; i<element.length ; i++){
        elements = element[i]
        var body = document.querySelector('#cont')
        body.removeChild(elements)
    }
}

function removeDIvs(){
    var element = document.querySelectorAll('#cont div')
    for (var i =0 ; i<element.length ; i++){
        elements = element[i]
        var body = document.querySelector('#cont')
        body.removeChild(elements)
    }
}