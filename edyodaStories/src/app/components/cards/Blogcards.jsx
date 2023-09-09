"use client"
import Menu from '../menuapi/Menuapi'
import { useState } from 'react'
import Singlecard from './Singlecard'

const Blogcards = () => {
    const [menuData, setmenuData] = useState(Menu)
    // console.log(menuData)
    return (
      <>
       <Singlecard menuData={menuData}/>
      </>
    )
  }
  
  export default Blogcards