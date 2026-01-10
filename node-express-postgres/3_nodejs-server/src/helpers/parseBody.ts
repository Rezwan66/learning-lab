import { IncomingMessage } from 'http';

export default async function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    //* listen for data chunk
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err: any) {
        reject(err);
      }
    });
    //handle error
    req.on('error', reject);
  });
}
