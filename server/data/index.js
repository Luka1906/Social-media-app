const mongoose = require("mongoose");

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

exports.users = [
  {
    _id: userIds[0],
    firstName: "Parvati",
    lastName: "Shallow",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [],
    location: "Vero Beach, FL",
    occupation: "Reality Star",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Marco",
    lastName: "Mengoni",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Rome, Italy",
    occupation: "Singer",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Tina",
    lastName: "Wesson",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Knoxville, TN",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Vecepia ",
    lastName: "Towery",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Portland, OR",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Lou",
    lastName: "Reed",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p10.jpeg",
    friends: [],
    location: "New York, NY",
    occupation: "Songwriter",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Joe",
    lastName: "Black",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Courtney",
    lastName: "Yates",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p12.jpeg",
    friends: [],
    location: "Boston, MA",
    occupation: "Server",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Wild",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "Puerto Rico",
    occupation: "A Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

exports.posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Parvati",
    lastName: "Shallow",
    location: "Vero Beach, FL",
    description: "This waffle looks so yummy. Cant wait to put my hands on it!",
    picturePath: "post1.jpeg",
    userPicturePath: "p1.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "It looks amazing. Enjoy!",
      "I am hungry now",
      "I need to try this ASAP",
      "Girl, don't make us jelaous",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Vecepia",
    lastName: "Towery",
    location: "Portlant, OR",
    description: "My view today. In love with this restaurant.",
    picturePath: "post2.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Where is this? Big hug!",
      "Is it high-end restaruant, it looks really good",
      "Give me some wine!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Lou",
    lastName: "Reed",
    location: "New York, NY",
    description: "My new song is coming out soon. Stay tuned.",
    picturePath: "post3.jpeg",
    userPicturePath: "p10.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Joe",
    lastName: "Black",
    location: "Los Angeles, CA",
    description:
      "Happy 4th of July guys. Hope you have great time with you friends and family",
    picturePath: "post4.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Come over, I have some food and drinks!",
      "Wohoo?",
      "Cause baby you are firework!",
      "I'm coming",
      "Happy 4th of July to you and your family",
      "Happy, Happy, Happy!!!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Courtney",
    lastName: "Yates",
    location: "Boston, MA",
    description: "My best friend just got married. I am crying",
    picturePath: "post8.jpeg",
    userPicturePath: "p12.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Handsome couple",
      "I feel you. I also cried on my childhood friends wedding",
      "Love you!",
      "Have a great time mate!",
      "See you tomorrow?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Wild",
    location: "Puerto Rico",
    description:
      "Coachella 2023. Have a time of my life",
    picturePath: "post6.jpeg",
    userPicturePath: "p11.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Wow. See you tomorrow?",
      "Is it lineup good?",
      "Can't wait to see you there",
      "Stop it.",
      "I love this pic, love you and love Coachella",
    ],
  },
];
