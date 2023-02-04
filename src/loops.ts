let arrayOfStrings: string[] = ["first","second","third"];

for (const key in arrayOfStrings) {
    const itemValue = arrayOfStrings[key]
    console.log(`arrayOfStrings[${key}] = ${itemValue}`)
}

for (const value of arrayOfStrings) {
    console.log(`value = ${value}`)
}

