// Vercel Serverless Function
// 这个API可以安全地返回配置信息，而不会暴露敏感数据

export default function handler(req, res) {
  // 可以在这里使用 Vercel 环境变量
  const loginKey = process.env.LOGIN_KEY || 'default-key';
  
  // 返回配置（注意：不要直接返回密码）
  res.status(200).json({
    // 可以返回加密后的密码或其他配置
    hasLoginKey: !!process.env.LOGIN_KEY,
    siteName: '三木有话说',
    // 其他非敏感配置
  });
}