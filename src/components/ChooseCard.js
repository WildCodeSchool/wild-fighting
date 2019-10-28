import React, {Component} from 'react';
import './ChooseCard.css';

class ChooseCard extends Component {
    constructor(props) {
        super(props)
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
            <section className="choose-card element-animation">
                <div className="choose-card--content">
                    <div className="choose-card--info">
                        <span className="choose-card--info-name">{this.state.name}</span>
                        <div>
                            <p className="choose-card--info-pv">{this.state.pv} PV</p>
                            {console.log("type : "+this.state.type)}
                            <div className={`types${this.props.id}`}>{this.type(this.state.type)}</div>
                        </div>
                    </div>  
                    <img className="choose-card--avatar" alt="Pokémon" src={this.state.image}/>
                    <div className="choose-card--atks">
                        <div className="choose-card--atks-panel">
                            <span className="choose-card--atks-panel-name">
                                <img className="choose-card--info-type" alt="Type" src={this.state.type}/>
                                Morsure
                            </span>
                            <span className="choose-card--atks--panel-damg">20</span>
                        </div>
                        <div className="choose-card--atks-panel">
                            <span className="choose-card--atks-panel-name">
                                <img className="choose-card--info-type" alt="Type" src={this.state.type}/>
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

export default ChooseCard