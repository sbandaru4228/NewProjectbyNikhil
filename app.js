// import express from 'express'
// const app=express()
// app.use(express())
// app.use(express.urlencoded({ extended: true }));
// import { getUsers,getUser,createUser } from './database.js'

// app.get("/users", async(req,res)=>
// {
//     const users= await getUsers()
//     res.send(users)
// })

// app.get("/users/:id", async(req,res)=>
// {
//     const id = req.params.id
//     const users= await getUser(id)
//     res.send(users)
// }) 

// app.post("/users", async(req,res)=>
// {
//     const {name, email, phone, password}=req.body
//     const newuser= await createUser(name, email, phone, password)
//     res.status(201).send(newuser)
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })

// app. listen(8080,()=>{
//     console.log('Server is running on port 8080')
// })
import express from 'express';
 import cors from 'cors';
import { getUsers, getUser, createUser,deleteUser, updateUser} from './database.js';

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
    const users = await getUsers();
    res.send(users);
});

app.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = await getUser(id);
    res.send(user);
});

app.delete("/users/:name", async (req, res) => {
    const name = req.params.name;
    await deleteUser(name);
    res.status(204).send(); // Sending a 204 (No Content) status since there's no content to send back after deletion
});

app.post("/users", async (req, res) => {
    const { name, email, phone, password } = req.body;
    const newUser = await createUser(name, email, phone, password);
    res.status(201).send(newUser);
});
app.put("/users/:name",async(req,res)=>{
    const name=req.params.name;
    const {email, phone, password } = req.body;
  const user = await updateUser(name,email, phone, password);
    res.send(user);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
