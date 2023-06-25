import cn from 'clsx';
import { CustomInput } from '../../components/common/customInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CustomSelect,
  OptionItemType,
} from '../../components/common/customInput/CustomSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileEditField } from '../../libs/yupResolver';

interface ProfileEditPropTypes {
  description: string;
  gender: string;
}
export default function ProfileEditComponent() {
  const navArr = [
    { name: '앱 및 웹사이트', link: '' },
    { name: '이메일 알림', link: '' },
    { name: '푸시 알림', link: '' },
    { name: '내가 볼 수 있는 내용', link: '' },
    { name: '내 콘텐츠를 볼 수 있는 사람', link: '' },
    { name: '다름 사람이 나와 소통할 수 있는 방법', link: '' },
    { name: '관리 감독', link: '' },
  ];

  const formArr = [
    { title: '', type: '', palceHolder: '', des: '' },
    { title: '', type: '', palceHolder: '', des: '' },
    { title: '', type: '', palceHolder: '', des: '' },
    { title: '', type: '', palceHolder: '', des: '' },
    { title: '', type: '', palceHolder: '', des: '' },
    { title: '', type: '', palceHolder: '', des: '' },
  ];
  const defaultValues = {
    description: '',
    gender: '성별',
  };
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileEditPropTypes>({
    resolver: yupResolver(profileEditField),
    defaultValues,
  });

  const onSubmit: SubmitHandler<ProfileEditPropTypes> = data => {
    console.log('???');
    console.log(data);
  };
  return (
    <div className="editCon w-full max-w-[739px] mx-auto">
      <h1>설정</h1>
      <section className="border-solid border-[1px] border-black flex rounded-[5px] px-[10px] gap-x-[5px] py-10">
        <nav
          id="navTab"
          className={cn(
            'flex-col hidden border-r-[1px] w-full max-w-[30%] items-start justify-start',
            'md:flex ',
          )}>
          {navArr.map((item, index) => {
            return (
              <a
                key={`${item.name}-${index}`}
                href={item.link}
                className="whitespace-normal">
                {item.name}
              </a>
            );
          })}
        </nav>
        <article className="editForm w-full">
          <h1 className="font-bold mb-5">프로필 편집</h1>

          <form
            className="subCon flex flex-col gap-y-[5px]"
            onSubmit={handleSubmit(onSubmit)}>
            {/* profile */}
            <div className="profile flex border-[1px] border-solid items-center justify-start gap-x-[5px] px-5">
              <label
                htmlFor="uploadProfile"
                className="w-[25px] aspect-square relative">
                <img src="/images/icons/ico_profile_default.jpeg" alt="" />
                <input
                  className="absolute w-0 h-0"
                  type="file"
                  id="uploadProfile"
                  accept="image/*"
                  onChange={(e: any) => {
                    console.log(e.target.files);
                  }}
                />
              </label>
              <div>
                <p>___moooone___</p>
                <label
                  className={cn(
                    'cursor-pointer text-[#5A96E3] text-12 font-extrabold',
                    'hover:text-[#0A6EBD]',
                  )}
                  htmlFor="uploadProfile">
                  프로필사진 바꾸기
                  {/* <button type="button"></button> */}
                </label>
              </div>
            </div>
            {/* profile */}
            {/* description */}
            <div className="description flex border-[1px] border-solid items-center justify-start gap-x-[5px] px-5">
              <div className=" whitespace-nowrap">설명</div>
              <CustomInput
                id="profileDes"
                type="textarea"
                register={register('description')}
                placeHolder="나를 표현해 보세요"
              />
            </div>
            {/* description */}
            {/* gender */}
            <div className="gender flex border-[1px] border-solid items-center justify-start gap-x-[5px] px-5">
              <label htmlFor="gender" className=" whitespace-nowrap">
                성별
              </label>
              <CustomSelect
                id="gender"
                register={register('gender')}
                options={[
                  { label: 'label-default', value: '성별' },
                  { label: 'label-1', value: '여성' },
                  { label: 'label-2', value: '남성' },
                ]}
              />
            </div>
            {/* gender */}

            {/* btnArea */}
            <div className="flex border-[1px] border-solid items-center justify-start gap-x-[5px] px-5">
              <button type="submit">저장</button>
              {/* <button type="cancel">취소</button> */}
            </div>
            {/* btnArea */}
          </form>
        </article>
      </section>
    </div>
  );
}
