export type Photo = {
  title: string;
  alt: string;
  src: string;
  location?: string;
  date?: string;
};

export const photos: Photo[] = [
  {
    title: "丽江",
    alt: "丽江",
    src: "https://s3.bmp.ovh/imgs/2025/04/20/cb15b94ac0ec5891.jpg",
  },
  {
    title: "107崇德寺合影",
    alt: "107崇德寺合影",
    src: "https://s3.bmp.ovh/imgs/2025/04/20/7f2dad3eed4242ff.jpg",
  },
  {
    title: "玉龙雪山",
    alt: "玉龙雪山",
    src: "https://s3.bmp.ovh/imgs/2025/04/20/065c7486f8e9f5fd.jpg",
  },
  {
    title: "三下乡",
    alt: "三下乡",
    src: "https://s3.bmp.ovh/imgs/2025/04/20/e319508da3fc952d.jpg",
  },
  {
    title: "露营",
    alt: "露营",
    src: "https://s3.bmp.ovh/imgs/2025/04/20/8d312aee2944bf6d.jpg",
  },
];

export default photos;
