import React from "react"
import { feature, video } from "../styles/components.module.css"

const Highlight = () => (
  <section>
    <h2>My Highlight</h2>
    <p>A video highlight of my latest design and development work for Digital Curriculum.</p>
    <div className={feature}>
      <div className={video}>
        <iframe
          src="https://player.vimeo.com/video/543751841?title=0&autoplay=0&muted=1"
          title="Digital Curriculum on Ministry Grid"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  </section>
)

export default Highlight
