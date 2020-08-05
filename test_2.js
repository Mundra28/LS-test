(function () {
    metadata = {
      "systemName": "test.api.jssp.broker",
      "displayName": "Test API JSSP Broker",
      "description": "A K2 JSSP Broker",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://pwpynv.api.infobip.com"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
          "message": {
            "displayName": "message",
            "description": "message",
            "properties": {
              "destinations": {
                "displayName": "destinations is a JSON Object Array of dest",
                "type": "extendedString",
                "extendedType": "k2.com/2019/memo",
                "description": "Call the Unpack JSON Object Array List Method on dest to resolve"
              },
              "scenarioKey": {
                "displayName": "scenarioKey",
                "type": "string",
                "description": "scenarioKey Value"
              },
              "whatsApp.text": {
                "displayName": "whatsApp.text",
                "type": "string",
                "description": "whatsApp.text Value"
              }
            },
            "methods": {
              "sendMessage": {
                "displayName": "sendMessage",
                "type": "create",
                "inputs": ["destinations", "scenarioKey", "whatsApp.text"],
                "requiredInputs": [],
                "parameters": {},
                "requiredParameters": [],
                "outputs": [],
                "data": {
                  "httpMethod": "post",
                  "httpPath": "/advanced"
                }
              }
            }
          },
          "dest": {
            "displayName": "dest",
            "description": "dest",
            "properties": {
              "to.phoneNumber": {
                "displayName": "to.phoneNumber",
                "type": "string",
                "description": "to.phoneNumber Value"
              }
            },
            "methods": {
              "UnpackJSONObjectArray": {
                "displayName": "Unpack JSON Object Array",
                "type": "list",
                "inputs": [],
                "requiredInputs": [],
                "parameters": {
                  "JSON.String.Param": {
                    "displayName": "JSON dest Object Array String",
                    "description": "JSON String",
                    "type": "string",
                    "extendedType": "k2.com/2019/memo"
                  }
                },
                "requiredParameters": ["JSON.String.Param"],
                "outputs": ["to.phoneNumber"]
              },
              "PackJSONObject": {
                "displayName": "Pack JSON Object",
                "type": "read",
                "inputs": ["to.phoneNumber"],
                "outputs": ["JSON.String"]
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

        case "dest":
          await onexecutedest(methodName, parameters, properties);
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

    async function onexecutedest(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "UnpackJSONObjectArray":
          await onexecutedestUnpackJSONObjectArray(parameters);
          break;

        case "PackJSONObject":
          await onexecutedestPackJSONObject(parameters, properties);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecutemessagesendMessage(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/advanced`;
        let parsedData = parseInputObject(properties);
        let packedData = unflattenObject(parsedData);
        let data = JSON.stringify(packedData);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            let unpackedObject = {};
            let executeResult = unpackObject(obj, "", unpackedObject);
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
        xhr.send(data);
      });
    }

    function onexecutedestUnpackJSONObjectArray(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        try {
          let objArray = JSON.parse(parameters["JSON.String.Param"]);
          objArray.forEach(obj => {
            for (const propKey in obj) {
              if (obj.hasOwnProperty(propKey)) {
                const prop = obj[propKey];
                if (typeof prop == "object") obj[propKey] = JSON.stringify(obj[propKey]);
              }
            }
          });
          postResult(objArray);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }

    function onexecutedestPackJSONObject(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        try {
          let obj = {
            "JSON.String": JSON.stringify(properties)
          };
          postResult(obj);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }

    function unpackObject(sourceObject, propPrefix, unpackedObject) {
      if (sourceObject.length > 0) {
        unpackedObject = sourceObject.map(x => {
          let unpackedSingleObject = {};
          flattenProperties(x, propPrefix, unpackedSingleObject);
          return unpackedSingleObject;
        });
      } else {
        flattenProperties(sourceObject, propPrefix, unpackedObject);
      }

      return unpackedObject;
    }

    function flattenProperties(xSourceObject, propPrefix, unpackedObject) {
      for (const propKey in xSourceObject) {
        if (xSourceObject.hasOwnProperty(propKey)) {
          const prop = xSourceObject[propKey];
          let propName = (propPrefix != "" ? propPrefix + "." : "") + propKey;

          if (typeof prop == "object" && prop != null && prop != undefined) {
            if (prop.length === undefined && propName.split(".").length < 2) {
              unpackObject(prop, propName, unpackedObject);
            } else {
              unpackedObject[propName] = JSON.stringify(xSourceObject[propKey]);
            }
          } else {
            unpackedObject[propName] = xSourceObject[propKey];
          }
        }
      }
    }

    function parseInputObject(object) {
      for (const propKey in object) {
        if (object.hasOwnProperty(propKey)) {
          const value = object[propKey];

          try {
            object[propKey] = JSON.parse(value);

            if (typeof object[propKey] === "object") {
              parseInputObject(object[propKey]);
            }
          } catch (error) {
            object[propKey] = value;
          }
        }
      }

      return object;
    }

    function unflattenObject(inputObject) {
      let unflattenedObject = {};

      for (const propName in inputObject) {
        if (inputObject.hasOwnProperty(propName)) {
          const propValue = inputObject[propName];

          if (propName.indexOf(".") > 0) {
            let propObjectComponents = propName.split(".");
            unflattenedObject[propObjectComponents[0]] = buildObject(unflattenedObject[propObjectComponents[0]], propName.replace(`${propObjectComponents[0]}.`, ""), propValue);
          } else {
            unflattenedObject[propName] = propValue;
          }
        }
      }

      return unflattenedObject;
    }

    function buildObject(currentObject, propName, propValue) {
      if (currentObject === undefined || currentObject === null) {
        currentObject = {};
      }

      if (propName.indexOf(".") > 0) {
        let propObjectComponents = propName.split(".");
        currentObject[propObjectComponents[0]] = buildObject(currentObject[propObjectComponents[0]], propName.replace(`${propObjectComponents[0]}.`, ""), propValue);
      } else {
        currentObject[propName] = propValue;
      }

      return currentObject;
    }

}());
//# sourceMappingURL=index.js.map
