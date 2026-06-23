export const TEAMS = [
  { id: 'ARG', name: 'Argentina', flag: '🇦🇷' },
  { id: 'BRA', name: 'Brasil', flag: '🇧🇷' },
  { id: 'FRA', name: 'Francia', flag: '🇫🇷' },
  { id: 'ENG', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { id: 'GER', name: 'Alemania', flag: '🇩🇪' },
  { id: 'ESP', name: 'España', flag: '🇪🇸' },
  { id: 'NED', name: 'Países Bajos', flag: '🇳🇱' },
  { id: 'ITA', name: 'Italia', flag: '🇮🇹' },
  { id: 'POR', name: 'Portugal', flag: '🇵🇹' },
  { id: 'BEL', name: 'Bélgica', flag: '🇧🇪' },
  { id: 'CRO', name: 'Croacia', flag: '🇭🇷' },
  { id: 'URU', name: 'Uruguay', flag: '🇺🇾' },
  { id: 'MAR', name: 'Marruecos', flag: '🇲🇦' },
  { id: 'JPN', name: 'Japón', flag: '🇯🇵' },
  { id: 'COL', name: 'Colombia', flag: '🇨🇴' },
  { id: 'SEN', name: 'Senegal', flag: '🇸🇳' },
];

export const RARITY = { bronze: 0, silver: 1, gold: 2, legend: 3 };

export const PLAYERS = [
  { id: 1,  name: "L. Messi",      team: "ARG", rarity: "legend" },
  { id: 2,  name: "Á. Di María",   team: "ARG", rarity: "gold" },
  { id: 3,  name: "J. Álvarez",    team: "ARG", rarity: "silver" },
  { id: 4,  name: "E. Martínez",   team: "ARG", rarity: "bronze" },

  { id: 5,  name: "Neymar Jr",     team: "BRA", rarity: "legend" },
  { id: 6,  name: "Vinicius Jr",   team: "BRA", rarity: "gold" },
  { id: 7,  name: "Rodrygo",       team: "BRA", rarity: "silver" },
  { id: 8,  name: "É. Militão",    team: "BRA", rarity: "bronze" },

  { id: 9,  name: "K. Mbappé",     team: "FRA", rarity: "legend" },
  { id: 10, name: "A. Griezmann",  team: "FRA", rarity: "gold" },
  { id: 11, name: "A. Tchouaméni", team: "FRA", rarity: "silver" },
  { id: 12, name: "T. Hernández",  team: "FRA", rarity: "bronze" },

  { id: 13, name: "J. Bellingham", team: "ENG", rarity: "legend" },
  { id: 14, name: "H. Kane",       team: "ENG", rarity: "gold" },
  { id: 15, name: "B. Saka",       team: "ENG", rarity: "silver" },
  { id: 16, name: "D. Rice",       team: "ENG", rarity: "bronze" },

  { id: 17, name: "M. Neuer",      team: "GER", rarity: "gold" },
  { id: 18, name: "J. Kimmich",    team: "GER", rarity: "silver" },
  { id: 19, name: "J. Musiala",    team: "GER", rarity: "gold" },
  { id: 20, name: "F. Wirtz",      team: "GER", rarity: "bronze" },

  { id: 21, name: "Pedri",         team: "ESP", rarity: "gold" },
  { id: 22, name: "L. Yamal",      team: "ESP", rarity: "gold" },
  { id: 23, name: "Rodri",         team: "ESP", rarity: "silver" },
  { id: 24, name: "D. Carvajal",   team: "ESP", rarity: "bronze" },

  { id: 25, name: "V. van Dijk",   team: "NED", rarity: "gold" },
  { id: 26, name: "F. de Jong",    team: "NED", rarity: "silver" },
  { id: 27, name: "C. Gakpo",      team: "NED", rarity: "silver" },
  { id: 28, name: "X. Simons",     team: "NED", rarity: "bronze" },

  { id: 29, name: "G. Donnarumma", team: "ITA", rarity: "gold" },
  { id: 30, name: "N. Barella",    team: "ITA", rarity: "silver" },
  { id: 31, name: "F. Chiesa",     team: "ITA", rarity: "silver" },
  { id: 32, name: "A. Bastoni",    team: "ITA", rarity: "bronze" },

  { id: 33, name: "C. Ronaldo",    team: "POR", rarity: "legend" },
  { id: 34, name: "B. Fernandes",  team: "POR", rarity: "gold" },
  { id: 35, name: "Bernardo Silva",team: "POR", rarity: "silver" },
  { id: 36, name: "R. Leão",       team: "POR", rarity: "bronze" },

  { id: 37, name: "K. De Bruyne",  team: "BEL", rarity: "legend" },
  { id: 38, name: "R. Lukaku",     team: "BEL", rarity: "gold" },
  { id: 39, name: "T. Courtois",   team: "BEL", rarity: "silver" },
  { id: 40, name: "L. Trossard",   team: "BEL", rarity: "bronze" },

  { id: 41, name: "L. Modrić",     team: "CRO", rarity: "gold" },
  { id: 42, name: "J. Gvardiol",   team: "CRO", rarity: "silver" },
  { id: 43, name: "M. Kovačić",    team: "CRO", rarity: "silver" },
  { id: 44, name: "J. Stanišić",   team: "CRO", rarity: "bronze" },

  { id: 45, name: "F. Valverde",   team: "URU", rarity: "gold" },
  { id: 46, name: "R. Araújo",     team: "URU", rarity: "silver" },
  { id: 47, name: "D. Núñez",      team: "URU", rarity: "silver" },
  { id: 48, name: "M. Ugarte",     team: "URU", rarity: "bronze" },

  { id: 49, name: "A. Hakimi",     team: "MAR", rarity: "gold" },
  { id: 50, name: "H. Ziyech",     team: "MAR", rarity: "silver" },
  { id: 51, name: "A. Ounahi",     team: "MAR", rarity: "bronze" },
  { id: 52, name: "N. Mazraoui",   team: "MAR", rarity: "bronze" },

  { id: 53, name: "K. Mitoma",     team: "JPN", rarity: "silver" },
  { id: 54, name: "T. Kubo",       team: "JPN", rarity: "silver" },
  { id: 55, name: "W. Endō",       team: "JPN", rarity: "bronze" },
  { id: 56, name: "T. Tomiyasu",   team: "JPN", rarity: "bronze" },

  { id: 57, name: "L. Díaz",       team: "COL", rarity: "gold" },
  { id: 58, name: "J. Arias",      team: "COL", rarity: "silver" },
  { id: 59, name: "R. Borré",      team: "COL", rarity: "bronze" },
  { id: 60, name: "D. Muñoz",      team: "COL", rarity: "bronze" },

  { id: 61, name: "S. Mané",       team: "SEN", rarity: "gold" },
  { id: 62, name: "K. Koulibaly",  team: "SEN", rarity: "silver" },
  { id: 63, name: "É. Mendy",      team: "SEN", rarity: "bronze" },
  { id: 64, name: "I. Sarr",       team: "SEN", rarity: "bronze" },
];

const teamMap = {};
TEAMS.forEach(t => { teamMap[t.id] = t; });

export function getTeamInfo(teamId) {
  return teamMap[teamId] || { id: teamId, name: teamId, flag: '🏳️' };
}

export function getPlayersByTeam(teamId) {
  return PLAYERS.filter(p => p.team === teamId);
}
