export function checkToken(req: any, res: any, ctx: any) {
  const token = req.headers.get('Authorization')
  if (!token) {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Not authorized'
      })
    )
  }
}
