export function waitLoadSuccessData(store, key) {
  return new Promise(resolve => {
    store.subscribe(() => {
      let newState = store.getState();
      if (newState.await.statuses[key] !== "pending") {
        resolve();
      }
    });
  });
}

export function awaitCheckStatus(props, key, status, callback) {
  if (props.awaitStatuses[key] === status) {
    return callback ? callback : true;
  }
  return false;
}

export function awaitCheckPending(props, key, callback) {
  return awaitCheckStatus(props, key, "pending", callback);
}

export function awaitCheckSuccess(props, key, callback) {
  return awaitCheckStatus(props, key, "success", callback);
}

export function awaitCheckFail(props, key, callback) {
  return awaitCheckStatus(props, key, "fail", callback);
}
