import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createMovie } from "#db/queries/movies";
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser(
    "foo",
    "bar",
    "foobar@email.com",
    "FooBarUserName",
    "password123",
    "FooBar Bio",
    "https://example.com/profile.jpg"
  );

  await createMovie(
    "The Notebook",
    "Romance",
    123,
    "2004-06-05",
    "Nick Cassevettes",
    "https://th.bing.com/th/id/OIP.SdcmSGzsBZN5yogbxWqqLgHaHa?w=185&h=185&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "An epic love story centered around an older man who reads aloud to a woman with Alzheimer's. From a faded notebook, the old man's words bring to life the story about a couple who is separated by World War II, and is then passionately reunited, seven years later, after they have taken different paths."
  );

  await createMovie(
    "Batman Begins",
    "Action",
    140,
    "2005-05-15",
    "Christopher Nolan",
    "https://th.bing.com/th/id/OIP.N3ovIsICeEFj3oXwNlxcXAHaEK?w=329&h=185&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "After witnessing his parents' death, billionaire Bruce Wayne learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city."
  );

  await createMovie(
    "All about Eve",
    "Action",
    138,
    "1950-10-27",
    "Joseph L. Mankiewicz",
    "https://th.bing.com/th/id/OSK.foYoSmhu6W2wcU8y5ZjGnzQi9UB_yfDz7r8LDpDWZKE?w=200&h=200&c=12&o=6&dpr=2&pid=SANGAM",
    "A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends."
  );

  await createMovie(
    "Jaws",
    "Horror",
    124,
    "1975-06-20",
    "Steven Spielberg",
    "https://th.bing.com/th/id/OIP.CinVdved0tdx-B3ETRdssQAAAA?w=330&h=167&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to the local police chief, a marine biologist, and an old seafarer to hunt the beast down."
  );

  await createMovie(
    "A Fish Called Wanda",
    "Comedy",
    108,
    "1988-07-15",
    "Charles Crichton",
    "https://th.bing.com/th/id/OIP.vLsyETBMtrBvmjAkqz8UVQHaLH?w=124&h=186&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "A Fish Called Wanda is a British-American comedy about a group of eccentric criminals who double-cross each other in pursuit of stolen diamonds, leading to a series of absurd and hilarious mishaps. The film centers on the seductive Wanda, who manipulates everyone—including a bumbling barrister—to get what she wants."
  );

  await createMovie(
    "Moon",
    "Sci-Fi",
    97,
    "2009-01-23",
    "Duncan Jones",
    "https://th.bing.com/th/id/OSK.a261f8a2d885d7ad83c6a3748b316d8b?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "Astronaut Sam Bell has a quintessentially personal encounter toward the end of his three-year stint on the Moon, where he, working alongside his computer, GERTY, sends back to Earth parcels of a resource that has helped diminish our planet's power problems."
  );

  await createMovie(
    "Galaxy Quest",
    "Sci-Fi",
    102,
    "1999-12-23",
    "Dean Parisot",
    "https://th.bing.com/th/id/OSK.y4MUaO9222YR_OCwwV84-3KeIVWso47QqjN6jTgTk7U?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "The alumni cast of a space opera television series have to play their roles as the real thing when an alien race needs their help. However, they also have to defend both Earth and the alien race from a reptilian warlord."
  );

  await createMovie(
    "Total Recall",
    "Action",
    113,
    "1990-06-01",
    "Paul Verhoeven",
    "https://th.bing.com/th/id/OSK.dyiCwJJFl0f-xQaBE2astKLNoUh9Ic4e8Iq5_GB2z5Y?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "When a man goes in to have virtual vacation memories of the planet Mars implanted in his mind, an unexpected and harrowing series of events forces him to go to the planet for real - or is he?"
  );

  await createMovie(
    "Contact",
    "Drama",
    150,
    "1997-07-11",
    "Robert Zemeckis",
    "https://th.bing.com/th/id/OSK.Evbr4AF3K6GWErbLPAiDlDdF_ZrcyqEiuTBGb7SY6CA?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine."
  );

  await createMovie(
    "Eternal Sunshine of the Spotless Mind",
    "Drama",
    108,
    "2004-03-19",
    "Michael Gondry",
    "https://th.bing.com/th/id/OSK.8b5fbb9d5457ff810f43f09beea89e62?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever."
  );

  await createMovie(
    "Close Encounters of the Third Kind",
    "Drama",
    138,
    "1977-12-14",
    "Steven Spielberg",
    "https://th.bing.com/th/id/OSK.4f6715446a4f592e1c1eda83afc15c30?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "An Indiana electric lineman finds his quiet and ordinary daily life turned upside down after a close encounter with a UFO, spurring him to an obsessed cross-country quest for answers as a momentous event approaches."
  );

  await createMovie(
    "Arrival",
    "Drama",
    166,
    "2016-11-11",
    "Dennis Villeneuve",
    "https://th.bing.com/th/id/OSK.8e9a569ab0157eb076fed6e84651e86f?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "Linguist Louise Banks leads a team of investigators when gigantic spaceships touch down around the world. As nations teeter on the verge of global war, Banks and her crew must find a way to communicate with the extraterrestrial visitors."
  );

  await createMovie(
    "Ex Machina",
    "Drama",
    108,
    "2015-04-24",
    "Alex Garland",
    "https://th.bing.com/th/id/OSK.e36d1738c9902dce98ce2e89cb4e9590?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I."
  );

  await createMovie(
    "WALL-E",
    "Animation",
    98,
    "2008-06-27",
    "Andrew Stanton",
    "https://th.bing.com/th/id/OSK.267dd2483f0fb57081474c00fbea3845?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind."
  );

  await createMovie(
    "E.T.",
    "Sci-Fi",
    115,
    "1982-06-11",
    "Steven Spielberg",
    "https://th.bing.com/th/id/OSK.4rRnYlXYeJraY6efupv_AMpM3HBSePn2xCdRKJ7IQBw?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet."
  );

  await createMovie(
    "12 Monkeys",
    "Sci-Fi",
    129,
    "1996-01-05",
    "Terry Gilliam",
    "https://th.bing.com/th/id/OSK.6Lwb6xKMEgSOgIAZC8ACPycQxx2tzbmUhiCbUMeA4x4?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet."
  );

  await createMovie(
    "District 9",
    "Sci-Fi",
    112,
    "2009-08-14",
    "Neill Blomkamp",
    "https://th.bing.com/th/id/OSK.FiEddXhJffAD_vISt1d1L6phBfERK5gt398s01bK5XY?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "In a future Earth in which aliens are isolated in a remote ghetto, a government agent finds himself banished there."
  );

  await createMovie(
    "Children of Men",
    "Drama",
    109,
    "2007-01-05",
    "Alfonso Cuaron",
    "https://th.bing.com/th/id/OSK.95G9kGhhoec-N9Yel5AX1sSutY-u79Vj0hkWg7eCmKE?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "In 2027, in a chaotic world in which women have somehow become infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea."
  );

  await createMovie(
    "Akira",
    "Animation",
    124,
    "1988-08-19",
    "Katsuhiro Otomo",
    "https://th.bing.com/th/id/OSK.BmZmJIYtB83caVmi91t0aBOxAkZNoN-2NEw9KFABrt0?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A secret military project endangers Neo-Tokyo when it turns a teenage biker gang member into a rampaging psychic psychopath who can only be stopped by his best friend."
  );

  await createMovie(
    "Alien",
    "Sci-Fi",
    117,
    "1979-06-22",
    "Ridley Scott",
    "https://th.bing.com/th/id/OSK.OdE5o6EwBsc2jvGFdbbeIbJ4qSydmBGFcJtReGxG-oM?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform."
  );

  await createMovie(
    "Inception",
    "Sci-Fi",
    148,
    "2010-07-16",
    "Christopher Nolan",
    "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  );
  
  await createMovie(
    "The Shining",
    "Horror",
    146,
    "1980-05-23",
    "Stanley Kubrick",
    "https://image.tmdb.org/t/p/w500/9PbtCo6APZ2bG1yIA1bYH5p5VdP.jpg",
    "A family heads to an isolated hotel where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings."
  );
  
  await createMovie(
    "Pulp Fiction",
    "Comedy",
    154,
    "1994-10-14",
    "Quentin Tarantino",
    "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  );
  
  await createMovie(
    "Spirited Away",
    "Animation",
    125,
    "2001-07-20",
    "Hayao Miyazaki",
    "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits."
  );
  
  await createMovie(
    "The Godfather",
    "Drama",
    175,
    "1972-03-24",
    "Francis Ford Coppola",
    "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  );
  
  await createMovie(
    "Mad Max: Fury Road",
    "Action",
    120,
    "2015-05-15",
    "George Miller",
    "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    "In a post-apocalyptic wasteland, Max helps a rebellious woman and a group of female prisoners flee from a tyrant."
  );
  
  await createMovie(
    "Titanic",
    "Romance",
    195,
    "1997-12-19",
    "James Cameron",
    "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
  );
  
  await createMovie(
    "Get Out",
    "Horror",
    104,
    "2017-02-24",
    "Jordan Peele",
    "https://resizing.flixster.com/dH64ty4xXogChWriSfnj9PpNIEk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13365032_p_v8_bb.jpg",
    "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception eventually reaches a boiling point."
  );
  
  await createMovie(
    "Finding Nemo",
    "Animation",
    100,
    "2003-05-30",
    "Andrew Stanton",
    "https://image.tmdb.org/t/p/w500/2zG1HYkdB8Oa7wy4JwnrAvbUqFv.jpg",
    "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
  );
  
  await createMovie(
    "La La Land",
    "Romance",
    128,
    "2016-12-09",
    "Damien Chazelle",
    "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
  );  

    // ACTION
  await createMovie(
    "Die Hard",
    "Action",
    132,
    "1988-07-15",
    "John McTiernan",
    "https://image.tmdb.org/t/p/w500/1nt3A4ISDdm8P9aFWgUZUMtB8hl.jpg",
    "An NYPD officer tries to save his wife and others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles."
  );

  await createMovie(
    "The Dark Knight",
    "Action",
    152,
    "2008-07-18",
    "Christopher Nolan",
    "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  );

  await createMovie(
    "John Wick",
    "Action",
    101,
    "2014-10-24",
    "Chad Stahelski",
    "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him."
  );

  // HORROR
  await createMovie(
    "The Exorcist",
    "Horror",
    122,
    "1973-12-26",
    "William Friedkin",
    "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
    "When a young girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her."
  );

  await createMovie(
    "A Nightmare on Elm Street",
    "Horror",
    91,
    "1984-11-09",
    "Wes Craven",
    "https://image.tmdb.org/t/p/w500/o2QAjS43A6yPzNYeLk8C7LaUEQK.jpg",
    "Teenagers fall prey to Freddy Krueger, a disfigured midnight mangler who preys on the teenagers in their dreams—which, in turn, kills them in reality."
  );

  await createMovie(
    "Hereditary",
    "Horror",
    127,
    "2018-06-07",
    "Ari Aster",
    "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
    "A grieving family is haunted by tragic and disturbing occurrences."
  );

  // ROMANCE
  await createMovie(
    "Pride & Prejudice",
    "Romance",
    129,
    "2005-11-11",
    "Joe Wright",
    "https://image.tmdb.org/t/p/w500/1Hj8XgVOcMaTdrC2Eb6qG8M2FDr.jpg",
    "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class."
  );

  await createMovie(
    "Notting Hill",
    "Romance",
    124,
    "1999-05-28",
    "Roger Michell",
    "https://image.tmdb.org/t/p/w500/2iB9gTufSPhvZ6tEFKy9GoN0B2P.jpg",
    "The life of a simple bookshop owner changes when he meets the most famous film star in the world."
  );

  // COMEDY
  await createMovie(
    "Groundhog Day",
    "Comedy",
    101,
    "1993-02-12",
    "Harold Ramis",
    "https://image.tmdb.org/t/p/w500/4v1pEPuPnhs5gRyMaA6mtrz7b3y.jpg",
    "A weatherman finds himself inexplicably living the same day over and over again."
  );

  await createMovie(
    "Superbad",
    "Comedy",
    113,
    "2007-08-17",
    "Greg Mottola",
    "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry."
  );

  // ANIMATION
  await createMovie(
    "Toy Story",
    "Animation",
    81,
    "1995-11-22",
    "John Lasseter",
    "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
  );

  await createMovie(
    "The Lion King",
    "Animation",
    88,
    "1994-06-24",
    "Roger Allers, Rob Minkoff",
    "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  );

  // DRAMA
  await createMovie(
    "Forrest Gump",
    "Drama",
    142,
    "1994-07-06",
    "Robert Zemeckis",
    "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."
  );

  await createMovie(
    "The Shawshank Redemption",
    "Drama",
    142,
    "1994-09-23",
    "Frank Darabont",
    "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  );

  // SCI-FI
  await createMovie(
    "Blade Runner",
    "Sci-Fi",
    117,
    "1982-06-25",
    "Ridley Scott",
    "https://image.tmdb.org/t/p/w500/v8VhC3TU5p4A2M3XhZkT3Jv1a6F.jpg",
    "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator."
  );

  await createMovie(
    "Interstellar",
    "Sci-Fi",
    169,
    "2014-11-07",
    "Christopher Nolan",
    "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  );

  // A FEW DIRECTOR HIGHLIGHTS
  await createMovie(
    "Jurassic Park",
    "Action",
    127,
    "1993-06-11",
    "Steven Spielberg",
    "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
    "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok."
  );

  await createMovie(
    "Catch Me If You Can",
    "Drama",
    141,
    "2002-12-25",
    "Steven Spielberg",
    "https://image.tmdb.org/t/p/w500/wHJKqTN8LCC6f7K5gGd5WEx3I5V.jpg",
    "The true story of Frank Abagnale Jr., who successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor before his 19th birthday."
  );

  // MORE GENRE-BALANCED PICKS
  await createMovie(
    "Casablanca",
    "Romance",
    102,
    "1942-11-26",
    "Michael Curtiz",
    "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco."
  );

  await createMovie(
    "Shaun of the Dead",
    "Comedy",
    99,
    "2004-04-09",
    "Edgar Wright",
    "https://image.tmdb.org/t/p/w500/d9jZ7T1g67eU8yLQG4zDkaQxjXF.jpg",
    "A man's uneventful life is disrupted by the zombie apocalypse as he tries to win back his ex-girlfriend."
  );

  await createMovie(
    "Up",
    "Animation",
    96,
    "2009-05-29",
    "Pete Docter, Bob Peterson",
    "https://image.tmdb.org/t/p/w500/9kQWy5QZX93JcFGc1JbEiwHG9S2.jpg",
    "Seventy-eight-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway."
  );

      // ACTION
  await createMovie(
    "Skyfall",
    "Action",
    143,
    "2012-11-09",
    "Sam Mendes",
    "https://image.tmdb.org/t/p/w500/izrHg2UzxG3YXtbOS0UtzYv5bCk.jpg",
    "Bond's loyalty to M is tested when her past comes back to haunt her. As MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost."
  );

  await createMovie(
    "The Avengers",
    "Action",
    143,
    "2012-05-04",
    "Joss Whedon",
    "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
  );

  await createMovie(
    "Gladiator",
    "Action",
    155,
    "2000-05-05",
    "Ridley Scott",
    "https://image.tmdb.org/t/p/w500/pRn3TJHbAqCAO7V1Ggfw2I2id3U.jpg",
    "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  );

  // HORROR
  await createMovie(
    "Psycho",
    "Horror",
    109,
    "1960-09-08",
    "Alfred Hitchcock",
    "https://image.tmdb.org/t/p/w500/5gJkVIVU7FDp7AfRAbPSvvdbQx2.jpg",
    "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
  );

  await createMovie(
    "The Babadook",
    "Horror",
    94,
    "2014-05-22",
    "Jennifer Kent",
    "https://image.tmdb.org/t/p/w500/kb6Ju1GnV0OsS1aFqHn1bZbKsy2.jpg",
    "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled 'Mister Babadook' manifests in their home."
  );

  await createMovie(
    "It Follows",
    "Horror",
    100,
    "2015-03-13",
    "David Robert Mitchell",
    "https://image.tmdb.org/t/p/w500/wkixs3bAIlNh2b3QoyAoXoAqW70.jpg",
    "A young woman is followed by an unknown supernatural force after a sexual encounter."
  );

  // ROMANCE
  await createMovie(
    "Before Sunrise",
    "Romance",
    101,
    "1995-01-27",
    "Richard Linklater",
    "https://image.tmdb.org/t/p/w500/6a5bSS1z4WR6jtA6A4jtwp3UPKM.jpg",
    "A young man and woman meet on a train in Europe and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together."
  );

  await createMovie(
    "The Shape of Water",
    "Romance",
    123,
    "2017-12-01",
    "Guillermo del Toro",
    "https://image.tmdb.org/t/p/w500/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
    "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
  );

  // COMEDY
  await createMovie(
    "The Grand Budapest Hotel",
    "Comedy",
    100,
    "2014-03-28",
    "Wes Anderson",
    "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge."
  );

  await createMovie(
    "Step Brothers",
    "Comedy",
    98,
    "2008-07-25",
    "Adam McKay",
    "https://image.tmdb.org/t/p/w500/8Rk6C6gP7p5jTvk0CWZ4j41A4Uu.jpg",
    "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry."
  );

  // ANIMATION
  await createMovie(
    "Shrek",
    "Animation",
    90,
    "2001-05-18",
    "Andrew Adamson, Vicky Jenson",
    "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back."
  );

  await createMovie(
    "Coraline",
    "Animation",
    100,
    "2009-02-06",
    "Henry Selick",
    "https://image.tmdb.org/t/p/w500/4XBBXOQDZ8gEAvnwhh8o6KCbe2M.jpg",
    "An adventurous girl finds another world that is a strangely idealized version of her frustrating home, but it has sinister secrets."
  );

  // DRAMA
  await createMovie(
    "Requiem for a Dream",
    "Drama",
    102,
    "2000-10-27",
    "Darren Aronofsky",
    "https://image.tmdb.org/t/p/w500/8iSywUq6qLhL8Zq7B6KEtHeQ7eS.jpg",
    "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep."
  );

  await createMovie(
    "No Country for Old Men",
    "Drama",
    122,
    "2007-11-09",
    "Joel Coen, Ethan Coen",
    "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande."
  );

  // SCI-FI
  await createMovie(
    "Minority Report",
    "Sci-Fi",
    145,
    "2002-06-21",
    "Steven Spielberg",
    "https://image.tmdb.org/t/p/w500/pQAaF1J4IH5Fvgoyzb2uQffHLL7.jpg",
    "In a future where a special police unit can arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder."
  );

  await createMovie(
    "Edge of Tomorrow",
    "Sci-Fi",
    113,
    "2014-06-06",
    "Doug Liman",
    "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
    "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies."
  );

  // DIRECTOR SPOTLIGHTS & BALANCED PICKS
  await createMovie(
    "Jackie Brown",
    "Drama",
    154,
    "1997-12-25",
    "Quentin Tarantino",
    "https://image.tmdb.org/t/p/w500/cMSqT8b1bFqDDr9lW2Xw45CpQhT.jpg",
    "A flight attendant becomes a key figure in a plot between a smuggler, an aging bail bondsman, and a handful of inept criminals."
  );

  await createMovie(
    "Inside Out",
    "Animation",
    95,
    "2015-06-19",
    "Pete Docter",
    "https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg",
    "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school."
  );

  await createMovie(
    "The Big Lebowski",
    "Comedy",
    117,
    "1998-03-06",
    "Joel Coen",
    "https://image.tmdb.org/t/p/w500/5wF6bKVoNV4LR0QJduI8bep4V5V.jpg",
    "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies for help."
  );

  await createMovie(
    "My Neighbor Totoro",
    "Animation",
    86,
    "1988-04-16",
    "Hayao Miyazaki",
    "https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby."
  );

  await createMovie(
    "Pan's Labyrinth",
    "Drama",
    118,
    "2006-10-11",
    "Guillermo del Toro",
    "https://image.tmdb.org/t/p/w500/svYzz7d6vkb1H6cYc6GStS5lL2L.jpg",
    "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world."
  );


}
