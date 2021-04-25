(function () {
    metadata = {
      "systemName": "Salesforce-Dealer.jssp",
      "displayName": "Salesforce-Dealer.jssp",
      "description": "A K2 JSSP Broker for salesforce-Dealer Integration",
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
        },
        "toke_url": {
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
          "SalesforceIntegration": {
            "displayName": "SalesforceIntegration",
            "description": "SalesforceIntegration",
            "properties": {
              "token": {
                "displayName": "token",
                "type": "string",
                "description": "auth token Value"
              },
              "type": {
                "displayName": "type",
                "type": "number",
                "description": "type of call"
              },
              "Name": {
                "displayName": "Name",
                "type": "string",
                "description": "Name of call"
              },
              "Primary_Mobile__c": {
                "displayName": "Primary_Mobile__c",
                "type": "string",
                "description": "Primary_Mobile__c"
              },
              "Email__c": {
                "displayName": "Email__c",
                "type": "string",
                "description": "Email__c"
              },
              "BillingStreet": {
                "displayName": "BillingStreet",
                "type": "string",
                "description": "BillingStreet"
              },
              "BillingCity": {
                "displayName": "BillingCity",
                "type": "string",
                "description": "BillingCity"
              },
              "BillingState": {
                "displayName": "BillingState",
                "type": "string",
                "description": "BillingState"
              },
              "BillingPostalCode": {
                "displayName": "BillingPostalCode",
                "type": "string",
                "description": "BillingPostalCode"
              },
              "BillingCountry": {
                "displayName": "BillingCountry",
                "type": "string",
                "description": "BillingCountry"
              },
              "CMC_City_Mapping__c": {
                "displayName": "CMC_City_Mapping__c",
                "type": "string",
                "description": "CMC_City_Mapping__c of call"
              },
              "Eligible_in_TCS__c": {
                "displayName": "Eligible_in_TCS__c",
                "type": "string",
                "description": "Eligible_in_TCS__c"
              },
              "X6_Digit_FCG_Id__c": {
                "displayName": "X6_Digit_FCG_Id__c",
                "type": "string",
                "description": "X6_Digit_FCG_Id__c of call"
              },
              "Total_Payment_Received_for_Onboarding__c": {
                "displayName": "Total_Payment_Received_for_Onboarding__c",
                "type": "string",
                "description": "Total_Payment_Received_for_Onboarding__c of call"
              },
              "RC_Transfer_Count_Post_90_Days_Delivery__c": {
                "displayName": "RC_Transfer_Count_Post_90_Days_Delivery__c",
                "type": "string",
                "description": "RC_Transfer_Count_Post_90_Days_Delivery__c of call"
              },
              "Dealer_Inventory_More_Than_90_Days__c": {
                "displayName": "Dealer_Inventory_More_Than_90_Days__c",
                "type": "string",
                "description": "Dealer_Inventory_More_Than_90_Days__c of call"
              },
              "Forfeiture_Applicable__c": {
                "displayName": "Forfeiture_Applicable__c",
                "type": "string",
                "description": "Forfeiture_Applicable__c of call"
              },
              "Dealer_Financing_Eligible__c": {
                "displayName": "Dealer_Financing_Eligible__c",
                "type": "string",
                "description": "Dealer_Financing_Eligible__c of call"
              },
              "Id": {
                "displayName": "Id",
                "type": "string",
                "description": "Id of call"
              },
              "Public_URL__c": {
                "displayName": "Public_URL__c",
                "type": "string",
                "description": "Public_URL__c of call"
              },
              "Name_on_Cancelled_Cheque__c": {
                "displayName": "Name_on_Cancelled_Cheque__c",
                "type": "string",
                "description": "Name_on_Cancelled_Cheque__c of call"
              },
              "Notional_Credit__c": {
                "displayName": "Notional_Credit__c",
                "type": "string",
                "description": "Notional_Credit__c of call"
              },
              "IFSC_code_on_Cancelled_Cheque__c": {
                "displayName": "IFSC_code_on_Cancelled_Cheque__c",
                "type": "string",
                "description": "IFSC_code_on_Cancelled_Cheque__c of call"
              },
              "Bank_Account_Number__c": {
                "displayName": "Bank_Account_Number__c",
                "type": "string",
                "description": "Bank_Account_Number__c of call"
              },
              "Home_Delivery_Status__c": {
                "displayName": "Home_Delivery_Status__c",
                "type": "string",
                "description": "Home_Delivery_Status__c of call"
              },
              "FCG_Id__c": {
                "displayName": "FCG_Id__c",
                "type": "string",
                "description": "FCG_Id__c of call"
              },
              "Purpose_of_Payment__c": {
                "displayName": "Purpose_of_Payment__c",
                "type": "string",
                "description": "Purpose_of_Payment__c of call"
              },
              "CurrencyISOCode": {
                "displayName": "CurrencyISOCode",
                "type": "string",
                "description": "CurrencyISOCode of call"
              },
              "RecordTypeId": {
                "displayName": "RecordTypeId",
                "type": "string",
                "description": "RecordTypeId of call"
              },
              "Payment_Processed_Date__c": {
                "displayName": "Payment_Processed_Date__c",
                "type": "string",
                "description": "Payment_Processed_Date__c of call"
              },
              "Amount__c": {
                "displayName": "Amount__c",
                "type": "string",
                "description": "Amount__c of call"
              },
              "Finance_Comments__c": {
                "displayName": "Finance_Comments__c",
                "type": "string",
                "description": "Finance_Comments__c of call"
              },
              "Payment_Receive_Date__c": {
                "displayName": "Payment_Receive_Date__c",
                "type": "string",
                "description": "Payment_Receive_Date__c of call"
              },
              "Payment_Received_Date_and_Time__c": {
                "displayName": "Payment_Received_Date_and_Time__c",
                "type": "string",
                "description": "Payment_Received_Date_and_Time__c of call"
              },
              "LS_ID__c": {
                "displayName": "LS_ID__c",
                "type": "string",
                "description": "LS_ID__c of call"
              },
              "result": {
                "displayName": "result",
                "type": "string",
                "description": "result of call"
              }
            },
            "methods": {
              "generateToken": {
                "displayName": "Get generate Token",
                "type": "read",
                "parameters": {
                  "toke_url": {
                    "displayName": "toke url",
                    "type": "string"
                  }
                },
                "requiredParameters": [],
                "outputs": ["token"]
              },
              "accountDetails": {
                "displayName": "accountDetails",
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
                "requiredParameters": ["methodUrl"],
                "outputs": ["type", "Name", "Primary_Mobile__c", "Email__c", "BillingStreet", "BillingCity", "BillingState", "BillingPostalCode", "BillingCountry", "CMC_City_Mapping__c", "Eligible_in_TCS__c", "X6_Digit_FCG_Id__c", "Total_Payment_Received_for_Onboarding__c", "RC_Transfer_Count_Post_90_Days_Delivery__c", "Forfeiture_Applicable__c", "Dealer_Inventory_More_Than_90_Days__c", "Dealer_Financing_Eligible__c", "Id", "Name_on_Cancelled_Cheque__c", "Notional_Credit__c", "IFSC_code_on_Cancelled_Cheque__c", "Bank_Account_Number__c", "Home_Delivery_Status__c", "Public_URL__c"]
              },
              "updateAccountDetails": {
                "displayName": "updateAccountDetails",
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
              },
              "updatePayment": {
                "displayName": "updatePayment",
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
        case "SalesforceIntegration":
          await onexecuteSalesforceIntegration(methodName, parameters, properties, configuration);
          break;

        default:
          throw new Error("The object " + objectName + " is not supported.");
      }
    };

    async function onexecuteSalesforceIntegration(methodName, parameters, properties, configuration) {
      switch (methodName) {
        case "generateToken":
          await onexecuteSalesforceIntegrationgenerateToken(parameters, properties, configuration);
          break;

        case "accountDetails":
          onexecuteSalesforceIntegrationgenerateToken(parameters, properties, configuration).then(async function resolved(value) {
            let token = value['access_token'];
            await onexecuteSalesforceIntegrationaccountDetails(parameters, properties, configuration, token);
          }, function errored(error) {
            throw new Error("Failed to get the token" + error + parameters["grant_type"] + parameters["client_id"]);
          });
          break;

        case "updateAccountDetails":
          await onexecuteSalesforceIntegrationupdateAccountDetails(parameters);
          break;

        case "updatePayment":
          await onexecuteSalesforceIntegrationupdatePayment(parameters);
          break;

        default:
          throw new Error("The method " + methodName + " is not supported.");
      }
    }

    function onexecuteSalesforceIntegrationgenerateToken(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = configuration["toke_url"];
        let httpPath = encodeURI(`grant_type=${configuration["grant_type"]}&client_id=${configuration["client_id"]}&client_secret=${configuration["client_secret"]}&username=${configuration["username"]}&password=${configuration["password"]}`);
        let xhr = new XMLHttpRequest();
        console.log(httpPath);

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status + httpPath);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              "token": obj.access_token
            });
            resolve(obj);
          } catch (error) {
            reject(error);
          }
        };

        xhr.withCredentials = false;
        xhr.open("post", urlValue);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(httpPath);
      });
    }

    function onexecuteSalesforceIntegrationaccountDetails(parameters, properties, configuration, token) {
      return new Promise((resolve, reject) => {
        let urlValue = parameters["methodUrl"];
        let httpPath = parameters["authToken"];
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status + urlValue + httpPath);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              "type": obj.totalSize,
              "Name": obj.records[0].Name,
              "Primary_Mobile__c": obj.records[0].Primary_Mobile__c,
              "Email__c": obj.records[0].Email__c,
              "BillingStreet": obj.records[0].BillingStreet,
              "BillingCity": obj.records[0].BillingCity,
              "BillingState": obj.records[0].BillingState,
              "BillingPostalCode": obj.records[0].BillingPostalCode,
              "BillingCountry": obj.records[0].BillingCountry,
              "CMC_City_Mapping__c": obj.records[0].CMC_City_Mapping__c,
              "Eligible_in_TCS__c": obj.records[0].Eligible_in_TCS__c,
              "X6_Digit_FCG_Id__c": obj.records[0].X6_Digit_FCG_Id__c,
              "Total_Payment_Received_for_Onboarding__c": obj.records[0].Total_Payment_Received_for_Onboarding__c,
              "RC_Transfer_Count_Post_90_Days_Delivery__c": obj.records[0].RC_Transfer_Count_Post_90_Days_Delivery__c,
              "Forfeiture_Applicable__c": obj.records[0].Forfeiture_Applicable__c,
              "Dealer_Inventory_More_Than_90_Days__c": obj.records[0].Dealer_Inventory_More_Than_90_Days__c,
              "Dealer_Financing_Eligible__c": obj.records[0].Dealer_Financing_Eligible__c,
              "Id": obj.records[0].Id,
              "Name_on_Cancelled_Cheque__c": obj.records[0].Dealer_Onboarding__r.Name_on_Cancelled_Cheque__c,
              "Notional_Credit__c": obj.records[0].Dealer_Onboarding__r.Notional_Credit__c,
              "IFSC_code_on_Cancelled_Cheque__c": obj.records[0].Dealer_Onboarding__r.IFSC_code_on_Cancelled_Cheque__c,
              "Bank_Account_Number__c": obj.records[0].Dealer_Onboarding__r.Bank_Account_Number__c,
              "Home_Delivery_Status__c": obj.records[0].Dealer_Onboarding__r.Home_Delivery_Status__c
            });
            resolve();
          } catch (error) {
            reject(error);
          }
        };

        xhr.withCredentials = false;
        xhr.open("get", urlValue);
        xhr.setRequestHeader("Authorization", "Bearer " + token);
        xhr.send();
      });
    }

    function onexecuteSalesforceIntegrationupdateAccountDetails(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = parameters["methodUrl"];
        let httpPath = parameters["authToken"];
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              "message": obj.message,
              "status": obj.status,
              "registeringAuthority": obj.registeringAuthority,
              "registrationNo": obj.registrationNo,
              "registrationDate": obj.registrationDate,
              "ownerName": obj.ownerName,
              "fitnessUpto": obj.fitnessUpto,
              "taxUpto": obj.taxUpto,
              "rcStatus": obj.rcStatus,
              "nocDetails": obj.nocDetails,
              "financierName": obj.financierName,
              "financed": obj.financed,
              "blackListStatus": obj.blackListStatus,
              "permit": obj.permit
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
        xhr.send();
      });
    }

    function onexecuteSalesforceIntegrationupdatePayment(parameters, properties, configuration) {
      return new Promise((resolve, reject) => {
        let urlValue = parameters["methodUrl"];
        let httpPath = parameters["authToken"];
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              "message": obj.message,
              "status": obj.status,
              "registeringAuthority": obj.registeringAuthority,
              "registrationNo": obj.registrationNo,
              "registrationDate": obj.registrationDate,
              "ownerName": obj.ownerName,
              "fitnessUpto": obj.fitnessUpto,
              "taxUpto": obj.taxUpto,
              "rcStatus": obj.rcStatus,
              "nocDetails": obj.nocDetails,
              "financierName": obj.financierName,
              "financed": obj.financed,
              "blackListStatus": obj.blackListStatus,
              "permit": obj.permit
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
        xhr.send();
      });
    }

}());
//# sourceMappingURL=index.js.map
