import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div>
                <div className="card banner-card w-100 ">
                    <img src="https://preview.redd.it/8rjzmmgwqri11.jpg?auto=webp&s=9bf246817627bd344193d274ef3e5faae5842913" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title babber-heading absolute">Card title</h5>
                        <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
