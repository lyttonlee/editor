import React, { useEffect, useState } from 'react'
import './doc.css'
import Editor from 'react-qn-md'

function Doc () {
  const [reactInit, setReactInit] = useState('')
  const [vueInit, setVueInit] = useState('')
  function getMd (url) {
    fetch(url, {
      method: 'GET',
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        res.text().then((md) => {
          // console.log(md)
          if (url === '/editor/react.md') {
            console.log('react')
            console.log(md)
            setReactInit(md)
            console.log(reactInit)
          } else {
            setVueInit(md)
          }
        })
      }
    })
  }
  useEffect(() => {
    getMd('/editor/react.md')
    getMd('/editor/vue.md')
  }, [])
  return (
    <div className="page">
      <h1>Use With React</h1>
      <Editor initInfo={reactInit} customStyle={{height: 'auto', 'minHeight': '400px'}} edit={false} />
      <div className="line"></div>
      <h1>Use With Vue</h1>
      <Editor initInfo={vueInit} customStyle={{height: 'auto', 'minHeight': '400px'}} edit={false} />
    </div>
  )
}

export default Doc
