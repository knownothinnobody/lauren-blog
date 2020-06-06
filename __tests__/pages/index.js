import React from "react"
import * as Gatsby from "gatsby"
import { render, shallow, mount } from "enzyme"

import Page from "../../src/pages/index"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

const cardNode = {
  frontmatter: {
    title: "CARD TITLE",
    posterImage: "example.com",
    date: "May 3, 2020",
  },
  fields: {
    slug: "/blog/test-slug",
  },
  timeToRead: 5,
  excerpt: "EXCERPT HERE",
}

describe("Index Page", () => {
  it("renders with 1 card correctly", () => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: "Site Title",
          description: "Site Description",
          author: "Author",
        },
      },
      allMarkdownRemark: {
        edges: [
          {
            node: cardNode,
          },
        ],
      },
    }))
    expect(shallow(<Page />)).toMatchSnapshot()
  })
})
