import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const config: PlaywrightTestConfig = {
  timeout: 60000,
  testDir: "tests/api",
  retries: 0,
  use: {
    headless: true,
    viewport: {
      width: 1280,
      height: 720,
    },
    extraHTTPHeaders: {
      "x-api-key": process.env.REQRES_API_KEY || "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: "off",
    screenshot: "off",
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
      },
    },
    {
      name: "Webkit",
      use: {
        browserName: "webkit",
      },
    },
  ],
};

export default config;
