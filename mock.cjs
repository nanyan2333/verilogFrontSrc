const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 8080

// JSON 解析中间件
app.use(express.json())

// 创建 uploads 文件夹（如果不存在）
const uploadDir = path.resolve(__dirname, 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

// 配置 multer 存储策略
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage })

// 登录接口（application/json）
app.post('/account/login', (req, res) => {
  const { username, password } = req.body
  console.log('Login body:', req.body)
  res.json({ success: username === 'admin' && password === '123456' })
})

// 实验创建接口（multipart/form-data）
app.post('/course/experiment', upload.array('files'), (req, res) => {
  console.log('Form fields:', req.body)
  console.log('Uploaded files:', req.files)
  res.json({ success: true })
})

// 启动服务
app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`)
})
