import React, {Component} from 'react';
import './CardSelect.css';

class CardSelect extends Component {
    constructor(props){
        super(props)
        this.state={
            type1:null,
            type2:null,
            atk1:((Math.floor(Math.random() * (this.props.move.length - 1)) + 1)),
            atk2:((Math.floor(Math.random() * (this.props.move.length - 1)) + 1))
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
                {
                    console.log(this.props.moveLength)
                }
                <div className="choose-card--content">
                    <div className="choose-card--info">
                        <span className="choose-card--info-name">{this.props.name}</span>
                        <div>
                            <p className="choose-card--info-pv">{10*Math.floor(this.props.hp/10)} HP</p>
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
                            {this.props.move[this.state.atk1].move.name}
                            </span>
                            <span className="choose-card--atks--panel-damg">{
                                10*Math.ceil(this.state.atk1
                                *(
                                    (
                                        this.props.stats[0].base_stat+
                                        this.props.stats[1].base_stat+
                                        this.props.stats[2].base_stat+
                                        this.props.stats[3].base_stat
                                        )
                                        /5
                                        )/this.props.hp/10)
                            }</span>
                        </div>
                        <div className="choose-card--atks-panel">
                            <span className="choose-card--atks-panel-name">
                            {this.props.move[this.state.atk2].move.name}
                            </span>
                            <span className="choose-card--atks--panel-damg">{
                                10*Math.ceil(this.state.atk2
                                *(
                                    (
                                        this.props.stats[0].base_stat+
                                        this.props.stats[1].base_stat+
                                        this.props.stats[2].base_stat+
                                        this.props.stats[3].base_stat
                                        )
                                        /5
                                        )/this.props.hp/10)
                            }</span>
                        </div>
                    </div>
                </div>
            </section>
            )
    }
}

export default CardSelect
