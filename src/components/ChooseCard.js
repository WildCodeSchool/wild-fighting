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
            id:props.id,
            pv:props.pv
        }
        this.type = this.type.bind(this)
        console.log(this.state.type)
    }
    type(type){
        let typeResult = []
        type.map(type=>{
            type==="fire"                                               ? typeResult.push('fire'):
            type==="water" || type === "ice"                            ? typeResult.push('water'):
            type==="plant" || type === "grass" || type === "bug"        ? typeResult.push('plant'):
            type==="electric"                                           ? typeResult.push('electrik'):
            type==="psychic" || type === "poison"                       ? typeResult.push('psychic'):
            type==="fighting" || type === "rock" || type === "ground"   ? typeResult.push('fighting'):
            type==="normal"                                             ? typeResult.push('normal'):
            type==="ghost"                                              ?typeResult.push('ghost'):
            type==="dragon"                                             ? typeResult.push('dragon'): 
            type==="steel"                                              ? typeResult.push('steel'): 
            type==="fairy"                                              ? typeResult.push('fairy'): 
            type==="flying"                                             ? typeResult.push('flying'): 
            typeResult.push()
            return null
    })
    return typeResult
    }
    componentDidMount(){
        const typeResult = this.type(this.state.type)
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
                        <span className="choose-card--info-name">{this.state.name}</span>
                        <div>
                            <p className="choose-card--info-pv">{this.state.hp} HP</p>
                            <div className={`types${this.props.id}`}></div>
                        </div>
                    </div>  
                    <img className="choose-card--avatar" alt="Pokémon" src={this.state.image}/>
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

export default ChooseCard