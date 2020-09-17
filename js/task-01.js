// Write code under this line
const Account = function ({ login, email } = {}) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return `login ${this.login}, email ${this.email}`;
  `login : ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account({ login: "Mangozedog", email: "mango@dog.woof" });
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account({ login: "Poly", email: "poly@mail.com" });
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'
