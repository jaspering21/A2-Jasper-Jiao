import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignupContainer from '../components/SignupContainer'

const emailtoken = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

export default class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: undefined,
          email: undefined,
          password: undefined,
          formError: {
            username: '',
            email: '',
            password: ''
          },
          result: ''
        }
      }

    onChange = e => {
        const { name, value } = e.target;
        let formError = this.state.formError;
        switch (name) {
          case 'username':
            formError.username = value.length < 3 ? 'minimum 3 characters required' : '';
            break;
          case 'email':
            formError.email = emailtoken.test(value) ? '' : 'invalid email address';
            break;
          case 'password':
            formError.password = value.length < 6 ? 'minimum 6 characters required' : '';
            break;
          default:
            break;
        }
        this.setState({ formError, [name]: value });
      }
    
      formValid = ({ formError, ...rest }) => {
        let valid = true;
        Object.values(formError).forEach(val => { val.length > 0 && (valid = false) });
        Object.values(rest).forEach(val => { val === undefined && (valid = false) });
        return valid;
      }
    render() {
        return (
            <div>
                <Navbar/>
                <SignupContainer/>
                <Footer/>
            </div>
        )
    }
}
