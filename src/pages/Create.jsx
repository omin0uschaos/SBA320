import './Create.css'
import RandomQuote from '../components/RandomQuote'
import RandomImage from '../components/RandomImage'
import Timer from '../components/Timer/Timer'
import WritersBlock from '../components/WritersBlock/WritersBlock'

function Create() {
  return (
    <>
    <div className="parent">
      <div className="div1"><RandomQuote /></div>
      <div className="div2"><RandomImage /></div>
      <div className="div3"><Timer /></div>
      <div className="div4"> </div>
      <div className="div5"><WritersBlock /></div>
      <div className="div6"> </div>
      </div>
    </>
  )
}

export default Create