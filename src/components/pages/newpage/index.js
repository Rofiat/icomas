import { useState } from 'react'

const Newpage = () => {
  const DATA = [
        {
          id: 'tag1',
          title: 'English',
          slug: 'english',
        },
        {
          id: 'tag2',
          title: 'For kids',
          slug: 'kids',
        },
      
        {
          id: 'tag3',
          title: 'French',
          slug: 'french',
        },
        { 
          id: 'tag4', 
          title: 'Kids', 
          slug: 'kids' 
        },
     
        {
          id: 'tag5',
          title: 'English',
          slug: 'english',
        },
        {
          id: 'tag6',
          title: 'Adults',
          slug: 'adults',
        },
     
        {
          id: 'tag7',
          title: 'French',
          slug: 'french',
        },
        {
          id: 'tag8',
          title: 'Adults',
          slug: 'adults',
        },
      ];
    
  

  const [filterTags, setFilterTags] = useState([])

  const filteredDATA = DATA.filter((ans) =>
    filterTags.length > 0
      ? filterTags.map((tag) => tag.slug).includes(filterTags)
      : DATA
  )

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value])
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      )
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="english">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="english"
            id="english"
          />
          <span>English</span>
        </label>
        <label htmlFor="french">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="french"
            id="french"
          />
          <span>French</span>
        </label>
        <label htmlFor="kids">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="kids"
            id="kids"
          />
          <span>Kids</span>
        </label>
        <label htmlFor="adults">
          <input
            type="checkbox"
            onChange={filterHandler}
            value="adults"
            id="adults"
          />
          <span>Adults</span>
        </label>
      </div>
      <ul>
        {filteredDATA.map((node) => (
          <li key={node.id}>{node.title}</li>
        ))}
      </ul>
      </div>
      );
    }
    export default Newpage;