import React from "react"

export const Input = (props) => {
    return (
        <div className="input">
            {props.text.value}
        </div>
    )
}