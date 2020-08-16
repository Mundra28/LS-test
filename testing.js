(function () {
    metadata = {
      "systemName": "testing.learn.jssp.broker",
      "displayName": "Testing learn JSSP Broker",
      "description": "A K2 JSSP Broker",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://banalysis.finnov.in"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
          "res": {
            "displayName": "res",
            "description": "res",
            "properties": {
              "message": {
                "displayName": "message",
                "type": "string",
                "description": "message Value"
              },
              "status": {
                "displayName": "status",
                "type": "decimal",
                "description": "status Value"
              },
              "registeringAuthority": {
                "displayName": "registeringAuthority",
                "type": "string",
                "description": "registeringAuthority Value"
              },
              "registrationNo": {
                "displayName": "registrationNo",
                "type": "string",
                "description": "registrationNo Value"
              },
              "registrationDate": {
                "displayName": "registrationDate",
                "type": "string",
                "description": "registrationDate Value"
              },
              "chassisNo": {
                "displayName": "chassisNo",
                "type": "string",
                "description": "chassisNo Value"
              },
              "engineNo": {
                "displayName": "engineNo",
                "type": "string",
                "description": "engineNo Value"
              },
              "ownerName": {
                "displayName": "ownerName",
                "type": "string",
                "description": "ownerName Value"
              },
              "vehicleClass": {
                "displayName": "vehicleClass",
                "type": "string",
                "description": "vehicleClass Value"
              },
              "fuel": {
                "displayName": "fuel",
                "type": "string",
                "description": "fuel Value"
              },
              "model": {
                "displayName": "model",
                "type": "string",
                "description": "model Value"
              },
              "fitnessUpto": {
                "displayName": "fitnessUpto",
                "type": "string",
                "description": "fitnessUpto Value"
              },
              "taxUpto": {
                "displayName": "taxUpto",
                "type": "string",
                "description": "taxUpto Value"
              },
              "pucNo": {
                "displayName": "pucNo",
                "type": "string",
                "description": "pucNo Value"
              },
              "emission": {
                "displayName": "emission",
                "type": "string",
                "description": "emission Value"
              },
              "rcStatus": {
                "displayName": "rcStatus",
                "type": "string",
                "description": "rcStatus Value"
              },
              "nocDetails": {
                "displayName": "nocDetails",
                "type": "string",
                "description": "nocDetails Value"
              },
              "financierName": {
                "displayName": "financierName",
                "type": "string",
                "description": "financierName Value"
              },
              "financed": {
                "displayName": "financed",
                "type": "string",
                "description": "financed Value"
              },
              "blackListStatus": {
                "displayName": "blackListStatus",
                "type": "string",
                "description": "blackListStatus Value"
              },
              "permit": {
                "displayName": "permit",
                "type": "string",
                "description": "permit Value"
              },
              "insuranceDetails.insuranceName": {
                "displayName": "insuranceDetails.insuranceName",
                "type": "string",
                "description": "insuranceDetails.insuranceName Value"
              },
              "insuranceDetails.policyNo": {
                "displayName": "insuranceDetails.policyNo",
                "type": "string",
                "description": "insuranceDetails.policyNo Value"
              },
              "insuranceDetails.validUpto": {
                "displayName": "insuranceDetails.validUpto",
                "type": "string",
                "description": "insuranceDetails.validUpto Value"
              }
            },
            "methods": {
              "readres": {
                "type": "read",
                "inputs": [],
                "requiredInputs": [],
                "parameters": {
                  "VehicleNumber": {
                    "displayName": "VehicleNumber",
                    "type": "string"
                  },
                  "Authorization": {
                    "displayName": "Authorization",
                    "type": "string"
                  }
                },
                "requiredParameters": ["VehicleNumber", "Authorization"],
                "outputs": ["message", "status", "registeringAuthority", "registrationNo", "registrationDate", "chassisNo", "engineNo", "ownerName", "vehicleClass", "fuel", "model", "fitnessUpto", "taxUpto", "pucNo", "emission", "rcStatus", "nocDetails", "financierName", "financed", "blackListStatus", "permit", "insuranceDetails.insuranceName", "insuranceDetails.policyNo", "insuranceDetails.validUpto"],
                "data": {
                  "httpMethod": "get",
                  "httpPath": "/getVehicleDetails/{VehicleNumber}"
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
        case "res":
          await onexecuteres(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteres(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "readres":
          await onexecuteresreadres(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecuteresreadres(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/getVehicleDetails/${encodeURIComponent(parameters['VehicleNumber'])}`;
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
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
        xhr.open("get", urlValue + httpPath);
        xhr.send();
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

}());
//# sourceMappingURL=index.js.map
