const winston = require('winston');
const { createLogger, transports, format } = winston;

// Create a logger with three transports
const logger = createLogger({
  transports: [
    // Console transport for logging to the console with colorized output
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `${timestamp} ${level}: ${message}`;
        })
      ),
    }),
    // File transport for logging errors to error.log file
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
    }),
    // File transport for logging all messages to combined.log file
    new transports.File({
      filename: 'combined.log',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

/**
 * Controller to get all brands with sorting and filtering options.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {JSON} - List of brands or error message.
 */
const getBrands = async (req, res) => {
  try {
    const { sortBy, filterBy } = req.query;
    let query = {};

    // Apply filtering if provided in the query
    if (filterBy) {
      query = { ...query, ...JSON.parse(filterBy) };
    }

    // Apply sorting if provided in the query
    const sortOptions = sortBy ? JSON.parse(sortBy) : { name: 1 }; // Default sort by name

    const brands = await Brand.find(query).sort(sortOptions);
    res.json(brands);
  } catch (error) {
    // Log the error and send response with error message
    logger.error(`Error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBrands,
};
