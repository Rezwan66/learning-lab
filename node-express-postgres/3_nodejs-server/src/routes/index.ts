import { readUsers, writeUsers } from '../helpers/fileDb';
import parseBody from '../helpers/parseBody';
import addRoutes from '../helpers/RouteHandler';
import sendJson from '../helpers/sendJson';

//& root route
addRoutes('GET', '/', (req, res) => {
  sendJson(res, 200, {
    message: 'Hello from Nodejs with Typescript...',
    path: req.url,
  });
});
//& health route
addRoutes('GET', '/api', (req, res) => {
  sendJson(res, 200, {
    message: 'Health status ok ✅',
    path: req.url,
  });
});
//& post user
addRoutes('POST', '/api/users', async (req, res) => {
  const body = await parseBody(req);

  const users = readUsers(); // read users json
  const newUser = {
    // id: Date.now(),
    ...body,
  };
  users?.push(newUser);
  writeUsers(users);

  sendJson(res, 201, { success: true, data: users });
});
//& update (PUT/PATCH) a user
addRoutes('PUT', '/api/users/:id', async (req, res) => {
  const { id } = (req as any).params;
  const body = await parseBody(req);

  const users = readUsers();

  const index = users.findIndex((user: any) => user.id == id);

  if (index === -1) {
    sendJson(res, 404, {
      success: false,
      message: 'user not found',
    });
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  writeUsers(users);

  sendJson(res, 202, {
    success: true,
    message: `id ${id} user updated`,
    data: users[index],
  });
});
