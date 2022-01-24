import React from "react"
import { Container } from "./layouts/container"

function HeroComponent() {
  return (
    <Container>
      <div className="my-8 mt-4 rounded-lg card image-full">
        <figure className="aspect-w-16 aspect-h-9 lg:aspect-h-7">
          <img src="https://images.unsplash.com/photo-1515295411605-71de55c34a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Pastor Preaching" />
        </figure>
        <div className="flex-col justify-between px-8 py-12 card-body">
          <div className="w-3/4 md:w-1/2 lg:w-1/4">
            <h2 className="card-title">Some Cool Sermon</h2>
            <p>There will be a fasting season for this new year starting on January 10</p>
            <cite className="text-sm">Jeremiah 17:9</cite>
          </div>
          <div className="flex card-actions">
            <button className="text-black btn bg-primary-content">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 46.875 46.875"><path data-name="Icon awesome-play-circle" d="M23.437 0a23.438 23.438 0 1 0 23.438 23.437A23.433 23.433 0 0 0 23.437 0Zm10.934 25.705L17.737 35.25a2.272 2.272 0 0 1-3.374-1.985V13.608a2.274 2.274 0 0 1 3.374-1.984l16.634 10.113a2.275 2.275 0 0 1 0 3.968Z" fill="#710071" /></svg>
              Watch Sermon
            </button>
            <button className="btn btn-secondary">More Sermons  &#8594;</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HeroComponent 
