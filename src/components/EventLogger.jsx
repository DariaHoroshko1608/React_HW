import React, { Component } from 'react';

class EventLogger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [],
        };
    }

    addEvent = (delta) => {
        this.setState((prevState) => {
            const newValue = (prevState.log[0] || 0) + delta;
            return {
                log: [newValue, ...prevState.log],
            };
        });
    };

    removeEvent = (index) => {
        this.setState((prevState) => {
            return {
                log: prevState.log.filter((_, i) => i !== index),
            };
        });
    };

    render() {
        return (
            <div className="container mt-3">
                <div className="btn-group font-monospace" role="group">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={() => this.addEvent(1)}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => this.addEvent(-1)}
                    >
                        -
                    </button>
                </div>

                <div className="list-group mt-3">
                    {this.state.log.map((value, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.removeEvent(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default EventLogger;
