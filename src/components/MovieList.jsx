import React, { Component } from "react";
import { movies } from "../moviedeta";
export default class extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            pages: [1, 2, 3],
            currentPage:1
        }
    }
   
    render() {
        return (
            <>
                <div className="movies-list">
                    {
                        movies.results.map((movie) => (
                            <>
                                <div className="card movie-card" onMouseEnter={() => this.setState({ hover: movie.id })} onMouseLeave={()=>this.setState({hover:''})}>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} style={{ height: '100%', width: '20vw' }} className="card-img-top movie-img" alt="..." />
                                    <h5 className="card-title">{movie.title}</h5>
                                    <div className="card_div d-flex justify-content-center">
                                        {
                                            this.state.hover == movie.id && <button type="button" class="btn btn-primary movie-card-button">Primary</button>

                                        }
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className="Home_pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous" onClick={() => this.setState({ currentPage: this.state.currentPage - 1 })}>
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            {
                                this.state.pages.map((page) => (
                                    <li class="page-item"><a class="page-link" href={'/'}>{page}</a></li> 
                                ))
                            }
                            <li class="page-item" onClick={() => this.setState({ pages: [...this.state.pages, this.state.pages.length + 1], currentPage:this.state.currentPage+1})}>
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true" onClick={()=>console.log(this.state.currentPage,this.state.pages)}>&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>
        );
    }
}