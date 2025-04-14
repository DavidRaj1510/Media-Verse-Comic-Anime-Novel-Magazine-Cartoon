export interface Anime {
  id: string;
  title: string;
  studio: string;
  image: string;
  description: string;
  website: string;
  websiteName: string;
  youtubeId: string;
}

export const animes: Anime[] = [
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    studio: "MAPPA",
    image: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
    description: "In a world where humanity lives within cities surrounded by enormous walls due to the Titans, giant humanoid beings who devour humans seemingly without reason, a young boy named Eren Yeager vows to rid the world of the Titans after they destroy his hometown and kill his mother.",
    website: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
    websiteName: "Crunchyroll",
    youtubeId: "MGRm4IzK1SQ"
  },
  {
    id: "my-hero-academia",
    title: "My Hero Academia",
    studio: "Bones",
    image: "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_.jpg",
    description: "In a world where people with superpowers known as 'Quirks' are the norm, Izuku Midoriya has dreams of becoming a superhero himself despite being Quirkless.",
    website: "https://www.crunchyroll.com/series/G6NVM3Q2Y/my-hero-academia",
    websiteName: "Crunchyroll",
    youtubeId: "EPVkcwyLQQ8"
  },
  {
    id: "demon-slayer-anime",
    title: "Demon Slayer",
    studio: "ufotable",
    image: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    description: "A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.",
    website: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
    websiteName: "Crunchyroll",
    youtubeId: "VQGCKyvzIM4"
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    studio: "MAPPA",
    image: "https://images.justwatch.com/poster/239549156/s718/jujutsu-kaisen.jpg",
    description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    website: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
    websiteName: "Crunchyroll",
    youtubeId: "4A_X-Dvl0ws"
  },
  {
    id: "one-punch-man",
    title: "One Punch Man",
    studio: "Madhouse",
    image: "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    description: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
    website: "https://www.crunchyroll.com/series/GYQ4MN05Y/one-punch-man",
    websiteName: "Crunchyroll",
    youtubeId: "Poo5lqoWSGw"
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    studio: "MAPPA",
    image: "https://m.media-amazon.com/images/M/MV5BZGY2ZTM2MWMtNzA2OS00ZjJlLWIwZTMtMDBhN2EwYjZjZjEyXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg",
    description: "When his father died, Denji was stuck with a huge debt and no way to pay it back. Thanks to a Devil dog he saved named Pochita, he's able to survive through odd jobs and killing Devils for the Yakuza.",
    website: "https://www.crunchyroll.com/series/GVDHX8QNW/chainsaw-man",
    websiteName: "Crunchyroll",
    youtubeId: "q15CRdE5Bv0"
  },
  {
    id: "fullmetal-alchemist-brotherhood",
    title: "Fullmetal Alchemist: Brotherhood",
    studio: "Bones",
    image: "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_.jpg",
    description: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes wrong and leaves them in damaged physical forms.",
    website: "https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood",
    websiteName: "Crunchyroll",
    youtubeId: "--IcmZkvL0Q"
  },
  {
    id: "hunter-x-hunter",
    title: "Hunter x Hunter",
    studio: "Madhouse",
    image: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_.jpg",
    description: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who abandoned him when he was younger.",
    website: "https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter",
    websiteName: "Crunchyroll",
    youtubeId: "d6kBeJjTGnY"
  },
  {
    id: "death-note",
    title: "Death Note",
    studio: "Madhouse",
    image: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    website: "https://www.crunchyroll.com/series/G6QWD3EE6/death-note",
    websiteName: "Crunchyroll",
    youtubeId: "NlJZ-YgAt-c"
  },
  {
    id: "steins-gate",
    title: "Steins;Gate",
    studio: "White Fox",
    image: "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
    description: "A group of friends creates a device that can send text messages to the past, inadvertently causing a series of changes that lead to an alternative dystopian present.",
    website: "https://www.crunchyroll.com/series/GYW4D15K6/steinsgate",
    websiteName: "Crunchyroll",
    youtubeId: "27OZc-ku6is"
  },
  {
    id: "cowboy-bebop",
    title: "Cowboy Bebop",
    studio: "Sunrise",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a9/Cowboy_Bebop_key_visual.jpg",
    description: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
    website: "https://www.crunchyroll.com/series/GYVNX2NM6/cowboy-bebop",
    websiteName: "Crunchyroll",
    youtubeId: "QCaEJZqLeTU"
  },
  {
    id: "one-piece-anime",
    title: "One Piece",
    studio: "Toei Animation",
    image: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
    website: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
    websiteName: "Crunchyroll",
    youtubeId: "S8_YwFLCh4U"
  },
  {
    id: "naruto-shippuden",
    title: "Naruto: Shippuden",
    studio: "Pierrot",
    image: "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
    description: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    website: "https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden",
    websiteName: "Crunchyroll",
    youtubeId: "thh7bVCgDHs"
  },
  {
    id: "dragon-ball-z",
    title: "Dragon Ball Z",
    studio: "Toei Animation",
    image: "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    description: "After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.",
    website: "https://www.crunchyroll.com/series/G4VDXNW8Y/dragon-ball-z",
    websiteName: "Crunchyroll",
    youtubeId: "sF9cahElSWA"
  },
  {
    id: "spy-x-family",
    title: "Spy x Family",
    studio: "Wit Studio and CloverWorks",
    image: "https://a.storyblok.com/f/178900/1064x1596/3774336e39/68719a787bc41e1e0f846272c0820a001663234878_main.jpg/m/filters:quality(95)format(webp)",
    description: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    website: "https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family",
    websiteName: "Crunchyroll",
    youtubeId: "ofXigq9aIpo"
  },
  {
    id: "violet-evergarden",
    title: "Violet Evergarden",
    studio: "Kyoto Animation",
    image: "https://m.media-amazon.com/images/M/MV5BNmJhYjU3MmMtMTNjMC00ZmU5LTk5MTYtNmRjZWQwZmJlMzJmXkEyXkFqcGc@._V1_.jpg",
    description: "In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people.",
    website: "https://www.netflix.com/title/80182123",
    websiteName: "Netflix",
    youtubeId: "UZEOpfelkxQ"
  },
  {
    id: "your-name",
    title: "Your Name",
    studio: "CoMix Wave Films",
    image: "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_.jpg",
    description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    website: "https://www.crunchyroll.com/watch/G8WUN0P3Y/your-name",
    websiteName: "Crunchyroll",
    youtubeId: "xU47nhruN-Q"
  },
  {
    id: "vinland-saga",
    title: "Vinland Saga",
    studio: "Wit Studio",
    image: "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage.",
    website: "https://www.crunchyroll.com/series/GFVH2Z70K/vinland-saga",
    websiteName: "Crunchyroll",
    youtubeId: "3xxuMJC0i2I"
  },
  {
    id: "made-in-abyss",
    title: "Made in Abyss",
    studio: "Kinema Citrus",
    image: "https://m.media-amazon.com/images/M/MV5BZjM4ODA5YTktNjliMC00NzI5LTk3ZTctZWYyYWEyNTJhMmQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "A young girl and her robot companion venture into the depths of a dangerous and mysterious abyss in search of her mother.",
    website: "https://www.hidive.com/tv/made-in-abyss",
    websiteName: "HIDIVE",
    youtubeId: "DiUKh_MjsI0"
  },
  {
    id: "code-geass",
    title: "Code Geass",
    studio: "Sunrise",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186544_b_v8_ad.jpg",
    description: "After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire.",
    website: "https://www.crunchyroll.com/series/G8DHV7W21/code-geass",
    websiteName: "Crunchyroll",
    youtubeId: "v-AGjx0N24U"
  },
  {
    id: "mob-psycho-100",
    title: "Mob Psycho 100",
    studio: "Bones",
    image: "https://m.media-amazon.com/images/M/MV5BYzU3NDM4ZjgtY2UyMi00YTczLTgyNDEtMjBiMDJlOGUxNjcxXkEyXkFqcGc@._V1_.jpg",
    description: "A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble.",
    website: "https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100",
    websiteName: "Crunchyroll",
    youtubeId: "Bw-5Lka7gPE"
  },
  {
    id: "odd-taxi",
    title: "Odd Taxi",
    studio: "OLM / P.I.C.S.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Odd_Taxi_manga_cover.jpg/220px-Odd_Taxi_manga_cover.jpg",
    description: "A taxi driver plays a role in the lives of the eccentric people who board his cab, including a girl who's gone missing.",
    website: "https://www.crunchyroll.com/series/GKEH2G4DK/odd-taxi",
    websiteName: "Crunchyroll",
    youtubeId: "LKMw0hBDBUw"
  },
  {
    id: "86-eighty-six",
    title: "86 Eighty-Six",
    studio: "A-1 Pictures",
    image: "https://m.media-amazon.com/images/M/MV5BOWNmY2IzOGItMmQyNy00ZTM0LThiNjItODM3YzdkYjRlNWU1XkEyXkFqcGc@._V1_.jpg",
    description: "The Republic of San Magnolia has been attacked by its neighbor, the Empire. Outside the 85 districts of the Republic there is the 'non-existent 86th district,' where young men and women continue to fight.",
    website: "https://www.crunchyroll.com/series/GVDHX8DM5/86-eighty-six",
    websiteName: "Crunchyroll",
    youtubeId: "VSdS29SDvn4"
  },
  {
    id: "ranking-of-kings",
    title: "Ranking of Kings",
    studio: "Wit Studio",
    image: "https://images.justwatch.com/poster/305405606/s166/season-1",
    description: "The story follows Bojji, a deaf, powerless prince who cannot even wield a children's sword. As the firstborn son, he strives to become the greatest king the world has ever seen.",
    website: "https://www.crunchyroll.com/series/G0DJQEKXY/ranking-of-kings",
    websiteName: "Crunchyroll",
    youtubeId: "Tr1ahoajm_o"
  }
];
