import OpenAI from "openai";
import { OPEN_API_SECRET } from "./appConstants";

const openai = new OpenAI({
  apiKey: OPEN_API_SECRET,
  dangerouslyAllowBrowser: true,
});

export default openai;
