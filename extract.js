const getColors = require('get-image-colors')

getColors('./public/logo.png').then(colors => {
  console.log('---COLORS---')
  colors.forEach(color => {
    console.log(color.hex())
  })
}).catch(err => console.error(err))
