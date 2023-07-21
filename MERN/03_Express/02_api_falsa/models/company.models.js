const { faker } = require('@faker-js/faker');

class Empresa {
    constructor() {
        this.userId= faker.string.uuid();
        this.companyname= faker.company.name();
        this.direction={
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}

module.exports= Empresa;