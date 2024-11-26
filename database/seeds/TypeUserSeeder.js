'use strict'

const Database = use('Database')

class TypeUserSeeder {
  async run () {
    await Database.table('type_users').insert(
      {
        name: 'administrador'
      }
    ),
    await Database.table('type_users').insert(
      {
        name: 'colaborador'
      }
    ),
    await Database.table('type_users').insert(
      {
        name: 'cliente'
      }
    )
  }
}

module.exports = TypeUserSeeder
