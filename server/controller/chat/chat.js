import openai from "./ChatGptConfig.js";

export const chat = async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a friend on discord" },
        { role: "user", content: `Respond to this message: "${message}"` },
      ],
    });

    return res.status(200).json(completion.data.choices[0].message);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err });
  }
};
