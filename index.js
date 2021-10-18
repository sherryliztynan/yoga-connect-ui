const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const cors = require('cors')
const { getAllYogaReasons } = require('./controllers/yogareasons')
// eslint-disable-next-line max-len
const { getAllYogaTeachers, getTeacherByIdOrName } = require('./controllers/yogateachers')

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())


app.get('/api/YogaReasons', getAllYogaReasons)

app.get('/api/YogaTeachers', getAllYogaTeachers)

app.get('/api/YogaTeachers/:identifier', getTeacherByIdOrName)

// app.delete('/api/YogaTeachers/:identifier', deleteYogaTeacher)

// app.post('/api/YogaTeachers/:identifier', saveNewTeacher)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))


app.listen(1331, () => {
  console.log('yay server up on 1331') // eslint-disable-line no-console
})
