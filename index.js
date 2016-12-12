/**
 * @var {WTFService}wtf
 */
/**
 * @var {Control}control
 */
var accessToken = '4261077171.1677ed0.8ce0ad27e7434697b9057756c3ddcebd';
var api = require('instagram-node').instagram();
var insapi = require('instagram-api');
var insapi1 = new insapi(accessToken);
var PreviousMediaId, PresentMediaId, uid, link,y=null;

var PreviousMediaId = null;
let interval = setInterval(() => {
        api.use({access_token: accessToken});
insapi1.userSelf().then(function (result) {
    uid = result.data["id"];

    var x = result.data["counts"]["media"];

    xid = uid;
    // api request remaining
    api.user_media_recent(uid, function (err, medias, pagination, remaining, limit) {
        try {
            z=medias[0]["created_time"];

            link = medias[0]["link"];
            if ((y==null)||(y!=z))
            {
                y=z;
                console.log(medias[0]["created_time"]);
                console.log(link);
            }
            if(y==z) {

            }
        } catch (err) {
            console.log(err);
        }


    });
});
}, 60);
return () => clearInterval(interval);