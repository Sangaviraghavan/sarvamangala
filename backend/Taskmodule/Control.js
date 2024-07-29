const Count = require("../Schemamodule/Count.js");


const postmethod = async (req, res) => {
    try {
        let user = await Count.findOne();

        if (!user) {
            user = new Count();
        }

        user.count++;
        await user.save();

        res.status(200).json({
            message: "Successfully updated new count",
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Invalid request error",
        });
    }
};

const getmethod = async (req, res) => {
    try {
        const users = await Count.find({});

        res.status(200).json({
            message: "Successfully retrieved counts",
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Invalid request error",
        });
    }
};

module.exports ={postmethod,getmethod}