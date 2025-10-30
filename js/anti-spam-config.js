/**
 * Anti-Spam Configuration File
 * 反垃圾邮件配置文件
 * 
 * You can customize these settings to adjust the spam filtering sensitivity
 * 您可以自定义这些设置来调整垃圾邮件过滤的敏感度
 */

const antiSpamConfig = {
    // Time-based restrictions (时间限制)
    minFormFillTime: 5000,           // Minimum time to fill form (milliseconds) 填写表单的最小时间（毫秒）
    cooldownPeriod: 300000,          // Cooldown between submissions (5 minutes) 提交间隔冷却时间（5分钟）
    dailyLimit: 2,                   // Maximum submissions per day 每天最多提交次数
    
    // Content validation (内容验证)
    minNameLength: 2,                // Minimum name length 姓名最小长度
    maxNameLength: 50,               // Maximum name length 姓名最大长度
    minSubjectLength: 3,             // Minimum subject length 主题最小长度
    maxSubjectLength: 100,           // Maximum subject length 主题最大长度
    minMessageLength: 10,            // Minimum message length 消息最小长度
    maxMessageLength: 1000,          // Maximum message length 消息最大长度
    minMessageWords: 3,              // Minimum words in message 消息最少单词数
    
    // Random string detection (随机字符串检测)
    maxConsecutiveConsonants: 6,    // Maximum consecutive consonants 最大连续辅音数
    minVowelRatio: 0.15,            // Minimum vowel ratio in text 文本中最小元音比例
    maxRepeatingChars: 4,           // Maximum repeating characters 最大重复字符数
    
    // Email validation (邮箱验证)
    // Note: QQ and Chinese email services are whitelisted (允许QQ和中国邮箱服务)
    allowedChineseEmailDomains: [
        'qq.com', 'qq.cn',                                  // QQ邮箱（支持纯数字）
        '163.com', '126.com',                               // 网易邮箱
        'sina.com', 'sohu.com', 'yeah.net',                // 其他中国邮箱
        'aliyun.com', 'foxmail.com'                         // 阿里云和Foxmail
    ],
    
    suspiciousEmailPatterns: [
        /^[a-z]+\d+@gmail\.com$/i,                          // Pattern: letters + numbers @gmail.com
        /@(temp|trash|fake|spam|guerrilla|10minute|throwaway)/i,  // Temporary email services
        /\d{5,}@/,                                          // Too many numbers before @ (except whitelisted domains)
    ],
    
    // Suspicious name patterns (可疑姓名模式)
    suspiciousNamePatterns: [
        /^[a-z]+[A-Z]+[a-z]+[A-Z]+/,                       // Random mixed case (e.g., "jKCNFCALUqqneYkzXpQgvaEk")
        /^[A-Z][a-z]+[A-Z][a-z]+[A-Z][a-z]+$/,            // CamelCase without spaces
    ],
    
    // Enable/Disable specific checks (启用/禁用特定检查)
    enableHoneypot: true,            // Enable honeypot field 启用蜜罐字段
    enableSpeedCheck: true,          // Enable submission speed check 启用提交速度检查
    enableContentValidation: true,   // Enable content quality validation 启用内容质量验证
    enableEmailValidation: true,     // Enable email validation 启用邮箱验证
    enableCooldown: true,            // Enable cooldown between submissions 启用提交冷却时间
    enableDailyLimit: true,          // Enable daily submission limit 启用每日提交限制
    
    // Logging (日志记录)
    logSpamAttempts: true,          // Log spam attempts to console 在控制台记录垃圾邮件尝试
    logAllSubmissions: false,        // Log all form submissions 记录所有表单提交
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = antiSpamConfig;
}

