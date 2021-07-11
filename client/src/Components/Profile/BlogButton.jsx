import React from 'react'
import style from './blog.module.css'

function BlogButton({date, title, para, avatar, href}) {
  return (
    <div className={style.blogwrapper}>
    <div className={style.userBlogPost}>
      <div className={style.imgPod}>
        <img className={style.blogImg} src={avatar} alt="random"/>
      </div>
      <div className="container_copy">
        <h3 className={style.blogh3}>{date}</h3>
        <h1 className={style.blogh1}>{title}</h1>
        <p className={style.blogp}>{para}</p>
      </div>
      <a className={style.btnPrimary} href={href}>Read More</a>
    </div>
  </div>
  )
}

export default BlogButton
