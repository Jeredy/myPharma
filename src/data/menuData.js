import { BiHome, BiCategory } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { SiMaterialdesign } from "react-icons/si";

const color = "#18171c";

export const menuData = [
  { title: "Início", link: "/", icon: <BiHome fill={color} /> },
  { title: "Produto", link: "/product", icon: <BsBoxSeam fill={color} /> },
  { title: "Categoria", link: "/category", icon: <BiCategory fill={color} /> },
  { title: "Marca", link: "/brand", icon: <SiMaterialdesign fill={color} /> },
];
