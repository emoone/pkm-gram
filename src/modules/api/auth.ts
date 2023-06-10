import apiClient from './apiClient';

interface LoginAndSignUpPropsType {
  email: string;
  password: string;
}
/**
 * 이메일 중복 체크
 * 회원가입
 * 이메일 인증(웹)
 * 로그인
 * 토큰 정보
 * 로그아웃
 * 토큰 refresh
 */

const USER_joinUp = '/api/auth/register';
const USER_LOGIN = '/api/auth/login';
const EMAIL_DUPLICATE_CHECK = '/api/auth/:email/email-exits';
const EMAIL_AUTH_CODE = '/web/auth/emailauth/:authCode';
const GET_TOKEN_INFO = '/api/auth/token-info';
const USER_LOGOUT = '/api/auth/logout';
const GET_REFRESH_TOKEN = '/api/auth/token-refresh';

/**
 * joinUpApi
 * @param data
 * @returns
 */
export function joinUp(data: LoginAndSignUpPropsType) {
  return apiClient.post(USER_joinUp, data);
}

/**
 * loginApi
 * @param data
 * @returns
 */
export function login(data: LoginAndSignUpPropsType) {
  return apiClient.post(USER_LOGIN, data);
}
