import React, { useEffect, useState  } from 'react'

export const useHttp = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/data')
        .then(result => {
            return result.json()
        })
        .then(data => {
            setData(data)
        })
    }, [])

    return data
}