import Request from 'superagent'
import $q from 'q'
import _ from 'lodash'

const defaultHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

// const defaultOptions = {}
function requestHandle (url, method = 'get', params = {}, query = {}, op = {}) {
  let defer = $q.defer()
  // op = _.assignIn({}, defaultOptions, op)
  Request(method, url)
    .set(defaultHeader)
    .query(query)
    // .type('form')
    .send(params)
    .end((err, res) => {
      if (res && (res.unauthorized || res.statusCode === 401)) {
        window.location.href = '/login'
      }
      if (err) {
        defer.reject(err)
      } else if (res.body) {
      } else {
        defer.reject()
      }
    })

  return defer.promise
}

var res = {
  ajax: requestHandle
}

res = _.assignIn(res, {
  post: function (url, params, op) {
    return res.ajax(url, 'post', params, op)
  },
  get: function (url, query, op) {
    return res.ajax(url, 'get', {}, query, op)
  },
  put: function (url, params, op) {
    return res.ajax(url, 'PUT', params, op)
  },
  patch: function (url, params, op) {
    return res.ajax(url, 'PATCH', params, op)
  },
  delete: function (url, params, op) {
    return res.ajax(url, 'DELETE', params, op)
  },
  create: function (url, params, op) {
    return res.ajax(url, 'post', params, op)
  }
})

export default res

