/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import * as dayjs from "dayjs"
import * as relativeTime from "dayjs/plugin/relativeTime"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tagclr from "./tags"

import { Row, Col, Image, Tag } from "antd"

import "./item.css"

function Item({ news }) {
  const {
    title,
    status,
    href_hash,
    src,
    source,
    menu,
    local_src,
    load_img,
    img_url,
    href,
    description,
    create_time,
    country,
  } = news
  dayjs.extend(relativeTime)
  const tagcolor = tagclr.tagsclr[menu]
  const ctime = dayjs().to(dayjs(create_time))
  let backImgUrl = `https://oss.edms.site/news/${load_img}`
  let imagesUrl = img_url
  if (local_src) {
    backImgUrl = `https://oss.edms.site/news/${local_src}`
    imagesUrl = src
  }
  if (source === 'rnz') {
    const website = 'https://www.rnz.co.nz'
    const img = 'https://rnz-ressh.cloudinary.com/'
    const str = imagesUrl.includes(img)
    const web = imagesUrl.includes(website)
    if (str && web) {
      imagesUrl = imagesUrl.replace(new RegExp(website), '')
    }
  }

  return (
    <article className="item" key={load_img}>
      <Row gutter={[8]} justify="start">
        <Col span={24}>
          <Link to={`/posts/${href_hash}/`} className="head1">
            <img className="image-size imge-small" src={imagesUrl} fallback={backImgUrl} alt={title} />
            <h2 className="head1">{title}</h2>
          </Link>
          <p className="desc">{description}</p>
        </Col>
      </Row>
      <div className="h05" />
      <Row gutter={[8]} justify="space-between" align="middle">
        <Col span={8}>
          <Tag color={tagcolor}>{menu}</Tag>
        </Col>
        <Col span={8}>
          <div className="ctime">{ctime}</div>
        </Col>
        <Col span={8}>
          <div className="source">
            src:{" "} {source.toUpperCase()}
          </div>
        </Col>
      </Row>
    </article>
  )
}

Item.defaultProps = {
  news: {},
}

Item.propTypes = {
  news: PropTypes.object,
}

export default Item
