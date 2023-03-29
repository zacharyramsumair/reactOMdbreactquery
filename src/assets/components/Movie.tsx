import React, { useRef, useState } from 'react'
import styles from "./Movie.module.css"
import placeholderImage from '../images/placeholderImage.png'
import Tooltip from './Tooltip'
import {GoStar} from "react-icons/go"


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
  let hovered = false

    const enterTooltip = ()=>{

      if(!tooltipIsVisible){
        hovered = true
        setTimeout(()=>{
          console.log("tooltip true")
          if(hovered){
            setTooltipIsVisible(true)

          }
            // tooltipIsVisible.current = true
        },500)

        setInterval(()=>{
          console.log("timed out")
          hovered = false
            setTooltipIsVisible(false)
            // tooltipIsVisible.current = false

        },4000)
      }
       
    }

    const exitTooltip = ()=>{
      console.log("exited")
      hovered = false

        setTooltipIsVisible(false)
        // tooltipIsVisible.current = false

    }

  let releaseDate =''
if(!props.date){
releaseDate = "Coming Soon"
}else{
  releaseDate = props.date
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

          {props.date ? props.date?.slice(0,4) + " •  " : releaseDate}
          {props.date ? <GoStar className={styles.star}/>  : ""}
          {props.date ? props.rating  : ""}

        
          {/* {props.date? props.date?.slice(0, 4) +" • "   +props?.rating : releaseDate}
          <span className={styles.star}>
          {props.date && <GoStar/>}

          </span> */}
         
          </p>
          <Tooltip tooltipIsVisible={tooltipIsVisible} title={props.title} overview={props.overview} rating={props.rating} releaseDate={releaseDate} date={props.date}/>
    </div>
  )
}


export default Movie