import React,{Component} from 'react';
import './CombatCard.css'

class CombatCard extends Component {
    constructor(props) {
        super(props);
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
            <section className="combat-card element-animation">
                <div className="combat-card--content">
                    <div className="combat-card--info">
                        <span className="combat-card--info-name">{this.state.name}</span>
                        <div>
                            <p className="combat-card--info-pv">{this.state.pv} PV</p>
                            <img className="combat-card--info-type" alt="Type" src={this.state.type}/>
                        </div>
                    </div>  
                    <img className="pokemon-animation combat-card--avatar" alt="Pokémon" src={this.state.image}/>
                    <div className="combat-card--atks">
                        <button className="combat-card--atks-panel">
                            <span className="combat-card--atks-panel-name">
                                <img className="combat-card--info-type" alt="Type" src={this.state.type}/>
                                Morsure
                            </span>
                            <span className="combat-card--atks--panel-damg">20</span>
                        </button>
                        <button className="combat-card--atks-panel">
                            <span className="combat-card--atks-panel-name">
                                <img className="combat-card--info-type" alt="Type" src={this.state.type}/>
                                Morsure
                            </span>
                            <span className="combat-card--atks--panel-damg">20</span>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default CombatCard