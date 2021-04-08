// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter( match =>
         match.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, charater) {
    return drivers.filter( match =>
        match.startsWith(charater))
}




function matchName(drivers) {
    return drivers.filter( match =>
         match.name === "Bobby" )}