import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp }) => {
    const renderedList = list.map((item) => 
    <Todo title={item.title} completed={item.completed} removeTodoListProp={(e) => removeTodoListProp(item.title)} key={item._id} />);
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};
export default List;