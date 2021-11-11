import {useEntries} from "./dinnerDataProvider.js"
import { EntriesList } from "./dinnerList.js"
import { updateEntry } from "./dinnerDataProvider.js"
// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector("#container")

export const EntryEditForm = (entryId) => {
    // Give this component access to our application's notes state
    const allEntries = useEntries();

    // Find the note that we clicked on by its unique id
    const entryWeWantToEdit = allEntries.find(singleEntry=> singleEntry.id === entryId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Guest</h2>
        <input type="text" id="guest-name" value="${entryWeWantToEdit.name}" />
        <input type="number" value="${entryWeWantToEdit.age}" id="guest-age" />
        <input type="text" value="${entryWeWantToEdit.favoriteDish}" id="fave-dish" />
        <input type="text" id="left-handed" value="${entryWeWantToEdit.rightHanded}" />
        <input type="text" id="image-edit" value="${entryWeWantToEdit.imageUrl}" />
        <button id="saveChanges--${entryWeWantToEdit.id}">Save Changes</button>
    `
}

//Saving changes after editing
const eventHubSave = document.querySelector("body")

eventHubSave.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveChanges")){
        event.preventDefault()
       
       
            
        // Make a new object representation of a note
        const editedEntry = {
            id: parseInt(event.target.id.split("--")[1]),
            name: document.querySelector("#guest-name").value,
            age: document.querySelector("#guest-age").value, 
            favoriteDish: document.querySelector("#fave-dish").value, 
            rightHanded: document.querySelector("#left-handed").value,
            imageUrl: document.querySelector("#image-edit").value 
        }
// console.log(editedEntry)

        // Send to json-server and refresh the list
        updateEntry(editedEntry).then(EntriesList)

}
})

