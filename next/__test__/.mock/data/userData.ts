// utilsMokData
// ------------------------------------

const profileSmallData = {
  id: 1,
  userName: "qiish",
  email: "sample@qiish.com",
  engineerType: "WEB",
  description: "hello",
  image: "",
  follow: "",
  followCount: 1,
  follower: "",
  followerCount: 1,
  tags: [
    {
      id: 1,
      skill: "FR",
      image: null,
    },
  ],
  articles: 0,
  articleCount: 0,
  likes: 0,
  comments: "",
  followStatus: 0,
};

export const fetchUserQiish = {
  id: 1,
  userName: "qiish",
  email: "sample@qiish.com",
  engineerType: "WEB",
  description: "hello",
  image: "",
  follow: "",
  followCount: 1,
  follower: "",
  followerCount: 1,
  tags: [
    { id: 1, skill: "React", image: null },
    { id: 2, skill: "Next", image: null },
  ],
  articles: 0,
  articleCount: 0,
  likes: 0,
  comments: "",
  followStatus: 0,
};
export const fetchUserZenn = {
  id: 2,
  userName: "zenn",
  email: "sample@zenn.com",
  engineerType: "FR",
  description: "hey",
  image: "",
  follow: "",
  followCount: 1,
  follower: 0,
  followerCount: 1,
  tags: [
    { id: 1, skill: "React", image: null },
    { id: 3, skill: "TypeScript", image: null },
  ],
  articles: 0,
  articleCount: 0,
  likes: 0,
  comments: 0,
  followStatus: 0,
};

// ------------------------------------

// originMockData
export const profileLargeData = {
  userInfo: {
    userName: "qiish",
    engineerType: "WEB",
    description: "hello",
    userImage: "",
    articleCount: "",
    followCount: false,
  },
  tagsByNum: [
    {
      id: 1,
      skill: "FR",
      image: null,
    },
  ],
  checkLoginUserFlag: false,
  followerCount: 0,
  followStatus: false,
};

export const profileSmallDataMock = {
  user: profileSmallData,
  followStatus: false,
  checkLoginUserFlag: false,
};
export const ProfileRectangleMock = {
  user_data: fetchUserQiish,
  followStatus: false,
  checkLoginUserFlag: false,
};

// ------------------------------------
