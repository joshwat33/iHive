import { useState } from "react";
import { pinata } from "./utils/config";

const processData = async(name: string, email: string,description: string) => {
const upload = await pinata.upload.json({
  name: name,
  email: email,
  description: description
});
return upload;
};

export default processData;