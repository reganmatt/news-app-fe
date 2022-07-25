import Dropdown from 'react-bootstrap/Dropdown'

function Sortby() {
  return (
    <div className='sortby'>
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic" className='sortbyButton'>
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Highest Vote</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Most Commented</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default Sortby
