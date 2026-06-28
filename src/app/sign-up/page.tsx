import { signupAction } from './sign-up-action';
import { AuthForm } from '@/components/AuthForm';

export default function SignupPage() {
  return <AuthForm variant="sign-up" action={signupAction} />;
}
