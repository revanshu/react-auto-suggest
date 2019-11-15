import React, { Component } from "react";
import _ from "lodash";
import movieServices from "../utils/getMovies";
import Modal from "../components/Modal.js";
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
          func.apply(context, args);
        }, wait);
      };
    };

    // this.handleInputChangeDeb = this.debounce(this.handleInputChange);
    this.handleInputChangeDeb = _.debounce(() => {
      this.handleInputChange();
    }, 1000);
    // this.search = val => {
    //   _.debounce(e => {
    //     console.log("Debounced Event:", e);
    //   }, 1000);
    // };
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
    movieServices.getMovies(val).then(data => {
      this.setState({
        movieList: data.Search
      });
    });

    //  this.search();
    // this.setState({ input: e.value }, () => {
    //   _.debounce(e => {
    //     console.log("Debounced Event:", e);
    //   }, 1000);
    // });
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
            handleSelection={() => {
              this.handleSelection(a);
            }}
          />
        ))
      : [];
    const selectedVal = selectedData.map(a => (
      <Pills
        value={a}
        handleDelete={() => {
          this.handleDelete(a);
        }}
      />
    ));
    return (
      <div className="App">
        <div className="main-header">
          <span>React Auto Suggest</span>
        </div>
        <div className="content">
          <span className="main-header-text">Search Movies</span>
          <div className="selected">{selectedVal}</div>
          <input
            type="text"
            className="input-box"
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
