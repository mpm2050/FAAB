
$(function () {


    gloabalVar.Options = []

    //GLobal variable definitions are START here

    //GLobal variable definitions are END here

    //Common Functions
    convertToString = function (inputStr) {
        var resultStr = "";

        if (inputStr == null || inputStr == undefined) {
            resultStr = ""
        } else {
            resultStr = inputStr
        }
        resultStr = resultStr.trim()
        return resultStr;
    }
    convertToDateTime = function (inputStr) {
        var resultStr = "";

        if (inputStr == null || inputStr == undefined) {
            resultStr = getCurrentDate()
        } else {
            resultStr = inputStr
        }
        resultStr = resultStr.trim()
        return resultStr;
    }
    getJavaScriptDate = function (givenDateCSharp) {

        var created_date = ""
        if (givenDateCSharp != undefined) {
            created_date = givenDateCSharp.split("T")[0]
        }

        if (created_date == "1973-01-01") {
            created_date = ""
        }
        return created_date
    }
    convertToDouble = function (inputNum, precisionLength) {
        
        if (precisionLength === undefined || precisionLength === null) {
            precisionLength = 2;
        }
        var resultNum = 0;
        var resultNum = parseFloat(inputNum);
        if (isNaN(resultNum) == true) {
            resultNum = 0;
        }
        else {
            resultNum = parseFloat(resultNum.toFixed(5));
        }

        return resultNum.toFixed(precisionLength);
    }



    getGUIDInput = function (givenGUID) {
        var _givenGUID = ""
        if (givenGUID === "" || givenGUID === undefined || givenGUID === null || givenGUID === "null") {
            _givenGUID = "00000000-0000-0000-0000-000000000000"
        } else {
            _givenGUID = givenGUID
        }
        return _givenGUID
    }

    getCurrentDate = function (givenCurrentDate) {
        var _givenCurrentDate = ""
        if (givenCurrentDate === "" || givenCurrentDate === undefined || givenCurrentDate === null) {
            var d = new Date();
            _givenCurrentDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        } else {
            _givenCurrentDate = givenCurrentDate
        }
        return _givenCurrentDate
    }

    //Common Functions End

    screenStFunctions = {

        autocompleteSetValue: function (autoCompleteId, autoCompleteValue) {
            $(autoCompleteId).autocomplete("search", autoCompleteValue);
            var menuselVendorNo = $(autoCompleteId).autocomplete("widget");
            $(menuselVendorNo[0].children[0]).click();
        }

        , initDialogs: function (htmlElementIdRClass) {
            $(htmlElementIdRClass).dialog({
                autoOpen: false,
                width: "90%",
                //maxWidth: "768px",
                minHeight: 100,
                maxHeight: window.innerHeight,
                modal: true,
                position: {
                    my: "top",
                    at: "top",
                    of: "#dialogsShowingPosition"
                },
                //position: ['top','69px', window],
                open: function (event, ui) {
                    $("body").css({
                        overflow: 'hidden'
                    });
                    $(".ui-widget-overlay").css({
                        background: "whitesmoke",//"rgb(0, 0, 0)",
                        opacity: ".70 !important",
                        filter: "Alpha(Opacity=70)",
                    });
                },
                show: {
                    effect: "slideDown",
                    duration: 500
                },
                hide: {
                    effect: "slideUp",
                    duration: 500
                },
                beforeClose: function (event, ui) {
                    $("body").css({ overflow: 'inherit' })
                }
            });

            $(htmlElementIdRClass).css("max-height", "450px !important")
        }
        , LangTrans: function (ids) {

            //if (SecurityManager.lang == "zh-CN") {
            if (language_cookie == "zh-CN") {
                var menuList = [
                    "#btnPOStatusSpan",
                    "#btnCreateNewPurchaseOrderSpan",
                    ".btnCreateNewPurchaseOrderSpanClass",
                    "#btnCreateNewPOTemplateSpan",
                    "#btnGoodsReceiveNoteSpan",
                    "#btnGoodsReturnSpan",
                    "#btnStocksSpan",
                    "#btnStocksTransferSpan",
                    "#btnEmailsSpan",
                    "#btnUserSpan",
                    "#btnPendingPurchaseOrdersSpan",
                    "#btnHQPOArchivesSpan",
                    "#btnHQCreateNewPurchaseOrderSpan",
                    "#btnHQGRNArchivesSpan",
                    "#btnHQGoodReturnSpan",
                    "#btnHQStockArchivesSpan",
                    "#btnHQStocksTransferArchivesSpan",
                    "#btnHQUserSpan",
                    "#btnHQEmailsSpan",
                    "#btnHQSynchroniseSpan",
                    "#btnPurchaseOrdersVendorSpan",
                    "#btnGoodReturnVendorSpan",
                    "#btnUserVendorSpan",
                ];
                ids = ids.concat("Pass IDS", menuList)
                console.log(ids)
                var record = []

                $(ids).each(function (index, val) {
                    $(val).each(function () {

                        record.push(
                            {
                                labelId: $(this).fullSelector(),
                                //labelId: val,
                                labelDesc: $(this).html(),
                                labelDesc_zh_CN: ""
                            }
                        )
                    })
                });

                console.log("Generated IDS", record)


                $.ajax({
                    url: 'KoufuPlusProcessEF',
                    type: 'POST',
                    dataType: 'json',
                    data: objJsonVSE("LangTrans", "R", record),
                    success: function (ResponseJsonE) {
                        if (ResponseJsonE != null && ResponseJsonE.postData.Records != null) {

                            if (ResponseJsonE.postData.Result == "OK") {

                                console.log("JSON response data", ResponseJsonE.postData.Records)
                                $.each(ResponseJsonE.postData.Records, function (key, val) {
                                    var labelId = val.labelId
                                    console.log(val)
                                    $(labelId).html(val.labelDesc_zh_CN)

                                    if (labelId === "#btnHQCreateNewPurchaseOrderSpan")
                                        console.log("Hi all")


                                    //var labelIdLOC = val.labelId.split("#")
                                    //if (labelIdLOC.length > 0) {
                                    //    var lab_Id = "#" + labelIdLOC[(labelIdLOC.length - 1)]
                                    //    lab_Id = lab_Id.replace("#.", ".")

                                    //    $(lab_Id).html(val.labelDesc_zh_CN)

                                    //    if (lab_Id === "#btnCreateNewPurchaseOrderSpan") {
                                    //        console.log("Hi all")
                                    //    }
                                    //}
                                })

                            } else {
                                //$dfd.resolve(ResponseJsonE.postData);
                            }
                        } else {
                            //$dfd.reject();
                        }
                    },
                    error: function () {
                        //$dfd.reject();
                    }
                });
            }
        }
        , datePicker: function (datePickerFieldId, buttonIdOnClickShowDate, datePickerFieldChangeActionName) {

            $(datePickerFieldId).datepicker({
                dateFormat: "yy-mm-dd",
                changeMonth: true,
                changeYear: true,
                showOtherMonths: true,
                selectOtherMonths: true,
                showAnim: "slideDown",
                //autoSize: true,
                beforeShow: function (textbox, instance) {
                    instance.dpDiv.css({
                        //marginTop: (-textbox.offsetHeight) + 'px',
                        //marginLeft: textbox.offsetWidth + 'px'
                        //marginTop: textbox.offsetHeight + 'px',
                        //marginLeft: (-textbox.offsetLeft + 100) + 'px',
                        //width: textbox.Width + 'px'
                    });
                    textbox.readOnly = true
                    textbox.autocomplete = "off"
                }
            })//.blur()
            //.on('change', function () {
            //    datePickerFieldChangeActionName
            //});

            $(datePickerFieldId).css("background-color", "white")

            ///This idea is not working so put click event at corresponding js pages
            //buttonIdOnClickShowDate.click(function () {
            //    $(datePickerFieldId).datepicker("show")
            //})
        }
        , accordion: function (htmlElementIdRClass) {
            $(htmlElementIdRClass).accordion({
                collapsible: true,
                heightStyle: "content",
                active: 0
            });
        }
    }



    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: 'fade',
            duration: 2000
        },
        hide: {
            effect: 'fade',
            duration: 2000
        },
        open: function () {
            $(this).dialog('close');
        },
    });

    showErrorOrMessage = function (labelId, msg) {

        var messageRowDivId = "#div_" + labelId
        $(labelId).html(msg);
        var displayStyle = "none";

        if (msg != null && msg != undefined && msg.length > 0) {
            displayStyle = "block";
        }
        $(messageRowDivId).css(
            {
                display: displayStyle
            }
        )
    }

    // Read a page's GET URL variables and return them as an associative array.
    getUrlVars = function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    };

    remove_duplicates = function (arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            ret_arr.push(key);
        }
        return ret_arr;
    }
    makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    freezeTable = function (jtableElementId) {
        $freezetableDivId = jtableElementId.replace("#", "") + "_freezetable_" + makeid(5)

        $.when(
            wrapJtable(jtableElementId)
        ).then(function () {

            //$namespace = "freezeTableWrapper jtable-main-container"
            $(jtableElementId).find('.freezeTableWrapper').freezeTable({
                namespace: $freezetableDivId,
                freezeColumn: true,
                columnNum: 0
            })

            $(jtableElementId).find(".clone-head-table-wrap").addClass("jtable-main-container")
            $(jtableElementId).find(".clone-column-table-wrap").addClass("jtable-main-container")

            $jtableElementId_height = $(jtableElementId).find(".jtable").height()
            $(jtableElementId).find(".clone-column-table-wrap").height($jtableElementId_height)
        })
    }

    wrapJtable = function (jtableElementId) {
        $jtables = $(jtableElementId).find(".jtable")
        //$.each($jtables, function (index, value)
        //{

        var parentTag = $jtables.parent()[0].className;

        if (parentTag !== "freezeTableWrapper jtable-main-container") {
            $jtables.wrap("<div class='freezeTableWrapper jtable-main-container'></div>");
        }
        //})
    }

    moveNextControl = function () {
        $("input,select").keypress(function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            var target_id = event.target.id
            if (keycode == '13') {

                if (target_id == "txtscancode_cod" || target_id == "txtno_cod" || target_id == "seluom_cod") {
                    $("#txtqty_dec").focus()
                }
                else {
                    parent = $(this).parent().parent()
                    next = parent.next().find('.st_tab')
                    next.focus()
                }
                return false;
            }
        })
    }
    GetUserIP = function () {
        var ret_ip;

        $.get('http://jsonip.com/', function (r) {
            ret_ip = r.ip;
        });
        return ret_ip;
    }



    $.ajaxSetup({
        async: true,
        beforeSend: function (xhr, options) {
            //var baseUrlApi = baseUrl + '/api/service/';
            //baseUrl is assigned inside the layout sript file
            options.url = baseUrlApi + options.url;
            $("#progressbar").progressbar({ value: false });
            $("#load").show();
        },
        ajaxStart: function () {

        },
        complete: function (event, xhr, settings) {
            $("#progressbar").progressbar({ value: true });
            $("#load").hide();
        }
    })

    getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {

            eqIndex = sURLVariables[i].indexOf("=")
            sParameterName = sURLVariables[i].split('=');

            parsedTokenVal = sURLVariables[i].substring(eqIndex + 1)

            if (sParameterName[0] === sParam) {
                //return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                return parsedTokenVal === undefined ? true : decodeURIComponent(parsedTokenVal);
            }
        }
    };
    showCurrentLocation = function () {
        $("#CurLoc").html($.cookie("location_code"));
    }
    getJtParams = function (jtStartIndex, jtPageSize) {

        if (jtStartIndex == undefined || jtStartIndex == null) {
            jtStartIndex = 0
        }

        if (jtPageSize == undefined || jtPageSize == null) {
            jtPageSize = 0
        }

        jtParams = new Object()
        jtParams.jtStartIndex = jtStartIndex
        jtParams.jtPageSize = jtPageSize
        jtParams.TotalRecordCount = 0

        return jtParams
    }

    showLabelMessage = function (idLabel, message) {

        $(idLabel).html(message)
        setTimeout(function () {
            $(idLabel).html("")
        }, 4000);
        //$(idLabel).toggle("slow", function () {
        //    //// check paragraph once toggle effect is completed
        //    //if ($("#UOMListContainer").is(":visible")) {
        //    //    alert("The paragraph  is visible.");
        //    //} else {
        //    //    alert("The paragraph  is hidden.");
        //    //}
        //});
    }
    assignBackButtonLink = function (btnBack_href) {
        $("#btnBack").removeAttr('href');
        SecurityManager.generate();
        //strHSHAKey = getUrlParameter("token");
        //var btnBack_href = backButtonHref + strHSHAKey;
        $("#btnBack").attr('href', btnBack_href);
    }
    strHSHAKey = $.cookie("strHSHAKey")
    //assignBackButtonLink()
    showCurrentLocation()

    normaliseValue = function (inputValue) {
        if (inputValue == null || inputValue == undefined) {
            inputValue = ""
        }
        return inputValue
    }

    objJsonVSEToString = function (funcname_txt, mode, records, jtParams) {
        JsonVSEObject = objJsonVSE(funcname_txt, mode, records, jtParams)
        return $.param(JsonVSEObject)
    }

    objJsonVSE = function (funcname_txt, mode, records, jtParams) {

        if (funcname_txt == "ValidateUser") {
            loginE = records[0]
            username = loginE.username
            comp = loginE.comp
        } else {
            username = SecurityManager.username
            comp = SecurityManager.comp
        }

        if (jtParams == null || jtParams == undefined) {
            jtParams = {
                "jtStartIndex": 0,
                "jtPageSize": 0,
                "jtSorting": ""
            }
        }
        else if (jtParams.jtSorting === undefined) {
            jtParams.jtSorting = ""
        }
        //else {
        //    jtParams.jtSorting = ""
        //}
        if (records == null || records == undefined) {
            records = []
        }

        if (jtParams.jtPageSize == 0) jtParams.jtPageSize = 10

        //$(".jtable").CongelarFilaColumna();
        var outlet_id_cookie = getGUIDInput($.cookie("outlet_id_cookie"));
        var vendor_id_cookie = getGUIDInput($.cookie("vendor_id_cookie"));
        var hq_user_id_cookie = getGUIDInput($.cookie("vendor_id_cookie"));
        dataJsonVSE = {
            "filter": {
                "username": username,
                "function_name": funcname_txt,
                "company_name": comp,
                "outlet_id": outlet_id_cookie,
                "vendor_id": vendor_id_cookie
            },
            "postData": {
                "Mode": mode,
                "Records": records,
                "Result": "",
                "Message": ""
            },
            "jtParams": {
                "jtStartIndex": jtParams.jtStartIndex,
                "jtPageSize": jtParams.jtPageSize,
                "jtSorting": jtParams.jtSorting
            }
        }

        return dataJsonVSE
    }

    find_precision = function precision(a) {
        if (!isFinite(a)) return 0;
        var e = 1, p = 0;
        while (Math.round(a * e) / e !== a) { e *= 10; p++; }
        return p;
    }

    location_code_cookie = $.cookie("location_code")

    transfer_status_cookie = $.cookie("transfer_status_cookie")
    from_location_code_cookie = $.cookie("from_location_code_cookie")
    language_cookie = $.cookie("language_cookie")
    //Cookies
    utletid_cookie = $.cookie("utletid_cookie")
    user_id_cookie = $.cookie("user_id_cookie")
    user_info_cookie = $.cookie("user_info_cookie")
    //console.log(user_id_cookie)
    //console.log(utletid_cookie)
    user_info_cookie_json = JSON.parse(user_info_cookie)

    $("#user_name").html(user_info_cookie_json.first_name + " " + user_info_cookie_json.last_name)
    if (user_info_cookie_json.type === 1) {
        $("#outlet_menu").show()
        $("#hq_menu").remove()
        $("#vendor_menu").remove()
    }
    else if (user_info_cookie_json.type === 2) {
        $("#outlet_menu").remove()
        $("#hq_menu").show()
        $("#vendor_menu").remove()
    } else if (user_info_cookie_json.type === 3) {
        $("#outlet_menu").remove()
        $("#hq_menu").remove()
        $("#vendor_menu").show()
    }
});
$('#sign_out').click(function () {
    //callLogOut()
    //SecurityManager.logout();
    //$.removeCookie("location_code");
    window.location = baseUrl;
});

