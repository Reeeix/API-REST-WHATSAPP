const mongoose = require('mongoose');
const User = require('../../api/models/users.js');
const usersArray = require('../../data/users.js');
require("dotenv").config()


mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Conectado a la DB");

    const allUsers = await User.find();
    console.log(`Usuarios encontrados: ${allUsers.length}`);

    if (allUsers.length) {
      await User.collection.drop();
      console.log("🗑️ Colección users eliminada");
    }
  })
  .then(async () => {
    await User.insertMany(usersArray);
    console.log("Usuarios insertadas correctamente");
  })
  .catch((err) => console.log("❌ Error:", err))
  .finally(() => {
    mongoose.disconnect();
    console.log("🔌 Desconectado de la DB");
  });
