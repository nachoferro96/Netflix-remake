import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/*  NAV BAR  */}
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchurl={requests.fetchnetflixoriginals}
        islargerow
      />
      <Row title="Trending Now" fetchurl={requests.fetchtrending} />
      <Row title="Top Rated" fetchurl={requests.fetchtoprated} />
      <Row title="Action Movies" fetchurl={requests.fetchactionmovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchcomedymovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchhorrormovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchromancemovies} />
      <Row title="Documentaries" fetchurl={requests.fetchdocumentaries} />
    </div>
  );
}

export default App;