//$('#open_menu').click(function () {
//    $("#main_menu_koufu_plus").toggle("slide-down");
//});

$('#open_menu').trigger("click")

var fontSize = 100;//parseInt($("body").css("font-size"));
$('#font_increase').click(function () {
    fontSize = fontSize + 5;
    document.body.style.zoom = fontSize + "%";
});

$('#font_normal').click(function () {
    fontSize = 100;
    document.body.style.zoom = fontSize + "%";
});

$(".lang_class").click(function (e) {
    //e.preventDefault();
    if (e.target.id === "lang_English") {
        $.cookie("language_cookie", "en-US", { path: '/' });
    } else {
        $.cookie("language_cookie", "zh-CN", { path: '/' });
    }
});


//$(".container-fluid").mouseenter(function () {
//    $("#main_menu_koufu_plus").toggle("slide-down");
//})

//$('#open_menu').mouseenter(function () {
//    $("#main_menu_koufu_plus").toggle("slide-down");
//})

$('#font_decrease').click(function () {
    fontSize = fontSize - 5;
    document.body.style.zoom = fontSize + "%";
});

var gloabalVar = [];
var accordionOptions = {}
var strHSHAKey = "";
var LangTransVals = [];
var LOTListContainer_listAction = null
var LOTListContainer_createAction = null
var show_delete_lot_field = false


