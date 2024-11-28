import React from 'react';
import './Gallery.css'; // Importing the CSS styles for the gallery component
import { images } from '../../constants'; // Importing images from a constants file
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'; // Importing icon components
import { SubHeading } from '../../components'; // Importing a custom SubHeading component

// Array of gallery images sourced from the constants
const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  // Using a ref to directly access the DOM element for scrolling
  const scrollRef = React.useRef(null);

  // Function to scroll the gallery left or right
  const scroll = (direction) => {
    const { current } = scrollRef; // Destructuring to get the current DOM element

    // Check the direction and adjust the scroll position
    if (direction === 'left') {
      current.scrollLeft -= 300; // Scroll left by 300 pixels
    } else {
      current.scrollLeft += 300; // Scroll right by 300 pixels
    }
  };

  return (
    <div className='app__gallery flex__center'> {/* Main container for the gallery */}
      <div className='app__gallery-content'> {/* Content area for the title and description */}
        <SubHeading title='Instagram' /> {/* Subheading for the gallery */}
        <h1 className='headtext__cormorant'>Photo Gallery</h1> {/* Main heading */}
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>View More</button> {/* Button for additional actions */}
      </div>

      <div className='app__gallery-images'> {/* Container for the images */}
        <div className='app__gallery-images_container' ref={scrollRef}> {/* Ref attached for scrolling */}
          {galleryImages.map((image, index) => ( // Mapping through the galleryImages array
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery image" /> {/* Displaying the image */}
              <BsInstagram className='gallery__image-icon' /> {/* Instagram icon overlay on the image */}
            </div>
          ))}

          <div className='app__gallery-images_arrows'> {/* Container for the navigation arrows */}
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} /> {/* Left arrow */}
            <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} /> {/* Right arrow */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery; // Exporting the Gallery component for use in other parts of the application
