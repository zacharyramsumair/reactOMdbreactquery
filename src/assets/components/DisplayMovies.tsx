import React from "react";
import styles from "./DisplayMovies.module.css";
import Movie from "./Movie";
import  { AxiosResponse } from "axios";


type Props = {
error:unknown,
isLoading:boolean,
isFetching:boolean,
MoviesData :AxiosResponse<any, any> |undefined
};

const DisplayMovies = ({error, isLoading, isFetching, MoviesData}: Props) => {
	

	if (error) {
		return (
			<>
				<h1>An error occurred, please try again.</h1>
				{console.log(error)}
				{/* <pre>{error}</pre> */}
			</>
		);
	}

	if (isLoading || isFetching) {
		return <h1>Loading...</h1>;
	}


	let MovieElements = MoviesData?.data.results.map((movie:any) => {
		return (
			<Movie
				title={movie.original_title}
				rating={movie.vote_average}
				overview={movie.overview}
				poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				date={movie.release_date}
				key={movie.id}
			/>
		);
	});

	return (
		<section className={styles.displayMovies}>
			{/* {console.log(MoviesData)} */}
			<h2 className={styles.displayHeader}>Trending Now</h2>
			<div className={styles.moviesGrid}>{MovieElements}</div>
		</section>
	);
};

export default DisplayMovies;
