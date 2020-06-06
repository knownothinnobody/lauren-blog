import React from "react"
import * as Gatsby from "gatsby"
import { render, shallow, mount } from "enzyme"

import Layout from "../../src/components/layout"

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

describe("Layout", () => {
  it("renders correctly", () => {
    expect(
      render(
        <Layout>
          <h1>TEST</h1>
        </Layout>
      )
    ).toMatchSnapshot()
  })
})
