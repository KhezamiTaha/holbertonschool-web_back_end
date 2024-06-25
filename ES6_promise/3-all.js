import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([object1, object2]) => {
      console.log(object1.body, object2.firstName, object2.lastName);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
