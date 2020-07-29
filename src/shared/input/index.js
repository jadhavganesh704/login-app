import React from 'react'

const InputComponent = (props) => (
    <div className={`${props.errors ? 'error field' : ''}`}>
        <div className={`ui ${props.fluid ? 'fluid' : ''} ${props.iconPosition} icon input`}>
            <input
                type={props.type || 'text'}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            />
            <i aria-hidden="true" className={`${props.icon} icon`}></i>
        </div>
        {props.errors && (
            <div className="ui above pointing prompt label" role="alert" aria-atomic="true" >{props.errors}</div>
        )}
    </div>
)

export default InputComponent;