import jwt from 'jsonwebtoken'

const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    const token = authHeader.split(' ')[1]
    let payload
    if (token) {
      try {
        payload = jwt.verify(token, 'secret-key')
        next()
      } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
          return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          })
        }
        console.log(err)
        return res.status(400).end()
      }
    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}

export default isAuth