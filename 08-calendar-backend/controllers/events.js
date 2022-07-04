const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, resp = response) => {
  try {
    const events = await Event.find().populate('user', 'name');

    return resp.status(201).json({
      ok: true,
      events,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({
      ok: false,
      msg: 'Could not get event list',
    });
  }
};

const createEvent = async (req, resp = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    return resp.status(201).json({
      ok: true,
      evento: savedEvent,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({
      ok: false,
      msg: 'Could not create event',
    });
  }
};

const updateEvent = async (req, resp = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const eventToUpdate = await Event.findById(eventId);

    if (!eventToUpdate) {
      return resp.status(404).json({
        ok: false,
        msg: 'Event does not exist',
      });
    }

    if (eventToUpdate.user.toString() !== uid) {
      return resp.status(401).json({
        ok: false,
        msg: 'Only can edit your own events',
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    return resp.status(201).json({
      ok: true,
      msg: eventUpdated,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({
      ok: false,
      msg: 'Could not update event',
    });
  }
};

const deleteEvent = (req, resp = response) => {
  return resp.status(201).json({
    ok: true,
    msg: 'deleteEvent',
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
