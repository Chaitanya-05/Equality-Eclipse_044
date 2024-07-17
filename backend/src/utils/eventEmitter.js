const EventEmitter = require('events');
class BookstoreEventEmitter extends EventEmitter{}
const bookstoreEvents = new BookstoreEventEmitter();
module.exports = bookstoreEvents;