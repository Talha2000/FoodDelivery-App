import js from "@eslint/js";
import nextConfig from "eslint-config-next";
import { defineConfig } from "eslint/config";

export default defineConfig([js.configs.recommended, ...nextConfig]);
