
export const protect = (roles) => (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.unautorized();
    }
}