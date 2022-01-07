interface FooterMenuItem {
  text: string;
  link: string;
  id: number;
}

export const footerMenuData: FooterMenuItem[] = [
  {
    text: "About Us",
    link: "/about",
    id: 1,
  },
  {
    text: "Information",
    link: "/information",
    id: 2,
  },
  {
    text: "Privacy Policy",
    link: "/policy",
    id: 3,
  },
  {
    text: "Terms & Conditions",
    link: "/terms",
    id: 4,
  },
];
