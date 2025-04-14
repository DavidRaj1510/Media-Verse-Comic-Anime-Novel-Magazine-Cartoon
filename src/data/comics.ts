export interface Comic {
  id: string;
  title: string;
  publisher: string;
  author: string;
  image: string;
  description: string;
  website: string;
  websiteName: string;
}

export const comics: Comic[] = [
  {
    id: "one-piece",
    title: "One Piece",
    publisher: "Shueisha",
    author: "Eiichiro Oda",
    image: "https://m.media-amazon.com/images/I/71y+XnBXm4L._SY466_.jpg",
    description: "Follow Monkey D. Luffy and his swashbuckling crew in their search for the ultimate treasure, the One Piece.",
    website: "https://www.viz.com/one-piece",
    websiteName: "VIZ"
  },
  {
    id: "batman",
    title: "Batman",
    publisher: "DC Comics",
    author: "Various",
    image: "https://rukminim3.flixcart.com/image/850/1000/l2dmky80/poster/a/q/t/small-poster-batman-comic-sl1021-wall-poster-13x19-inches-matte-original-imagdqezg54numtv.jpeg?q=20&crop=false",
    description: "The adventures of Batman, the iconic superhero protector of Gotham City.",
    website: "https://www.dccomics.com/comics/batman-2016",
    websiteName: "DC Comics"
  },
  {
    id: "saga",
    title: "Saga",
    publisher: "Image Comics",
    author: "Brian K. Vaughan",
    image: "https://images.squarespace-cdn.com/content/v1/58c35f74d1758e424ee76710/1684382362113-3YGA7WXCAU18URGNPRF5/Saga+64+cover.jpg?format=1000w",
    description: "An epic space opera/fantasy comic book series created by writer Brian K. Vaughan and artist Fiona Staples.",
    website: "https://imagecomics.com/comics/series/saga",
    websiteName: "Image Comics"
  },
  {
    id: "tower-of-god",
    title: "Tower of God",
    publisher: "Webtoon",
    author: "SIU",
    image: "https://m.media-amazon.com/images/I/91f5KTdxTtL._AC_UF1000,1000_QL80_.jpg",
    description: "Twenty-Fifth Bam must climb the Tower to find his childhood friend Rachel.",
    website: "https://www.webtoons.com/en/fantasy/tower-of-god/list?title_no=95",
    websiteName: "Webtoon"
  },
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    publisher: "D&C Media",
    author: "Chugong",
    image: "https://m.media-amazon.com/images/I/81shyf5cV9L._UF1000,1000_QL80_.jpg",
    description: "In a world where hunters must battle deadly monsters to protect humanity, Sung Jinwoo, the weakest hunter, finds himself evolving in unexpected ways.",
    website: "https://www.webtoons.com/en/action/solo-leveling/list?title_no=3162",
    websiteName: "Webtoon"
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    publisher: "Shueisha",
    author: "Koyoharu Gotouge",
    image: "https://m.media-amazon.com/images/I/81ZNkhqRvVL._SY466_.jpg",
    description: "Tanjiro Kamado sets out to become a demon slayer after his family is slaughtered and his sister turned into a demon.",
    website: "https://www.viz.com/demon-slayer-kimetsu-no-yaiba",
    websiteName: "VIZ"
  },
  {
    id: "the-walking-dead",
    title: "The Walking Dead",
    publisher: "Image Comics",
    author: "Robert Kirkman",
    image: "https://m.media-amazon.com/images/I/91dxzTi3taL._UF1000,1000_QL80_.jpg",
    description: "In a world overrun by zombies, a group of survivors fight to stay alive and maintain their humanity.",
    website: "https://imagecomics.com/comics/series/the-walking-dead",
    websiteName: "Image Comics"
  },
  {
    id: "invincible",
    title: "Invincible",
    publisher: "Image Comics",
    author: "Robert Kirkman",
    image: "https://m.media-amazon.com/images/I/91+gfWPfheL._UF1000,1000_QL80_.jpg",
    description: "Mark Grayson is a normal teenager, except that his father is the most powerful superhero on the planet.",
    website: "https://imagecomics.com/comics/series/invincible",
    websiteName: "Image Comics"
  },
  {
    id: "watchmen",
    title: "Watchmen",
    publisher: "DC Comics",
    author: "Alan Moore",
    image: "https://m.media-amazon.com/images/I/81Hf9W0uoxL.jpg",
    description: "Set in an alternate history where 'superheroes' are treated as outlaws, Watchmen follows a group of costumed vigilantes as they investigate a plot to kill them.",
    website: "https://www.dccomics.com/graphic-novels/watchmen-0",
    websiteName: "DC Comics"
  },
  {
    id: "v-for-vendetta",
    title: "V for Vendetta",
    publisher: "Vertigo",
    author: "Alan Moore",
    image: "https://m.media-amazon.com/images/I/612jURJ-GGL._AC_UF1000,1000_QL80_.jpg",
    description: "In a future British tyranny, a shadowy freedom fighter plots to overthrow the government with unusual tactics.",
    website: "https://www.dccomics.com/graphic-novels/v-for-vendetta-0",
    websiteName: "DC Comics"
  },
  {
    id: "berserk",
    title: "Berserk",
    publisher: "Dark Horse Comics",
    author: "Kentaro Miura",
    image: "https://images-cdn.ubuy.co.in/642e307f47fedf08f31a7a63-berserk-manga-anime-tv-show-poster.jpg",
    description: "A dark fantasy following a lone mercenary, Guts, as he travels the world seeking vengeance.",
    website: "https://www.darkhorse.com/Search/berserk",
    websiteName: "Dark Horse"
  },
  {
    id: "attack-on-titan-manga",
    title: "Attack on Titan",
    publisher: "Kodansha",
    author: "Hajime Isayama",
    image: "https://m.media-amazon.com/images/I/91M9VaZWxOL._SY466_.jpg",
    description: "Humans are nearly exterminated by titans. Humans then build a wall to protect themselves from the titans.",
    website: "https://kodansha.us/series/attack-on-titan/",
    websiteName: "Kodansha"
  },
  {
    id: "hellboy",
    title: "Hellboy",
    publisher: "Dark Horse Comics",
    author: "Mike Mignola",
    image: "https://m.media-amazon.com/images/I/612645-lZcL.jpg",
    description: "A demon, raised from infancy after being conjured by and rescued from the Nazis, grows up to become a defender against the forces of darkness.",
    website: "https://www.darkhorse.com/Search/hellboy",
    websiteName: "Dark Horse"
  },
  {
    id: "sandman",
    title: "The Sandman",
    publisher: "Vertigo",
    author: "Neil Gaiman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZu46mghnk5TEFgVFmqW4Mbt9YAu3KZb7cw&s",
    description: "The Sandman is a story about stories and how Morpheus, the Lord of Dreams, is captured and learns that change is inevitable.",
    website: "https://www.dccomics.com/graphic-novels/the-sandman-1989/sandman-vol-1-preludes-and-nocturnes-30th-anniversary-edition",
    websiteName: "DC Comics"
  },
  {
    id: "maus",
    title: "Maus",
    publisher: "Pantheon Books",
    author: "Art Spiegelman",
    image: "https://m.media-amazon.com/images/I/71nXxfnNEcL._AC_UF1000,1000_QL80_.jpg",
    description: "A graphic novel depicting Spiegelman interviewing his father about his experiences as a Polish Jew and Holocaust survivor.",
    website: "https://www.penguinrandomhouse.com/books/171065/the-complete-maus-by-art-spiegelman/",
    websiteName: "Pantheon Books"
  },
  {
    id: "y-the-last-man",
    title: "Y: The Last Man",
    publisher: "Vertigo",
    author: "Brian K. Vaughan",
    image: "https://m.media-amazon.com/images/I/71lBTGxPOOL._AC_UF1000,1000_QL80_.jpg",
    description: "After a mysterious plague kills every mammal with a Y chromosome, Yorick Brown discovers that he is the only male left.",
    website: "https://www.dccomics.com/graphic-novels/y-the-last-man-2002/y-the-last-man-book-one",
    websiteName: "DC Comics"
  },
  {
    id: "preacher",
    title: "Preacher",
    publisher: "Vertigo",
    author: "Garth Ennis",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Preacher56.png",
    description: "Jesse Custer, a preacher in a small Texas town, is possessed by a mysterious entity that gives him the power to command others with his voice.",
    website: "https://www.dccomics.com/graphic-novels/preacher-1995/preacher-book-one",
    websiteName: "DC Comics"
  },
  {
    id: "fables",
    title: "Fables",
    publisher: "Vertigo",
    author: "Bill Willingham",
    image: "https://m.media-amazon.com/images/I/81N+GKLlRnL._UF1000,1000_QL80_.jpg",
    description: "Characters from fairy tales and folklore living in a community in New York City after being forced from their homelands.",
    website: "https://www.dccomics.com/graphic-novels/fables-2002/fables-vol-1-legends-in-exile-new-edition",
    websiteName: "DC Comics"
  },
  {
    id: "kingdom-come",
    title: "Kingdom Come",
    publisher: "DC Comics",
    author: "Mark Waid",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Kingdom_Come_%28DC_Comics_1997_softcover_edition%29.jpg",
    description: "Set in the future of the DC Universe, the story deals with a growing conflict between the traditional superheroes and a growing population of amoral and dangerously irresponsible vigilantes.",
    website: "https://www.dccomics.com/graphic-novels/kingdom-come-0",
    websiteName: "DC Comics"
  },
  {
    id: "spawn",
    title: "Spawn",
    publisher: "Image Comics",
    author: "Todd McFarlane",
    image: "https://images.squarespace-cdn.com/content/v1/63a1da73f82c07774c77052c/78cb0600-9c22-4269-b47c-215cfbaaf9f1/spaw+1.jpg",
    description: "Al Simmons, a government assassin, is betrayed and killed by his boss. Upon resurrection, he finds himself five years into the future, transformed into a Hellspawn.",
    website: "https://imagecomics.com/comics/series/spawn",
    websiteName: "Image Comics"
  },
  {
    id: "the-boys",
    title: "The Boys",
    publisher: "Dynamite Entertainment",
    author: "Garth Ennis",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/The-Boys_Volume_One.jpg/250px-The-Boys_Volume_One.jpg",
    description: "In a world where superheroes embrace the darker side of their massive celebrity and fame, a group of vigilantes known as 'The Boys' set out to take down corrupt superheroes.",
    website: "https://www.dynamite.com/htmlfiles/viewProduct.html?PRO=C1524100117",
    websiteName: "Dynamite"
  },
  {
    id: "scott-pilgrim",
    title: "Scott Pilgrim",
    publisher: "Oni Press",
    author: "Bryan Lee O'Malley",
    image: "https://m.media-amazon.com/images/I/71iPLgUFlmL.jpg",
    description: "Scott Pilgrim's life is totally sweet. He's 23 years old, in a rock band, between jobs, and dating a cute high school girl. Everything's fantastic until a seriously mind-blowing delivery girl named Ramona Flowers enters his life.",
    website: "https://onipress.com/products/scott-pilgrim-color-collection-vol-1",
    websiteName: "Oni Press"
  },
  {
    id: "sin-city",
    title: "Sin City",
    publisher: "Dark Horse Comics",
    author: "Frank Miller",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470924735i/59969.jpg",
    description: "A series of neo-noir comics featuring stories of crime, betrayal and revenge in Basin City, a town where corruption runs deep.",
    website: "https://www.darkhorse.com/Search/sin+city",
    websiteName: "Dark Horse"
  },
  {
    id: "paper-girls",
    title: "Paper Girls",
    publisher: "Image Comics",
    author: "Brian K. Vaughan",
    image: "https://m.media-amazon.com/images/I/81fH9bZEycL._AC_UF1000,1000_QL80_.jpg",
    description: "A group of four 12-year-old newspaper delivery girls from 1988 become caught in a conflict between two warring factions of time-travelers.",
    website: "https://imagecomics.com/comics/series/paper-girls",
    websiteName: "Image Comics"
  }
];
