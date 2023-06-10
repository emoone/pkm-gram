import { SubmitHandler, useForm } from 'react-hook-form';

import { CustomInput } from '../../../components/common/customInput';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'clsx';
import { joginUpValidation } from '../../../libs/yupResolver';
import { yupResolver } from '@hookform/resolvers/yup';
import { joinUp } from '../../../modules/api';
import { AlertMsgComponent } from '../../../components/common/alertMsg';

interface JoinUpPropsType {
  email: string;
  password: string;
  passwordConfirm: string;
}
export default function JoinUpMain() {
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JoinUpPropsType>({ resolver: yupResolver(joginUpValidation) });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<JoinUpPropsType> = data => {
    const res = joinUp({ email: data.email, password: data.password });
    res.then((res: any) => {
      const { status } = res;
      if (status) {
        navigate('/account/login');
      } else {
        setError('root', { type: 'server', message: `${res.message}` });
      }
    });
  };
  return (
    <div
      className={cn(
        'signUpCon flex flex-col w-full max-w-[350px] mx-auto m-[10px_0_30px] gap-y-[10px]',
        'ssm:gap-y-[20px]',
      )}>
      {/* signUpArea */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          'flex flex-col items-center gap-y-[10px] rounded-3 px-[40px] pt-[40px]',
          'ssm:border ssm:border-solid ssm:border-[#e6e6e6]',
        )}>
        <div className=" logo aspect-[358/110] w-full max-w-[162.73px] mx-auto">
          <img src="/images/icons/loginLogo.png" alt="" />
        </div>

        <div className=" w-full userInfo flex flex-col gap-y-[5px]">
          <CustomInput
            register={register('email')}
            type="email"
            placeHolder="Email"
            className="block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] "
          />
          {errors.email && <AlertMsgComponent msg={errors.email.message} />}
          <CustomInput
            register={register('password')}
            type="password"
            placeHolder="password"
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
          />
          {errors.password && (
            <AlertMsgComponent msg={errors.password.message} />
          )}
          <CustomInput
            register={register('passwordConfirm')}
            type="password"
            placeHolder="Password"
            className={cn(
              'block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6] w-full bg-transparent',
            )}
          />
          {errors.passwordConfirm && (
            <AlertMsgComponent msg={errors.passwordConfirm.message} />
          )}
          {errors.root && <AlertMsgComponent msg={errors.root.message} />}
        </div>

        {/* btnArea */}
        <button
          type="submit"
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
