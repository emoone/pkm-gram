import apiClient from './apiClient';

async function getBaseData() {
  const BASE_DATA_API = '/api/system/base-data';
  return await apiClient.get(BASE_DATA_API);
}

export default getBaseData;
