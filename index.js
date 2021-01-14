(function () {
  metadata = {
    "systemName": "jssp.TransportationCharges",
    "displayName": "Transporatation Charges",
    "description": "A K2 JSSP Broker to send Transporter Charger"
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
            make: {
              displayName: "make",
              type: "string",
              description: "make"
            },
            makeModel: {
              displayName: "makeModel",
              type: "string",
              description: "makeModel Value"
            },
            year: {
              displayName: "year",
              type: "string",
              description: "year Name"
            },
            intercityTypeUrl: {
              displayName: "intercityTypeUrl",
              type: "string",
              description: "intercityTypeUrl values"
            },
            source: {
              displayName: "source",
              type: "string",
              description: "source variable values"
            },
            destination: {
              displayName: "destination",
              type: "string",
              description: "destination variable values"
            },
            transportationUrl: {
              displayName: "transportationUrl",
              type: "string",
              description: "transportationUrl variable values"
            }
          },
          methods: {
            extractIntercityType: {
              displayName: "extractIntercityType",
              type: "execute",
              inputs: ["make", "makeModel", "year", "intercityTypeUrl", "source", "destination", "transportationUrl"],
              requiredInputs: ["make", "makeModel", "year", "intercityTypeUrl", "source", "destination", "transportationUrl"],
              requiredParameters: ["make", "makeModel", "year", "intercityTypeUrl", "source", "destination", "transportationUrl"],
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
      case "extractIntercityType":
        const intercityType = await onexecutemessageextractIntercityType(parameters, properties);
        const charge = await onexecutemessagegetCharge(parameters, properties, configuration, intercityType);
        break;

      default:
        throw new Error("The method " + methodName + " is not supported.");
    }
  }

  function onexecutemessageextractIntercityType(parameters, properties, configuration) {
    return new Promise((resolve, reject) => {
      var xhrIntercityType = new XMLHttpRequest();

      xhrIntercityType.onreadystatechange = function () {
        try {
          if (xhrIntercityType.readyState !== 4) return;
          if (xhrIntercityType.status !== 200 && xhrIntercityType.status !== 201) throw new Error("Failed with status " + xhrIntercityType.status);
          intercityTypeCsv = xhrIntercityType.responseText;
          intercityTypeJson = csvJSON(intercityTypeCsv);
          intercityTypeUrl = properties["intercityTypeUrl"];
          const car = JSON.parse(intercityTypeJson).find(e => e.make === properties["make"] && e.makeModel === properties["makeModel"] && e.year === properties["year"]);

          if (car.carIntercityType) {
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

      xhrIntercityCharges.onreadystatechange = function () {
        try {
          if (xhrIntercityCharges.readyState !== 4) return;
          if (xhrIntercityCharges.status !== 200 && xhrIntercityCharges.status !== 201) throw new Error("Failed with status " + xhrIntercityCharges.status);
          intercityChargesCsv = xhrIntercityCharges.responseText;
          intercityChargesJson = csvJSON(intercityChargesCsv);
          interCityChargesUrl = properties["transportationUrl"];
          const match = JSON.parse(intercityChargesJson).find(e => e.destination === properties["destination"] && e.source === properties["source"] && e.carIntercityType === intercityType);

          if (match.amount) {
            resolve(match.amount);
          } else {
            console.log('no intecityType found', match);
          }

          postResult({
            "result": match.amount
          });
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
