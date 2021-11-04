type Reaction = "🥶" | "💡";

export interface Person {
  reaction: Reaction;
  image: string;
  firstName: string;
  lastName: string;
  bio: string | undefined;
}

export const PEOPLE: Person[] = [
  {
    reaction: "🥶",
    image: "https://i.imgur.com/BIx8hAD.jpg",
    firstName: "Liam",
    lastName: "Nelson",
    bio: "Shiba to the moon!"
  },
  {
    reaction: "💡",
    image: "https://i.imgur.com/HqInH4G.jpg",
    firstName: "Ema",
    lastName: "Watson",
    bio: undefined
  },
  {
    reaction: "🥶",
    image:
      "https://userstock.io/data/wp-content/uploads/2017/09/nick-karvounis-75432-scaled.jpg",
    firstName: "Lewis",
    lastName: "Verstappen",
    bio: "Catch me if you can"
  },
  {
    reaction: "💡",
    image:
      "https://userstock.io/data/wp-content/uploads/2017/09/ilaya-raja-280339.jpg",
    firstName: "Bill",
    lastName: "Jobs",
    bio: "Check me on twitter @bill"
  },
  {
    reaction: "🥶",
    image:
      "https://userstock.io/data/wp-content/uploads/2017/09/jason-blackeye-223584.jpg",
    firstName: "Ana",
    lastName: "Camille",
    bio: undefined
  },
  {
    reaction: "💡",
    image:
      "https://userstock.io/data/wp-content/uploads/2017/06/pexels-photo-62456-scaled.jpeg",
    firstName: "Piper",
    lastName: "E.",
    bio:
      "Total food specialist. Friendly webaholic. Coffee fan. Proud analyst. TV Expert. Explorer. Travel Nerd. Incurable beer advocate."
  }
];
