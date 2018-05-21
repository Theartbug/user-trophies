

const BASE_URL = 'https://api.ride.report/api/v4/';
const clientId = 'A8bwScWN5Q6p41d5oWLze4VAGzWZ92shII7JPcSn';

const authTokenJSON = '{"scopes":["manage_own_trips","manage_connected_apps","read_demo_data"],"access_token":"tVwcpgHbkbXqiDvjTZjJqnN0fHz94o","expires_in":"15552000","uri":"http://ride.report#access_token=tVwcpgHbkbXqiDvjTZjJqnN0fHz94o&token_type=Bearer&expires_in=15552000&scope=manage_own_trips+manage_connected_apps+read_demo_data","token_type":"Bearer","scope":"manage_own_trips manage_connected_apps read_demo_data"}';

export const getAuthToken = (email) => {
  
  const authToken = JSON.parse(authTokenJSON);

  setToken(authToken.access_token);
  
};

const setToken = (authToken) => {

  localStorage.setItem('access_token', authToken);
};