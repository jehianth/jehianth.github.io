import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* UIUX */}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Research and Usability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX Engineer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writer</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>e-Commerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Page Multimedia</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Management Systems</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Free and Useful Information</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Attracting Potential Customers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Retaining Existing Customers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Media Speacialist</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Paid Promotion</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services