import { EntriesList } from "./dinnerList.js"
import { saveEntries } from "./dinnerDataProvider.js"

const contentTarget = document.querySelector("#container")

export const EntryForm = () => {
    contentTarget.innerHTML =  `
    <section>

        <div> Name: <input class="form-control" type="text" id="name">
        </div>
        <div>Age: <input class="form-control" type="number" id="age">
        </div>
        <div>Favorite Dish: <input class="form-control" type="text" id="favorite-dish"> 
        </div>
        <div>Right handed?<input class="form-control" type="text" id="right-handed">
        </div>
        <div>imageUrl<input class="form-control" type="text" id="imageUrl">
        </div>
        <button id="saveEntry">Save Guest</button>
        
    </section>
    
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {

        const newEntry = {
            name: document.querySelector("#name").value,
            age: document.querySelector("#age").value, 
            favoriteDish: document.querySelector("#favorite-dish").value, 
            rightHanded: document.querySelector("#right-handed").value,
            imageUrl: document.querySelector("#imageUrl").value
        }

        console.log(newEntry)
        
        saveEntries(newEntry)
        .then(EntriesList)
    }
})
