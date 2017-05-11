import Link from "next/link";
import Head from "next/head";
import Layout from "components/Layout";
import { getMovies } from "redux/actions/movieActions";
import { nextReduxWrapper } from "redux/connect";
import { waitLoadSuccessData } from "utils/await";

const Movie = ({ Title, imdbID }) => (
  <li>
    <Link as={`/movie/${imdbID}`} href={`/movie?id=${imdbID}`}>
      <a>
        {Title}
      </a>
    </Link>
  </li>
);

@nextReduxWrapper(state => ({
  movies: state.movie.lists
}))
export default class Index extends React.Component {
  static getInitialProps = async function({ store, isServer }) {
    if (isServer) {
      store.dispatch(getMovies());
      await waitLoadSuccessData(store, "getMovies");
    } else {
      store.dispatch(getMovies());
    }
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Movie lists</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ul>
          {this.props.movies.map(movie => (
            <Movie {...movie} key={movie.imdbID} />
          ))}
        </ul>
      </Layout>
    );
  }
}
