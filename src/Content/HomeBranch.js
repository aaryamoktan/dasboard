import React from 'react'
import Homeleft from '../Component/Home/Homeleft'
import Homeright from '../Component/Home/Homeright'
const HomeBranch = () => {
  return (
    <div className='homeBranch'>
      <div className='homeBranchInner'>
        <div className='home-left'>
          <Homeleft />
        </div>
       </div>
    </div>
  )
}

export default HomeBranch