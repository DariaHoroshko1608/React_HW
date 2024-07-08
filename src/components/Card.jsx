import React from 'react';

class Card extends React.Component {
    render() {
                return (
                    <div className="card" style={{ width: '300px', margin: '20px' }}>
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                );
    }
}

export default Card;
