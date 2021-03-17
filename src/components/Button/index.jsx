import './style.css';
import { Component } from "react";

export default class Button extends Component {

    
    render() {
        const {text, onClick, disabled}= this.props;
        return (
            <div>
                 <button
                
                 onClick={onClick}
                 className="btn"
                 disabled={disabled}
                 
                 >{text}</button>
            </div>
        )
    }
};
