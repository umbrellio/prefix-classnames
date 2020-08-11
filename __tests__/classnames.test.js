import classname from "../src"

const cn = classname("custom_prefix__")

describe("ClassNames", () => {
  it("checks strings", () => {
    expect(cn("tabs")).toEqual("custom_prefix__tabs")
    expect(cn("tabs", "tabs__tab")).toEqual("custom_prefix__tabs custom_prefix__tabs__tab")
    expect(cn("")).toEqual("")
  })

  it("checks objects", () => {
    expect(cn({ tabs: true })).toEqual("custom_prefix__tabs")

    const classnames = {
      tabs: true,
      tabs__tab: true,
      tabs__tab_active: false,
      header: null,
    }
    expect(cn(classnames, "mb"))
      .toEqual("custom_prefix__tabs custom_prefix__tabs__tab custom_prefix__mb")
  })

  it("checks arrays", () => {
    expect(cn(["tabs", { tabs__tab: true, tabs__tab_active: false }, "mb"]))
      .toEqual("custom_prefix__tabs custom_prefix__tabs__tab custom_prefix__mb")
  })

  it("ignores other types", () => {
    expect(cn(true, "tabs", 123, null, undefined)).toEqual("custom_prefix__tabs")
  })

  it("doesn't duplicate prefix", () => {
    expect(cn("tabs", "custom_prefix__tabs_active"))
      .toEqual("custom_prefix__tabs custom_prefix__tabs_active")
  })
})
