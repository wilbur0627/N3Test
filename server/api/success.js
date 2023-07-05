export default defineEventHandler(({ req, res }) => {
  res.writeHead(200)
  res.end('success')
})
