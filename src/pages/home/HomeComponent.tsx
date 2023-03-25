import cn from 'clsx';

export default function HomeComponent() {
  return (
    <div className="contentCon flex w-full justify-around max-w-[800px] mx-auto gap-x-10 my-[15px] md:my-[30px]">
      {/* imgArea */}
      <div className="phoneImg hidden md:inline-block flex-1 aspect-[523/825]">
        <img src="/images/phoneimage.png" alt="" />
      </div>
      {/* imgArea */}
      {/* loginArea */}
      <div
        className={cn(
          'loginCon flex flex-1 flex-col  border border-solid border-[#e6e6e6] rounded-3 py-[30px]',
          '',
        )}>
        {/* logo */}
        <div className="logo aspect-[358/110] w-full max-w-[162.73px]">
          <img src="/images/icons/loginLogo.png" alt="" />
        </div>
        {/* logo */}

        {/* login */}
        <form className="loign">
          <div className="userInfo flex flex-col gap-y-[5px]">
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
          <input
            type="button"
            value="Login"
            className="btnLogin w-full mt-[15px] mb-[20px] bg-[#3f99ed] text-white py-5 font-semibold rounded-5"
          />
          {/* btnArea */}
        </form>
        {/* login */}

        {/* otherArea */}
        <div className="otherArea">
          <span>OR</span>
          <div className="faceBook">
            <img src="" alt="" />
            Log in With FaceBook
          </div>

          <div className="forgotPassword">Forgot password</div>
        </div>
        {/* otherArea */}
      </div>
      {/* loginArea */}
    </div>
  );
}
