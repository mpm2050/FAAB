//# ****************************************************************************#
//# Copyright notice: This license enables reusers to distribute, remix, adapt, #
//# and build upon the material in any medium or format, so long as attribution is
//# given to the creator. The license allows for commercial use. CC BY includes #
//# the following elements:														#
//# BY: credit must be given to the creator.									#
//# ****************************************************************************#
//# ****************************************************************************#
//# MODIFICATION  CONTROL  LOG                                                  #
//# --------------------------------------------------------------------------- #
//# Mod  Date                 Programmer           Comment                      #
//# --------------------------------------------------------------------------- #
//# 001  21:00 16-05-2024    Pitchaimuthu M       Initial version               #
//#                                                                             #
//# ****************************************************************************#

$(document).ready(function () {
    //* ****************************************************************************
    //* ** Declarations
    //* ****************************************************************************
    var callFrom = "Reports"

    //* ****************************************************************************
    //* ** Cookies Declarations
    //* ****************************************************************************



    //* ****************************************************************************
    //* ** General Actions
    //* ****************************************************************************

    intAppendGrid = function () {

        $('#tblAppendGrid').appendGrid({
            caption: function (cell) {
                $(cell).text('Purchase order items');
            },
            initRows: 3,
            autoColumnWidth: false,
            columns: [
                {
                    name: "company",
                    display: "Company"
                },
                {
                    name: "name",
                    display: "Contact Person"
                },
                {
                    name: "country",
                    display: "Country",
                    type: "select",
                    ctrlOptions: [
                        "",
                        "Germany",
                        "Hong Kong",
                        "Japan",
                        "Malaysia",
                        "Taiwan",
                        "United Kingdom",
                        "United States"]
                },
                {
                    name: "isNPO",
                    display: "NPO?",
                    type: "checkbox",
                    cellClass: "has-text-centered"
                },
                {
                    name: "orderPlaced",
                    display: "Order Placed",
                    type: "number",
                    ctrlAttr: {
                        min: 0,
                        max: 10000
                    }
                },
                {
                    name: "memberSince",
                    display: "Member Since",
                    type: "date",
                    ctrlAttr: {
                        maxlength: 10
                    }
                },
                {
                    name: "uid",
                    type: "hidden",
                    value: "0"
                }],
            sectionClasses: {
                table: 'is-narrow is-fullwidth'
            },
            //afterRowAppended: function (caller, parentRowIndex, addedRowIndex) {
            //    var CellCtrl = $('#tblAppendGrid').appendGrid("getCellCtrl", "quantity", addedRowIndex)
            //    $(CellCtrl).attr("disabled", false);
            //},
            //afterRowInserted: function (caller, parentRowIndex, addedRowIndex) {
            //    var CellCtrl = $('#tblAppendGrid').appendGrid("getCellCtrl", "quantity", addedRowIndex)
            //    $(CellCtrl).attr("disabled", false);

            //    var getAllValue = $('#tblAppendGrid').appendGrid('getAllValue');

            //    for (var z = 0; z < addedRowIndex.length; z++) {

            //        var addrowindex_loc = addedRowIndex[z]
            //        var parentRowVal = getAllValue[addrowindex_loc + 1];

            //        $.each(parentRowVal, function (index, value) {
            //            $('#tblAppendGrid').appendGrid("setCtrlValue", index, addrowindex_loc, value);
            //        });

            //    }

            //},
            //beforeRowRemove: function (caller, rowIndex) {
            //    // Do something
            //    var purchaseorderitem_id = $('#tblAppendGrid').appendGrid("getCtrlValue", "purchaseorderitem_id", rowIndex)

            //    var dialog = confirm("Are you sure to remove this row?");
            //    if (dialog === true) {
            //        DeletedPurchaseorderitem_ids.push({
            //            "purchaseorderitem_id": getGUIDInput(purchaseorderitem_id)
            //        })
            //    }
            //    return dialog;
            //},
            //dataLoaded: function (caller, records) {
            //    //console.log(records)
            //    //console.log("dataLoaded")
            //    gettxtTotal();
            //    $("div.appendGrid table.head thead td").css("white-space", "pre-wrap")
            //},
            //rowDataLoaded: function (caller, record, rowIndex, uniqueIndex) {
            //    console.log("rowDataLoaded")
            //    var CellCtrl = $('#tblAppendGrid').appendGrid("getCellCtrl", "item_id", rowIndex)
            //    CellCtrl.setAttribute("item_id", record.item_id);

            //    var CellCtrl_unit_price = $('#tblAppendGrid').appendGrid("getCellCtrl", "unit_price", rowIndex)
            //    var CellCtrl_unit_priceVal = $(CellCtrl_unit_price).val()
            //    $(CellCtrl_unit_price).val(convertToDouble(CellCtrl_unit_priceVal, 5))

            //    var CellCtrl_quantity = $('#tblAppendGrid').appendGrid("getCellCtrl", "quantity", rowIndex)
            //    var CellCtrl_quantityVal = $(CellCtrl_quantity).val()
            //    $(CellCtrl_quantity).val(convertToDouble(CellCtrl_quantityVal))

            //    var CellCtrl_amount = $('#tblAppendGrid').appendGrid("getCellCtrl", "amount", rowIndex)
            //    var CellCtrl_amountVal = $(CellCtrl_amount).val()
            //    $(CellCtrl_amount).val(convertToDouble(CellCtrl_amountVal))

            //    var CellCtrl_is_FOC = $('#tblAppendGrid').appendGrid("getCellCtrl", "is_FOC", rowIndex)
            //    var CellCtrl_item_name = $('#tblAppendGrid').appendGrid("getCellCtrl", "item_name", rowIndex)
            //    var CellCtrl_last_td = $('#tblAppendGrid').appendGrid("getCellCtrl", "last_td", rowIndex)

            //    //$(CellCtrl).attr("disabled", false);
            //    var po_txtstatus = $("#txtstatus").val();

            //    if (po_txtstatus == "" || po_txtstatus == "Approved") {
            //        $(CellCtrl_quantity).attr("disabled", false);
            //        $(CellCtrl_is_FOC).attr("disabled", false);
            //        $(CellCtrl_item_name).attr("disabled", false);
            //        //$('#tblAppendGrid button .last').css("display", "");
            //        $('.last').css("display", "");
            //    } else {
            //        $(CellCtrl_quantity).attr("disabled", true);
            //        $(CellCtrl_is_FOC).attr("disabled", true);
            //        $(CellCtrl_item_name).attr("disabled", true);

            //        //$('#tblAppendGrid button .last').css("display", "None");
            //        $('.last').css("display", "None");
            //    }


            //    //$('#tblAppendGrid .my-target-input').prop('disabled', true);

            //    var item_nameCellCtrl = $('#tblAppendGrid').appendGrid("getCellCtrl", "item_name", rowIndex)
            //    item_nameCellCtrl.setAttribute("title", record.item_name);

            //    //var CellCtrl = $('#tblAppendGrid').appendGrid("getCellCtrl", "received_quantity", rowIndex)

            //},
            //customFooterButtons: [
            //    //{ uiButton: { icon: 'ui-icon-check', showLabel: false }, btnAttr: { title: 'Validation' }, click: function (evt) { alert('Great! Validation passed!'); }, atTheFront: true },
            //    //{
            //    //    uiButton: { icon: 'ui-icon-refresh', label: 'Refresh', showLabel: false }, btnCss: { 'color': '#ff0000' }, click: function (evt) {
            //    //        //alert('You clicked `Refresh` button!');
            //    //        $("#diagSynchVendors").dialog("open")
            //    //        $("#diagSynchVendorsMessage").html("Do you want synchronize the Items for the vendor?")
            //    //    }, atTheFront: true
            //    //},
            //    //{ uiButton: { icon: 'ui-icon-arrowthickstop-1-s', showLabel: false }, btnAttr: { title: 'Download Data' }, click: function (evt) { alert('Download is in process...'); } }
            //],
            // Optional CSS classes, to make table slimmer!
            sectionClasses: {
                table: "table-sm",
                control: "form-control-sm",
                buttonGroup: "btn-group-sm"
            }
        });
    }



    getPurchaseOrderItem = function (postData) {

        $.ajax({
            url: 'tableDetails',
            type: 'GET',
            dataType: 'json',
            data: {
                "filter": {
                    "username": "username",
                    "function_name": "funcname_txt",                    
                },
                "postData": {
                    "Mode": "R",
                    "Records": [],
                    "Result": "",
                    "Message": ""
                },
                "jtParams": {
                    "jtStartIndex": "0",
                    "jtPageSize": "10",
                    "jtSorting": "ASC company"
                }
            },
            success: function (ResponseJsonE) {
                $('#tblAppendGrid').appendGrid("load", [])

                $('#tblAppendGrid').appendGrid("load", ResponseJsonE)

                //if (ResponseJsonE != null && ResponseJsonE.postData.Records != null) {
                //    if (ResponseJsonE.postData.Result == "OK" && ResponseJsonE.postData.Records.length > 0) {

                //        $("#txtTotal").attr("readonly", true).css("background-color", "whitesmoke")
                //        if (ResponseJsonE != null && ResponseJsonE.postData.Records != null) {
                //            $('#tblAppendGrid').appendGrid("load", ResponseJsonE.postData.Records)
                //        } else {
                //            $('#tblAppendGrid').appendGrid("load", [])
                //        }
                //    }
                //}
            },
            error: function () {
                $('#tblAppendGrid').appendGrid("load", [])
            }
        });
    }

    //* ****************************************************************************
    //* ** General Actions
    //* ****************************************************************************
    $.when(
        intAppendGrid()
    )
        .then(function () {
            getPurchaseOrderItem()
        });

    //* ****************************************************************************
    //* ** Events
    //* ****************************************************************************
    $("#btnName").on("click", null, null, function (event) {

    })
})