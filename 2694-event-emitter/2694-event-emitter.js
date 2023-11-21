class EventEmitter {
  constructor() {
    this.subscriptions = {};
  }

  subscribe(event, cb) {
    if (!(event in this.subscriptions)) {
      this.subscriptions[event] = [];
    }

    const callbackList = this.subscriptions[event];
    callbackList.push(cb);

    return {
      unsubscribe: () => {
        const index = callbackList.indexOf(cb);
        if (index !== -1) {
          callbackList.splice(index, 1);
        }
      }
    };
  }

  emit(event, args = []) {
    if (!(event in this.subscriptions)) {
      return [];
    }

    const callbackList = this.subscriptions[event];
    const results = [];

    for (const cb of callbackList) {
      results.push(cb(...args));
    }

    return results;
  }
}
