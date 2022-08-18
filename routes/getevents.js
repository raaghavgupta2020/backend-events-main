// get all events
const Events = require("../models/events");

const getEvents = async (req, res) => {
    try {
        const events = await Events.find({},{eventname:1}).lean();
        res.status(200).send({
        success: true,
        events,
        });
    } catch (err) {
        console.log(err);
    }
}
    
module.exports = getEvents;

// get event by user id
// const getEventByUserId = async (req, res) => {
//     try {
//         const events = await Events.find({
//             users: req.params.id,
//         });
//         res.status(200).send({
//         success: true,
//         events,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// module.exports = getEventByUserId;