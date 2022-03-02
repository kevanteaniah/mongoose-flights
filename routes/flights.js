import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"
const router = Router()

router.get('/', flightsCtrl.index)
/* GET users listing. */
router.get('/new', flightsCtrl.new)
//Get localhost:3000/flights/show
router.get('/:id', flightsCtrl.show)

router.post('/', flightsCtrl.create)

router.post('/:id/tickets', flightsCtrl.createTicket)

router.delete('/:id', flightsCtrl.delete)

// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
