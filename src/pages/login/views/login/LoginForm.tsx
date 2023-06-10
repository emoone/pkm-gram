import { Dollar, InstarGram } from '../../../../uis/icons';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  setAccessToken,
  setRefreshToken,
} from '../../../../modules/store/userSession/userSessionReducer';

import { CustomInput } from '../../../../components/common/customInput';
import cn from 'clsx';
import { login } from '../../../../modules/api/auth';
import { loginValidation } from '../../../../libs/yupResolver';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { AlertMsgComponent } from '../../../../components/common/alertMsg';

interface OptionsProps {
  index: number;
  name: string;
  value: string;
}
interface LoginPropsType {
  email: string;
  password: string;
  options: OptionsProps[];
}

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandle = (data: any) => {
    if (!data) return;
    dispatch(setAccessToken(data.access_token));
    dispatch(setRefreshToken(data.refresh_token));
    navigate('/');
  };
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginPropsType>({ resolver: yupResolver(loginValidation) });

  const onSubmit: SubmitHandler<LoginPropsType> = data => {
    const res = login({ email: data.email, password: data.password });
    res.then((res: any) => {
      const { status } = res;
      if (status) {
        loginHandle(res.data);
      } else {
        setError('root', { type: 'server', message: `${res.message}` });
        console.error(errors);
      }
    });
  };

  return (
    <div className={cn('userInfo flex grow-[1] flex-col gap-y-[10px]', '')}>
      <div>
        <p className="text-[#E30425] font-bold text-[.8rem]">
          email: {watch('email')}
        </p>
        <p className="text-[#E30425] font-bold text-[.8rem]">
          password: {watch('password')}
        </p>
      </div>
      {/* loginFormCol */}
      <div
        className={cn(
          'loginCol flex flex-col items-center rounded-3 px-[40px]',
          'md:border md:border-solid md:border-[#e6e6e6]',
          '[&>.loginBox]:py-[30px]',
        )}>
        {/* login */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn('w-full loign loginBox loginForm ')}>
          {/* logo */}
          <div className=" logo aspect-[358/110] w-full max-w-[162.73px] mx-auto">
            <InstarGram />
          </div>
          {/* logo */}
          <div className=" w-full userInfo flex flex-col gap-y-[5px]">
            <CustomInput
              register={register('email')}
              type="text"
              placeHolder="UserName"
              className={cn(
                'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
              )}
            />

            {errors.email && <AlertMsgComponent msg={errors.email.message} />}
            <CustomInput
              register={register('password')}
              type="password"
              placeHolder="Password"
              className={cn(
                'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
              )}
            />
            {errors.password && (
              <AlertMsgComponent msg={errors.password.message} />
            )}
          </div>
          {errors.root && <AlertMsgComponent msg={errors.root.message} />}

          {/* btnArea */}
          <button
            type="submit"
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
  );
}
