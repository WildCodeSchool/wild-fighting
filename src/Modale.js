import React, { Component } from 'react';
import Pokedex from './Pokedex';
import Modal from 'react-responsive-modal';
 
class Modale extends Component {
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
         <Pokedex addPokemon={this.props.addPokemon}/>
        </Modal>
      </div>
    );
  }
}
 
  export default Modale; 