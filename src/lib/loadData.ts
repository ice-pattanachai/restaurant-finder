import fs from "fs";
import path from "path";

const jsonFilePath = path.join(process.cwd(), "public/data/example_data.json");

export function loadRestaurants() {
  const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
  return JSON.parse(jsonData);
}
