import React from 'react';

import Nav from './components/Menu';
import Card from "./components/Card";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Nav/>
                <Card/>
            </div>
        );
    }
}

export default App;