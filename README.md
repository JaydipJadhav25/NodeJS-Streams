# NodeJS-Streams
A stream is an abstract interface for working with streaming data in Node.js. The node:stream module provides an API for implementing the stream interface.

There are many stream objects provided by Node.js. For instance, a request to an HTTP server and process.stdout are both stream instances.

To access the node:stream :

const stream = require('node:stream'); 
import stream from "node:stream"

Types of streams#
There are four fundamental stream types within Node.js:

Writable: streams to which data can be written (for example, fs.createWriteStream()).
Readable: streams from which data can be read (for example, fs.createReadStream()).
Duplex: streams that are both Readable and Writable (for example, net.Socket).
Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).




#using streams it is passed in Header : 
Transfer-Encoding:  chunked 
Chunked transfer encoding is a streaming data transfer mechanism available in Hypertext Transfer Protocol (HTTP) version 1.1, defined in RFC 9112 §7.1. In chunked transfer encoding, the data stream is divided into a series of non-overlapping "chunks". The chunks are sent out and received independently of one another.

Installation & setup :

Run npm install express-status-monitor --save
Before any other middleware or router add following line: app.use(require('express-status-monitor')());
Run server and go to /status
