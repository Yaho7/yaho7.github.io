export type Photo = {
  title: string;
  alt: string;
  src: string;
  location?: string;
  date?: string;
};

export type PhotoCollection = {
  title: string;
  description?: string;
  date?: string;
  photos: Photo[];
};

export const collections: PhotoCollection[] = [
  {
    title: "毕业旅行:云南",
    description: "",
    date: "2023年4月",
    photos: [
      {
        title: "丽江湖边",
        alt: "丽江湖边",
        src: "https://img.yaho7.cn/2026/02/d03a6920deb4b7745ad99ab3f8b7581d.jpeg",
      },
      {
        title: "玉龙雪山",
        alt: "玉龙雪山",
        src: "https://img.yaho7.cn/2026/02/941c1b5a001cb79b471650e6eab72ffe.jpeg",
      },
      {
        title: "崇德寺",
        alt: "崇德寺",
        src: "https://img.yaho7.cn/2026/02/51fe05d2f0b1ffe504a4b7eaa922081e.jpeg",
      },
      {
        title: "湖边",
        alt: "湖边",
        src: "https://img.yaho7.cn/2026/02/8c319e7bd198ffdfbf600cbae60b1c67.jpeg",
      },
    ],
  },
  {
    title: "支教",
    description: "那年夏天的记忆",
    date: "2021年7月",
    photos: [
      {
        title: "笑",
        alt: "笑",
        src: "https://img.yaho7.cn/2026/02/c810685a0a2e150ae81b8bdb15e3e3fc.jpg",
      },
      {
        title: "合照",
        alt: "合照",
        src: "https://img.yaho7.cn/2026/02/e965e034a10b64413feccd64e3a511d2.jpeg",
      },
      {
        title: "笑",
        alt: "笑",
        src: "https://img.yaho7.cn/2026/02/78fb1e88f16f8247af0ac42958f1878a.jpeg",
      },
      {
        title: "无奈中",
        alt: "无奈中",
        src: "https://img.yaho7.cn/2026/02/205bbb4c8c09f4fa030880021860560c.jpeg",
      },
      {
        title: "玩相机",
        alt: "玩相机",
        src: "https://img.yaho7.cn/2026/02/58b7b6892ae2e75523f56d35c8257c85.jpeg",
      },
      {
        title: "玩无人机",
        alt: "玩无人机",
        src: "https://img.yaho7.cn/2026/02/2d8588aeeab9be310a4cc1b86bb16d7a.jpeg",
      },
      {
        title: "授课",
        alt: "授课",
        src: "https://img.yaho7.cn/2026/02/d25ef17d321929099696bfe2771d4d4b.jpeg",
      },
    ],
  },
  {
    title: "日常",
    description: "",
    date: "Before 2026",
    photos: [
      {
        title: "日出",
        alt: "日出",
        src: "https://img.yaho7.cn/2026/02/77a44819e97317526c95391fb7bcd83c.jpg",
      },
    ],
  },
];

export const photos: Photo[] = collections.flatMap((c) => c.photos);

export default collections;
