import express from "express";
import { connection } from "../database.js";

const app = express();
app.use(express.json());

//============= Cara 1 menggunakan Database mariaDB =====================
// // get all mahasiswa
// app.get("/mahasiswa", async(_req,res)=>{
//     const result = await connection.query("SELECT * FROM mahasiswa");
//     res.json(result);
// })

// // Add mahasiswa
// app.post("/api/mahasiswa", async (req,res)=>{
//     await connection.query(
//         "INSERT INTO mahasiswa (id,nama,jurusan) VALUES (?,?,?)",
//         [req.body.id,req.body.nama,req.body.jurusan]
//     )
//     res.send("mahasiswa berhasil di tambahkan");
// })

// // edit mahasiswa
// app.put("/api/mahasiswa/:id", async (req,res)=>{
//     await connection.query
//     ("UPDATE mahasiswa SET nama =?, jurusan = ? WHERE id=?",
//         [req.body.nama, req.body.jurusan, req.params.id]);
//     res.send("mahasiswa berhasil di edit");
// });

// // delete mahasiswa
// app.delete("/api/mahasiswa/:id", async (req,res)=>{
//     await connection.query("DELETE FROM mahasiswa WHERE id=?",
//         [req.params.id]);
//         res.send("mahasiswa berhasil di hapus");
// })


//============= Cara 2 menggunakan Database postgres =====================
// get all mahasiswa
app.get("/mahasiswa", async(_req,res)=>{
    const result = await connection.query("SELECT * FROM mahasiswa");
    res.json(result);
})

// Add mahasiswa
app.post("/api/mahasiswa", async (req,res)=>{
    await connection.query(
        "INSERT INTO mahasiswa (id,nama,jurusan) VALUES ($1,$2,$3)",
        [req.body.id,req.body.nama,req.body.jurusan]
    )
    res.send("mahasiswa berhasil di tambahkan");
})

// edit mahasiswa
app.put("/api/mahasiswa/:id", async (req,res)=>{
    await connection.query
    ("UPDATE mahasiswa SET nama =$1, jurusan = $2 WHERE id=$3",
        [req.body.nama, req.body.jurusan, req.params.id]);
    res.send("mahasiswa berhasil di edit");
});

// delete mahasiswa
app.delete("/api/mahasiswa/:id", async (req,res)=>{
    await connection.query("DELETE FROM mahasiswa WHERE id=$1",
        [req.params.id]);
        res.send("mahasiswa berhasil di hapus");
})


app.listen(3000,()=>{
        console.log("Server telah berjalan di port 3000");
    })
    
