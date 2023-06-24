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

  // - 프로필 사진 / 업로드
  // - 웹사이트 / text  / 링크 수정은 모바일에서만 가능합니다. Instagram 앱으로 이동하여 프로필의 소개에서 웹사이트를 변경하여 수정하세요.
  // - 소개 / textarea
  // - 성별 / select/ 밝히고 싶지 않음, 여성, 남성
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
      <section className="border-solid border-[1px] border-black flex rounded-[5px] px-[10px] gap-x-[5px]">
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
          <h1>프로필 편집</h1>
          {/* profile */}
          <div className="profile flex border-[1px] border-solid">
            <label htmlFor="uploadProfile" className="w-[25px] aspect-square">
              <img src="/images/icons/ico_profile_default.jpeg" alt="" />
            </label>
            <input type="file" id="uploadProfile" accept="image/*" />
          </div>
          {/* profile */}
          <form className="subCon" onSubmit={handleSubmit(onSubmit)}>
            {/* description */}
            <div className="description flex border-[1px] border-solid">
              <label htmlFor="">설명</label>
              <CustomInput
                type="textarea"
                register={register('description')}
                placeHolder="나를 표현해 보세요"
              />
            </div>
            {/* description */}
            {/* gender */}
            <div className="gender flex border-[1px] border-solid">
              <label htmlFor="gender">성별</label>
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
            <div className="flex border-[1px] border-solid">
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
