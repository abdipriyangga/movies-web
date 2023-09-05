import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovies } from '../redux/actions/movies';
import { connect } from "react-redux";
const { REACT_APP_IMGURL_TMDB: URL_IMAGE } = process.env;
const MovieDetail = (props) => {
    const { id } = useParams();
    const { detail } = props.movies;
    useEffect(() => {
        props.getDetailMovies(id);
    }, [])
    return (
        <main className='bg-sky-950 w-full h-full p-5'>
            <h1 className='text-white font-bold text-center text-3xl'>{detail.original_title}</h1>
            <section className='w-full h-full p-4 items-center justify-center flex flex-wrap gap-20'>
                <img alt='movie-image' src={`${URL_IMAGE}${detail.poster_path}`} />
                <article className='text-white'>
                    <h2 className='font-bold text-lg mt-4 text-left'>Overview</h2>
                    <p className='font-semibold mt-2 text-left'>{detail.overview}</p>
                    <p className='font-semibold italic mt-4 text-left'>Release Date: {detail.release_date}</p>
                    <p className='font-semibold text-left mb-5'>Rating: {detail.vote_average}</p>
                    <p className='font-semibold text-left mb-5'>Budget: USD {detail.budget}</p>
                </article>
            </section>

        </main>
    )
}


const mapStateToProps = (state) => ({
    movies: state.movies,
});
const mapDispatchToProps = {
    getDetailMovies
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)