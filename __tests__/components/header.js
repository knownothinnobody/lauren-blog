import React from "react"
import { render, shallow, mount } from "enzyme"

import Header from "../../src/components/header"

describe("Header", () => {
  it("renders correctly", () => {
    expect(render(<Header />)).toMatchSnapshot()
  })

  it("has initial state of is-not-active", () => {
    const wrapper = shallow(<Header />)
    const instance = wrapper.instance()
    expect(wrapper.state("isOpen")).toBe("is-not-active")
  })

  it("has state of is-active after toggle", () => {
    const wrapper = shallow(<Header />)
    const instance = wrapper.instance()
    instance.toggleNavbar()
    expect(wrapper.state("isOpen")).toBe("is-active")
  })

  it("has state of is-not-active after two toggles", () => {
    const wrapper = shallow(<Header />)
    const instance = wrapper.instance()
    instance.toggleNavbar()
    instance.toggleNavbar()
    expect(wrapper.state("isOpen")).toBe("is-not-active")
  })
})
