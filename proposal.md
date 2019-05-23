# ECMAScript proposal: ETL API for JavaScript
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

You can have the ability to build ETL process, which allows you transfer and process data to the localStorage or to a created array. You can use a part of a pipeline funtionality in JS to make the way of retrieving and saving data more comfortable. These methods are lazily evaluated to avoid intermediate calculations when it's not necessary.

## High-level API

```js

const friends = [
  {"id": 1, "gender": "M", "first": "Vlad", "last": "Ivanov", "city": "Moscow", "country": "Russia"},
  {"id": 2, "gender": "M", "first": "Alex", "last": "Petrov", "city": "Saint-Petersburg", "country": "Russia"},
  {"id": 3, "gender": "M", "first": "Darsy", "last": "Zelt", "city": "Los-Angeles", "country": "USA"},
  {"id": 4, "gender": "F", "first": "Olga", "last": "Orlova", "city": "Ufa", "country": "Russia"} 
]; // Initialize the array

/* Make simple queries */
friends.where({"last": "Ivanov"}); // Find by whole last name

friends.where({"last": "Ivanov", "first": "Alex"}); // Find by first and last name

friends.like({"last": "Ze"}); // Find by a part of last name

friends.distinct("country"); // Get an array of distinct countries

friends.where({"gender": "M"}).first(); // Get first result from selection

/* Make CRUD operations */
friends.where({"last": "Ivanov"}).update({"city":"Saint-Petersburg"}); // Update data

friends.insert({"id": 5, "gender": "M", "first": "Nikolay", "last": "Basin", "city": "Washington", "country": "USA"}); // Insert a row

friends.removeRow({"id": 5}); // Remove a row

const newFriends = [
  {"id": 6, "gender": "M", "first": "Ivan", "last": "Ivanov-Petrov", "city": "Moscow", "country": "Russia"},
  {"id": 7, "gender": "M", "first": "Petr", "last": "Petrov-Ivanov", "city": "Saint-Petersburg", "country": "Russia"},
  {"id": 8, "gender": "M", "first": "John", "last": "Rhom", "city": "Los-Angeles", "country": "USA"},
  {"id": 9, "gender": "F", "first": "Irina", "last": "Orlova", "city": "Ufa", "country": "Russia"} 
]; // Initialize new array

friends.merge(newFriends); // Merge two (or more) arrays into "friends" array


/* Work with localStorage */
friends.persist(); // Save in the localStorage with hash key (e. g. "767tgjbg868g")
/* In the localStorage:
     Key       |      value
"767tgjbg868g" | {
                  "name": "friends",
                  "dateTime": 1558452419340,
                  "data": [
                  {"id": 1, "gender": "M", "first": "Vlad", "last": "Ivanov", "city": "Moscow", "country": "Russia"},
                  {"id": 2, "gender": "M", "first": "Alex", "last": "Petrov", "city": "Saint-Petersburg", "country": "Russia"},
                  {"id": 3, "gender": "M", "first": "Darsy", "last": "Zelt", "city": "Los-Angeles", "country": "USA"},
                  {"id": 4, "gender": "F", "first": "Olga", "last": "Orlova", "city": "Ufa", "country": "Russia"} 
                ]
              }
*/

friends.persist("lovelyFriends"); // Save in the localStorage with hash key (e. g. "767tgjbg868g") and with name "lovelyFriends"
/* In the localStorage:
     Key       |      value
"767tgjbg868g" | {
                  "name": "lovelyFriends",
                  "dateTime": 1558452419340,
                  "data": [
                  {"id": 1, "gender": "M", "first": "Vlad", "last": "Ivanov", "city": "Moscow", "country": "Russia"},
                  {"id": 2, "gender": "M", "first": "Alex", "last": "Petrov", "city": "Saint-Petersburg", "country": "Russia"},
                  {"id": 3, "gender": "M", "first": "Darsy", "last": "Zelt", "city": "Los-Angeles", "country": "USA"},
                  {"id": 4, "gender": "F", "first": "Olga", "last": "Orlova", "city": "Ufa", "country": "Russia"} 
                ]
              }
*/

getFromLocalStorage({"name": "friends"}); // Get all results from localStorage with name "friends"

const superFriends = getFromLocalStorage({"name": "friends"}).lastByTime(); // Get last in time result from localStorage with name "friends"

superFriends.removeFromLocalStorage(); // Remove from the localStorage


/* Make chaining */
friends.where({"gender": "M"})
       .distinct("country")
       .persist("countries")
       .collect(); // Terminate a chaining with the method 'collect()'
       
       
/* Support promises */
load("http://some-example-fruits.com") // Get selected data from promise
    .where({name: "apple"})
    .like({color: "red"})
    .catch(e => console.error(e))
    .collect();
  
```

### FAQ
#### Does this syntax support all database operations?

No, some of operations aren't supported because of their uselessness in this context (e. g. inner join or outer join).
