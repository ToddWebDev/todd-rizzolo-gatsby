import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { image } from "../styles/layout.module.css"

export default () => (
  <Layout>
    <h1>Contact</h1>
    <p>Hey google, index these images...</p>
    <StaticImage
      className={image}
      src="../images/todd-april2022.jpg"
      alt="Todd Rizzolo in april 2022"
      placeholder="blurred"
      width={250}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/sanclemente2022.jpg"
      alt="Todd Rizzolo in san clamente, california 2022"
      placeholder="blurred"
      width={250}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/timpanogos2020.jpg"
      alt="Todd Rizzolo on saddle of Mt Timpanogos"
      placeholder="blurred"
      width={250}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/2016.png"
      alt="Todd Rizzolo in Nashville of 2016"
      placeholder="blurred"
      width={250}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/BryceCanyon_NavajoLoop.png"
      alt="Todd Rizzolo in Bryce Canyon"
      placeholder="blurred"
      width={550}
      height={350}
    />
    <StaticImage
      className={image}
      src="../images/cirque-traverse-2020.jpg"
      alt="Todd Rizzolo at Snowbird"
      placeholder="blurred"
      width={400}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/conrad-rizzolo-80th-bday.jpg"
      alt="Conrad Rizzolo and Todd Rizzolo"
      placeholder="blurred"
      width={250}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/head-shot-2018.png"
      alt="Todd Rizzolo"
      placeholder="blurred"
      width={250}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/internet-connection-meme.png"
      alt="Todd Rizzolo Internet Meme"
      placeholder="blurred"
      width={450}
      height={250}
    />
    <StaticImage
      className={image}
      src="../images/SugarloafPeak2020.jpg"
      alt="Todd Rizzolo on Sugarloaf Peak"
      placeholder="blurred"
      width={350}
      height={350}
    />
    <StaticImage
      className={image}
      src="../images/zion-canyon-2019.jpg"
      alt="Todd Rizzolo on Angels Landing"
      placeholder="blurred"
      width={350}
      height={450}
    />
  </Layout>
)
