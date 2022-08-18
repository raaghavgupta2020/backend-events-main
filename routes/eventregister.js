const Events = require("../models/events");

const eventRegister = async (req, res) => {
  try {
    if (!req.verifyStatus || req.verifyStatus == false) {
      return res.status(404).send({
        success: false,
        message: "Authentication Failed",
      });
    }
    const body = req.body;
    var event = new Events({
      ...body,
    });
    await event.save();
    res.status(200).send({
      success: true,
      message: "Event Registration Completed",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = eventRegister;
