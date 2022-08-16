// import { Base64 } from 'js-base64';
const CHG_ID = 'chgFile';
const PR_ID = 'PRFile';
let srtarray = []
let array2d = []

const chgInput = document.querySelector('#chgFile');
const prInput = document.querySelector('#PRFile');
prInput.addEventListener('change', readfile);
chgInput.addEventListener('change', readfile);
function readfile(e) {
    const reader = new FileReader;
    const file = e.target.files[0];
    reader.readAsText(file);
    reader.onload = function () {
        if (e.target.id === CHG_ID) {
            srtarray = reader.result.split('\n')
            var filtered = srtarray.filter(word => word.length > 0);
            console.log(filtered)
            console.log(filtered.length % 3)
            if (filtered.length % 3 != 0) {
                alert('檢查SRT檔案!')
                return
            } 
            main(filtered)
            prInput.disabled=false
        }else {
                xml = reader.result
                console.log(xml)
                jsonedit()
            }
        reader.onerror = function () {
            alert('無法讀取檔案！');
        };

    }
}
// function readfile2(e) {
//     const reader = new FileReader;
//     const file = e.target.files[0];
//     reader.readAsText(file);
//     reader.onload = function () {
//         xml = reader.result
//         console.log(xml)
//         jsonedit()
//     }
//     reader.onerror = function () {
//         alert('無法讀取檔案！');
//     };

// }
function main(filtered) {
    a = arrayfilter(filtered, 3, 0)
    // a = filtered.filter(function(value, index, Arr) {
    //     return index % 3 == 0;
    // });
    a = a.toString().replace(/\r/g, "").split(",")
    a = a.map(str => {
        return Number(str);
    });
    c = arrayfilter(filtered, 3, 2)
    c = c.toString().replace(/\r/g, "").split(",")
    b = arrayfilter(filtered, 3, 1)
    console.log(b)
    stringhandler = b.toString().replace(/\r/g, "").replace(/:/g, ",").replace(/ --> /g, ",").split(",")

    const intarray = stringhandler.map(str => {
        return Number(str);
    });
    console.log(stringhandler)
    console.log(intarray)
    h1 = arrayfilter(intarray, 8, 0)
    m1 = arrayfilter(intarray, 8, 1)
    s1 = arrayfilter(intarray, 8, 2)
    ms1 = arrayfilter(intarray, 8, 3)
    h2 = arrayfilter(intarray, 8, 4)
    m2 = arrayfilter(intarray, 8, 5)
    s2 = arrayfilter(intarray, 8, 6)
    ms2 = arrayfilter(intarray, 8, 7)

    a.forEach((_, i) => (array2d[i] = [i, Math.round((h1[i] * 3600 + m1[i] * 60 + s1[i] + ms1[i] / 1000) * 25), Math.round((h2[i] * 3600 + m2[i] * 60 + s2[i] + ms2[i] / 1000) * 25), c[i], transfer(c[i])]));
    console.log(array2d)

}


function arrayfilter(input, step, count) {
    result = input.filter(function (value, index, Arr) {
        return index % step == count;
    });
    return result
}


