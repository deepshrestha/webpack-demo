import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return(
        <>
            <Link to="/p1">
                Page 1
            </Link>
            <Link to="/p2">
                Page 2
            </Link>        
        </>
    )
}

export default Menu