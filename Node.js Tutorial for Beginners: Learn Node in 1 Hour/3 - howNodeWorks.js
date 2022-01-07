// how node works

// node apps are highly-scalable, data-intensive.

// this is because of the asynchronous, NON-blocking nature of node

// a good metaphor for asynchronous, non-blocking code is a restaurant

// a single thread in node is able to handle multiple requests, similar to a chef that cooks for multiple people in a restaurant and that waiters continue to go around and take other orders at the same time

// on the other hand, a good metaphor for BLOCKING, synchronous code is another restaurant example

// in this example, however, the waiter at this restaurant takes your order and gives it to the chef to cook it. but, in this case, the waiter stays in the kitchen until the chef is done cooking the order the waiter just brought them, INSTEAD of the waiter going around to the other tables to take their orders, too. this is happening because the waiter is 'blocked' by the chef cooking one order at a time. and the 'waiter' is just waiting and won't take an order from another table until your order is ready

// when we receive a request on the server, a thread is allocated to handle that request.

// as part of handling the request, it's likely that we will query a database. sometimes, that may take a while until the result is ready.

// while this database is executing this query, the thread is sitting there, waiting. can't be used to serve another client until it finishes with it's request.

// we would need another thread to server another client. at some point, you will run out of threads to serve those clients.

// the additional clients would have to wait, or we would need to add more hardware to support the load

// this is the problem with BLOCKING, SYNCRHONOUS architecture. this is how things such as ASP.NET works. it is possible to use ASYNC in ASP.NET, but you will have to do extra work for that

// in contrast, node apps are asynchronous by DEFAULT

// in node, you have a SINGLE thread that handles ALL requests

// we don't have to wait for the DB query to finish for User 1 in order to take User 2's DB request. when the DB queries finish, a message is 'placed' in the EVENT QUEUE.

// node is continuously monitoring the EVENT QUEUE in the background.

// when it finds an event in this queue, it will take it out and process it.

// this architecture makes node IDEAL for apps that have a lot of disk or network access. we can serve more clients without the need to build or support more hardware

// that's why noode apps are highly scalable.

// BUT, node SHOULD NOT BE USED FOR CPU-INTENSIVE APPS, like video encoding or an image-manipulation service

// those kind of apps, there are a lot of calculations done by a CPU, but few file operations or operations that touch the network

// lets install node and build something!
