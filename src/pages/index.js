import React from "react"
import { Seo } from "../components/seo"
import Container from "../components/container"

export default () => {
  return (
    <>
      <Seo />
      <Container>
        <h1>Home</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </Container>
    </>
  )
}
