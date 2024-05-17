CRUD EF BasedV5
XXUNINUM


private JObject GoodsReceiveNoteRead(JObject objJObject)
{

    JsonVSE<GoodsReceiveNote> objRequestJsonERead = null;
    JsonVSE objResponseJsonERead = null;

    try
    {
        log.Info("XXUNINUMR: Enter");
        objRequestJsonERead = objJObject.ToObject<JsonVSE<GoodsReceiveNote>>();
        objResponseJsonERead = objJObject.ToObject<JsonVSE>();
        var crud_type = objJObject["postData"]["Records"][0]["crud_type"].ToString();
        using (var context = new KoufuPortalLiveEntities())
        {
            List<GoodsReceiveNote> emails = new List<Models.DB.GoodsReceiveNote>();

            if (objRequestJsonERead.postData.Records.Count > 0)
            {
                var template_id = objRequestJsonERead.postData.Records[0].template_id;
                var name = objRequestJsonERead.postData.Records[0].name;
                var jtStartIndex = objRequestJsonERead.jtParams.jtStartIndex;
                var jtPageSize = objRequestJsonERead.jtParams.jtPageSize;
                var jtSorting = objRequestJsonERead.jtParams.jtSorting;

                var objIQueryable = (from a in context.GoodsReceiveNotes
                                     from b in context.Vendors
                                          .Where(w => w.vendor_id == a.vendor_id).DefaultIfEmpty()
                                     from c in context.Outlets
                                        .Where(wo => wo.outlet_id == a.outlet_id).DefaultIfEmpty()
                                     from d in context.so_template
                                        .Where(wu => wu.so_template_id == a.Weekday).DefaultIfEmpty()
                                     select new
                                     {
                                         a.template_id,
                                         a.outlet_id,
                                         a.template_no,
                                         a.name,
                                         template_name = a.name,
                                         a.created_date,
                                         a.remark,
                                         a.vendor_id,
                                         a.counter_code,
                                         a.IsSOTemplate,
                                         a.Weekday,
                                         a.IsSynced,
                                         a.IsStandard,

                                         //b.vendor_id,
                                         vendor_name = b.name,
                                         b.sending_method,
                                         b.vendoremail,
                                         vendor_code = b.code,
                                         b.vendorfaxno,
                                         b.Address,
                                         b.Address2,
                                         b.Address3,
                                         b.City,
                                         b.VAT_Bus__Posting_Group,
                                         b.minimalordervalue,
                                         b.currency_id,
                                         b.phone_no,

                                         //c.outlet_id,
                                         outlet_name = c.name,
                                         c.address,
                                         c.budget_limit,
                                         outlet_code = c.code,
                                         c.current_po_id,
                                         c.current_po_template_id,
                                         c.current_cashpo_id,
                                         c.current_grn_id,
                                         c.current_st_id,
                                         c.current_gre_id,
                                         c.current_sw_id,
                                         c.current_su_id,
                                         c.current_se_id,

                                         d.so_template_id,
                                         d.so_template_desc,
                                         d.so_template_abbr
                                     })
                           .AsQueryable();

                if (crud_type == "template_name")
                {
                    objIQueryable = objIQueryable.Where(w => w.name.Contains(name));
                }

                if (jtSorting == "created_date DESC")
                {
                    objIQueryable = objIQueryable.OrderByDescending(o => o.created_date);
                }
                else
                {
                    objIQueryable = objIQueryable.OrderBy(o => o.created_date);
                }

                objResponseJsonERead.postData.TotalRecordCount = objIQueryable.Count();
                objResponseJsonERead.postData.Records = objIQueryable
                            .Skip(jtStartIndex)
                           .Take(jtPageSize).ToList();

                objResponseJsonERead.postData.Result = "OK";
                objResponseJsonERead.postData.Message = "Data retrieved successfully";
            }

        }
    }
    catch (Exception ex)
    {
        objResponseJsonERead.postData.Result = "ERROR";
        objResponseJsonERead.postData.Message = ex.Message;

        log.Error("XXUNINUMR: Error" + ex.Message);

        if (ex.InnerException != null)
        {
            log.Error("XXUNINUMR: InnerException " + ex.InnerException.Message);
        }
        log.Error("XXUNINUMR: StackTrace" + ex.ToString());
    }
    finally
    {
        log.Info("XXUNINUMR: Exit");
    }
    return JObject.FromObject(objResponseJsonERead);

    //JsonVSE<GoodsReceiveNote> objRequestJsonERead = null;
    //JsonVSE objResponseJsonERead = null;
    //try
    //{
    //    objRequestJsonERead = objJObject.ToObject<JsonVSE<GoodsReceiveNote>>();
    //    objResponseJsonERead = objJObject.ToObject<JsonVSE>();
    //    var crud_type = objJObject["postData"]["Records"][0]["crud_type"].ToString();
    //    using (var context = new KoufuPortalLiveEntities())
    //    {
    //        List<GoodsReceiveNote> emails = context.GoodsReceiveNotes.ToList();

    //        objResponseJsonERead.postData.Records = emails;
    //        objResponseJsonERead.postData.Result = "OK";
    //    }

    //}
    //catch (Exception ex)
    //{
    //    objResponseJsonERead.postData.Result = "ERROR";
    //    objResponseJsonERead.postData.Message = ex.Message;
    //    log.Error("A075918022021A: Error" + ex.Message);
    //}
    //return JObject.FromObject(objResponseJsonERead);
}

