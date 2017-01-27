![Header Logo][header-logo]
___
<h1 align="center">EMPIRE CO API (Front-End)</h1>

Empire Co. is an online retailer set in the Star Wars universe where it provides every Storm-Trooper in the empire a modern user shopping experience through a speedy Single Page Application (SPA). Empire Co. specializes in the distribution of armor and weaponry, and features a catalog of products, shopping cart and checkout functionality.

## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Motivation

Empire Co. was created because of shared our interest in developing the necassary skills required to create a modern web store. These skills can potentially open us to strategic roles with client retailers both large and independent.

## Development / Installation setup

The following commands are assuming you already have node installed on your machine. If you dont you can download Node.js [here][nodejs].

Some dependencies used in the api and what they are being used for in the app.

<details>
  <summary>
    [morgan]
  </summary>
  <br>
  ```js
  var logger = require('morgan');
  app.use(logger('dev'));

  //Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

  // CONSOLE.LOG: :method :url :status :response-time ms - :res[content-length]

  // EXAMPLE: GET /api 200 6.823 ms - 43
  ```
</details>
<details>
  <summary>
    [passport-local-mongoose]
  </summary>
  <br>
  ```js
  var passportLocalMongoose = require('passport-local-mongoose');
  UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

  // Plugin Passport-Local Mongoose into your User schema
  // Use options to specify an alternative usernameField
  ```
</details>

---
OS X & Linux:

```sh
# install app dependencies
$ npm install
```
```sh
# create database and seed locally
$ node db/seed.js
```
```sh
# start server
$ nodemon
```
If there are no errors in the terminal, we can now navigate in our browser to: http://localhost:8080/api to interact with our app.

## Useage

Here is documentation on accessing our api.

| URL(s) | / | /login | /logout | /products | /products/:id | /users | /users/:id |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Method(s)** | `GET` | `POST` | `POST` | `GET` `POST` | `GET` `PUT` `DELETE` | `GET` `POST` | `GET` `PUT` `DELETE` |
| **Success Response** | | | | | | | |
| **Error Response** | | | | | | | | |

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.


## Contributors

Feel free to refactor, update, or add new features. Have any questions, ask one of the contributors below!

| Clifton Hutchins | Dara Hoy | Alyssa Felix |
|:----------------:|:--------:|:------------:|
| ![Cliff](https://avatars3.githubusercontent.com/u/22736325?v=3&s=100) | ![Dara](https://avatars1.githubusercontent.com/u/23284333?v=3&s=100) | ![Alyssa](https://avatars0.githubusercontent.com/u/22528201?v=3&s=100)
| ![][github-logo]  [cliftonh02](https://github.com/cliftonh02) | ![][github-logo]  [DaraHoy](https://github.com/DaraHoy) | ![][github-logo] [awanderlyss](https://github.com/awanderlyss) |


[github-logo]: http://cdn.shopify.com/s/files/1/0051/4802/t/72/assets/favicon.ico?1744047789295863037
[header-logo]: http://ee-emma.s3.amazonaws.com/ee-product-images/68861/swse_header.png
[morgan]: https://github.com/expressjs/morgan
[nodejs]: https://nodejs.org/en/download/package-manager/#osx
[passport-local-mongoose]: https://github.com/saintedlama/passport-local-mongoose
