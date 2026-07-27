// operador_logico_tabela_verdade.js
// Exemplo de tabela de verdade para operadores lógicos em JavaScript

const verdadeiro = true;
const falso = false;

console.log('Tabela de verdade do operador && (E):');
console.log(`${verdadeiro} && ${verdadeiro} =>`, verdadeiro && verdadeiro); // true
console.log(`${verdadeiro} && ${falso} =>`, verdadeiro && falso); // false
console.log(`${falso} && ${verdadeiro} =>`, falso && verdadeiro); // false
console.log(`${falso} && ${falso} =>`, falso && falso); // false

console.log('\nTabela de verdade do operador || (OU):');
console.log(`${verdadeiro} || ${verdadeiro} =>`, verdadeiro || verdadeiro); // true
console.log(`${verdadeiro} || ${falso} =>`, verdadeiro || falso); // true
console.log(`${falso} || ${verdadeiro} =>`, falso || verdadeiro); // true
console.log(`${falso} || ${falso} =>`, falso || falso); // false

console.log('\nTabela de verdade do operador ! (NÃO):');
console.log(`!${verdadeiro} =>`, !verdadeiro); // false
console.log(`!${falso} =>`, !falso); // true

console.log('\nValores falsy comuns em JavaScript:');
console.log('false =>', false);
console.log('0 =>', 0);
console.log(`'' =>`, '');
console.log('null =>', null);
console.log('undefined =>', undefined);
console.log('NaN =>', NaN);

console.log('\nVerificação de falsy com if:');
if (!false) console.log('false é falsy');
if (!0) console.log('0 é falsy');
if (!'') console.log("'' é falsy");
if (!null) console.log('null é falsy');
if (!undefined) console.log('undefined é falsy');
if (!NaN) console.log('NaN é falsy');
