'use client';

import { login, signup } from '../../../actions/loginAction'
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  console.log("login rendered")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("handle called")

    const formData = new FormData(event.target as HTMLFormElement);
    const result = await login(formData);
    console.log(result);

    if (result.success) {
      // Redirect to the /home route
      console.log("here")
      router.push(result.redirectTo);
    } else {
      // Redirect to the error page
      console.log("error here")
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
        <button>
          Log in
        </button>
        <button>
          Sign up
        </button>
      </div>
    </form>
  )
}