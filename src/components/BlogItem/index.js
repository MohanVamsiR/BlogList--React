// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="list-cont">
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p className="paras">{publishedDate}</p>
      </div>

      <p className="para">{description}</p>
    </li>
  )
}

export default BlogItem
