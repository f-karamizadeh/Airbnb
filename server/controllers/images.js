import pool from "../db/database.js";


export const getImages = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            "SELECT img FROM images JOIN unterkuenfte ON images.imgid = unterkuenfte.id WHERE unterkuenfte.id = $1", [id]);
            console.log(result.rows);
        if (result.rows.length === 0) {
            res.status(404).json({ error: "No images found" });
        } else {
            res.json(result.rows);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
