import axios from 'axios';
import _ from 'lodash';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Client-Type': '010030',
  },
});

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
 * api 호출 결과 (성공 / 실패) 정의 하여 반환
 * 성공 및 실패 여부는 status 값으로 구분
 */
apiClient.interceptors.response.use(
  (response): Promise<any> => {
    const { result } = response.data;
    const resultState: ResponseTypes = {
      data: result,
      status: true,
    };
    return Promise.resolve(resultState);
  },
  error => {
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

    return Promise.resolve(errors);
  },
);

export default apiClient;
