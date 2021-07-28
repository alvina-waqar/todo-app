var a = document.getElementById('main')
var d = document.getElementById('todocontainer')

function inp(){
    var b = document.getElementById('myInput')
    var newelement = document.createElement('p')
    newelement.classList.add('li-styling')
    var c = b.value
    var text = document.createTextNode(c)
    newelement.appendChild(text)
    d.appendChild(newelement)
    b.value=""
    var button = document.createElement('button')
    var text = document.createTextNode('edit')
    button.appendChild(text)
    button.setAttribute('onclick','edittodo(this)')
    newelement.appendChild(button)

    var dltbtn = document.createElement('button')
    var dltbtntext = document.createTextNode('delete')
    dltbtn.appendChild(dltbtntext)
    newelement.appendChild(dltbtn)
    dltbtn.setAttribute('onclick', 'dlttodo(this)')
    }
function dlttodo(e){
    e.parentNode.remove()
}

function edittodo(e){
    e.parentNode.firstChild.nodeValue = prompt('enter new todo')
}
function deleteall(){
    d.innerHTML = ''
}
