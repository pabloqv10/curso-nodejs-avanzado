import { EventEmitter } from 'node:events';

class UserNotifier extends EventEmitter {
  constructor() {
    super();
  }
}

const userNotifier = new UserNotifier();

export default userNotifier;