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
        let salida = {"tittle" : inputValue, "completed" : true};
        const body = JSON.stringify(salida);
        const requestInit = {
            method : 'POST',
            headers : {'content-type' : 'aplication/json'},
            body : body
        };
        console.log(requestInit);
        async function fetchData(){
            const response = await fetch('http://127.0.0.1:3030/toDos/', requestInit);
            const data = await response.json();
            console.log(data); 
        } 
        fetchData();
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