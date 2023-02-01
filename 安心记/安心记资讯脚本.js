/**

 * cron 10 7 * * *  
 * ========= 青龙--配置文件 ===========
 * # 项目名称:安心记加班
 * 变量名  axj
 * 抓Au
 * 
 * 多账号用 换行 或 @ 分割
 * ====================================
 *   
 */



const $ = new Env("安心记资讯");
const ckName = "axj";
let show = "资讯任务 投稿群--908013361"
//-------------------- 一般不动变量区域 -------------------------------------
//const utils = require("./utils");
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1;		 //0为关闭通知,1为打开通知,默认为1
let debug = 0;           //Debug调试   0关闭  1开启
let envSplitor = ["@", "\n"]; //多账号分隔符
let ck = msg = '';       //let ck,msg
let host, hostname;
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata()) || '';
let userList = [];
let userIdx = 0;
let userCount = 0;
//---------------------- 自定义变量区域 -----------------------------------
//---------------------------------------------------------

async function start() {
    console.log(show);
    console.log('\n================== 开始资讯任务 ==================\n');
    taskall = [];
    for (let user of userList) {
        taskall.push(await user.task_zx('开始任务'));
        await wait(15);
    }
    await Promise.all(taskall);
    console.log('\n================== 开始刷新闻 ==================\n');
    taskall = [];
    for (let user of userList) {
        taskall.push(await user.task_xwzx('开始任务'));
        await wait(15);
        taskall.push(await user.task_xwzx('开始任务'));
        await wait(15);
        taskall.push(await user.task_xwzx('开始任务'));
        await wait(15);
        taskall.push(await user.task_xwzx('开始任务'));
        await wait(15);
        taskall.push(await user.task_xwzx('开始任务'));
        await wait(15);
    }
    await Promise.all(taskall);

}
class UserInfo {
    constructor(str) {
        this.index = ++userIdx;
        this.cktest = str.split('&')[0]; //单账号多变量分隔符
        this.ck = "Bearer " + this.cktest.replace('Bearer', '')
        this.zxurl = 'https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=337865&device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB'
        this.zxurl2 = 'https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=337958&device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB'
        this.zxurl3 = 'https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=337957&device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB'
        this.zxurl4 = 'https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=338055&device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB'
        this.zxurl5 = 'https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=338060&device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB'
        this.zxurl6 = 'https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=338063&device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB'
        this.zxheaders2 = {
            Requesttime: '1675077848',
            Userid: '171947745',
            Devicetype: '3',
            Clientinfo: 'julanling_jjb',
            Logintime: '1674814701',
            Checkcode: '1272f105fade8da5ebf7b181c95a3b37',
            Devicetoken: '4e978751b3e56331d11bf8f6a0ff95fd',
            Isdebug: '0',
            Clientversion: '6.9.20',
            Signature: '616d152371d8428c0d6c9340ca3c31b7',
            Authorization: this.ck,
            'SIGN-HOST': 'jjbapi.julanling.com/market/finish_task',
            Host: 'jjbapi.julanling.com',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.14.9'
        }
        this.zxheaders1 = {
            "Requesttime": "1675076719",
            "Userid": "171947745",
            "Devicetype": "3",
            "Clientinfo": "julanling_jjb",
            "Logintime": "1674814701",
            "Checkcode": "1272f105fade8da5ebf7b181c95a3b37",
            "Devicetoken": "4e978751b3e56331d11bf8f6a0ff95fd",
            "Isdebug": "0",
            "Clientversion": "6.9.20",
            "Signature": "5a1f8f6f483793a450400aa00ce522ef",
            "Authorization": this.ck,
            "User-Agent": "okhttp/3.14.9"
        }
        this.zxheaders = {
            'Clientversion': '6.9.20',
            'Authorization': this.ck,
            'apikey': '2ffc3e48c7086e0e1faa003d781c0e69',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'okhttp/3.14.9',
            //'content-type': 'application/json'
        }
        this.body1 = 'device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB&businessType=JJB_PROCESS_SEE_NEWS_ONE',
            this.body2 = 'device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB&businessType=JJB_PROCESS_SEE_NEWS_TWO',
            this.body3 = 'device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB&businessType=JJB_PROCESS_SEE_NEWS_THREE',
            this.headers = {
                //'Content-Type': 'application/x-www-form-urlencoded',
                //Host: 'ymshapi.dmhw1688.com',
                //'User-Agent': 'okhttp/4.9.1',
                'content-type': 'application/json',
                'User-Agent': 'PostmanRuntime-ApipostRuntime/1.1.0',
                'Cache-Control': 'no-cache',
                'content-type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Authorization': this.ck,
            }

    }

