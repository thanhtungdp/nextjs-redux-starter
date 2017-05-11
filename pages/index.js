import Link from 'next/link';
import Head from 'next/head';
import {autobind} from 'core-decorators';
import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch'

class Movies extends React.Component{

}

@autobind
export default class Index extends React.Component{
	static getInitialProps = async function() {
		const res = await fetch('http://www.omdbapi.com/?s=batman')
		const data = await res.json()

		console.log(`Movie data fetched. Count: ${data.Search.length}`)

		return {
			movies: data.Search
		}
	}

	render(){
		return <Layout>
			<Head>
				<title>Danh sach ne hay qua</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>Batman Movies</h1>
			<ul>
				{this.props.movies.map((movie) => (
					<li key={movie.imdbID}>
						<Link as={`/p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
							<a>{movie.Title}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	}
}