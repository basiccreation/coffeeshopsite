import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Globals/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="cup a joe"
      styleClass="default-background"
    />
    <Info />
    <div className="container">
      <Link to="/about/">
        <button className="btn mb-5 text-uppercase btn-yellow">
          about page
        </button>
      </Link>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
