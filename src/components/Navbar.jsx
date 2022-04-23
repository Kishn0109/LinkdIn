import React, { Component } from "react"

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="Navbar" style={{ display: "flex", padding: "0.5rem" }}>
                    <h1>Movie App hellow how are you </h1>
                    <h2 style={{ marginTop: "2rem", marginLeft: "1.8rem" }}>Favourites</h2>
                </div>
            </>
        )
    }
}