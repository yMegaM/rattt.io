import React, { Component } from 'react'
import styled from 'styled-components'
import {
    Jumbotron
} from 'react-bootstrap'
import $ from 'jquery'
import cheet from 'cheet.js'

import TTT from 'components/TTTGrid'

export default class TradicionalScreen extends Component{
    render(){
        return(
            <main style={{
                alignItems: 'center',
            }} className="darkBg contentDiv">
                <TTT/>
            </main>

        );
    }
}