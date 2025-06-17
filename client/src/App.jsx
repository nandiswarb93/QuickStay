import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SetLayout from "./pages/SetLayout";
import MyBookings from "./pages/MyBookings";
import Favorite from "./pages/Favorite";
import {Routes,Route, useLocation} from "react-router-dom"
import Navbar from "./components/Navbar";
import {Toaster} from "react-hot-toast";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');


  return (
    <>
    <Toaster/>
    {/* <h1>Hello</h1> */}
      {!isAdminRoute && <Navbar/>}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SetLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  );
};

export default App;
