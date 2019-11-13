import React, { Component } from 'react';
//import Pokedex from './Pokedex/Pokedex';
import Modal from 'react-responsive-modal';
import PokeList from './PokeList/PokeList';
 
class ModalPage extends Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div className = "Modal">
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
         <PokeList />
        </Modal>
      </div>
    );
  }
}
 
  export default ModalPage; 