exports.host_url = "http://twawearables-oauthd.herokuapp.com/";
exports.port = process.env.PORT || 80;
if (process.env.REDIS_URL) {
    var redis_conf = process.env.REDIS_URL.match(/redis:\/\/(.+):(.+)@(.+):(.+)\//);
    exports.redis = {
        port: redis_conf[4],
        host: redis_conf[3],
        password: redis_conf[2],
        database: redis_conf[1]
    }
}