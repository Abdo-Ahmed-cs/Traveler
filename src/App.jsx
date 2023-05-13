import React, { useEffect } from 'react'
import "./style/style.css"
import beachV from "/beach.mp4"
import carV from "/car.mp4"
import flyingV from "/flying.mp4"
import roadV from "/road.mp4"
import rocksV from "/rocks.mp4"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faFacebook, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"

import {useDispatch, useSelector} from "react-redux"
import { autoSlide, myContent, myVideo, slide } from './app/travelSlice'

export default function App() {
  const video = useSelector(myVideo)
  const content = useSelector(myContent)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("hello there")
    const interval = setInterval(() => {
      dispatch(autoSlide())
    }, 7000)
  }, [])
  return (
    <section className='travel'>
      <header className='travel__header'>
        <div className="travel__nav container">
          <span className='travel__logo'>Traveler</span>
          <nav className='travel__navItems'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Explore</a>
            <a href="">Gallary</a>
            <a href="">Contact</a>
          </nav>
          <FontAwesomeIcon icon={faBars} className='travel__mbtn'/>
        </div>
      </header>

      <div className='travel__content container'>
        <h1>{content[video - 1].title}</h1>
        <p>{content[video - 1].desc1}</p>
        <p>{content[video - 1].desc2}</p>
        <button className='travel__btn'>Learn More</button>

        <div className='travel__slider'>
          <div className={`travel__item travel__item${video === 1 ? '--active': ''}`} onClick={() => dispatch(slide(1))}></div>
          <div className={`travel__item travel__item${video === 2 ? '--active': ''}`} onClick={() => dispatch(slide(2))}></div>
          <div className={`travel__item travel__item${video === 3 ? '--active': ''}`} onClick={() => dispatch(slide(3))}></div>
          <div className={`travel__item travel__item${video === 4 ? '--active': ''}`} onClick={() => dispatch(slide(4))}></div>
          <div className={`travel__item travel__item${video === 5 ? '--active': ''}`} onClick={() => dispatch(slide(5))}></div>
        </div>

        <div className='travel__media'>
            <a href="https://web.facebook.com/profile.php?id=100005933071217" target='_blank'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/Abdo_Megahed03" target='_blank'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/abdelrahman-ahmed-saad-b74b35260/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/Abdo-Ahmed-cs" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
      </div>

      <div className='travel__filter'></div>
      <video src={beachV} className={`travel__video travel__video${video === 1 ? '--active': ''}`} autoPlay loop muted></video>
      <video src={carV} className={`travel__video travel__video${video === 2 ? '--active': ''}`} autoPlay loop muted></video>
      <video src={flyingV} className={`travel__video travel__video${video === 3 ? '--active': ''}`} autoPlay loop muted></video>
      <video src={roadV} className={`travel__video travel__video${video === 4 ? '--active': ''}`} autoPlay loop muted></video>
      <video src={rocksV} className={`travel__video travel__video${video === 5 ? '--active': ''}`} autoPlay loop muted></video>
      
    </section>
  )
}
