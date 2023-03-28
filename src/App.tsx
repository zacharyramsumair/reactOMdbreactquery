import "./App.css";
import axios from "axios";
import Search from "./assets/components/Search";
import DisplayMovies from "./assets/components/DisplayMovies";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";




function App() {
	// console.log(import.meta.env.VITE_API_KEY)
  let [query, setQuery] = useState<string>("")

  let apikey = import.meta.env.VITE_API_KEY;


	const { isLoading, error, data: MoviesData, refetch, isFetching} = useQuery(["movies"], () => {
    if(query !=""){
      // console.log("used query")
      return axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`
      );    
    }else{
      // console.log("used popular")
      return axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
      );
    }
		
	});



	return (
		<main className="App">
       
			<Search query={query} setQuery={setQuery}  refetch={refetch} />
			<DisplayMovies isLoading={isLoading} isFetching={isFetching} MoviesData={MoviesData} error={error} />
		</main>
	);
}

export default App;
