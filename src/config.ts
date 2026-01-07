export const SITE = {
  website: "https://yaho7.cn", // deployed domain
  author: "Yaho",
  profile: "https://yaho7.cn/",
  desc: "这是yaho的个人网站",
  title: "yaho",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showTags: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
