import { EntriesList } from "./dinnerList.js";
import { getEntries, useEntries } from "./dinnerDataProvider.js";

export const EntriesSelect = () => {
    getEntries()
    .then(() => {
        let selectFunc = useEntries()
        render(selectFunc)
    })
}

const render = dinnerCollection => {
    document.querySelector("#dropdown").innerHTML = `
    <select class="dropdown" id="din_dropdown"><option value="0">What is your favorite dinner?</option>

    ${dinnerCollection.map((dinnerObj) => {
        const dinner = dinnerObj.favoriteDish

        return `<option>${dinner}</option>
        `
    })}
    </select>
    
    `
}

document.querySelector("body").addEventListener("change", (eventObject) => {
    if (eventObject.target.id === "din_dropdown") 
    {
        EntriesList(eventObject.target.value)
    }
})