import React from "react"
import * as Gatsby from "gatsby"
import { render, shallow, mount } from "enzyme"

import Post from "../../src/templates/post"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

beforeEach(() => {
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
})

describe("Post", () => {
  it("renders correctly", () => {
    const data = {
      markdownRemark: {
        frontmatter: {
          date: "May 3, 2020",
          title: "Post Title",
        },
        fields: {
          slug: "/blog/test-slug",
        },
        timeToRead: 5,
        excerpt: "EXCERPT HERE",
        html: <h1>TEST</h1>,
      },
    }
    expect(render(<Post data={data} />)).toMatchSnapshot()
  })
})
