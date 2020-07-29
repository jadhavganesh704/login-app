import React, { Component } from 'react';
import Input from '../../shared/input';
import Button from '../../shared/button';
import history from './../../history';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          errorEmail: '',
          errorPassword: '',
        };
      }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
          errorEmail:'',
          errorPassword:''
        });
    };

    validation = (email, password) => {
        var regxEmail=/^([a-z 0-9\\.-]+)@([a-z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
        var regxPassword=/(?=.*?[A-Z])/;
        if(email === '') {
            this.setState({
                errorEmail: 'Required',
            })
            return true;
        } 
        if (!regxEmail.test(email)) {
            this.setState({
                errorEmail: 'email must be a valid email',
            })
            return true;
        }
        if(password === '') {
            this.setState({
                errorPassword: 'No password provided.'
            })
            return true;
        } 
        if(!regxPassword.test(password)) {
            this.setState({
                errorPassword: 'Password should contain one uppercase letter.'
            })
            return true;
        }
        return false;
    }
    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        if(!this.validation(email, password)){
            // console.log("Submitting");

            //if you can use this Username/email: Clarion@clarion.com and Password: Clarion123
            // if(email === 'Clarion@clarion.com' || password === 'Clarion123'){
            //     localStorage.setItem('is-login', email);
            //     history.push('/dashboard');
            // } else {
            //     alert('Invalid Username or Password...!!!  Username/email: Clarion@clarion.com and Password: Clarion123');
            // }

            // You Can use Any email or Password
            localStorage.setItem('is-login', email);
            history.push('/dashboard');

        }

    };
    render() {
        return (
            <div>
                <div className="ui center aligned middle aligned grid" style={{ height: '100vh' }}>
                    <div className="column" style={{ maxWidth: 450 }}>
                        <div className="ui form" size='large'>
                            <div className="ui segment">
                                <div className="field">
                                    <Input
                                        name="email"
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='E-mail address'
                                        value={this.state.email}
                                        handleChange={this.handleChange}
                                        errors={this.state.errorEmail}
                                    />
                                </div>
                                <div className="field">
                                    <Input
                                        name="password"
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        value={this.state.password}
                                        handleChange={this.handleChange}
                                        errors={this.state.errorPassword}
                                    />
                                </div>
                                <Button color='teal' fluid size='large' value="Login" handleSubmit={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default LoginForm