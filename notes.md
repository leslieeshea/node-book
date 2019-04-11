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
