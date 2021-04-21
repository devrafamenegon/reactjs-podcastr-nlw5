export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600); //pego o arredondamento para baixo do número inteiro mais próximo
  const minutes = Math.floor((duration % 3600) / 60); //pego o resto da divisão(qts minutos sobram) da duração por 3600 e divido por 60 para pegar o número de minutos
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
  .map(unit => String(unit).padStart(2, '0')) //se caso a unidade tiver somente um caracter, ele adiciona o 0 atrás
  .join(':') //unindo os valores com ':'

  return timeString;
}