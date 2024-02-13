const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io';

const request = async (url: string) => {
  const res = await fetch(BASE_URL + url);

  return res.json();
};

export const getModes = () => request('/modes');
