import cn from "classnames"

const mapKeys = (obj, prefix) => {
  const mappedEntries = Object.entries(obj).map(([key, val]) => ([`${prefix}${key}`, val]))
  return Object.fromEntries(mappedEntries)
}

const addPrefix = (classes, prefix) => {
  const newClasses = classes.map(className => {
    if (typeof className === "string" && className.length) {
      return className.startsWith(prefix) ? className : `${prefix}${className}`
    }
    if (className && typeof className === "object" && className.constructor === Object) {
      return mapKeys(className, prefix)
    }
    if (className && typeof className === "object" && className.constructor === Array) {
      return addPrefix(className, prefix)
    }

    return null
  })

  return newClasses
}

const processClassNames = prefix => (...classNames) => cn(...addPrefix(classNames, prefix))

export default processClassNames
