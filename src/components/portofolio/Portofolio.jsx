import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/covid19-app.png'
import IMG2 from '../../assets/weather-app.png'
import IMG3 from '../../assets/cook-web.png'
import IMG4 from '../../assets/covid19-web.png'
import IMG5 from '../../assets/gruup-web.png'
import IMG6 from '../../assets/indonature-web.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'COVID-19 App',
    github: 'https://github.com',	
    demo: 'https://dribbble.com/shots/14149982-COVID-19-Application-Design?utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=COVID%2019%20Application%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=COVID%2019%20Application%20Design&utm_medium=Social_Share'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14130215-Weather-App-Design?utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Weather%20App%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Weather%20App%20Design&utm_medium=Social_Share'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Jajanin - Culinary Website',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15967743-Jajanin-Culinary-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Jajanin%20-%20Culinary%20Landing%20Page%20%F0%9F%8D%96&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Jajanin%20-%20Culinary%20Landing%20Page%20%F0%9F%8D%96&utm_medium=Social_Share'
  },
  {
    id: 4,
    image: IMG4,
    title: 'PT Halycon Global Tama Website',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17541340-PT-Halycon-Global-Tama-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=PT%20Halycon%20Global%20Tama%20Landing%20Page%20%F0%9F%8F%A2&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=PT%20Halycon%20Global%20Tama%20Landing%20Page%20%F0%9F%8F%A2&utm_medium=Social_Share'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Gruup Website',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17561916-Gruup-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Gruup%20Landing%20Page%20%F0%9F%8E%81&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Gruup%20Landing%20Page%20%F0%9F%8E%81&utm_medium=Social_Share'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Indonesia Nature Website',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14090619-Indonesia-Nature-Website-Design?utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Indonesia%20Nature%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=julyo11&utm_content=Indonesia%20Nature%20Website%20Design&utm_medium=Social_Share'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio