const Sequelize = require('sequelize')
const configs = require('../config/sequelize')
const YogaTeachersModel = require('./yogateachers')
const YogaReasonsModel = require('./yogareasons')

const environment = process.env.NODE_ENV || 'development'
const configuration = configs[environment]

const connection = new Sequelize(configuration.database, configuration.username, configuration.password, {
  host: configuration.host, dialect: configuration.dialect
})

const YogaTeachers = YogaTeachersModel(connection, Sequelize)
const YogaReasons = YogaReasonsModel(connection, Sequelize)

module.exports = { YogaTeachers, YogaReasons, Op: Sequelize.Op, Sequelize }
