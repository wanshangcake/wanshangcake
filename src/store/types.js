// all types
let allTypes = {
  user: {
    action: {
      fetch: 'fetch'
    },
    getter: {
      user: 'user'
    },
    mutation: {
      update: 'update'
    }
  }
}

function setPath (obj, path = [], value) {
  if (!path || !path.length) {
    return obj
  }

  if (!obj) {
    obj = {}
  }

  let child = obj
  let leafPathName = path.pop()

  path.forEach((pathName) => {
    if (!child[pathName]) {
      child[pathName] = {}
    }

    child = child[pathName]
  })
  child[leafPathName] = value

  return obj
}

function namespacesLeafType (types, ancestors = [], sep = '.') {
  for (let key in types) {
    let value = types[key]
    let newAncestors = ancestors.slice()

    newAncestors.push(key)

    if (!value) {
      continue
    }

    if (typeof value === 'string') {
      let path = newAncestors.slice()
      newAncestors.push(value)
      let namespaceValue = newAncestors.join(sep)

      setPath(allTypes, path, namespaceValue)
    } else {
      namespacesLeafType(value, newAncestors)
    }
  }

  return allTypes
}

allTypes = namespacesLeafType(allTypes)
Object.freeze(allTypes)

// console.log(allTypes)

export default allTypes
