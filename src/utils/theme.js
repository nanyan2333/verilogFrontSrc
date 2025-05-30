import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    shape: {
        borderRadius: 5,
    },
    
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f5f7fa', // 自定义 Card 背景色
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: 25, // 设置圆角大小
              },
              notchedOutline: {
                borderRadius: 25, // 实际作用在 outline 上
                borderWidth: "2px", 
              },
            },
          },
    },
})

export default theme
