import React from 'react'
import styles from "./Movie.module.css"

type Props = {}

const Movie = (props: Props) => {
  return (
    <div className={styles.movie}>
        <img className={styles.image} src="https://image.tmdb.org/t/p/w500/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg" alt="" />
        <p className={styles.title}>Cocaine Bear</p>
        <p className={styles.info}>2023 • 6.5</p>
    </div>
  )
}

export default Movie