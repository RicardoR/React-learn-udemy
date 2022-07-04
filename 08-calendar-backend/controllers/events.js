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

const updateEvent = (req, resp = response) => {
  return resp.status(201).json({
    ok: true,
    msg: 'updateEvents',
  });
};

const deleteEvent = (req, resp = response) => {
  return resp.status(201).json({
    ok: true,
    msg: 'deleteEvent',
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
