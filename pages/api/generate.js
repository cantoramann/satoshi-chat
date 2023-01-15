import { Configuration, OpenAIApi } from "openai";
import promptBase from "../../prompt-base";

const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(openAIConfig);

const generateResponse = async (req, res) => {
  const responseData = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${promptBase}${req.body.userInput.trim()}\nResponse: `,
    temperature: 0.8,
    max_tokens: 256,
  });

  const responseText = responseData.data.choices.pop();

  res.status(200).json({ output: responseText });
};

export default generateResponse;
