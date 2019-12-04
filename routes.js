const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('achivement', '/achivement/:foo(bar|baz)')