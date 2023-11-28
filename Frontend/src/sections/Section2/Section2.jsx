import './Section2.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {LoginSection} from '../../sections/index'
import logo from '../../assets/images/logo.jpg'
const Section2 = () => {
        const imageStyle = {
          border: '2px solid var(--color-azure)', // Adjust the border style and color as needed
          borderRadius: '10px', 
         // Optional: Add border radius for rounded corners
        };
        const legendStyle = {
            background: 'rgba(0, 0, 0, 0.7)', // Change to your desired background color
            color: '#fff',         // Optional: Set text color for better contrast
            padding: '5px 10px',
            boxShadow: '0 0 1px 1px var(--color-azure)',  // Optional: Add padding for better spacing
          };

  return (
    <>
    <br/>
        <div className='SectionTwo jumbatron'>
            <br/>
             <hr/>
            <h2>Lorem Ipsum is not simply random text. </h2>
            <hr/>
        <div className='row'>
        <div className='col-md-3 part '>
             
        <div className="text-div">
            <hr/>
        <h3>Lorem Ipsum is not simply random text. </h3>
        <br/>
        <p>Lorem Ipsum is not simply random text. It has roots Lorem Ipsum is not simply random text. It has roots Lorem Ipsum is not simply random text. It has roots </p>
        <br/>
        <p>Lorem Ipsum is not simply random text. It has roots </p>
        <br/>
        <div className="info-box">More Info</div>
        <hr/>
    </div>
            

         </div>
         
            <div className='col-md-6  '>
          <br/>
            <Carousel 
                    showArrows={true}
                    infiniteLoop={true}
                    showStatus={false} // Hide status indicator
                    showThumbs={true} // Hide thumbnail images
                    transitionTime={1000} // Transition duration in milliseconds
                    emulateTouch={true} // Enable touch swipe on mobile devices
                    selectedItem={0} // Start with the first item
                    interval={5000} // Autoplay interval in milliseconds
                     // Start with the first item
                    autoPlay={true}
            >
        <div>
        <img src="https://picsum.photos/800/400?image=101" alt="Image 1"  style={imageStyle} />
        <p className="legend" style={legendStyle}><strong>Title 1: </strong> Image 1 description</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=102" alt="Image 2"  style={imageStyle} />
        <p className="legend" style={legendStyle}>Image 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=103" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
     
      <div>
        <img src="https://picsum.photos/800/400?image=116" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=102" alt="Image 2"  style={imageStyle} />
        <p className="legend" style={legendStyle}>Image 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=103" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
     
      <div>
        <img src="https://picsum.photos/800/400?image=116" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=102" alt="Image 2"  style={imageStyle} />
        <p className="legend" style={legendStyle}>Image 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=103" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
     
      <div>
        <img src="https://picsum.photos/800/400?image=116" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=102" alt="Image 2"  style={imageStyle} />
        <p className="legend" style={legendStyle}>Image 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=103" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
     
      <div>
        <img src="https://picsum.photos/800/400?image=116" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=102" alt="Image 2"  style={imageStyle} />
        <p className="legend" style={legendStyle}>Image 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=103" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
     
      <div>
        <img src="https://picsum.photos/800/400?image=116" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=102" alt="Image 2"  style={imageStyle} />
        <p className="legend" style={legendStyle}>Image 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/800/400?image=103" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
     
      <div>
        <img src="https://picsum.photos/800/400?image=116" alt="Image 3"  style={imageStyle}/>
        <p className="legend" style={legendStyle}>Image 3</p>
      </div>
      {/* Add more slides as needed with different image URLs */}
    </Carousel>
    <div className="SectionTwooo "><h4>Lorem Ipsum is not simply random text. </h4></div>
    <br/>
            </div>
            <div className='col-md-3 SectionTwoo '>
             
                
                <LoginSection />
               

            </div>
        </div>
        
    
        </div>
    </>
  )
}

export default Section2