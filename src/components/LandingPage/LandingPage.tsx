import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_ButtonTextTypeRoundedSt } from './Button_ButtonTextTypeRoundedSt/Button_ButtonTextTypeRoundedSt';
import classes from './LandingPage.module.css';
import { Rectangle7Icon2 } from './Rectangle7Icon2';

interface Props {
  className?: string;
}

export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      
      <div className={classes.imgDest0}></div>

      <div className={classes.contactUs}>Contact Us</div>
      
      <div className={classes.contactTitle1}>Contact Detail 1</div>
      <div className={classes.contactDetail1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam et tellus faucibus malesuada enim. Lorem
        arcu et morbi fusce ultrices libero, nibh. Urna ut a et.
      </div>
      <div className={classes.line1}></div>

      <div className={classes.contactTitle2}>Contact Detail 2</div>
      <div className={classes.contactDetail2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam et tellus faucibus malesuada enim. Lorem
        arcu et morbi fusce ultrices libero, nibh. Urna ut a et.
      </div>
      <div className={classes.line2}></div>

      <div className={classes.contactTitle3}>Contact Detail 3</div>
      <div className={classes.contactDetail3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam et tellus faucibus malesuada enim. Lorem
        arcu et morbi fusce ultrices libero, nibh. Urna ut a et.
      </div>

      <div className={classes.travelFAST}>TravelFAST</div>
      <div className={classes.slogan2}>Exclusive travel experience</div>     
      
      <div className={classes.imgDest5}>
        <div className={classes.card3}></div>
        <div className={classes.package3}>From Person3</div>
        <div className={classes.textPackage3}>Testimonial Number 3</div>
        <div className={classes.greeceHotel3}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button3}
          text={{
            clickHere: <div className={classes.clickHere}>Read Full</div>,
          }}
        />

        <div className={classes.card2}></div>
        <div className={classes.package2}>From Person2</div>
        <div className={classes.textPackage2}>Testimonial Number 2</div>
        <div className={classes.greeceHotel2}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button2}
          text={{
            clickHere: <div className={classes.clickHere}>Read Full</div>,
          }}
        />

        <div className={classes.card1}></div>
        <div className={classes.package1}>From Person1</div>
        <div className={classes.textPackage1}>Testimonial Number 1</div>
        <div className={classes.greeceHotel1}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button1}
          text={{
            clickHere: <div className={classes.clickHere}>Read Full</div>,
          }}
        />
        
        <div className={classes.titleDest}>Testimonials</div>
        <div className={classes.subTitleDest}>See What Our Customers Say</div>
        <div className={classes.destDetails}>
          Greece has a large span of beaches many of them are accessible by boat only. The view of the nature and the
          clean and clear air and water makes it a destination of choice for travellers looking for peace and
          tranquility. Drop by the Blue Caves and famous Navagio beach, which are only accessible by boat. Then sail
          north to beautiful Kefalonia
        </div>
        
      </div>
      
      <div className={classes.imgDest4}>
        <div className={classes.card3}></div>
        <div className={classes.package3}>From $200/Ni</div>
        <div className={classes.textPackage3}>Luxury Sedans</div>
        <div className={classes.greeceHotel3}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button3}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />

        <div className={classes.card2}></div>
        <div className={classes.package2}>From $100/Ni</div>
        <div className={classes.textPackage2}>Mid Size Sedan</div>
        <div className={classes.greeceHotel2}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button2}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />

        <div className={classes.card1}></div>
        <div className={classes.package1}>From $50/Ni</div>
        <div className={classes.textPackage1}>Economy Sedan</div>
        <div className={classes.greeceHotel1}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button1}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />
        
        <div className={classes.titleDest}>Rental Cars</div>
        <div className={classes.subTitleDest}>We Have You Covered</div>
        <div className={classes.destDetails}>
          Greece has a large span of beaches many of them are accessible by boat only. The view of the nature and the
          clean and clear air and water makes it a destination of choice for travellers looking for peace and
          tranquility. Drop by the Blue Caves and famous Navagio beach, which are only accessible by boat. Then sail
          north to beautiful Kefalonia
        </div>
        <div className={classes.rectangle72}>
          <Rectangle7Icon2 />
        </div>
        <div className={classes.exploreDestination2}>Explore Destination</div>
      </div>
            
      <div className={classes.imgDest3}>
        <div className={classes.card3}></div>
        <div className={classes.package3}>From $200/Ni</div>
        <div className={classes.textPackage3}>Five Star Greece Hotel</div>
        <div className={classes.greeceHotel3}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button3}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />

        <div className={classes.card2}></div>
        <div className={classes.package2}>From $100/Ni</div>
        <div className={classes.textPackage2}>Three Star Greece Hotel</div>
        <div className={classes.greeceHotel2}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button2}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />

        <div className={classes.card1}></div>
        <div className={classes.package1}>From $50/Ni</div>
        <div className={classes.textPackage1}>Economy Hotel Greece</div>
        <div className={classes.greeceHotel1}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button1}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />
        
        <div className={classes.titleDest}>Greece</div>
        <div className={classes.subTitleDest}>Samos Islands</div>
        <div className={classes.destDetails}>
          Greece has a large span of beaches many of them are accessible by boat only. The view of the nature and the
          clean and clear air and water makes it a destination of choice for travellers looking for peace and
          tranquility. Drop by the Blue Caves and famous Navagio beach, which are only accessible by boat. Then sail
          north to beautiful Kefalonia
        </div>
        <div className={classes.rectangle72}>
          <Rectangle7Icon2 />
        </div>
        <div className={classes.exploreDestination2}>Explore Destination</div>
      </div>

      <div className={classes.imgDest2}>
        <div className={classes.destDetails}>
        Discover the natural beauty of French Polynesia with our exclusive hotel package deals. Enjoy luxurious vacations
        in the paradise islands of Tahiti, Bora Bora, and Moorea, with options for full-board stays, access to private beaches,
        and exciting water activities. Book now for an unforgettable experience in one of the most spectacular places in the world.
        </div>
        <div className={classes.titleDest}>French Polynesia</div>
        <div className={classes.subTitleDest}>Bora Bora</div>
        <div className={classes.learnMore}>Learn More</div>
        <div className={classes.rectangle72}>
          <Rectangle7Icon2 />
        </div>
        <div className={classes.exploreDestination2}>Explore Destination</div>
        
        <div className={classes.card3}></div>
        <div className={classes.package3}>From $200/Ni</div>
        <div className={classes.textPackage3}>Five Star France Hotel</div>
        <div className={classes.franceHotel3}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button3}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />
        
        <div className={classes.card2}></div>
        <div className={classes.package2}>From $100/Ni</div>
        <div className={classes.textPackage2}>Three Star France Hotel</div>
        <div className={classes.franceHotel2}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button2}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />
                
        <div className={classes.card1}></div>
        <div className={classes.package1}>From $50/Ni</div>
        <div className={classes.textPackage1}>Economy Hotel France</div>
        <div className={classes.franceHotel1}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button1}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />
        
      </div>
      
      <div className={classes.destinations}>Destinations</div>
      
      
      <div className={classes.imgDest1}>
        <div className={classes.destDetails}>
        The Bahamas is a paradise for nature lovers, adventure seekers, and sun worshippers alike. 
        Whether you're looking to relax on the beach, explore coral reefs, swim with dolphins, 
        or indulge in delicious local cuisine, the Bahamas offers endless opportunities for adventure and relaxation. 
        With its friendly locals, vibrant culture, and breathtaking natural beauty, the Bahamas is truly a destination like no other.
        </div>
        <div className={classes.titleDest}>Bahamas</div>
        <div className={classes.subTitleDest}>Musha Cay Resort</div>
        <div className={classes.rectangle72}>
          <Rectangle7Icon2 className={classes.icon} />
        </div>
        <div className={classes.exploreDestination2}>Explore Destination</div>
        
        <div className={classes.card3}></div>
        <div className={classes.package3}>From $200/Ni</div>
        <div className={classes.textPackage3}>Five Start Bahamas Hotel</div>
        <div className={classes.bahamasHotel3}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button3}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />
        
        <div className={classes.card2}></div>
        <div className={classes.package2}>From $100/Ni</div>
        <div className={classes.textPackage2}>Three Star Bahamas Hotel</div>
        <div className={classes.bahamasHotel2}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button2}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />
        
        <div className={classes.card1}></div>
        <div className={classes.package1}>From $50/Ni</div>
        <div className={classes.textPackage1}>Economy Hotel Bahamas</div>
        <div className={classes.bahamasHotel1}></div>
        <Button_ButtonTextTypeRoundedSt
          className={classes.button1}
          text={{
            clickHere: <div className={classes.clickHere}>Learn More</div>,
          }}
        />        
      </div>
      
      <div className={classes.checkBookingArea}></div>
      <div className={classes.searchIcon}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.checkNow}>Check now</div>
      <div className={classes.checkBookingBox}></div>
      <div className={classes.bookingNumber}>Booking Number...</div>
      <div className={classes.checkBookingText}>Check your booking information</div>
      <div className={classes.motivationalText}>
        Every one deserve a break once in a while 
          Make the most out of your leisure trip 
          Explore the world Hassle free 
          Let us introduce you to an experience
          You will remember your whole life{' '}
      </div>
      <div className={classes.slogan}>
        Go on an Adventure !
      </div>
    </div>
  );
});
