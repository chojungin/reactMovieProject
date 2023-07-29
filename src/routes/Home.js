import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import Load from "../components/Load";
import "../style.css";

function Home(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState([]);

    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json();
        
        console.log(json);
        
        setCount(json.data.movie_count);
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="container">
            {loading ? (
                            <>
                                <Load/>
                            </>
                    ) : (
                            <>
                                {movies.map((movie) => (
                                    <Movie 
                                        key={movie.id} 
                                        id={movie.id}
                                        img={movie.medium_cover_image} 
                                        title={movie.title_long}
                                        rating={movie.rating}
                                        summary={movie.summary} 
                                        genres={movie.genres}/>
                                ))}
                            </>
                    )
            }
        </div>
    );
}
/*<div className="count"><h4>total {count}</h4></div>
<div className="count">
    <Skeleton variant="rectangular" width={100} height={30}/>
</div>*/
export default Home;