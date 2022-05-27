const body = document.querySelector('body');
const btn = document.getElementById('btn');
const destination = document.getElementById('destination');
const submit = document.getElementById('submit')
const deleteBtn = document.getElementById('delete')

console.log(btn)

addListeners()

function addListeners(){
    // btn.addEventListener('click', removeDivByClass)
    btn.addEventListener('click', getSubmitters);
    submit.addEventListener('click', () =>{
        const textField = document.querySelector('#name');
        const textString = textField.value;
        const payload = {name: textString, email: "email"};
        postText(payload)
    });
    deleteBtn.addEventListener('click',() =>{
        const textField = document.querySelector('#name');
        const textString = textField.value;
        const payload2 = {id:textString};
        deleteName(payload2)
    });
}

// function removeDivByClass(){
//   const e = document.querySelector('.divsToRemove');
//   e.destination.removeChild(e);
// }
async function getSubmitters(){
    const result = await fetch('https://powerful-brushlands-81845.herokuapp.com/api/reports');
    const data = await result.json();
    createElements(data)
    console.log(data);
}


function createElements(arr){
    destination.textContent = ''
    let p = document.createElement('p')
    p.textContent = "Results listed below:"
    destination.appendChild(p)
    arr.forEach((elem) => {
        createSingleElement(elem)
    });
}

function createSingleElement(elem){
    const div = document.createElement('div')
    div.textContent = elem.name
    div.id = elem.id
    div.className = "divsToRemove"
    console.log(div)
    appendListToDiv(div)
}
function appendListToDiv(div){
    destination.appendChild(div)
}

const textField = document.getElementById('name');
const textString = textField.value;
const payload = {name: textString, email: "email"};



const postText = async (payload) => {
    const rawResponse = await fetch('/api/reports/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  };

  const deleteName = async (payload2) => {
    const rawResponse = await fetch(`/api/reports/${payload2.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload2)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  };