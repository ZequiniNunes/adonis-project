'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})

Route.resource('users', 'UserController').apiOnly()
Route.resource('clients', 'ClientController').apiOnly()
Route.resource('exercises', 'ExerciseController').apiOnly()
Route.resource('training', 'TrainingController').apiOnly()