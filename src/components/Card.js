import React from 'react';
import Marker from "./Marker";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    showMarkers() {
        if(this.props.markers && this.props.markers.length > 0) {
            return this.props.markers.map((item, i) => (
                    <Marker key={i} item={item}/>
                )
            );
        }
    }

    render() {
        return (
            <div className={"card"}>
                {this.showMarkers()}
            </div>
        )
    }
}

export default Card;