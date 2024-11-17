import { useState } from "react";
import { pinata } from "./utils/config";

export const processData = async(name, email) => {
const upload = await pinata.upload.json({
  name: name,
  email: email,
})
return upload
}
