import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createMovie } from "#db/queries/movies";
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("foo", "bar", "foobar@email.com", "FooBarUserName", "password123", "FooBar Bio", "https://example.com/profile.jpg");


  await createMovie (
    "The Notebook",
    "Romance",
    123,
    "2004-06-05",
    "Nick Cassevettes",
    "https://th.bing.com/th/id/OIP.SdcmSGzsBZN5yogbxWqqLgHaHa?w=185&h=185&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "An epic love story centered around an older man who reads aloud to a woman with Alzheimer's. From a faded notebook, the old man's words bring to life the story about a couple who is separated by World War II, and is then passionately reunited, seven years later, after they have taken different paths."
  );


  await createMovie (
    "Batman Begins",
    "Action",
    140,
    "2005-05-15",
    "Christopher Nolan",
    "https://th.bing.com/th/id/OIP.N3ovIsICeEFj3oXwNlxcXAHaEK?w=329&h=185&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "After witnessing his parents' death, billionaire Bruce Wayne learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city."
  );


  await createMovie (
    "All about Eve",
    "Action",
    138,
    "1950-10-27",
    "Joseph L. Mankiewicz",
    "https://th.bing.com/th/id/OSK.foYoSmhu6W2wcU8y5ZjGnzQi9UB_yfDz7r8LDpDWZKE?w=200&h=200&c=12&o=6&dpr=2&pid=SANGAM",
    "A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends."
  );


  await createMovie (
    "Jaws",
    "Horror",
    124,
    "1975-06-20",
    "Steven Spielberg",
    "https://th.bing.com/th/id/OIP.CinVdved0tdx-B3ETRdssQAAAA?w=330&h=167&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to the local police chief, a marine biologist, and an old seafarer to hunt the beast down."
  );


  await createMovie (
    "A Fish Called Wanda",
    "Comedy",
    108,
    "1988-07-15",
    "Charles Crichton",
    "https://th.bing.com/th/id/OIP.vLsyETBMtrBvmjAkqz8UVQHaLH?w=124&h=186&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "A Fish Called Wanda is a British-American comedy about a group of eccentric criminals who double-cross each other in pursuit of stolen diamonds, leading to a series of absurd and hilarious mishaps. The film centers on the seductive Wanda, who manipulates everyone—including a bumbling barrister—to get what she wants."
  );


  await createMovie (
    "Moon",
    "Sci-Fi",
    97,
    "2009-01-23",
    "Duncan Jones",
    "https://th.bing.com/th/id/OSK.a261f8a2d885d7ad83c6a3748b316d8b?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "Astronaut Sam Bell has a quintessentially personal encounter toward the end of his three-year stint on the Moon, where he, working alongside his computer, GERTY, sends back to Earth parcels of a resource that has helped diminish our planet's power problems."
  );


  await createMovie (
    "Galaxy Quest",
    "Sci-Fi", 
    102,
    "1999-12-23",
    "Dean Parisot",
    "https://th.bing.com/th/id/OSK.y4MUaO9222YR_OCwwV84-3KeIVWso47QqjN6jTgTk7U?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "The alumni cast of a space opera television series have to play their roles as the real thing when an alien race needs their help. However, they also have to defend both Earth and the alien race from a reptilian warlord."
  );


  await createMovie (
    "Total Recall",
    "Action",
    113,
    "1990-06-01",
    "Paul Verhoeven",
    "https://th.bing.com/th/id/OSK.dyiCwJJFl0f-xQaBE2astKLNoUh9Ic4e8Iq5_GB2z5Y?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "When a man goes in to have virtual vacation memories of the planet Mars implanted in his mind, an unexpected and harrowing series of events forces him to go to the planet for real - or is he?"
  );

  await createMovie (
    "Contact",
    "Drama",
    150,
    "1997-07-11",
    "Robert Zemeckis",
    "https://th.bing.com/th/id/OSK.Evbr4AF3K6GWErbLPAiDlDdF_ZrcyqEiuTBGb7SY6CA?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine."
  );

  await createMovie (
    "Eternal Sunshine of the Spotless Mind",
    "Drama",
    108,
    "2004-03-19",
    "Michael Gondry",
    "https://th.bing.com/th/id/OSK.8b5fbb9d5457ff810f43f09beea89e62?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever."
  );

  await createMovie (
    "Close Encounters of the Third Kind",
    "Drama",
    138,
    "1977-12-14",
    "Steven Spielberg",
    "https://th.bing.com/th/id/OSK.4f6715446a4f592e1c1eda83afc15c30?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "An Indiana electric lineman finds his quiet and ordinary daily life turned upside down after a close encounter with a UFO, spurring him to an obsessed cross-country quest for answers as a momentous event approaches."
  );

  await createMovie (
    "Arrival",
    "Drama",
    166,
    "2016-11-11",
    "Dennis Villeneuve",
    "https://th.bing.com/th/id/OSK.8e9a569ab0157eb076fed6e84651e86f?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "Linguist Louise Banks leads a team of investigators when gigantic spaceships touch down around the world. As nations teeter on the verge of global war, Banks and her crew must find a way to communicate with the extraterrestrial visitors."
  );

  await createMovie (
    "Ex Machina",
    "Drama",
    108,
    "2015-04-24",
    "Alex Garland",
    "https://th.bing.com/th/id/OSK.e36d1738c9902dce98ce2e89cb4e9590?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I."
  );

  await createMovie (
    "WALL-E",
    "Animation",
    98,
    "2008-06-27",
    "Andrew Stanton",
    "https://th.bing.com/th/id/OSK.267dd2483f0fb57081474c00fbea3845?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind."
  );


  await createMovie (
    "E.T.",
    "Sci-Fi",
    115,
    "1982-06-11",
    "Steven Spielberg",
    "https://th.bing.com/th/id/OSK.4rRnYlXYeJraY6efupv_AMpM3HBSePn2xCdRKJ7IQBw?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet."
  );

  await createMovie (
    "12 Monkeys",
    "Sci-Fi",
    129,
    "1996-01-05",
    "Terry Gilliam",
    "https://th.bing.com/th/id/OSK.6Lwb6xKMEgSOgIAZC8ACPycQxx2tzbmUhiCbUMeA4x4?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet."
  );

  await createMovie (
    "District 9",
    "Sci-Fi",
    112,
    "2009-08-14",
    "Neill Blomkamp",
    "https://th.bing.com/th/id/OSK.FiEddXhJffAD_vISt1d1L6phBfERK5gt398s01bK5XY?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "In a future Earth in which aliens are isolated in a remote ghetto, a government agent finds himself banished there."
  );

  await createMovie (
    "Children of Men",
    "Drama",
    109,
    "2007-01-05",
    "Alfonso Cuaron",
    "https://th.bing.com/th/id/OSK.95G9kGhhoec-N9Yel5AX1sSutY-u79Vj0hkWg7eCmKE?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "In 2027, in a chaotic world in which women have somehow become infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea."
  );

  await createMovie (
    "Akira",
    "Animation",
    124,
    "1988-08-19",
    "Katsuhiro Otomo",
    "https://th.bing.com/th/id/OSK.BmZmJIYtB83caVmi91t0aBOxAkZNoN-2NEw9KFABrt0?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "A secret military project endangers Neo-Tokyo when it turns a teenage biker gang member into a rampaging psychic psychopath who can only be stopped by his best friend."
  );

  await createMovie (
    "Alien",
    "Sci-Fi",
    117,
    "1979-06-22",
    "Ridley Scott",
    "https://th.bing.com/th/id/OSK.OdE5o6EwBsc2jvGFdbbeIbJ4qSydmBGFcJtReGxG-oM?w=120&h=168&c=7&rs=1&qlt=80&o=6&pid=SANGAM",
    "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform."
  );
}


