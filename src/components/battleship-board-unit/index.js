import React, { PureComponent } from 'react';
import './style.css';
import Hit from '../../assets/Hit.png';
import Miss from '../../assets/Miss.png';

export default class BattleshipBoardUnit extends PureComponent {
    handleClick = value => {
        const split = value.split(',');
        console.log(split);
    };
    render() {
        let img;
        if (this.props.isClicked) {
            this.props.isChecked
                ? img = <img src={Hit} alt="Hit"/>
                : img = <img src={Miss} alt="Miss"/>;
        }
        return (
            <div className="battleshipBoardUnit"
                onClick={() => this.handleClick(this.props.value)}>
                {img}
            </div>
        );
    }
}
