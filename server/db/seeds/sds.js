/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('sds').del()
  await knex('sds').insert([
    {
      id: 1,
      instructions: 'Mix ingredients together',
      expanded_instructions:
        'Mix together 100g of starter with 350g of warm water and then add in 500g of flour and 10g salt. Mix until it forms a shaggy dough, cover the bowl and let it sit for 1 hour.',
      set_time: 0,
      timer: 3600,
    },
    {
      id: 2,
      instructions: 'Stretch and folds',
      expanded_instructions:
        'Do 8 stretch and folds, then cover and let it sit for 30 minutes.',
      set_time: 1,
      timer: 1800,
    },
    {
      id: 3,
      instructions: 'Stretch and folds',
      expanded_instructions:
        'Do another 8 stretch and folds, then cover and let it sit for 30 minutes.',
      set_time: 1.5,
      timer: 1800,
    },
    {
      id: 4,
      instructions: 'Coil folds',
      expanded_instructions:
        'Now do 8 <strong>coil folds</strong>, then cover and let it sit for 30 minutes.',
      set_time: 2,
      timer: 1800,
    },
    {
      id: 5,
      instructions: 'Coil folds',
      expanded_instructions:
        'Do another 8 <strong>coil folds</strong>, then cover and let it sit for 30 minutes.',
      set_time: 2.5,
      timer: 1800,
    },
    {
      id: 6,
      instructions: 'Coil folds and bulk fermintation',
      expanded_instructions:
        'Do another 8 <strong>coil folds</strong>, then let the dough sit until it doubles in size. This can take around 3 hours or more.',
      set_time: 3,
      timer: 10800,
    },
    {
      id: 7,
      instructions: 'Shape dough',
      expanded_instructions:
        'Shape the dough into a round ball and let it rest for 30 minutes on the bench, covered with a tea towel.',
      set_time: 6,
      timer: 1800,
    },
    {
      id: 8,
      instructions: 'Final shaping',
      expanded_instructions:
        'Do the final shaping: fold the dough in three directions, roll it up like a burrito, then use push and pull motions to tighten it. Dust the dough with flour — rice flour works best. Place it into a bowl lined with a tea towel (nice side down) or into a banneton if you have one. Let it sit for 5 minutes.',
      set_time: 6.5,
      timer: 300,
    },
    {
      id: 9,
      instructions: 'Place in fridge overnight',
      expanded_instructions:
        'Cover the dough and place it in the fridge overnight. We will see you tomorrow for the next step!',
      set_time: 6.6667,
      timer: 0,
    },
    {
      id: 10,
      instructions: 'Preheat oven and score dough',
      expanded_instructions:
        'Preheat the oven to 200°C with a Dutch oven inside. Flip the dough out of the bowl and score the top.',
      set_time: 0,
      timer: 1800,
    },
    {
      id: 11,
      instructions: 'Place in oven',
      expanded_instructions: 'Place in oven with lid on for 30 minutes.',
      set_time: 0.5,
      timer: 1800,
    },
    {
      id: 12,
      instructions: 'Remove lid',
      expanded_instructions: 'Remove the lid and bake for another 10 minutes.',
      set_time: 1,
      timer: 600,
    },
    {
      id: 13,
      instructions: 'You are done, just let it cool',
      expanded_instructions:
        'You are done! Take the bread out of the oven and let it cool for at least 2 hours before slicing.',
      set_time: 1.1667,
      timer: 7200,
    },
    {
      id: 14,
      instructions: 'Enjoy!',
      expanded_instructions:
        'The sourdough is now ready to eat, best served with butter!',
      set_time: 4,
      timer: 0,
    },
  ])
}
