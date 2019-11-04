import React,{Component} from 'react';
import './CardFight.css'

class CardFight extends Component {
    constructor(props) {
        super(props);
        this.state={
            type1:null,
            type2:null
        }
    }
    componentDidMount(){
        const result = this.props.type.map(x=>{
            switch (x) {
                case "ground":
                    case "rock":
                        x="fighting"
                    return x 
                case "ice":
                    x="water"
                    return x 
                case "grass":
                    case "bug":
                        x="plant"
                    return x 
                case "poison":
                    x="psychic"
                    return x 
                case "electric":
                    x="electrik"
                    return x 
                default:  
                return x           
            }
        })
        if(this.props.type.length>=2){ 
            this.setState({type1:`https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${result[0]}.png`})
            this.setState({type2:`https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${result[1]}.png`})
        }else{
            this.setState({type1:`https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${result[0]}.png`})
        }
    }
    render(){
        const {name,hp,image}=this.props
        const {type1,type2}=this.state
        return(
            <section className="combat-card element-animation">
                <div className="combat-card--content">
                    <div className="combat-card--info">
                        <span className="combat-card--info-name">{name}</span>
                        <div>
                            <p className="combat-card--info-pv">{hp} HP</p>
                            <div>
                                {type1 && <img src={type1} className="type--image" alt="type_logo" />}
                                {type2 && <img src={type2} className="type--image" alt="type_logo" />}
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

export default CardFight
