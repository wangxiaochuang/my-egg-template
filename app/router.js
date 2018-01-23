module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/news', controller.news.list)

  router.post('/login', app.passport.authenticate('jwt'))
}