import axios from "axios";
import React, { Component } from "react";
import { movies } from "../moviedeta";
export default class extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            pages: [1, 2, 3],
            currentPage: 1,
            movies: [],
            fvi: []

        }
    }
    async componentDidMount() {
        console.log("didmount");

        let moviedata = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=818f30b0408da78b31e0ff8c62e1cbbd&language=en-US&page=${this.state.currentPage}`)
        this.setState({
            movies: [...moviedata.data.results]
        })
    }

    handelchange = async () => {
        let moviedata = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${this.state.currentPage}`)
        this.setState({
            movies: [...moviedata.data.results]
        })
    }
    handelfavourite = (movie) => {
        let oldobj = JSON.parse(localStorage.getItem("moviesItem") || '[]');

        console.log("33", oldobj, JSON.parse('[1, 5, "false"]'))
        if (this.state.fvi.includes(movie.id)) {
            oldobj = oldobj.filter((objmovie) => objmovie.id != movie.id);
            let fi = this.state.fvi.filter((id) => id != movie.id);
            this.setState({
                fvi: [...fi]
            })
        } else {
            oldobj.push(movie);
            this.state.fvi.push(movie.id);
        }
        console.log(oldobj, "37");
        localStorage.setItem("moviesItem", JSON.stringify(oldobj));
    }
    render() {
        return (
            <>
                <div className="movies-list">
                    {
                        this.state.movies.length > 0 ? this.state.movies.map((movie) => (
                            <>
                                {
                                    movie && (
                                        <div className="card movie-card" onMouseEnter={() => this.setState({ hover: movie.id })} onMouseLeave={() => this.setState({ hover: '' })}>
                                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} style={{ height: '100%', width: '20vw' }} className="card-img-top movie-img" alt="..." />
                                            <h5 className="card-title">{movie.title}</h5>
                                            <div className="card_div d-flex justify-content-center">
                                                {
                                                    this.state.hover == movie.id && <button type="button" class="btn btn-primary movie-card-button" onClick={() => this.handelfavourite(movie)}>{
                                                    this.state.fvi.includes(movie.id)?"added":"add"
                                                    }</button>
                                                }
                                            </div>
                                        </div>
                                    )
                                }

                            </>
                        )) : (
                            <>page is Loding </>
                        )
                    }
                </div>
                <div className="Home_pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous" onClick={() => this.state.currentPage != 1 && this.setState({ currentPage: this.state.currentPage - 1 })}>
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            {
                                this.state.pages.map((page) => (
                                    <li className={`page-item ${page == this.state.currentPage && "active"}`} onClick={(e) => { this.state.currentPage != page && this.setState({ currentPage: page }, this.handelchange) && console.log(this.state.currentPage) }}><a class="page-link">{page}</a></li>
                                ))
                            }
                            <li class="page-item" onClick={() => this.setState({ pages: [...this.state.pages, this.state.pages.length + 1], currentPage: this.state.currentPage + 1 }, this.handelchange)}>
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true" onClick={() => console.log(this.state.currentPage, this.state.pages)}>&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>
        );
    }
}