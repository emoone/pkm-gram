import { Link } from 'react-router-dom';
import { Dollar } from '../../uis/icons';
import cn from 'clsx';
import { InstarGram } from '../../uis/icons/';

export default function LoginComponent() {
  return (
    <div className="contentCon flex w-full justify-around max-w-[800px] mx-auto gap-x-10 my-[15px] md:my-[30px] md:px-10">
      {/* imgArea */}
      <div className="phoneImg hidden md:inline-block flex-1 aspect-[523/825]">
        <img src="/images/phoneimage.png" alt="" />
      </div>
      {/* imgArea */}
      {/* userInfoArea */}
      <div className={cn('userInfo flex flex-1 flex-col gap-y-[10px]', '')}>
        {/* loginFormCol */}
        <div
          className={cn(
            'loginCol flex flex-col items-center rounded-3 px-[40px]',
            'md:border md:border-solid md:border-[#e6e6e6]',
            '[&>.loginBox]:py-[30px]',
          )}>
          {/* login */}
          <form className={cn('w-full loign loginBox loginForm ')}>
            {/* logo */}
            <div className=" logo aspect-[358/110] w-full max-w-[162.73px] mx-auto">
              <InstarGram />
            </div>
            {/* logo */}
            <div className=" w-full userInfo flex flex-col gap-y-[5px]">
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
              className="btnLogin w-full mt-[15px] mb-[20px] bg-[#3f99ed] text-white py-5 font-semibold rounded-5">
              Login
            </button>
            {/* btnArea */}
          </form>
          {/* login */}

          {/* middleLineArea */}
          <div className="loginBox otherArea border-t border-solid border-[#e6e6e6] relative w-full flex items-center justify-center flex-col">
            <span className="bg-white absolute -top-[12px] left-[50%] -translate-x-[50%] z-[1] w-[40px] text-center text-[#ddd]">
              OR
            </span>
            <div className="flex faceBook text-[#003569] gap-x-[3px] items-center font-normal text-10">
              <Dollar width={15} height={15} />
              Log in With FaceBook
            </div>
            <div className="forgotPassword">Forgot password</div>
          </div>
          {/* middleLineArea */}
        </div>

        {/* loginFormCol */}

        {/* signUpArea */}
        <div
          className={cn(
            'loginCol loginCon text-center rounded-3 py-[30px]',
            'md:border md:border-solid md:border-[#e6e6e6]',
          )}>
          <div>
            Don&apos;t have an account?{' '}
            <Link
              className="text-[#003569] text-12 font-bold underline"
              to="/account/emailsignup">
              Sign up
            </Link>
          </div>
        </div>

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
        {/* signUpArea */}
      </div>
      {/* userInfoArea */}
    </div>
  );
}
