import * as functions from "firebase-functions";
import admin from "firebase-admin";
import app from "./app.js";

admin.initializeApp();

export const api = functions.https.onRequest(app);
