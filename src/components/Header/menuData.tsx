import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Industry Solutions",
        path: "/solutions/industry",
        newTab: false,
      },
      {
        id: 32,
        title: "AI Technology",
        path: "/solutions/ai-technology",
        newTab: false,
      },
      {
        id: 33,
        title: "Automation",
        path: "/solutions/automation",
        newTab: false,
      },
      {
        id: 34,
        title: "Data Analytics",
        path: "/solutions/data-analytics",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Consulting",
        path: "/services/consulting",
        newTab: false,
      },
      {
        id: 42,
        title: "Implementation",
        path: "/services/implementation",
        newTab: false,
      },
      {
        id: 43,
        title: "Support & Maintenance",
        path: "/services/support",
        newTab: false,
      },
      {
        id: 44,
        title: "Custom Development",
        path: "/services/custom-development",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 52,
        title: "Case Studies",
        path: "/resources/case-studies",
        newTab: false,
      },
      {
        id: 53,
        title: "White Papers",
        path: "/resources/white-papers",
        newTab: false,
      },
      {
        id: 54,
        title: "Webinars",
        path: "/resources/webinars",
        newTab: false,
      },
      {
        id: 55,
        title: "FAQ",
        path: "/faq",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
