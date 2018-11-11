import React, { Component } from 'react'
import {
    Modal,
    Button
} from 'react-bootstrap'
// import styled from 'styled-components'

import 'styles/master.css'

import NavBox from 'components/NavBar'
import SideBar from 'components/SideBar'

import $ from 'jquery'
import cheet from 'cheet.js'

export default class Master extends Component{

    constructor(){
        super();

        this.state = {
            modalVisible: false,
            modalTitle: '',
            modalContent: '',
            modalError: '',
            sideBar: false
        }
    }

    handleError = (msg) => {
        this.setState({modalError: msg});
    }
    handleClose = () => {
        this.handleError('');
        this.setState({modalVisible: false});
    }
    handleOpen = () => {
        this.setState({modalVisible: true});
    }
    toggleSidebar = (pos) => {
        if(typeof(pos) !== 'boolean') pos = !this.state.sideBar;
        this.setState({sideBar: pos});
    }

    ratttAlert = (modalTitle, modalContent, modalButtons) => {
        this.setState({modalVisible: true, modalTitle, modalContent, modalButtons});
    }

    render(){
        cheets();

        window.ratttAlert = this.ratttAlert;

        return(
            <div className="master">
                <RatttAlert {...this.state} handleError={this.handleError} handleClose={this.handleClose} />
                <SideBar visible={this.state.sideBar} toggleSidebar={this.toggleSidebar} />
                <NavBox sidebar={this.state.sideBar} brandOnClick={this.toggleSidebar} />
                
                {this.props.children}
            </div>
        );
    }
}

const RatttAlert = (props) => {
    let ModalButtons = props.modalButtons;

    return(
        <Modal show={props.modalVisible} onHide={props.handleClose} dialogClassName="darkDialog">
            <Modal.Header>
                <Modal.Title className="white mt"><span className="white mt">{props.modalTitle}</span></Modal.Title>
            </Modal.Header>
            <Modal.Body className="white st">{props.modalContent}<div className="ssst" style={{textAlign: 'right', color: 'red'}}>{props.modalError}</div></Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.handleClose}>Fechar</Button>
                {
                    ModalButtons
                    ? <ModalButtons handleError={props.handleError} handleClose={props.handleClose}/>
                    :null
                }
            </Modal.Footer>
        </Modal>    
    )
};

const cheets = () => {
    cheet('4 0 4', () => {
        window.open('/404', '_self');
    });
    cheet('p i n k', () => {
        // $('#mark').html('Pink Mode');
        $('body').css('--primary', 'var(--pink)');
        setInterval(() => {
            let $el = $('.btn-outline-primary');
            $el.each(function(){
                let act = $(this);
                act.removeClass('btn-outline-primary');
                act.addClass('btn-outline-primaryPink');
            })
            
            $el = $('.btn-primary');
            $el.each(function(){
                let act = $(this);
                act.removeClass('btn-primary');
                act.addClass('btn-primaryPink');
            });
        }, 10);
    });
    cheet('u n i c o r n', () => {
        $('body').addClass('rainbow');
    })
}