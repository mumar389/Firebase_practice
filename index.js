require("dotenv").config();
const express = require("express");
const port = 9850 || process.env.PORT;
const multer = require("multer");
const db = require("./config/mongoose");

const firebase = require("firebase-admin");
const User = require("./models/user");
const firebaseConnection = require("./config/firebase");
const storageMulter = multer.memoryStorage();
const upload = multer({ storage: storageMulter });
const app = express();

app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("home");
});
app.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  const { name } = req.body;
  if (file) {
    // Create a reference to the Firebase Storage bucket
    const storageBucket = firebase.storage().bucket();
    // Set a unique filename for the uploaded file
    const filename = `uploads/${Date.now()}-${file.originalname}`;

    // Upload the file to the Firebase Storage bucket
    const fileUpload = storageBucket.file(filename);

    const blobStream = fileUpload.createWriteStream();

    blobStream.on("error", (error) => {
      console.log(error);
      res.status(500).json({ error: "Something went wrong!" });
    });

    blobStream.on("finish", async () => {
      // File upload completed successfully
      const fileUrl = `https://storage.googleapis.com/${storageBucket.name}/${fileUpload.name}`;
      //   res.status(200).json({ url: fileUrl });
      const expirationDuration = 3600;
      const options = {
        action: "read",
        expires: Date.now() + expirationDuration * 1000 * 60 * 1000 * 1000,
      };
      const date = new Date(options.expires);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; 
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      fileUpload
        .getSignedUrl(options)
        .then(async (signedUrls) => {
          const downloadUrl = signedUrls[0];
          let newUser = await User.create({
            name,
            image: downloadUrl,
          });
          // console.log("Download URL:", `${day}-${month}-${year}`);
        })
        .catch((error) => {
          console.error("Error getting signed URL:", error);
        });

      res.redirect("/");
    });

    // Pipe the file data to the Firebase Storage bucket
    blobStream.end(file.buffer);
  }
});

app.get("/profile", (req, res) => {
  res.render("Profile", { url: true });
});

app.post("/get-files", async (req, res) => {
  const { name } = req.body;
  let currentUser = await User.findOne({ name });
  if (!currentUser) {
    res.render("Profile", {
      cu: 0,
      url: false,
    });
  } else {
    res.render("Profile", {
      cu: currentUser,
      url: false,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is up on http://localhost:${port}`);
});
