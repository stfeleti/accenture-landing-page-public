const Brand = require('../models/brandModel');
const mongoose = require('mongoose');
async function getAllBrands(search, reqPage, reqLimit, sortBy) {
    try {
        let options = {};

        if (search) {
            options = {
                ...options,
                $or: [
                    { name: new RegExp(search.toString(), 'i') },
                    { category: new RegExp(search.toString(), 'i') }
                ]
            }
        }

        const total = await Brand.countDocuments(options);
        const page = parseInt(reqPage) || 1;
        const limit = parseInt(reqLimit) || total;
        let last_page = Math.ceil(total / limit);

        if (last_page < 1 && total > 0 ) {
            last_page = 1;
        }

        let sortOptions = {};

        if (sortBy) {
            const [sortField, sortOrder] = sortBy.split(':');
            sortOptions[sortField] = sortOrder === 'desc' ? -1 : 1;
        }

        const brands = await Brand.find(options)
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit);

        return {
            success: true,
            data: brands,
            total: total.toString(),
            page: page.toString(),
            last_page: last_page.toString(),
        };
    } catch (err) {
        return { success: false, message: "Brands not found" };
    }
}

async function getBrandById(id) {
    try {
        const brand = await Brand.findById(id);

        if (!brand) {
            return { success: false, message: 'Brand not found' };
        }

        return {
            success: true,
            data: brand,
        };
    } catch (err) {
        return { success: false, message: err.message };
    }
}

async function addBrand(body) {
    try {
        body._id = new mongoose.Types.ObjectId();
        const brand = new Brand(body);
        const newBrand = await brand.save();

        return {
            success: true,
            data: newBrand,
        };
    } catch (err) {
        return { success: false, message: err.message };
    }
}

async function updateBrand(id, name, category, published) {
    try {
        const brand = await Brand.findById(id);

        if (!brand) {
            return { success: false, message: 'Brand not found' };
        }

        if (name) {
            brand.name = name;
        }

        if (category) {
            brand.category = category;
        }

        if (published !== undefined) {
            brand.published = published;
        }

        const updatedBrand = await brand.save();

        return {
            success: true,
            data: updatedBrand,
            message: "Brand updated successfully"
        };
    } catch (err) {
        return { success: false, message: "Failed to update brand" };
    }
}

async function removeBrand(id) {
    try {
        const brand = await Brand.findById(id);

        if (!brand) {
            return { success: false, message: 'Brand not found' };
        }

        await brand.remove();

        return {
            success: true,
            message: 'Deleted Brand'
        };
    } catch (err) {
        return { success: false, message: err.message };
    }
}

module.exports = {
    getAllBrands,
    getBrandById,
    addBrand,
    updateBrand,
    removeBrand
}
