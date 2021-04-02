import React, { useState, useRef, useEffect} from 'react'

const State1 = () => {

    let inputRef = useRef()

    const [itemFruit, setItemFruit] = useState([])
    const [itemLocalFruit, setItemLocalFruit] = useState([])

    useEffect(() => {
        fetch(process.env.FETCH_API)
        .then(result => {
            return result.json()
        })
        .then(data => {
            setItemFruit(data)
            setItemLocalFruit(data)
        })
    }, [onInputHandler])


    const onInputHandler = (e) => {
        e.preventDefault()
        let { value } = e.target
        let search = RegExp(value, 'ig')

        const result = itemLocalFruit.filter(item => {
            return search.test(item.itemName)
        })

        setItemFruit(result)

    }

    return(
        <div className="content">
            <input ref={inputRef}
            onChange={onInputHandler}
            />
            <br/>
            {
                itemFruit.map((item, index) => {
                    return(
                        <div key={index}>
                            {item.itemName}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default State1