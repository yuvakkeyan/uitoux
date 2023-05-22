var checkRole = (role) => {
        return((req, res, next)=>{

            if(!role.includes(req.role)){
                res.status(403).send("Unauthorised");
                return;
            }

            next();
        })
}


module.exports = checkRole;