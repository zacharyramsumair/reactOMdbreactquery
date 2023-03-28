import React from 'react'
import styles from './Search.module.css'
import { BsArrowRight } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';


type Props = {}

const Search = (props: Props) => {
  return (
<section>
    <h1>Find all your Favorite Movies!</h1>
    <form className={styles.searchForm}>
    <div className={styles.searchBar}>
    <span className={styles.searchIcon}><BiSearchAlt2/></span>
    <input type="text"  className={styles.searchInput} placeholder="Enter keywords..."/>

    </div>
    <button className={styles.submitButton}><BsArrowRight/></button>
    </form>
</section>
  )
}

export default Search