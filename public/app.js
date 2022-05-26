const body = document.querySelector('body');
const btn = document.getElementById('btn');
const list = document.getElementById('destination');


console.log(btn)

addListeners()

function addListeners(){
    btn.addEventListener('click', getSubmitters);
    
}

async function getSubmitters(){
    const result = await fetch('https://powerful-brushlands-81845.herokuapp.com/api/reports');
    const data = await result.json();
    createList()
    console.log(data);
}
function createList(arr){
    //document.createElement('div')
    list.textContent = arr.name
    //div.id = "list"
    appendListToDiv(list)
}
function appendListToDiv(list){
    body.appendChild(list)
}