export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/node-clean-api',
  port: process.env.PORT || 6060,
  jwtSecret: process.env.JWT_SECRET || 'tj654=*5BM'
}
