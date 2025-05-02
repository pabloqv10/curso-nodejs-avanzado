import './listeners/emailListener.js';
import './listeners/statsListener.js';

import registerUser from './userRegistration.js';

const user1 = { id: 1, email: 'user1@example.com', name: 'User 1' };
const user2 = { id: 2, email: 'user2@example.com', name: 'User 2' };

registerUser(user1);
registerUser(user2);

