var Promise = require('front:widget/utils/promise.js');

var dataModel = function (url, data, opts) {
    opts = opts || {};
    opts = $.extend({
        type: 'POST',
        timeout: 5000,
        headers: {}
    }, opts);

    var p = new Promise();
    $.ajax({
        url: url,
        data: data,
        method: opts.type,
        timeout : opts.timeout,
        dataType: 'json',
        cache: false,
        headers: opts.headers,
        beforeSend: function(xhr){
            xhr.withCredentials = true;
        },
        success: function (ret, textStatus, request) {
            p.done(null, ret);
        },
        error: function (xhr){
            var response = xhr.responseText || '{}';
            response = JSON.parse(response);
            var msg = response.message || '网络似乎有点问题，请重试';
            p.done(msg);
        }
    });

    return p;
}

module.exports = dataModel;