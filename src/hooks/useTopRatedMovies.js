import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // ✅ Correct function name
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
