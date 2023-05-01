"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, _, res, __) => {
    err.statusCode = err.statusCode || 500;
    return res.status(err.statusCode).json({ message: err.message });
};
exports.globalErrorHandler = globalErrorHandler;
