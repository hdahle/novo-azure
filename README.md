---
page_type: sample
languages:
- nodejs
- javascript
products:
- azure
- azure-app-service
description: "This sample demonstrates a tiny Hello World Node.js app for Azure App Service."
---

# Node.js Hello World

This sample demonstrates a tiny Hello World node.js app for [App Service Web App](https://docs.microsoft.com/azure/app-service-web).

## Contributing

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Changes

I changed this to use express as the web-server instead of the old http-request stuff. Instead of just serving up a Hello World text string, it now serves HTML/CSS from the public folder
