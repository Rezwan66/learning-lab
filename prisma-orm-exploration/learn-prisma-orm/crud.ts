import { prisma } from './lib/prisma';

async function run() {
  //@ Create users
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: 'Tarek Rahman',
  //       email: 'tarek@next.com',
  //     },
  //   });
  //   console.log('Created User:', createUser);
  //@ Create posts for user id = 1
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: 'This is my first blog post!',
  //       content: 'This is a big content',
  //       authorId: 1,
  //     },
  //   });
  //   console.log('Created Post:', createPost);
  //@ Create Profile for user 2
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: 'Web Dev at SAP',
  //       userId: 2,
  //     },
  //   });
  //   console.log('Created Profile:', createProfile);
  //$ Get all users
  //   const users = await prisma.user.findMany({
  //     // include: { //? include adds extra attributes mentioned which are not shown by prisma
  //     //   posts: true,
  //     //   profile: true,
  //     // },
  //     select: {
  //       //? select only shows the attributes mentioned
  //       id: true,
  //       name: true,
  //       email: true,
  //       posts: true,
  //       profile: true,
  //     },
  //   });
  //   console.dir(users, { depth: Infinity });
  //^ Update user data
  //   const updatedUser = await prisma.profile.update({
  //     where: {
  //       userId: 2,
  //     },
  //     data: {
  //       bio: 'Full Stack Developer',
  //       dob: '2005-12-26T01:47:04.720Z',
  //     },
  //     select: {
  //       id: true,
  //       bio: true,
  //       user: {
  //         select: {
  //           id: true,
  //           name: true,
  //           email: true,
  //         },
  //       },
  //     },
  //   });
  //   console.log('Updated User:', updatedUser);
  //% Delete users
  //   const deleteUser = await prisma.user.delete({
  //     where: { id: 3 },
  //   });
  //   console.log(deleteUser);

  //@ Get single user by id
  //   const getUserDataById = await prisma.user.findUnique({
  //     where: { id: 3 },
  //     include: { posts: true, profile: true },
  //   });
  //   console.log('User 2:', getUserDataById);

  //& Upsert - either update or create
  const upsertUser = await prisma.user.upsert({
    where: {
      email: 'jkr@ph.com',
    },
    update: {
      name: 'Shonkor Mahbub 2',
    },
    create: {
      name: 'Shonkor Mahbub 3',
      email: 'jkr@ph.com',
    },
  });
  console.log('Upserted user:', upsertUser);
}

run();
