import React, { useState } from 'react'
import Search from '../Components/Search/Search'
import UserList from '../Components/UserList/UserList'
import DetailsPage from './DetailsPage'

function Home() {
  const [serchTerm , setSeachTerm] = useState("")
  return (
    <div>
      <Search serchTerm={serchTerm} setSeachTerm={setSeachTerm} />
      {
       (!serchTerm) ? (<UserList />) : (<DetailsPage key={serchTerm} name={serchTerm } />)
      }
    </div>
  )
}

export default Home
