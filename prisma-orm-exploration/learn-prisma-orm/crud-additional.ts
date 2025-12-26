import { faker } from '@faker-js/faker';
import { prisma } from './lib/prisma';

const data = Array.from({ length: 10 }).map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

// console.log(data);

const run = async () => {
  //   const createManyUsers = await prisma.user.createMany({
  //     //   data: [
  //     //     { name: 'Sydney Sweeney', email: 'sydney@gamil.com' },
  //     //     { name: 'Sydney Sweeney', email: 'sydney@gamil.com' }, // duplicate
  //     //     { name: 'Billie Eilish', email: 'billie@gamil.com' },
  //     //     { name: 'Ana De Armas', email: 'ana@gamil.com' },
  //     //     { name: 'Jennifer Lawrence', email: 'jen@gamil.com' },
  //     //     { name: 'Rhea Ripley', email: 'rhea@gamil.com' },
  //     //   ],
  //     data,
  //     skipDuplicates: true,
  //   });
  //   console.log('created uses:', createManyUsers);
  //   const createManyAndReturnUsers = await prisma.user.createManyAndReturn({
  //     data: [
  //       { name: 'Alice', email: 'alice@prisma.io' },
  //       { name: 'Bob', email: 'bob@prisma.io' },
  //     ],
  //   });
  //   console.log({ createManyAndReturnUsers });
  //   const filteredUsersByEmail = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: 'prisma.io',
  //       },
  //     },
  //   });
  //   console.log({filteredUsersByEmail});
};

run();
