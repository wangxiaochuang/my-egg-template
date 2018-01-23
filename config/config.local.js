//该配置将覆盖default的配置
exports.robot = {
  ua: [
    /Baiduspider/i
  ]
}

exports.security = {
  csrf: {
    enable: false
  }
}
