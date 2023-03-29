import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import styles from "./Tooltip.module.css";

type Props = {
	tooltipIsVisible: boolean;
	title: string;
	releaseDate: string;
	overview: string;
	rating: number;
	date: string;
};

const Tooltip = (props: Props) => {
	// let [seen, setSeen] = useState<boolean>(props.tooltipIsVisible)
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(()=>{
        const handleWindowMouseMove = (e) => {
            setCoords({
              x: e.clientX,
              y: e.clientY,
            });
          };
          window.addEventListener('mousemove', (e) => handleWindowMouseMove(e) );
      
          return () => {
            window.removeEventListener(
              'mousemove',
              handleWindowMouseMove,
            );
          };
        }, []);

	let tooltipElements = (
		<>
              {/* <h2>Width: {windowSize.current[0]}  {coords.x}</h2> */}
			<h3 className={styles.title}>{props.title}</h3>
            <p className={styles.info}>
				{props.date
					? props.date?.slice(0, 4) + " • " + props?.rating
					: props.releaseDate}
			</p>
			<p className={styles.overview}>{props.overview}</p>
			
		</>
	);

    if(props.tooltipIsVisible){
        return (
            <div className={`${styles.tooltipContainer} ${coords.x > windowSize.current[0]/2 ? styles.leftTooltip : styles.rightTooltip}`}>
                { tooltipElements}
            </div>
        );
    }

    return <></>
	
};

export default Tooltip;
