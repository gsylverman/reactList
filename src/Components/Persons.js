import React from "react";

import Person from "./Person";


const Persons = (props) => {

    const lista = props.date.map((item, index) => {
        return (
            <Person
                name={item.name}
                age={item.age}
                key={item.id}
                sterge={() => props.sterge(index)}
                change={(e) => props.change(e, index)}
            />
        );
    });

    return (
        <div>

            {lista}
            <div className="dv">
                <input className="da" type="text" placeholder="scrie nume" /><br />
                <input className="ag" type="number" placeholder="scrie varsta" />
                <button id="btn" onClick={props.adauga} className="bta">Adauga in lista </button>
            </div>
        </div>

    );
};

export default Persons;
