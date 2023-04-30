import { CustomInput } from '../../../components/common/customInput';
import { Link } from 'react-router-dom';
import cn from 'clsx';
import { useState } from 'react';

export default function SignupMain() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  return (
    <div
      className={cn(
        'signUpCon flex flex-col w-full max-w-[350px] mx-auto m-[10px_0_30px] gap-y-[10px]',
        'ssm:gap-y-[20px]',
      )}>
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
          {/* <input
            type="email"
            placeholder="Email"
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
          /> */}
          <CustomInput
            value={email}
            type="email"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            placeHolder="Email"
            className="block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] "
          />
          <CustomInput
            value={userName}
            type="text"
            placeHolder="UserName"
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
            onChange={(e: any) => {
              setUserName(e.target.value);
            }}
          />

          <CustomInput
            type="password"
            value={passWord}
            placeHolder="Password"
            onChange={(e: any) => setPassWord(e.target.value)}
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
          />
        </div>

        {/* btnArea */}
        <button
          type="button"
          className="btnLogin w-full ssm:mb-[20px] bg-[#3f99ed] text-white py-5 font-semibold rounded-5">
          SignUp
        </button>
        {/* btnArea */}
      </form>
      {/* signUpArea */}

      {/* loginArea */}
      <div
        className={cn(
          'flex justify-center flex-wrap items-center rounded-3 p-[5px_7px] gap-x-[5px]',
          'ssm:border ssm:border-solid ssm:border-[#e6e6e6] ssm:p-[1rem_1.5rem]',
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
