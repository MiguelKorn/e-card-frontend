import React from 'react';

class Marker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            x: this.props.x || 0
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
    startDrag(startPosition) {
        this.isDragging = true;
        this.lastMouseX = startPosition;

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
        this.drag(e.pageX);
    };

    /**
     * Function to drag the marker
     * @param mouseX {number} The x position of the mouse on the screen
     */
    drag(mouseX) {
        let offset = mouseX - this.lastMouseX,
            x = Math.max(0, this.state.x + offset);

        this.setState({
            x: x
        });

        this.lastMouseX = mouseX;

    }

    render() {

        let {markerClass = "marker", label = "..."} = this.props;

        const style = {
            left: this.state.x
        };

        return (
            <div className={markerClass}
                 onMouseDown={(e) => this.startDrag(e.pageX)}
                 style={style}
            >
                verplaats mij
            </div>
        );
    }
}

export default Marker;