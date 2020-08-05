(function () {
    metadata = {
      "systemName": "jssp.LS",
      "displayName": "LS jssp ",
      "description": "A K2 JSSP Broker",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://api-in21.leadsquared.com"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
          "order": {
            "displayName": "order",
            "description": "order",
            "properties": {
              "code": {
                "displayName": "code",
                "type": "number",
                "description": "Parameter Value"
              },
              "result": {
                "displayName": "result",
                "type": "string",
                "description": "Result of call"
              }
            },
            "methods": {
              "addActivity": {
                "displayName": "addActivity",
                "type": "create",
                "inputs": ["code"],
                "requiredInputs": ["code"],
                "parameters": {
                  "accessKey": {
                    "displayName": "accessKey",
                    "type": "string"
                  },
                  "secretKey": {
                    "displayName": "secretKey",
                    "type": "string"
                  },
                  "leadId": {
                    "displayName": "leadId",
                    "type": "string"
                  },
                  "getFileUrl": {
                    "displayName": "getFileUrl",
                    "type": "string"
                  }
                },
                "requiredParameters": ["accessKey", "secretKey", "leadId", "getFileUrl"],
                "outputs": ["result"],
                "data": {
                  "httpMethod": "post",
                  "httpPath": "/ProspectActivity.svc/Retrieve"
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
        case "order":
          await onexecuteorder(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteorder(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "addActivity":
          await onexecuteorderaddActivity(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecuteorderaddActivity(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/ProspectActivity.svc/Retrieve`;
        let code = properties["code"];
        let data = {
          "Parameter": {
            "ActivityEvent": code
          }
        };
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult(executeResult);
            resolve();
          } catch (error) {
            reject(error);
          }
        };

        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";
        xhr.withCredentials = true;
        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      });
    }

}());
//# sourceMappingURL=index.js.map
