import axios from "axios";

const getHeaders = () => {
  var headers = {
    Accept: "application/json"
  };
  if (typeof localStorage !== "undefined") {
    headers = {
      ...headers,
      // Authorization: "auth here"
    };
  }
  return headers;
};

const getDefaultAttributes = props => ({
  cache: true,
  headers: getHeaders(),
  ...props
});

export function postFetch(url, data, props) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, getDefaultAttributes(props))
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject({ error: true });
        }
      })
      .catch(e => reject(e));
  });
}

export function putFetch(url, data, props) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, getDefaultAttributes(props))
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject({ error: true });
        }
      })
      .catch(e => reject(e));
  });
}

export function getFetch(url, props) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, getDefaultAttributes(props))
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject({ error: true });
        }
      })
      .catch(e => reject(e));
  });
}

export function deleteFetch(url, props) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, getDefaultAttributes(props))
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject({ error: true });
        }
      })
      .catch(e => reject(e));
  });
}
