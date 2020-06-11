# My Important Dates

A practical app combined with express.js backend and React frontend.

## Usage

1. Git clone `git@github.com:chanwkkk/myImportantDates.git`
2. Run `npm run dev` to start the server
3. If the server is on, it will looks like this providing all of the routes that is available currently: 
 
 ```
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node server.js`
    Listening on PORT 5000
    [
      { path: '/', methods: [ 'GET' ] },
      { path: '/users', methods: [ 'GET', 'POST' ] },
      { path: '/users/new', methods: [ 'GET' ] },
      { path: '/users/:id/edit', methods: [ 'GET' ] },
      { path: '/users/:id', methods: [ 'GET', 'POST', 'PUT' ] },
      { path: '/users/:id/events', methods: [ 'GET', 'POST' ] },
      { path: '/users/:id/events/new', methods: [ 'GET' ] },
      { path: '/users/:id/events/:id/edit', methods: [ 'GET' ] },
      {
        path: '/users/:id/events/:id',
        methods: [ 'GET', 'PUT', 'DELETE' ]
      }
    ]
```

## Package

`nodemon` is used to monitor whatever changes is made and will right away update it.

`express-list-endpoints` is used to list all the routes we have so far. Once you run `npm run dev`, you will see all the routes that are currently available. 

## API

### User

The user schema looks like:
```
{
  name: {type: String},
  email: {type: String},
  password: {type: String},
  eventIDs: [{type: String}]
}
```


1. POST /users   
  It is used for creating a user. You have to pass something like this, "name", "email" and "password" are required:
  ```
  {
  "name": "newuser",
  "email": "afdad",
  "password": "pw"
}
  ```
   and will get the new user: 
  ```
  {
    "eventIDs": [],
    "_id": "5ee1bfe3fb5425392695d762",
    "name": "user",
    "email": "afdad",
    "password": "pw", // might change this later
    "__v": 0
  }
  ```
2. GET /users/:id
  It is used for getting information of a certain user. And it will return: 
  ```
  {
    "eventIDs": [],
    "_id": "5ee1bfe3fb5425392695d762",
    "name": "user",
    "email": "afdad",
    "password": "pw", // might change this later
    "__v": 0
  }
  ```
3. PUT /users/:id
  It is used for updating information of a certain user. It will receive an object including any of the following key like this:
  ```
    {
    "eventIDs": [],
    "_id": "5ee1bfe3fb5425392695d762",
    "name": "user",
    "email": "afdad",
    "password": "pw", // might change to exclude this property later
    "__v": 0
  }
  ```  
  And it will return the information of the NEW user, .it will look like: 
  ```
  {
    "eventIDs": [],
    "_id": "5ee1bfe3fb5425392695d762",
    "name": "new_user",
    "email": "afdad",
    "password": "pw", // might change this later
    "__v": 0
  }
  ```
  
### Events API

  The Event Schema looks like:
  ```
  {
  name: {type: String},
  date: {type: Date, default: Date.now},
  ownerId: {type: String},
  description: {type: String},
  joiners: [{joinerID: Number}],
  albumID: {type: Number}
}
  ```

  1. GET /users/:id/events
  It is used for getting all events of a certain user. And it will return an array: 
```
 [
    {
        "_id": "5ee265c21681f4058fa15f1e",
        "name": "new_event4",
        "date": "2020-06-11T17:11:30.099Z",
        "joiners": [],
        "ownerId": "5ee1aa395e99fa23e3d2dc4c",
        "__v": 0
    },
    {
        "_id": "5ee266381681f4058fa15f1f",
        "name": "new_event1",
        "date": "2020-06-11T17:13:28.350Z",
        "joiners": [],
        "ownerId": "5ee1aa395e99fa23e3d2dc4c",
        "__v": 0
    }
 ]
```
  2. POST /users/:id/events/ 
  It is used for creating a user. It will grab the user id from the URL, but you have to provide a name(required). The date is defaulted to be `Date.now`.
  ```
  {
  "name": "new_event",
  }
  ```
   and will get a new Event: 
```
    {
        "_id": "5ee266381681f4058fa15f1f",
        "name": "new_event1",
        "date": "2020-06-11T17:13:28.350Z",
        "joiners": [],
        "ownerId": "5ee1aa395e99fa23e3d2dc4c",
        "__v": 0
    }
```

### User story:

  MVP:

	1. A user is able to create an event that is important and then add information to the event(like images and description). 
  
  2. A user is able to go to event page and see that event is counting down if it hasn't happened yet or will see how far is the next aniversary (options include year or week or month anniversary)

  3. A user is able to edit or delete the event


  Future features: 

    1. A user is able to connect with other users through events, if one user marks another user, and that user agreed to be involved with that event, then the connection is built.

    2. A user can send a reminder through email to other involved users

    3. An event has many albums, belongs to category, belongs to an user

    4. An user can choose which album to share with other users(maybe in different group? First can be only sharable or not)
