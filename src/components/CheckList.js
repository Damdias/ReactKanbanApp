import React from "react";


class CheckList extends React.Component{
    render(){
        return(
            this.props.tasks.map((t)=> (
                <li className="checklist_task">
                    <input type="checkbox" defaultChecked={t.done}/>
                    {t.name}
                    <a href="#" className="checklist_task--remove"/>
                </li>
            ))
        );
    }
}
export default CheckList;