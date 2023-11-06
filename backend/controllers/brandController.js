const Brand = require('../models/brandModel');

async function getAllBrands(search, reqPage, reqLimit, sortBy) {
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

    let total = Brand.countDocuments(options);
    let page = parseInt(reqPage) || 1;
    let limit = parseInt(reqLimit) || parseInt(await total);
    let last_page = Math.ceil(parseInt(await total) / limit);
    if (last_page < 1 && total > 0) {
        last_page = 1;
    }

    let sortOptions = {};

    if (sortBy) {
        const [sortField, sortOrder] = sortBy.split(':');
        sortOptions[sortField] = sortOrder === 'desc' ? -1 : 1;
    }

    try {
        const brands = await Brand.find(options)
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit);

        return {
            success: true,
            data: brands,
            total: (await total).toString(),
            page: (await page).toString(),
            last_page: (await last_page).toString(),
        };
    } catch (err) {
        return { success: false, message: "Brands not found" };
    }
}

async function getBrandById(id) {
    let brand;
    try {
        brand = await Brand.findById(id);
        if (brand == null) {
            return { success: false, message: 'Cannot find brand' };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }

    return {
        success: true,
        data: brand,
    };
}

async function addBrand(body) {
    const brand = new Brand(body);

    try {
        const newBrand = await brand.save();
        return {
            success: true,
            data: newBrand,
        };
    } catch (err) {
        return { success: false, message: "Failed to add brand" };
    }
}

async function updateBrand(id, name = null, category = null, published = null) {
    let brand;
    try {
        brand = await Brand.findById(id);
        if (brand == null) {
            return { success: false, message: 'Cannot find brand' };
        }
        if (name != null) {
            brand.name = name
        }
        if (category != null) {
            brand.category = category
        }
        if (published != null) {
            brand.published = published
        }

        try {
            const updatedBrand = await brand.save()
            return {
                success: true,
                data: updatedBrand,
                message: "Brand updated successfully"
            };
        } catch (err) {
            return { success: false, message: "Failed to update brand" };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }
}

async function removeBrand(id) {
    let brand;
    try {
        brand = await Brand.findById(id);
        if (brand == null) {
            return { success: false, message: 'Cannot find brand' };
        }

        try {
            await brand.remove()
            return {
                success: true,
                message: 'Deleted Brand'
            };
        } catch (err) {
            return { success: false, message: err.message };
        }
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
