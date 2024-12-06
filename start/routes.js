'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('users', 'UserController').apiOnly().middleware('auth.jwt')
Route.resource('clients', 'ClientController').apiOnly().middleware('auth.jwt')
Route.resource('exercises', 'ExerciseController').apiOnly().middleware('auth.jwt')
Route.resource('training', 'TrainingController').apiOnly().middleware('auth.jwt')
Route.resource('permissions', 'PermissionController').apiOnly().middleware('auth.jwt')
Route.resource('roles', 'RoleController').apiOnly().middleware('auth.jwt')

