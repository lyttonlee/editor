import React, { useState } from 'react'
import Editor from 'react-qn-md'
import './home.css'

function Home () {
  const [token, setToken] = useState('')
  const [theme, setTheme] = useState('light')
  const [edit, setEdit] = useState(true)
  function getToken () {
    fetch('http://www.huili.cool:8901/api/uptoken', {
      method: 'GET'
    }).then((res) => {
      if (res.status === 200) {
        res.text().then((token) => {
          setToken(token)
        })
      }
    })
  }
  function changeTheme () {
    const targetTheme = theme && theme === 'light' ? 'dark' : 'light'
    setTheme(targetTheme)
  }
  function changeMode () {
    setEdit(!edit)
  }
  function updateInfo (info) {
    console.log(info)
    // do something with info save , submit
  }
  return (
    <div className="page">
      <div className="option">
        <button
          className="btn"
          onClick={changeTheme}>
          {theme === 'light' ? 'dark' : 'light'}主题
        </button>
        <button
          className="btn"
          onClick={changeMode}>
          {edit ? '显示模式' : '编辑模式'}
        </button>
      </div>
      <div className="content">
        <Editor 
          token={token}
          getToken={getToken}
          domain="http://editor.huili.cool/"
          customStyle={{height: '50vh', overflow: 'auto'}}
          theme={theme}
          edit={edit} >
        </Editor>
      </div>
      <div className="tip">
        <p>通过简单设置可以直接上传图片至七牛云</p>
        <p>支持直接拖拽图片至编辑区完成上传</p>
        <p>支持七牛云图片样式规则</p>
      </div>
    </div>
  )
}

export default Home
