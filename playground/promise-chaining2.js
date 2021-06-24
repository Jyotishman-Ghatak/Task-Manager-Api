require("../src/db/mongoose")
const { findByIdAndDelete } = require("../src/models/task");
const Task = require("../src/models/task")

// Task.findByIdAndDelete("608403b06ae5b9271556286b").then(() => {
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e);
// })

const deleteAndCount = async (id) => {
    const deletedUser = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: true });
    return count;
}

deleteAndCount("6084043df4c347e100df0fdb").then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
