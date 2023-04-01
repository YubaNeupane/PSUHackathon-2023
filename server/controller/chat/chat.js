import openai from "./ChatGptConfig.js";
import APIChat from "../../models/apiChat.js";
import ChatHistory from "../../models/chatHistory.js";

export const chat = async (req, res) => {
  try {
    const { message } = req.body;
    let { historyId } = req.body;

    let chatHistory = null;
    if (historyId == null) {
      chatHistory = await ChatHistory.create({
        userId: req.body.id,
        chats: [],
      });
    }

    const chatMessages = await ChatHistory.findById(historyId);

    console.log(chatMessages);

    let chats = [];

    for (let i = 0; i < chatMessages.chats.length; i++) {
      const myChat = await APIChat.findById(chatMessages.chats[i]._id);
      chats.push({
        role: myChat.role,
        content: myChat.content,
      });
    }

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a friend on discord" },
        { role: "user", content: `Respond to this message: "${message}"` },
        ...chats,
      ],
    });

    const newChat = await APIChat.create({
      userId: req.body.id,
      role: completion.data.choices[0].message.role,
      content: completion.data.choices[0].message.content,
    });

    chatMessages.chats.push(newChat._id);

    await ChatHistory.findByIdAndUpdate(chatMessages._id, chatMessages, {
      new: true,
    });

    return res
      .status(200)
      .json({ ...completion.data.choices[0].message, historyId: historyId });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err });
  }
};

export const getChatHistory = async (req, res) => {
  const historyId = req.params.historyId;

  try {
    const chatMessages = await ChatHistory.findById(historyId);

    let chats = [];
    for (let i = 0; i < chatMessages.chats.length; i++) {
      const myChat = await APIChat.findById(chatMessages.chats[i]._id);
      chats.push(myChat);
    }

    return res.status(200).json(chats);
  } catch (err) {}
};
