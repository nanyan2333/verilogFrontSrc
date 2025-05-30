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
  const { id, password } = req.body
  res.json({ role: 2, token: "5562551554" })

})

// 实验创建接口（multipart/form-data）
app.post('/course/experiment', upload.array('files'), (req, res) => {
  console.log('Form fields:', req.body)
  console.log('Uploaded files:', req.files)
  res.json({ success: true })
})


app.get('/experiment', (req, res) => {
  res.json([
    {
      id: 1,
      title: "冒泡排序实验",
      description: "实现并优化冒泡排序",
      file: {
        id: "exp001file",
        name: "bubble-sort.pdf",
      },
    },
    {
      id: 2,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 3,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 4,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 5,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 6,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 7,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 8,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 9,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 10,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 11,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 12,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 112,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 1112,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 11112,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 2772,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 2528464,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 27676,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 27688886,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 27688886,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 27688178578886,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    {
      id: 275758886,
      title: "快速排序实验",
      description: "递归实现快速排序",
      file: {
        id: "exp002file",
        name: "quick-sort.zip",
      },
    },
    
  ])
})

app.get('/course', (req, res) => {
  res.json([
    {
      id: "1",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。从零开始掌握数据结构与算法核心概念。",
      experiments: [
        {
          id: 1,
          title: "冒泡排序实验",
          description: "实现并优化冒泡排序",
          file: {
            id: "exp001file",
            name: "bubble-sort.pdf",
          },
        },
        {
          id: 2,
          title: "快速排序实验",
          description: "递归实现快速排序",
          file: {
            id: "exp002file",
            name: "quick-sort.zip",
          },
        },
      ],
    },
    {
      id: "222",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [
        {
          id: 1,
          title: "冒泡排序实验",
          description: "实现并优化冒泡排序",
          file: {
            id: "exp001file",
            name: "bubble-sort.pdf",
          },
        },
        {
          id: 2,
          title: "快速排序实验",
          description: "递归实现快速排序",
          file: {
            id: "exp002file",
            name: "quick-sort.zip",
          },
        },
      ],
    },
    {
      id: "2212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },{
      id: "2211",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "221112",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "222512",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "2217572",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "21527212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "217576876212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "217576875786212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "2175761240876212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "217576878676689676212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "217576878676689g676212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
    {
      id: "217576878676dwd689676212",
      title: "深入浅出算法",
      description: "从零开始掌握数据结构与算法核心概念。",
      experiments: [],
    },
  ])
})

// 启动服务
app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`)
})