function transfer(text) {
    const b64 = "Zg8AAAAAAAB7ACIAbQBTAGgAYQBkAG8AdwBGAG8AbgB0AE0AYQBwAEgAYQBzAGgAIgA6AG4AdQBsAGwALAAiAG0AVABlAHgAdABQAGEAcgBhAG0AIgA6AHsAIgBtAEEAbABpAGcAbgBtAGUAbgB0ACIAOgAyAC4AMAAsACIAbQBCAGEAYwBrAEYAaQBsAGwAQwBvAGwAbwByACIAOgAwAC4AMAAsACIAbQBCAGEAYwBrAEYAaQBsAGwATwBwAGEAYwBpAHQAeQAiADoAMAAuADAALAAiAG0AQgBhAGMAawBGAGkAbABsAFMAaQB6AGUAIgA6ADAALgAwACwAIgBtAEIAYQBjAGsARgBpAGwAbABWAGkAcwBpAGIAbABlACIAOgBmAGEAbABzAGUALAAiAG0ARABlAGYAYQB1AGwAdABSAHUAbgAiADoAWwBdACwAIgBtAEgAZQBpAGcAaAB0ACIAOgAwAC4AMAAsACIAbQBIAGkAbgBkAGkARABpAGcAaQB0AHMAIgA6AGYAYQBsAHMAZQAsACIAbQBJAG4AZABpAGMAIgA6AGYAYQBsAHMAZQAsACIAbQBJAHMATQBhAHMAawAiADoAZgBhAGwAcwBlACwAIgBtAEkAcwBNAGEAcwBrAEkAbgB2AGUAcgB0AGUAZAAiADoAZgBhAGwAcwBlACwAIgBtAEkAcwBWAGUAcgB0AGkAYwBhAGwAVABlAHgAdAAiADoAZgBhAGwAcwBlACwAIgBtAEwAZQBhAGQAaQBuAGcAIgA6ADAALgAwACwAIgBtAEwAaQBnAGEAdAB1AHIAZQBzACIAOgBmAGEAbABzAGUALAAiAG0ATABpAG4AZQBDAGEAcABUAHkAcABlACIAOgAwAC4AMAAsACIAbQBMAGkAbgBlAEoAbwBpAG4AVAB5AHAAZQAiADoAMAAuADAALAAiAG0ATQBpAHQAZQByAEwAaQBtAGkAdAAiADoAMAAuADAALAAiAG0ATgB1AG0AUwB0AHIAbwBrAGUAcwAiADoAMQAuADAALAAiAG0AUgBUAEwAIgA6AGYAYQBsAHMAZQAsACIAbQBTAGgAYQBkAG8AdwBBAG4AZwBsAGUAIgA6ADEAMwA1AC4AMAAsACIAbQBTAGgAYQBkAG8AdwBCAGwAdQByACIAOgA0ADAALgAwACwAIgBtAFMAaABhAGQAbwB3AEMAbwBsAG8AcgAiADoANAAxADQANAA5ADUAOQAuADAALAAiAG0AUwBoAGEAZABvAHcATwBmAGYAcwBlAHQAIgA6ADcALgAwACwAIgBtAFMAaABhAGQAbwB3AE8AcABhAGMAaQB0AHkAIgA6ADcANQAuADAALAAiAG0AUwBoAGEAZABvAHcAUwBpAHoAZQAiADoAMAAuADAALAAiAG0AUwBoAGEAZABvAHcAVgBpAHMAaQBiAGwAZQAiADoAZgBhAGwAcwBlACwAIgBtAFMAdAB5AGwAZQBTAGgAZQBlAHQAIgA6AHsAIgBtAEEAZABkAGkAdABpAG8AbgBhAGwAUwB0AHIAbwBrAGUAQwBvAGwAbwByACIAOgBbAF0ALAAiAG0AQQBkAGQAaQB0AGkAbwBuAGEAbABTAHQAcgBvAGsAZQBWAGkAcwBpAGIAbABlACIAOgBbAF0ALAAiAG0AQQBkAGQAaQB0AGkAbwBuAGEAbABTAHQAcgBvAGsAZQBXAGkAZAB0AGgAIgA6AFsAXQAsACIAbQBCAGEAcwBlAGwAaQBuAGUATwBwAHQAaQBvAG4AIgA6AHsAIgBtAFAAYQByAGEAbQBWAGEAbAB1AGUAcwAiADoAWwBbADAALgAwACwAMAAuADAAXQBdAH0ALAAiAG0AQgBhAHMAZQBsAGkAbgBlAFMAaABpAGYAdAAiADoAewAiAG0AUABhAHIAYQBtAFYAYQBsAHUAZQBzACIAOgBbAFsAMAAuADAALAAwAC4AMABdAF0AfQAsACIAbQBDAGEAcABzAE8AcAB0AGkAbwBuACIAOgB7ACIAbQBQAGEAcgBhAG0AVgBhAGwAdQBlAHMAIgA6AFsAWwAwAC4AMAAsADAALgAwAF0AXQB9ACwAIgBtAEYAYQB1AHgAQgBvAGwAZAAiADoAewAiAG0AUABhAHIAYQBtAFYAYQBsAHUAZQBzACIAOgBbAFsAMAAsAGYAYQBsAHMAZQBdAF0AfQAsACIAbQBGAGEAdQB4AEkAdABhAGwAaQBjACIAOgB7ACIAbQBQAGEAcgBhAG0AVgBhAGwAdQBlAHMAIgA6AFsAWwAwACwAZgBhAGwAcwBlAF0AXQB9ACwAIgBtAEYAaQBsAGwAQwBvAGwAbwByACIAOgB7ACIAbQBQAGEAcgBhAG0AVgBhAGwAdQBlAHMAIgA6AFsAWwAwAC4AMAAsADEANgA3ADcANwAyADEANQAuADAAXQBdAH0ALAAiAG0ARgBpAGwAbABPAHYAZQByAFMAdAByAG8AawBlACIAOgB7ACIAbQBQAGEAcgBhAG0AVgBhAGwAdQBlAHMAIgA6AFsAWwAwACwAdAByAHUAZQBdAF0AfQAsACIAbQBGAGkAbABsAFYAaQBzAGkAYgBsAGUAIgA6AHsAIgBtAFAAYQByAGEAbQBWAGEAbAB1AGUAcwAiADoAWwBbADAALAB0AHIAdQBlAF0AXQB9ACwAIgBtAEYAbwBuAHQATgBhAG0AZQAiADoAewAiAG0AUABhAHIAYQBtAFYAYQBsAHUAZQBzACIAOgBbAFsAMAAsACIAQQByAGkAYQBsAE0AVAAiAF0AXQB9ACwAIgBtAEYAbwBuAHQAUwBpAHoAZQAiADoAewAiAG0AUABhAHIAYQBtAFYAYQBsAHUAZQBzACIAOgBbAFsAMAAuADAALAA2ADAALgAwAF0AXQB9ACwAIgBtAEsAZQByAG4AaQBuAGcAIgA6AHsAIgBtAFAAYQByAGEAbQBWAGEAbAB1AGUAcwAiADoAWwBbADAALgAwACwAMAAuADAAXQBdAH0ALAAiAG0AUwB0AHIAbwBrAGUAQwBvAGwAbwByACIAOgB7ACIAbQBQAGEAcgBhAG0AVgBhAGwAdQBlAHMAIgA6AFsAWwAwAC4AMAAsADAALgAwAF0AXQB9ACwAIgBtAFMAdAByAG8AawBlAFYAaQBzAGkAYgBsAGUAIgA6AHsAIgBtAFAAYQByAGEAbQBWAGEAbAB1AGUAcwAiADoAWwBbADAALAB0AHIAdQBlAF0AXQB9ACwAIgBtAFMAdAByAG8AawBlAFcAaQBkAHQAaAAiADoAewAiAG0AUABhAHIAYQBtAFYAYQBsAHUAZQBzACIAOgBbAFsAMAAuADAALAAxADAALgAwAF0AXQB9ACwAIgBtAFQAZQB4AHQAIgA6ACIAQAAiACwAIgBtAFQAcgBhAGMAawBpAG4AZwAiADoAewAiAG0AUABhAHIAYQBtAFYAYQBsAHUAZQBzACIAOgBbAFsAMAAuADAALAAwAC4AMABdAF0AfQAsACIAbQBUAHMAdQBtAGkAIgA6AHsAIgBtAFAAYQByAGEAbQBWAGEAbAB1AGUAcwAiADoAWwBbADAALgAwACwAMAAuADAAXQBdAH0ALAAiAG0AVQBuAGQAZQByAGwAaQBuAGUAIgA6AG4AdQBsAGwAfQAsACIAbQBUAGEAYgBXAGkAZAB0AGgAIgA6ADQAMAAwAC4AMAAsACIAbQBWAGUAcgB0AGkAYwBhAGwAQQBsAGkAZwBuAG0AZQBuAHQAIgA6ADAALgAwACwAIgBtAFcAaQBkAHQAaAAiADoAMAAuADAAfQAsACIAbQBVAHMAZQBMAGUAZwBhAGMAeQBUAGUAeAB0AEIAbwB4ACIAOgBmAGEAbABzAGUALAAiAG0AVgBlAHIAcwBpAG8AbgAiADoAMQAuADAAfQA=";
    var FUCKADOBE = new Uint8Array([102, 15, 0, 0, 0, 0, 0, 0])

    var chgbin = Base64.toUint8Array(b64)
    var chgrep = ((chgbin.toString()).replace('102,15,0,0,0,0,0,0,', '')).replace(/,0/g, '')
    console.log(chgrep)
    var tranbin = new Uint8Array(chgrep.split(","))
    var tranutf8 = Base64.decode(Base64.fromUint8Array(tranbin))
    var replace = tranutf8.replace('@', text)
    var encode = (Base64.encode(replace))
    var encode2 = new Uint8Array(((Base64.toUint8Array(encode)).join(',,')).split(","))
    var newarray = new Uint8Array(encode2.length + FUCKADOBE.length + 1)
    newarray.set(FUCKADOBE)
    newarray.set(encode2, FUCKADOBE.length)
    var encoded = Base64.fromUint8Array(newarray)
    return encoded
}

