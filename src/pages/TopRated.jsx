import React from 'react'
import Category from '../components/Category'


const TopRated = ({fetchURL}) => {
  return (
    <Category fetchURL={fetchURL}/>
  )
}

export default TopRated
