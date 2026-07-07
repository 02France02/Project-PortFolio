import express from "express";          // 1.
import "express-async-errors";          // 2.
import dotenv from "dotenv";            // 3.
import morgan from "morgan";            // 4.
import cors from "cors";                // 5.
import multer from "multer";            // Per le immagini
import path from "path";                // Per la gestione dei percorsi
import { getUsers, getUserByUsername, registerUsers, loginUsers, deleteUser, createImage } from "./controllers/users.js";

dotenv.config();                        // 1.
const app = express();                  // 2.
app.use(morgan("dev"));                 // 3.
app.use(express.json());                // 4.
app.use(cors());                        // 5. Permette il collegamento con il front-end ed il backend, per far chiamate su un altro endpoint
const port = process.env.PORT || 4000;  // 6. Porta di accesso al localhost



// Funzione per upload di immagini con verifica del tipo e dimensione del file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Aggiungo timestamp per evitare sovrascritture
  },
});

// filtra le immagini in entrata
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  
  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb(new Error("File type not allowed"), false);
  }
};

const upload = multer({ 
  storage, 
  fileFilter, // Filtro per le sole immagini
  limits: { fileSize: 1080 * 1080 * 2 } // Limite di 2MB
});

// Creiamo gli END_POINT a cui connetterci
// Ottengo tutti gli Users
app.get("/users", getUsers);
// Ottengo l'user dall'username  
app.get("/users/:username", getUserByUsername);
app.post("/users/register", registerUsers); // Unisco la logica del caricamento immagine e registrazione utente
app.post("/users/register/image", upload.single("image"), createImage); 
app.post("/users/login", loginUsers);
app.delete("/users/delete", deleteUser);

// Middleware per gestire errori multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({ error: err.message });
  } else if (err) {
    res.status(500).json({ error: err.message });
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
