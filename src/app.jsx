import React from 'react';

import Nav from './components/Menu';
import Marker from "./components/Marker";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Nav />
               <Marker/>
            </div>
        );
    }
}
export default App;