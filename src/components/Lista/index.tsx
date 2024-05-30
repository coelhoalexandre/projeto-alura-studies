import { ITarefa } from "../../types/ITarefa.js";
import Item from "./Item";
import style from "./Lista.module.scss";

interface ListaProps {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}
export default function Lista({ tarefas, selecionaTarefa }: ListaProps) {
  return (
    <aside className={style.listaTarefa}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}
