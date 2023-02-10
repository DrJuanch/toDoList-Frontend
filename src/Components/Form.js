import { React, useState } from "react";

function Form({ addTodo }) {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column twelve wide">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter something to do..."
                            id="input"
                        />
                    </div>

                    <div className="column one wide">
                        <button type="submit" className="ui button icon blue">
                            <i className="white plus icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;