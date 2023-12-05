/**
 * Kanto and Johto cities and towns
 *
 * `description` from https://bulbapedia.bulbagarden.net/wiki/User:Pumpkinking0192/List_of_city_slogans
 *
 * All other fields can be generated with this:
 *
 *     await Promise.all(
 *       [
 *         86, 154, 231, 68, 151, 232, 67, 234, 76, 71, 84, 69, 153, 228, 229, 75, 85,
 *         70, 230, 65,
 *       ].map((id) =>
 *         fetch(`https://pokeapi.co/api/v2/location/${id}`)
 *           .then((r) => r.json())
 *           .then((l) => ({
 *             id: l.id,
 *             slug: l.name,
 *             name: l.names.find((n) => n.language.name === 'en').name,
 *             region: l.region.name,
 *           })),
 *       ),
 *     )
 */

const locations = [
  {
    id: 86,
    slug: 'pallet-town',
    name: 'Pallet Town',
    region: 'kanto',
    description: 'A Tranquil Setting of Peace and Purity',
  },
  {
    id: 154,
    slug: 'viridian-city',
    name: 'Viridian City',
    region: 'kanto',
    description: 'The Eternally Green Paradise',
  },
  {
    id: 231,
    slug: 'pewter-city',
    name: 'Pewter City',
    region: 'kanto',
    description: 'A Stone Gray City',
  },
  {
    id: 68,
    slug: 'cerulean-city',
    name: 'Cerulean City',
    region: 'kanto',
    description: 'A Mysterious, Blue Aura Surrounds It',
  },
  {
    id: 151,
    slug: 'vermilion-city',
    name: 'Vermilion City',
    region: 'kanto',
    description: 'The Port of Exquisite Sunsets',
  },
  {
    id: 232,
    slug: 'lavender-town',
    name: 'Lavender Town',
    region: 'kanto',
    description: 'The Noble Purple Town',
  },
  {
    id: 67,
    slug: 'celadon-city',
    name: 'Celadon City',
    region: 'kanto',
    description: 'The City of Rainbow Dreams',
  },
  {
    id: 234,
    slug: 'saffron-city',
    name: 'Saffron City',
    region: 'kanto',
    description: 'Shining, Golden Land of Commerce',
  },
  {
    id: 76,
    slug: 'fuchsia-city',
    name: 'Fuchsia City',
    region: 'kanto',
    description: `Behold! It's Passion Pink!`,
  },
  {
    id: 71,
    slug: 'cinnabar-island',
    name: 'Cinnabar Island',
    region: 'kanto',
    description: 'The Fiery Town of Burning Desire',
  },
  {
    id: 84,
    slug: 'new-bark-town',
    name: 'New Bark Town',
    region: 'johto',
    description: 'The Town Where Winds of a New Beginning Blow',
  },
  {
    id: 69,
    slug: 'cherrygrove-city',
    name: 'Cherrygrove City',
    region: 'johto',
    description: 'The City of Cute, Fragrant Flowers',
  },
  {
    id: 153,
    slug: 'violet-city',
    name: 'Violet City',
    region: 'johto',
    description: 'The City of Nostalgic Scents',
  },
  {
    id: 228,
    slug: 'azalea-town',
    name: 'Azalea Town',
    region: 'johto',
    description: 'Where People and Pokémon Live in Happy Harmony!',
  },
  {
    id: 229,
    slug: 'goldenrod-city',
    name: 'Goldenrod City',
    region: 'johto',
    description: 'The Festive City of Opulent Charm',
  },
  {
    id: 75,
    slug: 'ecruteak-city',
    name: 'Ecruteak City',
    region: 'johto',
    description: 'A Historical City Where the Past Meets the Present',
  },
  {
    id: 85,
    slug: 'olivine-city',
    name: 'Olivine City',
    region: 'johto',
    description: 'The Port Closest to Foreign Lands',
  },
  {
    id: 70,
    slug: 'cianwood-city',
    name: 'Cianwood City',
    region: 'johto',
    description: 'A Port Surrounded by Rough Seas!',
  },
  {
    id: 230,
    slug: 'mahogany-town',
    name: 'Mahogany Town',
    region: 'johto',
    description: 'Welcome to the Home of the Ninja!',
  },
  {
    id: 65,
    slug: 'blackthorn-city',
    name: 'Blackthorn City',
    region: 'johto',
    description: 'A Quiet Mountain Retreat',
  },
]

/**
 * Basic Poké Balls and healing items.
 *
 * Data generated with this:
 *
 *     await Promise.all(
 *       [
 *         'poke-ball',
 *         'great-ball',
 *         'ultra-ball',
 *         'potion',
 *         'super-potion',
 *         'hyper-potion',
 *         'full-heal',
 *         'full-restore',
 *       ].map((name) =>
 *         fetch(`https://pokeapi.co/api/v2/item/${name}`)
 *           .then((r) => r.json())
 *           .then((i) => ({
 *             id: i.id,
 *             slug: i.name,
 *             name: i.names.find((n) => n.language.name === 'en').name,
 *             sprite: i.sprites.default,
 *             cost: i.cost,
 *           })),
 *       ),
 *     )
 */
const items = [
  {
    id: 4,
    slug: 'poke-ball',
    name: 'Poké Ball',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
    cost: 200,
  },
  {
    id: 3,
    slug: 'great-ball',
    name: 'Great Ball',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
    cost: 600,
  },
  {
    id: 2,
    slug: 'ultra-ball',
    name: 'Ultra Ball',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
    cost: 800,
  },
  {
    id: 17,
    slug: 'potion',
    name: 'Potion',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png',
    cost: 200,
  },
  {
    id: 26,
    slug: 'super-potion',
    name: 'Super Potion',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png',
    cost: 700,
  },
  {
    id: 25,
    slug: 'hyper-potion',
    name: 'Hyper Potion',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png',
    cost: 1500,
  },
  {
    id: 27,
    slug: 'full-heal',
    name: 'Full Heal',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png',
    cost: 400,
  },
  {
    id: 23,
    slug: 'full-restore',
    name: 'Full Restore',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-restore.png',
    cost: 3000,
  },
]

module.exports = {
  locations,
  items,
}
