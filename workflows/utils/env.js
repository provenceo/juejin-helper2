const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  COOKIE: 'csrf_session_id=9d37f39f1823870a80209103fb29ff00; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227304188147347392036%2522%252C%2522web_id%2522%253A%25227304188147347392036%2522%252C%2522timestamp%2522%253A1711412924705%257D; sid_guard=724f34284759106a85c64ceaf6eb552e%7C1711615772%7C31536000%7CFri%2C+28-Mar-2025+08%3A49%3A32+GMT; uid_tt=45a2a991717bf3d7b43c8d1dc1446607; uid_tt_ss=45a2a991717bf3d7b43c8d1dc1446607; sid_tt=724f34284759106a85c64ceaf6eb552e; sessionid=724f34284759106a85c64ceaf6eb552e; sessionid_ss=724f34284759106a85c64ceaf6eb552e; sid_ucp_v1=1.0.0-KGQ5OGI3YzlkMTI4ODQwZWFkMDNhMmQ5NmZlYzhjNDI0MmE0OTdlZTYKFgjtzeHA_fXFBRCc3pSwBhiwFDgIQAsaAmxmIiA3MjRmMzQyODQ3NTkxMDZhODVjNjRjZWFmNmViNTUyZQ; ssid_ucp_v1=1.0.0-KGQ5OGI3YzlkMTI4ODQwZWFkMDNhMmQ5NmZlYzhjNDI0MmE0OTdlZTYKFgjtzeHA_fXFBRCc3pSwBhiwFDgIQAsaAmxmIiA3MjRmMzQyODQ3NTkxMDZhODVjNjRjZWFmNmViNTUyZQ; store-region=cn-sd; store-region-src=uid; _ga=GA1.2.1474285654.1711615773; _ga_S695FMNGPJ=GS1.2.1711615773.1.0.1711615773.60.0.0; _tea_utm_cache_576092=undefined',
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  COOKIE_2: env.COOKIE_2,
  COOKIE_3: env.COOKIE_3,
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  /**
   * 邮箱配置
   * user 发件人邮箱, pass, 发件人密码, to收件人
   */
  EMAIL_USER: env.EMAIL_USER,
  EMAIL_PASS: env.EMAIL_PASS,
  EMAIL_TO: env.EMAIL_TO,
  /**
   * 钉钉配置
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
  /**
   * PushPlus配置
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
  PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN,
  /**
   * 企业微信机器人配置
   * https://developer.work.weixin.qq.com/document/path/91770
   */
  WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK,
  /**
   * server酱推送key
   * https://sct.ftqq.com/sendkey
   */
  SERVERPUSHKEY: env.SERVERPUSHKEY,
  /**
   * 飞书配置
   */
  FEISHU_WEBHOOK: env.FEISHU_WEBHOOK
};
