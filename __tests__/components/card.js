import React from "react"
import { render, shallow, mount } from "enzyme"

import Card from "../../src/components/header"

describe("Card", () => {
  it("renders correctly", () => {
    expect(render(<Card />)).toMatchSnapshot()
  })
})
