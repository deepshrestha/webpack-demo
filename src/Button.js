import React from 'react'

const Button = ({ele}) => {

    let colors = [
        "red",
        "green",
        "blue"
    ]

    const onHightlightColor = (ele, color) => {
        console.log(ele, "onHightlightColor")
        //console.log(ele.current.innerHTML)
        ele.current.style.color = "white"
        ele.current.style.backgroundColor = color
        hasHighlighted();
    }

    const hasHighlighted = () => {
        console.log("hasHighlighted")
        console.log("Color has been changed!");
    }

    return (
        <div>
            {
                colors.map((color, index) => {
                    return(
                        <button key={index} 
                            color={color}
                            style={{backgroundColor: color, color: "white"}}
                            onClick={() => onHightlightColor(ele, color)}
                        >
                        {color}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Button
