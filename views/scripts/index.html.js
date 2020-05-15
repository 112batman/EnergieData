/*This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.*/

const cryptojs = require('crypto-js')
const fs = require('fs')
const datetime = require('./modules/datetime')

const { app } = require('electron').remote

if(!fs.existsSync(path.join(app.getPath('userData'), 'CACHE'))) {
  fs.mkdirSync(path.join(app.getPath('userData'), 'CACHE'))
}

var FunctionData = {
    Path: '',
    StartDate: '',
    EndDate_GC: '',
    EndDate_SE: '',
    GC_User: '',
    GC_Pass: '',
    SE_Key: '',
    SE_Site: ''

}

function encrypt(string) {
  //encrypt function

  return result
}

function decrypt(object) {
 //decrypt function

  return originalText
}

$('button.path').click(async () => {
  $('button.path').text('Busy')

  FunctionData.path =  $('input.path').val().toString()
  FunctionData.StartDate = $('input.StartDate').val().toString()
  FunctionData.EndDate_SE = $('input.EndDate').val().toString()
  FunctionData.EndDate_GC = datetime.AddDays($('input.EndDate').val().toString(), 1)
  FunctionData.GC_User = $('input.User').val().toString()
  FunctionData.GC_Pass = $('input.Pass').val().toString()
  FunctionData.SE_Key = $('input.Key').val().toString()
  FunctionData.SE_Site = $('input.Site').val().toString()

  //fs.writeFileSync(path.join(app.getPath('userData'), 'CACHE', 'PATH'), encrypt(FunctionData.path).toString())
  //fs.writeFileSync(path.join(app.getPath('userData'), 'CACHE', 'USER'), encrypt(FunctionData.GC_User).toString())
  //fs.writeFileSync(path.join(app.getPath('userData'), 'CACHE', 'PASS'), encrypt(FunctionData.GC_Pass).toString())
  //fs.writeFileSync(path.join(app.getPath('userData'), 'CACHE', 'KEY'), encrypt(FunctionData.SE_Key).toString())
  //fs.writeFileSync(path.join(app.getPath('userData'), 'CACHE', 'SITE'), encrypt(FunctionData.SE_Site).toString())

  GenExcel(FunctionData)
})

//$('input.path').val((decrypt(fs.readFileSync(path.join(app.getPath('userData'), 'CACHE', 'PATH')).toString())))
//$('input.User').val((decrypt(fs.readFileSync(path.join(app.getPath('userData'), 'CACHE', 'USER')).toString())))
//$('input.Pass').val((decrypt(fs.readFileSync(path.join(app.getPath('userData'), 'CACHE', 'PASS')).toString())))
//$('input.Key').val((decrypt(fs.readFileSync(path.join(app.getPath('userData'), 'CACHE', 'KEY')).toString())))
//$('input.Site').val((decrypt(fs.readFileSync(path.join(app.getPath('userData'), 'CACHE', 'SITE')).toString())))

