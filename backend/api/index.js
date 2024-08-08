import express from "express";
import { connection } from "../database.js";

const app = express();

app.use(express.json());


// get all mahasiswa
app.get("/mahasiswa", async(_req,res)=>{
    const result = await connection.query("SELECT * FROM mahasiswa");
    res.json(result);
})


// Add mahasiswa
app.post("/api/mahasiswa", async (req,res)=>{
    await connection.execute(
        "INSERT INTO mahasiswa (id,nama,jurusan) VALUES (?,?,?)",
        [req.body.id,req.body.nama,req.body.jurusan]
    )
    res.send("mahasiswa berhasil di tambahkan");
})

    app.listen(3000,()=>{
        console.log("Server telah berjalan di port 3000");
    })
    
