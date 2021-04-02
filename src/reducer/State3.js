import React, { useRef, useEffect, useReducer} from 'react'
import { useHttp } from './../hooks/useHttp'
import reducer from './appReducer'

const State3 = () => {

    let inputRef = useRef()
    let itemLocalFruit = useHttp()   

    const [state, dispatch] = useReducer(reducer, [])

    useEffect(() => {

        inputRef.current.focus()

        fetch('http://localhost:3000/data')
        .then(result => {
            return result.json()
        })
        .then(data => {
            dispatch(
                {
                   type: 'FETCH_DATA',
                   payload: data
                }
            )
        })
    }, [onInputHandler])


    const onInputHandler = (e) => {
        e.preventDefault()

        let { value } = e.target
        dispatch(
            {
                type: 'FILTER',
                payload: {
                    searchItem: value,
                    data: itemLocalFruit
                }
            }
        )
    }

    const onDeleteData = (e, item) => {
        e.preventDefault()
        dispatch(
            {
                type: 'DELETE',
                payload: item
            }
        )
    }

    const onAddData = (item) => {

        let { value } = inputRef.current

        let newItem = {
            id: Date.now(),
            itemName: value
        }

        dispatch(
            {
                type: 'ADD',
                payload: newItem
            }
        )

        inputRef.current.value = ''
        inputRef.current.focus()
    }

    //console.log(state)

    return(
        <div className="content">
            <input ref={inputRef}
            />
            <button onClick={onAddData}>Add</button>
            <br/>
            {
                state.map((item, index) => {
                    return(
                        <div key={index}>
                            {item.itemName} -
                            <a href="#" onClick={(e) => onDeleteData(e, item)}>Delete</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default State3