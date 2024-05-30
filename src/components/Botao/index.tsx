import React from "react";
import style from "./Botao.module.scss";

interface IBotaoProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
export default function Botao({
  children,
  type = "button",
  onClick,
}: IBotaoProps) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
}
