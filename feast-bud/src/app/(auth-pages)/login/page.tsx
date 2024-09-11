'use client';

import { useRouter } from 'next/navigation';
import { login } from '../../../actions/loginAction';

export default function LoginPage() {
  const router = useRouter();
  console.log('login rendered');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const result = await login(formData);
    console.log(result);

    if (result.success) {
      // Redirect to the /home route
      console.log('here');
      router.push(result.redirectTo);
    } else {
      // Redirect to the error page
      console.log('error here');
      router.push(result.redirectTo);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
      </div>
      <div>
        <button type="button">
          Log in
        </button>
        <button type="button">
          Sign up
        </button>
      </div>
    </form>
  );
}
