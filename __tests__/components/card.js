import React from "react"
import { render, shallow, mount } from "enzyme"

import Card from "../../src/components/card"

describe("Card", () => {
  it("renders with props correctly", () => {
    expect(
      render(
        <Card
          title="Title"
          content="<h1>TEST</h1>"
          path="/blog/test-slug"
          posterImage="/static/assets/logo.png"
          date="May 22, 2020"
          readingTime={5}
        />
      )
    )
  })

  it("renders with props and additional classes correctly", () => {
    expect(
      render(
        <Card
          title="Title"
          content="<h1>TEST</h1>"
          path="/blog/test-slug"
          posterImage="/static/assets/logo.png"
          date="May 22, 2020"
          readingTime={5}
          additionalClasses="test-class"
        />
      )
    )
  })
})
