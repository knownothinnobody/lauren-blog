import React from "react"
import * as Gatsby from "gatsby"
import { render, shallow, mount } from "enzyme"

import Page from "../../src/pages/about"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

beforeEach(() => {
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
          node: {
            frontmatter: {},
          },
        },
      ],
    },
  }))
})

describe("About Page", () => {
  it("renders correctly", () => {
    expect(render(<Page />)).toMatchSnapshot()
  })
})
