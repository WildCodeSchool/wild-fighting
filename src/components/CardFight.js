import React,{Component} from 'react';
import './CardFight.css'

class CardFight extends Component {
    constructor({id,props,image,name,type,desc,atks,hp}) {
        super({id,props,image,name,type,desc,atks,hp});
    }
    types(type){
        let typeResult = []
        type.map(type=>{
            type==="fire"                                               ? typeResult.push('fire'):
            type==="water" || type === "ice"                            ? typeResult.push('water'):
            type==="plant" || type === "grass" || type === "bug"        ? typeResult.push('plant'):
            type==="electric"                                           ? typeResult.push('electrik'):
            type==="psychic" || type === "poison"                       ? typeResult.push('psychic'):
            type==="fighting" || type === "rock" || type === "ground"   ? typeResult.push('fighting'):
            type==="normal"                                             ? typeResult.push('normal'):
            type==="ghost"                                              ? typeResult.push('ghost'):
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
        const typeResult = this.types(this.props.type)
        let element = ""
            for(let i = 0;i<typeResult.length;i+=1){
                element +=`<img alt="type" src="https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${typeResult[i]}.png" class="type--image" />`
            }
            document.querySelector('.types'+this.props.id).innerHTML += element
    }
    render(){
        return(
            <section className="combat-card element-animation">
                <div className="combat-card--content">
                    <div className="combat-card--info">
                        <span className="combat-card--info-name">{this.props.name}</span>
                        <div>
                            <p className="combat-card--info-pv">{this.props.hp} HP</p>
                            <div className={`types${this.props.id}`}></div>
                        </div>
                    </div>  
                    <img className="pokemon-animation combat-card--avatar" alt="Pokémon" src={this.props.image}/>
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
