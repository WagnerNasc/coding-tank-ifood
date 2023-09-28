
// 1. Desafio: Conversor de Horários

const convertHoursTo24h = (date) => {

  const dayPeriod = date.slice(-2);
  const newDate = date.slice(0, -2);
  const chunk = newDate.split(':');

  if (chunk.length !== 3) {
    return `Date format Invalid "${date}", add correct params.`;
  }

  let hours = parseInt(chunk[0]);

  if (dayPeriod.toUpperCase() === 'PM' && hours !== 12) {
    hours += 12;
  } else if (dayPeriod.toUpperCase() === 'AM' && hours === 12) {
    hours = 0;
  }

  chunk[0] = String(hours);
  const response = chunk.join(':');
  
  return response;

}

const response1 = convertHoursTo24h("06:15:25PM");
console.log(`1. Desafio: Conversor de Horários: ${response1}`);

// 2. Desafio: Quantidade de Palavras

const numberOfWords = function (string) {
  return string.split(/(?=[A-Z])/).length;
}

const response2 = numberOfWords('façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa');
console.log(`2. Desafio: Quantidade de Palavras: ${response2} palavras existentes`);

// 3. Desafio: Número Solitário

const findRequestedNumbers = (array) => {
  let numbersNotDuplicated = [];
  for (number of array) {
      if (array.indexOf(number) === array.lastIndexOf(number)) {
        numbersNotDuplicated.push(number);
      }
  }
  return numbersNotDuplicated;
};

const numbers = [12, 17, 15, 19, 22, 17, 19, 12];
const response3 = findRequestedNumbers(numbers)
console.log(`3. Desafio: Número Solitário: ${response3}`);

// 4. Qual é a saída do código a seguir?

console.log('4. Qual é a saída do código a seguir? R: e.')

// 5. Qual é o resultado da expressão booleana abaixo?

console.log('5. Qual é o resultado da expressão booleana abaixo? R: a.')

// 6. Qual o valor da saída do código abaixo?

console.log('6. Qual o valor da saída do código abaixo? R: b.')