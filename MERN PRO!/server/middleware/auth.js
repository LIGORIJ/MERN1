import jwt from "jsonwebtoken";

export const verifytoken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      res.status(403).json("Access Denied");
    }
    //everything after bearer with a space(7)
    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length).trimleft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    //next one will perceive for the next step//
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
