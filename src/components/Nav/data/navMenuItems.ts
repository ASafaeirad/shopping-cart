interface navMenuItemsType {
  id: number;
  text: string;
  link: string;
}

export const navMenuItems: navMenuItemsType[] = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Products",
    link: "/Products",
  },
  {
    id: 3,
    text: "About",
    link: "/About",
  },
  {
    id: 4,
    text: "Contact",
    link: "/Contact",
  },
];
