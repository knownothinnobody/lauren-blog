import React from "react"
import * as Gatsby from "gatsby"
import { render, shallow, mount } from "enzyme"

import SEO from "../../src/components/seo"

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
  }))
})

describe("SEO", () => {
  it("renders correctly", () => {
    expect(render(<SEO title="Page Title" />)).toMatchSnapshot()
  })
})
