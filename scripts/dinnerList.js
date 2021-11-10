import { useEntries, getEntries, saveEntries } from "./dinnerDataProvider.js";
import { Entries } from "./dinnerCard.js";
import { EntryForm } from "./dinnerForm.js";

export const EntriesList = () => {
    getEntries()
    .then(() => {
        let entriesArray = useEntries()
        let entriesHTML = "";

        entriesArray.forEach(singleEntryObj => {
            entriesHTML += Entries(singleEntryObj)
        })


        // contentTarget.innerHTML = `
        // <h2>Notes</h2>
        // ${entriesHTML}  

        document.querySelector("#dinner-guests").innerHTML = `
        <h2>Dinner Guests</h2>
        ${entriesHTML}
        `
    })
}