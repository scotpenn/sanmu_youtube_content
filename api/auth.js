// Vercel Serverless Function for authentication
export default function handler(req, res) {
  // 允许 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const correctPassword = process.env.LOGIN_PASSWORD || 'sanmu123';

  if (password === correctPassword) {
    // 生成简单的 token（实际项目中应该使用 JWT）
    const token = Buffer.from(`${password}:${Date.now()}`).toString('base64');
    
    res.status(200).json({ 
      success: true, 
      token: token,
      message: '登录成功' 
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: '密码错误' 
    });
  }
}