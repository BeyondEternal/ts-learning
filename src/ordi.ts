function dado(value: number):number[] {
  //Recibe el tamaño de la función en la variable Value
  let diceValue: number[] = []; // Se inicializa un arreglo que contenga el valor de los dados, de momento vacío
  for (let index: number = 0; index < value; index++) {
    // Se inicia un ciclo for que empieza en 0 y que termina en el valor de value -1
    diceValue.push(Math.floor(Math.random() * 6 + 1)); // Se hace un push del nuevo valor al arreglo entre valores del 1 al 6
  }
  diceValue.sort((a: number, b: number) => {
    // Se ordenan los valores del arreglo con un sort que recibe a y b donde ambos son números
    return a - b; //Hace un callback donde retorna el menor número (Si quisieras que fuera el mayor se utiliza b-a)
  });
  return diceValue; // Se retorna el arreglo
}

function moneda(value: number):number[] {
  //Recibe el tamaño de la función en la variable Value
  let coinValue: number[] = []; // Se inicializa un arreglo que contenga el valor de la moneda, de momento vacío
  for (let index: number = 0; index < value; index++) {
    // Se inicia un ciclo for que empieza en 0 y que termina en el valor de value -1
    coinValue.push(Math.floor(Math.random() * 2 + 1)); // Se hace un push del nuevo valor al arreglo entre 1 y 2
  }
  coinValue.sort((a: number, b: number) => {
    // Se ordenan los valores del arreglo con un sort que recibe a y b donde ambos son números
    return a - b; //Hace un callback donde retorna el menor número (Si quisieras que fuera el mayor se utiliza b-a)
  });
  return coinValue; // Se retorna el arreglo
}

console.log(dado(500));
console.log(moneda(500));
