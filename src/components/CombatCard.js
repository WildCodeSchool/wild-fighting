import React,{Component} from 'react';
import './CombatCard.css'

class CombatCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            key:props.key,
            image : props.image,
            name: props.name,
            type: props.type,
            description: props.desc,
            atks:props.atks,
            pv:props.pv
        }
        this.type = this.type.bind(this)
    }
    type(type){
        let typeResult = []
        type.map(type=>{
            if(type==="fire"){
                return typeResult.push('fire')
            }
            else if(type==="water"){
                return typeResult.push('water')
            }
            else if(type==="plant"){
                return typeResult.push('plant')
            }
            else if(type==="electrik"){
                return typeResult.push('electrik')
            }
            else if(type==="psychic"){
                return typeResult.push('psychic')
            }
            else if(type==="fighting"){
                return typeResult.push('fighting')
            }
            else if(type==="normal"){
                return typeResult.push('normal')
            }
            else if(type==="ghost"){
                return typeResult.push('ghost')
            }
            else if(type==="dragon"){
                return typeResult.push('dragon')
            }
            else{
                return false
            }
    })
        console.log(typeResult)
        window.addEventListener("DOMContentLoaded", (e) => {
            let element = ""
            for(let i = 0;i<typeResult.length;i+=1){
                element +=`<img src="${typeResult[i]}.png" class="type--image" />`
            }
            document.querySelector('.types'+this.props.id).innerHTML += element
        });
    }
    render(){
        return(
            <section className="combat-card element-animation">
                <div className="combat-card--content">
                    <div className="combat-card--info">
                        <span className="combat-card--info-name">{this.state.name}</span>
                        <div>
                            <p className="combat-card--info-pv">{this.state.pv} PV</p>
                            <div className={`types${this.props.id}`}>{this.type(this.state.type)}</div>
                        </div>
                    </div>  
                    <img className="pokemon-animation combat-card--avatar" alt="Pokémon" src={this.state.image}/>
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

export default CombatCard