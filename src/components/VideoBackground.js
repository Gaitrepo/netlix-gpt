import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";


//Fatch trailer video and updating the store with trailer video
const VideoBackground = ({ movieId }) => {
  const trailerVideo=useSelector(store=> store.movies?.trailerVideo);
  const dispatch=useDispatch();
  //fetch trailor
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/653346/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.lenght ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo());
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video text-white"
       
        src="https://www.youtube.com/embed/Kdr5oedn7q8?si=L8BOa1Uvk4m-y-JI?&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
