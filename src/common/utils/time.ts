export default function tempoParaSegundos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const horasEmSegundos = Number(horas) * 3600;
  const minutoEmSegundos = Number(minutos) * 60;
  return horasEmSegundos + minutoEmSegundos + Number(segundos);
}
