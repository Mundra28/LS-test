(function () {
    metadata = {
      "systemName": "salesforce.- k2 .jssp.broker",
      "displayName": "Salesforce - K2  JSSP Broker",
      "description": "A K2 JSSP Broker",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://login.salesforce.com"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
          "token": {
            "displayName": "token",
            "description": "token",
            "properties": {
              "access_token": {
                "displayName": "access_token",
                "type": "string",
                "description": "access_token Value"
              }
            },
            "methods": {
              "generateToken": {
                "displayName": "generateToken",
                "type": "create",
                "inputs": [],
                "requiredInputs": [],
                "parameters": {
                  "grant_type": {
                    "displayName": "grant_type",
                    "type": "string"
                  },
                  "client_id": {
                    "displayName": "client_id",
                    "type": "string"
                  },
                  "client_secret": {
                    "displayName": "client_secret",
                    "type": "string"
                  },
                  "username": {
                    "displayName": "username",
                    "type": "string"
                  },
                  "password": {
                    "displayName": "password",
                    "type": "string"
                  }
                },
                "requiredParameters": ["grant_type", "client_id", "client_secret", "username", "password"],
                "outputs": ["access_token"],
                "data": {
                  "httpMethod": "post",
                  "httpPath": "/services/oauth2/token"
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
        case "token":
          await onexecutetoken(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecutetoken(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "generateToken":
          await onexecutetokengenerateToken(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecutetokengenerateToken(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/services/oauth2/token`;
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
        xhr.open("post", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
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
            if (prop.length === undefined && propName.split(".").length < 1) {
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
