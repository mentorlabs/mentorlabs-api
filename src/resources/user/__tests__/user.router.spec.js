import router from '../user.router'

describe('user router', () => {
  test('has requesting user routes', () => {
    const routes = [
      { path: 'api/users/me', method: 'get' },
      { path: 'api/users/me', method: 'update' },
    ]

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})