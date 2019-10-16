import React, {Component} from 'react';
import './ChooseCard.css';

class ChooseCard extends Component {
    constructor(props) {
        super(props)
        this.state={
            image : props.image,
            name: props.name,
            type: props.type,
            description: props.desc,
            atks:props.atks,
            pv:props.pv
        }
    }
    render(){
        return(
            <section className="choose-card">
                <div className="choose-card--content">
                    <div className="choose-card--info">
                        <span className="choose-card--info-name">{this.state.name}</span>
                        <div>
                            <p className="choose-card--info-pv">{this.state.pv} PV</p>
                            <img className="choose-card--info-type" alt="Type" src={this.state.type}/>
                        </div>
                    </div>  
                    <img className="choose-card--avatar" alt="Pokémon" src={this.state.image}/>
                    <div className="choose-card--atks">
                        <div className="choose-card--atks-panel">
                            <span className="choose-card--atks-panel-name">Morsure</span>
                            <span className="choose-card--atks--panel-damg">20</span>
                        </div>
                        <div className="choose-card--atks-panel">
                            <span className="choose-card--atks-panel-name">Morsure</span>
                            <span className="choose-card--atks--panel-damg">20</span>
                        </div>
                    </div>
                    <p className="choose-card--desc">{this.state.description}</p>
                </div>
            </section>
            )
    }
}

export default ChooseCard