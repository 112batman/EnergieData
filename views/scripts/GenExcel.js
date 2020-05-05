/*This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.*/

function GenExcel(FunctionData) {

const excel = require('exceljs')
const path = require('path')

var workbook = new excel.Workbook()

workbook.creator = 'Tijn Hoftijzer'
workbook.lastModifiedBy = 'EnergieData'

workbook.calcProperties.fullCalcOnLoad = true

workbook.views = 
[
    {
        x: 0,
        y: 0,
        width: 10000,
        height: 20000,
        firstSheet: 0,
        activeTab: 1,
        visibility: 'visible'
    }
]

var sheet = workbook.addWorksheet('Sheet 1', {views: [{state: 'frozen', ySplit: 1}]})

const api = require('./api')
var token
var data
var data2

var query = api.GrabToken({user: FunctionData.GC_User, pass: FunctionData.GC_Pass})
$.ajax(query).done(res => {
    token = res.access_token
    query = api.GetOvereenkomst({token: token})
    $.ajax(query).done(res => {
        query = api.GetVerbruik({OvereenkomstID: res[0].Id, StartDate: FunctionData.StartDate, EndDate: FunctionData.EndDate_GC, token: token})
        $.ajax(query).done(res => {
            data = res
            query = api.GetOpwekking({site: FunctionData.SE_Site, StartDate: FunctionData.StartDate, EndDate: FunctionData.EndDate_SE, key: FunctionData.SE_Key})
            $.ajax(query).done(res => {
                data2 = res
                WriteExcel()
            })
        })
    })
})

async function WriteExcel() {

    if(data[0].BeginDatum !== `${FunctionData.StartDate}T00:00:00`) return $('button.path').text('Invalid start date.')

    var row = 2
    var row2 = 2
    
    sheet.getCell('A1').value = 'Datum'
    sheet.getColumn('A').width = 15
    sheet.getCell('B1').value = 'Levering [kWh]'
    sheet.getColumn('B').width = 20
    sheet.getCell('C1').value = 'Teruglevering [kWh]'
    sheet.getColumn('C').width = 20
    sheet.getCell('D1').value = 'Opwekking [kWh]'
    sheet.getColumn('D').width = 20
    sheet.getCell('E1').value = 'Direct verbruik [kWh]'
    sheet.getColumn('E').width = 20

    data2.energy.values.forEach(e => {
        sheet.getCell(`D${row2}`).value = e.value / 1000
        sheet.getCell(`E${row2}`).value = e.value / 1000
        row2 += 1
    })
    data.forEach(e => {
        sheet.getCell(`A${row}`).value = e.BeginDatum.split('T')[0]
        if(e.Levering.IsGeschat === false) {
            sheet.getCell(`B${row}`).value = e.Levering.Verbruik
        }else {
            sheet.getCell(`B${row}`).value =  'Geen data'
        }
        if(e.Teruglevering.IsGeschat === false) {
            sheet.getCell(`C${row}`).value = e.Teruglevering.Verbruik
            sheet.getCell(`E${row}`).value -= e.Teruglevering.Verbruik
        }else {
            sheet.getCell(`C${row}`).value =  'Geen data'
            sheet.getCell(`E${row}`).value = 'Geen data'
        }
        row += 1
    })

    workbook.xlsx.writeFile(path.join(FunctionData.path, `EnergieData ${FunctionData.StartDate} tm ${FunctionData.EndDate_SE}.xlsx`))
    $('button.path').text('Done! Ready for next request.')
}

}