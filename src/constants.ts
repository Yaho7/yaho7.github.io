import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconWeChat from "@/assets/icons/IconWeChat.svg";
import IconWeibo from "@/assets/icons/IconWeibo.svg";
import IconQQ from "@/assets/icons/IconQQ.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
  qrImage?: string;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/Yaho7",
    linkTitle: `${SITE.title} 的 GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:i@yaho7.cn",
    linkTitle: `发送邮件给 ${SITE.title}`,
    icon: IconMail,
  },
  {
    name: "微信",
    href: "https://weixin.qq.com/",
    linkTitle: `${SITE.title} 的 微信`,
    icon: IconWeChat,
    qrImage: "/wechat-qr.jpg",
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "微信",
    href: "https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=",
    linkTitle: `通过微信扫码分享`,
    icon: IconWeChat,
  },
  {
    name: "微博",
    href: "https://service.weibo.com/share/share.php?url=",
    linkTitle: `分享到微博`,
    icon: IconWeibo,
  },
  {
    name: "QQ",
    href: "https://connect.qq.com/widget/shareqq/index.html?url=",
    linkTitle: `分享到 QQ`,
    icon: IconQQ,
  },
  {
    name: "Mail",
    href: "mailto:?subject=%E5%88%86%E4%BA%AB%E5%A5%BD%E6%96%87&body=",
    linkTitle: `通过邮件分享`,
    icon: IconMail,
  },
] as const;
