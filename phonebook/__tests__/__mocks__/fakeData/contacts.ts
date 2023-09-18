import { ContactOutputDTO } from "@/dtos/contactOutputDTO";

export const contactsList: ContactOutputDTO = {
  users: [
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      age: 50,
      gender: "male",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      image: "https://robohash.org/hicveldicta.png"
    },
    {
      id: 2,
      firstName: "Sheldon",
      lastName: "Quigley",
      age: 28,
      gender: "male",
      email: "hbingley1@plala.or.jp",
      phone: "+7 813 117 7139",
      image: "https://robohash.org/doloremquesintcorrupti.png"
    },
    {
      id: 3,
      firstName: "Terrill",
      lastName: "Hills",
      age: 38,
      gender: "male",
      email: "rshawe2@51.la",
      phone: "+63 739 292 7942",
      image: "https://robohash.org/consequunturautconsequatur.png"
    },
    {
      id: 4,
      firstName: "Miles",
      lastName: "Cummerata",
      age: 49,
      gender: "male",
      email: "yraigatt3@nature.com",
      phone: "+86 461 145 4186",
      image: "https://robohash.org/facilisdignissimosdolore.png",
    },
    {
      id: 5,
      firstName: "Mavis",
      lastName: "Schultz",
      age: 38,
      gender: "male",
      email: "kmeus4@upenn.edu",
      phone: "+372 285 771 1911",
      image: "https://robohash.org/adverovelit.png"
    }
  ],
  total: 5,
  skip: 0,
  limit: 30
}