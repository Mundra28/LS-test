(function () {
    metadata = {
      "systemName": "salesforce.- k2 .jssp.broker",
      "displayName": "Salesforce - K2  JSSP Broker",
      "description": "A K2 JSSP Broker",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://olxautos2--devindia.my.salesforce.com"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
          "accountResponse": {
            "displayName": "accountResponse",
            "description": "accountResponse",
            "properties": {
              "Token_Status__c": {
                "displayName": "Token_Status__c",
                "type": "string",
                "description": "Token_Status__c Value"
              },
              "Payment_Type__c": {
                "displayName": "Payment_Type__c",
                "type": "string",
                "description": "Payment_Type__c Value"
              },
              "Token_Collected__c": {
                "displayName": "Token_Collected__c",
                "type": "boolean",
                "description": "Token_Collected__c Value"
              },
              "Token_Collected_Date__c": {
                "displayName": "Token_Collected_Date__c",
                "type": "string",
                "description": "Token_Collected_Date__c Value"
              },
              "Full_Payment_Status__c": {
                "displayName": "Full_Payment_Status__c",
                "type": "string",
                "description": "Full_Payment_Status__c Value"
              },
              "Full_Payment_Date__c": {
                "displayName": "Full_Payment_Date__c",
                "type": "string",
                "description": "Full_Payment_Date__c Value"
              },
              "StageName": {
                "displayName": "StageName",
                "type": "string",
                "description": "StageName Value"
              },
              "Loss_Reason__c": {
                "displayName": "Loss_Reason__c",
                "type": "string",
                "description": "Loss_Reason__c Value"
              },
              "Id": {
                "displayName": "Id",
                "type": "string",
                "description": "Id Value"
              }
            },
            "methods": {
              "GetAccountDetails": {
                "displayName": "GetAccountDetails",
                "type": "read",
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
                  },
                  "OpportunityId": {
                    "displayName": "OpportunityId",
                    "type": "string"
                  },
                  "fields": {
                    "displayName": "fields",
                    "type": "string"
                  }
                },
                "requiredParameters": ["grant_type", "client_id", "client_secret", "username", "password", "OpportunityId"],
                "outputs": ["Token_Status__c", "Payment_Type__c", "Token_Collected__c", "Token_Collected_Date__c", "Full_Payment_Status__c", "Full_Payment_Date__c", "StageName", "Loss_Reason__c", "Id"],
                "data": {
                  "httpMethod": "get",
                  "httpPath": "/{OpportunityId}"
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
        case "accountResponse":
          await onexecuteaccountResponse(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteaccountResponse(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "GetAccountDetails":
          onexecutetokengenerateToken(parameters).then(async function resolved(value) {
            let token = value['access_token'];
            await onexecuteaccountResponseGetAccountDetails(token, parameters, properties, configuration);
          }, function errored(error) {
            throw new Error("Failed to get the token" + error + parameters["grant_type"] + parameters["client_id"]);
          });
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecutetokengenerateToken(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let data = encodeURI(`grant_type=${parameters["grant_type"]}&client_id=${parameters["client_id"]}&client_secret=${parameters["client_secret"]}&username=${parameters["username"]}&password=${parameters["password"]}`);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            resolve(obj);
          } catch (error) {
            reject(error);
          }
        };

        xhr.open("post", 'https://test.salesforce.com/services/oauth2/token');
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
      });
    }

    function onexecuteaccountResponseGetAccountDetails(token, parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration['ServiceURL'];
        let httpPath = `/${encodeURIComponent(parameters['OpportunityId'])}`;
        let xhr = new XMLHttpRequest();
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

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
