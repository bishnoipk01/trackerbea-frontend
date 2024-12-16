import AuthForm from "@/components/AuthForm";
import AuthWrapper from "@/components/AuthWrapper";

export default function LoginPage() {
  return (
    <AuthWrapper>
      <AuthForm type="login" />
    </AuthWrapper>
  );
}
