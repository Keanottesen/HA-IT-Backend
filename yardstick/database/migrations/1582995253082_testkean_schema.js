'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestkeanSchema extends Schema {
  up () {
    this.create('testkeans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('testkeans')
  }
}

module.exports = TestkeanSchema
