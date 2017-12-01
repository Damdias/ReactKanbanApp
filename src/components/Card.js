import React from "react";
import CheckList from "./CheckList";

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="card_title">{this.props.title}</div>
                    <div className="card_details">
                        {this.props.description}
                        <ul>
                         <CheckList tasks={this.props.tasks}/>
                        </ul>
                       
                    </div>
            </div>
        );
    }
}

export default Card;