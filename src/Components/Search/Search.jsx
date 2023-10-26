import React from 'react'
import './Search.css'
import { useDebounce } from '../../hooks/useDebounce'
function Search({ serchTerm, setSeachTerm }) {
  // const debounceCallback = useDebounce((e) => setSeachTerm(e.target.value))
  function changeHandler(e) {
    console.log(e.target.value)
    setSeachTerm(e.target.value)
  }
  return (
    <div className='inpCont'>
      <input type="text" onChange={changeHandler} placeholder='Enter photo Id' id="" />
    </div>
  )
}

export default Search
