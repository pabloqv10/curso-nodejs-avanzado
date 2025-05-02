import userNotifier from '../notifier.js';

const sendEmail = (user) => {
  console.log(`Sending email to ${user.email}`);
};

userNotifier.on('userRegistered', sendEmail);

export default sendEmail;