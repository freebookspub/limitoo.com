import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import { Affix, Button, Image } from "antd"
import { CaretLeftOutlined } from "@ant-design/icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const blogPost = ({ data }) => {
  const post = data.allMysqlLists.edges[0].node
  const context = JSON.parse(post.content)
  const backImgUrl = `https://oss.edms.site/news/${post.local_src}`
  const imagesUrl = post.src
  const seourl = `https://limitoo.com/posts/${post.href_hash}/`
  const {href, source} = post
  let imgshow = <></>
  let showtext = <></>
  let showHead = <></>
  let seoimges = post.img_url
  if (post.src) {
    seoimges = post.src
  }


  switch (post.source) {
    case "foxnews":
      imgshow = (
        <Image
          preview={false}
          className="image-size"
          src={post.img_url}
          fallback={post.iconload_img}
          alt={post.alt}
        />
      )
      showtext = context.map((item, index) => {
        const strong = "<strong"
        if (!item.includes(strong)) {
          const html = { __html: item }
          return (
            <div
              className="content"
              key={index}
              dangerouslySetInnerHTML={html}
            />
          )
        }
      })
      break
    case "cbsnews":
      imgshow = (
        <Image
          preview={false}
          className="image-size"
          src={post.img_url}
          fallback={post.load_img}
          alt={post.alt}
        />
      )
      showtext = context.map((item, index) => {
        const strong = "<strong"
        if (!item.includes(strong)) {
          const html = { __html: item }
          return (
            <div
              className="content"
              key={index}
              dangerouslySetInnerHTML={html}
            />
          )
        }
      })
      break
    case "bbc":
      showtext = context.map((item, index) => {
        const img = "<img"
        const div = "<div"
        const greyLine = "grey line"
        if (!item.includes(greyLine)) {
          if (item.includes(img)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          if (item.includes(div)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          return (
            <p className="content" key={index}>
              {item}
            </p>
          )
        }
      })
      break
    case "abc":
      imgshow = (
        <Image
          preview={false}
          className="image-size"
          src={post.img_url}
          fallback={post.load_img}
          alt={post.alt}
        />
      )
      showtext = context.map((item, index) => {
        const img = "<img"
        const div = "<div"
        const greyLine = "grey line"
        if (!item.includes(greyLine)) {
          if (item.includes(img)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          if (item.includes(div)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          return (
            <p className="content" key={index}>
              {item}
            </p>
          )
        }
      })
      break
    case "lemonde":
      showtext = context.map((item, index) => {
        const img = "<img"
        const div = "<div"
        const greyLine = "grey line"
        if (!item.includes(greyLine)) {
          if (item.includes(img)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          if (item.includes(div)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          return (
            <p className="content" key={index}>
              {item}
            </p>
          )
        }
      })
      break
    case "newsweek":
    case 'rnz':
      showtext = context.map((item, index) => {
        const img = "<img"
        const div = "<div"
        const greyLine = "grey line"
        if (!item.includes(greyLine)) {
          if (item.includes(img)) {
            let url = item
            const website = 'https://www.rnz.co.nz'
            const img = 'https://rnz-ressh.cloudinary.com/'
            const str = url.includes(img)
            const web = url.includes(website)
            if (str && web) {
              url = url.replace(new RegExp(website), '')
            }
            const html = { __html: url }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          if (item.includes(div)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          return (
            <p className="content" key={index}>
              {item}
            </p>
          )
        }
      })
      break
    case 'aljazeera':
      showHead = <div>
        <div className="min-title">{post.description}</div>
        <Image preview={false} className="image-inside" src={post.src} fallback={backImgUrl} alt={post.alt}/>
        <div className="imgText">{post.alt}</div>
      </div>

      showtext = context.map((item, index) => {
        const img = "<img"
        const div = "<div"
        const greyLine = "grey line"
        if (!item.includes(greyLine)) {
          if (item.includes(img)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          if (item.includes(div)) {
            const html = { __html: item }
            return <div key={index} dangerouslySetInnerHTML={html} />
          }
          return (
            <p className="content" key={index}>
              {item}
            </p>
          )
        }
      })
      break
    default:
      if (post.src) {
        imgshow = (
          <Image
            preview={false}
            className="image-inside"
            src={imagesUrl}
            fallback={backImgUrl}
            alt={post.alt}
          />
        )
      }
      showtext = context.map((item, index) => (
        <p className="content" key={index}>
          {item}
        </p>
      ))
  }

  return (
    <Layout>
      <div className="postmain">
        <SEO
          title={post.title}
          description={post.description}
          images={seoimges}
          url={seourl}
        />
        <div style={{ textAlign: "right", marginRight: 20 }}>
          <Affix offsetTop={520}>
            <Button
              type="primary"
              size="large"
              shape="circle"
              icon={<CaretLeftOutlined />}
              onClick={() => navigate(-1)}
            />
          </Affix>
        </div>
        <article>
          <h1 className="posttitle">{post.title}</h1>
          {post.source ==='aljazeera'? showHead: ''}
          {imgshow}
          {showtext}
          <div className="source">
            source: {href}
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMysqlLists(filter: { href_hash: { eq: $slug } }) {
      edges {
        node {
          title
          status
          alt
          src
          source
          menu
          local_src
          load_img
          img_url
          href
          description
          country
          create_time
          content
          href_hash
        }
      }
    }
  }
`
export default blogPost
