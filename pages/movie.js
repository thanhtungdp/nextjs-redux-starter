import React, { Component, PropTypes } from "react";
import { nextReduxWrapperAwait } from "redux/connect";
import { getMovie } from "redux/actions/movieActions";
import { waitLoadSuccessData, awaitCheckSuccess, awaitCheckPending } from "utils/await";

@nextReduxWrapperAwait(state => ({
  movie: state.movie.current
}))
export default class Movie extends Component {
  static getInitialProps = async function({ store, isServer, query }) {
    if (isServer) {
      store.dispatch(getMovie(query.id));
      await waitLoadSuccessData(store, "getMovie");
    } else {
      store.dispatch(getMovie(query.id));
    }
  };

  render() {
    return (
      <div>
	      {awaitCheckPending(this.props, 'getMovie', <p>Pending</p>)}
        {awaitCheckSuccess(
          this.props,
          "getMovie",
          <div>
            <h1>Movie: {this.props.movie.Title}</h1>
            <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
          </div>
        )}
      </div>
    );
  }
}
