import { deleteGuest, getEntries } from "./dinnerDataProvider.js"
import { EntriesList } from "./dinnerList.js"

export const Entries = (entries) => {
    return `
        <section class="entry-card">
            <div class="name">${entries.name}</div>
            <div class="age">${entries.age}</div>
            <div class="favorite-dish">${entries.favoriteDish}</div>
            <div class="right-handed">${entries.rightHanded}</div>
            <img id="image" src="${entries.imageUrl}" alt="${entries.name}">
            <button id="deleteGuest--${entries.id}">Delete</button>

        </section>
    `
}

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


