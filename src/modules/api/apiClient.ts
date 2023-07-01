import _ from 'lodash';
import axios, { AxiosInstance } from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
interface ResponseTypes {
  data: any;
  status: boolean;
}

interface ErrorTypes {
  message: string;
  error: any;
  status: boolean;
}

/**
 * axios create
 * @returns
 */
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Client-Type': '010030',
    },
  });

  return setInterceptors(instance);
}

/**
 * axios interceptor setting
 * @param instance
 * @returns
 */
function setInterceptors(instance: AxiosInstance) {
  // const token = useSelector((state: RootState) => state.auth.accessToken);
  try {
    let token: string | null = null;
    const getTokenObj = window.localStorage.getItem('persist:auth');

    if (getTokenObj) {
      const { accessToken = null, refreshToken = null } =
        JSON.parse(getTokenObj);
      token = accessToken;
    }

    instance.interceptors.request.use(
      function (config) {
        if (token) {
          config.headers.Authrozation = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    /**
     * api 호출 결과 (성공 / 실패) 정의 하여 반환
     * 성공 및 실패 여부는 status 값으로 구분
     */
    instance.interceptors.response.use(
      (response): Promise<any> => {
        const { result } = response.data;
        const resultState: ResponseTypes = {
          data: result,
          status: true,
        };

        return Promise.resolve(resultState);
      },
      error => {
        console.log(error);
        const { data } = error.response;

        const errors: ErrorTypes = {
          message: '처리중 문제가 발생 했습니다.',
          error: {},
          status: false,
        };
        if (_.has(data, 'message')) {
          errors.message = data.message;
        }
        if (_.has(data, 'error')) {
          errors.error = data.error;
        }
        console.log('error');
        return Promise.resolve(errors);
      },
    );
  } catch (e) {
    console.error(e);
  }
  return instance;
}

const apiClient = createInstance();

export default apiClient;
