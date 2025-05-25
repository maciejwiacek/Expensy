import admin from "firebase-admin";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const credentials = require("../../keys.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}

export default admin;
