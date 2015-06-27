var frisby = require('frisby');

var URL = 'http://localhost:3000';

describe('Product Routs Public', function () {

    frisby.create('GET JSON data from single product')
        .get(URL + '/api/products/99823')
        .expectStatus(200)
        .expectJSON({
          '_id': String
        })
    .toss();

    frisby.create('GET JSON data from all products')
        .get(URL + '/api/products/')
        .expectStatus(200)
        .expectJSON('*', {
            '_id': String
        })
    .toss();

    frisby.create('POST product non authenticate shoud return 403 status')
        .post(URL + '/api/products/addproduct', {
            sku: '1234'
        }, {json: true})
        .expectStatus(403)
    .toss();
});

describe('Product Routs authenticated', function () {
    frisby.globalSetup({ // globalSetup is for ALL requests
      request: {
        headers: { 'x-access-token': 'fa8426a0-8eaf-4d22-8e13-7c1b16a9370c' }
      }
    });

    frisby.create('POST product')
        .post(URL + '/api/products/addproduct', {
            sku: '1234'
        }, {json: true})
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
    .toss();
});
