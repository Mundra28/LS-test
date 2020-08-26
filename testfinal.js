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
              templatVariable_1: {
                displayName: "TemplatVariable_1",
                type: "string",
                description: "Template variable values"
              },
              templatVariable_2: {
                displayName: "TemplatVariable_2",
                type: "string",
                description: "Template variable values"
              },
              templatVariable_3: {
                displayName: "TemplatVariable_3",
                type: "string",
                description: "Template variable values"
              },
              templatVariable_4: {
                displayName: "TemplatVariable_4",
                type: "string",
                description: "Template variable values"
              },
              templatVariable_5: {
                displayName: "TemplatVariable_5",
                type: "string",
                description: "Template variable values"
              },
              templatVariable_6: {
                displayName: "TemplatVariable_6",
                type: "string",
                description: "Template variable values"
              },
              templatVariable_7: {
                displayName: "TemplatVariable_7",
                type: "string",
                description: "Template variable values"
              },
              result: {
                displayName: "Result",
                type: "string",
                description: "Result of call"
              }
            },
            methods: {
              sendMessageWith_1_Variable: {
                displayName: "sendMessageWith_1_Variable",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templatVariable_1"],
                outputs: ["result"]
              },
              sendMessageWith_2_Variable: {
                displayName: "sendMessageWith_2_Variable",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2"],
                outputs: ["result"]
              },
              sendMessageWith_3_Variable: {
                displayName: "sendMessageWith_3_Variable",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3"],
                outputs: ["result"]
              },
              sendMessageWith_4_Variable: {
                displayName: "sendMessageWith_4_Variable",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4"],
                outputs: ["result"]
              },
              sendMessageWith_5_Variable: {
                displayName: "sendMessageWith_5_Variable",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5"],
                outputs: ["result"]
              },
              sendMessageWith_6_Variable: {
                displayName: "sendMessageWith_6_Variable",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5", "templatVariable_6"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5", "templatVariable_6"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5", "templatVariable_6"],
                outputs: ["result"]
              },
              sendMessageWith_7_Variable: {
                displayName: "sendMessageWith_7_Variable",
                type: "execute",
                inputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5", "templatVariable_6", "templatVariable_7"],
                requiredInputs: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5", "templatVariable_6", "templatVariable_7"],
                requiredParameters: ["phonenr", "scenarioKey", "templateName", "templatVariable_1", "templatVariable_2", "templatVariable_3", "templatVariable_4", "templatVariable_5", "templatVariable_6", "templatVariable_7"],
                outputs: ["result"]
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
          await onexecutemessagesendMessageWith_1_Variable(parameters, properties, configuration);
          break;

        case "sendMessage":
          await onexecutemessagesendMessageWith_2_Variable(parameters, properties, configuration);
          break;

        case "sendMessage":
          await onexecutemessagesendMessageWith_3_Variable(parameters, properties, configuration);
          break;

        case "sendMessage":
          await onexecutemessagesendMessageWith_4_Variable(parameters, properties, configuration);
          break;

        case "sendMessage":
          await onexecutemessagesendMessageWith_5_Variable(parameters, properties, configuration);
          break;

        case "sendMessage":
          await onexecutemessagesendMessageWith_6_Variable(parameters, properties, configuration);
          break;

        case "sendMessage":
          await onexecutemessagesendMessageWith_7_Variable(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecutemessagesendMessageWith_1_Variable(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let template = properties["templateName"];
        let a = properties["templatVariable_1"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [a],
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

    function onexecutemessagesendMessageWith_2_Variable(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let template = properties["templateName"];
        let a = properties["templatVariable_1"];
        let b = properties["templatVariable_2"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [a, b],
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

    function onexecutemessagesendMessageWith_3_Variable(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let template = properties["templateName"];
        let a = properties["templatVariable_1"];
        let b = properties["templatVariable_2"];
        let c = properties["templatVariable_3"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [a, b, c],
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

    function onexecutemessagesendMessageWith_4_Variable(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let template = properties["templateName"];
        let a = properties["templatVariable_1"];
        let b = properties["templatVariable_2"];
        let c = properties["templatVariable_3"];
        let d = properties["templatVariable_4"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [a, b, c, d],
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

    function onexecutemessagesendMessageWith_5_Variable(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let template = properties["templateName"];
        let a = properties["templatVariable_1"];
        let b = properties["templatVariable_2"];
        let c = properties["templatVariable_3"];
        let d = properties["templatVariable_4"];
        let e = properties["templatVariable_5"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [a, b, c, d, e],
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

    function onexecutemessagesendMessageWith_6_Variable(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let template = properties["templateName"];
        let a = properties["templatVariable_1"];
        let b = properties["templatVariable_2"];
        let c = properties["templatVariable_3"];
        let d = properties["templatVariable_4"];
        let e = properties["templatVariable_5"];
        let f = properties["templatVariable_6"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [a, b, c, d, e, f],
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

    function onexecutemessagesendMessageWith_7_Variable(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let phonenr = properties["phonenr"];
        let scenarioKey = properties["scenarioKey"];
        let template = properties["templateName"];
        let a = properties["templatVariable_1"];
        let b = properties["templatVariable_2"];
        let c = properties["templatVariable_3"];
        let d = properties["templatVariable_4"];
        let e = properties["templatVariable_5"];
        let f = properties["templatVariable_6"];
        let g = properties["templatVariable_7"];
        let data = {
          "destinations": [{
            "to": {
              "phoneNumber": phonenr
            }
          }],
          "scenarioKey": scenarioKey,
          "whatsApp": {
            "templateName": template,
            "templateData": [a, b, c, d, e, f, g],
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
