import React from 'react'
import styles from "./Movie.module.css"

type Props = {
  title:string,
  date:string,
  overview:string,
  poster:string,
  rating:number,
  key:number,
}

const Movie = (props: Props) => {
  return (
    <div className={styles.movie}>
        <img className={styles.image} src={props.poster} alt="" />
        <p className={styles.title}>{props.title}</p>
        <p className={styles.info}>{props.date.slice(0, 4)} • {props.rating}</p>
    </div>
  )
}

export default Movie