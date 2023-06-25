const fillRating = async (Rating) => {
  try {
    await Rating.bulkCreate([
      {
        comment:
          "This movie had me on the edge of my seat the entire time!",
        rating: 4,
        MovieId: 1,
        UserId: 1,
      },
      {
        comment:
          "A chilling and suspenseful horror flick that will leave you breathless.",
        rating: 3,
        MovieId: 1,
        UserId: 2,
      },
      {
        comment:
          "Terrifyingly intense and filled with heart-pounding moments",
        rating: 4,
        MovieId: 1,
        UserId: 3,
      },
      {
        comment:
          "An unsettling journey into the depths of fear and darkness",
        rating: 4,
        MovieId: 1,
        UserId: 4,
      },
      {
        comment:
          "Prepare to be haunted by this spine-tingling tale of terror.",
        rating: 4,
        MovieId: 1,
        UserId: 5,
      },
      {
        comment:
          "A nightmare-inducing masterpiece that will linger in your thoughts long after it's over",
        rating: 5,
        MovieId: 1,
        UserId: 6,
      },
      {
        comment:
          "This film takes horror to a whole new level of psychological terror.",
        rating: 1,
        MovieId: 1,
        UserId: 7,
      },
      {
        comment:
          "An adrenaline-fueled rollercoaster ride through a terrifying nightmare.",
        rating: 2,
        MovieId: 1,
        UserId: 8,
      },
      {
        comment:
          "A bone-chilling experience that will have you checking over your shoulder",
        rating: 4,
        MovieId: 1,
        UserId: 9,
      },
      {
        comment:
          "Horror at its finest - a must-watch for all fans of the genre.",
        rating: 4,
        MovieId: 1,
        UserId: 10,
      },
      {
        comment:
          "A gripping and disturbing film that will make your skin crawl",
        rating: 3,
        MovieId: 2,
        UserId: 11,
      },
      {
        comment:
          "Unleashes a sense of dread and unease that keeps you captivated till the end.",
        rating: 3,
        MovieId: 2,
        UserId: 12,
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillRating;
