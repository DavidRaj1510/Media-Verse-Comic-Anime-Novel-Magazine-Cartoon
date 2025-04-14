export interface Cartoon {
  id: string;
  title: string;
  studio: string;
  image: string;
  description: string;
  youtubeId: string;
}

export const cartoons: Cartoon[] = [
  {
    id: "spongebob-squarepants",
    title: "SpongeBob SquarePants",
    studio: "Nickelodeon Animation Studio",
    image: "https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "The misadventures of a talking sea sponge who works at a fast food restaurant, attends a boating school, and lives in an underwater pineapple.",
    youtubeId: "HwtE4E234VQ"
  },
  {
    id: "adventure-time",
    title: "Adventure Time",
    studio: "Cartoon Network Studios",
    image: "https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_.jpg",
    description: "A 12-year-old boy and his best friend, a wise 28-year-old dog with magical powers, go on a series of surreal adventures in a remote future.",
    youtubeId: "gK-JzJuFI5A"
  },
  {
    id: "gravity-falls",
    title: "Gravity Falls",
    studio: "Disney Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_.jpg",
    description: "Twin siblings Dipper and Mabel Pines spend the summer at their great-uncle's tourist trap in the enigmatic Gravity Falls, Oregon.",
    youtubeId: "X2DUpDxFJyg"
  },
  {
    id: "rick-and-morty",
    title: "Rick and Morty",
    studio: "Williams Street",
    image: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
    description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
    youtubeId: "jerFRSQW6g0"
  },
  {
    id: "avatar-the-last-airbender",
    title: "Avatar: The Last Airbender",
    studio: "Nickelodeon Animation Studio",
    image: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg",
    description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar.",
    youtubeId: "d1EnW4kn1kg"
  },
  {
    id: "steven-universe",
    title: "Steven Universe",
    studio: "Cartoon Network Studios",
    image: "https://m.media-amazon.com/images/M/MV5BZGJjMmI3ZDMtZTgyNi00MTZhLWE2ZjAtN2Q4YTUyMTg4OGY1XkEyXkFqcGc@._V1_.jpg",
    description: "A young boy takes his mother's place in a group of magical beings who protect the Earth.",
    youtubeId: "h-Z7ytsEZDo"
  },
  {
    id: "regular-show",
    title: "Regular Show",
    studio: "Cartoon Network Studios",
    image: "https://m.media-amazon.com/images/I/81h1bCDosFL._AC_UF1000,1000_QL80_.jpg",
    description: "The surreal adventures of a blue jay and a raccoon who are best friends that often try to slack off at their jobs and entertain themselves by any means.",
    youtubeId: "y894QNtX0VA"
  },
  {
    id: "bob's-burgers",
    title: "Bob's Burgers",
    studio: "20th Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BZWQ1NGE4YjgtOGJjZS00OTZjLWI0MGUtMDUxYjY2M2E4MjNjXkEyXkFqcGc@._V1_.jpg",
    description: "Bob Belcher runs his dream restaurant with his wife and three children as their last hope of holding the family together.",
    youtubeId: "krB8argAyck"
  },
  {
    id: "samurai-jack",
    title: "Samurai Jack",
    studio: "Cartoon Network Studios",
    image: "https://m.media-amazon.com/images/M/MV5BNjU4ZmVhZGMtNTU4Yy00YmZhLTlmOGQtNGMwMTcwNTEyZjQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "A samurai sent through time fights to return home and save the world from the evil shape-shifting demon Aku.",
    youtubeId: "VSrv_n4NCKU"
  },
  {
    id: "south-park",
    title: "South Park",
    studio: "Comedy Central",
    image: "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_.jpg",
    description: "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
    youtubeId: "BmpRDKdIgUE"
  },
  {
    id: "the-simpsons",
    title: "The Simpsons",
    studio: "20th Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    description: "The satiric adventures of a working-class family in the misfit city of Springfield.",
    youtubeId: "XPG0MqIcby8"
  },
  {
    id: "futurama",
    title: "Futurama",
    studio: "20th Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BMDAyZDM2Y2EtMzdlYy00NTllLWIxNTItYjBhNDUzODA4ZWI1XkEyXkFqcGc@._V1_.jpg",
    description: "Philip J. Fry, a pizza delivery boy, is accidentally frozen in 1999 and thawed out on New Year's Eve 2999.",
    youtubeId: "6JgUuizzLQw"
  },
  {
    id: "over-the-garden-wall",
    title: "Over the Garden Wall",
    studio: "Cartoon Network Studios",
    image: "https://images.squarespace-cdn.com/content/v1/5a90557e1137a6fdeeb6bb3e/60086ea2-4e3c-41b3-9a21-4a1c10b834b5/81y5GsYXq%2BL._RI_.jpg",
    description: "Two brothers find themselves lost in a mysterious land and try to find their way home.",
    youtubeId: "36mAsVSH_-s"
  },
  {
    id: "bojack-horseman",
    title: "BoJack Horseman",
    studio: "Tornante Company",
    image: "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description: "BoJack Horseman was the star of the hit television show 'Horsin' Around' in the '80s and '90s, but now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
    youtubeId: "i1eJMig5Ik4"
  },
  {
    id: "family-guy",
    title: "Family Guy",
    studio: "20th Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_.jpg",
    description: "In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another.",
    youtubeId: "6mNY1fugTgc"
  },
  {
    id: "the-amazing-world-of-gumball",
    title: "The Amazing World of Gumball",
    studio: "Cartoon Network Studios Europe",
    image: "https://m.media-amazon.com/images/M/MV5BNmEwYzNhODgtZDc2Yi00MDAyLTliNWYtMDRkMThmMWE0NGNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "The life of a twelve-year-old boy who happens to be a blue cat as he lives with his family and other strange creatures.",
    youtubeId: "yi-JQ-TF0AQ"
  },
  {
    id: "we-bare-bears",
    title: "We Bare Bears",
    studio: "Cartoon Network Studios",
    image: "https://m.media-amazon.com/images/M/MV5BMjM2NDQ5ODMxOV5BMl5BanBnXkFtZTgwMzc5MDc0NjE@._V1_FMjpg_UX1000_.jpg",
    description: "Three bear siblings do whatever they can to be a part of human society by doing what everyone around them does.",
    youtubeId: "g5goG7HPv58"
  },
  {
    id: "the-owl-house",
    title: "The Owl House",
    studio: "Disney Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BMWI2ZWQ3ZWItZjU2My00ZDg0LWIyMDEtNGQ1ZDdlMTVhZTg0XkEyXkFqcGc@._V1_.jpg",
    description: "A teenage girl finds a portal to a magical realm and befriends a rebellious witch and a tiny warrior; despite not having magical abilities, she pursues her dream of becoming a witch.",
    youtubeId: "1W1FFiT51lg"
  },
  {
    id: "amphibia",
    title: "Amphibia",
    studio: "Disney Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BM2Q2ZDgzNTEtZTM4Ni00YmNjLWJiNzItMGQxMTgzMTM4MzI0XkEyXkFqcGc@._V1_.jpg",
    description: "Ordinary teen Anne Boonchuy is magically transported to the world of Amphibia, a wild marshland full of talking frog-people.",
    youtubeId: "GfPIkUaES_8"
  },
  {
    id: "phineas-and-ferb",
    title: "Phineas and Ferb",
    studio: "Disney Television Animation",
    image: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg",
    description: "Two stepbrothers find inventive things to do on each day of summer vacation while their sister tries to expose their outrageous activities.",
    youtubeId: "NkQrKxTFARM"
  },
  {
    id: "arcane",
    title: "Arcane",
    studio: "Fortiche Production",
    image: "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    description: "Set in the utopian region of Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions and the power that will tear them apart.",
    youtubeId: "fXmAurh012s"
  },
  {
    id: "primal",
    title: "Primal",
    studio: "Williams Street",
    image: "https://m.media-amazon.com/images/M/MV5BOTc0NTUyYmItOTY4Yi00ZjY5LWI1NjMtNDgyODJhYWRiY2UxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "A caveman at the dawn of evolution and a dinosaur on the brink of extinction form an unlikely friendship that becomes their only hope for survival in a violent, primordial world.",
    youtubeId: "0KFIfKVKOkQ"
  },
  {
    id: "infinity-train",
    title: "Infinity Train",
    studio: "Cartoon Network Studios",
    image: "https://m.media-amazon.com/images/M/MV5BZGExOTA2MTAtOGEzZi00ZDE4LTlmZDItMzQwMjQ5ZDdlMWM2XkEyXkFqcGc@._V1_.jpg",
    description: "A series of anthology stories about passengers aboard a mysterious and endless train traveling through a barren landscape, where each car contains its own unique universe.",
    youtubeId: "bXPZzXeGD6s"
  },
  {
    id: "invincible-cartoon",
    title: "Invincible",
    studio: "Skybound Entertainment",
    image: "https://townsquare.media/site/622/files/2017/01/Invincible-1.jpg?w=780&q=75",
    description: "An adult animated superhero series that revolves around 17-year-old Mark Grayson, who's just like every other guy his age — except his father is the most powerful superhero on the planet.",
    youtubeId: "-bfAVpuko5o"
  }
];
