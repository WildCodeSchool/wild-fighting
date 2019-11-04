import React, {Component} from 'react';
import './CardSelect.css';

class CardSelect extends Component {
    componentDidMount(){
        this.props.type.map(x=>{
            let element = ""
            switch (x) {
                case "ground":
                    case "rock":
                        x="fighting"
                        break;
                case "ice":
                    x="water"
                    break;
                case "grass":
                    case "bug":
                        x="plant"
                        break;
                case "poison":
                    x="psychic"
                    break; 
                default:
                    break;             
            }
            element +=`<img src="https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${x}.png" class="type--image" />`
            document.querySelector('.types'+this.props.id).innerHTML += element
            return true
        })
    }
    render(){
        return(
            <section className="choose-card element-animation">
                <div className="choose-card--content">
                    <div className="choose-card--info">
                        <span className="choose-card--info-name">{this.props.name}</span>
                        <div>
                            <p className="choose-card--info-pv">{this.hp} HP</p>
                            <div className={`types${this.props.id}`}></div>
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
