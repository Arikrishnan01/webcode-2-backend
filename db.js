// const mongoose = require('mongoose');

// const url = "mongodb+srv://ari:<hF8kQAGMFbfCKr7D>@cluster0.4hkvjxy.mongodb.net/stackoverflow?retryWrites=true&w=majority"

// module.exports.connect = () => {
//     mongoose.connect(url).then((res) => console.log("MongoDB Connected"))
//     .catch((err) => console.log("Error :",err))
// }

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

/**
 * CONNECT WITH THE DATABASE
 */
async function connectdb(){
     await mongoose.connect(
        "mongodb+srv://ari:hF8kQAGMFbfCKr7D@cluster0.4hkvjxy.mongodb.net/stackoverflow?retryWrites=true&w=majority",
        { useNewUrlParser: true}
    )
    console.log("DB CONNECTED");
}
connectdb();