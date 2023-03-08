import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Popular from "./pages/Popular"
import Trending from "./pages/Trending";
import Horror from "./pages/Horror";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import requests from './Request'




function App() {




  return (
    <>
        <Navbar  />
        <Routes>
          <Route path="/mymovie-app" element ={<Home/>} />
          <Route path="/popular"  element ={<Popular
            title="Popular" fetchURL={requests.requestPopular}/> }  />

          <Route path="/trending" element ={<Trending
            title="Trending" fetchURL={requests.requestTrending}/>} />

          <Route path="/horror" element ={<Horror
            title="Horror" fetchURL={requests.requestHorror}/>} />

          <Route path="/TopRated" element ={<TopRated 
            title="Top Rated" fetchURL={requests.requestTopRated}/>} />

          <Route path="/upcoming" element ={<Upcoming
            title="Up Coming" fetchURL={requests.requestUpcoming}/>} />
        </Routes>
    </>
  );
}

export default App;
