(function () {
    metadata = {
      "systemName": "salesforce.- k2 .jssp.broker",
      "displayName": "Salesforce - K2  JSSP Broker",
      "description": "A K2 JSSP Broker",
      "configuration": {
        "ServiceURL": {
          "displayName": "Service URL",
          "type": "string",
          "value": "https://olx-panamera.my.salesforce.com"
        }
      }
    };

    ondescribe = async function ({
      configuration
    }) {
      postSchema({
        "objects": {
          "accountField": {
            "displayName": "accountField",
            "description": "accountField",
            "properties": {
              "RC_Transfer_Count_Post_90_Days_Delivery__c": {
                "displayName": "RC_Transfer_Count_Post_90_Days_Delivery__c",
                "type": "decimal",
                "description": "RC_Transfer_Count_Post_90_Days_Delivery__c Value"
              },
              "Customer_LS_Status__c": {
                "displayName": "Customer_LS_Status__c",
                "type": "string",
                "description": "Customer_LS_Status__c Value"
              },
              "Dealer_Inventory_More_Than_90_Days__c": {
                "displayName": "Dealer_Inventory_More_Than_90_Days__c",
                "type": "decimal",
                "description": "Dealer_Inventory_More_Than_90_Days__c Value"
              }
            },
            "methods": {
              "updateAccount": {
                "displayName": "updateAccount",
                "type": "update",
                "inputs": ["RC_Transfer_Count_Post_90_Days_Delivery__c", "Customer_LS_Status__c", "Dealer_Inventory_More_Than_90_Days__c"],
                "requiredInputs": [],
                "parameters": {
                  "FCG_Id": {
                    "displayName": "FCG_Id",
                    "type": "string"
                  },
                  "Authorization": {
                    "displayName": "Authorization",
                    "type": "string"
                  }
                },
                "requiredParameters": ["FCG_Id", "Authorization"],
                "outputs": [],
                "data": {
                  "httpMethod": "patch",
                  "httpPath": "/sobjects/Account/FCG_Id__c/{FCG_Id}"
                }
              }
            }
          },
          "paymentField": {
            "displayName": "paymentField",
            "description": "paymentField",
            "properties": {
              "Account__r": {
                "displayName": "Account__r is a JSON Object of FcgId",
                "type": "extendedString",
                "extendedType": "k2.com/2019/memo",
                "description": "Call the Unpack JSON Object Read Method on FcgId to resolve"
              },
              "Purpose_of_Payment__c": {
                "displayName": "Purpose_of_Payment__c",
                "type": "string",
                "description": "Purpose_of_Payment__c Value"
              },
              "Payment_Status__c": {
                "displayName": "Payment_Status__c",
                "type": "string",
                "description": "Payment_Status__c Value"
              },
              "CurrencyISOCode": {
                "displayName": "CurrencyISOCode",
                "type": "string",
                "description": "CurrencyISOCode Value"
              },
              "RecordTypeId": {
                "displayName": "RecordTypeId",
                "type": "string",
                "description": "RecordTypeId Value"
              },
              "Payment_Processed_Date__c": {
                "displayName": "Payment_Processed_Date__c",
                "type": "string",
                "description": "Payment_Processed_Date__c Value"
              },
              "Amount__c": {
                "displayName": "Amount__c",
                "type": "decimal",
                "description": "Amount__c Value"
              },
              "Finance_Comments__c": {
                "displayName": "Finance_Comments__c",
                "type": "string",
                "description": "Finance_Comments__c Value"
              },
              "Payment_Receive_Date__c": {
                "displayName": "Payment_Receive_Date__c",
                "type": "string",
                "description": "Payment_Receive_Date__c Value"
              },
              "Payment_Received_Date_and_Time__c": {
                "displayName": "Payment_Received_Date_and_Time__c",
                "type": "string",
                "description": "Payment_Received_Date_and_Time__c Value"
              },
              "LS_ID__c": {
                "displayName": "LS_ID__c",
                "type": "string",
                "description": "LS_ID__c Value"
              }
            },
            "methods": {
              "updatePayment": {
                "displayName": "updatePayment",
                "type": "create",
                "inputs": ["Account__r", "Purpose_of_Payment__c", "Payment_Status__c", "CurrencyISOCode", "RecordTypeId", "Payment_Processed_Date__c", "Amount__c", "Finance_Comments__c", "Payment_Receive_Date__c", "Payment_Received_Date_and_Time__c", "LS_ID__c"],
                "requiredInputs": [],
                "parameters": {
                  "Authorization": {
                    "displayName": "Authorization",
                    "type": "string"
                  }
                },
                "requiredParameters": ["Authorization"],
                "outputs": [],
                "data": {
                  "httpMethod": "post",
                  "httpPath": "/sobjects/Payment__c"
                }
              }
            }
          },
          "FcgId": {
            "displayName": "FcgId",
            "description": "FcgId",
            "properties": {
              "FCG_Id__c": {
                "displayName": "FCG_Id__c",
                "type": "string",
                "description": "FCG_Id__c Value"
              },
              "JSON.String": {
                "displayName": "Packed JSON Item",
                "type": "string",
                "extendedType": "k2.com/2019/memo"
              }
            },
            "methods": {
              "UnpackJSONObject": {
                "displayName": "Unpack JSON Object",
                "type": "read",
                "inputs": [],
                "requiredInputs": [],
                "parameters": {
                  "JSON.String.Param": {
                    "displayName": "JSON FcgId Object String",
                    "description": "JSON String",
                    "type": "string",
                    "extendedType": "k2.com/2019/memo"
                  }
                },
                "requiredParameters": ["JSON.String.Param"],
                "outputs": ["FCG_Id__c"]
              },
              "PackJSONObject": {
                "displayName": "Pack JSON Object",
                "type": "read",
                "inputs": ["FCG_Id__c"],
                "outputs": ["JSON.String"]
              }
            }
          },
          "accountURL": {
            "displayName": "accountURL",
            "description": "accountURL",
            "properties": {
              "totalSize": {
                "displayName": "totalSize",
                "type": "string",
                "description": "totalSize Value"
              },
              "records": {
                "displayName": "records is a JSON Object Array of records",
                "type": "extendedString",
                "extendedType": "k2.com/2019/memo",
                "description": "Call the Unpack JSON Object Array List Method on records to resolve"
              }
            },
            "methods": {
              "getAccountId": {
                "displayName": "getAccountId",
                "type": "read",
                "inputs": [],
                "requiredInputs": [],
                "parameters": {
                  "q": {
                    "displayName": "q",
                    "type": "string"
                  },
                  "Authorization": {
                    "displayName": "Authorization",
                    "type": "string"
                  }
                },
                "requiredParameters": ["q", "Authorization"],
                "outputs": ["totalSize", "records"],
                "data": {
                  "httpMethod": "get",
                  "httpPath": "/query"
                }
              }
            }
          },
          "records": {
            "displayName": "records",
            "description": "records",
            "properties": {
              "attributes": {
                "displayName": "attributes",
                "type": "extendedString",
                "extendedType": "k2.com/2019/memo",
                "description": "attributes Value"
              },
              "Name": {
                "displayName": "Name",
                "type": "string",
                "description": "Name Value"
              },
              "Primary_Mobile__c": {
                "displayName": "Primary_Mobile__c",
                "type": "string",
                "description": "Primary_Mobile__c Value"
              },
              "Email__c": {
                "displayName": "Email__c",
                "type": "string",
                "description": "Email__c Value"
              },
              "BillingStreet": {
                "displayName": "BillingStreet",
                "type": "string",
                "description": "BillingStreet Value"
              },
              "BillingCity": {
                "displayName": "BillingCity",
                "type": "string",
                "description": "BillingCity Value"
              },
              "BillingState": {
                "displayName": "BillingState",
                "type": "string",
                "description": "BillingState Value"
              },
              "BillingPostalCode": {
                "displayName": "BillingPostalCode",
                "type": "string",
                "description": "BillingPostalCode Value"
              },
              "CMC_City_Mapping__c": {
                "displayName": "CMC_City_Mapping__c",
                "type": "string",
                "description": "CMC_City_Mapping__c Value"
              },
              "Eligible_in_TCS__c": {
                "displayName": "Eligible_in_TCS__c",
                "type": "boolean",
                "description": "Eligible_in_TCS__c Value"
              },
              "X6_Digit_FCG_Id__c": {
                "displayName": "X6_Digit_FCG_Id__c",
                "type": "string",
                "description": "X6_Digit_FCG_Id__c Value"
              },
              "Total_Payment_Received_for_Onboarding__c": {
                "displayName": "Total_Payment_Received_for_Onboarding__c",
                "type": "decimal",
                "description": "Total_Payment_Received_for_Onboarding__c Value"
              },
              "RC_Transfer_Count_Post_90_Days_Delivery__c": {
                "displayName": "RC_Transfer_Count_Post_90_Days_Delivery__c",
                "type": "decimal",
                "description": "RC_Transfer_Count_Post_90_Days_Delivery__c Value"
              },
              "Dealer_Inventory_More_Than_90_Days__c": {
                "displayName": "Dealer_Inventory_More_Than_90_Days__c",
                "type": "decimal",
                "description": "Dealer_Inventory_More_Than_90_Days__c Value"
              },
              "Forfeiture_Applicable__c": {
                "displayName": "Forfeiture_Applicable__c",
                "type": "decimal",
                "description": "Forfeiture_Applicable__c Value"
              },
              "Dealer_Financing_Eligible__c": {
                "displayName": "Dealer_Financing_Eligible__c",
                "type": "boolean",
                "description": "Dealer_Financing_Eligible__c Value"
              },
              "Id": {
                "displayName": "Id",
                "type": "string",
                "description": "Id Value"
              },
              "Public_URL__c": {
                "displayName": "Public_URL__c",
                "type": "string",
                "description": "Public_URL__c Value"
              },
              "Dealer_Onboarding__r": {
                "displayName": "Dealer_Onboarding__r is a JSON Object of DealerOnboarding",
                "type": "extendedString",
                "extendedType": "k2.com/2019/memo",
                "description": "Call the Unpack JSON Object Read Method on DealerOnboarding to resolve"
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
                    "displayName": "JSON records Object Array String",
                    "description": "JSON String",
                    "type": "string",
                    "extendedType": "k2.com/2019/memo"
                  }
                },
                "requiredParameters": ["JSON.String.Param"],
                "outputs": ["attributes", "Name", "Primary_Mobile__c", "Email__c", "BillingStreet", "BillingCity", "BillingState", "BillingPostalCode", "CMC_City_Mapping__c", "Eligible_in_TCS__c", "X6_Digit_FCG_Id__c", "Total_Payment_Received_for_Onboarding__c", "RC_Transfer_Count_Post_90_Days_Delivery__c", "Dealer_Inventory_More_Than_90_Days__c", "Forfeiture_Applicable__c", "Dealer_Financing_Eligible__c", "Id", "Public_URL__c", "Dealer_Onboarding__r"]
              },
              "PackJSONObject": {
                "displayName": "Pack JSON Object",
                "type": "read",
                "inputs": ["attributes", "Name", "Primary_Mobile__c", "Email__c", "BillingStreet", "BillingCity", "BillingState", "BillingPostalCode", "CMC_City_Mapping__c", "Eligible_in_TCS__c", "X6_Digit_FCG_Id__c", "Total_Payment_Received_for_Onboarding__c", "RC_Transfer_Count_Post_90_Days_Delivery__c", "Dealer_Inventory_More_Than_90_Days__c", "Forfeiture_Applicable__c", "Dealer_Financing_Eligible__c", "Id", "Public_URL__c", "Dealer_Onboarding__r"],
                "outputs": ["JSON.String"]
              }
            }
          },
          "DealerOnboarding": {
            "displayName": "DealerOnboarding",
            "description": "DealerOnboarding",
            "properties": {
              "Name_on_Cancelled_Cheque__c": {
                "displayName": "Name_on_Cancelled_Cheque__c",
                "type": "string",
                "description": "Name_on_Cancelled_Cheque__c Value"
              },
              "Notional_Credit__c": {
                "displayName": "Notional_Credit__c",
                "type": "string",
                "description": "Notional_Credit__c Value"
              },
              "IFSC_code_on_Cancelled_Cheque__c": {
                "displayName": "IFSC_code_on_Cancelled_Cheque__c",
                "type": "string",
                "description": "IFSC_code_on_Cancelled_Cheque__c Value"
              },
              "Bank_Account_Number__c": {
                "displayName": "Bank_Account_Number__c",
                "type": "string",
                "description": "Bank_Account_Number__c Value"
              },
              "Home_Delivery_Status__c": {
                "displayName": "Home_Delivery_Status__c",
                "type": "string",
                "description": "Home_Delivery_Status__c Value"
              },
              "JSON.String": {
                "displayName": "Packed JSON Item",
                "type": "string",
                "extendedType": "k2.com/2019/memo"
              }
            },
            "methods": {
              "UnpackJSONObject": {
                "displayName": "Unpack JSON Object",
                "type": "read",
                "inputs": [],
                "requiredInputs": [],
                "parameters": {
                  "JSON.String.Param": {
                    "displayName": "JSON DealerOnboarding Object String",
                    "description": "JSON String",
                    "type": "string",
                    "extendedType": "k2.com/2019/memo"
                  }
                },
                "requiredParameters": ["JSON.String.Param"],
                "outputs": ["Name_on_Cancelled_Cheque__c", "Notional_Credit__c", "IFSC_code_on_Cancelled_Cheque__c", "Bank_Account_Number__c", "Home_Delivery_Status__c"]
              },
              "PackJSONObject": {
                "displayName": "Pack JSON Object",
                "type": "read",
                "inputs": ["Name_on_Cancelled_Cheque__c", "Notional_Credit__c", "IFSC_code_on_Cancelled_Cheque__c", "Bank_Account_Number__c", "Home_Delivery_Status__c"],
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
        case "accountField":
          await onexecuteaccountField(methodName, parameters, properties, configuration);
          break;

        case "paymentField":
          await onexecutepaymentField(methodName, parameters, properties, configuration);
          break;

        case "FcgId":
          await onexecuteFcgId(methodName, parameters, properties);
          break;

        case "accountURL":
          await onexecuteaccountURL(methodName, parameters, properties, configuration);
          break;

        case "records":
          await onexecuterecords(methodName, parameters, properties);
          break;

        case "DealerOnboarding":
          await onexecuteDealerOnboarding(methodName, parameters, properties);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteaccountField(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "updateAccount":
          await onexecuteaccountFieldupdateAccount(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    async function onexecutepaymentField(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "updatePayment":
          await onexecutepaymentFieldupdatePayment(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    async function onexecuteFcgId(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "UnpackJSONObject":
          await onexecuteFcgIdUnpackJSONObject(parameters);
          break;

        case "PackJSONObject":
          await onexecuteFcgIdPackJSONObject(parameters, properties);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    async function onexecuteaccountURL(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "getAccountId":
          await onexecuteaccountURLgetAccountId(parameters, properties, configuration);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    async function onexecuterecords(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "UnpackJSONObjectArray":
          await onexecuterecordsUnpackJSONObjectArray(parameters);
          break;

        case "PackJSONObject":
          await onexecuterecordsPackJSONObject(parameters, properties);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    async function onexecuteDealerOnboarding(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "UnpackJSONObject":
          await onexecuteDealerOnboardingUnpackJSONObject(parameters);
          break;

        case "PackJSONObject":
          await onexecuteDealerOnboardingPackJSONObject(parameters, properties);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecuteaccountFieldupdateAccount(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/sobjects/Account/FCG_Id__c/${encodeURIComponent(parameters['FCG_Id'])}`;
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
        xhr.open("patch", urlValue + httpPath);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
      });
    }

    function onexecutepaymentFieldupdatePayment(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/sobjects/Payment__c`;
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

    function onexecuteFcgIdUnpackJSONObject(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        try {
          let obj = JSON.parse(parameters["JSON.String.Param"]);

          for (const propKey in obj) {
            if (obj.hasOwnProperty(propKey)) {
              const prop = obj[propKey];
              if (typeof prop == "object") obj[propKey] = JSON.stringify(obj[propKey]);
            }
          }

          postResult(obj);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }

    function onexecuteFcgIdPackJSONObject(parameters, properties, configuration) {
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

    function onexecuteaccountURLgetAccountId(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["ServiceURL"];
        let httpPath = `/query`;
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

    function onexecuterecordsUnpackJSONObjectArray(parameters, properties, configuration) {
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

    function onexecuterecordsPackJSONObject(parameters, properties, configuration) {
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

    function onexecuteDealerOnboardingUnpackJSONObject(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        try {
          let obj = JSON.parse(parameters["JSON.String.Param"]);

          for (const propKey in obj) {
            if (obj.hasOwnProperty(propKey)) {
              const prop = obj[propKey];
              if (typeof prop == "object") obj[propKey] = JSON.stringify(obj[propKey]);
            }
          }

          postResult(obj);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }

    function onexecuteDealerOnboardingPackJSONObject(parameters, properties, configuration) {
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
