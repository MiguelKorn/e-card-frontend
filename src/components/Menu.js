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
                    <div className="dropdown" onClick={(e) => {
                        e.currentTarget.classList.toggle("active")
                    }}>
                        <p>Select {part.type}</p>
                    </div>
                    <ul className="dropdownMenu">
                        {part.items.map((item, i) => {
                            return (
                                <li key={i}><img src={"Images/" + item.image} alt={item.name}/></li>
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
                {this.showDropdownChunks()}
            </div>
        )
    }
}

export default Menu;