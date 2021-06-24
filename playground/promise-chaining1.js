require("../src/db/mongoose")

const User = require("../src/models/user")

const findAndUpdate = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count;
}

findAndUpdate("6083f5c9f1de337578a56d20", 10).then((results) => {
    console.log(results)
}).catch((error) => {
    console.log(error);
})
