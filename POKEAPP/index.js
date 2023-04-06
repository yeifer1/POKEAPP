let data = JSON.parse(poke_file).result
let data_input = document.getElementById("data_input")
let data_info = document.getElementById("data_info")

function find_data(){

  let input_value = data_input.value  // leo el contenido dentro de mi input
  let result = find_result(input_value)

  data_info.innerHTML = `
  <p>${result.name}</p> 
  <img src="${result.ThumbnailImage}">
  <p>Type: ${result.type}</p>
  <p>Weight: ${result.weight}</p>
  <p>Height: ${result.height}</p> 
  <p>Abilities: ${result.abilities}</p>
  <p>Weakness: ${result.weakness}</p>
  `
}
function find_result(input_value){
  for(let i =  0; i < data.length; i++){
    if (data[i].name== input_value){
      return data[i]
    }
  }



    for(let i =  0; i < data.length; i++){
      if (data[i].slug== input_value){
        return data[i]
      }
    }

    for(let i =  0; i < data.length; i++){
      if (data[i].id== input_value){
        return data[i]
      }
    }
  }
   
  

 

  
 


