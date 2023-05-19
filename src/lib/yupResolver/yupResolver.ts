import { InferType, date, number, object, string } from 'yup';

export const loginValidation = object({
  email: string()
    .nonNullable()
    .required('이메일은 필수 입니다.')
    .email('이메일 형식 맞추세요.'),
  password: string()
    .min(4, '비밀번호는 최소 4자 이상')
    .matches(
      /[0-9]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    )
    .matches(
      /[a-z]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    )
    .matches(
      /[A-Z]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    )
    .matches(
      /[^\w]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    ),
});

export const signupValidation = object({
  email: string()
    .nonNullable()
    .required('이메일은 필수 입니다.')
    .email('이메일 형식 맞추세요.'),
  userName: string()
    .required('사용자명 필수 입니다.')
    .max(6, '최대 6글자 입니다.'),
  password: string()
    .min(4, '비밀번호는 최소 4자 이상')
    .matches(
      /[0-9]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    )
    .matches(
      /[a-z]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    )
    .matches(
      /[A-Z]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    )
    .matches(
      /[^\w]/,
      '비밀번호는 숫자, 영문 대/소 문자, 특수문자 최소 한개 이상 설정',
    ),
});

export const commentValidation = object({
  comment: string(),
});
