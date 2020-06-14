import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginContainer from '../components/LoginContainer'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <LoginContainer/>
                <Footer/>
            </div>
        )
    }
}
