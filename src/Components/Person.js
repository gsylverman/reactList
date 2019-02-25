import React from "react";
import "./Person.css";

const Person = (props) => {
    return (
        <div className="card">
            <h2>Card</h2>
            <p> Numele meu este {props.name} si am {props.age} ani</p>
            <input onChange={props.change} type="text" value={props.name}></input><br />
            <div className="bt">
            <button onClick={props.sterge}> Sterge </button>
            </div>
        </div>
    );
};

export default Person;