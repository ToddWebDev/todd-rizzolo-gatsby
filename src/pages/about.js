import React from "react"
import Layout from "../components/layout"
import styles from "../styles/about.module.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Layout title="About" description="More Information">
    <h1>About</h1>
    <p>Such wow. Very React.</p>
    <User
      username="Jane Doe"
      avatar="https://source.unsplash.com/random/100x100"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://source.unsplash.com/random/100x100"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Layout>
)
