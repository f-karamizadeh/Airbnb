import pool from "../db/database.js";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

// GET all unterkuenfte
export const getUnterkuenfte = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM unterkuenfte");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET unterkunft by id
export const getUnterkunftById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            "SELECT * FROM unterkuenfte WHERE id = $1",
            [id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST new unterkunft
export const createUnterkunft = async (req, res) => {
    const { name, ort, preis, guest_favorite, bewertung, type, ausstattung0, ausstattung1, ausstattung2 } = req.body;
  
    try {
      const uploadedImages = [];
  
      // Upload each image to Cloudinary
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.buffer.toString('base64'));
        uploadedImages.push(result.secure_url);
      }
  
      // Save the unterkunft details along with the image URLs to the database
      const result = await pool.query(
        "INSERT INTO unterkuenfte (name, ort, preis, guest_favorite, bewertung, bilder, type, ausstattung0, ausstattung1, ausstattung2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
        [name, ort, preis, guest_favorite, bewertung, uploadedImages, type, ausstattung0, ausstattung1, ausstattung2]
      );
  
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };