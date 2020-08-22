(function () {
    metadata = {
      "systemName": "FinovVahan.jssp",
      "displayName": "FinovVahan.jssp",
      "description": "A K2 JSSP Broker for Vahan Integration",
      "configuration": {
        "grant_type": {
          "displayName": "grant type",
          "type": "string"
        },
        "client_id": {
          "displayName": "client id",
          "type": "string"
        },
        "client_secret": {
          "displayName": "client secret",
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
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
          "VahaanIntegration": {
            "displayName": "Vahaan Integration",
            "description": "Vahaan Integration",
            "properties": {
              "token": {
                "displayName": "token",
                "type": "string",
                "description": "auth token Value"
              },
              "message": {
                "displayName": "message",
                "type": "String",
                "description": "message of call"
              },
              "status": {
                "displayName": "status",
                "type": "String",
                "description": "status of call"
              },
              "registeringAuthority": {
                "displayName": "registering Authority",
                "type": "String",
                "description": "registeringAuthority of call"
              },
              "registrationNo": {
                "displayName": "registration No",
                "type": "String",
                "description": "registrationNo of call"
              },
              "registrationDate": {
                "displayName": "registrationDate",
                "type": "String",
                "description": "registrationDate of call"
              },
              "ownerName": {
                "displayName": "owner Name",
                "type": "String",
                "description": "owner name of call"
              },
              "fitnessUpto": {
                "displayName": "fitness Upto",
                "type": "String",
                "description": "fitnessUpto of call"
              },
              "taxUpto": {
                "displayName": "taxUpto",
                "type": "String",
                "description": "taxUpto of call"
              },
              "rcStatus": {
                "displayName": "rcStatus",
                "type": "String",
                "description": "rcStatus of call"
              },
              "nocDetails": {
                "displayName": "nocDetails",
                "type": "String",
                "description": "nocDetails of call"
              },
              "financierName": {
                "displayName": "financierName",
                "type": "String",
                "description": "financierName of call"
              },
              "financed": {
                "displayName": "financed",
                "type": "String",
                "description": "financed of call"
              },
              "blackListStatus": {
                "displayName": "blackListStatus",
                "type": "String",
                "description": "blackListStatus of call"
              },
              "permit": {
                "displayName": "permit",
                "type": "String",
                "description": "permit of call"
              },
              "insuranceName": {
                "displayName": "insuranceName",
                "type": "String",
                "description": "insuranceName of call"
              },
              "policyNo": {
                "displayName": "policyNo",
                "type": "String",
                "description": "policyNo of call"
              },
              "validUpto": {
                "displayName": "validUpto",
                "type": "String",
                "description": "validUpto of call"
              }
            },
            "methods": {
              "getVahaanToken": {
                "displayName": "Get Vahaan Token",
                "type": "read",
                "parameters": {
                  "toke_url": {
                    "displayName": "toke url",
                    "type": "string"
                  }
                },
                "requiredParameters": ["toke_url"],
                "outputs": ["token"]
              },
              "checkAPIMethod": {
                "displayName": "CheckAPIMethod",
                "type": "read",
                "parameters": {
                  "methodUrl": {
                    "displayName": "methodUrl",
                    "description": "Method Url",
                    "type": "string"
                  },
                  "authToken": {
                    "displayName": "authToken",
                    "description": "Auth Token",
                    "type": "string"
                  }
                },
                "requiredParameters": ["methodUrl", "authToken"],
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
        case "VahaanIntegration":
          await onexecuteVahaanIntegration(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteVahaanIntegration(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "getVahaanToken":
          await onexecuteVahaanIntegrationgetVahaanToken(parameters, properties, configuration);
          break;

        case "checkAPIMethod":
          await onexecuteVahaanIntegrationcheckAPIMethod(parameters);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecuteVahaanIntegrationgetVahaanToken(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = parameters["toke_url"];
        let httpPath = `grant_type=${configuration["grant_type"]}&client_id=${configuration["client_id"]}&client_secret=${configuration["client_secret"]}&username=${configuration["username"]}&password=${configuration["password"]}`;
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              "token": obj.access_token
            });
            resolve();
          } catch (error) {
            reject(error);
          }
        };

        xhr.withCredentials = false;
        xhr.open("post", urlValue + "?" + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
      });
    }

    function onexecuteVahaanIntegrationcheckAPIMethod(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = parameters["methodUrl"];
        let httpPath = parameters["authToken"];
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (parameter) {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              "message": obj.message
            }, {
              "status": obj.status
            }, {
              "registeringAuthority": obj.registeringAuthority
            }, {
              "registrationNo": obj.registrationNo
            }, {
              "registrationDate": obj.registrationDate
            }, {
              "ownerName": obj.ownerName
            }, {
              "fitnessUpto": obj.fitnessUpto
            }, {
              "taxUpto": obj.taxUpto
            }, {
              "rcStatus": obj.rcStatus
            }, {
              "nocDetails": obj.nocDetails
            }, {
              "financierName": obj.financierName
            }, {
              "financed": obj.financed
            }, {
              "blackListStatus": obj.blackListStatus
            }, {
              "permit": obj.permit
            }, {
              "insuranceName": obj.insuranceDetails.insuranceName
            }, {
              "policyNo": obj.insuranceDetails.policyNo
            }, {
              "validUpto": obj.insuranceDetails.validUpto
            });
            resolve();
          } catch (error) {
            reject(error);
          }
        };

        xhr.withCredentials = false;
        xhr.open("get", urlValue);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer " + httpPath);
      });
    }

}());
//# sourceMappingURL=index.js.map
