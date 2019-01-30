// Try running in the console below.
  
exports = async function(payload) {
    const stringifiedExtendedJson = payload.body.text();
    let payloadData = EJSON.parse(stringifiedExtendedJson);
    const mongodb = context.services.get("mongodb-atlas");
    
    const custodianMessage = await mongodb.db("elly_db").collection("custodian_msg");
    const custMsg = custodianMessage.insertOne(payloadData);
    const adminMessage = await mongodb.db("elly_db").collection("admin_msg");
    const adminMsg = adminMessage.insertOne(payloadData);
};