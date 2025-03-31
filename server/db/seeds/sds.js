/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('sds').del()
  await knex('sds').insert([
    { id: 1, instructions: 'Mix starter', set_time: 0 },
    { id: 2, instructions: 'Mix base', set_time: 400 },
    { id: 3, instructions: 'Mix all together', set_time: 500 },
    { id: 4, instructions: 'Stretch and fold', set_time: 530 },
    { id: 5, instructions: 'Stretch and fold', set_time: 600 },
    { id: 6, instructions: 'Stretch and fold', set_time: 630 },
    { id: 7, instructions: 'Stretch and fold', set_time: 700 },
    { id: 8, instructions: 'Bulk ferment', set_time: 730 },
    { id: 9, instructions: 'Divide and shape dough', set_time: 930 },
    {
      id: 10,
      instructions: 'Shape dough and place in proofing basket',
      set_time: 1000,
    },
    { id: 11, instructions: 'Put in fridge', set_time: 1030 },
    { id: 12, instructions: 'Pre-heat oven and dutch oven', set_time: 0 },
    {
      id: 13,
      instructions: 'Score dough and place in oven with lid on',
      set_time: 100,
    },
    { id: 14, instructions: 'Take lid off', set_time: 130 },
    { id: 15, instructions: 'Take out of oven', set_time: 200 },
    { id: 16, instructions: 'Enjoy!', set_time: 400 },
  ])
}
