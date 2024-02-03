import React, { useEffect, useState } from 'react'

function Bookfolio() {

const [theme, setTheme]= useState("") 
const mode = () => {
    theme == "darktheme"? setTheme("lighttheme"):setTheme("darktheme")
}
useEffect(() => {
    document.body.className = theme
},[theme]);


  return (
    <>
    <div>
      {
      theme === "darktheme"?
      <button onClick={mode}>Enable Light Theme</button>: <button  onClick={mode}>Enable Dark Theme</button>
    }
    <center>

        <h1>Bookfolio</h1>
        <p>Lorem ipsum dolor sit amet consectetur </p>
        <div className='img'>
            <img src="./public/images/book.jpg" alt="" />
            <img src="./public/images/book.jpg" alt="" />
            <img src="./public/images/book.jpg" alt="" />
        </div>
    </center>

    </div>
    </>
  )
}

export default Bookfolio
