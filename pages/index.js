import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { changeTitle } from "../redux/actions/movieActions";
import { nextReduxWrapper } from "../redux/connect";

@nextReduxWrapper(state => ({
  movie: state.movie
}))
export default class Index extends React.Component {
  static getInitialProps = async function({ store, isServer }) {
    if (isServer) {
      const res = await fetch(`http://www.omdbapi.com/?i=tt2975590`);
      const data = await res.json();
      store.dispatch(changeTitle(data.Title));
    } else {
      store.dispatch(changeTitle("Ngon do"));
    }
    return {};
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>{this.props.movie.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1>{this.props.movie.title}</h1>
      </Layout>
    );
  }
}
