import pool from "../db/database.js";

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
        const { name, ort, preis, guest_favorite, bilder0, bilder1, bewertung, type, ausstattung0, ausstattung1, ausstattung2 } = req.body;
        try {
            const result = await pool.query("INSERT INTO unterkuenfte (name, ort, preis, guest_favorite, bilder0, bilder1, bewertung, type, ausstattung0, ausstattung1, ausstattung2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [name, ort, preis, guest_favorite, bilder0, bilder1, bewertung, type, ausstattung0, ausstattung1, ausstattung2]);
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }