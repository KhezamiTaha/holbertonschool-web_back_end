import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise).then((result) => {
  console.log(result); // Logs: { status: 200, body: 'success' }
});

