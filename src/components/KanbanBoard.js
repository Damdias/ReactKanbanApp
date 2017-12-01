import React,{Component} from "react";
import List from "./List";

class KanbanBoard extends Component{
    render(){
        return(
            <div className="app">
              <List key="todo" cards={this.props.cards.filter((c)=> c.status === "todo")} title="Todo"/>
              <List key="inprogress" cards={this.props.cards.filter((c)=> c.status === "in-progress")} title="In progress"/>
              <List key="done" cards={this.props.cards.filter((c)=> c.status === "done")} title="Done"/>
            </div>
        );
    }
}
export default KanbanBoard;