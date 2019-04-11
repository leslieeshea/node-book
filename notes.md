# Node.js Tutorial
* Example:
`const result = database.query('SELECT * FROM hugetable');`
`console.log('Hello World');`
* If the database query is really slow, JS would have to read the complete result set from the database, and then it can execute the console.log.
* With event-driven, asynchronous callbacks and the event loop, you would pass a second parameter (aka the anonymous function).
* Example:
`database.query('SELECT * FROM hugetable', function(rows) {`
  `const result = rows;`
`});`
`console.log('Hello World');`
* Node.js would take the query and send it to the database, but instead of waiting for it to finish, it makes a mental note that says, "When at some point in the future the database server is done and sends the results of the query, then I have to execute the anonymous function that was passed to  `database.query()`.
* It immediately executes `console.log()`, and afterwards, it enters the event loop.
* Node.js continuously cycles through this loop again and again whenever there is nothing else to do, waiting for events.
* You will receive TWO "Request received" messages because one is for the favicon and one is for the page load.

## Routing Requests
* We need to be able to feed the requested URL and possible additional GET and POST parameters into our router, and based on these the router then needs to be able to decide which code to execute.
* The url module provides methods which allow us to extract the different parts of a URL, and querystring can be used to parse the query string for request parameters.
* Once you can distinguish requests based on the URL path requested, this allows us to map requests to our request handlers based on the URL path using our router.
* The router is not the place to "do" something with requests, because that wouldn't scale well once an app becomes more complex.
* Handling requests = answering requests.
* Whenever expensive operations must be executed, these must be put in the background, and their events must be handled by the event loop.
