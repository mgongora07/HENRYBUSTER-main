const { Movie, Inventory } = require("../db");
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
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
      vote_average: getRandomNumber(1, 5),
      name: "Interstellar",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      description: `Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí.`,
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
      vote_average: getRandomNumber(1, 5),
      name: "HP La casa de la bruja de Lovecraft",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5KmscR49WkmuPJKjmK4OUmsRn5C.jpg",
      description:
        'Decidido a demostrar la posibilidad de dimensiones alternativas, un estudiante de posgrado sin saberlo abre una puerta de entrada a un horror inimaginable. Basado en el cuento de H. P. Lovecraft "Los sueños en la casa de la bruja".',
      price: 20.5,
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
      vote_average: getRandomNumber(1, 5),
      name: "Liga de la Justicia x RWBY: Superhéroes y Cazadores: Parte 1",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7twNCiHS1rR7P2fyGOH1sUmLDyY.jpg",
      description:
        "Superman, Batman, Mujer Maravilla, Flash, Cyborg, Linterna Verde y Vixen son transportados al extraño mundo de Remnant y se encuentran convertidos en adolescentes.",
      price: 25.5,
      LanguageId: 2,
      FormatId: 10,
      date: "2023/04/25",
    });

    await Inventory.create({
      quantity: 88,
      MovieId: movie35.id,
    });
    await movie35.addGenres([3, 1, 9]);

    const movie36 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Ant-Man y la Avispa: Quantumanía",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lKHy0ntGPdQeFwvNq8gK1D0anEr.jpg",
      description:
        "La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.",
      price: 25.5,
      LanguageId: 2,
      FormatId: 9,
      date: "2023/02/17",
    });

    await Inventory.create({
      quantity: 89,
      MovieId: movie36.id,
    });
    await movie36.addGenres([1, 2, 15]);

    const movie37 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Dungeons & Dragons: Honor entre ladrones",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/77XBzUUFX5aHI3Jz3ipJTtsDWzk.jpg",
      description:
        "Un ladrón encantador y una banda de aventureros increíbles emprenden un atraco épico para recuperar una reliquia perdida, pero las cosas salen rematadamente mal cuando se topan con las personas equivocadas. Adaptación cinematográfica del primer juego de rol de la historia, publicado por primera vez en 1974.",
      price: 26.5,
      LanguageId: 2,
      FormatId: 9,
      date: "2023/03/30",
    });

    await Inventory.create({
      quantity: 70,
      MovieId: movie37.id,
    });
    await movie37.addGenres([2, 9, 4]);

    const movie38 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Súper Mario Bros. La película",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
      description:
        "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi.",
      price: 27.5,
      LanguageId: 5,
      FormatId: 8,
      date: "2023/03/30",
    });

    await Inventory.create({
      quantity: 69,
      MovieId: movie38.id,
    });
    await movie38.addGenres([3, 8, 4, 2, 9]);

    const movie39 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "DC Liga de supermascotas",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lDtANZzTD80bVi1DTRKRVDrurhJ.jpg",
      description:
        "Krypto el Superperro y Superman son amigos inseparables que comparten los mismos superpoderes y luchan juntos contra el crimen en Metrópolis. Cuando Superman y el resto de la Liga de la Justicia son secuestrados, Krypto debe convencer a un variopinto grupo de un albergue –Ace el sabueso, PB la cerdita barrigona, Merton la tortuga y Chip la ardilla– de dominar sus nuevos poderes y ayudarlo a rescatar a los superhéroes.",
      price: 28.5,
      LanguageId: 2,
      FormatId: 7,
      date: "2022/07/29",
    });

    await Inventory.create({
      quantity: 68,
      MovieId: movie39.id,
    });
    await movie39.addGenres([1, 3, 4, 8, 15]);

    const movie40 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "La forja de un campeón",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/grjCm3K0eWgNT7gHsE766oXs0VW.jpg",
      description:
        "A principios del siglo XIX, cuando el boxeo era el deporte de los reyes, Jem Belcher (Matt Hookings), un joven y talentoso boxeador, siguiendo los pasos de su abuelo Jack (Russell Crowe), luchó hasta convertirse en el campeón más joven de la historia de Inglaterra. Esta es la historia real, jamás contada hasta ahora, del nacimiento del boxeo.",
      price: 29.5,
      LanguageId: 2,
      FormatId: 6,
      date: "2022/07/22",
    });

    await Inventory.create({
      quantity: 66,
      MovieId: movie40.id,
    });
    await movie40.addGenres([7, 10]);

    const movie41 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Youngblood (Forja de campeón)",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y0M1j79sOShd6456pMEYpkDimhz.jpg",
      description:
        "Dean Youngblood (Lowe), con sólo 17 años, ha demostrado ser el mejor patinador sobre hielo. Lo que se propone es triunfar en la Liga Nacional de Hockey sobre hielo con los Hamilton Mustangs, un equipo canadiense no profesional.",
      price: 30.25,
      LanguageId: 4,
      FormatId: 6,
      date: "2023/02/02",
    });

    await Inventory.create({
      quantity: 65,
      MovieId: movie41.id,
    });
    await movie41.addGenres([11, 17]);

    const movie42 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Miraculous World: Shanghái, la leyenda de Ladygragon",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r6zthVPVoq1urTOsLgofPGel89d.jpg",
      description:
        "Para unirse a Adrien en Shanghai, Marinette va a visitar a su tío Wang, quien celebra su cumpleaños. Pero tan pronto como llega a China, ¡le roban su bolso con Tikki!, lo que no le permite convertirse en una Ladybug en secreto! Privada y sola en la gran ciudad, Marinette acepta la ayuda de una joven muy ingeniosa, Fei. Las dos chicas se harán amigas y descubrirán la existencia de una nueva joya mágica, los Prodigios, que Hawk Moth, también presente en Shanghai, ha estado buscando durante mucho tiempo...",
      price: 31.25,
      LanguageId: 3,
      FormatId: 5,
      date: "2021/04/04",
    });

    await Inventory.create({
      quantity: 0,
      MovieId: movie42.id,
    });
    await movie42.addGenres([3, 1, 9]);

    const movie43 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "La sirenita",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/goX6Pcb7fugl9ADfg3Ns1OnuIYY.jpg",
      description:
        "Ariel es una joven y soñadora sirena, hija del Rey Tritón, que está cansada de su vida como princesa bajo el mar. Su mayor deseo es abandonar el fondo marino y tener una vida normal y apacible en la superficie. La bruja Úrsula descubre su anhelo y, por eso, a cambio de su preciosa voz le ofrece un cuerpo totalmente humano. Ariel acepta, movida por su pasión por conocer el mundo terrestre y porque está enamorada de un apuesto príncipe humano. Pero las cosas no serán fáciles para Ariel, ya que la bruja Úrsula esconde oscuras intenciones.",
      price: 32.25,
      LanguageId: 2,
      FormatId: 4,
      date: "2023/05/26",
    });

    await Inventory.create({
      quantity: 1,
      MovieId: movie43.id,
    });
    await movie43.addGenres([2, 8, 9, 14]);

    const movie44 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Shang-Chi y la leyenda de los Diez Anillos",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/baOzlpQllZbjyNBcTdeXESh9Y0M.jpg",
      description:
        "Adaptación cinematográfica del héroe creado por Steve Englehart y Jim Starlin en 1973, un personaje mitad chino, mitad americano, cuyo característico estilo de combate mezclaba kung-fu, nunchacos y armas de fuego.",
      price: 33.25,
      LanguageId: 2,
      FormatId: 3,
      date: "2021/09/03",
    });

    await Inventory.create({
      quantity: 0,
      MovieId: movie44.id,
    });
    await movie44.addGenres([1, 2, 9]);

    const movie45 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Lilo, mi amigo el cocodrilo",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/piJK8RL8YBP4QZ2ZY1hLGS5uMa4.jpg",
      description:
        "Cuando la familia Primm se muda a Nueva York, su hijo adolescente Josh lucha por adaptarse a su nueva escuela y nuevos amigos. Todo eso cambia cuando descubre a Lilo – un cocodrilo cantante a quien le gusta darse baños, el caviar y la buena música – viviendo en el ático de su nueva casa.",
      price: 34.25,
      LanguageId: 2,
      FormatId: 2,
      date: "2022/10/07",
    });

    await Inventory.create({
      quantity: 28,
      MovieId: movie45.id,
    });
    await movie45.addGenres([4, 8, 12]);

    const movie46 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Miraculous World: Las aventuras de Ladybug en Nueva York",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9YbyvcrHmY2SVbdfXpb8mC4Fy0g.jpg",
      description:
        "Ladybug al lado de sus amigos, son enviados a la universidad de Nueva York con una finalidad, celebrar la Semana de la Amistad Franco-Americana, pero no cuentan con que se toparán con superhéroes estadounidenses que les cambiarán la estadía.",
      price: 35.25,
      LanguageId: 3,
      FormatId: 1,
      date: "2020/09/26",
    });

    await Inventory.create({
      quantity: 30,
      MovieId: movie46.id,
    });
    await movie46.addGenres([3, 9, 1]);

    const movie47 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Guardianes de la noche",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rzAShiFrU6tSSr9gLD5AxKKwtOo.jpg",
      description:
        "Tras el cruel asesinato de su familia, Tanjiro Kamado, un chico de buen corazón, decide convertirse en cazador de demonios con la esperanza de volver a convertir en humana a su hermana pequeña, Nezuko. Junto con sus camaradas Zenitsu e Inosuke, y uno de los miembros de mayor rango del Cuerpo de Cazadores de Demonios, Tengen Uzui, Tanjiro se embarca en una misión en el Distrito del Entretenimiento, donde se encuentran con los formidables demonios de alto rango Daki y Gyutaro. Corte especial para cines del inicio del arco de la Villa de los Herreros.",
      price: 34.25,
      LanguageId: 8,
      FormatId: 2,
      date: "2023/02/03",
    });

    await Inventory.create({
      quantity: 31,
      MovieId: movie47.id,
    });
    await movie47.addGenres([3, 9, 1]);

    const movie48 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "La pasión de Cristo",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eOecgHEmiejyBQ5J2CjGmF8sDFF.jpg",
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
      vote_average: getRandomNumber(1, 5),
      name: "La resurrección de la momia",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d0pt6KlVvmtG0uhccWjgWfIqJee.jpg",
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
      vote_average: getRandomNumber(1, 5),
      name: "Siete reyes deben morir",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/55PJNDJbD4Q9jFO4vaCnNl9dYEv.jpg",
      description:
        "Tras la muerte del rey Eduardo, Uhtred de Bebbanburg y sus camaradas se aventuran a través de un reino fracturado con la esperanza de unir por fin a Inglaterra.",
      price: 30.05,
      LanguageId: 2,
      FormatId: 3,
      date: "2023/04/14",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie50.id,
    });
    await movie50.addGenres([1, 2, 7, 10]);

    const movie51 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Naruto Shippuden, La Película: The Last ",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
      description:
        "Han pasado dos años desde que acabó la Cuarta Guerra Shinobi y con ello la última pelea entre Naruto y Sasuke. Konoha se encuentra en paz, pero un nuevo enemigo amenaza esta paz. ",
      price: 30.05,
      LanguageId: 8,
      FormatId: 4,
      date: "2014/12/06",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie51.id,
    });
    await movie51.addGenres([1, 3, 14]);

    const movie52 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Naruto Shippûden Kai",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/amaNi8LIKolFY1iBcSL09u22epv.jpg",
      description:
        "Naruto Kai is a fan project dedicated to removing filler, padding and any other executive-minded nonsense that made the Naruto animated series the mess that it is.",
      price: 30.05,
      LanguageId: 8,
      FormatId: 4,
      date: "2007/12/06",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie52.id,
    });
    await movie52.addGenres([1, 3, 14]);

    const movie53 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "The Seven Deadly Sins: La maldición de la luz",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w6U2pGQokqWh2wJLRaXi0bVd3zF.jpg",
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
    await movie53.addGenres([3, 9]);

    const movie54 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "The Seven Deadly Sins: El rencor de Edimburgo - Parte 1",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/VWKjOfMDisBDPJy1Dj5wxYLYTp.jpg",
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
    await movie54.addGenres([3, 9]);

    const movie55 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "La Liga de la Justicia de Zack Snyder",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wcIJgChypo0s6ILm9Dkr13rV5q0.jpg",
      description:
        "Con la determinación de asegurar que el sacrificio definitivo de Superman no fue en vano, Bruce Wayne une fuerzas con Diana Prince para reclutar a un equipo de metahumanos que protejan el mundo de una amenaza inminente de proporciones catastróficas. La tarea es más difícil de lo que Bruce imaginaba, ya que cada uno de los reclutas deberá enfrentarse a sus propios demonios para trascender aquello que los detenía, para unirse y formar de manera definitiva una liga de héroes sin precedentes. Ahora unidos, Batman, Wonder Woman, Aquaman, Cyborg y Flash deberán salvar al planeta de la amenaza de Steppenwolf, DeSaad y Darkseid, antes de que sea demasiado tarde.",
      price: 41.05,
      LanguageId: 1,
      FormatId: 6,
      date: "2021/03/18",
    });

    await Inventory.create({
      quantity: 12,
      MovieId: movie55.id,
    });
    await movie55.addGenres([1, 2, 9, 15]);

    const movie56 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "El rey león",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      description:
        "La sabana africana es el escenario en el que tienen lugar las aventuras de Simba, un pequeño león que es el heredero del trono. Sin embargo, se ve forzado a exiliarse al ser injustamente acusado de la muerte de su padre. Durante su destierro, hará buenas amistades y, finalmente, regresará para recuperar lo que legítimamente le corresponde.",
      price: 70.3,
      LanguageId: 2,
      FormatId: 7,
      date: "1994/06/23",
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie56.id,
    });
    await movie56.addGenres([3, 8, 7]);

    const movie57 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Space Jam: Nuevas Leyendas",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i6E8fx8lAEI0PGGCUlaA2Ap1gWi.jpg",
      description:
        "Secuela de la cinta original de 1996, Space Jam, protagonizada por Michael Jordan. En esta segunda parte, la super estrella de la NBA es LeBron James, quien queda atrapado junto a su hijo Dom en un extraño lugar, un espacio digital de una fuerza todopoderosa y malvada conocida como A.I. ",
      price: 10.05,
      LanguageId: 2,
      FormatId: 8,
      date: "2021/07/16",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie57.id,
    });
    await movie57.addGenres([3, 4, 8, 15]);

    const movie58 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Criminales a la vista",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3jce1QvM2sma0TKYckNmIKzjhHC.jpg",
      description:
        "Nick y Audrey Spitz, ahora detectives a tiempo completo que tratan de hacer despegar su agencia de detectives privados, se ven inmersos en un conflicto internacional cuando su amigo, el maharajá, es secuestrado en mitad de su fastuosa boda.",
      price: 50.05,
      LanguageId: 2,
      FormatId: 9,
      date: "2023/03/28",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie58.id,
    });
    await movie58.addGenres([4, 5]);

    const movie59 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Legado de sangre",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zTQ2o0gzVZOblt6KlV3bSKg0y8z.jpg",
      description:
        "Un exagente de las Fuerzas Especiales se mete en el inframundo criminal para evitar que le quiten a su único hijo.",
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
      vote_average: getRandomNumber(1, 5),
      name: "Un héroe samurai: La leyenda de Hank",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dcccakIsT9rBE3EH1f38JMqtgYw.jpg",
      description:
        "Una comedia animada llena de acción para toda la familia inspirada en el clásico atemporal de Mel Brooks Blazing Saddles. Hank, un perro encantador con la cabeza llena de sueños sobre convertirse en samurái, parte en busca de su destino.",
      price: 35.25,
      LanguageId: 6,
      FormatId: 10,
      date: "2022/07/15",
    });

    await Inventory.create({
      quantity: 50,
      MovieId: movie60.id,
    });

    await movie60.addGenres([1, 2, 3, 4, 8, 19]);

    const movie61 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Astérix y Obélix: El reino medio",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bEcAUzv57bdHLoGyjJQkyd8ENUY.jpg",
      description:
        "Un carro llega a la aldea de Astérix y Obélix, llevando a la emperatriz china Fu Yi. Ella vino a pedir ayuda después de la toma del poder por un tal Deng Tsin Qin, que derrocó a la princesa. Al parecer, la fama de los indomables galos se conoce hasta Shanghai...",
      price: 36.25,
      LanguageId: 3,
      FormatId: 11,
      date: "2023/02/01",
    });

    await Inventory.create({
      quantity: 51,
      MovieId: movie61.id,
    });

    await movie61.addGenres([4, 2, 8]);

    const movie62 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Jesus Obra Teatro",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aFC4cY9lBsZXTjrqvKrwqusXaa7.jpg",
      description:
        "En esta obra teatral, sea testigo de los eventos más milagrosos de la historia mientras Jesús zarpa con pescadores, desafía a los fariseos, se hace amigo de los marginados y cura a los heridos. Las vidas que toca nunca serán las mismas.",
      price: 36.25,
      LanguageId: 2,
      FormatId: 10,
      date: "2020/05/15",
    });

    await Inventory.create({
      quantity: 52,
      MovieId: movie62.id,
    });

    await movie62.addGenres([8, 10, 12]);

    const movie63 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Expediente Warren: Obligado por el demonio",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ghMQALCyytc6W0wlOlMIKiMSRKV.jpg",
      description:
        "Los investigadores paranormales Ed y Lorraine Warren se encuentran con lo que se convertiría en uno de los casos más sensacionales de sus archivos. La lucha por el alma de un niño los lleva más allá de todo lo que habían visto antes, para marcar la primera vez en la historia de los Estados Unidos que un sospechoso de asesinato reclamaría posesión demoníaca como defensa.",
      price: 37.35,
      LanguageId: 2,
      FormatId: 9,
      date: "2021/06/04",
    });

    await Inventory.create({
      quantity: 53,
      MovieId: movie63.id,
    });

    await movie63.addGenres([11, 13]);

    const movie64 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Obi-Wan Kenobi: El retorno del Jedi",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cv0iBeaxeIVJBenGVNCB7kNKTJ6.jpg",
      description:
        'Este especial explora el regreso de Obi-Wan Kenobi y Anakin Skywalker a la pantalla, así como de Ewan McGregor y Hyaden Christensen a sus ya clásicos papeles. La directora Deborah Chow se pone al frente del elenco y del equipo para crear nuevos héroes y villanos, que coexisten con las nuevas reencarnaciones de algunos personajes muy queridos de "Star Wars", y para narrar una épica aventura que entronca con las películas de la saga.',
      price: 38.35,
      LanguageId: 2,
      FormatId: 7,
      date: "2022/09/08",
    });

    await Inventory.create({
      quantity: 54,
      MovieId: movie64.id,
    });

    await movie64.addGenres([6]);

    const movie65 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Oblivion",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eO3r38fwnhb58M1YgcjQBd3VNcp.jpg",
      description:
        "Jack Harper es uno de los últimos técnicos de reparación de drones que permanece en la Tierra. Parte de una operación masiva para extraer recursos vitales después de décadas de guerra contra una amenaza terrorífica conocida como los Scavs, la misión de Jack está casi completada. Su existencia empieza a desmoronarse cuando rescata a una hermosa desconocida de una nave espacial caída. Su llegada desencadena una serie de acontecimientos que le llevan a cuestionarse todo lo conoce y pone el destino de la humanidad en sus manos.",
      price: 39.35,
      LanguageId: 2,
      FormatId: 6,
      date: "2013/04/19",
    });

    await Inventory.create({
      quantity: 55,
      MovieId: movie65.id,
    });

    await movie65.addGenres([1, 2, 15, 13]);

    const movie66 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Astérix y Obélix: Misión Cleopatra",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3I6ocizuNTB2DmNTffLxnCe4bnc.jpg",
      description:
        "Jack Harper es uno de los últimos técnicos de reparación de drones que permanece en la Tierra. Parte de una operación masiva para extraer recursos vitales después de décadas de guerra contra una amenaza terrorífica conocida como los Scavs, la misión de Jack está casi completada. Su existencia empieza a desmoronarse cuando rescata a una hermosa desconocida de una nave espacial caída. Su llegada desencadena una serie de acontecimientos que le llevan a cuestionarse todo lo conoce y pone el destino de la humanidad en sus manos.",
      price: 40.35,
      LanguageId: 3,
      FormatId: 5,
      date: "2002/01/30",
    });

    await Inventory.create({
      quantity: 56,
      MovieId: movie66.id,
    });

    await movie66.addGenres([2, 4, 8, 9]);

    const movie67 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Obra maestra",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gFuti8UisEutgcKw6xv5G44gyF3.jpg",
      description:
        "Jack Harper es uno de los últimos técnicos de reparación de drones que permanece en la Tierra. Parte de una operación masiva para extraer recursos vitales después de décadas de guerra contra una amenaza terrorífica conocida como los Scavs, la misión de Jack está casi completada. Su existencia empieza a desmoronarse cuando rescata a una hermosa desconocida de una nave espacial caída. Su llegada desencadena una serie de acontecimientos que le llevan a cuestionarse todo lo conoce y pone el destino de la humanidad en sus manos.",
      price: 41.35,
      LanguageId: 2,
      FormatId: 4,
      date: "2022/07/18",
    });

    await Inventory.create({
      quantity: 57,
      MovieId: movie67.id,
    });

    await movie67.addGenres([3, 4, 8, 15]);

    const movie68 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Astérix y Obélix contra César",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/16tATLAUhXi0mq7IaqEp2xur5zJ.jpg",
      description:
        "La pequeña villa de Astérix y Obelix es el último lugar que queda fuera del control de Roma. Cuando el recaudador de impuestos Claudius Incorruptus no consigue el dinero de sus habitantes, el propio Julio César se acerca al lugar para ver qué hay de especial en ellos. El secreto es una poción mágica preparada por su druida Panoramix les da a todos una fuerza sobrehumana cuando la beben.",
      price: 42.35,
      LanguageId: 3,
      FormatId: 1,
      date: "1999/02/03",
    });

    await Inventory.create({
      quantity: 58,
      MovieId: movie68.id,
    });

    await movie68.addGenres([2, 4, 8, 9]);

    const movie69 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Ese oscuro objeto del deseo",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/SjPvUTtdsK4TqALKryKkWZpE5x.jpg",
      description:
        "Durante un viaje en tren, de Sevilla a Madrid, el otoñal caballero Mathieu cuenta a sus compañeros de vagón la historia de sus infortunios amorosos con la bailarina Conchita. A partir de su primer encuentro, Conchita juega con la obsesión de Mathieu, haciéndolo pasar del deseo a la frustración y del amor al odio más furibundo",
      price: 43.35,
      LanguageId: 3,
      FormatId: 2,
      date: "1977/08/17",
    });

    await Inventory.create({
      quantity: 59,
      MovieId: movie69.id,
    });

    await movie69.addGenres([4, 7, 14]);

    const movie70 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Obsesión secreta",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oDNnaKq5FWDxDV1jk2cXVYIvknn.jpg",
      description:
        "Después de ser brutalmente atacada, Jennifer se recupera del trauma que ha sufrido, con la ayuda de su esposo, Russell. Mientras el detective Page persigue al agresor de Jennifer, ella, que no puede recordar nada de su pasado, se enfrentará a un gran peligro mientras regresa a una vida que no recuerda.",
      price: 44.35,
      LanguageId: 2,
      FormatId: 3,
      date: "2019/07/18",
    });

    await Inventory.create({
      quantity: 60,
      MovieId: movie70.id,
    });

    await movie70.addGenres([7, 13]);

    const movie71 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "La Obsesión de Kyla",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zrdhT7Mkk23M59cdV0aaiHLYQWs.jpg",
      description:
        "Riley conoce a Kyla en el instituto, una chica solitaria de la que rápidamente se vuelve amiga íntima. Pero pronto descubre la obsesión que tiene su nueva compañera.",
      price: 45.35,
      LanguageId: 2,
      FormatId: 4,
      date: "2018/06/12",
    });

    await Inventory.create({
      quantity: 61,
      MovieId: movie71.id,
    });

    await movie71.addGenres([7, 13, 16]);

    const movie72 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Whiplash. Música y obsesión",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sL32IZkyjlF7otj5vcUxiKSKzg5.jpg",
      description:
        "El objetivo de Andrew Neiman, un joven y ambicioso baterista de jazz, es triunfar en el elitista Conservatorio de Música de la Costa Este en el que estudia. Marcado por el fracaso de la carrera literaria de su padre, Andrew alberga sueños de grandeza. Terence Fletcher, un profesor conocido tanto por su talento como por sus rigurosos métodos de enseñanza, dirige el mejor conjunto de jazz del Conservatorio. Cuando Fletcher elige a Andrew y para formar parte del conjunto musical que dirige, cambia para siempre la vida del joven. La pasión de Andrew por alcanzar la perfección se convierte en obsesión, al tiempo que su despiadado profesor lo lleva al límite de su capacidad y de su salud mental.",
      price: 46.35,
      LanguageId: 2,
      FormatId: 5,
      date: "2014/10/10",
    });

    await Inventory.create({
      quantity: 0,
      MovieId: movie72.id,
    });

    await movie72.addGenres([7, 12]);

    const movie73 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetivo: Washington D.C.",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zC8HSq4xWsPgPDjgmlFix4VMtaD.jpg",
      description:
        "Después de un ataque traicionero, el agente del Servicio Secreto Mike Banning es acusado de intentar asesinar al Presidente Trumbull. Perseguido por sus propios colegas y por el FBI, Banning comienza una carrera contrarreloj para limpiar su nombre.",
      price: 47.35,
      LanguageId: 2,
      FormatId: 6,
      date: "2019/08/23",
    });

    await Inventory.create({
      quantity: 1,
      MovieId: movie73.id,
    });

    await movie73.addGenres([1, 13]);

    const movie74 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetos",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ejijnP0sOr4Fgxo5CYWT6rz3ZdG.jpg",
      description:
        "Mario trabaja en un gran almacén de objetos perdidos donde custodia todo tipo de enseres acumulados durante décadas. Hace tiempo que decidió apartarse de las personas e invierte su tiempo libre en investigar la procedencia de los objetos para devolver a sus dueños pedazos perdidos de sus vidas. Tan sólo Helena, una joven policía que visita el almacén con frecuencia, ha podido traspasar levemente su coraza. Un día llega al almacén una maleta rescatada del fondo del río. Dentro, encuentra ropa de bebé junto a unos restos humanos. Mario decide investigar por su cuenta y siguiendo el rastro de la maleta llega hasta Sara, una joven atrapada desde niña en una organización de tráfico de personas. Una red que trata a las personas como si fueran objetos.",
      price: 48.35,
      LanguageId: 1,
      FormatId: 7,
      date: "2022/09/30",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie74.id,
    });

    await movie74.addGenres([13]);

    const movie75 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Obsesionada",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/MEYFT2fW8ztkHiuBBOgz21SgJo.jpg",
      description:
        "Derek Charles, un financiero de éxito que acaba de recibir un importante ascenso, es feliz en su carrera profesional y en su matrimonio con la bella Sharon Charles. Ambos tienen un hijo adorable y se acaban de trasladar a la casa de sus sueños. Un día Derek conoce a una nueva empleada temporal en la oficina: Lisa. Hermosa, desenvuelta y siempre alegre. Lisa es la perfecta compañera de trabajo. De repente, en la fiesta de Navidad de la compañía, Lisa se abalanza sobre él y éste firmemente le dice que se equivoca. Al día siguiente, vuelve a intentarlo. Lisa no acepta un no por respuesta y su locura va a más con cada uno de los rechazos. Pronto, Derek empieza a preocuparse por lo lejos que parece que Lisa está dispuesta a llegar...",
      price: 49.35,
      LanguageId: 2,
      FormatId: 8,
      date: "2009/04/24",
    });

    await Inventory.create({
      quantity: 81,
      MovieId: movie75.id,
    });

    await movie75.addGenres([13, 7]);

    const movie76 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetivo: La Casa Blanca",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3AWmaBCfX6x3KTa4w5rGLMevNdU.jpg",
      description:
        "Mike Banning es un agente del Servicio Secreto estadounidense que, tras un accidente de coche en el que únicamente puede salvar la vida del presidente, decide dejar su trabajo. Pero cuando un comando ataca la Casa Blanca y toma como rehenes al presidente y a su equipo, Banning entrará de nuevo en acción.",
      price: 50.35,
      LanguageId: 2,
      FormatId: 9,
      date: "2013/03/22",
    });

    await Inventory.create({
      quantity: 82,
      MovieId: movie76.id,
    });

    await movie76.addGenres([13, 7]);

    const movie77 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetivo: Birmania",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3hq4VhEMseKMZuNUaSExDyqGhja.jpg",
      description:
        "Durante la II Guerra Mundial, el Mayor Nelson y sus hombres son lanzados en paracaídas sobre la jungla birmana, tras las líneas enemigas, para destruir una estación de radar japonesa. La angustiosa y extenuante expedición a través de la jungla y los pantanos repletos de soldados enemigos se convertirá en un juego mortal en el que tan importante será cumplir con éxito la misión como poder ser rescatados...",
      price: 52.35,
      LanguageId: 3,
      FormatId: 10,
      date: "2012/10/17",
    });

    await Inventory.create({
      quantity: 83,
      MovieId: movie77.id,
    });

    await movie77.addGenres([2, 4, 8]);

    const movie78 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Obsessed",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8nvAZX2WmWe6dKQb7KDoadQ6E5g.jpg",
      description:
        "En 1969, el coronel Kim Jin Pyung luchó con valentía en la guerra de Vietnam. En un complejo de viviendas de la familia militar, el coronel Kim Jin Pyung se enamora de la esposa de su subordinado.",
      price: 53.35,
      LanguageId: 10,
      FormatId: 11,
      date: "2014/05/14",
    });

    await Inventory.create({
      quantity: 84,
      MovieId: movie78.id,
    });

    await movie78.addGenres([7]);

    const movie79 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetivo: Londres",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AgivYpNxC0SqN2u8JY5udZeX3eE.jpg",
      description:
        "En un mundo gobernado por la injusticia y el caos, aparece la figura del presidente de los Estados Unidos que junto a su portavoz Trumbull, liderarán una lucha interna por las libertades de todos los americanos. Sin embargo, se producirá un intento de derrocamiento por parte de fuerzas espías para acabar con el primer ministro inglés. Esto podría significar un intento de eliminar la paz mundial a toda costa. Para ello el presidente contará con la inestimable ayuda de su guardaespaldas. Mike Benning agente secreto del MI6 liderará una contención para intentar acabar con esta revolución. Benning no estará sólo ya que volverá a encontrar apoyo de Trumbull, especializado en técnicas paramilitares.",
      price: 54.35,
      LanguageId: 2,
      FormatId: 10,
      date: "2016/03/04",
    });

    await Inventory.create({
      quantity: 86,
      MovieId: movie79.id,
    });

    await movie79.addGenres([1, 13]);

    const movie80 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Obsesiones tormentosas",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yPSBDsLZhA3BkKSE4LrPxoIv5mE.jpg",
      description:
        "Jan Dara es un joven tailandés, cuya primera experiencia sexual se lleva a cabo durante su infancia con su nana. Tras un enfrentamiento con su familia, en el que su hermana lo acusa de abuso sexual, Jan Dara huye de su casa y alimenta su interior con un irreparable odio contra los que antes amaba. Años después, Jan Dara regresa en busca de venganza sin saber que lo que encontrará será un mundo completamente distinto al de su niñez. Así, se enreda en una obsesión tormentosa con las tres mujeres que habitan su casa, hacia un destino catastrófico.",
      price: 55.35,
      LanguageId: 9,
      FormatId: 10,
      date: "2001/09/28",
    });

    await Inventory.create({
      quantity: 87,
      MovieId: movie80.id,
    });

    await movie80.addGenres([14, 7]);

    const movie81 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "London: Oscura obsesión",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lqRKxobqX3gu5bdvDQGjGrbSGII.jpg",
      description:
        "Syd (Chris Evans) es un yonqui neoyorkino de clase acomodada que va de mal en peor en su vida. Tras un reventón, se entera al recuperar la lucidez de que su ex-novia London (Jessica Biel) abandona la ciudad para mudarse a Los Angeles. Él la considera su único verdadero amor y se siente impulsado a visitarla por última vez antes de su partida. Así pues, ni corto ni perezoso, se hace amigo de uno de los invitados ocasionales y consigue infiltrarse en la fiesta de despedida. Sin embargo, ahí se enfrentará a la verdadera razón tras su ruptura y saldrán a la luz otros antecedentes...",
      price: 56.35,
      LanguageId: 20,
      FormatId: 10,
      date: "2006/04/20",
    });

    await Inventory.create({
      quantity: 88,
      MovieId: movie81.id,
    });

    await movie81.addGenres([14, 7, 1]);

    const movie82 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Fascinación (Obsession)",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9160yxML0m3XiBdwdfrJwBlS356.jpg",
      description:
        "Michael Courtland (Cliff Robertson), un importante hombre de negocios de Nueva Orleáns, pierde a su mujer Elizabeth (Genevieve Bujoid) y a su hija de nueve años en el fatal desenlace de un trágico secuestro. Muchos años después, durante un viaje por Italia con un socio suyo (John Lithgow), queda fascinado al conocer a Sandra, una joven que es el vivo retrato de su esposa.",
      price: 56.35,
      LanguageId: 2,
      FormatId: 11,
      date: "1976/08/01",
    });

    await Inventory.create({
      quantity: 89,
      MovieId: movie82.id,
    });

    await movie82.addGenres([7, 13]);

    const movie83 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Obsesión",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yxTNjzSf6G98I7cuYbm45Wgk2ZQ.jpg",
      description:
        "Claire Peterson, una profesora de instituto recién divorciada, comienza a tener una aventura sentimental con Noah, un atractivo joven adolescente que se ha mudado recientemente a la casa de al lado. Aunque al principio la relación marcha bien, pronto empieza a complicarse. El pasional romance toma un peligroso giro, y lo que prometía ser un cuento de hadas se convierte en una pesadilla para Claire cuando florecen los comportamientos obsesivos del joven, de los que tratará de escapar antes de que sea demasiado tarde.",
      price: 57.35,
      LanguageId: 2,
      FormatId: 10,
      date: "2015/01/23",
    });

    await Inventory.create({
      quantity: 89,
      MovieId: movie83.id,
    });

    await movie83.addGenres([11]);

    const movie84 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Santos y soldados: Objetivo Berlín",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ym8FvKNMpVdOVRteDTjj9zkPSJV.jpg",
      description:
        "El 15 de agosto de 1944, un grupo de paracaidistas saltó en el sur de Francia para proteger a las tropas aliadas que marchaban hacia Berlín. En territorio enemigo son atacados. Tres de ellos pondrán en riesgo su vida para proteger a los capturados.",
      price: 58.35,
      LanguageId: 2,
      FormatId: 9,
      date: "2012/08/17",
    });

    await Inventory.create({
      quantity: 90,
      MovieId: movie84.id,
    });

    await movie84.addGenres([7, 1]);

    const movie85 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "El Santo",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6l79hqAWJHrJDnDLCeQUZaGr1YD.jpg",
      description:
        "Un ladrón de maestría internacional, Simón Templar, también conocido como El Santo, es contratado por un hombre rico desesperado para encontrar a su hija secuestrada. Sin embargo, además de evadir a las autoridades, Simon debe enfrentarse a un peligroso adversario de su pasado.",
      price: 58.35,
      LanguageId: 2,
      FormatId: 8,
      date: "2017/02/17",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie85.id,
    });

    await movie85.addGenres([7, 2, 1]);

    const movie86 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Con luz propia: Michelle Obama y Oprah Winfrey",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/akmzMZWQasddjK9u8tVQvjEJnUP.jpg",
      description:
        "Michelle Obama habla de los retos y las lecciones vitales que inspiraron su segundo libro superventas en una esclarecedora conversación con Oprah Winfrey.",
      price: 59.35,
      LanguageId: 2,
      FormatId: 7,
      date: "2023/04/25",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie86.id,
    });

    await movie86.addGenres([6]);

    const movie87 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Pasión obsesiva",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/46PXzJ5iG1rtO9VbEGdWBVJSuPb.jpg",
      description:
        "Nicole Walker es una bella joven de 16 años que vive con su padre, su madrastra y su hermanastro. Una noche al salir a una fiesta con su mejor amiga, conoce a David en una discoteca, y desde esa noche comienzan una tórrida relación adolescente. En un comienzo todo va muy bien porque David parece encanatador, pero poco a poco David, a raíz de los celos y de la pésima relación con el padre de ella, empieza a mostrar su verdera personalidad hasta convertirse en una pesadilla para Nicole y toda su familia.",
      price: 60.35,
      LanguageId: 2,
      FormatId: 6,
      date: "1996/04/12",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie87.id,
    });

    await movie87.addGenres([11]);

    const movie88 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Las sobrinas de la señora Oberst",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fiPEJw2HPVB0xjMeyhmLt6UvIpD.jpg",
      description:
        "La señora Oberst, mujer joven y de reprimida sexualidad, debe hacerse cargo de dos jóvenes sobrinas en su casa de campo. Ambas son muy abiertas en relación al sexo y ella se verá obligada a mediar con los granjeros de la zona para tenerlas satisfechas. Todo ello provocará las situaciones más inusuales. (FILMAFFINITY)",
      price: 61.35,
      LanguageId: 3,
      FormatId: 4,
      date: "1980/01/18",
    });

    await Inventory.create({
      quantity: 4,
      MovieId: movie88.id,
    });

    await movie88.addGenres([4]);

    const movie89 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Misteriosa obsesión",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q4sLhtgw6a9SX9mtC1dgc1XWxoI.jpg",
      description:
        "Telly Paretta (Julianne Moore) se encuentra atormentada por el recuerdo de su hijo de ocho años, Sam, fallecido hace 14 meses en un accidente aéreo. Mientras intenta superar la pena y el consiguiente alejamiento de su marido Jim (Anthony Edwards), su psiquiatra, el Dr. Munce (Gary Sinise), le informa de que está sufriendo alucinaciones, que su hijo nunca existió y que ella misma está creando sus memorias. Confusa, intenta encontrar evidencias de la existencia de Sam, fotos, vídeos, libros de recuerdos. Pero todo ha desaparecido. Telly está convencida de que se está volviendo loca hasta que conoce a Ash Correll (Dominic West), el padre de una de las otras víctimas del accidente de aviación. Juntos, se embarcan en una búsqueda para probar la existencia de sus hijos y demostrar su salud mental.",
      price: 62.35,
      LanguageId: 2,
      FormatId: 3,
      date: "2004/09/24",
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie89.id,
    });

    await movie89.addGenres([7, 11, 13, 15]);

    const movie90 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Love, Honor and Obey",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xVJ3ZLCHfWUMkV1sIhnJXDGbJUW.jpg",
      description:
        "Jonny (Jonny Lee Miller) trabaja como cartero y está insatisfecho con su vida, razón por la cual le pide a su amigo Jude (Jude Law) que lo ayude a ingresar a la banda de gangsteres liderada por su tío Ray (Ray Winstone). Jonny logra ser aceptado en el grupo pero comienza a cometer errores y a generar rivalidades con otro clan de gángsteres, lo que ocasiona una guerra entre las mafias de Londres",
      price: 64.35,
      LanguageId: 2,
      FormatId: 2,
      date: "2000/04/7",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie90.id,
    });

    await movie90.addGenres([1, 4, 5]);

    const movie91 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Oba: The Last Samurai",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pPGTbVADWCAsgUcr4wtjJUpTh8Z.jpg",
      description:
        "La película, ambientada hacia el final de la Segunda Guerra Mundial, se basa en la novela “Oba, the Last Samurai,” escrita por el exsoldado estadounidense Don Jones, para contarnos la historia de un conocido y temido capitán japonés llamado Sakae Oba (alias “Fox”), que de un simple profesor de geografía, acaba liderando los últimos combates contra las fuerzas de Estados Unidos en la batalla de Saipan. Oba dirigió una de las últimas unidades que quedaban en Saipan; él y un pequeño grupo de hombres utilizaron tácticas de guerrillas contra las fuerzas americanas intentando resistir, a pesar de que la derrota estaba casi asegurada.",
      price: 65.35,
      LanguageId: 8,
      FormatId: 2,
      date: "2011/02/11",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie91.id,
    });

    await movie91.addGenres([18, 7]);

    const movie92 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Cadena perpetua",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dc1fX265fZIIY5Hab8I7CdETyJy.jpg",
      description:
        "Acusado del asesinato de su mujer, Andrew Dufresne, tras ser condenado a cadena perpetua, es enviado a la prisión de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros presidiarios, especialmente de Red, el jefe de la mafia de los sobornos.",
      price: 66.35,
      LanguageId: 9,
      FormatId: 1,
      date: "1994/03/14",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie92.id,
    });

    await movie92.addGenres([1, 7]);

    const movie93 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Amor en obras",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jNKGZ6RB6SlA4Vd00gZM9dfvSC2.jpg",
      description:
        "Cuando Gabriela, una ejecutiva de San Francisco, gana un hotel en Nueva Zelanda, dejará atrás la vida en la ciudad para restaurar la propiedad con ayuda de Jake Taylor, un apuesto contratista.",
      price: 67.35,
      LanguageId: 2,
      FormatId: 11,
      date: "2019/08/29",
    });

    await Inventory.create({
      quantity: 9,
      MovieId: movie93.id,
    });

    await movie93.addGenres([14, 4]);

    const movie94 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "La seguridad de los objetos",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i7w5Q2HP3dI6UbN59l3ZL55weir.jpg",
      description:
        "Retrato de las relaciones entre cuatro familias que viven en un barrio residencial de una ciudad americana. Esther Gold (Close) se dedica en exclusiva al cuidado de su hijo en coma. La vida de Jim Train (Mulroney) se desmorona cuando no consigue ascender en su trabajo. La familia Jennig se enfrenta al drama del divorcio. Por su parte, Helen Christianson (Place) está decidida a cambiar su aburrida y mundana vida.",
      price: 68.35,
      LanguageId: 2,
      FormatId: 10,
      date: "2003/03/07",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie94.id,
    });

    await movie94.addGenres([7]);

    const movie95 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Deadly Virtues: Love. Honour. Obey",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5uCkeMxYv7WNqko2oMWt7IuvV5G.jpg",
      description:
        "En la oscuridad de la noche, un extraño camina por una calle residencial.Busca una casa. Entra en la casa con la ayuda de una llave. Una vez allí, ataca a una pareja, hiriendo al hombre y persiguiendo y a la mujer. Cuando la mujer despierta, está atada a una silla, sabiendo que se dispone a pasar el peor fin de semana de su vida.",
      price: 69.35,
      LanguageId: 2,
      FormatId: 9,
      date: "2014/12/06",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie95.id,
    });

    await movie95.addGenres([7, 11]);

    const movie96 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Una obra maestra",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gFuti8UisEutgcKw6xv5G44gyF3.jpg",
      description:
        "Contratado para robar una pintura poco común de uno de los pintores más enigmáticos de todos los tiempos, un ambicioso marchante de arte se ve consumido por su propia codicia e inseguridad mientras la operación se sale de control.",
      price: 70.35,
      LanguageId: 2,
      FormatId: 10,
      date: "2014/12/06",
    });

    await Inventory.create({
      quantity: 11,
      MovieId: movie96.id,
    });

    await movie96.addGenres([7, 11]);

    const movie97 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "El ataúd (La caja oblonga)",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oPGrl74A8RoY8EuGaQcBPvmE1Tr.jpg",
      description:
        "El aristócrata Julian Markham mantiene a su hermano desfigurado, Sir Edward, encerrado en una torre de su casa. De vez en cuando Sir Edward escapa y causa estragos en la ciudad...",
      price: 71.35,
      LanguageId: 2,
      FormatId: 11,
      date: "1969/06/11",
    });

    await Inventory.create({
      quantity: 11,
      MovieId: movie97.id,
    });

    await movie97.addGenres([11]);

    const movie98 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetivo: Terrum",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vKvpE2UWYdaB7X4ABKGjKNdZWXy.jpg",
      description:
        'Terra es un pacífico planeta alienígena que se ve amenazado por la raza humana. Mala, una joven rebelde terriana, hará todo lo posible para conjurar el peligro. Adaptación al formato largometraje de un corto ("Terra") dirigido por el mismo realizador en 2003.',
      price: 72.35,
      LanguageId: 2,
      FormatId: 8,
      date: "2009/05/01",
    });

    await Inventory.create({
      quantity: 12,
      MovieId: movie98.id,
    });

    await movie98.addGenres([1, 2, 3, 15]);

    const movie99 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetivo terrorista",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zxDf5KZ9VTDpf4X5YP28ZadiVhc.jpg",
      description:
        "Un misterioso hombre (Kingsley) ha plantado 5 bombas que están programadas para explotar a menos que cuatro importantes terroristas sean inmediatamente liberados de prisión. Cuando llama con sus demandas al Inspector General del Departamento de Policía de Colombo (Cross), desencadena una ideológica y letal confrontación entre la verdad y el deber.",
      price: 73.35,
      LanguageId: 2,
      FormatId: 7,
      date: "2013/06/30",
    });

    await Inventory.create({
      quantity: 13,
      MovieId: movie99.id,
    });

    await movie99.addGenres([1]);

    const movie100 = await Movie.create({
      vote_average: getRandomNumber(1, 5),
      name: "Objetivo: Hasselhoff",
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7uo6PZl1UBtIRuPA2w6CnYp2kbS.jpg",
      description:
        "Chris, dueño de un club nocturno en horas bajas, debe dinero a un implacable prestamista. Desesperado, tan solo le queda matar a su apuesta en el bingo de la muerte de los famosos: el mismísimo David Hasselhoff.",
      price: 74.35,
      LanguageId: 2,
      FormatId: 7,
      date: "2017/08/29",
    });

    await Inventory.create({
      quantity: 13,
      MovieId: movie100.id,
    });

    await movie100.addGenres([4]);

    const movie101 = await Movie.create({
      name: "Scarface",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
      description:
        "Después de obtener una tarjeta verde a cambio de asesinar a un funcionario del gobierno cubano, Tony Montana reclama el tráfico de drogas en Miami. Asesinando brutalmente a cualquiera que se interponga en su camino, Tony finalmente se convierte en el capo de la droga más grande del estado, controlando casi toda la cocaína que llega a Miami. Pero el aumento de la presión de la policía, las guerras con los cárteles de la droga colombianos y su propia paranoia alimentada por las drogas sirven para alimentar las llamas de su eventual caída.",
      price: 77.35,
      LanguageId: 2,
      FormatId: 8,
      date: "02/09/1984",
    });

    await Inventory.create({
      quantity: 13,
      MovieId: movie101.id,
    });

    await movie101.addGenres([1]);

    const movie102 = await Movie.create({
      name: "The Good, the Bad and the Ugly",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      description:
        "Mientras continúa la Guerra Civil entre la Unión y la Confederación, tres hombres, un solitario solitario, un asesino a sueldo despiadado y un bandido mexicano, peinan el suroeste de Estados Unidos en busca de una caja fuerte que contiene $ 200,000 en oro robado.",
      price: 66.35,
      LanguageId: 2,
      FormatId: 8,
      date: "1968/11/01",
    });

    await Inventory.create({
      quantity: 13,
      MovieId: movie102.id,
    });

    await movie102.addGenres([1]);

    const movie103 = await Movie.create({
      name: "Cannibal Holocaust",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q8TR9TEePfYCFNvOo85Pwcd5pO5.jpg",
      description:
        "Un profesor de la Universidad de Nueva York regresa de una misión de rescate en la selva amazónica con las imágenes filmadas por un equipo perdido de documentalistas que estaban haciendo una película sobre las tribus caníbales locales de la zona.",
      price: 23.0,
      LanguageId: 2,
      FormatId: 11,
      date: "1980/07/02",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie103.id,
    });

    await movie103.addGenres([11]);

    const movie104 = await Movie.create({
      name: "Los Diez Mandamientos",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3Ei59AR64x6dMZfWobPCkZjbqTL.jpg",
      description:
        "Escapando de la muerte, un niño hebreo es criado en una casa real para convertirse en príncipe. Al descubrir su verdadera herencia, Moisés se embarca en una búsqueda personal para reclamar su destino como líder y libertador del pueblo hebreo.",
      price: 90.0,
      LanguageId: 2,
      FormatId: 3,
      date: "1957/12/17",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie104.id,
    });

    await movie104.addGenres([10]);

    const movie105 = await Movie.create({
      name: "Blade Runner",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
      description:
        "En el distópico Los Ángeles asfixiado por el smog de 2019, el corredor de espadas Rick Deckard es llamado a salir de su retiro para terminar con un cuarteto de replicantes que escaparon a la Tierra en busca de su creador para encontrar una forma de extender su corta vida.",
      price: 50.0,
      LanguageId: 2,
      FormatId: 3,
      date: "1982/10/21",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie105.id,
    });

    await movie105.addGenres([1, 2]);

    const movie106 = await Movie.create({
      name: "Ben-Hur",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/m4WQ1dBIrEIHZNCoAjdpxwSKWyH.jpg",
      description:
        "En el año 25 d. C., Judah Ben-Hur, un judío de la antigua Judea, se opone a la ocupación del imperio romano. Acusado falsamente por un amigo de la infancia romano convertido en señor supremo de intentar matar al gobernador romano, lo esclavizan y se llevan a su madre y hermana como prisioneras. Tres años más tarde, y liberado por un comandante de galera romano agradecido a quien rescató de ahogarse, se convierte en un auriga experto para Roma, mientras conspira para regresar a Judea, encontrar y rescatar a su familia y vengarse de su antiguo amigo. ",
      price: 60.0,
      LanguageId: 2,
      FormatId: 1,
      date: "1960/04/08",
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie106.id,
    });

    await movie106.addGenres([1, 2]);

    const movie107 = await Movie.create({
      name: "Servicio de entrega de Kiki",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/Aufa4YdZIv4AXpR9rznwVA5SEfd.jpg",
      description:
        "A una joven bruja, en su año obligatorio de vida independiente, le resulta difícil adaptarse a una nueva comunidad mientras se mantiene a sí misma administrando un servicio de mensajería aérea.",
      price: 10.0,
      LanguageId: 2,
      FormatId: 2,
      date: "1989/07/29",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie107.id,
    });

    await movie107.addGenres([2, 3, 9]);

    const movie108 = await Movie.create({
      name: "Castillo en el cielo",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pvH9ZafnrV94qzlJvi1nW0BiM1e.jpg",
      description:
        "Un niño y una niña con un cristal mágico deben competir contra piratas y agentes extranjeros en la búsqueda de un legendario castillo flotante.",
      price: 16.0,
      LanguageId: 1,
      FormatId: 2,
      date: "1986/02/08",
    });

    await Inventory.create({
      quantity: 1,
      MovieId: movie108.id,
    });

    await movie108.addGenres([2, 3, 9]);

    const movie109 = await Movie.create({
      name: "Beverly Hills Cop",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/eBJEvKkhQ0tUt1dBAcTEYW6kCle.jpg",
      description:
        "Un policía de Detroit despreocupado que investiga un asesinato se encuentra lidiando con la cultura muy diferente de Beverly Hills.",
      price: 9.0,
      LanguageId: 2,
      FormatId: 1,
      date: "1985 / 02 /05",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie109.id,
    });

    await movie109.addGenres([1, 4, 5]);

    const movie110 = await Movie.create({
      name: "Viernes 13",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/HzrPn1gEHWixfMOvOehOTlHROo.jpg",
      description:
        "Los consejeros del campamento son acechados y asesinados por un asaltante desconocido mientras intentan reabrir un campamento de verano que fue el lugar donde se ahogó un niño.",
      price: 8.0,
      LanguageId: 1,
      FormatId: 9,
      date: "1980/09/05",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie110.id,
    });

    await movie110.addGenres([11]);

    const movie111 = await Movie.create({
      name: "Grease",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/czVhhAaSBFpakur7U8pOIDV9NUG.jpg",
      description:
        "La buena chica australiana Sandy y el engrasador Danny se enamoraron durante el verano. Pero cuando descubren inesperadamente que ahora están en la misma escuela secundaria, ¿podrán reavivar su romance a pesar de sus excéntricos amigos?",
      price: 12.0,
      LanguageId: 1,
      FormatId: 1,
      date: 07 / 07 / 1978,
    });

    await Inventory.create({
      quantity: 15,
      MovieId: movie111.id,
    });

    await movie111.addGenres([4, 14]);

    const movie112 = await Movie.create({
      name: "Full Metal Jacket",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
      description:
        "Un infante de marina pragmático de EE. UU. observa los efectos deshumanizantes que la guerra entre EE. UU. y Vietnam tiene en sus compañeros reclutas, desde su brutal entrenamiento en el campo de entrenamiento hasta los sangrientos combates callejeros en Hue.",
      price: 4.0,
      LanguageId: 1,
      FormatId: 2,
      date: "1987/08/10",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie112.id,
    });

    await movie112.addGenres([1]);

    const movie113 = await Movie.create({
      name: "Spartacus",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/biaUMHb8xsdQHlEF6rHmlKxSARy.jpg",
      description:
        "El tracio rebelde Espartaco, nacido y criado como esclavo, es vendido al entrenador de gladiadores Batiatus. Después de semanas de ser entrenado para matar por la arena, Spartacus se vuelve contra sus dueños y lidera a los otros esclavos en rebelión. A medida que los rebeldes se mueven de pueblo en pueblo, su número aumenta a medida que los esclavos fugitivos se unen a sus filas. Bajo el liderazgo de Spartacus, se abren camino hacia el sur de Italia, donde cruzarán el mar y regresarán a sus hogares.",
      price: 7.0,
      LanguageId: 1,
      FormatId: 9,
      date: "1960/10/13",
    });

    await Inventory.create({
      quantity: 1,
      MovieId: movie113.id,
    });

    await movie113.addGenres([1, 2, 10]);

    const movie114 = await Movie.create({
      name: "Los Goonies",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/eBU7gCjTCj9n2LTxvCSIXXOvHkD.jpg",
      description:
        "Un joven adolescente llamado Mikey Walsh encuentra un viejo mapa del tesoro en el ático de su padre. Con la esperanza de salvar sus hogares de la demolición, Mikey y sus amigos Data Wang, Chunk Cohen y Mouth Devereaux emprenden una gran búsqueda para encontrar el alijo secreto del pirata One-Eyed Willie.",
      price: 30.0,
      LanguageId: 4,
      FormatId: 1,
      date: "1985/04/07",
    });

    await Inventory.create({
      quantity: 1,
      MovieId: movie114.id,
    });

    await movie114.addGenres([2]);

    const movie115 = await Movie.create({
      name: "Psicosis",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
      description:
        "Cuando la ladrona empleada de bienes raíces Marion Crane se da a la fuga con un fajo de billetes y la esperanza de comenzar una nueva vida, termina en el notorio Bates Motel, donde el gerente Norman Bates cuida a su madre confinada en casa.",
      price: 25.0,
      LanguageId: 1,
      FormatId: 3,
      date: "1960/06/28",
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie115.id,
    });

    await movie115.addGenres([7, 11]);

    const movie116 = await Movie.create({
      name: "Cobra",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jCxfbTh8JvJil5edhNywxaTHoWv.jpg",
      description:
        "Un policía callejero duro con el crimen debe proteger al único testigo sobreviviente de un extraño culto asesino con planes de largo alcance.",
      price: 50.0,
      LanguageId: 2,
      FormatId: 1,
      date: "1986/05/23",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie116.id,
    });

    await movie116.addGenres([1]);

    const movie117 = await Movie.create({
      name: "Mad Max",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5LrI4GiCSrChgkdskVZiwv643Kg.jpg",
      description:
        "En un futuro cercano devastado, una pandilla de motociclistas salvajes gobierna el camino. Aterrorizando a civiles inocentes mientras destrozan las calles, la pandilla despiadada se ríe en la cara de una fuerza policial empeñada en detenerlos. Pero subestiman a un oficial: Max Rockatansky. Y cuando los motociclistas maltratan al mejor amigo y la familia de Max, lo envían a un frenesí loco que lo deja con una sola cosa en el mundo por la que vivir: ¡la venganza!",
      price: 30.0,
      LanguageId: 2,
      FormatId: 1,
      date: "1979/04/12",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie117.id,
    });

    await movie117.addGenres([1, 2, 15]);

    const movie118 = await Movie.create({
      name: "Sociedad de poetas muertos",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ai40gM7SUaGA6fthvsd87o8IQq4.jpg",
      description:
        "En un internado de élite a la antigua en Nueva Inglaterra, un apasionado profesor de inglés inspira a sus alumnos a rebelarse contra las convenciones y aprovechar el potencial de cada día, cortejando el desdén del severo director.",
      price: 40.0,
      LanguageId: 1,
      FormatId: 2,
      date: "1990/02/15",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie118.id,
    });

    await movie118.addGenres([7]);

    const movie119 = await Movie.create({
      name: "RoboCop",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hHtOgGb3NihlyRATHlKPaFApbrd.jpg",
      description:
        "En un Detroit violento y casi apocalíptico, la malvada corporación Omni Consumer Products gana un contrato del gobierno de la ciudad para privatizar la fuerza policial. Para probar sus cyborgs que erradican el crimen, la compañía lleva al policía callejero Alex Murphy a una confrontación armada con el señor del crimen Boddicker para que puedan usar su cuerpo para apoyar su prototipo RoboCop no probado. Pero cuando RoboCop se entera de los nefastos planes de la compañía, se vuelve contra sus amos.",
      price: 60.0,
      LanguageId: 6,
      FormatId: 3,
      date: "1987/07/17",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie119.id,
    });

    await movie119.addGenres([1, 15]);

    const movie120 = await Movie.create({
      name: "Cazafantasmas",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7E8nLijS9AwwUEPu2oFYOVKhdFA.jpg",
      description:
        "Después de perder sus puestos académicos en una prestigiosa universidad, un equipo de parapsicólogos entra en el negocio como cazafantasmas cargados de protones que exterminan demonios, duendes y plagas sobrenaturales de todo tipo. Una campaña publicitaria da sus frutos cuando una violonchelista deslumbrante contrata al equipo para purgar sus ostentosas excavaciones de demonios que parecen vivir en su refrigerador.",
      price: 18.2,
      LanguageId: 7,
      FormatId: 7,
      date: "1984/06/08",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie120.id,
    });

    await movie120.addGenres([1, 15]);

    const movie121 = await Movie.create({
      name: "The Ledge",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/S99eCSnRFfeZJmDaIGIZF58H7w.jpg",
      description:
        "Una aventura de escalada en roca entre dos amigos se convierte en una terrorífica pesadilla. Después de que Kelly captura el asesinato de su mejor amiga en cámara, se convierte en el próximo objetivo de un grupo muy unido de amigos que no se detendrán ante nada para destruir la evidencia y a cualquiera que se interponga en su camino.",
      price: 15.0,
      LanguageId: 2,
      FormatId: 2,
      date: "2022/02/18",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie121.id,
    });

    await movie121.addGenres([2, 20]);

    const movie122 = await Movie.create({
      name: "Space Jam: A New Legacy",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
      description:
        "Cuando LeBron y su joven hijo Dom quedan atrapados en un espacio digital por una IA deshonesta, LeBron debe llevarlos a casa a salvo guiando a Bugs, Lola Bunny y toda la pandilla de Looney Tunes notoriamente indisciplinados a la victoria sobre los campeones digitalizados de la IA en la cancha. Es Tunes versus Goons en el desafío de mayor riesgo de su vida.",
      price: 20.0,
      LanguageId: 2,
      FormatId: 2,
      date: "2021/07/16",
    });

    await Inventory.create({
      quantity: 15,
      MovieId: movie122.id,
    });

    await movie122.addGenres([2, 3, 4]);

    const movie123 = await Movie.create({
      name: "El menú",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg",
      description:
        "Una joven pareja viaja a una isla remota para comer en un restaurante exclusivo donde el chef ha preparado un menú suntuoso, con algunas sorpresas impactantes.",
      price: 45.0,
      LanguageId: 1,
      FormatId: 2,
      date: "2022/11/18",
    });

    await Inventory.create({
      quantity: 45,
      MovieId: movie123.id,
    });

    await movie123.addGenres([4, 11, 20]);

    const movie124 = await Movie.create({
      name: "El último hombre caído",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4B7liCxNCZIZGONmAMkCnxVlZQV.jpg",
      description:
        "Después de que la civilización sucumbe a una pandemia mortal y su esposa es asesinada, un soldado de las fuerzas especiales abandona su deber y se convierte en ermitaño en la naturaleza nórdica. Años más tarde, una mujer herida aparece en su puerta. Escapó de un laboratorio y sus perseguidores creen que su sangre es la clave para una cura mundial. Duda en involucrarse, pero todas las dudas se desvanecen cuando descubre que su perseguidor no es otro que el Comandante Stone, el hombre que asesinó a su esposa hace algunos años.",
      price: 35.0,
      LanguageId: 8,
      FormatId: 6,
      date: "2021/10/19",
    });

    await Inventory.create({
      quantity: 14,
      MovieId: movie124.id,
    });

    await movie124.addGenres([1, 20]);

    const movie125 = await Movie.create({
      name: "El último hombre caído, La batalla en el lago Changjin: puente Water Gate",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4W58wirZhbzcw2lNzRS2ErKnOGS.jpg",
      description:
        "En el seguimiento de La batalla en el lago Changjin, los hermanos Wu Qianli y Wu Wanli emprenden una nueva tarea para el Ejército Popular de Voluntarios, defendiendo un puente que forma parte de la ruta de escape de las tropas estadounidenses del avance chino.",
      price: 5.0,
      LanguageId: 9,
      FormatId: 1,
      date: "2022/01/02",
    });

    await Inventory.create({
      quantity: 4,
      MovieId: movie125.id,
    });

    await movie125.addGenres([1]);

    const movie126 = await Movie.create({
      name: "Milagro en la celda No. 7",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bOth4QmNyEkalwahfPCfiXjNh1r.jpg",
      description:
        "Separado de su hija, un padre con discapacidad intelectual debe probar su inocencia cuando es encarcelado por la muerte del hijo de un comandante.",
      price: 23.0,
      LanguageId: 3,
      FormatId: 6,
      date: "2019/11/10",
    });

    await Inventory.create({
      quantity: 60,
      MovieId: movie126.id,
    });

    await movie126.addGenres([7]);

    const movie127 = await Movie.create({
      name: "El gángster, el policía, el diablo",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oHlM4abRm6BzrRcz9Nup1uidw9H.jpg",
      description:
        "Después de sobrevivir a duras penas a un ataque violento de un escurridizo asesino en serie, el jefe del crimen Jang Dong-su se encuentra formando una asociación improbable con el detective local Jung Tae-seok para atrapar al sádico asesino conocido simplemente como K.",
      price: 3.0,
      LanguageId: 9,
      FormatId: 1,
      date: "2019/05/15",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie127.id,
    });

    await movie127.addGenres([1, 2, 5]);

    const movie128 = await Movie.create({
      name: "La bestia marina",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9Zfv4Ap1e8eKOYnZPtYaWhLkk0d.jpg",
      description:
        "En una era en la que bestias aterradoras vagaban por los mares, los cazadores de monstruos eran héroes célebres. Ninguno fue más querido que el gran Jacob Holland. Pero cuando el joven Maisie Brumble viaja de polizón en su legendario barco, carga con un aliado inesperado. Juntos se embarcan en un viaje épico hacia aguas desconocidas y hacen historia.",
      price: 2.0,
      LanguageId: 1,
      FormatId: 1,
      date: "2022/07/08",
    });

    await Inventory.create({
      quantity: 9,
      MovieId: movie128.id,
    });

    await movie128.addGenres([2, 3, 8]);

    const movie129 = await Movie.create({
      name: "Nop",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
      description:
        "Los residentes de una quebrada solitaria del interior de California son testigos de un descubrimiento extraño y escalofriante.",
      price: 12.0,
      LanguageId: 8,
      FormatId: 1,
      date: "2022/07/21",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie129.id,
    });

    await movie129.addGenres([13, 15]);

    const movie130 = await Movie.create({
      name: "La visita sorpresa",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/a3J0t376OE1Vk3jKN67viY31s5.jpg",
      description:
        "Cuando una pareja joven hace una visita sorpresa a mamá, reciben una sorpresa aún mayor de un viejo amigo de la familia que planea robar las valiosas joyas de mamá mientras está fuera de la ciudad. Pero cuando el robo “fácil” sale mal y resulta en la muerte accidental del esposo de la hija, obliga a los dos jóvenes drogadictos a tomar una decisión difícil: abandonar el barco o hacer lo impensable.",
      price: 16.0,
      LanguageId: 2,
      FormatId: 1,
      date: "2022/01/14",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie130.id,
    });

    await movie130.addGenres([20, 5]);

    const movie131 = await Movie.create({
      name: "Code Name Banshee",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/YLv9S84WyPZ5uxty989Duhzi5u.jpg",
      description:
        "Caleb, un antiguo asesino del gobierno escondido, que reaparece cuando su protegido, el asesino igualmente mortal conocido como Banshee, descubre que se ha puesto una recompensa por la cabeza de Caleb.",
      price: 13.4,
      LanguageId: 2,
      FormatId: 1,
      date: "2022/01/07",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie131.id,
    });

    await movie131.addGenres([1, 20]);

    const movie132 = await Movie.create({
      name: "Mientras Haya Esperanza",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8GTJwaC2CeNa0Zg6QrPLwrfurpZ.jpg",
      description:
        "Después de que su piloto muere inesperadamente en pleno vuelo, el pasajero Doug White debe aterrizar con seguridad un avión y salvar a toda su familia de un peligro insuperable.",
      price: 15.9,
      LanguageId: 1,
      FormatId: 2,
      date: "2023/06/04",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie132.id,
    });

    await movie132.addGenres([7]);

    const movie133 = await Movie.create({
      name: "Los Extraños",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3OKBFYRVSKkBVJ7WpKogTVQfUqC.jpg",
      description:
        "La vida de privilegios meticulosamente diseñada de una mujer negra comienza a desmoronarse cuando dos extraños aparecen en su pintoresco pueblo suburbano.",
      price: 12.9,
      LanguageId: 2,
      FormatId: 1,
      date: "2023/02/17",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie133.id,
    });

    await movie133.addGenres([20]);

    const movie134 = await Movie.create({
      name: "Brick Mansions",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6OopiNRk7lWP0hPsY0eYqq2kQTi.jpg",
      description:
        "En un Detroit distópico, las grandes casas que alguna vez albergaron a los ricos ahora son hogares de los criminales más peligrosos de la ciudad. Rodeando el área hay un muro gigante para mantener seguro al resto de Detroit. Para el policía encubierto Damien Collier, cada día es una batalla contra la corrupción mientras lucha por llevar ante la justicia al asesino de su padre, Tremaine. Mientras tanto, Damien y un ex convicto llamado Lino trabajan juntos para salvar a la ciudad de un complot para destruirla.",
      price: 11.0,
      LanguageId: 2,
      FormatId: 4,
      date: "2014/04/25",
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie134.id,
    });

    await movie134.addGenres([1, 5, 7]);

    const movie135 = await Movie.create({
      name: "Un disparo",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3OXiTjU30gWtqxmx4BU9RVp2OTv.jpg",
      description:
        "Un escuadrón de élite de los SEAL de la Marina, en una misión encubierta para transportar a un prisionero fuera de una prisión isleña del sitio negro de la CIA, queda atrapado cuando los insurgentes atacan mientras intentan rescatar al mismo prisionero.",
      price: 9.0,
      LanguageId: 4,
      FormatId: 5,
      date: "2022/01/29",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie135.id,
    });

    await movie135.addGenres([1]);

    const movie136 = await Movie.create({
      name: "Ejército de los muertos",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
      description:
        "Después de un brote de zombis en Las Vegas, un grupo de mercenarios toma la última apuesta: aventurarse en la zona de cuarentena para llevar a cabo el mayor atraco jamás intentado.",
      price: 12.0,
      LanguageId: 1,
      FormatId: 1,
      date: "2021/05/14",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie136.id,
    });

    await movie136.addGenres([1, 5, 9]);

    const movie137 = await Movie.create({
      name: "El sastre de la mafia",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
      description:
        "Leonard es un sastre inglés que solía confeccionar trajes en el mundialmente famoso Savile Row de Londres. Después de una tragedia personal, terminó en Chicago, operando una pequeña sastrería en una parte peligrosa de la ciudad donde hace ropa hermosa para las únicas personas que pueden pagarla: una familia de gánsteres viciosos.",
      price: 10.0,
      LanguageId: 3,
      FormatId: 5,
      date: "2022/03/18",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie137.id,
    });

    await movie137.addGenres([5]);

    const movie138 = await Movie.create({
      name: "Éxodo: dioses y reyes",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uaDj37JtvLan9tihxZ18e6qL33b.jpg",
      description:
        "El desafiante líder Moisés se levanta contra el faraón egipcio Ramsés, poniendo a 400.000 esclavos en un monumental viaje de escape de Egipto y su aterrador ciclo de plagas mortales.",
      price: 10.0,
      LanguageId: 1,
      FormatId: 1,
      date: "2014/04/12",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie138.id,
    });

    await movie138.addGenres([1, 2, 7]);

    const movie139 = await Movie.create({
      name: "Eres tú",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3VTOxrrv4xA9ixJESEP8JOllDel.jpg",
      description:
        "La historia de Javier que, a los 16 años, mientras besaba por primera vez a una chica, se dio cuenta de que tenía el don de la clarividencia romántica. Javier puede ver el futuro... y por fin sabe quién es el amor de su vida.",
      price: 6.0,
      LanguageId: 6,
      FormatId: 2,
      date: "2023/03/03",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie139.id,
    });

    await movie139.addGenres([14]);

    const movie140 = await Movie.create({
      name: "En el bosque",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pWKTaGN9WMcKHKAir9POsKm4vEo.jpg",
      description:
        "Helen y su hija Emily acompañan a regañadientes al padre de Helen, Stan, en un viaje de campamento familiar, adentrándose en el bosque para disfrutar de una experiencia real al aire libre, solo para que el enojado terrateniente Howard llegue y los obligue a irse. Cuando su RV se atasca, Helen decide buscar ayuda pero descubre un secreto inquietante en la propiedad del hombre. Luego debe luchar para proteger a su familia y salir viva del bosque antes de ser perseguida.",
      price: 12.0,
      LanguageId: 3,
      FormatId: 1,
      date: "2022/01/28",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie140.id,
    });

    await movie140.addGenres([20, 11]);

    const movie141 = await Movie.create({
      name: "Un héroe samurai: La leyenda de Hank",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wMDUDwAArpfGdtTTZ25SfwngGwt.jpg",
      description:
        "Un perro de mala suerte se encuentra en un pueblo lleno de gatos que necesitan un héroe que los defienda del malvado plan de un villano despiadado para borrar su pueblo del mapa. Con la ayuda de un mentor reacio, nuestro desvalido debe asumir el papel de samurái del pueblo y unirse a los aldeanos para salvar el día.",
      price: 4.5,
      LanguageId: 1,
      FormatId: 1,
      date: "2022/11/08",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie141.id,
    });

    await movie141.addGenres([2, 3, 4, 8]);

    const movie142 = await Movie.create({
      name: "La princesa",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ksxiXqwPuEjh3gct1zUpyzNoQFt.jpg",
      description:
        "Al negarse a casarse con un capo de la droga, Grecia está decidida a pagar ella misma la deuda de su padre. Para ganar el dinero, decide apostar en los palenques de Sinaloa, donde conoce a Armando. Inmediatamente queda cautivado por su belleza y actitud intrépida. Pero, poco sabe él que enamorarse de ella será su esfuerzo más peligroso.",
      price: 12.0,
      LanguageId: 1,
      FormatId: 3,
      date: "2022/08/05",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie142.id,
    });

    await movie142.addGenres([1]);

    const movie143 = await Movie.create({
      name: "Tenemos un fantasma",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg",
      description:
        "Después de que Kevin encuentra un fantasma llamado Ernest acechando en su nuevo hogar, se convierte de la noche a la mañana en una sensación en las redes sociales. Pero cuando Kevin y Ernest se rebelan para investigar el misterio del pasado de este último, se convierten en objetivos de la CIA.",
      price: 17.0,
      LanguageId: 2,
      FormatId: 6,
      date: "2023/02/24",
    });

    await Inventory.create({
      quantity: 12,
      MovieId: movie143.id,
    });

    await movie143.addGenres([4, 8, 9]);

    const movie144 = await Movie.create({
      name: "Lorax",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tePFnZFw5JvjwjQjaKkqDPNMLPU.jpg",
      description:
        "Un niño de 12 años busca lo único que le permita ganarse el cariño de la chica de sus sueños. Para encontrarlo, debe descubrir la historia de Lorax, la criatura gruñona pero encantadora que lucha para proteger su mundo.",
      price: 10.0,
      LanguageId: 1,
      FormatId: 2,
      date: "2012/03/29",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie144.id,
    });

    await movie144.addGenres([3, 8]);

    const movie145 = await Movie.create({
      name: "Los tres mosqueteros: D'Artagnan",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hfExJPcbBtDeFDEb7I1By72Drlr.jpg",
      description:
        "D'Artagnan, un gascón joven y enérgico, es dado por muerto después de intentar salvar a una mujer noble del secuestro. Una vez en París, intenta por todos los medios encontrar a sus atacantes, sin saber que su búsqueda lo llevará al corazón mismo de una guerra donde está en juego el futuro de Francia. Con la ayuda de los mosqueteros del rey Athos, Porthos y Aramis, se enfrenta a las maquinaciones del malvado cardenal Richelieu y Milady de Winter, mientras se enamora de Constance, la confidente de la reina.",
      price: 6.0,
      LanguageId: 3,
      FormatId: 1,
      date: "2023/04/13",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie145.id,
    });

    await movie145.addGenres([2, 7, 9]);

    const movie146 = await Movie.create({
      name: "La lista de Schindler",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      description:
        "La verdadera historia de cómo el empresario Oskar Schindler salvó más de mil vidas judías de los nazis mientras trabajaban como esclavos en su fábrica durante la Segunda Guerra Mundial.",
      price: 100.0,
      LanguageId: 1,
      FormatId: 3,
      date: "1994/02/24",
    });

    await Inventory.create({
      quantity: 30,
      MovieId: movie146.id,
    });

    await movie146.addGenres([7, 10]);

    const movie147 = await Movie.create({
      name: "Los intocables",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/323BP0itpxTsO0skTwdnVmf7YC9.jpg",
      description:
        "Una historia real de dos hombres que nunca deberían haberse conocido: un aristócrata tetrapléjico que resultó herido en un accidente de parapente y un joven de los proyectos.",
      price: 55.0,
      LanguageId: 2,
      FormatId: 1,
      date: "2012/02/08",
    });

    await Inventory.create({
      quantity: 15,
      MovieId: movie147.id,
    });

    await movie147.addGenres([4, 7]);

    const movie148 = await Movie.create({
      name: "Whiplash. Música y obsesión",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
      description:
        "Bajo la dirección de un instructor despiadado, un joven baterista talentoso comienza a buscar la perfección a toda costa, incluso su humanidad.",
      price: 25.0,
      LanguageId: 2,
      FormatId: 4,
      date: "2015/01/22",
    });

    await Inventory.create({
      quantity: 11,
      MovieId: movie148.id,
    });

    await movie148.addGenres([12]);

    const movie149 = await Movie.create({
      name: "Lucy",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dhjyfcwEoW6jJ4Q7DpZTp6E58GA.jpg",
      description:
        "Una mujer, atrapada accidentalmente en un trato oscuro, da la vuelta a sus captores y se transforma en una guerrera despiadada evolucionada más allá de la lógica humana.",
      price: 40.0,
      LanguageId: 2,
      FormatId: 2,
      date: "2014/07/25",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie149.id,
    });

    await movie149.addGenres([1, 15]);

    const movie150 = await Movie.create({
      name: "The Simpsons Movie",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/s3b8TZWwmkYc2KoJ5zk77qB6PzY.jpg",
      description:
        "Después de que Homero contamina accidentalmente el suministro de agua de la ciudad, la EPA encierra Springfield en una cúpula gigantesca y los Simpson son declarados fugitivos.",
      price: 90.0,
      LanguageId: 1,
      FormatId: 2,
      date: "2007/07/27",
    });

    await Inventory.create({
      quantity: 200,
      MovieId: movie150.id,
    });

    await movie150.addGenres([3, 4]);

    const movie151 = await Movie.create({
      name: "Elvis",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg",
      description:
        "La historia de vida de Elvis Presley vista a través de la complicada relación con su enigmático manager, el Coronel Tom Parker.",
      price: 100.0,
      LanguageId: 1,
      FormatId: 1,
      date: "2022/06/22",
    });

    await Inventory.create({
      quantity: 150,
      MovieId: movie151.id,
    });

    await movie151.addGenres([7, 10, 12]);

    const movie152 = await Movie.create({
      name: "Las reglas de Rodrick",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iW6ixzkrvdrcxk0umiLZMtlSl9L.jpg",
      description:
        "Un nuevo año escolar, su hermano Rodrick se burla de él una y otra y otra y otra vez. ¿Conseguirá Greg llevarse bien con él? ¿O un secreto arruinará todo?",
      price: 20.0,
      LanguageId: 1,
      FormatId: 2,
      date: "2022/12/02",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie152.id,
    });

    await movie152.addGenres([3, 4]);

    const movie153 = await Movie.create({
      name: "Tomb Raider",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
      description:
        "Lara Croft, la ferozmente independiente hija de un aventurero desaparecido, debe esforzarse más allá de sus límites cuando se encuentra en la isla donde desapareció su padre.",
      price: 20.0,
      LanguageId: 2,
      FormatId: 6,
      date: "2018/03/16",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie153.id,
    });

    await movie153.addGenres([1, 2]);

    const movie154 = await Movie.create({
      name: "Robots",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hlOTSiMEDMQwJ1U6ZTFvfLyTlhS.jpg",
      description:
        "Un mujeriego y un cazafortunas engañan a la gente para que se relacione con dobles robóticos ilegales. Cuando, sin darse cuenta, usan esta estafa entre ellos, sus dobles robots se enamoran y se fugan, lo que obliga al dúo a unirse para cazarlos antes de que las autoridades descubran su secreto.",
      price: 60.0,
      LanguageId: 2,
      FormatId: 2,
      date: "2023/05/19",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie154.id,
    });

    await movie154.addGenres([4, 9, 14, 15]);

    const movie155 = await Movie.create({
      name: "El hombre de Toronto",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uTCfTibqtk4f90cC59bLPMOmsfc.jpg",
      description:
        "En un caso de identidad equivocada, el asesino más mortífero del mundo, conocido como el Hombre de Toronto, y un metedura de pata de la ciudad de Nueva York se ven obligados a formar un equipo después de ser confundidos el uno con el otro en una cabaña de alquiler.",
      price: 87.0,
      LanguageId: 3,
      FormatId: 3,
      date: "2022/06/24",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie155.id,
    });

    await movie155.addGenres([1, 2, 4]);

    const movie156 = await Movie.create({
      name: "Eterno resplandor de una mente sin recuerdos",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
      description:
        "Joel Barish, desconsolado porque su novia se sometió a un procedimiento para borrarlo de su memoria, decide hacer lo mismo. Sin embargo, mientras observa cómo se desvanecen sus recuerdos de ella, se da cuenta de que todavía la ama y que puede ser demasiado tarde para corregir su error.",
      price: 76.0,
      LanguageId: 11,
      FormatId: 3,
      date: "2004/03/19",
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie156.id,
    });

    await movie156.addGenres([7, 15]);

    const movie157 = await Movie.create({
      name: "The Truman Show",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
      description:
        "Truman Burbank es la estrella de The Truman Show, un reality show de televisión de 24 horas al día que transmite todos los aspectos de su vida sin su conocimiento. Toda su vida ha sido una telenovela interminable para el consumo del resto del mundo. Y todos los que conoce, incluida su esposa y su mejor amigo, son realmente actores, pagados para ser parte de su vida.",
      price: 34.0,
      LanguageId: 2,
      FormatId: 2,
      date: "1998/06/05",
    });

    await Inventory.create({
      quantity: 15,
      MovieId: movie157.id,
    });

    await movie157.addGenres([4, 7]);

    const movie158 = await Movie.create({
      name: "El niño con el pijama de rayas",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2C8QCXdMlojTxZjfBlINr4FWcb6.jpg",
      description:
        "Cuando su familia se muda de su hogar en Berlín a una casa nueva y extraña en Polonia, el joven Bruno se hace amigo de Shmuel, un niño que vive al otro lado de la cerca donde todos parecen estar usando pijamas a rayas. Sin saber el destino de Shmuel como prisionero judío o el papel que juega su propio padre nazi en su encarcelamiento, Bruno se embarca en un peligroso viaje dentro de los muros del campo.",
      price: 76.0,
      LanguageId: 4,
      FormatId: 4,
      date: "2008/12/09",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie158.id,
    });

    await movie158.addGenres([7, 10, 18]);

    const movie159 = await Movie.create({
      name: "Salvaje es el viento",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rITxQBtnMpneZf8QzH1dqONQocx.jpg",
      description:
        "Cuando dos policías corruptos investigan el brutal asesinato de una niña, las tensiones llegan a un punto crítico en su pequeño pueblo segregado racialmente.",
      price: 36.0,
      LanguageId: 1,
      FormatId: 2,
      date: "2022/10/22",
    });

    await Inventory.create({
      quantity: 4,
      MovieId: movie159.id,
    });

    await movie159.addGenres([1]);

    const movie160 = await Movie.create({
      name: "Unidos por el honor",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gvP6R6juhe2IpCG7QGDgjyUvm0g.jpg",
      description:
        "Basada en las experiencias de la vida real del poeta Jimmy Santiago Baca, la película se centra en los medios hermanos Paco y Cruz, y su primo birracial Miklo. Se abre en 1972, ya que los tres son miembros de una pandilla del este de Los Ángeles conocida como los Vatos Locos, y la historia se centra en cómo un crimen violento y la influencia de los narcóticos alteran sus vidas.",
      price: 16.0,
      LanguageId: 1,
      FormatId: 3,
      date: "1993/06/03",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie160.id,
    });

    await movie160.addGenres([1, 20, 5]);

    const movie161 = await Movie.create({
      name: "La bella durmiente",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/e3K5cLvVRXVxhw4mXQET92p1dnz.jpg",
      description:
        "Una hermosa princesa nacida en un reino lejano está destinada por una terrible maldición a pincharse el dedo con el eje de una rueca y caer en un profundo sueño que solo puede despertar con el primer beso del amor verdadero. Decididos a protegerla, sus padres piden a tres hadas que la críen en la clandestinidad. Pero la malvada Maléfica está igualmente decidida a sellar el destino de la princesa.",
      price: 40.0,
      LanguageId: 2,
      FormatId: 3,
      date: "1960/05/07",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie161.id,
    });

    await movie161.addGenres([3]);

    const movie162 = await Movie.create({
      name: "Un golpe con estilo",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4nfWsdsJfO5srRZgxiWC9xHub0W.jpg",
      description:
        "Desesperados por pagar las facturas y ayudar a sus seres queridos, tres amigos de toda la vida lo arriesgan todo al embarcarse en un audaz intento de acabar con el mismo banco que se fugó con su dinero.",
      price: 30.0,
      LanguageId: 2,
      FormatId: 2,
      date: "2017/06/04",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie162.id,
    });

    await movie162.addGenres([4, 5]);

    const movie163 = await Movie.create({
      name: "Maléfica: Dueña del mal ",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg",
      description:
        "Maléfica y su ahijada Aurora comienzan a cuestionar los complejos lazos familiares que las unen a medida que se ven empujadas en diferentes direcciones por nupcias inminentes, aliados inesperados y nuevas fuerzas oscuras en juego.",
      price: 30.0,
      LanguageId: 2,
      FormatId: 6,
      date: "2019/10/18",
    });

    await Inventory.create({
      quantity: 3,
      MovieId: movie163.id,
    });

    await movie163.addGenres([2, 8, 9]);

    const movie164 = await Movie.create({
      name: "Marte",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
      description:
        "Durante una misión tripulada a Marte, se presume que el astronauta Mark Watney murió después de una feroz tormenta y su tripulación lo dejó atrás. Pero Watney ha sobrevivido y se encuentra varado y solo en el planeta hostil. Con solo suministros escasos, debe recurrir a su ingenio, ingenio y espíritu para subsistir y encontrar una manera de indicarle a la Tierra que está vivo.",
      price: 35.0,
      LanguageId: 2,
      FormatId: 2,
      date: "2015/01/10",
    });

    await Inventory.create({
      quantity: 1,
      MovieId: movie164.id,
    });

    await movie164.addGenres([2, 15]);

    const movie165 = await Movie.create({
      name: "Mis dos vidas",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jq8IGJgg16mJ95a5OPyS7eGJaam.jpg",
      description:
        "En la víspera de su graduación universitaria, la vida de Natalie diverge en dos realidades paralelas: una en la que queda embarazada y debe afrontar la maternidad como una joven adulta en su ciudad natal de Texas, la otra en la que se muda a Los Ángeles para seguir su carrera. En ambos viajes a lo largo de sus veinte años, Natalie experimenta un amor que le cambia la vida, una angustia devastadora y se redescubre a sí misma.",
      price: 15.0,
      LanguageId: 1,
      FormatId: 1,
      date: "2022/08/16",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie165.id,
    });

    await movie165.addGenres([4, 7, 14]);

    const movie166 = await Movie.create({
      name: "El mago de Oz",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bSA6DbAC5gdkaooU164lQUX6rVs.jpg",
      description:
        "La joven Dorothy se encuentra en un mundo mágico donde se hace amiga de un león, un espantapájaros y un hombre de hojalata mientras recorren el camino de baldosas amarillas para hablar con el Mago y pedirle las cosas que más extrañan en sus vidas. La Malvada Bruja del Oeste es lo único que podría detenerlos.",
      price: 55.0,
      LanguageId: 1,
      FormatId: 3,
      date: "1939/08/25",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie166.id,
    });

    await movie166.addGenres([2, 8, 9]);

    const movie167 = await Movie.create({
      name: "Spiderhead",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5hTK0J9SGPLSTFwcbU0ELlJsnAY.jpg",
      description:
        "Un preso en una penitenciaría de última generación comienza a cuestionar el propósito de las drogas para controlar las emociones que está probando para un genio farmacéutico.",
      price: 15.0,
      LanguageId: 2,
      FormatId: 2,
      date: "2022/06/15",
    });

    await Inventory.create({
      quantity: 13,
      MovieId: movie167.id,
    });

    await movie167.addGenres([15, 20]);

    const movie168 = await Movie.create({
      name: "Pokémon Detective Pikachu",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
      description:
        "En un mundo donde la gente colecciona monstruos de bolsillo (Pokémon) para luchar, un niño se encuentra con un monstruo inteligente que busca ser detective.",
      price: 15.0,
      LanguageId: 1,
      FormatId: 1,
      date: "2019/09/05",
    });

    await Inventory.create({
      quantity: 13,
      MovieId: movie168.id,
    });

    await movie168.addGenres([2, 8]);

    const movie169 = await Movie.create({
      name: "Midsommar",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/eycO6M2s38xO1888Gq2gSrXf0A6.jpg",
      description:
        "Varios amigos viajan a Suecia para estudiar como antropólogos un festival de verano que se celebra cada noventa años en el remoto pueblo natal de uno de ellos. Lo que comienza como unas vacaciones de ensueño en un lugar donde el sol nunca se pone, se convierte gradualmente en una oscura pesadilla cuando los misteriosos habitantes los invitan a participar en sus inquietantes actividades festivas.",
      price: 12.0,
      LanguageId: 7,
      FormatId: 5,
      date: "2019/09/19",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie169.id,
    });

    await movie169.addGenres([7, 11]);

    const movie170 = await Movie.create({
      name: "Rio 2",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/i5b1rX1gEFS2OEi2wApM1wLsAHX.jpg",
      description:
        "Es una jungla allá afuera para Blu, Jewel y sus tres hijos después de que son lanzados desde Río de Janeiro a las tierras salvajes del Amazonas. Mientras Blu intenta encajar, se enfrenta cara a cara con el vengativo Nigel y se encuentra con el adversario más temible de todos: su suegro.",
      price: 20.0,
      LanguageId: 1,
      FormatId: 1,
      date: "2014/10/04",
    });

    await Inventory.create({
      quantity: 7,
      MovieId: movie170.id,
    });

    await movie170.addGenres([2, 3, 4]);

    //res.status(200).json("ok");
  } catch (error) {
    //res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
module.exports = fillMovie;
