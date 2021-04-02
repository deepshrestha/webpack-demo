import React, { useState, useEffect, useRef } from 'react'

const FunctionHooks = () => {

    const [itemFruit, setItemFruit] = useState([])
    const [itemLocalFruit, setItemLocalFruit] = useState([])
    const [message, setMessage] = useState('');

    let divElement = useRef();

    useEffect( () => {
        //console.log("useeffect")

        fetch(process.env.FETCH_API)
        .then(result => {
            return result.json()
        })
        .then(data => {
            //console.log(data)
            setItemFruit(data)
            setItemLocalFruit(data)
        })

        return(
            setMessage("Hi, Good Morning CIBT students!")
        )
    }, [divElement, onHightlightColor])

    const onHightlightColor = (ele, color) => {
        //console.log(ele.current.innerHTML)
        ele.current.style.color = "white"
        ele.current.style.backgroundColor = color
    }

    const onInputHandler = (event) => {
        //console.log(event.target.value)

        let { value } = event.target

        let search = new RegExp(value, 'ig')

        const result = itemLocalFruit.filter(item => {
            return search.test(item.itemName)
        })
        
        setItemFruit(result)

        /* fetch("http://www.json-generator.com/api/json/get/cfrsCsyEpu?indent=2")
        .then(result => {
            return result.json()
        })
        .then(data => {
            const result = data.filter(item => {
                return search.test(item.itemName)
            })
            setItemFruit(result)
        }) */
    }

    return(
        <React.Fragment>
            <div ref={divElement}>
                {message}
            </div>
            <br />
            <button 
                style={{backgroundColor: 'red', color: "white"}}
                onClick={() => onHightlightColor(divElement, 'red')}
            >Red
            </button>
            <button 
                style={{backgroundColor: 'green', color: "white"}}
                onClick={() => onHightlightColor(divElement, 'green')}
            >Green
            </button>
            <button 
                style={{backgroundColor: 'blue', color: "white"}}
                onClick={() => onHightlightColor(divElement, 'blue')}
            >Blue
            </button>
            <br />
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

export default FunctionHooks