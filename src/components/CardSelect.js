import React, {Component} from 'react';
import './CardSelect.css';

class CardSelect extends Component {
    constructor(props) {
        super(props)
        this.type = this.type.bind(this)
    }
    type(type){
        let typeResult = []
        type.map(type=>{
            switch (type) {
                case "fire":
                    typeResult.push('fire')
                    break;
                case "ice":
                    typeResult.push('water')
                    break;
                case "water":
                    typeResult.push('water')
                    break;
                case "plant":
                    typeResult.push('plant')
                    break;
                case "grass":
                    typeResult.push('plant')
                    break;
                case "bug":
                    typeResult.push('plant')
                    break;
                case "electric":
                    typeResult.push('electric')
                    break;
                case "psychic":
                    typeResult.push('psychic')
                    break;
                case "poison":
                    typeResult.push('psychic')
                    break;
                case "fighting":
                    typeResult.push('fighting')
                    break;
                case "ground":
                    typeResult.push('fighting')
                    break;
                case "rock":
                    typeResult.push('fighting')
                    break;
                case "normal":
                    typeResult.push('normal')
                    break;
                case "ghost":
                    typeResult.push('ghost')
                    break;
                case "dragon":
                    typeResult.push('dragon')
                    break;
                case "steel":
                    typeResult.push('steel')
                    break;
                case "fairy":
                    typeResult.push('fairy')
                    break;
                case "flying":
                    typeResult.push('flying')
                    break;
                default:
                    typeResult.push()
                    break;
            }
            
            return typeResult
    })
    return typeResult
    }
    componentDidMount(){
        const typeResult = this.type(this.props.type)
        let element = ""
            for(let i = 0;i<typeResult.length;i+=1){
                element +=`<img src="https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${typeResult[i]}.png" class="type--image" />`
            }
            document.querySelector('.types'+this.props.id).innerHTML += element
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
