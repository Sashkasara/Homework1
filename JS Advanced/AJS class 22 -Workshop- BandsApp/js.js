// let bands = [];

// let page = 1;
// let total = 0;
// let itemsPerPage = 10;


navService = {
    buttonSearch: document.getElementById("buttonSearch"),
    buttonInput: document.getElementById("buttonInput"),
    sortByName: document.getElementById("sortByName"),
    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",


init : () => {
    apiService.bands(navService.url)
    navService.buttonSearch // ADD EVENT LISTENER
  }

}



apiService = {
    bands: (url) => {
    return fetch(url)
	.then(response => response.json())
	.catch((error) => {
		console.log(error)
	})
    }
}
// async function fetchData()
// {
// 	return fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json')
// 	.then(response => response.json())
// 	.catch((error) => {
// 		console.log(error);
// 	});
// }

uiService = {
    result: document.getElementById("result"),

    showBands: (data) => {
        let counter = 0;
        for(let band of data) {
            counter++;
            uiService.result.innerHTML += (
                `
                <div class = "col-2">${counter}</div>
                <div class = "col-2">${band.name}</div>
                <div class = "col-2">${band.active === true? "Active" : "Inactive"}</div>
                <div class = "col-2">${band.tags.map(tag => `${tag}`)}</div>
                <div class = "col-2">${band.members.map((member) => {
                    if(member.former) {
                        return 
                    } else {
                        return (`${member.name} <br>`)
                    }
                }).join()}</div>
                <div class="col-2">${band.albums.length}</div>
                `
            )
        }
    }
}
navService.init();




// function searchBand()
// // {
// // 	let newBands = bands.filter((x) => x.name.match(/////))
// // 	console.log(newBands);
	
// // 	page = 1;
// // }
