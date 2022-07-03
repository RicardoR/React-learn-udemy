/*
    Events routes  / events
    host + /api/events
*/

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');
const { Router } = require('express');
const router = Router();

// All routes need to validate token
router.use(validateJWT);

router.get('/', getEvents);

router.post('/', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
