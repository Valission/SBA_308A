import { characters } from "./API_Data.js"
export {selected_value}
let Characters = document.getElementById('characters')

let selected_value = document.querySelector('select').value
function con(){
    selected_value = document.querySelector('select').value
    console.log(selected_value)
}
Characters.addEventListener('change',con)
console.log(selected_value)
console.log(characters)