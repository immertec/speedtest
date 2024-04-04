class Headers {
  constructor(headers = {}) {
    this.headers = headers;
  }

  set(name, value) {
    this.headers[name] = value;
  }

  get(name) {
    return this.headers[name];
  }

  // define get
}

class Response {
  constructor(body = '', init = {}) {
    this.body = body;
    this.status = init.status || 200;
    this.statusText = init.statusText || 'OK';
    this.headers = new Headers(init.headers);
  }

  text() {
    return Promise.resolve(this.body);
  }

  json() {
    return Promise.resolve(JSON.parse(this.body));
  }
}

module.exports = Response;
