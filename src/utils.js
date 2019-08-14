const { verify } = require("jsonwebtoken");

const APP_SECRET =
  "eecc262c3bfc2323f166994f90fd2b3301443c9e65b4efa29c165fa949d970d5";

class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

function getUserId(context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, APP_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
}

module.exports = {
  getUserId,
  APP_SECRET
};
