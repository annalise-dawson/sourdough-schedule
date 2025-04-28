/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('starter').del()
  await knex('starter').insert([
    {
      id: 1,
      instructions:
        'Combine 1/2 cup of flour and 1/4 cup warm water in a jar, place in a warm spot for 24 hours',
      day: 1,
    },
    {
      id: 2,
      instructions:
        'Check for bubbles, if there is bubbles go to day 3, if not wait another 24 hours',
      day: 2,
    },
    {
      id: 3,
      instructions:
        'Discard half and add 1/2 cup of flour and 1/4 cup warm water, place in a warm spot for 24 hours',
      day: 3,
    },
    {
      id: 4,
      instructions:
        'Discard half and add 1/2 cup of flour and 1/4 cup warm water, place in a warm spot for 24 hours',
      day: 4,
    },
    {
      id: 5,
      instructions:
        'Discard half and add 1/2 cup of flour and 1/4 cup warm water, place in a warm spot for 24 hours',
      day: 5,
    },
    {
      id: 6,
      instructions:
        'Discard half and add 1/2 cup of flour and 1/4 cup warm water, place in a warm spot for 24 hours',
      day: 6,
    },
    {
      id: 7,
      instructions:
        'Discard half and add 1/2 cup of flour and 1/4 cup warm water, place in a warm spot for 24 hours',
      day: 7,
    },
    {
      id: 8,
      instructions:
        'Discard half and add 1/2 cup of flour and 1/4 cup warm water, place in a warm spot for 24 hours',
      day: 8,
    },
    {
      id: 9,
      instructions:
        'By now your starter should be doubling in size after it has been fed and it is ready to use, if not just keeping feeding until it does',
      day: 9,
    },
  ])
}
