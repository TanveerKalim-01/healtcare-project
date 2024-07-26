import logoImg from "./headerImg/logo.png";

function Logo() {
  return (
    <img src={logoImg} alt="logoimage" className="w-48 h-10 cursor-pointer" />
  );
}

export default Logo;
