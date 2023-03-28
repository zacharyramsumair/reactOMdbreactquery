
import './App.css'
import axios from "axios";


function App() {


const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/magic',
  // url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D',
  params: {exact: 'true'},
  headers: {
    'X-RapidAPI-Key': '2c08d1a837msh8d5c26aa5ebe532p1c7ceejsne3f2fb30f6bf',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


  return (
    <main className="App">
    app 
    </main>
  )
}

export default App
