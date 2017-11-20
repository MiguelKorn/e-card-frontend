import React from 'react';

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            parts: []
        };
    }

    componentDidMount() {
        this.getParts();
    }

    getParts() {
        fetch("http://localhost:1337/parts")
            .then(response => response.json())
            .then(parts => {
                this.setState({parts: parts});
            });
    }

    showDropdownChunks() {
        return this.state.parts.map((part, i) => {
            return (
                <div className="dropholder" key={i}>
                    <div className="dropdown">
                        <p>Select {part.type}</p>
                    </div>
                    <ul className="dropdownMenu">
                        {part.items.map((item, i)=>{
                            return (
                                <li key={i}><a href="#">{item.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="menu">
                <div className="pure-g">
                    <div className="nav pure-u-1-5">
                        {this.showDropdownChunks()}
                    </div>
                    <div className="pure-u-4-5">
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;