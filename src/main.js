let test = dom.find("#test")[0]
console.log(test)
dom.style(test, 'color', 'red')
dom.each(test, (item) => {
    console.log(item)
})