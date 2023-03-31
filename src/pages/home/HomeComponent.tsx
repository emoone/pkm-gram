import { Dollar } from '../../uis/icons';
import cn from 'clsx';

export default function HomeComponent() {
  return (
    <div className="contentCon flex w-full justify-around max-w-[800px] mx-auto gap-x-10 my-[15px] md:my-[30px]">
      {/* imgArea */}
      <div className="phoneImg hidden md:inline-block flex-1 aspect-[523/825]">
        <img src="/images/phoneimage.png" alt="" />
      </div>
      {/* imgArea */}
      {/* userInfoArea */}
      <div className={cn('userInfo flex flex-1 flex-col', '')}>
        {/* loginFormCol */}
        <div
          className={cn(
            'loginCol border flex flex-col items-center border-solid border-[#e6e6e6] rounded-3 px-[40px]',
            '[&>.loginBox]:py-[30px]',
          )}>
          {/* login */}
          <form className={cn('w-full loign loginBox loginForm ')}>
            {/* logo */}
            <div className=" logo aspect-[358/110] w-full max-w-[162.73px] mx-auto">
              <img src="/images/icons/loginLogo.png" alt="" />
            </div>
            {/* logo */}
            <div className=" w-full userInfo flex flex-col gap-y-[5px]">
              <input
                type="text"
                placeholder="UserName"
                className="block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full"
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
            'loginCol loginCon flex flex-1 flex-col  border border-solid border-[#e6e6e6] rounded-3 py-[30px]',
          )}>
          <div>
            Don&apos;t have an account? <button type="button">Sign up</button>
          </div>
        </div>
        {/* signUpArea */}
      </div>
      {/* userInfoArea */}
    </div>
  );
}
