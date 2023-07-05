export default defineEventHandler(({ req, res }) => {
  res.writeHead(401)
  res.end('error')
})
