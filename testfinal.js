(function () {
    metadata = {
      "systemName": "jssp.whatsapp",
      "displayName": "Whatsapp JSSP",
      "description": "A K2 JSSP Broker to send Whatsapp Messages",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://pwpynv.api.infobip.com/omni/1"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        objects: {
          message: {
            displayName: "message",
            description: "message",
            properties: {
              phonenr: {
                displayName: "PhoneNr",
                type: "string",
                description: "The Destination Phone nr"
              },
              scenarioKey: {
                displayName: "scenarioKey",
                type: "string",
                description: "scenarioKey Value"
              },
              templateName: {
                displayName: "templateName",
                type: "string",
                description: "template Name"
              },
              templateVariables: {
                displayName: "templateValue",
                type: "string",
                description: "Please provide comma seperated string values"
              },
              result: {
                displayName: "Result",
                type: "string",
                description: "Result of call"
              }
            },
            methods: {
              sendMessage: {
                displayName: "sendMessage",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templateVariables"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templateVariables"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templateVariables"],
                outputs: ["result"],
                data: {
                  "httpMethod": "POST",
                  "httpPath": "/advanced"
                }
              }
            }
          }
        }
      });
    };

    onexecute = async function ({
      objectName,
      methodName,
      parameters,
      properties,
      configuration
    }) {
      switch (objectName) {
        case "message":
          await onexecutemessage(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecutemessage(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "sendMessage":
          await onexecutemessagesendMessage(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecutemessagesendMessage(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let variable = properties["templateVariables"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [variable],
            "language": "en"
          }
        };
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              result: xhr.responseText
            });
            resolve();
          } catch (error) {
            console.log("ERROR: " + error);
            reject(error);
          }
        };

        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";
        xhr.withCredentials = true;
        xhr.open("POST", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      });
    }

}());
//# sourceMappingURL=index.js.map
