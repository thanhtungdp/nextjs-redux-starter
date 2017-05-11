import createStore from "./createStore";
import withRedux from "next-redux-wrapper";
import { connect as reduxConnect } from "react-redux";
import { bindActionCreators } from "redux";


export function nextReduxWrapper(...args){
	return withRedux(createStore, ...args);
}

export function connectAutoDispatch(mapStateToProps, actions, ...args) {
	return reduxConnect(
		mapStateToProps,
		dispatch => bindActionCreators(actions, dispatch),
		...args
	);
}

export function connectAwait(mapStateToProps, mapDispatchToProps, ...args) {
  return reduxConnect(
    (state, ownProps) => {
      const props = mapStateToProps(state, ownProps);
      let awaitStatuses = state.await.statuses instanceof Array
        ? {}
        : state.await.statuses;
      let awaitErrors = state.await.errors instanceof Array
        ? {}
        : state.await.errors;
      return { ...props, awaitStatuses, awaitErrors };
    },
    mapDispatchToProps,
    ...args
  );
}

export function connectAwaitAutoDispatch(mapStateToProps, actions, ...args) {
  return connectAwait(
    mapStateToProps,
    dispatch => bindActionCreators(actions, dispatch),
    ...args
  );
}

