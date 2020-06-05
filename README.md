# My Important Dates

A practical app combined with express.js backend and React frontend.

## Usage

```
1. Git clone `git@github.com:chanwkkk/myImportantDates.git`
2. Run `npm run dev` to start the server
```

## Package

`nodemon` is used to monitor whatever changes is made and will right away update it.
`express-list-endpoints` is used to list all the routes we have so far. Once you run `npm run dev`, you will see all the routes that are currently available. 


### User story:

  MVP:
	1. A user is able to create an event that is important and then add information to the event(like images and description). 
	2. A user is able to go to event page and see that event is counting down if it hasn't happened yet or will see how far is the next aniversary (options include year or week or month anniversary)
  3. A user is able to edit or delete the event


  Future features: 
    1.A user is able to connect with other users through events, if one user marks another user, and that user agreed to be involved with that event, then the connection is built.
    2. A user can send a reminder through email to other involved users
    3. An event has many albums, belongs to category, belongs to an user
    4. An user can choose which album to share with other users(maybe in different group? First can be only sharable or not)