$.fn.fullSelector = function () {
    var path = this.parents().addBack();
    var quickCss = path.get().map(function (item) {
        var self = $(item),
            id = item.id ? '#' + item.id : '',
            clss = item.classList.length ? item.classList.toString().split(' ').map(function (c) {
                return '.' + c;
            }).join('') : '',
            name = item.nodeName.toLowerCase(),
            index = self.siblings(name).length ? ':nth-child(' + (self.index() + 1) + ')' : '';

        if (name === 'html' || name === 'body') {
            return name;
        }
        return name + index + id + clss;

    }).join(' > ');

    return quickCss;
};


var round = (function () {
    // treat negative numbers a different way
    var roundNeg = function (n) {
        var int = Math.floor(n),
            diff = Math.abs(n - int);
        // special expression for diff === 0.5
        if (diff === 0.5) {
            return n >= 0 ? Math.round(n) : Math.round(n) - 1;
        }
        // just use Math.round otherwise
        return Math.round(n);
    };
    // the shift method
    var shift = function (number, exponent) {
        var numArray = ("" + number).split("e");
        return + (numArray[0] + "e" + (numArray[1] ? (+numArray[1] + exponent) : exponent));
    };
    // precision rounding
    var roundPre = function (number, precision, roundMethod) {
        return shift(roundMethod(shift(number, +precision)), -precision);
    };
    // how to format a number
    var format1 = function (n) {
        return String(n);
    };
    // public method
    return function (n, precision, roundMethod, format) {
        precision = precision === undefined ? 0 : precision;
        roundMethod = roundMethod === undefined ? roundNeg : roundMethod;
        format = format === undefined ? format1 : format;
        var n = roundPre(n, precision, roundMethod);
        return {
            n: n,
            str: format(n),
            valueOf: function () {
                return this.n;
            },
            toString: function () {
                return this.str;
            }
        };
    };

}
    ());