import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

export const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "#0a66c2",
    link: "https://www.linkedin.com/in/jed-delich/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#111827",
    link: "https://github.com/jeddelich",
  },
  {
    name: "Resume",
    icon: FaRegFilePdf,
    color: "#e07a5f",
    iconClassName: "hero__social-icon--resume",
    link: "https://example.com/resume.pdf",
  },
];
