/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('sds').del()
  await knex('sds').insert([
    { id: 1, instructions: 'Mix starter', set_time: 0 },
    { id: 2, instructions: 'Mix base', set_time: 4 },
    { id: 3, instructions: 'Mix all together', set_time: 5 },
    { id: 4, instructions: 'Stretch and fold', set_time: 5.5 },
    { id: 5, instructions: 'Stretch and fold', set_time: 6 },
    { id: 6, instructions: 'Stretch and fold', set_time: 6.5 },
    { id: 7, instructions: 'Stretch and fold', set_time: 7 },
    { id: 8, instructions: 'Bulk ferment', set_time: 7.5 },
    { id: 9, instructions: 'Divide and shape dough', set_time: 9.5 },
    {
      id: 10,
      instructions: 'Shape dough and place in proofing basket',
      set_time: 10,
    },
    { id: 11, instructions: 'Put in fridge', set_time: 10.5 },
    { id: 12, instructions: 'Pre-heat oven and dutch oven', set_time: 0 },
    {
      id: 13,
      instructions: 'Score dough and place in oven with lid on',
      set_time: 1,
    },
    { id: 14, instructions: 'Take lid off', set_time: 1.5 },
    { id: 15, instructions: 'Take out of oven', set_time: 2 },
    { id: 16, instructions: 'Enjoy!', set_time: 4 },
  ])
}
