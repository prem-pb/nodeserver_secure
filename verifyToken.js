import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req?.headers?.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "collo", (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};

export {
    verifyToken
}