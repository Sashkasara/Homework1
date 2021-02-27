document.getElementById("button").addEventListener("click", function() {
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/albums",
            success: function(result) {
                let array = [];
                for( let i=0; i < 100; i++){
                    array.push(result[i])
                }
                if (array !== undefined && array.length > 0) {
                    $("#output").append (
                        `
                            <ul>
                                ${array.map((photo) => {
                                    if ( result.hasOwnProperty("omnis") ) {
                        
                                    }
                                    return (
                                        
                                        `
                                            <li> ${photo.id}</li> < /br>
                                            <li> ${photo.title} </li> < /br>
                                            
                                    
                                        `
                                    )
                                })}
                            </ul>
                        `
                    )
                }
            },
            error: function (error) {
                console.error(error);
            }
        })
    }, false)