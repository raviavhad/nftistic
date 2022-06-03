/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
  
var ibmdb = require('ibm_db');
  
  function fetchfromdb(dsn,actionname) {
      try {
       var conn=ibmdb.openSync(dsn);
       // Search for exact match only, could be extended with lIKE
       var data=conn.querySync("select action_response from FLM86878.action_config where action_name=? ", [actionname]);
       conn.closeSync();
       var resString="";
      
       // Return both generated string and data
       for (var i=0;i<data.length;i++) {
         resString+=data[i]['ACTION_RESPONSE']+"\n";
       }
        return { message: resString };
    } catch (e) {
        return { dberror : e }
    }
   
   }
   
function main(params) {
    dsn="DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=flm86878;PWD=sl31ffprfhn39^74;";
	if(params.actionname==="instant_communication") {
            return fetchfromdb(dsn,params.actionname);
	}
	else if (params.actionname==="people_inside_campus") {
	    return fetchfromdb(dsn,params.actionname);
	}
	else if (params.actionname==="social_media_post") {
	    return fetchfromdb(dsn,params.actionname);
	}
    else if (params.actionname==="send_communciation_parent") {
	    return fetchfromdb(dsn,params.actionname);
	}
	else if (params.actionname==="admission_form") {
	    return fetchfromdb(dsn,params.actionname);
	}
	else if (params.actionname==="zonal_breaches") {
	    return fetchfromdb(dsn,params.actionname);
	}
	else if (params.actionname==="social_distancing_status") {
	    return fetchfromdb(dsn,params.actionname);
	}
	else if (params.actionname==="sanitizer_status") {
	    return fetchfromdb(dsn,params.actionname);
	}
}