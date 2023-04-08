import cn from 'clsx';
import { Link } from 'react-router-dom';

export default function SignupMain() {
  return (
    <div className="signUpCon flex flex-col w-full max-w-[350px] mx-auto gap-y-[20px] m-[10px_0_30px]">
      {/* signUpArea */}
      <form
        action=""
        className={cn(
          'flex flex-col items-center gap-y-[10px] rounded-3 px-[40px] pt-[40px]',
          'ssm:border ssm:border-solid ssm:border-[#e6e6e6]',
        )}>
        <div className=" logo aspect-[358/110] w-full max-w-[162.73px] mx-auto">
          <img src="/images/icons/loginLogo.png" alt="" />
        </div>

        <div className=" w-full userInfo flex flex-col gap-y-[5px]">
          <input
            type="email"
            placeholder="Email"
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
          />
          <input
            type="text"
            placeholder="UserName"
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
          />
          <input
            type="password"
            placeholder="Password"
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
          />
        </div>

        {/* btnArea */}
        <button
          type="button"
          className="btnLogin w-full mb-[20px] bg-[#3f99ed] text-white py-5 font-semibold rounded-5">
          SignUp
        </button>
        {/* btnArea */}
      </form>
      {/* signUpArea */}

      {/* loginArea */}
      <div
        className={cn(
          'flex justify-center flex-wrap items-center rounded-3 p-[30px_40px] gap-x-[5px]',
          'ssm:border ssm:border-solid ssm:border-[#e6e6e6]',
        )}>
        Have an account?{' '}
        <Link
          className="text-[#003569] text-12 font-bold underline"
          to="/account/login">
          Login
        </Link>
      </div>
      {/* loginArea */}

      {/* downLoadAppArea */}
      <div className="flex flex-col items-center justify-center otherCon gap-y-[10px]">
        <p className="">get the App</p>
        <div className="flex items-center justify-center">
          <button type="button" className="inline-block w-full max-w-[136px]">
            <img src="/images/android.png" alt="" />
          </button>
          <button type="button" className="inline-block w-full max-w-[136px]">
            <img src="/images/ios.png" alt="" />
          </button>
        </div>
      </div>
      {/* downLoadAppArea */}
    </div>
  );
}
