let entries = []

export const useEntries = () => {
    return entries.slice()
}

export const getEntries = () => {
    return fetch('http://localhost:8088/entries')
    .then(response => response.json())
    .then(parsedEntries => { 
        entries = parsedEntries
    })
}

export const saveEntries = entry => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
}

export const deleteGuest = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
    .then(getEntries)
}

export const updateEntry = entry => {

    return fetch(`http://localhost:8088/entries/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })

}

