import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="Navbar px-5" style={{ display: "flex", padding: "0.5rem", alignItems: "center" }}>
                    <Link to="/"><h1>Movie App</h1></Link>
                    <Link to="/favourites"><h2 style={{ marginLeft: "1.8rem" }}>Favourites</h2></Link>
                </div>
            </>
        )
    }
}