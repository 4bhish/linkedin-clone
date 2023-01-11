import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    function newsArticle (heading,subtitle){
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon className='mui' />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle ("Abhish is King", "This build owns Abhish")}
      {newsArticle ("Free Advice", "Money is important seek it")}
      
    </div>
  )
}

export default Widgets
