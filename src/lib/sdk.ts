import { getStrapiURL } from "@/lib/utils";
import { strapi } from "@strapi/client";

const BASE_API_URL = getStrapiURL() + "/api";
const sdk = strapi({ baseURL: BASE_API_URL, auth: process.env.STRAPI_API_KEY });
export { sdk };