/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('sds', (table) => {
    table.integer('id').primary(),
      table.string('instructions'),
      table.string('expanded_instructions'),
      table.decimal('set_time'),
      table.integer('timer')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('sds')
}
