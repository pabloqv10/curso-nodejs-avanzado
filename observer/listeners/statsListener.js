import userNotifier from '../notifier.js';

const updateStats = (user) => {
  console.log(`Updating stats for ${user.email}`);
};

userNotifier.on('userRegistered', updateStats);

export default updateStats;
