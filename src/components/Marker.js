import React from 'react';

class Marker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            x: this.props.x || 0,
            y: this.props.y || 0
        };
        this.isDragging = false;
    }

    /**
     * Deze functie wordt uitgevoerd als de component wordt toegevoegd in de browser
     */
    componentWillMount() {
        document.addEventListener('mouseup', this.stopDrag, false);
    }

    /**
     * Deze functie wordt uitgevoerd als de component weer uit de browser wordt gehaald
     */
    componentWillUnmount() {
        document.removeEventListener('mouseup', this.stopDrag, false);

        if (this.isDragging) {
            this.stopDrag();
        }
    }

    /**
     * Function to start dragging
     * @param mouseX {number} The x position of the mouse on the screen
     */
    startDrag(startPositionX,startPositionY) {
        this.isDragging = true;
        this.lastMouseX = startPositionX;
        this.lastMouseY = startPositionY;

        document.addEventListener('mousemove', this.handleDrag, false);
    }

    /**
     * Function to stop dragging
     */
    stopDrag = () => {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.handleDrag, false);
    };

    handleDrag = (e) => {
        this.drag(e.pageX,e.pageY);
    };

    /**
     * Function to drag the marker
     * @param mouseX {number} The x position of the mouse on the screen
     */
    drag(mouseX,mouseY) {
        let offsetX = mouseX - this.lastMouseX,
            x = Math.max(0, this.state.x + offsetX);
        let offsetY = mouseY - this.lastMouseY,
            y = Math.max(0, this.state.y + offsetY);

        this.setState({
            x: x,
            y: y
        });

        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;

    }

    render() {

        let {markerClass = "marker", label = "..."} = this.props;

        const style = {
            left: this.state.x,
            top: this.state.y,
            position: 'absolute'
        };

        return (
            <div className={markerClass}
                 onMouseDown={(e) => this.startDrag(e.pageX,e.pageY)}
                 style={style}
            >
                verplaats mij
            </div>
        );
    }
}

export default Marker;