function jsonedit() {
    var x2js = new X2JS({
        arrayAccessFormPaths: [
            "xmeml.sequence.media.video.track.clipitem"
        ]
    });
    var xmlText = xml;
    var jsonObj = x2js.xml_str2json(xmlText);
    console.log(jsonObj)
    console.log(array2d)
    for (i = 0; i < array2d.length; i++) {
        var base = {
            // "-id": 'clipitem-' + array2d[i][0],
            "masterclipid": "masterclip-" + array2d[i][0],
            "name": array2d[i][3],
            "enabled": "true",
            "rate": {
                "timebase": "25",
                "ntsc": "false"
            },
            "start": array2d[i][1],
            "end": array2d[i][2],
            "alphatype": "none",
            "pixelaspectratio": "square",
            "anamorphic": "false",
            "file": {
                // "-id": 'file-' + array2d[i][0],
                "name": "Graphic",
                "mediaSource": "GraphicAndType",
                "media": {
                    "video": {
                        "samplecharacteristics": {
                            "width": "1920",
                            "height": "1080",
                            "anamorphic": "false",
                            "pixelaspectratio": "square",
                            "fielddominance": "none"
                        }
                    }
                }
            },
            "filter": {
                "effect": {
                    "name": array2d[i][3],
                    "effectid": "GraphicAndType",
                    "effectcategory": "graphic",
                    "effecttype": "filter",
                    "pproBypass": "false",
                    "parameter": {
                        // "-authoringApp": 'PremierePro',
                        "parameterid": "1",
                        "name": "Source Text",
                        "value": array2d[i][4]
                    }
                }
            }
        }
        jsonObj.xmeml.sequence.media.video.track.clipitem[i] = base
        jsonObj.xmeml.sequence.media.video.track.clipitem[i]._id = "clipitem-" + array2d[i][0]
        jsonObj.xmeml.sequence.media.video.track.clipitem[i].file._id = "file-" + array2d[i][0]
        jsonObj.xmeml.sequence.media.video.track.clipitem[i].filter.effect.parameter._authoringApp = "PremierePro"
        // jsonObj.xmeml.sequence.media.video.track[i] = base
    }
    console.log(jsonObj.xmeml.sequence.media.video.track.clipitem[0]._id)
    console.log(jsonObj.xmeml.sequence.media.video.track.clipitem[0].file._id)
    console.log(jsonObj.xmeml.sequence.media.video.track.clipitem[0].filter.effect.parameter._authoringApp)
    console.log(base)
    delete jsonObj.xmeml.sequence.media.video.track.clipitem['dummy']
    console.log(jsonObj.xmeml.sequence.media.video)
    var xmlAsStr = x2js.json2xml_str(jsonObj);
    console.log(xmlAsStr)
    xmlAsStr = xmlAsStr.replace(/'/g, '"')

    var text = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE xmeml>'
    combine = text + xmlAsStr
    console.log(combine)
    let blob = new Blob([combine], {
        type: 'text/plain;charset=utf-8'
    });
    const a = document.createElement('a');
    const file = new Blob([combine], { type: 'text/plain;charset=utf-8' });
    a.href = URL.createObjectURL(file);
    a.download = 'srt.xml';
    a.click();
    URL.revokeObjectURL(a.href);
    a.remove();
}
