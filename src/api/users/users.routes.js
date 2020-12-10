import express from 'express';
const router = express.Router();
import UsersService from './users.service.js';
import { protect } from './../../middleware/authMiddleware.js';

const { login, getProfile } = UsersService;

// @desc    Login user and get token
// @route   POST /api/users/login
// @access  Public

router.route('/login')
    .post(login);

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Protected

router.route('/profile')
    .get(protect, getProfile);

export default router