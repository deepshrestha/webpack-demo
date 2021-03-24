import React, { useState, useEffect, useRef } from 'react'
import Button from './Button'

const FunctionHooksNew = () => {

    let itemFruits = [
        { id:1, itemName: "Apple" },
        { id:2, itemName: "Banana" },
        { id:3, itemName: "Kiwi" },
        { id:4, itemName: "Orange" },
        { id:5, itemName: "Water Melon" },
        { id:6, itemName: "Apricots" },
        { id:7, itemName: "Blackberries" },
        { id:8, itemName: "Blueberries" },
        { id:9, itemName: "Blackcurrant" },
        { id:10, itemName: "Avocado" }
    ]

    const [itemFruit, setItemFruit] = useState(itemFruits)
    const [message, setMessage] = useState('It does not have message value');

    let divElement = useRef();

    useEffect( () => {
        console.log("useeffect")
        //console.log(divElement.current.innerHTML)        
        return(
            setMessage("Hi, Good Morning CIBT students!")
        )
    }, [divElement, onInputHandler])

    const onInputHandler = (event) => {
        //console.log(event.target.value)

        let value = event.target.value

        let search = new RegExp(value, 'ig')

        const result = itemFruits.filter(itemFruit => {
            return search.test(itemFruit.itemName)
        })

        //console.log(result)
        setItemFruit(result)
    }

    return(
        <React.Fragment>
            <div ref={divElement}>
                {message}
            </div>
            <br />
            <Button ele={divElement} />
            <br />
            <input name="fruits" onChange={(event) => onInputHandler(event)} />
            {                
                itemFruit.map((fruit, index) => {
                    return(
                        <div key={index}>
                            {fruit.itemName}
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default FunctionHooksNew