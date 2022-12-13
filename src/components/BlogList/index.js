// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {bloglist} = props
  const {id} = bloglist
  return (
    <ul className="unordered-list">
      {bloglist.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
