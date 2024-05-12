
export const sendResponse = (res, statusCode, data = null, error = null) => {
    // Set default status code if not provided
    statusCode = statusCode || 200;

    if (error) {
        // If error is present, send error response
        res.status(statusCode).json({
            success: false,
            error: {
                message: error.message || 'Internal Server Error'
            }
        });
    } else {
        // Send success response with data
        res.status(statusCode).json({
            success: true,
            data
        });
    }
};