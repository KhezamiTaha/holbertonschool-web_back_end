export default function getFullResponseFromAPI(success) {
  return new Promise((reso, rejo) => {
    if (success) {
      reso({ status: 200, body: 'Success' });
    } else {
      rejo(new Error('The fake API is not working currently'));
    }
  });
}
