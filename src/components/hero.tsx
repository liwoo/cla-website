import React from "react"
import { Container } from "./layouts/container"

function HeroComponent() {
  return (
    <Container>
      <div className="my-8 mt-4 card image-full">
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
            <button className="text-black btn bg-primary-content">Watch Sermon</button>
            <button className="btn btn-secondary">More Sermons</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HeroComponent 
