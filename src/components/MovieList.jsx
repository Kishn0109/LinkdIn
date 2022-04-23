import React, { Component } from "react";
import { movies } from "../moviedeta";
export default class extends Component {
    render() {
        return (
            <>
                {
                    movies.results.map((movie) => (
                        <>
                            <h1>{movie.title}</h1>
                        </>
                    ))
                }
            </>
        );
    }
}