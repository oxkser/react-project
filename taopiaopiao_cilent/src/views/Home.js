import React, { Component } from 'react'
import TarbarS from "../components/TarBarS";
export default class Home extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <TarbarS homeobj={this}></TarbarS>
            </div>
        )
    }
}
