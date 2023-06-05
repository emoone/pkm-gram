export interface UserInfoTypes {
  token: string;
  refreshToken: string;
}
export const initUserInfo: UserInfoTypes = {
  token: '',
  refreshToken: '',
};

/**!SECTION
 * 로그인 후 token, refreshToken 받음.
 * localStorage에 저장 함.
 * login 유지 로직.
 * 만약 token이 만료면, refreshToken으로 갱신 요청.
 */
export class UserSession {
  private static USER_ACCESS_TOKEN_KEY = 'u_a_t';
  private static USER_REFRESH_TOKEN_KEY = 'u_r_t';

  /**ANCHOR -
   * localStorage에 accessToken, refreshToken 저장하기
   */
  static setUserInfo = (data: any): void => {
    console.log('data', data);
    // if (!accessToken) localStorage.setItem(this.SET_USER_ACCESS_TOKEN, '');
    localStorage.setItem(this.USER_ACCESS_TOKEN_KEY, data.access_token);
    localStorage.setItem(this.USER_REFRESH_TOKEN_KEY, data.refresh_token);
  };

  static getAccessToken(): string | null {
    return localStorage.getItem(this.USER_ACCESS_TOKEN_KEY);
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem(this.USER_REFRESH_TOKEN_KEY);
  }

  static getTokens() {
    return {
      token: localStorage.getItem(this.USER_ACCESS_TOKEN_KEY),
      refreshToken: localStorage.getItem(this.USER_REFRESH_TOKEN_KEY),
    };
  }

  static removeTokens(): void {
    localStorage.removeItem(this.USER_ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.USER_REFRESH_TOKEN_KEY);
  }
}
