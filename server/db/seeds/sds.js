/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('sds').del()
  await knex('sds').insert([
    { id: 1, instructions: 'Mix ingredients together', set_time: 0 },
    { id: 2, instructions: 'Stretch and fold', set_time: 0.5 },
    { id: 3, instructions: 'Stretch and fold', set_time: 1 },
    { id: 4, instructions: 'Stretch and fold', set_time: 1.5 },
    { id: 5, instructions: 'Stretch and fold', set_time: 2 },
    { id: 6, instructions: 'Bulk ferment', set_time: 2.5 },
    { id: 7, instructions: 'Divide and shape dough', set_time: 4.5 },
    {
      id: 8,
      instructions: 'Shape dough and place in proofing basket',
      set_time: 5,
    },
    { id: 9, instructions: 'Put in fridge and leave overnight', set_time: 5.5 },
    {
      id: 10,
      instructions: 'NEXT DAY Pre-heat oven and dutch oven',
      set_time: 0,
    },
    {
      id: 11,
      instructions: 'Score dough and place in oven with lid on',
      set_time: 1,
    },
    { id: 12, instructions: 'Take lid off', set_time: 1.5 },
    { id: 13, instructions: 'Take out of oven', set_time: 2 },
    { id: 14, instructions: 'Enjoy!', set_time: 4 },
  ])
}
