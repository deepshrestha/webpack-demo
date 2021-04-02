var itemFruit = [1,2,3,4,5]
var itemLocalFruit = [1,2]

const result = itemFruit.filter(item => {
    if(item == 1)
        return item

    setItemFruit(result)
})

console.log(result)

console.log(itemLocalFruit)