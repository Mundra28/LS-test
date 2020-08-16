(function () {
    metadata = {
      "systemName": "testing.learn.jssp.broker",
      "displayName": "Testing learn JSSP Broker",
      "description": "A K2 JSSP Broker",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://banalysis.finnov.in/vehicle"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
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
              "outputs": ["result"]
            }
          }
        }
      });
    };

    onexecute = async function ({
      objectName,
      methodName,
      parameters,
      configuration
    }) {
      switch (objectName) {
        case "":
          await onexecuteresreadres(methodName, parameters);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteresreadres(parameters, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/getVehicleDetails/${encodeURIComponent(parameters['VehicleNumber'])}`;
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              result: xhr.responseText
            });
            resolve();
          } catch (error) {
            reject(error);
          }
        };

        urlValue = urlValue.endsWith("/") ? urlValue : urlValue + "/";
        httpPath = httpPath.startsWith("/") ? httpPath.substr(1) : httpPath + "/";
        xhr.withCredentials = false;
        xhr.open("get", urlValue + httpPath);
        xhr.send();
      });
    }

}());
//# sourceMappingURL=index.js.map
