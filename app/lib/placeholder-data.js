/**
 * Kanto and Johto cities and towns
 *
 * `description` from https://bulbapedia.bulbagarden.net/wiki/User:Pumpkinking0192/List_of_city_slogans
 *
 * All other fields can be generated with this:
 *
 *     await fetch(`https://pokeapi.co/api/v2/location/${id}`)
 *       .then((r) => r.json())
 *       .then((l) => ({
 *         id: l.id,
 *         slug: l.name,
 *         name: l.names.find((n) => n.language.name === 'en').name,
 *         region: l.region.name,
 *       }))
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
 * Top 5 non-lengendary Kanto and Johto Pokémon from Pokémon of the Year 2020:
 * https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_of_the_Year
 *
 * Data generated with this:
 *
 *     await fetch(`https://pokeapi.co/api/v2/pokemon/6`)
 *       .then((r) => r.json())
 *       .then((p) => ({
 *         id: p.id,
 *         slug: p.name,
 *         name: p.name[0].toUpperCase() + p.name.slice(1),
 *         sprite: p.sprites.front_default,,
 *         type1: p.types[0].type.name,
 *         type2: !!p.types[1] ? p.types[1].type.name : null,
 *         hp: p.stats[0].base_stat,
 *         attack: p.stats[1].base_stat,
 *         defense: p.stats[2].base_stat,
 *         specialattack: p.stats[3].base_stat,
 *         specialdefense: p.stats[4].base_stat,
 *         speed: p.stats[5].base_stat,
 *       }))
 */
const pokemon = [
  {
    id: 6,
    slug: 'charizard',
    name: 'Charizard',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    type1: 'fire',
    type2: 'flying',
    hp: 78,
    attack: 84,
    defense: 78,
    specialattack: 109,
    specialdefense: 85,
    speed: 100,
  },
  {
    id: 94,
    slug: 'gengar',
    name: 'Gengar',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    type1: 'ghost',
    type2: 'poison',
    hp: 60,
    attack: 65,
    defense: 60,
    specialattack: 130,
    specialdefense: 75,
    speed: 110,
  },
  {
    id: 1,
    slug: 'bulbasaur',
    name: 'Bulbasaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type1: 'grass',
    type2: 'poison',
    hp: 45,
    attack: 49,
    defense: 49,
    specialattack: 65,
    specialdefense: 65,
    speed: 45,
  },
  {
    id: 25,
    slug: 'pikachu',
    name: 'Pikachu',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    type1: 'electric',
    type2: null,
    hp: 35,
    attack: 55,
    defense: 40,
    specialattack: 50,
    specialdefense: 50,
    speed: 90,
  },
  {
    id: 133,
    slug: 'eevee',
    name: 'Eevee',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    type1: 'normal',
    type2: null,
    hp: 55,
    attack: 55,
    defense: 50,
    specialattack: 45,
    specialdefense: 65,
    speed: 55,
  },
  {
    id: 197,
    slug: 'umbreon',
    name: 'Umbreon',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
    type1: 'dark',
    type2: null,
    hp: 95,
    attack: 65,
    defense: 110,
    specialattack: 60,
    specialdefense: 130,
    speed: 65,
  },
  {
    id: 248,
    slug: 'tyranitar',
    name: 'Tyranitar',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
    type1: 'rock',
    type2: 'dark',
    hp: 100,
    attack: 134,
    defense: 110,
    specialattack: 95,
    specialdefense: 100,
    speed: 61,
  },
  {
    id: 157,
    slug: 'typhlosion',
    name: 'Typhlosion',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
    type1: 'fire',
    type2: null,
    hp: 78,
    attack: 84,
    defense: 78,
    specialattack: 109,
    specialdefense: 85,
    speed: 100,
  },
  {
    id: 212,
    slug: 'scizor',
    name: 'Scizor',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    type1: 'bug',
    type2: 'steel',
    hp: 70,
    attack: 130,
    defense: 100,
    specialattack: 55,
    specialdefense: 80,
    speed: 65,
  },
  {
    id: 181,
    slug: 'ampharos',
    name: 'Ampharos',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
    type1: 'electric',
    type2: null,
    hp: 90,
    attack: 75,
    defense: 85,
    specialattack: 115,
    specialdefense: 90,
    speed: 55,
  },
]

module.exports = {
  locations,
  pokemon,
}
