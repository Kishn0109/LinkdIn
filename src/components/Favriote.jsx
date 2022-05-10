import React, { Component } from "react";
import { movies } from "../moviedeta";
class Favriote extends Component {
  constructor() {
    super();
    this.state = {
      currjourner: "All generas",
      category: [],
      faviourate_movie: [],
      searchtext: ""
    };
  }
  componentDidMount() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let local_faviourate_movie = JSON.parse(localStorage.getItem("moviesItem") || "[]");

    this.hendelgenreid(genreids, local_faviourate_movie)

  }
  hendelgenreid(genreids, local_faviourate_movie) {
    let categorys = [];
    local_faviourate_movie.map((movieobj) => {
      if (!categorys.includes(genreids[movieobj.genre_ids[0]])) {
        categorys.push(genreids[movieobj.genre_ids[0]]);
      }
    })
    this.setState({
      category: [...categorys],
      faviourate_movie: [...local_faviourate_movie]
    })
  }
  handelactiveOflist(moviegeners) { //action
    console.log(moviegeners, "54")
    this.setState({
      currjourner: moviegeners
    })

  }
  assendingsor(key) {
    let temp = this.state.faviourate_movie;
    temp.sort((obj1, obj2) => {
      return obj1[key] - obj2[key];
    })
    this.setState({
      faviourate_movie: [...temp]
    })
  }
  desdingsor(key) {
    let temp = this.state.faviourate_movie;
    temp.sort((obj1, obj2) => {
      return obj2[key] - obj1[key];
    })
    this.setState({
      faviourate_movie: [...temp]
    })
  }
  render() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let allgernes = [];
    movies.results.map((movie) => {
      if (!allgernes.includes(genreids[movie.genre_ids[0]])) {
        allgernes.push(genreids[movie.genre_ids[0]]);
      }
    });

    let filterArr = this.state.faviourate_movie;
    // if (this.state.currgeners !== "All generas") {
    //   filterArr = filterArr.filter((movies) => genreids[movies.genre_ids[0]] == this.state.currgeners)
    //   console.log(filterArr, this.state.currjourner !== "All generas")
    // }

    if (this.state.searchtext != '') {
      filterArr = this.state.faviourate_movie.filter((movieobj) => {
        let title = movieobj.original_title.toLowerCase() 
        return title.includes(this.state.searchtext.toLowerCase())
      })
    }


    return (
      <div>
        <div className="main p-5">
          <div className="row">
            <div className="col-3">
              <ul class="list-group">
                <li class="list-group-item bg-dark text-light">Geners</li>
                {this.state.category.map((moviegeners) => (
                  this.state.currjourner === moviegeners ?
                    <li className="list-group-item" style={{ color: "white", backgroundColor: "#183adbd1" }}>{moviegeners}</li> :
                    <li className="list-group-item" onClick={() => this.handelactiveOflist(moviegeners)}>{moviegeners}</li>
                ))}
              </ul>
            </div>
            <div className="col-9">
              <div className="row">
                <input type="text" className="col" value={this.state.searchtext} onChange={(e) => this.setState({ searchtext: e.target.value })} />
                <input type="text" className="col" value="Search" />
              </div>
              <div className="row">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">genre</th>
                      <th scope="col" onClick={() => this.assendingsor("popularity")}><i class="fa-solid fa-up" ></i>popularity <i class="fa-solid fa-down"></i></th>
                      <th scope="col" onClick={() => this.desdingsor("vote_average")}>Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterArr.map((movie) => (
                      <tr>
                        {/* <th scope="row"></th> */}
                        <td scope="row" className="fl-img">
                          <img
                            style={{ width: "8rem", height: "4rem" }}
                            width="8rem"
                            height="4rem"
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            className="table-img"
                            alt=""
                          />
                          <h5>{movie.original_title}</h5>{" "}
                        </td>
                        <td>{genreids[movie.genre_ids[0]]}</td>
                        <td>{movie.popularity}</td>
                        <td>{movie.vote_average}</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row pagination">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favriote;
