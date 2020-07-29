import React from 'react'

const ButtonComponent = (props) => (
    <button
        className={`ui ${props.fluid ? 'fluid' : ''} ${props.color} ${props.size} button`}
        onClick={props.handleSubmit}
    >
        {props.value}
    </button>
)

export default ButtonComponent;