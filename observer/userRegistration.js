import userNotifier from './notifier.js';

const registerUser = (user) => {
  console.log(`Registering user ...`);

  userNotifier.emit('userRegistered', user);
};

export default registerUser;
