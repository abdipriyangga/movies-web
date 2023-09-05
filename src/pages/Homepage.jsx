import React, { useEffect } from 'react'
import { getMovies } from '../redux/actions/movies'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
const { REACT_APP_IMGURL_TMDB: URL_IMAGE } = process.env;
const Homepage = (props) => {
    const { data } = props.movies
    useEffect(() => {
        props.getMovies()
    }, [])
    return (
        <main className='bg-sky-950 w-full h-full p-5'>
            <h1 className='text-white font-bold text-center text-3xl'>MOVIES LIST</h1>
            <section className='w-full h-full p-4 items-center justify-center flex flex-wrap gap-20'>
                {data.map((movie) => {
                    return (
                        <Link to={`/movie/${movie.id}/detail`}>
                            <section className='bg-slate-100 w-96 h-4/5 p-2 mt-10 rounded'>
                                <h2 className='font-bold text-center mb-3 text-xl'>{movie.original_title}</h2>
                                <img alt='movie-image' src={`${URL_IMAGE}${movie.poster_path}`} />
                                <p className='font-semibold italic mt-4 text-center'>Release Date: {movie.release_date}</p>
                                <p className='font-semibold text-center mb-5'>Rating: {movie.vote_average}</p>
                            </section>
                        </Link>
                    )
                })}
            </section>

        </main>
    )
}

const mapStateToProps = (state) => ({
    movies: state.movies
});
const mapDispatchToProps = { getMovies };
export default connect(mapStateToProps, mapDispatchToProps)(Homepage)