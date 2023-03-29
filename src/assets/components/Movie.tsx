import React, { useRef, useState } from 'react'
import styles from "./Movie.module.css"
import placeholderImage from '../images/placeholderImage.png'
import Tooltip from './Tooltip'


type Props = {
  title:string,
  date:string,
  overview:string,
  poster:string,
  rating:number,
  key:number,
}



const Movie = (props: Props) => {


  let [tooltipIsVisible, setTooltipIsVisible] = useState<boolean>(false)
  // let tooltipIsVisible = useRef<boolean>(false)

    const enterTooltip = ()=>{

      if(!tooltipIsVisible){
        setTimeout(()=>{
          console.log("tooltip true")
            setTooltipIsVisible(true)
            // tooltipIsVisible.current = true
        },500)

        setInterval(()=>{
          console.log("timed out")

            setTooltipIsVisible(false)
            // tooltipIsVisible.current = false

        },10000)
      }
       
    }

    const exitTooltip = ()=>{
      console.log("exited")

        setTooltipIsVisible(false)
        // tooltipIsVisible.current = false

    }

  let releaseDate =''
if(!props.date){
releaseDate = "Coming Soon"
}
  return (
    <div className={styles.movie}  onMouseEnter={enterTooltip}
    onMouseLeave={exitTooltip}>
        <img className={styles.image} src={props.poster} alt={`${props.title} Poster`} 
        onError={(e) => {
          e.currentTarget.src = placeholderImage;
        }}
        />
        <p className={styles.title}>{props.title}</p>
        <p className={styles.info}>
          {props.date?props.date?.slice(0, 4) +" • "  +props?.rating : releaseDate}
          </p>
          <Tooltip tooltipIsVisible={tooltipIsVisible}/>
    </div>
  )
}


export default Movie