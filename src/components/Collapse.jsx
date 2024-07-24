import React from 'react';

class Collapse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.opened ?? true,
        };
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const { text } = this.props;
        const { isOpen } = this.state;
        const collapseClass = isOpen ? 'collapse show' : 'collapse';
        const ariaExpanded = isOpen ? 'true' : 'false';

        return (
            <div>
                <p>
                    <button
                        className="btn btn-primary"
                        type="button"
                        aria-expanded={ariaExpanded}
                        onClick={this.toggleCollapse}
                    >
                        Link with href
                    </button>
                </p>
                <div className={collapseClass}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapse;
