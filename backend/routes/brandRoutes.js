const express = require('express');
const router = express.Router();
const {
    getAllBrands,
    getBrandById,
    addBrand,
    updateBrand,
    removeBrand
} = require('../controllers/brandController');

/**
 * @swagger
 * /brands:
 *   get:
 *     description: Get all brands
 *     responses:
 *       200:
 *         description: Returns a list of all brands
 */
router.get('/', async (req, res) => {
    const response = await getAllBrands(
        req.query.search,
        req.query.page,
        req.query.limit,
        req.query.sortBy
    );

    if (response.success) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

/**
 * @swagger
 * /brands/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The brand ID.
 *     description: Get a brand by ID
 *     responses:
 *       200:
 *         description: Returns the requested brand
 */
router.get('/:id', async (req, res) => {
    const response = await getBrandById(req.params.id);

    if (response.success) {
        res.json(response);
    } else {
        res.status(404).json(response);
    }
});

/**
 * @swagger
 * /brands:
 *   post:
 *     parameters:
 *       - in: body
 *         name: brand
 *         description: New brand
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             category:
 *               type: string
 *             published:
 *               type: boolean
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', async (req, res) => {
    const body = {
        name: req.body.name,
        category: req.body.category,
        published: req.body.published
    };

    const response = await addBrand(body);

    if (response.success) {
        res.status(201).json(response);
    } else {
        res.status(400).json(response);
    }
});

/**
 * @swagger
 * /brands/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The brand ID.
 *       - in: body
 *         name: brand
 *         description: Update brand
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             category:
 *               type: string
 *             published:
 *               type: boolean
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id', async (req, res) => {
    const { name, category, published } = req.body;
    const response = await updateBrand(req.params.id, name, category, published);

    if (response.success) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

/**
 * @swagger
 * /brands/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The brand ID.
 *     description: Delete a brand by ID
 *     responses:
 *       200:
 *         description: Returns the deleted brand
 */
router.delete('/:id', async (req, res) => {
    const response = await removeBrand(req.params.id);

    if (response.success) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

module.exports = router;
