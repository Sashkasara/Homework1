// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//     }).catch(function(error){
//         console.log(error)
//     });


function User(id, name, email, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address - address;

    this.info = function(){
        return `Id: ${this.id}, Name: ${this.name}, Email: ${this.email}. Address: ${this.address}`
    }
}

document.getElementById("get-user").addEventListener("click", function(){
    let id = document.getElementById("user-id").value;
    
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(data){
            let newUser = new User( data.id, data.name, data.address)
            // let users = [];
            // for (let user of data){
            //     let newUser = new User( user.id, user.name, user.address)
            //     users.push(newUser)
            // }

            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<p>${newUser.info()}</p>`
            // for(let data of datas){
            //     resultDiv.innerHTML = `<p>${data.info()}</p>`
            // }
        }).catch(function(error){
            alert ("User does not exist");
        });
});

