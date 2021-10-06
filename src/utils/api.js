import Storage from './storage';

class Api {
  static async headers() {
    let token = await Storage.retrieveData('@token')
    if (token) {
      return {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`
      };
    }
    return {
      'Content-Type': 'application/json',
    };
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static async xhr(route, params, verb) {
    const host = 'http://54.144.155.145/';
    const url = `${host}${route}`;
    let options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null,
    );
    options.headers = await Api.headers();
    // options.body.replace(/[\%]/g, "");
    console.log(params, options, 'options');
    return fetch(url, options)
      .then(resp => {
        console.log(resp, 'response in api');
        let json = resp.json();
        if (resp.ok) {
          return json;
        }
        return json.then(err => {
          throw err;
        });
      })
  }
}
export default Api;
