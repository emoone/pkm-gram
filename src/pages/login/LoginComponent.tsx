import LoginBanner from './views/loginBanner/LoginBanner';
import LoginForm from './views/login/LoginForm';

export default function LoginComponent() {
  return (
    <div className="contentCon flex w-full justify-around max-w-[800px] mx-auto gap-x-10 my-[15px] md:my-[30px] md:px-10">
      {/* imgArea */}
      <LoginBanner />
      {/* imgArea */}
      {/* userInfoArea */}
      <LoginForm />
      {/* userInfoArea */}
    </div>
  );
}