private JObject GoodsReceiveNoteModfiy(JObject objJObject)
{
    JsonVSE<GoodsReceiveNote> objRequestJsonEModify = null;
    JsonVSE objResponseJsonEReadModify = null;
    try
    {
        log.Info("XXUNINUMM: Enter");
        objRequestJsonEModify = objJObject.ToObject<JsonVSE<GoodsReceiveNote>>();
        objResponseJsonEReadModify = objJObject.ToObject<JsonVSE>();
        var crud_type = objJObject["postData"]["Records"][0]["crud_type"].ToString();
        using (var context = new KoufuPortalLiveEntities())
        {
            var template_id = objRequestJsonEModify.postData.Records[0].template_id;

            GoodsReceiveNote existGoodsReceiveNote = context.GoodsReceiveNotes
                .Where(w => w.template_id == template_id)
                .FirstOrDefault();

            if (existGoodsReceiveNote == null)
            {
                existGoodsReceiveNote = context.GoodsReceiveNotes.Add(new GoodsReceiveNote
                {
                    template_id = Guid.NewGuid(),
                    ////body_format = objRequestJsonEModify.postData.Records[0].body_format,
                    //template_id = objRequestJsonEModify.postData.Records[0].template_id,
                    outlet_id = objRequestJsonEModify.postData.Records[0].outlet_id,
                    template_no = getOrderNumber(OrderType.GoodsReceiveNote, objRequestJsonEModify.postData.Records[0].outlet_id),
                    name = objRequestJsonEModify.postData.Records[0].name,
                    created_date = objRequestJsonEModify.postData.Records[0].created_date,
                    remark = objRequestJsonEModify.postData.Records[0].remark,
                    vendor_id = objRequestJsonEModify.postData.Records[0].vendor_id,
                    counter_code = objRequestJsonEModify.postData.Records[0].counter_code,
                    IsSOTemplate = objRequestJsonEModify.postData.Records[0].IsSOTemplate,
                    Weekday = objRequestJsonEModify.postData.Records[0].Weekday,
                    IsSynced = objRequestJsonEModify.postData.Records[0].IsSynced,
                    IsStandard = objRequestJsonEModify.postData.Records[0].IsStandard
                });
            }
            else
            {
                //existGoodsReceiveNote.template_id = template_id;
                //existGoodsReceiveNote.outlet_id = objRequestJsonEModify.postData.Records[0].outlet_id;
                //existGoodsReceiveNote.template_no = getOrderNumber(OrderType.GoodsReceiveNote);
                existGoodsReceiveNote.name = objRequestJsonEModify.postData.Records[0].name;
                existGoodsReceiveNote.created_date = objRequestJsonEModify.postData.Records[0].created_date;
                existGoodsReceiveNote.remark = objRequestJsonEModify.postData.Records[0].remark;
                existGoodsReceiveNote.vendor_id = objRequestJsonEModify.postData.Records[0].vendor_id;
                existGoodsReceiveNote.counter_code = objRequestJsonEModify.postData.Records[0].counter_code;
                existGoodsReceiveNote.IsSOTemplate = objRequestJsonEModify.postData.Records[0].IsSOTemplate;
                existGoodsReceiveNote.Weekday = objRequestJsonEModify.postData.Records[0].Weekday;
                existGoodsReceiveNote.IsSynced = objRequestJsonEModify.postData.Records[0].IsSynced;
                existGoodsReceiveNote.IsStandard = objRequestJsonEModify.postData.Records[0].IsStandard;
            }
            context.SaveChanges();

            // Update the GoodsReceiveNoteItem s
            List<GoodsReceiveNoteItem> objGoodsReceiveNoteItems = objJObject["postData"]["Records"][0]["GoodsReceiveNoteItem"].ToObject<List<GoodsReceiveNoteItem>>();

            foreach (GoodsReceiveNoteItem objobjGoodsReceiveNoteItem in objGoodsReceiveNoteItems)
            {
                var existGoodsReceiveNoteItem = context.GoodsReceiveNoteItems
                    .Where(w => w.template_item_id == objobjGoodsReceiveNoteItem.template_item_id
                    && w.template_id == existGoodsReceiveNote.template_id)
                    .FirstOrDefault();

                if (existGoodsReceiveNoteItem == null)
                {
                    //Add new item
                    context.GoodsReceiveNoteItems.Add(new GoodsReceiveNoteItem
                    {
                        template_item_id = Guid.NewGuid(),
                        item_id = objobjGoodsReceiveNoteItem.item_id,
                        quantity = objobjGoodsReceiveNoteItem.quantity,
                        unit_price = objobjGoodsReceiveNoteItem.unit_price,
                        currency_id = objobjGoodsReceiveNoteItem.currency_id,
                        template_id = existGoodsReceiveNote.template_id,
                        UOM = objobjGoodsReceiveNoteItem.UOM,
                        SequenceID = objobjGoodsReceiveNoteItem.SequenceID,
                        row_no = objobjGoodsReceiveNoteItem.row_no
                    });
                }
                else
                {
                    //Update Item
                    //objobjGoodsReceiveNoteItem.template_item_id = objobjGoodsReceiveNoteItem.template_id;
                    objobjGoodsReceiveNoteItem.item_id = objobjGoodsReceiveNoteItem.item_id;
                    objobjGoodsReceiveNoteItem.quantity = objobjGoodsReceiveNoteItem.quantity;
                    objobjGoodsReceiveNoteItem.unit_price = objobjGoodsReceiveNoteItem.unit_price;
                    objobjGoodsReceiveNoteItem.currency_id = objobjGoodsReceiveNoteItem.currency_id;
                    //objobjGoodsReceiveNoteItem.template_id = existGoodsReceiveNote.template_id;
                    objobjGoodsReceiveNoteItem.UOM = objobjGoodsReceiveNoteItem.UOM;
                    objobjGoodsReceiveNoteItem.SequenceID = objobjGoodsReceiveNoteItem.SequenceID;
                    objobjGoodsReceiveNoteItem.row_no = objobjGoodsReceiveNoteItem.row_no;
                }
                context.SaveChanges();
            }

            //Delete the DeletedTemplate_Item_Ids
            //var objJObjectJson = objJObject["postData"]["Records"][0]["DeletedTemplate_Item_Ids"] as JArray;
            JArray objJObjectJson = JArray.Parse(objJObject["postData"]["Records"][0]["DeletedTemplate_Item_Ids"].ToString());
            foreach (JToken objobjGoodsReceiveNoteItem in objJObjectJson)
            {
                var template_item_id = Guid.Parse(objobjGoodsReceiveNoteItem["template_item_id"].ToString());
                var existGoodsReceiveNoteItem = context.GoodsReceiveNoteItems
                    .Where(w => w.template_item_id == template_item_id
                    && w.template_id == existGoodsReceiveNote.template_id)
                    .FirstOrDefault();

                if (existGoodsReceiveNoteItem != null)

                {
                    context.GoodsReceiveNoteItems
                        .Remove(existGoodsReceiveNoteItem);
                    context.SaveChanges();
                }
            }

            objResponseJsonEReadModify.postData.Records = existGoodsReceiveNote;
            objResponseJsonEReadModify.postData.Result = "OK";
            objResponseJsonEReadModify.postData.Message = "Data updated Successfully";
        }

    }
    catch (Exception ex)
    {
        if (objResponseJsonEReadModify == null)
        {
            objResponseJsonEReadModify = objJObject.ToObject<JsonVSE>();
        }
        objResponseJsonEReadModify.postData.Result = "ERROR";
        objResponseJsonEReadModify.postData.Message = ex.Message;
        log.Error("XXUNINUMM: Error" + ex.Message);

        if (ex.InnerException != null)
        {
            log.Error("XXUNINUMM: InnerException " + ex.InnerException.Message);
        }
        log.Error("XXUNINUMM: StackTrace" + ex.ToString());
    }
    finally
    {
        log.Info("XXUNINUMM: Exit");
    }
    return JObject.FromObject(objResponseJsonEReadModify);
}
