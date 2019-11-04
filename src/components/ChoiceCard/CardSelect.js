import React, {Component} from 'react';
import './CardSelect.css';

class CardSelect extends Component {
    constructor(props){
        super(props)
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
        return(
            <section className="choose-card element-animation">
                <div className="choose-card--content">
                    <div className="choose-card--info">
                        <span className="choose-card--info-name">{this.props.name}</span>
                        <div>
                            <p className="choose-card--info-pv">{this.props.hp} HP</p>
                            <div>
                                {this.state.type1 && <img src={this.state.type1} className="type--image" alt="type_logo" />}
                                {this.state.type2 && <img src={this.state.type2} className="type--image" alt="type_logo" />}
                            </div>
                        </div>
                    </div>  
                    <img className="choose-card--avatar" alt="Pokémon" src={this.props.image}/>
                    <div className="choose-card--atks">
                        <div className="choose-card--atks-panel">
                            <span className="choose-card--atks-panel-name">
                                Morsure
                            </span>
                            <span className="choose-card--atks--panel-damg">20</span>
                        </div>
                        <div className="choose-card--atks-panel">
                            <span className="choose-card--atks-panel-name">
                                Morsure
                            </span>
                            <span className="choose-card--atks--panel-damg">20</span>
                        </div>
                    </div>
                </div>
            </section>
            )
    }
}

export default CardSelect
