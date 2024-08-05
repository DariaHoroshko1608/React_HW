import React, { Component } from 'react';

class Item extends Component {
    handleRemoveClick = () => {
        const { task, onRemove } = this.props;
        onRemove(task.id);
    };

    render() {
        const { task } = this.props;

        return (
            <div className="row">
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={this.handleRemoveClick}
                    >
                        -
                    </button>
                </div>
                <div className="col">
                    {task.text}
                </div>
            </div>
        );
    }
}

export default Item;
