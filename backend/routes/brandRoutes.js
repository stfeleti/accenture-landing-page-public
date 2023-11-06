const express = require('express');
const router = express.Router();
const {
    getAllBrands,
    getBrandById,
    addBrand,
    updateBrand,
    removeBrand
} = require('../controllers/brandController');

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

router.get('/:id', async (req, res) => {
    const response = await getBrandById(req.params.id);

    if (response.success) {
        res.json(response);
    } else {
        res.status(404).json(response);
    }
});

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

router.put('/:id', async (req, res) => {
    const { name, category, published } = req.body;
    const response = await updateBrand(req.params.id, name, category, published);

    if (response.success) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

router.delete('/:id', async (req, res) => {
    const response = await removeBrand(req.params.id);

    if (response.success) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

module.exports = router;
