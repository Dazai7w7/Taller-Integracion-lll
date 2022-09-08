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
usuarios.create(
    {
        name: 'andrew',
        username: 'andrew2009',
        password: '12334435'
    }
)


