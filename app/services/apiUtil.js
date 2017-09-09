const PATH = 'https://s3-eu-west-1.amazonaws.com/snipperwall-challenge/frontend-test.json';

const handleError = (response) => {
  console.log('response status: ', response.status);
  if (response.status >= 200 && response.status < 400) {
    return response.json();
  }
  return response.json().then((err = {}) => {
    console.log('response error: ', err);
    throw new Error();
  });
}

export const getData = () => new Promise((resolve, reject) => {
  fetch(PATH, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
  })
    .then(handleError)
    .then(resolve)
    .catch(reject);
});
