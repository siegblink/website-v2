import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { HeaderStyled, NavLinks, Button } from "./Header.styles"

interface ComponentProps {
  siteTitle: string
}

export const Header: React.FC<ComponentProps> = ({
  siteTitle,
}: ComponentProps) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeaderStyled>
      <Link to="/" style={{ width: "300px" }}>
        <Img fluid={data.logo.childImageSharp.fluid} />
      </Link>
      <NavLinks>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <Button>Support Us</Button>
    </HeaderStyled>
  )
}
