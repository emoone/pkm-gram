import { InferType, date, number, object, string, ref } from 'yup';

export const loginValidation = object({
  email: string()
    .nonNullable()
    .required('이메일은 필수 입니다.')
    .email('이메일 형식 맞추세요.'),
  password: string().min(4, '비밀번호는 최소 4자 이상'),
  // .matches(
  //   /[0-9]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // )
  // .matches(
  //   /[a-z]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // )
  // .matches(
  //   /[A-Z]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // )
  // .matches(
  //   /[^\w]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // ),
});

export const joginUpValidation = object({
  email: string()
    .nonNullable()
    .required('이메일은 필수 입니다.')
    .email('이메일 형식 맞추세요.'),
  password: string()
    .required('암호는 필수 입니다')
    .min(4, '비밀번호는 최소 4자 이상'),
  passwordConfirm: string()
    .required('재확인 암호는 필수 입니다')
    .min(4, '비밀번호는 최소 4자 이상')
    .oneOf([ref('password')], 'Passwords does not match'),
  // .matches(
  //   /[0-9]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // )
  // .matches(
  //   /[a-z]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // )
  // .matches(
  //   /[A-Z]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // )
  // .matches(
  //   /[^\w]/,
  //   '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
  // ),
});

export const commentValidation = object({
  comment: string(),
});

// 프로필 편집 유효성체크
export const profileEditField = object({
  description: string(),
  // .min(5, '최소 5자 이상 입력하세요.')
  // .max(200, '200자 이상 안됩니다.'),
  // gender: object({
  //   value: string(),
  //   label: string(),
  // }),
  gender: string(),

  // selectedCountry: yup.object().shape({
  // value: yup.string().required("Required"),
  // label: yup.string().required("Required"),
});
