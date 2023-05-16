const fillRating = async (Rating) => {
  try {
    await Rating.bulkCreate([
      {
        comment:
          "exelente pelicula, prer el final no me gusto, hubiera preferiado al mas dramatico",
        rating: 4,
        MovieId: 1,
        UserId: 1,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 2,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 3,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 4,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 5,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 6,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 7,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 8,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 9,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 10,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 2,
        UserId: 11,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 2,
        UserId: 12,
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillRating;
