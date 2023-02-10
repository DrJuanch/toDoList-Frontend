import React, { useState } from "react";

const Todo = ({ title, completed, removeTodoListProp }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClick = () => {
        setCompleted((oldCompleted) => !oldCompleted);
    };

    return (
        <div className="task">
            {isEditing ? (
                <div className="columns seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className="done">
                        <button
                            className="ui button icon grey"
                            onClick={handleButtonClick}
                        >
                            <i className={`white check icon ${completedState ? "black" : "grey"
                                }`} />
                        </button>
                    </div>

                    <div
                        className="task-todo"
                        onDoubleClick={handleDivDoubleClick}
                    >
                        <h2 className={`ui small block header ${completedState ? "grey" : ""}`} id="task">
                            {value}
                        </h2>
                    </div>

                    <div className="delete-task"> 
                        <button onClick={removeTodoListProp} className="btn-delete">
                            <i className="trash alternate outline large icon blue"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Todo;