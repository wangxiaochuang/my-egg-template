const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = app => {
  const config = {}
  config.passReqToCallback = true
  config.secretOrKey = 'secret'
  config.issuer = 'localhost'
  config.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()

  app.passport.use('jwt', new JwtStrategy(config, function(req, payload, done) {
    const user = {
      provider: 'jwt',
      payload
    }
    console.log('############ 0')
    app.passport.doVerify(req, user, done)
  }))

  // app.passport.verify(async (ctx, user) => {
  //   console.log('############ 1')
  //   return true
  // })
  //
  // app.passport.serializeUser(async (ctx, user) => {
  //   console.log('############ 2')
  //   return user
  // })
  // app.passport.deserializeUser(async (ctx, user) => {
  //   console.log('############ 3')
  //   return user
  // })
}