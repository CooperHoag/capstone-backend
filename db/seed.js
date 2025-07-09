import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createMovie } from "#db/queries/movies";
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("foo", "bar");
  await createMovie(
    "The Notebook",
    "romance",
    "123",
    "2004",
    "Nick Cassevettes",
    (src =
      "https://th.bing.com/th/id/OIP.SdcmSGzsBZN5yogbxWqqLgHaHa?w=185&h=185&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"),
    "An epic love story centered around an older man who reads aloud to a woman with Alzheimer's. From a faded notebook, the old man's words bring to life the story about a couple who is separated by World War II, and is then passionately reunited, seven years later, after they have taken different paths."
  );
  await createMovie(
    "Batman Begins",
    "action",
    "140",
    "2005",
    "Christopher Nolan",
    (src =
      "https://th.bing.com/th/id/OIP.N3ovIsICeEFj3oXwNlxcXAHaEK?w=329&h=185&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"),
    "After witnessing his parents' death, billionaire Bruce Wayne learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city."
  );
  await createMovie(
    "All about Eve",
    "action",
    "138",
    "1950",
    "Joseph L. Mankiewicz",
    (src =
      "https://th.bing.com/th/id/OSK.foYoSmhu6W2wcU8y5ZjGnzQi9UB_yfDz7r8LDpDWZKE?w=200&h=200&c=12&o=6&dpr=2&pid=SANGAM"),
    "A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends."
  );
  await createMovie(
    "Jaws",
    "Horror",
    "124",
    "1975",
    "Steven Spielberg",
    (src =
      "https://th.bing.com/th/id/OIP.CinVdved0tdx-B3ETRdssQAAAA?w=330&h=167&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"),
    "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to the local police chief, a marine biologist, and an old seafarer to hunt the beast down."
  );
  await createMovie(
    "A Fish Called Wanda",
    "comedy",
    "108",
    "1988",
    "Charles Crichton",
    (src =
      "https://th.bing.com/th/id/OIP.vLsyETBMtrBvmjAkqz8UVQHaLH?w=124&h=186&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"),
    "A Fish Called Wanda is a British-American comedy about a group of eccentric criminals who double-cross each other in pursuit of stolen diamonds, leading to a series of absurd and hilarious mishaps. The film centers on the seductive Wanda, who manipulates everyone—including a bumbling barrister—to get what she wants."
  );
}
