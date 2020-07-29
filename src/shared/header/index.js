import React from 'react'
import history from './../../history';

const setUsername = () => {
    var username = localStorage.getItem('is-login').split('@');
    return `Hello ${username[0]}`;
}
const logout = () => {
    localStorage.removeItem('is-login');
    history.push('/login')
}
const InputComponent = (props) => (
    <div className="ui grid">
        <h4 className="ui header left floated">{setUsername()}</h4>
        <div className="right floated two wide column">
            <div className="ui small negative button" onClick={logout}>LogOut</div>
        </div>
    </div>
)

export default InputComponent;