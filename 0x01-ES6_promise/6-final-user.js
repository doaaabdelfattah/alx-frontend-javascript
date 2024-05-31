import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const arr = [];
    for (const i of results) {
      arr.push(
        {
          status: i.status,
          value: i.value || i.reason,
        },
      );
    }
    return arr;
  });
}
