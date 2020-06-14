import React, { Component } from 'react'

export default class PayButton extends Component {
    render() {
        return (
            <div class="paybuttons">
                <input class="paybutton" type="submit" name="submit" value="Process and Pay" />
            </div>
        )
    }
}
