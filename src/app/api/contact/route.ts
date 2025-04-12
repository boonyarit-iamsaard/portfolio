import { send } from '@/core/email';

export async function POST(request: Request) {
  console.log(await request.json());

  return send()
    .then(() => {
      return new Response('OK', { status: 200 });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);

      return new Response('Error', { status: 500 });
    });
}
