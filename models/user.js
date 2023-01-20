const mongoose= require('mongoose')


mongoose.set("strictQuery", false);

// export default  URL ="mongodb+srv://AndresMartinez:andres10062003@e-commerce.ejqa4yi.mongodb.net/?retryWrites=true&w=majority"
module.exports= URL ="mongodb+srv://AndresMartinez:andres10062003@e-commerce.ejqa4yi.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URL, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("🔥 Conectado a la base de datos de mongo");
  }
});

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
