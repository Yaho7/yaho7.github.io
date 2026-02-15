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
        title: "三下乡",
        alt: "三下乡",
        src: "https://img.yaho7.cn/IMG_1594.webp",
      },
      {
        title: "三下乡",
        alt: "三下乡",
        src: "https://img.yaho7.cn/DSC05606.webp",
      },
      {
        title: "三下乡",
        alt: "三下乡",
        src: "https://img.yaho7.cn/DSC06007%283%29.webp",
      },
      {
        title: "三下乡",
        alt: "三下乡",
        src: "https://img.yaho7.cn/IMG_0267.webp",
      },
      {
        title: "三下乡",
        alt: "三下乡",
        src: "https://img.yaho7.cn/354748007qf1a0839914b15be76a8dbb.webp",
      },
      {
        title: "三下乡",
        alt: "三下乡",
        src: "https://img.yaho7.cn/IMG_0283.webp",
      },
      {
        title: "三下乡",
        alt: "三下乡",
        src: "https://img.yaho7.cn/IMG_0231.webp",
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
