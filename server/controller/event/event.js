import EventModal from "../../models/event.js";

export const getEvents = async(req, res) => {
    try {
        const event = await EventModal.find({})

        return res.status(200).json(event);
    }catch(error){
        return res.status(500).json({error: "Something went wrong"});
    }  
};

export const getEventId = async(req, res) => {
    const id = req.params.eventId;
    try{

        const event = await EventModal.findById(id)

        return res.status(200).json(event);
    }catch(error){
        return res.status(500).json({error: "Something went wrong"});
    }
};

export const addEvent = async(req, res) => {
    const {name, creatorName, date, location, description } = res.body;
  try{
    if(!name){
        return res
        .status(400)
        .json({ error: "Event has to have a name" });
    }
    if(!date){
        return res
        .status(400)
        .json({ error: "Event must have a date" });
    }
    if(!location){
        return res
        .status(400)
        .json({ error: "Event must have a date" });
    }
    if(!description){
        return res
        .status(400)
        .json({ error: "Description is empty" });
    }
    const result = await EventModal.create({
        name: name,
        creatorName: creatorName,
        date: date,
        location: location,
        description: description,
        });
    return res.status(201).json({result});
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};