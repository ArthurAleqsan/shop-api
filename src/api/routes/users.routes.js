import express from 'express'
const router = express.Router()
import UsersService from '../services/users.service.js'
import { protect } from '../../middleware/authMiddleware.js'

const { login, registerUser, getProfile, updateUser } = UsersService

/**
 * @desc    Register user and get token
 * @route   POST /api/users
 * @access  Public
**/

router.route('/')
    .post(registerUser)

/**
 * @desc    Login user and get token
 * @route   POST /api/users/login
 * @access  Public
**/

router.route('/login')
    .post(login)

/**
 * @desc   Get user profile
 * @route  GET /api/users/profile
 * @access Protected
**/

router.route('/profile')
    .get(protect, getProfile)

/**
* @desc    Update user
* @route   PUT /api/users/:id
* @access  Private/Admin
**/

router.route('/:id')
    .put(updateUser)

export default router