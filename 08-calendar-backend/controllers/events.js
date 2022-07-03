const { response } = require('express');

const getEvents = (req, resp = response) => {
  return resp.status(201).json({
    ok: true,
    msg: 'getEvents',
  });
};

const createEvent = (req, resp = response) => {
  return resp.status(201).json({
    ok: true,
    msg: 'createEvents',
  });
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
