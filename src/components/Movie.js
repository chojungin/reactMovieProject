import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Chip, Stack, Rating } from "@mui/material";
import "../style.css";


function Movie({id, img, title, rating, genres, summary}){
    return (
        <>
            <Card variant="outlined">
                <CardMedia>
                    <img src={img} alt={title} className="img"/>
                </CardMedia>
                <CardContent>
                    <Stack direction="row" spacing={1}>
                        {genres.map((g)=>(<Chip key={g} label={g}/>))}
                    </Stack>
                    <Stack direction="row" spacing={1} mt={1} alignItems="center">
                        <Rating name="read-only" precision={0.1} value={rating/2} readOnly/>
                        <Typography variant="h6"><i>{rating.toFixed(2)}</i></Typography>
                    </Stack>
                    <Typography variant="h4" mt={1}>
                        <Link to={`/movie/${id}`} className="link">
                            {title}
                        </Link>
                    </Typography>
                    <Typography variant="body1" mt={2}>
                        <Link to={`/movie/${id}`} className="link">
                            {summary.length > 200 ? `${summary.slice(0,200)}`+"..." : summary}
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
};

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    img : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    summary : PropTypes.string.isRequired
};

export default Movie;