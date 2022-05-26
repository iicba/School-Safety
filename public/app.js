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
    createElements(data)
    console.log(data);
}

function createElements(arr){
    arr.forEach((elem) => {
        createSingleElement(elem)
    });
}

function createSingleElement(elem){
    const div = document.createElement('div')
    div.textContent = elem.name
    div.id = elem.id
    appendListToDiv(div)
}
function appendListToDiv(list){
    list.appendChild(div)
}