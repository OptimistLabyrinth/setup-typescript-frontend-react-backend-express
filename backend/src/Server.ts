import dotenv from 'dotenv'
import debug from 'debug'
import http from 'http'
import App from './App'
dotenv.config()

const port = normalizePort(process.env.PORT, 4000)
App.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(App)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, '0.0.0.0', () => {
  console.log(`Express Server is listening http://0.0.0.0:${port}/`);
})
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number.
 */
function normalizePort(val: string | undefined, defaultPort: number) {
  if (!val) {
    return defaultPort
  }
  const port = parseInt(val, 10)
  if (!isNaN(port) && 0 < port && port <= 65535) {
    return port
  }
  return defaultPort
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1)
      break;
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address()!
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}
