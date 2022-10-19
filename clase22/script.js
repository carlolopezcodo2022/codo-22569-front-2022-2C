/*
axios.interceptors.request.use(function (config) {
    console.log('request interceptor');
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
*/

function findUsers() {
    //resuelve
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => console.log(data));
}

async function findUsersAsync(){
    //invoca a otra que retorna un Promise
    return fetch('https://reqres.in/api/users');
}

async function invoke() {
    const users = await findUsersAsync();
    
    const promise = users.json();

    promise.then(data => console.log(data))
}

async function findUsersAsyncAxios() {
    try {
        const response = await axios.get('https://reqres.in/api/users',
		{
			headers: {
				'PEPE': 'VALOR PEPE',
				'JOSE': "VALOR JOSE"
			}
		});
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}

async function unknown() {
    axios.get('https://reqres.in/api/unknown/23')
    .catch(function (error) {
        debugger;
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}
//invocar
//findUsers();
//invoke();
findUsersAsyncAxios();
//unknown();