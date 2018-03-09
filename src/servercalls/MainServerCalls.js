

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.status;
  error.statusText = response.statusText;
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function getURL(url){
  var backendUrl;
  if(process.env.NODE_ENV === 'development'){
    // When in development, the url will be proxied to backend set up in package.json
    backendUrl = url;
  }
  return backendUrl;
}

function postCall(url, objectBody, method, cb) {
  return fetch(getURL(url), {
    method: method,
    accept: '*/*',
    headers: {
          'Content-Type': 'application/json',
        },
    body: JSON.stringify(objectBody)
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function getCall(url, method, cb) {
  return fetch(getURL(url), {
    method: method,
    accept: '*/*',
    headers: {
          'Content-Type': 'application/json',
        },
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

const MainServerCalls = {parseJSON, getURL, postCall, checkStatus, getCall}
export default MainServerCalls;
