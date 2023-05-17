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
      name: "Liga de la Justicia x RWBY: Superhéroes y Cazadores: Parte 1",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/7twNCiHS1rR7P2fyGOH1sUmLDyY.jpg",
      description:
        "Superman, Batman, Mujer Maravilla, Flash, Cyborg, Linterna Verde y Vixen son transportados al extraño mundo de Remnant y se encuentran convertidos en adolescentes. Mientras tanto, los héroes de Remnant, Ruby, Weiss, Blake y Yang, deben combinar fuerzas con la Liga de la Justicia para descubrir por qué su planeta ha sido alterado misteriosamente antes de que un Grimm con superpoderes destruya todo.",
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
      name: "Ant-Man y la Avispa: Quantumanía",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/jTNYlTEijZ6c8Mn4gvINOeB2HWM.jpg",
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
      name: "Dungeons & Dragons: Honor entre ladrones",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/77XBzUUFX5aHI3Jz3ipJTtsDWzk.jpghttps://www.themoviedb.org/t/p/w94_and_h141_bestv2/77XBzUUFX5aHI3Jz3ipJTtsDWzk.jpg",
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
      name: "Súper Mario Bros. La película",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
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
      name: "DC Liga de supermascotas",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/lDtANZzTD80bVi1DTRKRVDrurhJ.jpg",
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
      name: "La forja de un campeón",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yjFCfffM2TTwWpxQYFZuqlnueeu.jpg",
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
      name: "La forja de un campeón",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/4Zna9CvyzaAgejsErmyXmHC64Dd.jpg",
      description:
        "Durante unas vacaciones en una cabaña en un bosque alejada de todo, una niña y sus padres se convierten en rehenes de cuatro desconocidos armados que obligan a la familia a tomar una decisión imposible para evitar el apocalipsis. Con acceso limitado al mundo exterior, la familia deberá decidir qué creer antes de que todo esté perdido.",
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
      name: "Miraculous World: Shanghái, la leyenda de Ladygragon",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/r6zthVPVoq1urTOsLgofPGel89d.jpg",
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
      name: "La sirenita",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/goX6Pcb7fugl9ADfg3Ns1OnuIYY.jpg",
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
      name: "Shang-Chi y la leyenda de los Diez Anillos",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/baOzlpQllZbjyNBcTdeXESh9Y0M.jpg",
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
      name: "Lilo, mi amigo el cocodrilo",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/piJK8RL8YBP4QZ2ZY1hLGS5uMa4.jpg",
      description:
        "Cuando la familia Primm se muda a Nueva York, su hijo adolescente Josh lucha por adaptarse a su nueva escuela y nuevos amigos. Todo eso cambia cuando descubre a Lilo – un cocodrilo cantante a quien le gusta darse baños, el caviar y la buena música – viviendo en el ático de su nueva casa. Los dos se convierten en mejores amigos, pero cuando la existencia de Lilo se ve amenazada por su malvado vecino Mr. Grumps, los Primm deberán aliarse con el carismático dueño de Lilo, Hector P. Valenti, para mostrar al mundo que la familia puede surgir de los lugares más inesperados y que no hay nada malo con un gran cocodrilo cantante con una personalidad aún mayor.",
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
      name: "Miraculous World: Las aventuras de Ladybug en Nueva York",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/jNi01UnBT346wD8rquaxsNqVFCk.jpg",
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
      name: "Guardianes de la noche: Rumbo a la aldea de los herreros ",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/rzAShiFrU6tSSr9gLD5AxKKwtOo.jpg",
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
      name: "Naruto Shippuden, La Película: The Last ",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
      description:
        "Han pasado dos años desde que acabó la Cuarta Guerra Shinobi y con ello la última pelea entre Naruto y Sasuke. Konoha se encuentra en paz, pero un nuevo enemigo amenaza esta paz. La luna que fue creada por el sabio de los seis caminos cuando sello al Jūbi, se perturba y empieza a dirigirse a la tierra en forma de un meteorito gigante, se descubre que el causante de esta inminente tragedia es alguien llamado Toneri Ōtsutsuki quien es el último descendiente del Clan Ōtsutsuki, cuyos miembros habitaron en la luna los último mil años. En medio del inminente desastre Toneri Ōtsutsuki intenta secuestrar a Hinata, pero Hannabi, la hermana menor, es quien termina siendo raptada, es entonces donde Naruto y los demás deberán rescatarla y vencer a Toneri Ōtsutsuki antes de que sea demasiado tarde y así descubrir las verdaderas intenciones de Ōtsutsuki.",
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
      name: "Naruto Shippuden, La Película: The Last ",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
      description:
        "Han pasado dos años desde que acabó la Cuarta Guerra Shinobi y con ello la última pelea entre Naruto y Sasuke. Konoha se encuentra en paz, pero un nuevo enemigo amenaza esta paz. La luna que fue creada por el sabio de los seis caminos cuando sello al Jūbi, se perturba y empieza a dirigirse a la tierra en forma de un meteorito gigante, se descubre que el causante de esta inminente tragedia es alguien llamado Toneri Ōtsutsuki quien es el último descendiente del Clan Ōtsutsuki, cuyos miembros habitaron en la luna los último mil años. En medio del inminente desastre Toneri Ōtsutsuki intenta secuestrar a Hinata, pero Hannabi, la hermana menor, es quien termina siendo raptada, es entonces donde Naruto y los demás deberán rescatarla y vencer a Toneri Ōtsutsuki antes de que sea demasiado tarde y así descubrir las verdaderas intenciones de Ōtsutsuki.",
      price: 30.05,
      LanguageId: 8,
      FormatId: 4,
      date: "2014/12/06",
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie52.id,
    });
    await movie52.addGenres([1, 3, 14]);

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
    await movie53.addGenres([3, 9]);

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
    await movie54.addGenres([3, 9]);

    const movie55 = await Movie.create({
      name: "La Liga de la Justicia de Zack Snyder",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/wcIJgChypo0s6ILm9Dkr13rV5q0.jpg",
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
      name: "El rey león",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
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
      name: "Space Jam: Nuevas Leyendas",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/i6E8fx8lAEI0PGGCUlaA2Ap1gWi.jpg",
      description:
        "Secuela de la cinta original de 1996, Space Jam, protagonizada por Michael Jordan. En esta segunda parte, la super estrella de la NBA es LeBron James, quien queda atrapado junto a su hijo Dom en un extraño lugar, un espacio digital de una fuerza todopoderosa y malvada conocida como A.I. Para volver a casa y poner a salvo a su hijo, el jugador de baloncesto deberá unir fuerzas con Bugs Bunny, Lola Bunny y el resto de personajes de los Looney Tunes para enfrentarse en un partido de baloncesto a los campeones digitalizados por inteligencia artificial.",
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
      name: "Criminales a la vista",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/3jce1QvM2sma0TKYckNmIKzjhHC.jpg",
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
      name: "Legado de sangre",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zTQ2o0gzVZOblt6KlV3bSKg0y8z.jpg",
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
      name: "Un héroe samurai: La leyenda de Hank",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/dcccakIsT9rBE3EH1f38JMqtgYw.jpg",
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
      name: "Astérix y Obélix: El reino medio",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/bEcAUzv57bdHLoGyjJQkyd8ENUY.jpg",
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
      name: "Jesus Obra Teatro",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/aFC4cY9lBsZXTjrqvKrwqusXaa7.jpg",
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
      name: "Expediente Warren: Obligado por el demonio",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/ghMQALCyytc6W0wlOlMIKiMSRKV.jpg",
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
      name: "Obi-Wan Kenobi: El retorno del Jedi",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/cv0iBeaxeIVJBenGVNCB7kNKTJ6.jpg",
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
      name: "Oblivion",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/eO3r38fwnhb58M1YgcjQBd3VNcp.jpg",
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
      name: "Astérix y Obélix: Misión Cleopatra",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/3I6ocizuNTB2DmNTffLxnCe4bnc.jpg",
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
      name: "Obra maestra",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/gFuti8UisEutgcKw6xv5G44gyF3.jpg",
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
      name: "Astérix y Obélix contra César",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/16tATLAUhXi0mq7IaqEp2xur5zJ.jpg",
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
      name: "Ese oscuro objeto del deseo",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/SjPvUTtdsK4TqALKryKkWZpE5x.jpg",
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
      name: "Obsesión secreta",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/SjPvUTtdsK4TqALKryKkWZpE5x.jpg",
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
      name: "La Obsesión de Kyla",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zrdhT7Mkk23M59cdV0aaiHLYQWs.jpg",
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
      name: "Whiplash. Música y obsesión",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/sL32IZkyjlF7otj5vcUxiKSKzg5.jpg",
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
      name: "Objetivo: Washington D.C.",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zC8HSq4xWsPgPDjgmlFix4VMtaD.jpg",
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
      name: "Objetos",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/ejijnP0sOr4Fgxo5CYWT6rz3ZdG.jpg",
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
      name: "Obsesionada",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/MEYFT2fW8ztkHiuBBOgz21SgJo.jpg",
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
      name: "Objetivo: La Casa Blanca",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/3AWmaBCfX6x3KTa4w5rGLMevNdU.jpg",
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
      name: "Objetivo: La Casa Blanca",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/vGbzyJFyZtOeyUZMKJuUF85phMM.jpg",
      description:
        "50 años antes de Cristo, César continúa el avance de su conquista por todo el mundo. Liderando sus gloriosas y potentes legiones del ejército romano, decide invadir una isla situada a las afueras de la tierra, un misterioso país llamado Britannia. En esta historia Astérix y Obélix atravesarán el Canal de la Mancha, que une Francia con las islas británicas, con el fin de echar una mano a su pueblo amigo y salvar a sus ciudadanos del acoso de las milicias romanas.",
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
      name: "Obsessed",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/fetCtoAvZShCk1nqAWZFuKZschR.jpg",
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
      name: "Objetivo: Londres",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/AgivYpNxC0SqN2u8JY5udZeX3eE.jpg",
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
      name: "Obsesiones tormentosas",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yPSBDsLZhA3BkKSE4LrPxoIv5mE.jpg",
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
      name: "London: Oscura obsesión",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/lqRKxobqX3gu5bdvDQGjGrbSGII.jpg",
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
      name: "Fascinación (Obsession)",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/9160yxML0m3XiBdwdfrJwBlS356.jpg",
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
      name: "Obsesión",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yxTNjzSf6G98I7cuYbm45Wgk2ZQ.jpg",
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
      name: "Santos y soldados: Objetivo Berlín",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/ym8FvKNMpVdOVRteDTjj9zkPSJV.jpg",
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
      name: "Objetivo: Birmania",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/4ueSUCS9O4sJltHA1NlKgJw2xM2.jpg",
      description:
        "Durante la II Guerra Mundial, el Mayor Nelson y sus hombres son lanzados en paracaídas sobre la jungla birmana, tras las líneas enemigas, para destruir una estación de radar japonesa. La angustiosa y extenuante expedición a través de la jungla y los pantanos repletos de soldados enemigos se convertirá en un juego mortal en el que tan importante será cumplir con éxito la misión como poder ser rescatados...",
      price: 58.35,
      LanguageId: 2,
      FormatId: 8,
      date: "1945/02/17",
    });

    await Inventory.create({
      quantity: 2,
      MovieId: movie85.id,
    });

    await movie85.addGenres([7, 1]);

    const movie86 = await Movie.create({
      name: "Con luz propia: Michelle Obama y Oprah Winfrey",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/akmzMZWQasddjK9u8tVQvjEJnUP.jpg",
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
      name: "Pasión obsesiva",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/46PXzJ5iG1rtO9VbEGdWBVJSuPb.jpg",
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
      name: "Las sobrinas de la señora Oberst",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/fiPEJw2HPVB0xjMeyhmLt6UvIpD.jpg",
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
      name: "Misteriosa obsesión",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/q4sLhtgw6a9SX9mtC1dgc1XWxoI.jpg",
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
      name: "Love, Honor and Obey",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/hPaYP0Iuznbo3zLIFJOTQDJxF9F.jpg",
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
      name: "Oba: The Last Samurai",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/pPGTbVADWCAsgUcr4wtjJUpTh8Z.jpg",
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
      name: "Oba: The Last Samurai",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zwzizbx09vLedeD2gcAaFbo9fes.jpg",
      description:
        "De los cepilllos de dientes a los gadgets más sofisticados, el diseño industrial está onmipresente en la vida cotidiana. Allí apunta Objectified, un documental que examina los objetos y el proceso creativo de quienes los hacen. (FILMAFFINITY)",
      price: 66.35,
      LanguageId: 9,
      FormatId: 1,
      date: "2009/03/14",
    });

    await Inventory.create({
      quantity: 8,
      MovieId: movie92.id,
    });

    await movie92.addGenres([6]);

    const movie93 = await Movie.create({
      name: "Amor en obras",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/jNKGZ6RB6SlA4Vd00gZM9dfvSC2.jpg",
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
      name: "La seguridad de los objetos",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/i7w5Q2HP3dI6UbN59l3ZL55weir.jpg",
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
      name: "Deadly Virtues: Love. Honour. Obey",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/5uCkeMxYv7WNqko2oMWt7IuvV5G.jpg",
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
      name: "Una obra maestra",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/iBIPBje0athakCpK9KSiMBhYF9O.jpg",
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
      name: "El ataúd (La caja oblonga)",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/oPGrl74A8RoY8EuGaQcBPvmE1Tr.jpg",
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
      name: "Objetivo: Terrum",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/vKvpE2UWYdaB7X4ABKGjKNdZWXy.jpg",
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
      name: "Objetivo terrorista",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/zxDf5KZ9VTDpf4X5YP28ZadiVhc.jpg",
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
      name: "Objetivo: Hasselhoff",
      image:
        "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/7uo6PZl1UBtIRuPA2w6CnYp2kbS.jpg",
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

    //res.status(200).json("ok");
  } catch (error) {
    //res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
module.exports = fillMovie;
