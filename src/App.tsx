import "./App.css";
import axios from "axios";
import Search from "./assets/components/Search";
import DisplayMovies from "./assets/components/DisplayMovies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnMount:false,
      refetchInterval: 1000 *60 *10
    }
  }
})


function App() {
	// console.log(import.meta.env.VITE_API_KEY)
  let [query, setQuery] = useState<string>("")
  let apikey = import.meta.env.VITE_API_KEY;



	return (
		<main className="App">
       <QueryClientProvider client={queryClient}>
			<Search query={query} setQuery={setQuery} />
			<DisplayMovies apikey={apikey} />
      </QueryClientProvider>
		</main>
	);
}

export default App;
