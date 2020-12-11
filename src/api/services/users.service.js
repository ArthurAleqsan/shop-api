import SuccessHandlerUtil from './../../util/success-handler.util.js'
import Users from './../../model/schema/users.schema.js'
import generateToken from './../../util/tokenGenerator.js'

const { handleGet } = SuccessHandlerUtil

class UsersService {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const _user = await Users.findOne({ email })
            if (_user && (await _user.matchPassword(password))) {
                const user = {
                    id: _user._id,
                    name: _user.name,
                    email: _user.email,
                    isAdmin: _user.isAdmin,
                    token: generateToken(_user.id),
                }
                handleGet(res, next, user)
            } else {
                res.status(401)
                throw new Error('Invalid email or password')
            }
        } catch (e) {
            next(e)
        }
    }
    static async registerUser(req, res, next) {
        try {
            const { email, name, password } = req.body

            const userExists = await Users.findOne({ email });

            if (userExists) {
                res.status(400)
                throw new Error('User already exists')
            }

            const user = await Users.create({
                name,
                email,
                password,
            })

            if (user) {
                res.status(201).json({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id),
                })
            } else {
                res.status(400)
                throw new Error('Invalid user data')
            }

        } catch (e) {
            next(e)
        }
    }

    static async getProfile(req, res, next) {
        try {
            const user = await Users.findById(req.user.id)

            if (user) {
                res.json({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                })
            } else {
                res.status(404)
                throw new Error('User not found')
            }
        } catch (e) {
            next(e)
        }
    }
}

export default UsersService