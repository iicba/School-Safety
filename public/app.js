//console.log('hello world!')



// function fetchAPI() {
//     fetch("/api/reports")
//     .then((res) => res.json())
//     .then((data) => {
//         submitters = data;
//         for (var i=0; i< submitters.length; i++){
//             var latestSubmittersList = document.createElement("li");
//             latestSubmittersList.textContent = submitters[i];
//             ul.appendChild(latestSubmittersList);
//         }
//         divUl.appendChild(ul);
//         document.body.appendChild(divUl);
//         document.querySelector("#ulContainer").getElementsByClassName.visibility = "visible";
//     })
//     .catch((err) => console.log(err));
// }
// const body = document.querySelector('body');
// const btn = document.querySelector('#btn');
// const list = document.getElementById('destination');

// fetch("http://localhost:3000/api/reports")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         list.appendChild(data);
//         body.appendChild(list)
//     })


const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const list = document.getElementById('destination');

addListeners()

function addListeners(){
    btn.addEventListener('click', getSubmitters)
}

async function getSubmitters(){
    const result = await fetch('https://powerful-brushlands-81845.herokuapp.com/api/reports')
    const data = await result.json()
    console.log(data)
}