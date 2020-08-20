(function () {
    var imageField;
    metadata = {
      "systemName": "LeadSquaredDocumentUrl.jssp",
      "displayName": "LeadSquaredDocumentUrlJssp",
      "description": "A K2 JSSP Broker for leadsquared",
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
          "body": {
            "displayName": "body",
            "description": "payload",
            "properties": {
              "ActivityCode": {
                "displayName": "ActivityCode",
                "type": "number",
                "description": "Parameter Value"
              },
              "result": {
                "displayName": "result",
                "type": "extendedString",
                "description": "Result of call"
              }
            },
            "methods": {
              "retrieveFileUrl": {
                "displayName": "retrieveFileUrl",
                "type": "create",
                "inputs": ["ActivityCode"],
                "requiredInputs": ["ActivityCode"],
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
                  },
                  "fieldName": {
                    "displayName": "fieldName",
                    "type": "string"
                  }
                },
                "requiredParameters": ["accessKey", "secretKey", "leadId", "getFileUrl", "fieldName"],
                "outputs": ["result"]
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
        case "body":
          await onexecutebody(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecutebody(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "retrieveFileUrl":
          await onexecutebodyretrieveFileUrl(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecutebodyretrieveFileUrl(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/v2/ProspectActivity.svc/Retrieve?accessKey=${parameters["accessKey"]}&secretKey=${parameters["secretKey"]}&leadId=${parameters["leadId"]}&getFileUrl=${parameters["getFileUrl"]}`;
        let ActivityCode = properties["ActivityCode"];
        let data = {
          "Parameter": {
            "ActivityEvent": ActivityCode
          }
        };
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            imageField = parameters["fieldName"];
            let mxCustomObj = JSON.parse(obj.ProspectActivities[0].ActivityFields.parameters["fieldName"]);
            postResult({
              "result": mxCustomObj.mx_CustomObject_1
            });
            resolve();
          } catch (error) {
            reject(error);
          }
        };

        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";
        xhr.withCredentials = false;
        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
      });
    }

}());
//# sourceMappingURL=index.js.map
