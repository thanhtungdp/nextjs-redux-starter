import Layout from "../components/Layout";
import Head from 'next/head'
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <Head>
      <title>{props.movie.Title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>{props.movie.Title}</h1>
    <p>{props.movie.Plot}</p>
    <img src={props.movie.Poster} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  console.log(context.query);
  const res = await fetch(`http://www.omdbapi.com/?i=${id}`);
  const movie = await res.json();

  console.log(`Fetched movie: ${movie.Title}`);

  return { movie };
};

export default Post;
