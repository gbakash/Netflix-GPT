import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // ✅ Correct function name
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
