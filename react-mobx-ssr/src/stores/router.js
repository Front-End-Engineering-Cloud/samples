/**
 * router store
 * TODO: add match info in the store
 * 1. parse route config
 * 2. use location and route config to get match
 */

import { observable, action } from 'mobx';
import ssrStore from './ssr';

class Router {
  @observable location = null;
  history = null;

  @action
  updateLocation(location) {
    this.location = location;
  }

  // must set history first for server side render
  setHistory(history) {
    this.history = history;
    const handleLocationChange = location => {
      // clear th ssr state when route change
      if (ssrStore.stateLoaded) {
          ssrStore.clear();
      }
      this.updateLocation(location);
    };

    this.history.listen(handleLocationChange);
  }

  push(location) {
    this.history.push(location);
  }
  replace(location) {
    this.history.replace(location);
  }
  go(n) {
    this.history.go(n);
  }
  goBack() {
    this.history.goBack();
  }
  goForward() {
    this.history.goForward();
  }
}

export default new Router();
