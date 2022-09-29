
const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
const cors = require("cors")

app.use(cors);

app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api')
});
  
app.listen(PORT, () => {
   console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/usersDB'

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        password:{
            type: String
        },
        username:{
            type: String
        },
        id:{
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
)

const usuarios = new mongoose.model('usuarios', userSchema)


// Insertar usuario



app.post('/api/register', async (req, res) =>{
   const { name, username, password } = req.body
   
   const user = new usuarios({
    name: name,
    password: password,
    username: username
   })

    user.save().then(result => {
    console.log('usuario registrado!')
  })
});




