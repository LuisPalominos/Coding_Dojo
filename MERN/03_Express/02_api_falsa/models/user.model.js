const { faker } = require('@faker-js/faker');

class Usuario {
    constructor() {
        this.userId= faker.string.uuid();
        this.firstname= faker.person.firstName();
        this.lastname= faker.person.lastName();
        this.phonenumber= faker.phone.number();
        this.email= faker.internet.email();
        this.password= faker.internet.password()
    }
}

module.exports = Usuario;