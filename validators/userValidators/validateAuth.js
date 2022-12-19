import { validationResult } from 'express-validator';

export const validateAuth = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(404).json({message: 'Registration errors', errors})
    }

    next();
}

