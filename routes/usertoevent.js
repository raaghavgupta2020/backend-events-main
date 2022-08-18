// user to register an event
const Events = require("../models/events");

const userToEvent = async (req, res) => {
    try {
        const event = await Events.findOne({
            _id: req.params.id,
        });
        if (!event) {
            return res.status(404).send({
                success: false,
                message: "Event Not Found",
            });
        }
        event.users.push(req.body._id);
        await event.save();
        res.status(200).send({
            success: true,
            message: "Event Registration Completed",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = userToEvent;