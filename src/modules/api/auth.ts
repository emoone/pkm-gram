import apiClient from './apiClient';

interface LoginPropsType {
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

const EMAIL_DUPLICATE_CHECK = '/api/auth/:email/email-exits';
const USER_JOIGN = '/api/auth/register';
const EMAIL_AUTH_CODE = '/web/auth/emailauth/:authCode';
const USER_LOGIN = '/api/auth/login';
const GET_TOKEN_INFO = '/api/auth/token-info';
const USER_LOGOUT = '/api/auth/logout';
const GET_REFRESH_TOKEN = '/api/auth/token-refresh';

export function login(data: LoginPropsType) {
  return apiClient.post(USER_LOGIN, data);
}
