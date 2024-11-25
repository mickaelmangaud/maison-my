import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  console.log('LOADER: SendEmail');
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  console.log('SendEmail action');
  const formData = await request.formData();
  const email = formData.get('email');
  const message = formData.get('message');

  console.log(email, message);
  return null;
}

export default function SendEmail() {
  return <h1>Send Email</h1>;
}
