

score(rolls) {

    const rollFrames = [];
    while(rolls.length) rollFrames.push(rolls.splice(0, 2))
    console.table(rolls)
}
console.log("sd")
score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])