const login = (req, res, next) => {
    try {
        return res.send('testing2222');
    }catch (e) {
        console.log('error', e);
    }
}

const logout = (req, res, next) => {
    try{
        return res.send('testing');
    }catch (e) {
        console.log('error', e);
    }
}

const authController = (req, res, next) => {
    try {
        return res.send('Success');
    }catch (e) {
        console.log('error', e);
    }
}


module.exports = {
    login,
    logout
}