import { useState } from 'react'

export default function Filter() {
  const DATA = [
    {
      id: 1,
      title: 'Enjoy studying English',
      tags: [
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
      ],
    },
    {
      id: 2,
      title: 'Parlons français',
      tags: [
        {
          id: 'tag3',
          title: 'French',
          slug: 'french',
        },
        { id: 'tag2', title: 'Kids', slug: 'kids' },
      ],
    },
    {
      id: 3,
      title: 'Intermediate English',
      tags: [
        {
          id: 'tag1',
          title: 'English',
          slug: 'english',
        },
        {
          id: 'tag4',
          title: 'Adults',
          slug: 'adults',
        },
      ],
    },
    {
      id: 4,
      title: 'How to study French',
      tags: [
        {
          id: 'tag3',
          title: 'French',
          slug: 'french',
        },
        {
          id: 'tag4',
          title: 'Adults',
          slug: 'adults',
        },
      ],
    },
  ]

  const [filterTags, setFilterTags] = useState([])

  const filteredDATA = DATA.filter((node) =>
    filterTags.length > 0
      ? filterTags.every((filterTag) =>
          node.tags.map((tag) => tag.slug).includes(filterTag)
        )
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
    <>
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
    </>
  )
}