// Exemplos de operadores lógicos em JavaScript

const a = (1 < 2) && (3 > 2); // true  -> true && true
const b = (1 > 2) || (3 > 2); // true  -> false || true
const c = !(1 < 2); // false -> negação de true
const d = (1 < 2) && !(3 > 2); // false -> true && false
const e = (1 > 2) || !(3 > 2); // false -> false || false

// Curto-circuito e valores não-booleanos
const f = null || 'valor padrão'; // 'valor padrão' (|| retorna o primeiro truthy)
const g = 'texto' && 42; // 42 (&& retorna o segundo se o primeiro for truthy)
const h = 0 || 'fallback'; // 'fallback' (0 é falsy)

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);
console.log('d:', d);
console.log('e:', e);
console.log('f:', f);
console.log('g:', g);
console.log('h:', h);

// Rode: node operador.logicos.js
