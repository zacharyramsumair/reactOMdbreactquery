import React, {useState} from 'react'
import styles from './Search.module.css'
import { BsArrowRight } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';


type Props = {
    query:string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>
}

const Search = ({query, setQuery,  refetch}: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log("submitted" , query)
        refetch()
    }

  return (
<section className={styles.search}>
    <h1 className={styles.header}>Find all your Favorite Movies!</h1>
    <form className={styles.searchForm} onSubmit={e => handleSubmit(e)}>
    <div className={styles.searchBar}>
    <span className={styles.searchIcon}><BiSearchAlt2/></span>
    <input type="text"  value={query}  className={styles.searchInput} placeholder="Enter keywords..." onChange={(e) =>setQuery(e.target.value) } />

    </div>
    <button className={styles.submitButton}><BsArrowRight/></button>
    </form>
    {query}
    
</section>
  )
}

export default Search