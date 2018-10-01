import React, { Component } from 'react'
import styled from 'styled-components'
import 'styles/404.css'

export default class NotFound extends Component{


    render(){

        return(
            <div id="bg" >
                <p className="blue logo nf">404</p>
                <p className="white mt">Nossos ratos não encontraram a página!</p>
            </div>
        );
    }

}