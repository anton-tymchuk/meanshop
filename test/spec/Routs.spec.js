var frisby = require('frisby');

var URL = 'http://localhost:3000';

describe('Public routes', function () {
    describe('Product Routes', function () {

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

    describe('Orders routes', function () {
        frisby.create('POST order should return 200')
            .post(URL + '/api/orders/new-order', {
                customerInfo: {
                    name: 'test name'
                }
            }, {json: true})
            .expectStatus(200)
        .toss();

        frisby.create('GET all orders should return 403')
            .get(URL + '/api/orders')
            .expectStatus(403)
            .expectJSON({
                success: false,
                message: 'No token provided.'
            })
        .toss();
    });

    describe('User routes', function () {
        frisby.create('Get all users should return 403')
            .get(URL + '/api/user')
            .expectStatus(403)
            .expectJSON({
                success: false,
                message: 'No token provided.'
            })
        .toss();
    });

});

describe('Authenticated routes', function () {
    frisby.globalSetup({
      request: {
        headers: { 'x-access-token': 'fa8426a0-8eaf-4d22-8e13-7c1b16a9370c' }
      }
    });

    describe('Product routes', function () {
        frisby.create('POST product Authenticated should return 200')
            .post(URL + '/api/products/addproduct', {
                sku: '1234'
            }, {json: true})
            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
        .toss();
    });

    describe('Order Routes', function () {
        frisby.create('GET all orders Authenticated should return 200')
            .get(URL + '/api/orders')
            .expectStatus(200)
        .toss();
    });

    describe('User routes', function () {
        frisby.create('Get all users should return 200')
            .get(URL + '/api/user')
            .expectStatus(200)
        .toss();
    });

});
