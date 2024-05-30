import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { ITarefa } from "../../types/ITarefa.js";
import { v4 as uuidv4 } from "uuid";

interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}
export default function Formulario({ setTarefas }: FormularioProps) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
