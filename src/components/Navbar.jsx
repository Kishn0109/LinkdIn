import React, { Component } from "react"

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="Navbar" style={{ display: "flex", padding: "0.5rem" ,alignItems:"center"}}>
                    <h1>Movie App</h1>
                    <h2 style={{ marginLeft: "1.8rem" }}>Favourites</h2>
                </div>
            </>
        )
    }
}