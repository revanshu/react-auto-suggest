import React, { Component } from "react";
import movieServices from "../utils/getMovies";
import MovieRow from "../components/MovieRow.js";
import Pills from "../components/Pills.js";

class MainApp extends Component {
  state = {
    input: "",
    movieList: [],
    show: false,
    selectedData: []
  };

  componentDidMount() {
    this.debounce = (func, wait) => {
      var timeout;
      return function(...args) {
        var context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          console.log("args", args);
          func.apply(context, args);
        }, wait);
      };
    };

    this.getDataDeb = this.debounce(this.getData, 300);
  }

  getData(val) {
    movieServices.getMovies(val).then(data => {
      this.setState({
        movieList: data.Search
      });
    });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleInputChange(e) {
    this.showModal();
    this.setState({
      input: e.target.value
    });
    let val = e.target.value;
    this.getDataDeb(val);
  }

  handleSelection = d => {
    const { selectedData } = this.state;
    selectedData.push(d.Title);
    this.setState({ selectedData });
  };

  handleDelete = val => {
    let { selectedData } = this.state;
    selectedData = selectedData.filter(a => {
      return a !== val;
    });
    this.setState({ selectedData });
  };

  render() {
    const { input, show, movieList, selectedData } = this.state;
    const suggestions = movieList
      ? movieList.map(a => (
          <MovieRow
            title={a.Title}
            desc={a.Type}
            key={a.imdbID}
            handleSelection={() => {
              this.handleSelection(a);
            }}
          />
        ))
      : [];
    const selectedVal = selectedData.map(a => (
      <Pills
        value={a}
        key={a}
        handleDelete={() => {
          this.handleDelete(a);
        }}
      />
    ));
    return (
      <div className="App">
        <div className="main-header">
          <span>React Auto Suggest Movies</span>
        </div>
        <div className="content">
          <div className="selected">{selectedVal}</div>
          <input
            type="text"
            className="input-box"
            placeholder="Search Movie Title"
            value={this.state.input}
            onChange={e => this.handleInputChange(e)}
          />
          {show && <div className="suggestion">{suggestions}</div>}
        </div>
      </div>
    );
  }
}

export default MainApp;
