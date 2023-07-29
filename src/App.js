import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  //exact props의 true는 route component가 정확히 일치하는 path props에 반응하도록 한다.
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  );

  //(1)
  /*************************************************************
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {

      fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      ).then((response) => response.json()
      ).then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
      
    }, []);
  *************************************************************/

  //(2) async와 await
  /* 
  * function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환합니다.
  * await는 async 함수 안에서만 동작합니다.
  * await는 말 그대로 프라미스가 처리될 때까지 함수 실행을 기다리게 만듭니다. 
  * 프라미스가 처리되면 그 결과와 함께 실행이 재개됩니다. 
  * 프라미스가 처리되길 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에, CPU 리소스가 낭비되지 않습니다.
  * 또, .then() 보다 가독성이 좋고 사용도 간편합니다.
  */
  //(4) react-router 사용으로 Home.js로 분리
  /*************************************************************
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
        
    //const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    //const json = await response.json();

    //위를 아래와 같이 줄일 수 있다.
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies(); //async-await를 사용하기 위한 async 함수 호출
  }, []);
  *************************************************************/

  //(3) Movie.js로 분리
  /*************************************************************
  return <div>
    {loading ? (<h3>Loading...</h3>) : 
      (<div>{movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image}/>
            <h2>{movie.title_long}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>))
        }</div>)
    }</div>
  }
  *************************************************************/

  //(4) react-router 사용으로 Home.js로 분리
  /*************************************************************
  return (
    <div>
      {loading ? (<h3>Loading...</h3>
        ) : (
            <div>{movies.map((movie) => (
              <Movie key={movie.id} img={movie.medium_cover_image} title={movie.title_long} summary={movie.summary} genres={movie.genres}/>
            ))}</div>
        )
      }
    </div>
  );
  *************************************************************/
}

export default App;
