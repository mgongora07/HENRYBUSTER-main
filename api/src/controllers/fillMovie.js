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
      vote_count: 2,
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

    //res.status(200).json("ok");
  } catch (error) {
    //res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

module.exports = fillMovie;
