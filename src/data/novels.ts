export interface Novel {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  website: string;
  websiteName: string;
}

export const novels: Novel[] = [
  {
    id: "the-alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY466_.jpg",
    description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
    website: "https://tapas.io/series/the-alchemist",
    websiteName: "Tapas"
  },
  {
    id: "throne-of-glass",
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    image: "https://m.media-amazon.com/images/I/81REJ3+rUOL._AC_UF1000,1000_QL80_.jpg",
    description: "After serving out a year of hard labor in the salt mines of Endovier for her crimes, 18-year-old assassin Celaena Sardothien is dragged before the Crown Prince.",
    website: "https://tapas.io/series/throne-of-glass",
    websiteName: "Tapas"
  },
  {
    id: "the-silent-patient",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    image: "https://m.media-amazon.com/images/I/81JJPDNlxSL.jpg",
    description: "The Silent Patient is a shocking psychological thriller of a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    website: "https://tapas.io/series/the-silent-patient",
    websiteName: "Tapas"
  },
  {
    id: "where-the-crawdads-sing",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    image: "https://m.media-amazon.com/images/I/81O1oy0y9eL._SY466_.jpg",
    description: "For years, rumors of the 'Marsh Girl' haunted Barkley Cove, a quiet fishing village. Kya Clark is barefoot and wild; unfit for polite society. So in late 1969, when the popular Chase Andrews is found dead, locals immediately suspect her.",
    website: "https://tapas.io/series/where-the-crawdads-sing",
    websiteName: "Tapas"
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/51j8IiHZUtL._SY445_SX342_.jpg",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    website: "https://tapas.io/series/atomic-habits",
    websiteName: "Tapas"
  },
  {
    id: "the-way-of-kings",
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    image: "https://m.media-amazon.com/images/I/91KzZWpgmyL._SY466_.jpg",
    description: "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike.",
    website: "https://tapas.io/series/the-way-of-kings",
    websiteName: "Tapas"
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    image: "https://rukminim3.flixcart.com/image/850/1000/k6l2vm80/book/1/9/6/dune-original-imaeru6zh5kdrdg2.jpeg?q=90&crop=false",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the spice melange.",
    website: "https://tapas.io/series/dune",
    websiteName: "Tapas"
  },
  {
    id: "the-hobbit",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/710+HcoP38L._SY466_.jpg",
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep.",
    website: "https://tapas.io/series/the-hobbit",
    websiteName: "Tapas"
  },
  {
    id: "the-name-of-the-wind",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    image: "https://m.media-amazon.com/images/I/91b8oNwaV1L._SY466_.jpg",
    description: "The intimate narrative of Kvothe, a young man who grows to be one of the most notorious magicians his world has ever seen.",
    website: "https://tapas.io/series/the-name-of-the-wind",
    websiteName: "Tapas"
  },
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650530916i/58015557.jpg",
    description: "Among the seminal texts of the 20th century, 1984 is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
    website: "https://tapas.io/series/1984",
    websiteName: "Tapas"
  },
  // You can continue the rest of the novels following this same format...
  {
    id: "the-hunger-games",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    image: "https://m.media-amazon.com/images/I/71WSzS6zvCL._SY466_.jpg",
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts.",
    website: "https://tapas.io/series/the-hunger-games",
    websiteName: "Tapas"
  },
  {
    id: "harry-potter",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L._SY466_.jpg",
    description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard.",
    website: "https://tapas.io/series/harry-potter",
    websiteName: "Tapas"
  },
  {
    id: "the-martian",
    title: "The Martian",
    author: "Andy Weir",
    image: "https://m.media-amazon.com/images/I/91yEPgRcELL._SY466_.jpg",
    description: "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there.",
    website: "https://tapas.io/series/the-martian",
    websiteName: "Tapas"
  },
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    image: "https://m.media-amazon.com/images/I/81zD9kaVW9L._AC_UF1000,1000_QL80_.jpg",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.",
    website: "https://tapas.io/series/project-hail-mary",
    websiteName: "Tapas"
  },
  {
    id: "mistborn",
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    image: "https://m.media-amazon.com/images/I/811qBmIYTFL._AC_UF1000,1000_QL80_.jpg",
    description: "For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler reigned with absolute power and ultimate terror.",
    website: "https://tapas.io/series/mistborn",
    websiteName: "Tapas"
  },
  {
    id: "ready-player-one",
    title: "Ready Player One",
    author: "Ernest Cline",
    image: "https://m.media-amazon.com/images/I/91Be3OR3f8L.jpg",
    description: "In the year 2045, reality is an ugly place. The only time Wade Watts really feels alive is when he's jacked into the OASIS, a vast virtual world where most of humanity spends their days.",
    website: "https://tapas.io/series/ready-player-one",
    websiteName: "Tapas"
  },
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://m.media-amazon.com/images/I/71Q1tPupKjL._SY466_.jpg",
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language.",
    website: "https://tapas.io/series/pride-and-prejudice",
    websiteName: "Tapas"
  },
  {
    id: "the-great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://m.media-amazon.com/images/I/71FTb9X6wsL._SY466_.jpg",
    description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession'.",
    website: "https://tapas.io/series/the-great-gatsby",
    websiteName: "Tapas"
  },
  {
    id: "a-game-of-thrones",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    image: "https://m.media-amazon.com/images/I/91dSMhdIzTL._SY466_.jpg",
    description: "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King's Landing.",
    website: "https://tapas.io/series/a-game-of-thrones",
    websiteName: "Tapas"
  },
  {
    id: "circe",
    title: "Circe",
    author: "Madeline Miller",
    image: "https://m.media-amazon.com/images/I/91c0yRVm+0L._UF1000,1000_QL80_.jpg",
    description: "A bold and subversive retelling of the goddess's story. This is the story of the woman who transforms herself from an awkward nymph into a formidable witch, able to challenge gods, titans, and monsters alike.",
    website: "https://tapas.io/series/circe",
    websiteName: "Tapas"
  },
  {
    id: "the-midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    image: "https://m.media-amazon.com/images/I/81tCtHFtOgL._SY466_.jpg",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    website: "https://tapas.io/series/the-midnight-library",
    websiteName: "Tapas"
  },
  {
    id: "mexican-gothic",
    title: "Mexican Gothic",
    author: "Silvia Moreno-Garcia",
    image: "https://m.media-amazon.com/images/I/81Q9jM2ASmL.jpg",
    description: "A young woman investigates the strange happenings at a distant relative's house, uncovering secrets with real-life horrors rooted in the past.",
    website: "https://tapas.io/series/mexican-gothic",
    websiteName: "Tapas"
  },
  {
    id: "the-invisible-life-of-addie-larue",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    image: "https://www.crossword.in/cdn/shop/products/812Wwxq70qL.jpg?v=1685185850",
    description: "A young woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets. Everything changes when she stumbles upon a young man who remembers her name.",
    website: "https://tapas.io/series/the-invisible-life-of-addie-larue",
    websiteName: "Tapas"
  },
  {
    id: "klara-and-the-sun",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    image: "https://m.media-amazon.com/images/I/61tqFlvlU3L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    description: "A story told from the perspective of Klara, an Artificial Friend with outstanding observational qualities, who watches the world from her place in a store, hoping to be chosen by a customer.",
    website: "https://tapas.io/series/klara-and-the-sun",
    websiteName: "Tapas"
  }
];

