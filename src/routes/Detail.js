import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
//import LoadDetail from "../components/LoadDetail";
import "../style.css";

function Detail(){

    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json);
        
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    },[]);

    return (
        <div className="container">
            {loading ? (
                            <>
                                loading...
                            </>
                    ) : (
                            <>
                                <MovieDetail 
                                    key={movie.id}
                                    img={movie.medium_cover_image} 
                                    title={movie.title_long}
                                    genres={movie.genres}
                                    description={movie.description_full}/>
                            </>
                    )
            }
        </div>
    );
}

export default Detail;

/*************************************************************
 * Publishing
 * 
 * (1) npm i gh-pages
 * gh-pages ? 'github pages'에 결과물을 upload 할 수 있도록 도와주는 package
 * github pages ? github에서 제공하는 무료 서비스로
 * package.json의 dependencies에 "gh-pages"를 확인하여 정상 설치 확인
 * 
 * npm run build
 * package.json의 "build" script를 실행하는 명령어
 * 결과물의 production ready code(코드 압축 및 최적화를 의미)생성
 * build 폴더가 생성되며 이를 github로 push해주어야한다.
 * 
 * (2) package.json의 최하단에 "homepage": "https://깃허브유저네임.github.io/레포지터리명" 를 입력
 * "homepage": "https://chojungin.github.io/reactMovieProject"
 * 이는 배포된 페이지의 주소가 된다.
 * 
 * (3) "scripts"에 항목 추가
 * "deploy" : "gh-pages -d build",  //gh-pages를 실행시키고 'build' 디렉토리를 배포
 * "predeploy" : "npm run build"    //depoly가 수행되기전에 build, build와 deploy를 한번에 실행
 * 
 * (3) terminal에서 npm run deploy 명령어를 입력한다.
 * 
*************************************************************/