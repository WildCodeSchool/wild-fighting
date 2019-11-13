import React,{Component} from 'react';
import './FightCard.css'

class FightCard extends Component {
    constructor(props) {
        super(props);
        const [type1, type2] = props.type.map(x => {
            switch (x) {
                case "ground":
                case "rock":
                    return "fighting"
                case "ice":
                    return "water"
                case "grass":
                case "bug":
                    return "plant"
                case "poison":
                    return "psychic"
                case "electric":
                    return "electrik"
                default:  
                    return x           
            }
        })
        this.state = {
            type1,
            type2
        }
    }

    render(){
        const { name, hp, image } = this.props
        const { type1, type2 } = this.state
        return(
            <section className="combat-card element-animation">
                <div className="combat-card--content">
                    <div className="combat-card--info">
                        <span className="combat-card--info-name">{name}</span>
                        <div>
                            <p className="combat-card--info-pv">{hp} HP</p>
                            <div>
                                {type1 && <img src={`https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${type1}.png`} className="type--image" alt={`type ${type1}`} />}
                                {type2 && <img src={`https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${type2}.png`} className="type--image" alt={`type ${type2}`} />}
                            </div>
                        </div>
                    </div>  
                    <img className="pokemon-animation combat-card--avatar" alt="Pokémon" src={image}/>
                    <div className="combat-card--atks">
                        <button className="combat-card--atks-panel">
                            <span className="combat-card--atks-panel-name">
                                Morsure
                            </span>
                            <span className="combat-card--atks--panel-damg">20</span>
                        </button>
                        <button className="combat-card--atks-panel">
                            <span className="combat-card--atks-panel-name">
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

export default FightCard
