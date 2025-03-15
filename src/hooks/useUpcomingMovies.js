import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // ✅ Correct function name
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
