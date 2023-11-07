// Import the Brand model from '../models/brandModel'
const Brand = require('../models/brandModel');

// Import the mongoose library for MongoDB interactions
const mongoose = require('mongoose');

/**
 * Get all brands from the database with optional search, pagination, and sorting options.
 * @param {string} search - Optional search string to filter brands by name or category.
 * @param {number} reqPage - Requested page number for pagination.
 * @param {number} reqLimit - Requested limit of items per page for pagination.
 * @param {string} sortBy - Optional field and order for sorting (e.g., 'name:desc').
 * @returns {Promise<object>} - A promise that resolves with an object containing brands, pagination info, and total count.
 */
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

/**
 * Get a brand by its ID.
 * @param {string} id - The ID of the brand.
 * @returns {Promise<object>} - A promise that resolves with an object containing the brand data, or an error message if not found.
 */
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

/**
 * Add a new brand to the database.
 * @param {object} body - The brand data to be added.
 * @returns {Promise<object>} - A promise that resolves with the added brand data, or an error message if unsuccessful.
 */
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

/**
 * Update an existing brand in the database.
 * @param {string} id - The ID of the brand to be updated.
 * @param {string} name - The new name for the brand (optional).
 * @param {string} category - The new category for the brand (optional).
 * @param {boolean} published - The new published status for the brand (optional).
 * @returns {Promise<object>} - A promise that resolves with the updated brand data, or an error message if unsuccessful.
 */
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

/**
 * Remove a brand from the database by its ID.
 * @param {string} id - The ID of the brand to be removed.
 * @returns {Promise<object>} - A promise that resolves with a success message if removal is successful, or an error message if unsuccessful.
 */
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

// Export the functions as an object to make them available for use in other files
module.exports = {
    getAllBrands,
    getBrandById,
    addBrand,
    updateBrand,
    removeBrand
}
