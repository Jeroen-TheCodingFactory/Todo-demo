import React from "react";
import "./Item.css";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { done: false }
    }
    onItemClick = () => {
        this.setState({ done: true },
            () => setTimeout(() => this.props.updateState(this.props.id), 300));
    }

    render() {
        let classNames = "todo__item";
        if(this.state.done === true){
            classNames += " todo__item--done";
        }
        return (
            <li onClick={this.onItemClick} class={classNames}>{this.props.name}</li>
        )
    }


}

export default Item;