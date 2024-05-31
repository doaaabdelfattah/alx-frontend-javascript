import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()]).then((value) => {
    console.log(value[1].body, value[0].firstName, value[0].lastName);
  }).catch(() => console.log('Signup system offline'));
}
