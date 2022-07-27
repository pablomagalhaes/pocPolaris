import {faker} from '@faker-js/faker'


const generateUser = ()=>{
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const newUser = {
    id: faker.datatype.uuid(),
    firstName,
    lastName,
    email: faker.internet.email(firstName,lastName),
    country: faker.address.countryCode(),
    timeZone: faker.address.timeZone(),
  };

  return newUser
}

export const makePerson = (howMuch=1)=>{
  const persons = new Array(howMuch).fill(null).map(()=>generateUser())
  return persons
}