/*This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.*/

module.exports = {
    GrabToken: function(data) {
        var settings = {
            "url": "https://app.greenchoice.nl/token",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                "grant_type": "password",
                "client_id": "MobileApp",
                "client_secret": "A6E60EBF73521F57",
                "username": data.user,
                "password": data.pass
            },
            "error": function() {
                $('button.path').text('An error occurred')
            }
        }

        return settings
    },
    GetOvereenkomst: function(data) {
        var settings = {
            "url": "https://app.greenchoice.nl/api/v1/klant/getovereenkomsten",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${data.token}`,
            },
            "error": function() {
                $('button.path').text('An error occurred')
            }
        }

        return settings
    },
    GetVerbruik: function(data) {
        var settings = {
            "url": `https://app.greenchoice.nl/api/v2/verbruik/getverbruikperiodes?overeenkomstId=${data.OvereenkomstID}&startDate=${data.StartDate}&endDate=${data.EndDate}&year=0&month=0&isGas=false&ksDate=`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${data.token}`
            },
            "error": function() {
                $('button.path').text('An error occurred')
            }
        }

        return settings
    },
    GetOpwekking: function(data) {
        var settings = {
            "url": `https://monitoringapi.solaredge.com/site/${data.site}/energy?timeUnit=DAY&startDate=${data.StartDate}&endDate=${data.EndDate}&api_key=${data.key}`,
            "method": "GET",
            "timeout": 0,
            "error": function() {
                $('button.path').text('An error occurred')
            }
        }

        return settings
    }
}