    async task_zx(name) { // 看点资讯任务
        try {
            let options = {
                method: 'POST',
                url: 'https://jjbapi.julanling.com/market/finish_news_process_task',
                headers: this.zxheaders,
                body: this.body1,
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  任务详情: ${result.errorStr}`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'POST',
                url: 'https://jjbapi.julanling.com/market/finish_news_process_task',
                headers: this.zxheaders,
                body: this.body2,
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  任务详情: ${result.errorStr}`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'POST',
                url: 'https://jjbapi.julanling.com/market/finish_news_process_task',
                headers: this.zxheaders,
                body: this.body3,
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  任务详情: ${result.errorStr}`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async task_xwzx(name) {      //刷新闻
        try {
            let options = {
                method: 'get',
                url: 'https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=337864&device=4e978751b3e56331d11bf8f6a0ff95fd&system_version=6.9.20&jid=64YEQ2&version=6.9.20&signatureCode=63559975&app_activate_date=2022-12-13%2022%3A22%3A35&channel=vivo&oaid=&android_id=349390f5342d7ab7&accountBookType=JJB',
                headers: this.zxheaders1,
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  看新闻: ${result.errorStr} 获得:${result.results.amount}金币`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'get',
                url: this.zxurl,
                headers: this.zxheaders2,
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  看新闻: ${result.errorStr} 获得:${result.results.amount}金币`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'get',
                url: this.zxurl2,
                headers: {
                    Requesttime: '1675078845',
                    Userid: '171947745',
                    Devicetype: '3',
                    Clientinfo: 'julanling_jjb',
                    Logintime: '1674814701',
                    Checkcode: '1272f105fade8da5ebf7b181c95a3b37',
                    Devicetoken: '4e978751b3e56331d11bf8f6a0ff95fd',
                    Isdebug: '0',
                    Clientversion: '6.9.20',
                    Signature: '034ef478ca7d200e5e94abd6e92c0738',
                    Authorization: this.ck,
                    'SIGN-HOST': 'jjbapi.julanling.com/market/finish_task',
                    apikey: '2ffc3e48c7086e0e1faa003d781c0e69',
                    'Cache-Control': 'no-cache',
                    Host: 'jjbapi.julanling.com',
                    Connection: 'Keep-Alive',
                    'Accept-Encoding': 'gzip',
                    'User-Agent': 'okhttp/3.14.9'
                }
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  看新闻: ${result.errorStr} 获得:${result.results.amount}金币`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'get',
                url: this.zxurl3,
                headers: {
                    Requesttime: '1675080664',
                    Userid: '171947745',
                    Devicetype: '3',
                    Clientinfo: 'julanling_jjb',
                    Logintime: '1674814701',
                    Checkcode: '1272f105fade8da5ebf7b181c95a3b37',
                    Devicetoken: '4e978751b3e56331d11bf8f6a0ff95fd',
                    Isdebug: '0',
                    Clientversion: '6.9.20',
                    Signature: '0ccd22897295a03bdb31dd3cf1b9c485',
                    Authorization: this.ck,
                    'SIGN-HOST': 'jjbapi.julanling.com/market/finish_task',
                    apikey: '2ffc3e48c7086e0e1faa003d781c0e69',
                    'Cache-Control': 'no-cache',
                    Host: 'jjbapi.julanling.com',
                    Connection: 'Keep-Alive',
                    'Accept-Encoding': 'gzip',
                    'User-Agent': 'okhttp/3.14.9'
                }
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  看新闻: ${result.errorStr} 获得:${result.results.amount}金币`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'get',
                url: this.zxurl4,
                headers: {
                    Requesttime: '1675132421',
                    Userid: '171947745',
                    Devicetype: '3',
                    Clientinfo: 'julanling_jjb',
                    Logintime: '1674814701',
                    Checkcode: '1272f105fade8da5ebf7b181c95a3b37',
                    Devicetoken: '4e978751b3e56331d11bf8f6a0ff95fd',
                    Isdebug: '0',
                    Clientversion: '6.9.20',
                    Signature: 'ddf81529621b269bf2dbde6850f13bf0',
                    'SIGN-HOST': 'jjbapi.julanling.com/market/finish_task',
                    apikey: '2ffc3e48c7086e0e1faa003d781c0e69',
                    'Cache-Control': 'no-cache',
                    Host: 'jjbapi.julanling.com',
                    Connection: 'Keep-Alive',
                    'Accept-Encoding': 'gzip',
                    'User-Agent': 'okhttp/3.14.9',
                    Authorization: this.ck,
                }
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  看新闻: ${result.errorStr} 获得:${result.results.amount}金币`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'get',
                url: this.zxurl5,
                headers: {
                    Requesttime: '1675132349',
                    Userid: '171947745',
                    Devicetype: '3',
                    Clientinfo: 'julanling_jjb',
                    Logintime: '1674814701',
                    Checkcode: '1272f105fade8da5ebf7b181c95a3b37',
                    Devicetoken: '4e978751b3e56331d11bf8f6a0ff95fd',
                    Isdebug: '0',
                    Clientversion: '6.9.20',
                    Signature: '5d8bb21639c77a5265d2c322fc84862c',
                    'SIGN-HOST': 'jjbapi.julanling.com/market/finish_task',
                    apikey: '2ffc3e48c7086e0e1faa003d781c0e69',
                    'Cache-Control': 'no-cache',
                    Host: 'jjbapi.julanling.com',
                    Connection: 'Keep-Alive',
                    'Accept-Encoding': 'gzip',
                    'User-Agent': 'okhttp/3.14.9',
                    Authorization: this.ck,

                }
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  看新闻: ${result.errorStr} 获得:${result.results.amount}金币}`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
        await wait(15);
        try {
            let options = {
                method: 'get',
                url: this.zxurl6,
                headers: {
                    Requesttime: '1675132176',
                    Userid: '171947745',
                    Devicetype: '3',
                    Clientinfo: 'julanling_jjb',
                    Logintime: '1674814701',
                    Checkcode: '1272f105fade8da5ebf7b181c95a3b37',
                    Devicetoken: '4e978751b3e56331d11bf8f6a0ff95fd',
                    Isdebug: '0',
                    Clientversion: '6.9.20',
                    Signature: '13dd1478577974fb1395782dcf0adf8f',
                    'SIGN-HOST': 'jjbapi.julanling.com/market/finish_task',
                    apikey: '2ffc3e48c7086e0e1faa003d781c0e69',
                    'Cache-Control': 'no-cache',
                    Host: 'jjbapi.julanling.com',
                    Connection: 'Keep-Alive',
                    'Accept-Encoding': 'gzip',
                    'User-Agent': 'okhttp/3.14.9',
                    Authorization: this.ck,

                }
            };
            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errorCode == "0") {
                DoubleLog(`账号[${this.index}]  看新闻: ${result.errorStr} 获得:${result.results.amount}金币}`);
            } else {
                DoubleLog(`账号[${this.index}]  任务失败 ❌ 了呢,原因` + result.errorStr);
                //console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }


}

!(async () => {
    if (!(await checkEnv())) return;
    if (userList.length > 0) {
        await start();
    }
    await SendMsg(msg);
})()
    .catch((e) => console.log(e))
    .finally(() => $.done());


// #region ********************************************************  固定代码  ********************************************************

// 变量检查与处理
async function checkEnv() {
    if (userCookie) {
        // console.log(userCookie);
        let e = envSplitor[0];
        for (let o of envSplitor)
            if (userCookie.indexOf(o) > -1) {
                e = o;
                break;
            }
        for (let n of userCookie.split(e)) n && userList.push(new UserInfo(n));
        userCount = userList.length;
    } else {
        console.log("未找到CK");
        return;
    }
    return console.log(`共找到${userCount}个账号`), true;//true == !0
}
// =========================================== 不懂不要动 =========================================================
// 网络请求 (get, post等)
async function httpRequest(options, name) { var request = require("request"); return new Promise((resolve) => { if (!name) { let tmp = arguments.callee.toString(); let re = /function\s*(\w*)/i; let matches = re.exec(tmp); name = matches[1] } if (debug) { console.log(`\n【debug】===============这是${name}请求信息===============`); console.log(options) } request(options, function (error, response) { if (error) throw new Error(error); let data = response.body; try { if (debug) { console.log(`\n\n【debug】===============这是${name}返回数据==============`); console.log(data) } if (typeof data == "string") { if (isJsonString(data)) { let result = JSON.parse(data); if (debug) { console.log(`\n【debug】=============这是${name}json解析后数据============`); console.log(result) } resolve(result) } else { let result = data; resolve(result) } function isJsonString(str) { if (typeof str == "string") { try { if (typeof JSON.parse(str) == "object") { return true } } catch (e) { return false } } return false } } else { let result = data; resolve(result) } } catch (e) { console.log(error, response); console.log(`\n ${name}失败了!请稍后尝试!!`) } finally { resolve() } }) }) }
// 等待 X 秒
function wait(n) { return new Promise(function (resolve) { setTimeout(resolve, n * 1000) }) }
// 双平台log输出
function DoubleLog(data) { if ($.isNode()) { if (data) { console.log(`${data}`); msg += `\n${data}` } } else { console.log(`${data}`); msg += `\n${data}` } }
// 发送消息
async function SendMsg(message) { if (!message) return; if (Notify > 0) { if ($.isNode()) { var notify = require("./sendNotify"); await notify.sendNotify($.name, message) } else { $.msg($.name, '', message) } } else { console.log(message) } }
// 完整 Env
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
