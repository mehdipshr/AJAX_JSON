// The keystone of AJAX is the XMLHttpRequest object.

// Create an XMLHttpRequest object
// Define a callback function :should contain the code to execute when the response is ready.
    // What to do when the response is ready
// Open the XMLHttpRequest object

// Send a Request to a server



const button = document.getElementById('btn');
const mainDiv = document.getElementById('container')


button.addEventListener('click',ourRequest);

// function ourRequest(){
//     let xhr = new XMLHttpRequest();
//     console.log(xhr);
    
//     xhr.open('GET','text.txt', true);
//     console.log(xhr);

//     xhr.onload = function(){
//         if(xhr.status === 200){
//             console.log(xhr.responseText);
//             mainDiv.innerHTML += `<p>${xhr.responseText}</p>`
//         } else if(xhr.status === 404) {
//             mainDiv.innerHTML += `<p>your request was not found</p>`
//         }
//     }
//     xhr.send();
    
// }

function ourRequest(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function(){
        if(xhr.status === 200){
            let responseArray = JSON.parse(xhr.responseText);
            // console.log(responseArray);
            responseArray.forEach(user =>{
                console.log(user);
                mainDiv.innerHTML += `<img src=${user.avatar_url} alt="">`+`<h2> ${user.login} </h2>`
                
            })
        }else if(xhr.status === 404){
            console.log('not found');
        }
    }

    xhr.send();
}
