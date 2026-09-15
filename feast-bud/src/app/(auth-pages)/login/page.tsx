"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "../../../actions/loginAction";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = await login(formData);

    if (result.success) {
      router.push(result.redirectTo);
    } else {
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
        <button type="submit">Log in</button>
        <Link href="/register">Sign up</Link>
      </div>
    </form>
  );
}
