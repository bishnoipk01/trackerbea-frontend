import AuthForm from "@/components/AuthForm";
import AuthWrapper from "@/components/AuthWrapper";

export default function SignupPage() {
  return (
    <AuthWrapper>
      <AuthForm type="signup" />
    </AuthWrapper>
  );
}
