document.getElementById("button").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            if (json !== undefined && json.length > 0) {
                document.getElementById("output").innerHTML = (
                    `   
                        <h3>All albums with 'omnis' in their title:</h3>
                        <ul>
                            ${json.map((user, index) => {
                                if (user.title.includes("omnis")){
                                return (
                                    `
                                        <li key=${index}>
                                            title: ${user.title}<br>
                                            </li><br>
                                    
                                    `
                                )
                            }}).join("")}
                        </ul>
                    
                    `

                )
            }
        })
        .catch(error => {console.log(error);});
})