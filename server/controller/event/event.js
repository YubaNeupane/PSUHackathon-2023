import EventModal from "../../models/event.js";

export const getEvents = async(req, res) => {
    try {
        const event = await EventModal.findById(req.body.id);

        return res.status(200).json(event);
    }catch(error){
        return res.status(500).json({error: "Something went rong"});
    }  
};