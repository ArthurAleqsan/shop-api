import express from 'express'
const router = express.Router()
import UsersService from '../services/users.service.js'
import { protect, checkIsAdmin } from '../../middleware/authMiddleware.js'

const { login, registerUser, getProfile, getUsers, getUserById, updateUser, updateUserProfile } = UsersService

/**
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Private/Admin
**/

/**
 * @desc    Register user and get token
 * @route   POST /api/users
 * @access  Public
**/

router.route('/')
    .get(protect, checkIsAdmin, getUsers)
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

/**
 * @desc   Update user profile
 * @route  PUT /api/users/profile
 * @access Private
**/

router.route('/profile')
    .get(protect, getProfile)
    .put(protect, updateUserProfile)

/**
* @desc    Get user by id
* @route   GET /api/users/:id
* @access  Public
**/

/**
* @desc    Update user
* @route   PUT /api/users/:id
* @access  Private/Admin
**/

router.route('/:id')
    .get(getUserById)
    .put(protect, checkIsAdmin, updateUser)

export default router