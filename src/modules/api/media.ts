import apiClient from './apiClient';

const IMG_UPLOAD = '/api/media/image-create';

interface ImgUploadPropsType {
  accesstoken: string;
}
export function imgUpLoad(data: ImgUploadPropsType) {
  return apiClient.post(IMG_UPLOAD, data);
}
