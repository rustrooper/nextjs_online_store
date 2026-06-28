import { loginAction } from './sign-in-action';
import { AuthForm } from '@/components/AuthForm';

export default function LoginPage() {
  return <AuthForm variant="sign-in" action={loginAction} />;
}
