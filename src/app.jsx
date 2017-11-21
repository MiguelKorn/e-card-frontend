import React from 'react';

import Menu from './components/Menu';
import Card from "./components/Card";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            markers: []
        }
    }

    addMarker(item) {
        this.setState(prevState=>{
            const list = prevState.markers.slice();
            list.push(item);
            return {
                markers: list
            }
        })
    }

    saveCard() {

    }

    render() {
        return (
            <div className="app">
                <Menu onAdd={(item)=>this.addMarker(item)}/>
                <Card markers={this.state.markers}/>
                <button onClick={()=>this.saveCard()}>Save</button>
            </div>
        );
    }
}

export default App;