import React from 'react'
import styles from './DisplayMovies.module.css'
import Movie from './Movie'

type Props = {}

const DisplayMovies = (props: Props) => {
  return (
    <section className={styles.displayMovies}>
      <h2 className={styles.displayHeader}>Trending Now</h2>
      <div className={styles.moviesGrid}>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    </section>
  )
}

export default DisplayMovies