const { Movie, Inventory } = require("../db");
const fillMovie = async (req, res) => {
  try {
    const movie1 = await Movie.create({
      name: "El exorcista del papa",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/qcknZEeD71byJ3XSalDDZ5iHpNr.jpg",
      description:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      price: 9.99,
      LanguageId: 1,
      FormatId: 1,
      date: "2023/04/5",
      vote_count: 10,
      vote_average: 4,
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie1.id,
    });

    await movie1.addGenres([1, 2, 3]);
    const movie2 = await Movie.create({
      name: "Guardianes de la Galaxia: Volumen 3",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      price: 8.99,
      LanguageId: 2,
      FormatId: 2,
      date: "2023/02/15",
      vote_count: 2,
      vote_average: 3,
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie2.id,
    });
    await movie2.addGenres([3, 4, 5]);

    const movie3 = await Movie.create({
      name: "Súper Mario Bros. La película",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
      description:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      price: 6.99,
      LanguageId: 4,
      FormatId: 4,
      date: "2023/04/5",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie3.id,
    });
    await movie3.addGenres([4, 1, 2]);

    const movie4 = await Movie.create({
      name: "Guardianes de la Galaxia: Volumen 3",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/voAxRv011XHK2qFBXmZKXPj2wWB.jpg",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      price: 10.99,
      LanguageId: 5,
      FormatId: 5,
      date: "2023/04/12",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie4.id,
    });
    await movie4.addGenres([3, 1, 2]);

    const movie5 = await Movie.create({
      name: "Posesión infernal: El despertar",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/ioMtng0qHbwNjR1fuxYZsRf1kjm.jpg",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      price: 10.99,
      LanguageId: 6,
      FormatId: 6,
      date: "2023/04/12",
    });

    await Inventory.create({
      quantity: 21,
      MovieId: movie5.id,
    });
    await movie5.addGenres([5, 1, 4]);

    const movie6 = await Movie.create({
      name: "Ghosting",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/zSw2JeQ03GivcS4VKJmWK5sYi1F.jpg",
      description:
        "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
      price: 15.99,
      LanguageId: 7,
      FormatId: 7,
      date: "2023/04/18",
    });

    await Inventory.create({
      quantity: 50,
      MovieId: movie6.id,
    });
    await movie6.addGenres([1, 2]);

    const movie7 = await Movie.create({
      name: "¡Shazam! La furia de los dioses",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/igFLHxab9zG0M89OmEpnOM6TPXn.jpg",
      description: `Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.`,
      price: 1.99,
      LanguageId: 1,
      FormatId: 2,
      date: "2023/03/15",
    });

    await Inventory.create({
      quantity: 60,
      MovieId: movie7.id,
    });
    await movie7.addGenres([1, 2, 3, 4]);

    const movie8 = await Movie.create({
      name: "Alias",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/rmlYg0HdVQDvvNlWishWT2WdxkE.jpg",
      description: `A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.`,
      price: 20.99,
      LanguageId: 2,
      FormatId: 3,
      date: "2023/04/28",
    });

    await Inventory.create({
      quantity: 70,
      MovieId: movie8.id,
    });
    await movie8.addGenres([3, 4, 5, 6]);

    const movie9 = await Movie.create({
      name: "Avatar: El sentido del agua",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/bqOqQ2Tawum3eHKNrc94P4EeaZB.jpg",
      description: `Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.`,
      price: 20.99,
      LanguageId: 3,
      FormatId: 4,
      date: "2022/12/14",
    });

    await Inventory.create({
      quantity: 80,
      MovieId: movie9.id,
    });
    await movie9.addGenres([1, 2, 3, 4]);

    const movie10 = await Movie.create({
      name: "Black Panther:Wakanda Forever",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      description: `Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.`,
      price: 20.99,
      LanguageId: 2,
      FormatId: 3,
      date: "2022/09/11",
    });

    await Inventory.create({
      quantity: 70,
      MovieId: movie10.id,
    });
    await movie10.addGenres([1, 2]);

    const movie11 = await Movie.create({
      name: "The Godfather",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      description: `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.`,
      price: 24.99,
      LanguageId: 2,
      FormatId: 3,
      date: "2023/08/14",
    });

    await Inventory.create({
      quantity: 70,
      MovieId: movie11.id,
    });
    await movie11.addGenres([1, 7]);

    const movie12 = await Movie.create({
      name: "The Shawshank Redemption",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      description: `Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.`,
      price: 20.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1994/09/23",
    });

    await Inventory.create({
      quantity: 70,
      MovieId: movie12.id,
    });
    await movie12.addGenres([6, 7, 8]);

    const movie13 = await Movie.create({
      name: "The Good, the Bad and the Ugly",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      description: `While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.`,
      price: 18.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1969/04/17",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie13.id,
    });
    await movie13.addGenres([1, 2, 19]);

    const movie14 = await Movie.create({
      name: "The Green Mile",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg",
      description: `A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.`,
      price: 10.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1999/12/10",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie14.id,
    });
    await movie14.addGenres([7, 9]);

    const movie15 = await Movie.create({
      name: "Life Is Beatiful",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg",
      description: `A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.`,
      price: 20.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1999/02/26",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie15.id,
    });
    await movie15.addGenres([7, 10]);

    const movie16 = await Movie.create({
      name: "Psycho",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
      description: `When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.`,
      price: 15.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1960/06/22",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie16.id,
    });
    await movie16.addGenres([7, 11, 13]);

    const movie17 = await Movie.create({
      name: "Se7en",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6yoghtyTpznpBik8EngEmJskVUO.jpg",
      description: `Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.`,
      price: 15.99,
      LanguageId: 2,
      FormatId: 3,
      date: "2010/09/14",
    });

    await Inventory.create({
      quantity: 30,
      MovieId: movie17.id,
    });
    await movie17.addGenres([1, 5, 13]);

    const movie18 = await Movie.create({
      name: "Rear Window",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qitnZcLP7C9DLRuPpmvZ7GiEjJN.jpg",
      description: `A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.`,
      price: 16.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1955/05/05",
    });

    await Inventory.create({
      quantity: 70,
      MovieId: movie18.id,
    });
    await movie18.addGenres([5, 7, 13]);

    const movie19 = await Movie.create({
      name: "Paths of Glory",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l2IY0gOHHmCWM90LjteFssxIV1G.jpg",
      description: `A commanding officer defends three scapegoats on trial for a failed offensive that occurred within the French Army in 1916.`,
      price: 18.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1957/12/20",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie19.id,
    });
    await movie19.addGenres([1, 2, 7, 10]);

    const movie20 = await Movie.create({
      name: "Seven Samurai",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
      description: `A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.`,
      price: 10.99,
      LanguageId: 2,
      FormatId: 3,
      date: "1954/04/26",
    });

    await Inventory.create({
      quantity: 40,
      MovieId: movie20.id,
    });
    await movie20.addGenres([1, 2]);

    const movie21 = await Movie.create({
      name: "Rambo",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r8LPeldxskHrGJTPfhICguCip2H.jpg",
      description: `When governments fail to act on behalf of captive missionaries, ex-Green Beret John James Rambo sets aside his peaceful existence along the Salween River in a war-torn region of Thailand to take action. Although he's still haunted by violent memories of his time as a U.S. soldier during the Vietnam War, Rambo can hardly turn his back on the aid workers who so desperately need his help.`,
      price: 9.99,
      LanguageId: 2,
      FormatId: 3,
      date: "2008/01/25",
    });

    await Inventory.create({
      quantity: 30,
      MovieId: movie21.id,
    });
    await movie21.addGenres([1, 2]);


const movie22 = await Movie.create({
  name: "Law Abiding Citizen",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fcEXcip7v0O1ndV4VUdFqJSqbOg.jpg",
  description: `A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free. He targets not only the killer but also the district attorney and others involved in the deal.`,
  price: 15.99,
  LanguageId: 2,
  FormatId: 4,
  date: "2009/10/15",
});

await Inventory.create({
  quantity: 70,
  MovieId: movie22.id,
});
await movie22.addGenres([1, 2]);

const movie23 = await Movie.create({
  name: "A Bronx Tale",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg",
  description: `Set in the Bronx during the tumultuous 1960s, an adolescent boy is torn between his honest, working-class father and a violent yet charismatic crime boss. Complicating matters is the youngster's growing attraction - forbidden in his neighborhood - for a beautiful black girl.`,
  price: 24.99,
  LanguageId: 2,
  FormatId: 3,
  date: "1993/09/14",
});

await Inventory.create({
  quantity: 70,
  MovieId: movie23.id,
});
await movie23.addGenres([1, 2, 7]);

const movie24 = await Movie.create({
  name: "The Gangster, the cop, the devil",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oHlM4abRm6BzrRcz9Nup1uidw9H.jpg",
  description: `After barely surviving a violent attack by an elusive serial killer, crime boss Jang Dong-su finds himself forming an unlikely partnership with local detective Jung Tae-seok to catch the sadistic killer simply known as K.`,
  price: 20.99,
  LanguageId: 2,
  FormatId: 3,
  date: "2019/05/15",
});

await Inventory.create({
  quantity: 30,
  MovieId: movie24.id,
});
await movie24.addGenres([1, 2, 7]);

const movie25 = await Movie.create({
  name: "Looks Can Kill",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1uy2PNFwtkqH3mhGd6irk5aeIrF.jpg",
  description: `A group of models is killed off, one by one, and everyone is a suspect.`,
  price: 18.99,
  LanguageId: 2,
  FormatId: 3,
  date: "2022/01/02",
});

await Inventory.create({
  quantity: 20,
  MovieId: movie25.id,
});
await movie25.addGenres([1, 2, 5]);

const movie26 = await Movie.create({
  name: "American History X",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
  description: `Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.`,
  price: 10.99,
  LanguageId: 2,
  FormatId: 3,
  date: "2009/04/07",
});

await Inventory.create({
  quantity: 20,
  MovieId: movie26.id,
});
await movie26.addGenres([1, 2, 7]);

const movie27 = await Movie.create({
  name: "The Empire Strikes Back",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg",
  description: `A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.`,
  price: 10.99,
  LanguageId: 2,
  FormatId: 3,
  date: "1980/12/25",
});

await Inventory.create({
  quantity: 10,
  MovieId: movie27.id,
});
await movie27.addGenres([1, 2]);

const movie28 = await Movie.create({
  name: "The Silence of the Lambs",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
  description: `Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that St`,
  price: 15.99,
  LanguageId: 2,
  FormatId: 3,
  date: "2021/10/28",
});

await Inventory.create({
  quantity: 10,
  MovieId: movie28.id,
});
await movie28.addGenres([7, 11, 13]);

const movie29 = await Movie.create({
  name: "Léon: The Profesional",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
  description: `Léon, the top hit man in New York, has earned a rep as an effective "cleaner". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.`,
  price: 12.99,
  LanguageId: 2,
  FormatId: 3,
  date: "1994/09/14",
});

await Inventory.create({
  quantity: 30,
  MovieId: movie29.id,
});
await movie29.addGenres([1, 2, 5]);

const movie30 = await Movie.create({
  name: "Modern Times",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/smggAeGHRjKy85h6BzF0eTeDrFW.jpg",
  description: `The Tramp struggles to live in modern industrial society with the help of a young homeless woman.`,
  price: 16.99,
  LanguageId: 2,
  FormatId: 3,
  date: "1936/06/20",
});

await Inventory.create({
  quantity: 70,
  MovieId: movie30.id,
});
await movie30.addGenres([9, 15]);

const movie31 = await Movie.create({
  name: "The Great Dictador",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1QpO9wo7JWecZ4NiBuu625FiY1j.jpg",
  description: `Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.`,
  price: 18.99,
  LanguageId: 2,
  FormatId: 3,
  date: "1941/01/01",
});

await Inventory.create({
  quantity: 10,
  MovieId: movie31.id,
});
await movie31.addGenres([1, 2, 4]);

const movie32 = await Movie.create({
  name: "City Lights",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg",
  description: `In this sound-era silent film, a tramp falls in love with a beautiful blind flower seller.`,
  price: 10.99,
  LanguageId: 2,
  FormatId: 3,
  date: "1931/07/03",
});

await Inventory.create({
  quantity: 40,
  MovieId: movie32.id,
});
await movie32.addGenres([4, 14]);

const movie33 = await Movie.create({
  name: "Interstellar",
  image:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  description: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`,
  price: 9.99,
  LanguageId: 2,
  FormatId: 3,
  date: "2014/11/06",
});

await Inventory.create({
  quantity: 10,
  MovieId: movie33.id,
});
await movie33.addGenres([1, 2, 15]);

  
const movie34 = await Movie.create({
  name: "HP La casa de la bruja de Lovecraft",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/5KmscR49WkmuPJKjmK4OUmsRn5C.jpg",
  description:
    'Decidido a demostrar la posibilidad de dimensiones alternativas, un estudiante de posgrado sin saberlo abre una puerta de entrada a un horror inimaginable. Basado en el cuento de H. P. Lovecraft "Los sueños en la casa de la bruja".',
  price: 20.50,
  LanguageId: 2,
  FormatId: 11,
  date: "2022/06/29",
});

await Inventory.create({
  quantity: 100,
  MovieId: movie34.id,
});
await movie34.addGenres([11]);



const movie35 = await Movie.create({
  name: "Liga de la Justicia x RWBY: Superhéroes y Cazadores: Parte 1",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/7twNCiHS1rR7P2fyGOH1sUmLDyY.jpg",
  description:
    'Superman, Batman, Mujer Maravilla, Flash, Cyborg, Linterna Verde y Vixen son transportados al extraño mundo de Remnant y se encuentran convertidos en adolescentes. Mientras tanto, los héroes de Remnant, Ruby, Weiss, Blake y Yang, deben combinar fuerzas con la Liga de la Justicia para descubrir por qué su planeta ha sido alterado misteriosamente antes de que un Grimm con superpoderes destruya todo.',
  price: 25.50,
  LanguageId: 2,
  FormatId: 10,
  date: "2023/04/25",
});

await Inventory.create({
  quantity: 88,
  MovieId: movie35.id,
});
await movie35.addGenres([3,1,9]);


const movie36 = await Movie.create({
  name: "Ant-Man y la Avispa: Quantumanía",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/jTNYlTEijZ6c8Mn4gvINOeB2HWM.jpg",
  description:
    'La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.',
  price: 25.50,
  LanguageId: 2,
  FormatId: 9,
  date: "2023/02/17",
});

await Inventory.create({
  quantity: 89,
  MovieId: movie36.id,
});
await movie36.addGenres([1,2,15]);



const movie37 = await Movie.create({
  name: "Dungeons & Dragons: Honor entre ladrones",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/77XBzUUFX5aHI3Jz3ipJTtsDWzk.jpghttps://www.themoviedb.org/t/p/w94_and_h141_bestv2/77XBzUUFX5aHI3Jz3ipJTtsDWzk.jpg",
  description:
    'Un ladrón encantador y una banda de aventureros increíbles emprenden un atraco épico para recuperar una reliquia perdida, pero las cosas salen rematadamente mal cuando se topan con las personas equivocadas. Adaptación cinematográfica del primer juego de rol de la historia, publicado por primera vez en 1974.',
  price: 26.50,
  LanguageId: 2,
  FormatId: 9,
  date: "2023/03/30",
});

await Inventory.create({
  quantity: 70,
  MovieId: movie37.id,
});
await movie37.addGenres([2,9,4]);


const movie38 = await Movie.create({
  name: "Súper Mario Bros. La película",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
  description:
    'Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi.',
  price: 27.50,
  LanguageId: 5,
  FormatId: 8,
  date: "2023/03/30",
});

await Inventory.create({
  quantity: 69,
  MovieId: movie38.id,
});
await movie38.addGenres([3,8,4,2,9]);

const movie39 = await Movie.create({
  name: "DC Liga de supermascotas",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/lDtANZzTD80bVi1DTRKRVDrurhJ.jpg",
  description:
    'Krypto el Superperro y Superman son amigos inseparables que comparten los mismos superpoderes y luchan juntos contra el crimen en Metrópolis. Cuando Superman y el resto de la Liga de la Justicia son secuestrados, Krypto debe convencer a un variopinto grupo de un albergue –Ace el sabueso, PB la cerdita barrigona, Merton la tortuga y Chip la ardilla– de dominar sus nuevos poderes y ayudarlo a rescatar a los superhéroes.',
  price: 28.50,
  LanguageId: 2,
  FormatId: 7,
  date: "2022/07/29",
});

await Inventory.create({
  quantity: 68,
  MovieId: movie39.id,
});
await movie39.addGenres([1,3,4,8,15]);

const movie40 = await Movie.create({
  name: "La forja de un campeón",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yjFCfffM2TTwWpxQYFZuqlnueeu.jpg",
  description:
    'A principios del siglo XIX, cuando el boxeo era el deporte de los reyes, Jem Belcher (Matt Hookings), un joven y talentoso boxeador, siguiendo los pasos de su abuelo Jack (Russell Crowe), luchó hasta convertirse en el campeón más joven de la historia de Inglaterra. Esta es la historia real, jamás contada hasta ahora, del nacimiento del boxeo.',
  price: 29.50,
  LanguageId: 2,
  FormatId: 6,
  date: "2022/07/22",
});

await Inventory.create({
  quantity: 66,
  MovieId: movie40.id,
});
await movie40.addGenres([7,10]);

const movie41 = await Movie.create({
  name: "La forja de un campeón",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/4Zna9CvyzaAgejsErmyXmHC64Dd.jpg",
  description:
    'Durante unas vacaciones en una cabaña en un bosque alejada de todo, una niña y sus padres se convierten en rehenes de cuatro desconocidos armados que obligan a la familia a tomar una decisión imposible para evitar el apocalipsis. Con acceso limitado al mundo exterior, la familia deberá decidir qué creer antes de que todo esté perdido.',
  price: 30.25,
  LanguageId: 4,
  FormatId: 6,
  date: "2023/02/02",
});

await Inventory.create({
  quantity: 65,
  MovieId: movie41.id,
});
await movie41.addGenres([11,17]);

const movie42 = await Movie.create({
  name: "Miraculous World: Shanghái, la leyenda de Ladygragon",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/r6zthVPVoq1urTOsLgofPGel89d.jpg",
  description:
    'Para unirse a Adrien en Shanghai, Marinette va a visitar a su tío Wang, quien celebra su cumpleaños. Pero tan pronto como llega a China, ¡le roban su bolso con Tikki!, lo que no le permite convertirse en una Ladybug en secreto! Privada y sola en la gran ciudad, Marinette acepta la ayuda de una joven muy ingeniosa, Fei. Las dos chicas se harán amigas y descubrirán la existencia de una nueva joya mágica, los Prodigios, que Hawk Moth, también presente en Shanghai, ha estado buscando durante mucho tiempo...',
  price: 31.25,
  LanguageId: 3,
  FormatId: 5,
  date: "2021/04/04",
});

await Inventory.create({
  quantity: 0,
  MovieId: movie42.id,
});
await movie42.addGenres([3,1,9]);

const movie43 = await Movie.create({
  name: "La sirenita",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/goX6Pcb7fugl9ADfg3Ns1OnuIYY.jpg",
  description:
    'Ariel es una joven y soñadora sirena, hija del Rey Tritón, que está cansada de su vida como princesa bajo el mar. Su mayor deseo es abandonar el fondo marino y tener una vida normal y apacible en la superficie. La bruja Úrsula descubre su anhelo y, por eso, a cambio de su preciosa voz le ofrece un cuerpo totalmente humano. Ariel acepta, movida por su pasión por conocer el mundo terrestre y porque está enamorada de un apuesto príncipe humano. Pero las cosas no serán fáciles para Ariel, ya que la bruja Úrsula esconde oscuras intenciones.',
  price: 32.25,
  LanguageId: 2,
  FormatId: 4,
  date: "2023/05/26",
});

await Inventory.create({
  quantity: 1,
  MovieId: movie43.id,
});
await movie43.addGenres([2,8,9,14]);


const movie44 = await Movie.create({
  name: "Shang-Chi y la leyenda de los Diez Anillos",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/baOzlpQllZbjyNBcTdeXESh9Y0M.jpg",
  description:
    'Adaptación cinematográfica del héroe creado por Steve Englehart y Jim Starlin en 1973, un personaje mitad chino, mitad americano, cuyo característico estilo de combate mezclaba kung-fu, nunchacos y armas de fuego.',
  price: 33.25,
  LanguageId: 2,
  FormatId: 3,
  date: "2021/09/03",
});

await Inventory.create({
  quantity: 0,
  MovieId: movie44.id,
});
await movie44.addGenres([1,2,9]);


const movie45 = await Movie.create({
  name: "Lilo, mi amigo el cocodrilo",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/piJK8RL8YBP4QZ2ZY1hLGS5uMa4.jpg",
  description:
    'Cuando la familia Primm se muda a Nueva York, su hijo adolescente Josh lucha por adaptarse a su nueva escuela y nuevos amigos. Todo eso cambia cuando descubre a Lilo – un cocodrilo cantante a quien le gusta darse baños, el caviar y la buena música – viviendo en el ático de su nueva casa. Los dos se convierten en mejores amigos, pero cuando la existencia de Lilo se ve amenazada por su malvado vecino Mr. Grumps, los Primm deberán aliarse con el carismático dueño de Lilo, Hector P. Valenti, para mostrar al mundo que la familia puede surgir de los lugares más inesperados y que no hay nada malo con un gran cocodrilo cantante con una personalidad aún mayor.',
  price: 34.25,
  LanguageId: 2,
  FormatId: 2,
  date: "2022/10/07",
});

await Inventory.create({
  quantity: 28,
  MovieId: movie45.id,
});
await movie45.addGenres([4,8,12]);


const movie46 = await Movie.create({
  name: "Miraculous World: Las aventuras de Ladybug en Nueva York",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/jNi01UnBT346wD8rquaxsNqVFCk.jpg",
  description:
    'Ladybug al lado de sus amigos, son enviados a la universidad de Nueva York con una finalidad, celebrar la Semana de la Amistad Franco-Americana, pero no cuentan con que se toparán con superhéroes estadounidenses que les cambiarán la estadía.',
  price: 35.25,
  LanguageId: 3,
  FormatId: 1,
  date: "2020/09/26",
});

await Inventory.create({
  quantity: 30,
  MovieId: movie46.id,
});
await movie46.addGenres([3,9,1]);


const movie47 = await Movie.create({
  name: "Guardianes de la noche: Rumbo a la aldea de los herreros ",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/rzAShiFrU6tSSr9gLD5AxKKwtOo.jpg",
  description:
    'Tras el cruel asesinato de su familia, Tanjiro Kamado, un chico de buen corazón, decide convertirse en cazador de demonios con la esperanza de volver a convertir en humana a su hermana pequeña, Nezuko. Junto con sus camaradas Zenitsu e Inosuke, y uno de los miembros de mayor rango del Cuerpo de Cazadores de Demonios, Tengen Uzui, Tanjiro se embarca en una misión en el Distrito del Entretenimiento, donde se encuentran con los formidables demonios de alto rango Daki y Gyutaro. Corte especial para cines del inicio del arco de la Villa de los Herreros.',
  price: 34.25,
  LanguageId: 8,
  FormatId: 2,
  date: "2023/02/03",
});

await Inventory.create({
  quantity: 31,
  MovieId: movie47.id,
});
await movie47.addGenres([3,9,1]);

const movie48 = await Movie.create({
  name: "La pasión de Cristo",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/eOecgHEmiejyBQ5J2CjGmF8sDFF.jpg",
  description:
    'Año 33 de nuestra era. En la provincia romana de Judea, un misterioso carpintero llamado Jesús de Nazareth comienza a anunciar la llegada del "reino de Dios" y se rodea de un grupo de humildes pescadores: los Apóstoles. Durante siglos, el pueblo judío había esperado la llegada del Mesías - personaje providencial que liberaría su sagrada patria e instauraría un nuevo orden basado en la justicia-. Las enseñanzas de Jesús atraen a una gran multitud de seguidores que lo reconocen como el Mesías. Alarmado por la situación, el Sanedrín, con la ayuda de Judas Iscariote, uno de los doce Apóstoles, arresta a Jesús. Acusado de traición a Roma, Cristo es entregado a Poncio Pilato, quien, para evitar un motín, lo condena a a morir en la cruz como un vulgar criminal.',
  price: 60.25,
  LanguageId: 1,
  FormatId: 3,
  date: "2004/03/26",
});

await Inventory.create({
  quantity: 100,
  MovieId: movie48.id,
});
await movie48.addGenres([7]);

const movie49 = await Movie.create({
  name: "La resurrección de la momia",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/cphIfZ7FYXib0Y4ZZ2cTv4Q3jAt.jpg",
  description:
    'Cuando un infame sarcófago egipcio "maldito" cae en manos del charlatán sin escrúpulos Everett Randolph, se obsesiona con resucitar a la princesa momificada que se encuentra dentro.',
  price: 30.05,
  LanguageId: 2,
  FormatId: 3,
  date: "2023/01/02",
});

await Inventory.create({
  quantity: 0,
  MovieId: movie49.id,
});
await movie49.addGenres([11]);


const movie50 = await Movie.create({
  name: "Siete reyes deben morir",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/55PJNDJbD4Q9jFO4vaCnNl9dYEv.jpg",
  description:
    'Tras la muerte del rey Eduardo, Uhtred de Bebbanburg y sus camaradas se aventuran a través de un reino fracturado con la esperanza de unir por fin a Inglaterra.',
  price: 30.05,
  LanguageId: 2,
  FormatId: 3,
  date: "2023/04/14",
});

await Inventory.create({
  quantity: 8,
  MovieId: movie50.id,
});
await movie50.addGenres([1,2,7,10]);

const movie51 = await Movie.create({
  name: "Naruto Shippuden, La Película: The Last ",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
  description:
    'Han pasado dos años desde que acabó la Cuarta Guerra Shinobi y con ello la última pelea entre Naruto y Sasuke. Konoha se encuentra en paz, pero un nuevo enemigo amenaza esta paz. La luna que fue creada por el sabio de los seis caminos cuando sello al Jūbi, se perturba y empieza a dirigirse a la tierra en forma de un meteorito gigante, se descubre que el causante de esta inminente tragedia es alguien llamado Toneri Ōtsutsuki quien es el último descendiente del Clan Ōtsutsuki, cuyos miembros habitaron en la luna los último mil años. En medio del inminente desastre Toneri Ōtsutsuki intenta secuestrar a Hinata, pero Hannabi, la hermana menor, es quien termina siendo raptada, es entonces donde Naruto y los demás deberán rescatarla y vencer a Toneri Ōtsutsuki antes de que sea demasiado tarde y así descubrir las verdaderas intenciones de Ōtsutsuki.',
  price: 30.05,
  LanguageId: 8,
  FormatId: 4,
  date: "2014/12/06",
});

await Inventory.create({
  quantity: 10,
  MovieId: movie51.id,
});
await movie51.addGenres([1,3,14]);

const movie52 = await Movie.create({
  name: "Naruto Shippuden, La Película: The Last ",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
  description:
    'Han pasado dos años desde que acabó la Cuarta Guerra Shinobi y con ello la última pelea entre Naruto y Sasuke. Konoha se encuentra en paz, pero un nuevo enemigo amenaza esta paz. La luna que fue creada por el sabio de los seis caminos cuando sello al Jūbi, se perturba y empieza a dirigirse a la tierra en forma de un meteorito gigante, se descubre que el causante de esta inminente tragedia es alguien llamado Toneri Ōtsutsuki quien es el último descendiente del Clan Ōtsutsuki, cuyos miembros habitaron en la luna los último mil años. En medio del inminente desastre Toneri Ōtsutsuki intenta secuestrar a Hinata, pero Hannabi, la hermana menor, es quien termina siendo raptada, es entonces donde Naruto y los demás deberán rescatarla y vencer a Toneri Ōtsutsuki antes de que sea demasiado tarde y así descubrir las verdaderas intenciones de Ōtsutsuki.',
  price: 30.05,
  LanguageId: 8,
  FormatId: 4,
  date: "2014/12/06",
});

await Inventory.create({
  quantity: 10,
  MovieId: movie52.id,
});
await movie52.addGenres([1,3,14]);


const movie53 = await Movie.create({
  name: "The Seven Deadly Sins: La maldición de la luz",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/w6U2pGQokqWh2wJLRaXi0bVd3zF.jpg",
  description:
    'Con la ayuda del "Dragón Sin of Wrath" Meliodas y los peores rebeldes de la historia, los Siete Pecados Capitales, la "Guerra Santa", en la que cuatro razas, incluyendo Humanos, Diosas, Hadas y Gigantes lucharon contra los Demonios, finalmente se sobre. A costa de la vida de Escanor "El pecado del orgullo del león", el Rey Demonio fue derrotado y el mundo recuperó la paz. Después de eso, cada uno de los pecados toma su propio camino.',
  price: 40.05,
  LanguageId: 8,
  FormatId: 5,
  date: "2021/07/02",
});

await Inventory.create({
  quantity: 11,
  MovieId: movie53.id,
});
await movie53.addGenres([3,9]);

const movie54 = await Movie.create({
  name: "The Seven Deadly Sins: La maldición de la luz",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/w6U2pGQokqWh2wJLRaXi0bVd3zF.jpg",
  description:
    'Con la ayuda del "Dragón Sin of Wrath" Meliodas y los peores rebeldes de la historia, los Siete Pecados Capitales, la "Guerra Santa", en la que cuatro razas, incluyendo Humanos, Diosas, Hadas y Gigantes lucharon contra los Demonios, finalmente se sobre. A costa de la vida de Escanor "El pecado del orgullo del león", el Rey Demonio fue derrotado y el mundo recuperó la paz. Después de eso, cada uno de los pecados toma su propio camino.',
  price: 40.05,
  LanguageId: 8,
  FormatId: 5,
  date: "2021/07/02",
});

await Inventory.create({
  quantity: 12,
  MovieId: movie54.id,
});
await movie54.addGenres([3,9]);

const movie55 = await Movie.create({
  name: "La Liga de la Justicia de Zack Snyder",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/wcIJgChypo0s6ILm9Dkr13rV5q0.jpg",
  description:
    'Con la determinación de asegurar que el sacrificio definitivo de Superman no fue en vano, Bruce Wayne une fuerzas con Diana Prince para reclutar a un equipo de metahumanos que protejan el mundo de una amenaza inminente de proporciones catastróficas. La tarea es más difícil de lo que Bruce imaginaba, ya que cada uno de los reclutas deberá enfrentarse a sus propios demonios para trascender aquello que los detenía, para unirse y formar de manera definitiva una liga de héroes sin precedentes. Ahora unidos, Batman, Wonder Woman, Aquaman, Cyborg y Flash deberán salvar al planeta de la amenaza de Steppenwolf, DeSaad y Darkseid, antes de que sea demasiado tarde.',
  price: 41.05,
  LanguageId: 1,
  FormatId: 6,
  date: "2021/03/18",
});

await Inventory.create({
  quantity: 12,
  MovieId: movie55.id,
});
await movie55.addGenres([1,2,9,15]);

const movie56 = await Movie.create({
  name: "El rey león",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
  description:
    'La sabana africana es el escenario en el que tienen lugar las aventuras de Simba, un pequeño león que es el heredero del trono. Sin embargo, se ve forzado a exiliarse al ser injustamente acusado de la muerte de su padre. Durante su destierro, hará buenas amistades y, finalmente, regresará para recuperar lo que legítimamente le corresponde.',
  price: 70.30,
  LanguageId: 2,
  FormatId: 7,
  date: "1994/06/23",
});

await Inventory.create({
  quantity: 5,
  MovieId: movie56.id,
});
await movie56.addGenres([3,8,7]);

const movie57 = await Movie.create({
  name: "Space Jam: Nuevas Leyendas",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/i6E8fx8lAEI0PGGCUlaA2Ap1gWi.jpg",
  description:
    'Secuela de la cinta original de 1996, Space Jam, protagonizada por Michael Jordan. En esta segunda parte, la super estrella de la NBA es LeBron James, quien queda atrapado junto a su hijo Dom en un extraño lugar, un espacio digital de una fuerza todopoderosa y malvada conocida como A.I. Para volver a casa y poner a salvo a su hijo, el jugador de baloncesto deberá unir fuerzas con Bugs Bunny, Lola Bunny y el resto de personajes de los Looney Tunes para enfrentarse en un partido de baloncesto a los campeones digitalizados por inteligencia artificial.',
  price: 10.05,
  LanguageId: 2,
  FormatId: 8,
  date: "2021/07/16",
});

await Inventory.create({
  quantity: 8,
  MovieId: movie57.id,
});
await movie57.addGenres([3,4,8,15]);

const movie58 = await Movie.create({
  name: "Criminales a la vista",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/3jce1QvM2sma0TKYckNmIKzjhHC.jpg",
  description:
    'Nick y Audrey Spitz, ahora detectives a tiempo completo que tratan de hacer despegar su agencia de detectives privados, se ven inmersos en un conflicto internacional cuando su amigo, el maharajá, es secuestrado en mitad de su fastuosa boda.',
  price: 50.05,
  LanguageId: 2,
  FormatId: 9,
  date: "2023/03/28",
});

await Inventory.create({
  quantity: 10,
  MovieId: movie58.id,
});
await movie58.addGenres([4,5]);

const movie59 = await Movie.create({
  name: "Legado de sangre",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zTQ2o0gzVZOblt6KlV3bSKg0y8z.jpg",
  description:
    'Un exagente de las Fuerzas Especiales se mete en el inframundo criminal para evitar que le quiten a su único hijo.',
  price: 25.25,
  LanguageId: 2,
  FormatId: 10,
  date: "2023/01/05",
});

await Inventory.create({
  quantity: 15,
  MovieId: movie59.id,
});
await movie59.addGenres([5]);

const movie60 = await Movie.create({
  name: "Un héroe samurai: La leyenda de Hank",
  image:
    "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/dcccakIsT9rBE3EH1f38JMqtgYw.jpg",
  description:
    'Una comedia animada llena de acción para toda la familia inspirada en el clásico atemporal de Mel Brooks Blazing Saddles. Hank, un perro encantador con la cabeza llena de sueños sobre convertirse en samurái, parte en busca de su destino.',
  price: 35.25,
  LanguageId: 6,
  FormatId: 10,
  date: "2022/07/15",
});

await Inventory.create({
  quantity: 50,
  MovieId: movie60.id,
});
await movie60.addGenres([1,2,3,4,8,19]);
  //res.status(200).json("ok");
} catch (error) {
  //res.status(500).json({ error: error.message });
  console.log(error.message);
}
};
module.exports = fillMovie;
