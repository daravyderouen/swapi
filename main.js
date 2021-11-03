

let button =document.querySelector("button")


const buttonClicked = () => {
    //alert('button clicked')
//button.addEventListener('click', buttonClicked)

    axios.get('https://swapi.dev/api/planets/2') 
    .then(response =>{
        //console.log("RESPONSE", response.data)
        for (i=0; i<res.data.residents.length; i++){
            
            axios.get(`${res.data.residents}`)
            .then(res => {
                 ("<h2>`${res.data.residents}`</h2>", response)
            })
        }
    })
    .catch(error => {
        console.log("ERROR", error)
    })
}  
 
    document.querySelector("button").addEventListener("click", buttonClicked)



