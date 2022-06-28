import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

const data = [
  {
    avatar: AVTR1,
    name: 'Agung Laksono',
    review: 'As usual very helpful, nothing to much trouble and the end result as I envisaged. Good price point.'
  },
  {
    avatar: AVTR2,
    name: 'Nindy Aprilia',
    review: 'Our site is beautiful! It is easy to navigate. The support has been remarkable for WordPress.'
  },
  {
    avatar: AVTR3,
    name: 'Faris Ahmad',
    review: 'Provided me with an affordable and streamlined solution to launch my mobile application.'
  },
  {
    avatar: AVTR4,
    name: 'Vestia Zeta',
    review: 'I loved working with you to recently deliver a collaboration of gaming content. His knowledge is incredible and his commitment to sharing the message is inspiring.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        What people say about me
      </h5>
      <h2>
        Testimonials
      </h2>
      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Testimonials