import React from 'react';

class Definitions extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <dl className="row">
                {data.map((item) => (
                    <React.Fragment key={item.id}>
                        <dt className="col-sm-3">{item.dt}</dt>
                        <dd className="col-sm-9">{item.dd}</dd>
                    </React.Fragment>
                ))}
            </dl>
        );
    }
}

export default Definitions;
