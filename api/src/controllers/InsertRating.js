const { Rating, Movie } = require("../db");

const InsertRating = async (req, res) => {
  try {
    const { MovieId, comment, rating, UserId } = req.body;

    const movie = await Movie.findByPk(MovieId);

    const ratingCreated = await Rating.create({
      comment,
      rating,
      MovieId,
      UserId,
    });
    const ratings = await Rating.findAll({
      where: {
        MovieId,
      },
    });
    let ratings_sum = 0.0;

    ratings.forEach((x) => {
      console.log(x.rating);
      ratings_sum += Number(x.rating);
    });
    movie.vote_count += 1;
    movie.vote_average = Number(ratings_sum) / Number(movie.vote_count);
    movie.vote_average = movie.vote_average.toFixed(2);
    await movie.save();

    const response = await Rating.findByPk(ratingCreated.id, {
      include: [
        {
          model: Movie,
          attributes: ["vote_count", "vote_average"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = InsertRating;
