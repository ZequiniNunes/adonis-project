'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
  tokens () {
    return this.basMany('App/Models/Token')
  }

  cliente () {
    return this.hasOne('App/Models/Client')
  }
  
  typeUser (){
    return this.belongsTo('App/Models/TypeUser')
  }
}

module.exports = User