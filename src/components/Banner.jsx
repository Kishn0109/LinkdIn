import axios from 'axios';
import React, { Component } from 'react';

class Banner extends Component {
    constructor() {
        super()
        this.state = {
            banner: {},
            newbanner: 0,
        }
    }
    async componentDidMount() {
        console.log("didmount");
        this.setState({
            newbanner: Math.floor(Math.random() * 10)
        })
        let moviedata = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=818f30b0408da78b31e0ff8c62e1cbbd&language=en-US&page=${this.state.currentPage}`)
        this.setState({
            banner: { ...moviedata.data.results[this.state.newbanner] }
        })
    }
    render() {


        return (
            <div>
                <div className="card banner-card w-100 ">
                    <img src={`https://image.tmdb.org/t/p/original${this.state.banner.backdrop_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title babber-heading absolute">{this.state.banner.title}</h5>
                        <p className="card-text banner-text">{this.state.banner.overview}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
