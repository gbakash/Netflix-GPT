import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const nowPlayingMovies = () => {
  const dispatch = useDispatch(); // ✅ Correct placement of useDispatch

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };

    fetchMovies();
  }, [dispatch]); // ✅ Include dispatch in dependency array
};

export default nowPlayingMovies;
