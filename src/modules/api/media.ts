import apiClient from './apiClient';

const IMG_UPLOAD = '/api/media/image-create';

interface ImgUploadPropsType {
  formData: FormData;
}
/**
 * imageUploadd api
 * @param data
 * @returns
 */
export function imgUpLoad({ formData }: ImgUploadPropsType) {
  return apiClient.post(IMG_UPLOAD, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
