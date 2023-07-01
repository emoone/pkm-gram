import apiClient from './apiClient';

const IMG_UPLOAD = '/api/media/image-create';

interface ImgUploadPropsType {
  accesstoken: string;
}
/**
 * imageUploadd api
 * @param data
 * @returns
 */
export function imgUpLoad(data: ImgUploadPropsType) {
  return apiClient.post(IMG_UPLOAD, data);
}
