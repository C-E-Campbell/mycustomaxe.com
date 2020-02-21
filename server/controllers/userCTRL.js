module.exports = {
    register: (req,res,next) => {
        res.status(200).json({status: successful, message: user is registered});
    },
    login: (req,res,next) => {
        res.status(200).json({status: successful, message: user is loggedin});
    }
}