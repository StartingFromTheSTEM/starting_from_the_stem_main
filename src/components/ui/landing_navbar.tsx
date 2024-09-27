
import React from 'react'
import Link from 'next/link'
import { useState, use, useEffect } from "react";
import "@/components/styles/component_globals.css"

const landing_navbar = () => {


  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#home" id="navbar__logo">Starting From the STEM</a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link href="/" className="navbar__links" id="home-page">Home</Link>
          </li>
          <li className="navbar__item">
            <Link href="/" className="navbar__links" id="about-page">About</Link>
          </li>
          <li className="navbar__item">
            <Link href="/" className="navbar__links" id="languages-page">Content</Link>
          </li>
          <li className="navbar__item">
            <Link href="/" className="button" id="signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default landing_navbar