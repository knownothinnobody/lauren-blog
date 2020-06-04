import React from "react"
import * as Gatsby from "gatsby"
import { render, shallow, mount } from "enzyme"

import Footer from "../../src/components/footer"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

describe("Footer", () => {
  it("renders correctly without social links", () => {
    useStaticQuery.mockImplementation(() => ({
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
    expect(render(<Footer />)).toMatchSnapshot()
  })
  it("renders correctly with social links", () => {
    useStaticQuery.mockImplementation(() => ({
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                linkedinLink: "example.com",
              },
            },
          },
        ],
      },
    }))
    expect(render(<Footer />)).toMatchSnapshot()
  })
})
