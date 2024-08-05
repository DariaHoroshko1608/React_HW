import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import Item from './Item';

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskText: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ taskText: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { tasks, taskText } = this.state;
        const newTask = { id: uniqueId(), text: taskText };

        this.setState({
            tasks: [newTask, ...tasks],
            taskText: '',
        });
    };

    handleRemoveTask = (taskId) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(task => task.id !== taskId),
        }));
    };

    render() {
        const { tasks, taskText } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleFormSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={taskText}
                                onChange={this.handleInputChange}
                                required
                                className="form-control"
                                placeholder="I am going..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    {tasks.map(task => (
                        <div key={task.id}>
                            <Item task={task} onRemove={this.handleRemoveTask} />
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox;
