import React, { useState, useRef, useEffect} from 'react'

const State1 = () => {

    let inputRef = useRef()

    const [{itemFruit, itemLocalFruit}, setData] = useState(
        {
            itemFruit: [],
            itemLocalFruit: []
        }
    )

    useEffect(() => {
        fetch(process.env.FETCH_API)
        .then(result => {
            return result.json()
        })
        .then(data => {
            setData(
                {
                    itemFruit: data,
                    itemLocalFruit: data
                }
            )
        })
    }, [onInputHandler])


    const onInputHandler = (e) => {
        e.preventDefault()
        let { value } = e.target
        let search = RegExp(value, 'ig')

        const result = itemLocalFruit.filter(item => {
            return search.test(item.itemName)
        })

        setData(
            {
                itemFruit: result,
                itemLocalFruit
            }
        )

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