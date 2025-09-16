import SwaggerUI from "swagger-ui";
import SwaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";

import "swagger-ui/dist/swagger-ui.css";
import "./main.css";

SwaggerUI({
  dom_id: "#app",
  urls: [
    { url: "/docs/5.0.json", name: "5.0" },
    { url: "/docs/4.4.json", name: "4.4" },
    { url: "/docs/4.3.json", name: "4.3" },
    { url: "/docs/4.2.json", name: "4.2" },
    { url: "/docs/4.1.json", name: "4.1" },
    { url: "/docs/4.0.json", name: "4.0" },
    { url: "/docs/3.14.json", name: "3.14" }
  ],
  "urls.primaryName": "5.0",
  deepLinking: true,
  presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
  plugins: [SwaggerUI.plugins.DownloadUrl].filter(
    (plugin) => plugin !== SwaggerUI.plugins.Auth
  ),
  layout: "StandaloneLayout",
  supportedSubmitMethods: [],
  showCommonExtensions: true,
  showExtensions: true,
  filter: true,
  tryItOutEnabled: false,
  persistAuthorization: false,
  withCredentials: false,
});
