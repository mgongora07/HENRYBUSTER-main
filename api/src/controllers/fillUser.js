const fillUser = async (User) => {
  try {
    await User.bulkCreate([
      { name: "kevin2003123", password: "12345", isAdmin: true },
      { name: "franklyn", password: "12345", isAdmin: false },
      { name: "John", password: "12345", isAdmin: false },
      { name: "Michael", password: "12345", isAdmin: false },
      { name: "Emily", password: "12345", isAdmin: false },
      { name: "Sophia", password: "12345", isAdmin: false },
      { name: "Daniel", password: "12345", isAdmin: false },
      { name: "Olivia", password: "12345", isAdmin: false },
      { name: "Matthew", password: "12345", isAdmin: false },
      { name: "Emma", password: "12345", isAdmin: false },
      { name: "Andrew", password: "12345", isAdmin: false },
      { name: "Jessica", password: "12345", isAdmin: false },
      { name: "David", password: "12345", isAdmin: false },
      { name: "Sarah", password: "12345", isAdmin: false },
      { name: "Benjamin", password: "12345", isAdmin: false },
      { name: "Lily", password: "12345", isAdmin: false },
      { name: "William", password: "12345", isAdmin: false },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillUser;
