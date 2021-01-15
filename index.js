(function () {
  metadata = {
    "systemName": "ExcelCode.jssp",
    "displayName": "ExcelCode.jssp",
    "description": "A K2 JSSP Broker for Excel CSV"
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
            "type": {
              "displayName": "type",
              "type": "String",
              "description": "type"
            },
            "result": {
              "displayName": "result",
              "type": "String",
              "description": "result"
            }
          },
          "methods": {
            "extractIntercityType": {
              "displayName": "extractIntercityType",
              "type": "execute",
              "parameters": {
                "make": {
                  "displayName": "make",
                  "type": "string",
                  "description": "make"
                },
                "makeModel": {
                  "displayName": "makeModel",
                  "type": "String",
                  "description": "makeModel"
                },
                "year": {
                  "displayName": "year",
                  "type": "String",
                  "description": "year"
                },
                "intercityTypeUrl": {
                  "displayName": "intercityTypeUrl",
                  "type": "String",
                  "description": "intercityTypeUrl"
                }
              },
              "requiredParameters": ["make", "makeModel", "year", "intercityTypeUrl"],
              "outputs": ["type"]
            },
            "getCharge": {
              "displayName": "getCharge",
              "type": "execute",
              "parameters": {
                "source": {
                  "displayName": "source",
                  "type": "String",
                  "description": "source"
                },
                "destination": {
                  "displayName": "destination",
                  "type": "String",
                  "description": "destination"
                },
                "transportationUrl": {
                  "displayName": "transportationUrl",
                  "type": "String",
                  "description": "transportationUrl"
                },
                "interType": {
                  "displayName": "interType",
                  "type": "String",
                  "description": "interType"
                }
              },
              "requiredParameters": ["source", "destination", "transportationUrl", "interType"],
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
      case "message":
        await onexecutemessage(methodName, parameters);
        break;

      default:
        throw new Error("The object " + objectName + " is not supported.");
    }
  };

  async function onexecutemessage(methodName, parameters, properties, configuration) {
    switch (methodName) {
      case "extractIntercityType":
        await onexecutemessageextractIntercityType(parameters);
        break;

      case "getCharge":
        await onexecutemessagegetCharge(parameters);
        break;

      default:
        throw new Error("The method " + methodName + " is not supported.");
    }
  }

  function onexecutemessageextractIntercityType(parameters, properties, configuration) {
    return new Promise((resolve, reject) => {
      var xhrIntercityType = new XMLHttpRequest();
      intercityTypeUrl = parameters["intercityTypeUrl"];

      xhrIntercityType.onreadystatechange = function () {
        try {
          if (xhrIntercityType.readyState !== 4) return;
          if (xhrIntercityType.status !== 200 && xhrIntercityType.status !== 201) throw new Error("Failed with status " + xhrIntercityType.status);
          intercityTypeCsv = xhrIntercityType.responseText;
          intercityTypeJson = csvJSON(intercityTypeCsv);
          
          const car = JSON.parse(intercityTypeJson).find(e => e.make === parameters["make"] && e.makeModel === parameters["makeModel"] && e.year === parameters["year"]);

          if (car.carIntercityType) {
            postResult({
              "type": car.carIntercityType
            });
            resolve(car.carIntercityType);
          } else {
            console.log('no intecityType found', car);
          }
        } catch (error) {
          reject(error);
        }
      };

      xhrIntercityType.open("GET", intercityTypeUrl);
      xhrIntercityType.send();
    });
  }

  function onexecutemessagegetCharge(parameters, properties, configuration, intercityType) {
    return new Promise((resolve, reject) => {
      var xhrIntercityCharges = new XMLHttpRequest();
      interCityChargesUrl = parameters["transportationUrl"];

      xhrIntercityCharges.onreadystatechange = function () {
        try {
          if (xhrIntercityCharges.readyState !== 4) return;
          if (xhrIntercityCharges.status !== 200 && xhrIntercityCharges.status !== 201) throw new Error("Failed with status " + xhrIntercityCharges.status);
          intercityChargesCsv = xhrIntercityCharges.responseText;
          intercityChargesJson = csvJSON(intercityChargesCsv);
          
          intercityType = parameters["interType"];
          const match = JSON.parse(intercityChargesJson).find(e => e.destination === parameters["destination"] && e.source === parameters["source"] && e.carIntercityType === intercityType);

          if (match.amount) {
            postResult({
              "result": match.amount
            });
            resolve(match.amount);
          } else {
            console.log('no intecityType found', match);
          }
        } catch (error) {
          reject(error);
        }
      };

      xhrIntercityCharges.open("GET", interCityChargesUrl);
      xhrIntercityCharges.send();
    });
  }

  function csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return JSON.stringify(result);
  }

}());
//# sourceMappingURL=index.js.map
