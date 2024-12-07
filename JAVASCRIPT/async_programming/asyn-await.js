// //async function : function that return Promise . inside an async yoou can use await to pause
// //execution of the function until the promise is resolved
// const fetchButton = document.getElementById('fetch');
// const userList = document.getElementById('userList');

// async function fetchUserdata(){
//     try{
//         //start fetching data
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // check if the response is okay
//         if(!response.ok){
//             throw new Error('Failed to fetch data');
//         }
//         //parsing the response
//         const users = await response.json();

//         userList.innerHTML='';
//         users.forEach(user => {
//             const li = document.createElement('li');
//             li.textContent = `${user.name} - ${user.email}`;
//             userList.appendChild(li)
            
//         });

//     }catch(error){
//         userList.innerHTML=`<li>Error : ${error.message}<\li>`
//     }
// }
// fetchButton.addEventListener('click', fetchUserdata)



//async function : function that return Promise . inside an async yoou can use await to pause
//execution of the function until the promise is resolved
const fetchButton = document.getElementById('fetch');
const userList = document.getElementById('userList');

async function fetchUserdata(){
    try{
        //start fetching data
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // check if the response is okay
        if(!response.ok){
            throw new Error('Failed to fetch data');
        }
        //parsing the response
        const users = await response.json();

        userList.innerHTML='';
        users.forEach(user => {
            const row = document.createElement('tr');  // Create a new table row
            const nameCell = document.createElement('td');
            const emailCell = document.createElement('td');
            const ageCell = document.createElement('td');

            // Set content for the table cells
            nameCell.textContent = user.name;
            emailCell.textContent = user.email;
            ageCell.textContent = Math.floor(Math.random() * (40 - 18 + 1)) + 18;  // Random age between 18 and 40 for demo purposes

            // Append cells to the row
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(ageCell);

            // Append the row to the table body
            userList.appendChild(row);
            
        });

    }catch(error){
        userList.innerHTML=`<li>Error : ${error.message}<\li>`
    }
}
fetchButton.addEventListener('click', fetchUserdata)