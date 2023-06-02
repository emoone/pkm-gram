/**!SECTION
 * 로그인 후 token, refreshToken 받음.
 * localStorage에 저장 함.
 * login 유지 로직.
 * 만약 token이 만료면, refreshToken으로 갱신 요청.
 */
export class UserSession {
  private static SET_USER_ACCESS_TOKEN = 'u_a_t';
  /**ANCHOR -
   * localStorage에 token 저장하기
   */
  static setUserInfo = (token: string) => {
    if (!token) localStorage.setItem(this.SET_USER_ACCESS_TOKEN, '');
    localStorage.setItem(this.SET_USER_ACCESS_TOKEN, token);
  };
}
