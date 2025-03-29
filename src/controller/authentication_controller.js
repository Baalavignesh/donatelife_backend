let RegisterUser = async (req, res) => {
    let userData = req.body;
    console.log(userData);
    // implementing mongodb connection
    res.status(200).json({ message: "User registered successfully" });
}

let LoginUser = async (req, res) => {   
    let userData = req.body;
    console.log(userData);
    res.status(200).json({ message: "User logged in successfully" });
}

module.exports = { RegisterUser, LoginUser };  