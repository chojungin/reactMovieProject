import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Chip, Stack, Rating } from "@mui/material";
import "../style.css";

function MovieDetail({img, title, genres, description}){

    return (
        <>
            <Card variant="outlined">
                <CardMedia>
                    <img src={img} alt={title} className="img"/>
                </CardMedia>
                <CardContent>
                    <Stack direction="row" spacing={1}>
                        {genres.map((genre)=>(<Chip key={genre} label={genre}/>))}
                    </Stack>
                    <Typography variant="h4" mt={1}>{title}</Typography>
                    <Typography variant="body1" mt={2}>{description}</Typography>
                </CardContent>
                <Link to={`/`} style={{ textDecoration: "none", color: "#000"}}>Back to List</Link>
            </Card>
        </>
    )
};

MovieDetail.propTypes = {
    img : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    description : PropTypes.string.isRequired
};

export default MovieDetail;