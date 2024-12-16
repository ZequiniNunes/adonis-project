'use strict'


class Audit {

  async handle ({ request, auth }, next) {
    const user = await user.getUser()
    request.body = Object.assign(request.body, {action_by: user.id})
    await next()
  }
}

module.exports = Audit
