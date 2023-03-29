import React, { useState } from 'react'
import { flushSync } from 'react-dom'
import styles from "./Tooltip.module.css"

type Props = {
    tooltipIsVisible:boolean
}

const Tooltip = (props: Props) => {

    // let [seen, setSeen] = useState<boolean>(props.tooltipIsVisible)

  return (
    <div className={styles.tooltipContainer}>
        {props.tooltipIsVisible && <p>Tooltip</p>}
    </div>
  )
}

export default Tooltip