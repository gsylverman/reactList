import React, { Component } from "react";

import Persons from "./Persons";
class App extends Component {
    state = {
        persons: [
            { id: 1, name: "Gavril", age: 35 },
            { id: 2, name: "Daniel", age: 33 },
            { id: 3, name: "Raul", age: 36 }
        ],
        show: false
    }

    sterge = (index) => {
        const lista = [...this.state.persons];
        lista.splice(index, 1);
        this.setState({
            persons: lista
        });
    }
    change = (e, index) => {
        const lista = [...this.state.persons];
        const item = lista[index];
        item.name = e.target.value;
        this.setState({
            persons: lista
        });
    }
    arata = () => {
        let da = this.state.show;
        this.setState({ show: !da });
    }
    ascunde = () => {
        let daNu = null;
        if (this.state.show) {
            daNu = (<Persons adauga={this.adauga} arata={this.arata} change={this.change} sterge={this.sterge} date={this.state.persons} />)
        }
        return daNu;
    }
    showHide = () => {
        let change = "green";
        if (this.state.show) {
            change = "red"
        }
        return change;
    }
    adauga = (e) => {
        const lista = [...this.state.persons];
        let name = document.getElementsByClassName("da")[0].value;
        let age = document.getElementsByClassName("ag")[0].value;
        let id = lista[lista.length - 1].id + 1;
        const itemNou = {
            id: id, name: name, age: age
        };
        if (name && age && id) {
            lista.push(itemNou);
            this.setState({
                persons: lista
            });
        } else { alert("nu ati introdus") }
        document.getElementsByClassName("da")[0].value = "";
        document.getElementsByClassName("ag")[0].value = "";
    }

    render() {
        return (
            <div>
                <h1>Lista</h1>

                <div>
                    <button className={this.showHide()} onClick={this.arata} style={{ marginLeft: "80px" }}>Arata/Ascunde</button>
                    {this.ascunde()}
                </div>


            </div>
        );
    }

}
export default App;