import bcrypt from "bcrypt"; // 1. Decripta la password per effettuare il confronto con quella del front-end
import jwt from "jsonwebtoken"; // 2. Pacchetto per generare un token per cryptare la pass
import { db } from "../db.js"; // 3. database alla quale fare riferimento

// Funzione per ottenere tutti gli users
const getUsers = (req, res) => {
  db.query(`SELECT * FROM users`, (err, results) => {
    // Errore nel caso non trovi il database
    if (err) {
      res.status(404).json({ msg: "Database not found." });
      return;
    }
    res.status(200).json(results);
  });
};

// Funzione per ottenere solo lo user dallo username
const getUserByUsername = (req, res) => {
  const { username } = req.params;
  db.query(`SELECT * FROM users WHERE username=?`, username, (err, results) => {
    if (err) {
      res.status(404).json({ msg: "User not found!" });
      return;
    }
    res.status(200).json(results);
  });
};

// Funz per registrare gli users,
// async, await, perchè andrà a interrogare il database
const registerUsers = async (req, res) => {
  const dataUser = req.body; // 1. Prendiamoci tutti i dati ricevuti
  console.log(dataUser); // Debug
  const cryptPassword = await bcrypt.hash(dataUser.password, 10); // 2. Crypta la pass in un token con bcrypt, 10 sta per la complessità del token
  const roleId = 2; // 3. Il ruolo che avrà dentro il sito
  const user = {
    // 4. Oggetto user da inviare al database
    username: dataUser.username,
    firstName: dataUser.firstName,
    lastName: dataUser.lastName,
    email: dataUser.email,
    password: cryptPassword,
    role_id: roleId,
  };

  // 5. Creazione di una query per assegnare lo user
  // Stiamo estraendo direttamente l'ID per i, token, non si usano i template literal per evitare attacchi
  const { id } = db.query(
    `INSERT INTO users SET ? RETURNING id`,
    user,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(400).json({ msg: "Email or username already in use" });
        return;
      }

      const secretKey = process.env.SECRET_KEY;
      jwt.sign({ id }, secretKey, { expiresIn: "24h" }, (err, token) => {
        // 6. Generazione di un token da assegnare all'ID con JWT
        if (err) {
          console.error(err);
          return res.status(500).json({
            msg: "An error has occured during token signature",
          });
        }

        // 7. Risposta positiva con l'obj user senza password
        res.status(201).json({
          user: { ...user, password: undefined },
          token,
          msg: "Registration successful!",
        });
      });
    }
  );
};

// 8. Funz per Loggare gli Users
const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  // 9. Query per trovare l'user tramite email
  db.query(
    `SELECT * FROM users WHERE email=?`,
    email,
    async (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ msg: "Database error" });
      }

      // 9. Prende l'user dalla query
      const dbUser = result[0];

      // 10. Check se esiste l'user ed il confronto con la password normale e la password cryptata
      if (dbUser && (await bcrypt.compare(password, dbUser.password))) {
        // 11. Crea un oggetto con id e email da associare al token
        const payload = {
          id: dbUser.id,
          email: dbUser.email,
        };
        const { SECRET_KEY = "" } = process.env;

        // 12. Crea token per fare login associato all'email
        const token = jwt.sign(
          payload,
          SECRET_KEY,
          { expiresIn: "24h" },
          (err, token) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                msg: "An error has occured during token signature",
              });
            }

            // 13. Oggetto da inviare come risposta
            // Lo si fa per sicurezza
            const user = {
              id: dbUser.id,
              email: dbUser.email,
              firstName: dbUser.firstname,
              lastName: dbUser.lastname,
              username: dbUser.username,
            };

            // 14. Invio effettivo della risposta con obj, e token
            res.status(200).json({
              user,
              token,
              msg: "Login procedure successful!",
            });
          }
        );
        console.log(token);

        // La funzione login dovrebbe restituire solo il token JWT all'utente e non salvare il token nel database, in quanto non è necessario per l'autenticazione con JWT e può introdurre potenziali vulnerabilità.
        // Salvare il token nel database significa memorizzare informazioni sensibili. Se un malintenzionato accede al database, potrebbe rubare i token e impersonare gli utenti.
        // L'utente dovrà quindi memorizzare il token in modo sicuro (ad esempio, in un cookie HTTP protetto o nella memoria locale del browser con localStorage).
      } else {
        res.status(401).json({ msg: `Username or password not valid.` });
      }
    }
  );
};

// 15. Funz per Cancellare L'utente
const deleteUser = async (req, res) => {
  const { username } = req.body; // User da eliminare
  db.query(
    `DELETE FROM users WHERE  username=?`,
    [username],
    (err, results) => {
      if (err) {
        res.status(500).json({ msg: "Something went wrong" });
        console.error(err);
        return;
      }
      console.log(results);
      res.status(202).json({ msg: "Account deleted successfully." });
    }
  );
};

const createImage = (req, res) => {
  console.log(req.file);
  const { id } = req.params;
  const routeFile = req.file ? req.file.path : null;
  console.log(routeFile);
  if (routeFile) {
    db.query(`UPDATE users SET image=? WHERE id=?`, [routeFile, id]);
    res.status(201).json({ msg: " image uploaded" });
    return;
  } else {
    res.status(400).json({ msg: " image faield uploaded" });
    return;
  }
};

export {
  getUsers,
  getUserByUsername,
  registerUsers,
  loginUsers,
  deleteUser,
  createImage,
};
