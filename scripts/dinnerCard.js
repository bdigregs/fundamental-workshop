import { deleteGuest, getEntries } from "./dinnerDataProvider.js"
import { EntriesList } from "./dinnerList.js"
import { EntryEditForm } from "./entryEditForm.js"

export const Entries = (entries) => {
    return `
        <section class="entry-card">
            <div class="name">${entries.name}</div>
            <div class="age">${entries.age}</div>
            <div class="favorite-dish">${entries.favoriteDish}</div>
            <div class="right-handed">${entries.rightHanded}</div>
            <img id="image" src="${entries.imageUrl}" alt="${entries.name}">
            <button id="edit--${entries.id}">Edit</button>
            <button id="deleteGuest--${entries.id}">Delete</button>

        </section>
    `
}

//Edit Button
const eventHubEdit = document.querySelector("body")

eventHubEdit.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("edit")) {
      const entryId = +eventObject.target.id.split("--")[1]
      EntryEditForm(entryId);
    }        
})


//Delete Button
const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteGuest")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    console.log("Delete button pressed")
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
    deleteGuest(idToDelete)
    .then(EntriesList)
  }
});




