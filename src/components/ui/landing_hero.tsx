import Link from 'next/link'
import React from 'react'

const landing_hero = () => {
  return (
    <>

      <div className="hero" id="home">
        <div className="hero__container">
          <h2 className="hero__heading">Starting From <span>The STEM</span></h2>
          <p className="hero__decription"></p>
          <button className="main__btn"><a href="#languages">Let's Start Learning</a></button>
        </div>
      </div>
    </>

  )
}

export default landing_hero