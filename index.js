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
                "type": "String",
                "description": "type of call"
              },
              "Name": {
                "displayName": "Name",
                "type": "String",
                "description": "Name of call"
              },
              "Primary_Mobile__c": {
                "displayName": "Primary_Mobile__c",
                "type": "String",
                "description": "Primary_Mobile__c"
              },
              "Email__c": {
                "displayName": "Email__c",
                "type": "String",
                "description": "Email__c"
              },
              "BillingStreet": {
                "displayName": "BillingStreet",
                "type": "String",
                "description": "BillingStreet"
              },
              "BillingCity": {
                "displayName": "BillingCity",
                "type": "String",
                "description": "BillingCity"
              },
              "BillingState": {
                "displayName": "BillingState",
                "type": "String",
                "description": "BillingState"
              },
              "BillingPostalCode": {
                "displayName": "BillingPostalCode",
                "type": "String",
                "description": "BillingPostalCode"
              },
              "BillingCountry": {
                "displayName": "BillingCountry",
                "type": "String",
                "description": "BillingCountry"
              },
              "CMC_City_Mapping__c": {
                "displayName": "CMC_City_Mapping__c",
                "type": "String",
                "description": "CMC_City_Mapping__c of call"
              },
              "Eligible_in_TCS__c": {
                "displayName": "Eligible_in_TCS__c",
                "type": "String",
                "description": "Eligible_in_TCS__c"
              },
              "X6_Digit_FCG_Id__c": {
                "displayName": "X6_Digit_FCG_Id__c",
                "type": "String",
                "description": "X6_Digit_FCG_Id__c of call"
              },
              "Total_Payment_Received_for_Onboarding__c": {
                "displayName": "Total_Payment_Received_for_Onboarding__c",
                "type": "String",
                "description": "Total_Payment_Received_for_Onboarding__c of call"
              },
              "RC_Transfer_Count_Post_90_Days_Delivery__c": {
                "displayName": "RC_Transfer_Count_Post_90_Days_Delivery__c",
                "type": "String",
                "description": "RC_Transfer_Count_Post_90_Days_Delivery__c of call"
              },
              "Dealer_Inventory_More_Than_90_Days__c": {
                "displayName": "Dealer_Inventory_More_Than_90_Days__c",
                "type": "String",
                "description": "Dealer_Inventory_More_Than_90_Days__c of call"
              },
              "Forfeiture_Applicable__c": {
                "displayName": "Forfeiture_Applicable__c",
                "type": "String",
                "description": "Forfeiture_Applicable__c of call"
              },
              "Dealer_Financing_Eligible__c": {
                "displayName": "Dealer_Financing_Eligible__c",
                "type": "String",
                "description": "Dealer_Financing_Eligible__c of call"
              },
              "Forfeiture_Applicable__c": {
                "displayName": "Forfeiture_Applicable__c",
                "type": "String",
                "description": "Forfeiture_Applicable__c of call"
              },
              "Dealer_Financing_Eligible__c": {
                "displayName": "Dealer_Financing_Eligible__c",
                "type": "String",
                "description": "Dealer_Financing_Eligible__c of call"
              },
              "Id": {
                "displayName": "Id",
                "type": "String",
                "description": "Id of call"
              },
              "Public_URL__c": {
                "displayName": "Public_URL__c",
                "type": "String",
                "description": "Public_URL__c of call"
              },
              "Name_on_Cancelled_Cheque__c": {
                "displayName": "Name_on_Cancelled_Cheque__c",
                "type": "String",
                "description": "Name_on_Cancelled_Cheque__c of call"
              },
              "Notional_Credit__c": {
                "displayName": "Notional_Credit__c",
                "type": "String",
                "description": "Notional_Credit__c of call"
              },
              "IFSC_code_on_Cancelled_Cheque__c": {
                "displayName": "IFSC_code_on_Cancelled_Cheque__c",
                "type": "String",
                "description": "IFSC_code_on_Cancelled_Cheque__c of call"
              },
              "Bank_Account_Number__c": {
                "displayName": "Bank_Account_Number__c",
                "type": "String",
                "description": "Bank_Account_Number__c of call"
              },
              "Home_Delivery_Status__c": {
                "displayName": "Home_Delivery_Status__c",
                "type": "String",
                "description": "Home_Delivery_Status__c of call"
              },
              "FCG_Id__c": {
                "displayName": "FCG_Id__c",
                "type": "String",
                "description": "FCG_Id__c of call"
              },
              "Purpose_of_Payment__c": {
                "displayName": "Purpose_of_Payment__c",
                "type": "String",
                "description": "Purpose_of_Payment__c of call"
              },
              "CurrencyISOCode": {
                "displayName": "CurrencyISOCode",
                "type": "String",
                "description": "CurrencyISOCode of call"
              },
              "RecordTypeId": {
                "displayName": "RecordTypeId",
                "type": "String",
                "description": "RecordTypeId of call"
              },
              "Payment_Processed_Date__c": {
                "displayName": "Payment_Processed_Date__c",
                "type": "String",
                "description": "Payment_Processed_Date__c of call"
              },
              "Amount__c": {
                "displayName": "Amount__c",
                "type": "String",
                "description": "Amount__c of call"
              },
              "Finance_Comments__c": {
                "displayName": "Finance_Comments__c",
                "type": "String",
                "description": "Finance_Comments__c of call"
              },
              "Payment_Receive_Date__c": {
                "displayName": "Payment_Receive_Date__c",
                "type": "String",
                "description": "Payment_Receive_Date__c of call"
              },
              "Payment_Received_Date_and_Time__c": {
                "displayName": "Payment_Received_Date_and_Time__c",
                "type": "String",
                "description": "Payment_Received_Date_and_Time__c of call"
              },
              "LS_ID__c": {
                "displayName": "LS_ID__c",
                "type": "String",
                "description": "LS_ID__c of call"
              },
              "result": {
                "displayName": "result",
                "type": "String",
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
                "requiredParameters": ["toke_url"],
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
                "requiredParameters": ["methodUrl", "authToken"],
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
          var tok = await onexecuteSalesforceIntegrationgenerateToken(parameters, properties, configuration);
          await onexecuteSalesforceIntegrationaccountDetails(parameters, properties, configuration, tok);
          break;

        case "accountDetails":
          var tok = await onexecuteSalesforceIntegrationgenerateToken(parameters, properties, configuration);
          await onexecuteSalesforceIntegrationaccountDetails(parameters, properties, configuration, tok);
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
        let urlValue = parameters["toke_url"];
        var data = new FormData();
        data.append('grant_type', 'password');
        data.append('client_id', '3MVG9N6eDmZRVJOnipGVBgmEvwhCHPQNe_FpjuUev34zZ0TjyTAYhDRs3wT7FA5q1wjAjkOHXsx==');
        data.append('client_secret', '6B0FD69D60400F9A96A129CE14C9EF14836B6C9F99817FACAECB4D4D887C8D73');
        data.append('username', 'k2integration@olx.com');
        data.append('password', 'k2salesforce123n53F4lseZBKt6b5NmUEYNR0L');
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
            resolve(obj.access_token);
          } catch (error) {
            reject(error);
          }
        };

        xhr.withCredentials = false;
        xhr.open("post", urlValue);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
      });
    }

    function onexecuteSalesforceIntegrationaccountDetails(parameters, properties, configuration, tok) {
      return new Promise((resolve, reject) => {
        let urlValue = parameters["methodUrl"];
        let httpPath = tok;
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + xhr.status);
            let obj = JSON.parse(xhr.responseText);
            postResult({
              "type": obj.records.totalSize,
              "Name": obj.records.Name,
              "Primary_Mobile__c": obj.records.Primary_Mobile__c,
              "Email__c": obj.records.Email__c,
              "BillingStreet": obj.records.BillingStreet,
              "BillingCity": obj.records.BillingCity,
              "BillingState": obj.records.BillingState,
              "BillingPostalCode": obj.records.BillingPostalCode,
              "BillingCountry": obj.records.BillingCountry,
              "CMC_City_Mapping__c": obj.records.CMC_City_Mapping__c,
              "Eligible_in_TCS__c": obj.records.Eligible_in_TCS__c,
              "X6_Digit_FCG_Id__c": obj.records.X6_Digit_FCG_Id__c,
              "Total_Payment_Received_for_Onboarding__c": obj.records.Total_Payment_Received_for_Onboarding__c,
              "RC_Transfer_Count_Post_90_Days_Delivery__c": obj.records.RC_Transfer_Count_Post_90_Days_Delivery__c,
              "Forfeiture_Applicable__c": obj.records.Forfeiture_Applicable__c,
              "Dealer_Inventory_More_Than_90_Days__c": obj.records.Dealer_Inventory_More_Than_90_Days__c,
              "Dealer_Financing_Eligible__c": obj.records.Dealer_Financing_Eligible__c,
              "Id": obj.records.Id,
              "Name_on_Cancelled_Cheque__c": obj.records.Dealer_Onboarding__r.Name_on_Cancelled_Cheque__c,
              "Notional_Credit__c": obj.records.Dealer_Onboarding__r.Notional_Credit__c,
              "IFSC_code_on_Cancelled_Cheque__c": obj.records.Dealer_Onboarding__r.IFSC_code_on_Cancelled_Cheque__c,
              "Bank_Account_Number__c": obj.records.Dealer_Onboarding__r.Bank_Account_Number__c,
              "Home_Delivery_Status__c": obj.records.Dealer_Onboarding__r.Home_Delivery_Status__c
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
