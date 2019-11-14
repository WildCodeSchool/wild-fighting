import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import PokeList from '../PokeList/PokeList';
import './ModalPage.css';
import Pokeball from '../assets/pokeball-3d.png';
import Pict from '../assets/pict.png'
 
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
      <div className="wrap">
        <div className="bounce-in-top">
        <img className="pokeimg" src={Pokeball} alt="pokeball" />
        </div>
        <div className="tracking-in-contract-bck-top">
        <img className="pokelogo" src={Pict} alt="logo pokemon" />
        </div>
        <div className = "Modal">
          <button className="butt" onClick={this.onOpenModal}>Open modal</button>
          <Modal open={open} onClose={this.onCloseModal} center>
          <PokeList modalState={this.props.modalState} />
          </Modal>
        </div>
      </div>
    );
  }
}
 
  export default ModalPage; 