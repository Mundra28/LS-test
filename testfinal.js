(function () {
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

              {
              "fieldName": {
                "displayName": "fieldName",
                "type": "string",
                "description": "responseValue"
              },
              "result": {
                "displayName": "result",
                "type": "extendedString",
                "description": "Result of call"
              },
                
                 "result1": {
                "displayName": "result1",
                "type": "extendedString",
                "description": "Result of call"
              },
                
                 "result2": {
                "displayName": "result2",
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
                    "displayName": "AccessKey",
                    "type": "string"
                  },
                  "secretKey": {
                    "displayName": "SecretKey",
                    "type": "string"
                  },
                  "leadId": {
                    "displayName": "LeadId",
                    "type": "string"
                  },
                  "getFileUrl": {
                    "displayName": "getFileUrl",
                    "type": "string"
                  }
                },
                "requiredParameters": ["accessKey", "secretKey", "leadId", "getFileUrl"],
                "outputs": ["result", "result1", "result2"]
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
        var temp = properties["fieldName"];
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
            let mxCustom22Obj = JSON.parse(obj.ProspectActivities[0].ActivityFields.properties["fieldName"]);
            let mxCustom23Obj = JSON.parse(obj.ProspectActivities[0].ActivityFields.mx_Custom_23);
            let mxCustom28Obj = JSON.parse(obj.ProspectActivities[0].ActivityFields.mx_Custom_28);
            postResult({
              "result": mxCustom22Obj.mx_CustomObject_1,
              "result1": mxCustom23Obj.mx_CustomObject_1,
              "result2": mxCustom28Obj.mx_CustomObject_1
                
//             }, {
//               "result": mxCustom23Obj.mx_CustomObject_1
//             }, {
//               "result": mxCustom1Obj.mx_CustomObject_1
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
