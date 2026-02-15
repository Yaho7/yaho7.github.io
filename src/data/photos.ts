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
  photos: Photo[];
};

export const collections: PhotoCollection[] = [
  {
    title: "毕业旅行:云南",
    description: "2023年4月",
    photos: [
      {
        title: "丽江",
        alt: "丽江",
        src: "https://s3.bmp.ovh/imgs/2025/04/20/cb15b94ac0ec5891.jpg",
      },
      {
        title: "玉龙雪山",
        alt: "玉龙雪山",
        src: "https://s3.bmp.ovh/imgs/2025/04/20/065c7486f8e9f5fd.jpg",
      },
      {
        title: "107崇德寺合影",
        alt: "107崇德寺合影",
        src: "https://s3.bmp.ovh/imgs/2025/04/20/7f2dad3eed4242ff.jpg",
      },
      {
        title: "湖边",
        alt: "湖边",
        src: "https://image-storage.3283def3aabe4851ded4880960152c1c.r2.cloudflarestorage.com/2026/02/8c319e7bd198ffdfbf600cbae60b1c67.jpeg",
      },
    ],
  },
  {
    title: "支教",
    description: "2021年7月",
    photos: [
      {
        title: "三下乡",
        alt: "三下乡",
        src: "https://s3.bmp.ovh/imgs/2025/04/20/e319508da3fc952d.jpg",
      },
      {
        title: "笑",
        alt: "笑",
        src: "https://image-storage.3283def3aabe4851ded4880960152c1c.r2.cloudflarestorage.com/2026/02/78fb1e88f16f8247af0ac42958f1878a.jpeg",
      },
      {
        title: "无奈中",
        alt: "无奈中",
        src: "https://image-storage.3283def3aabe4851ded4880960152c1c.r2.cloudflarestorage.com/2026/02/205bbb4c8c09f4fa030880021860560c.jpeg",
      },
      {
        title: "玩相机",
        alt: "玩相机",
        src: "https://image-storage.3283def3aabe4851ded4880960152c1c.r2.cloudflarestorage.com/2026/02/58b7b6892ae2e75523f56d35c8257c85.jpeg",
      },
      {
        title: "玩无人机",
        alt: "玩无人机",
        src: "https://image-storage.3283def3aabe4851ded4880960152c1c.r2.cloudflarestorage.com/2026/02/2d8588aeeab9be310a4cc1b86bb16d7a.jpeg",
      },
      {
        title: "授课",
        alt: "授课",
        src: "https://image-storage.3283def3aabe4851ded4880960152c1c.r2.cloudflarestorage.com/2026/02/d25ef17d321929099696bfe2771d4d4b.jpeg",
      },
    ],
  },
  {
    title: "生活",
    description: "日常点滴",
    photos: [
      {
        title: "107崇德寺合影",
        alt: "107崇德寺合影",
        src: "https://s3.bmp.ovh/imgs/2025/04/20/7f2dad3eed4242ff.jpg",
      },
      {
        title: "露营",
        alt: "露营",
        src: "https://s3.bmp.ovh/imgs/2025/04/20/8d312aee2944bf6d.jpg",
      },
    ],
  },
];

export const photos: Photo[] = collections.flatMap((c) => c.photos);

export default collections;
