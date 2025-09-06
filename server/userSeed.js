import User from './models/User.js'
import bcrypt from 'bcrypt'
import connectToDatabase from './db/db.js'


const userRegister = async() =>{
    const saltRounds = 10;
    connectToDatabase()
    try {
        const hashPassword = await bcrypt.hash("admin",saltRounds)
        const newUser = new User({
            name:"Admin",
            email:"admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })

        await newUser.save()

    } catch(error){
        console.log(error)
    }
}

userRegister();