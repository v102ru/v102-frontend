import React from "react";
import { ILink, SocialLinks, TShareCard } from "./interface";

export const headerLinks: ILink[] = [
  {
    name: "Новости",
    href: "/news",
  },
  {
    name: "Аналитика",
    href: "/analysis",
  },
  {
    name: "Фото",
    href: "/photo",
  },
  {
    name: "Видео",
    href: "/video",
  },
  {
    name: "Спецпроекты",
    href: "/specialProjects",
  },
];

export const sectionLinks: ILink[] = [
  {
    name: "Политика",
    href: "/politics",
  },
  {
    name: "Расследования",
    href: "/investigations",
  },
  {
    name: "Происшествия",
    href: "/accidents",
  },
  {
    name: "Экономика",
    href: "/economics",
  },
  {
    name: "Общество",
    href: "/society",
  },
  {
    name: "Спорт",
    href: "/sport",
  },
  {
    name: "Телеком",
    href: "/telecom",
  },
  {
    name: "Борьба с коррупцией",
    href: "/againstCorruption",
  },
  {
    name: "Экология",
    href: "/ecology",
  },
  {
    name: "Здравоохранение",
    href: "/healthcare",
  },
];

export const shareLinks: TShareCard[] = [
  {
    type: SocialLinks.TELEGRAM,
    href: "https://telegram.me/share/url?url=",
  },
  {
    type: SocialLinks.VK,
    href: "https://vk.com/share.php?url=",
  },
  {
    type: SocialLinks.OK,
    href: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=",
  },
  {
    type: SocialLinks.COPY_LINK,
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      navigator.clipboard.writeText(window.location.href);
    },
  },
  {
    type: SocialLinks.PRINT,
    onClick: window.print,
  },
];
