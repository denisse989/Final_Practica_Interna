import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port:3307,
  password: "domoen2020",
  database: "expresiones",
  insecureAuth : true,
});


app.get("/", (req, res) => {
  const q = "SELECT * FROM oraciones ORDER BY RAND() LIMIT 1";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/votos2/:codigo", (req, res) => {
  const votosId = req.params.codigo;
  const q = "SELECT * FROM votos WHERE codigo = ?";
  db.query(q, [votosId],(err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
app.get("/votos", (req, res) => {
  const votosId = req.params.codigo;
  const q = "SELECT * FROM votos ";/*WHERE codigo = ?*/
  db.query(q, /*[votosId],*/(err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/votos1", (req, res) => {
  const q = "INSERT INTO votos(`codigo_expresiones`, `respuesta_racista`, `respuesta_machista`, `respuesta_ofensiva`, `respuesta_no_ofensiva`) VALUES (?)";

  const values = [
    req.body.codigo_expresiones,
    req.body.respuesta_racista,
    req.body.respuesta_machista,
    req.body.respuesta_ofensiva,
    req.body.respuesta_no_ofensiva,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/:codigo", (req, res) => {
  const oracionesId = req.params.codigo;
  const q = " DELETE FROM oraciones WHERE codigo = ? ";

  db.query(q, [oracionesId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/votos/:codigo", (req, res) => {
  const oracionesId = req.params.codigo;
  const q = "UPDATE votos SET `respuesta_racista`= ?, `respuesta_machista`= ?, `respuesta_ofensiva`= ?, `respuesta_no_ofensiva`= ? WHERE codigo = ?";

  const values = [
    req.body.respuesta_racista,
    req.body.respuesta_machista,
    req.body.respuesta_ofensiva,
    req.body.respuesta_no_ofensiva,
  ];

  db.query(q, [...values,oracionesId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.listen(8800, () => {
  console.log("Connected to backend.");
});