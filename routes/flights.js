import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"
const router = Router()

router.get('/', flightsCtrl.index)
/* GET users listing. */
router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
