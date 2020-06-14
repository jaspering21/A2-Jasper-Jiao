import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header class="nav-home">
                <div class="nav-container">
                    <h1 class="nav-logo" style={{transform: "translate(-40rem, 25px)"}}>
                        <Link class="link" to="/">BuyBAY</Link>
                    </h1>
                    <Link class="link Search" to="/search">
                        <button style={{transform: "translate(39rem, -1rem)"}}>Search</button>
                    </Link>
                    <Link class="link sign-up" to="/signup">
                        <button style={{transform: "translate(40rem, -1rem)"}}>Sign Up</button>
                    </Link>
                    <Link class="link Upgrade" to="/upgrade">
                        <button style={{transform: "translate(17rem, -1rem)"}}>Upgrade</button>
                    </Link>
                    <Link class="link User" to="/profile">
                        <button style={{transform: "translate(2rem, -1rem)"}}>Profile</button>
                    </Link>
                </div>
            </header>
        )
    }
}
