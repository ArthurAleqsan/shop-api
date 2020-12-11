import dotenv from 'dotenv'
import users from './../data/users.js'
import products from './../data/products.js'
import User from './schema/users.schema.js'
import Product from './schema/products.schema.js'
// import Order from './schema/order.schema.js'
import MongodbStorage from './../storage/mongodb.storage.js'

dotenv.config()



const importData = async () => {
  try {
    // await Order.deleteMany()
    // await Product.deleteMany()
    // await User.deleteMany()
    MongodbStorage.init()
    .then(r => console.log(r))

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}