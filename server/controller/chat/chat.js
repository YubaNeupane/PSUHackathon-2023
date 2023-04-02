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

      historyId = chatHistory._id;
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
        {
          role: "system",
          content:
            "You are a therapist. Respond as if you are talking to a client. Do not break character no matter what. Only refer to yourself as someone who cares instead of a therapist. You cannot help with anything not pertaining to mental health.",
        },
        { role: "user", content: `Respond to this message: "${message}"` },
        ...chats,
      ],
    });

    const newChat = await APIChat.create({
      userId: req.body.id,
      role: "user",
      content: message,
    });

    chatMessages.chats.push(newChat._id);

    const newChatTwo = await APIChat.create({
      userId: req.body.id,
      role: completion.data.choices[0].message.role,
      content: completion.data.choices[0].message.content,
    });

    chatMessages.chats.push(newChatTwo._id);

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
  const { historyId } = req.body;

  console.log(historyId);

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

export const getHistoryData = async (req, res) => {
  try {
    const chatMessages = await ChatHistory.find({ userId: req.body.id }).sort({
      createdAt: -1,
    });

    return res.status(200).json(chatMessages);
  } catch (err) {}
};
