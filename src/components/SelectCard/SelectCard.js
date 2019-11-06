/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './SelectCard.css';

class SelectCard extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    const [type1, type2] = props.type.map((x) => {
=======
    const { move } = this.props;
    this.state = {
      type1: null,
      type2: null,
      atk1: ((Math.floor(Math.random() * (move.length - 1)) + 1)),
      atk2: ((Math.floor(Math.random() * (move.length - 1)) + 1)),
    };
  }

  componentDidMount() {
    const { type } = this.props;
    const result = type.map((x) => {
>>>>>>> Correct SelectPage and SelectCard with ESLint
      switch (x) {
        case 'ground':
        case 'rock':
          return 'fighting';
        case 'ice':
          return 'water';
        case 'grass':
        case 'bug':
          return 'plant';
        case 'poison':
          return 'psychic';
        case 'electric':
          return 'electrik';
        default:
          return x;
      }
    });
<<<<<<< HEAD
    this.state = {
      type1,
      type2,
    };
=======
    if (type.length >= 2) {
      this.setState({ type1: `https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${result[0]}.png` });
      this.setState({ type2: `https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${result[1]}.png` });
    } else {
      this.setState({ type1: `https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${result[0]}.png` });
    }
>>>>>>> Correct SelectPage and SelectCard with ESLint
  }

  render() {
    const {
<<<<<<< HEAD
      image,
      hp,
      name,
      moves,
      atk1,
      atk2,
      damageAtk1,
      damageAtk2,
=======
      type,
      move,
      image,
      id,
      hp,
      name,
      stats,
>>>>>>> Correct SelectPage and SelectCard with ESLint
    } = this.props;
    const {
      type1,
      type2,
<<<<<<< HEAD
    } = this.state;
    return (
      <section className="SelectCard element-animation">
        <div className="SelectCard__content">
          <div className="SelectCard__info">
            <span className="SelectCard__info-name">{ name }</span>
            <div>
              <p className="SelectCard__info-pv">
                {10 * Math.floor(hp / 10) < 30 ? 30 : 10 * Math.floor(hp / 10)}
                HP
              </p>
              <div>
                {type1 && <img src={`https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${type1}.png`} className="type--image" alt={`type ${type1}`} />}
                {type2 && <img src={`https://raw.githubusercontent.com/WildCodeSchool/wild-fighting/images/images/${type2}.png`} className="type--image" alt={`type ${type2}`} />}
              </div>
            </div>
          </div>
          <img className="SelectCard__avatar" alt="Pokémon" src={image} />
          <div className="SelectCard__atks">
            <div className="SelectCard__atks-panel">
              <span className="SelectCard__atks-panel-name">
                {moves[atk1] && moves[atk1].move.name}
              </span>
              <span className="SelectCard__atks__panel-damg">
                {damageAtk1}
              </span>
            </div>
            <div className="SelectCard__atks-panel">
              <span className="SelectCard__atks-panel-name">
                {moves[atk2] && moves[atk2].move.name}
              </span>
              <span className="SelectCard__atks__panel-damg">
                {damageAtk2}
=======
      atk1,
      atk2,
    } = this.state;
    return (
      <section className="choose-card element-animation">
        <div className="choose-card--content">
          <div className="choose-card--info">
            <span className="choose-card--info-name">{ name }</span>
            <div>
              <p className="choose-card--info-pv">
                {10 * Math.floor(hp / 10)}
                HP
              </p>
              <div>
                { type1 && <img src={type1} className="type--image" alt="type_logo" /> }
                { type2 && <img src={type2} className="type--image" alt="type_logo" /> }
              </div>
            </div>
          </div>
          <img className="choose-card--avatar" alt="Pokémon" src={image} />
          <div className="choose-card--atks">
            <div className="choose-card--atks-panel">
              <span className="choose-card--atks-panel-name">
                {move[atk1].move.name}
              </span>
              <span className="choose-card--atks--panel-damg">
                { 10 * Math.ceil(
                  (atk1 * (
                    (stats[0].base_stat + stats[1].base_stat + stats[2].base_stat + stats[3].base_stat)
                    / 5)
                  )
                   / (hp / 10),
                )}
              </span>
            </div>
            <div className="choose-card--atks-panel">
              <span className="choose-card--atks-panel-name">
                {move[atk2].move.name}
              </span>
              <span className="choose-card--atks--panel-damg">
                { 10 * Math.ceil(
                  (atk1 * (
                    (stats[0].base_stat + stats[1].base_stat + stats[2].base_stat + stats[3].base_stat)
                    / 5)
                  )
                   / (hp / 10),
                )}
>>>>>>> Correct SelectPage and SelectCard with ESLint
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SelectCard;
