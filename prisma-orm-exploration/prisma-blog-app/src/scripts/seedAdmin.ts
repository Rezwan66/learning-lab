import { prisma } from '../lib/prisma';
import { UserRole } from '../middlewares/auth';

async function seedAdmin() {
  try {
    console.log('***** Admin Seeding Started *****');
    const adminData = {
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      role: UserRole.ADMIN,
      password: process.env.ADMIN_PASS,
    };
    // check if the user exists or not
    console.log('***** Checking Existence of Admin *****');
    const existingUser = await prisma.user.findUnique({
      where: {
        email: adminData.email as string,
      },
    });
    if (existingUser) {
      throw new Error('User already exists!!');
    }

    const signUpAdmin = await fetch(
      'http://localhost:5000/api/auth/sign-up/email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
      }
    );

    // console.log(signUpAdmin);

    if (signUpAdmin.ok) {
      console.log('***** Admin Created *****');
      await prisma.user.update({
        where: {
          email: adminData.email as string,
        },
        data: {
          emailVerified: true,
        },
      });
      console.log('***** Email verification status updated *****');
    }
    console.log('***** SUCCESS *****');
  } catch (error) {
    console.log({ error });
  }
}

seedAdmin();
