import React from 'react'
import styles from "./Movie.module.css"
import placeholderImage from '../images/placeholderImage.png'

type Props = {
  title:string,
  date:string,
  overview:string,
  poster:string,
  rating:number,
  key:number,
}



const Movie = (props: Props) => {

  let releaseDate =''
if(!props.date){
releaseDate = "Coming Soon"
}
  return (
    <div className={styles.movie}>
        <img className={styles.image} src={props.poster} alt={`${props.title} Poster`} 
        onError={(e) => {
          e.currentTarget.src = placeholderImage;
        }}
        />
        <p className={styles.title}>{props.title}</p>
        <p className={styles.info}>
          {props.date?props.date?.slice(0, 4) +" • "  +props?.rating : releaseDate}
          
          </p>
    </div>
  )
}

export default Movie