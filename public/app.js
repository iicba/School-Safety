const body = document.querySelector('body');
const btn = document.getElementById('btn');
const list = document.getElementById('destination');

console.log(btn)

addListeners()

function addListeners(){
    console.log(btn)
    btn.addEventListener('click', getSubmitters);
    
}

async function getSubmitters(){
    const result = await fetch('https://powerful-brushlands-81845.herokuapp.com/api/reports');
    const data = await result.json();
    console.log(data);
}