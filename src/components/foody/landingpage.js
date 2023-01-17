import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import cn from 'classnames';
import Headroom from 'react-headroom';


function renderSection1(props) {
  return (
    <section className={css(section1Styles.section1)}>
      <div className={css(section1Styles.group)}>
        <div className={css(section1Styles.group)}>
          <div className={css(section1Styles.group)}>
            <div className={css(section1Styles.rect3)} />

            <div className={css(section1Styles.flexCol)}>
              <div className={css(section1Styles.flexRow)}>
                <h5 className={css(section1Styles.highlights1)}>          ABOUT          MENUS          OFFERS</h5>
                <div className={css(section1Styles.flexRow__spacer)} />
                <div className={css(section1Styles.flexRow__item)}>
                  <img
                    className={css(section1Styles.image4)}
                    src={require('assets/foodlover.png')}
                    alt="food lover logo"
                  />
                </div>
                <div className={css(section1Styles.flexRow__spacer1)} />
                <h5 className={css(section1Styles.highlights11)}>GALLERY CONTACT BLOG</h5>
              </div>

              <div className={css(section1Styles.flexRow1)}>
                <div className={css(section1Styles.flexRow1__item)}>
                  <img
                    className={css(section1Styles.image3)}
                    src={require('assets/platgauffre.png')}
                    alt="menu gauffre"
                  />
                </div>
                <div className={css(section1Styles.flexRow1__spacer)} />

                <div className={css(section1Styles.flexCol1)}>
                  <h1 className={css(section1Styles.hero_title1)}>Best Breakfasr</h1>

                  <div
                    className={css(section1Styles.content_box)}
                    style={{ '--src': `url(${require('assets/contentbox.png')})` }}>
                    <h2 className={css(section1Styles.medium_title2)}>Contact Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
             <br/>
         
        </div>

        <h2 className={css(section1Styles.medium_title1)}>
          Vous méritez un bon plat opour bien démarrer votre journée,dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.
        </h2>
      </div>

     
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={css(section2Styles.section2)}>
      <img
        className={css(section2Styles.image2)}
        src={require('assets/souper.png')}
        alt="alt text"
      />

      <div className={css(section2Styles.group)}>
      <h1 className={css(section2Styles.hero_title)}>About Us</h1>
 
        <h1 className={css(section2Styles.title2)}>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis.
        </h1>

          </div>
    </section>
  );
}

function renderSection3(props) {
  return (
    <section className={css(section3Styles.section3)}>
      <img
        className={css(section3Styles.decorator1)}
        src={require('assets/yellow.png')}
        alt="yellow decorator1"
      />
      <img
        className={css(section3Styles.decorator)}
        src={require('assets/menuside.png')}
        alt="decorator"
      />
      <div className={css(section3Styles.group3)}>
      <h1 className={css(section3Styles.hero_title)}>Our Food Quality</h1>
       <h1 className={css(section3Styles.title3)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis.
        </h1>
       </div>
       <img
        className={css(section4Styles.decorator2)}
        src={require('assets/breakfirst.png')}
        alt="breakfirst decorator2"
      />
    </section>
  );
}

function renderSection4(props) {
  return (
    <section className={css(section4Styles.section4)}>
      <div
        className={css(section4Styles.section41)}
        style={{ '--src': `url(${require('assets/bgk.png')})` }}>
        <h5 className={css(section4Styles.highlights)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse.
        </h5>

        <div className={css(section4Styles.content_box1)}>
        <h1 className={css(section4Styles.hero_title14)}>Enjoy Our Food</h1>
    
          <h1 className={css(section4Styles.desc14)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
            vel facilisis.{' '}
          </h1>
        </div>
      </div>

      <h1 className={css(section4Styles.hero_title1)}>Our Food Gallery</h1>

  <div className={css(section4Styles.boxgalery)}>
     <div className={css(section4Styles.galery1)}>

     <img
        className={css(section4Styles.img)}
        src={require('assets/gal1.png')}
        alt="menu light decorator3"
      />
       <img
        className={css(section4Styles.img)}
        src={require('assets/gal2.png')}
        alt="menu light decorator3"
      />
       <img
        className={css(section4Styles.img)}
        src={require('assets/gal3.png')}
        alt="menu light decorator3"
      />

     </div>
     <div className={css(section4Styles.galery2)}>

<img
   className={css(section4Styles.img)}
   src={require('assets/gal11.png')}
   alt="menu light decorator3"
 />
  <img
   className={css(section4Styles.img)}
   src={require('assets/gal12.png')}
   alt="menu light decorator3"
 />
  <img
   className={css(section4Styles.img)}
   src={require('assets/gal13.png')}
   alt="menu light decorator3"
 />

     </div>
  </div>
      <img
        className={css(section4Styles.decorator3)}
        src={require('assets/bestmeal1.png')}
        alt="menu light decorator3"
      />
    </section>
  );
}

function renderSection5(props) {
  return (
    <section className={css(section5Styles.section5)}>
      <div className={css(section5Styles.group)}>
        <h1 className={css(section5Styles.title)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna
        </h1>

        <div className={css(section5Styles.flexCol)}>
          <h1 className={css(section5Styles.hero_title0)}>Our Menu</h1>
          <h5 className={css(section5Styles.highlights1)}>
                     &nbsp; Menu description : dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse.
                    </h5>
                    <br/><br/>
          <div className={css(section5Styles.group1)}>
            <div className={css(section5Styles.flexCol1)}>
              <div className={css(section5Styles.rect1)} />
              <div className={css(section5Styles.rect55)} />
            </div>

            <div className={css(section5Styles.group2)}>
              

              <div className={css(section5Styles.group2)}>
            
                <div className={css(section5Styles.flexCol)}>
                
                    <div className={css(section5Styles.flexRowM)}>


                    <div className={css(section5Styles.flexCols)}>
  <img
                        className={css(section5Styles.image5ms)}
                        src={require('assets/menu1.png')}
                        alt="menu 1"
                      />
                      <h1 className={css(section5Styles.title1)}>ITALIAN SOURCE MUSHROOM</h1>
                      <div className={css(section5Styles.flexRow1__item)}>
                        <h2 className={css(section5Styles.medium_title)}>Price: $12.00</h2>
                      </div>
                      </div>
                      <div className={css(section5Styles.flexCols)}>
                       <img
                        className={css(section5Styles.image5ms)}
                        src={require('assets/menu2.png')}
                        alt="menu 2"
                      />
                      <h1 className={css(section5Styles.title1)}>ITALIAN SOURCE MUSHROOM</h1>
                      <div className={css(section5Styles.flexRow1__item)}>
                        <h2 className={css(section5Styles.medium_title)}>Price: $12.00</h2>
                      </div>
                      </div>

                       <div className={css(section5Styles.flexCols)}>
                       <img
                        className={css(section5Styles.image5ms)}
                        src={require('assets/menu3.png')}
                        alt="menu 3"
                        />
                       <h1 className={css(section5Styles.title1)}>ITALIAN SOURCE MUSHROOM</h1>
                       <div className={css(section5Styles.flexRow1__item)}>
                        <h2 className={css(section5Styles.medium_title)}>Price: $12.00</h2>
                      </div>
                       </div>

                   
                  </div>

                  <div className={css(section5Styles.flexCol3)}>
                    <div className={css(section5Styles.flexCol3__item)}>
               
                      <img
                        className={css(section5Styles.image5s)}
                        src={require('assets/bestmeal.png')}
                        alt="best meal lunch"
                      />
                           <div className={css(section5Styles.flexCol3_box)} >
                    <h1 className={css(section5Styles.enjoyttl)}>Enjoy Best Meal</h1>
 <br/>
<h5 className={css(section5Styles.highlightsj)}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Quis ipsum suspendisse.
</h5>
</div>
                    </div>

                    <div className={css(section5Styles.flexCol4)}>
                      <div className={css(section5Styles.flexCol4__item)}>
                        <img
                          className={css(section5Styles.image)}
                          src={require('assets/logofooter.png')}
                          alt="footer"
                        />
                      </div>

                      <div className={css(section5Styles.flexCol5)}>
                        <h3 className={css(section5Styles.subtitle)}>Home About Us Services Foods COntact Location</h3>

                        <div className={css(section5Styles.flexRow2)}>
                          <div className={css(section5Styles.flexRow2__item)}>
                            <img
                              className={css(section5Styles.icon)}
                              src={require('assets/fb.png')}
                              alt="alt text"
                            />
                          </div>
                          <div className={css(section5Styles.flexRow2__spacer)} />
                          <div className={css(section5Styles.flexRow2__item)}>
                            <img
                              className={css(section5Styles.icon)}
                              src={require('assets/twitter.png')}
                              alt="alt text"
                            />
                          </div>
                          <div className={css(section5Styles.flexRow2__spacer)} />
                          <div className={css(section5Styles.flexRow2__item)}>
                            <img
                              className={css(section5Styles.icon)}
                              src={require('assets/instavect.png')}
                              alt="alt text"
                            />
                          </div>
                          <div className={css(section5Styles.flexRow2__spacer)} />
                          <div className={css(section5Styles.flexRow2__item)}>
                            <img
                              className={css(section5Styles.icon)}
                              src={require('assets/pint.png')}
                              alt="alt text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Foody(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show">
            <h1>&copy;Nouha</h1>
        </nav>
      </Headroom>

      <main className={cn(css(styles.main), 'foody')}>
        <div className={css(styles.main__item)}>{renderSection1(props)}</div>
        <div className={css(styles.main__item)}>{renderSection2(props)}</div>
        <div className={css(styles.main__item)}>{renderSection3(props)}</div>
        <div className={css(styles.main__item)}>{renderSection4(props)}</div>
        <div className={css(styles.main__item)}>{renderSection5(props)}</div>
      </main>
    </React.Fragment>
  );
}

Foody.inStorybook = true;

const section1Styles = StyleSheet.create({
  section1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    flexGrow: 1,
    minHeight: 0
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor:'#232329' , 
    flexGrow: 1,
    minHeight: 0
  },
  rect3: {
    backgroundImage: `linear-gradient(rgba(23,23,29,0.8))`,
    backgroundRepeat:'no-repeat',
    position: 'relative',
    flexGrow: 1,
    minHeight: 852
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 40,
    bottom: 122,
    minHeight: 0,
    left: 47,
    right: 248
  },
  flexRow: {
    display: 'flex',
    '@media (min-width: 1920px) and (max-width: 99999px)': {},
    '@media (min-width: 1920px) and (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {
      margin: '0px 0px 0px 32px'
    },
    '@media (max-width: 991px)': {
      margin: '0px 0px 0px 24px'
    },
    '@media (max-width: 767px)': {
      margin: '0px 0px 0px 20px'
    },
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {
      margin: '0px 0px 0px 16px'
    },
    '@media (max-width: 383px)': {},
    position: 'relative',
    minHeight: 0,
    margin: '0px 0px 0px 38px'
  },
  highlights1: {
    font: '400 16px/1.18 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '12px',
      textAlign: 'left'
    },
    position: 'relative',
    flex: '0 0 auto',
    minWidth: 310,
    minHeight: 0,
    margin: '31px 25px 30px'
  },
  flexRow__spacer: {
    flex: '0 1 277px'
  },
  flexRow__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 80px'
  },
  image4: {
    width: 97,
    height: 'min-content',
    aspectRatio: '1.21',
    verticalAlign: 'top',
    objectFit: 'container',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    minWidth: 97,
    
  },
  flexRow__spacer1: {
    flex: '0 1 223px'
  },
  highlights11: {
    font: '400 16px/1.18 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '12px',
      textAlign: 'left'
    },
    position: 'relative',
    flex: '0 0 auto',
    minWidth: 200,
    minHeight: 0,
    margin: '31px 0px 30px'
  },
  flexRow1: {
    display: 'flex',
    position: 'relative',
    minHeight: 0,
    margin: '122px 0px 0px'
  },
  flexRow1__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 626px'
  },
  image3: {
    width: '100%',
    height: 'min-content',
    aspectRatio: '1.28',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    top:'95px',
    minHeight: 0
  },
  flexRow1__spacer: {
    flex: '0 1 59px'
  },
  flexCol1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 460px',
    minHeight: 0,
    margin: '50px 0px 66px'
  },
  hero_title1: {
    font: '67px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(254,144,0)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '56px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '48px'

    },
    '@media (max-width: 767px)': {
      fontSize: '40px',
    },
    '@media (max-width: 575px)': {
      fontSize: '36px',
      top:200,
    },
    '@media (max-width: 479px)': {
      fontSize: '32px',
      top:200,
    },
    position: 'relative',
    minHeight: 0
  },
  content_box: {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--src) center center / cover no-repeat',
    width: '67.48%',
    borderRadius:'10px',
    alignItems:'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: '68px',
    margin: '321px 56.52% 0px 0%'
  },
 
  medium_title2: {
    font: '400 25px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(35,35,41)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '20px',
      textAlign: 'left',
      margin: '19px 24px 21px 32px'
    },
    '@media (max-width: 767px)': {
      fontSize: '16px',
      margin: '19px 16px 21px 20px'
    },
    '@media (min-width: 1920px) and (max-width: 99999px)': {},
    '@media (min-width: 1920px) and (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 991px)': {
      margin: '19px 20px 21px 24px'
    },
    '@media (max-width: 575px)': {},
    '@media (max-width: 479px)': {
      margin: '19px 12px 21px 16px'
    },
    '@media (max-width: 383px)': {},
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '19px 30px 21px 37px'
  },
  medium_title1: {
      marginTop:'20px',
    font: '400 25px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    height: 30,
    '@media (max-width: 1199px)': {
      fontSize: '20px',
      textAlign: 'left'
    },
    '@media (max-width: 767px)': {
      fontSize: '16px'
    },
    position: 'absolute',
    top: 478,
    left: 740,
    right: -672
  },
  section11: {
    height: 'min-content',
    aspectRatio: '1.69',
    background: 'var(--src) center center / cover no-repeat',
    position: 'absolute',
    top: 0,
    minHeight: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

const section2Styles = StyleSheet.create({
  section2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex:-1,
    backgroundColor:'rgba(35,35,41,0.9)',
    flexGrow: 1,
    minHeight: 715
  },
  title2: {
    font: '400 33.33300018310547px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '28px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '20px'
    },
    '@media (max-width: 383px)': {
      fontSize: '16px'
    },
    position: 'absolute',
    top: 0,
    bottom: 0,
    minHeight: 0,
    left: 0,
    right: 0
  },
  image2: {
    width: 646,
    height: 'min-content',
    aspectRatio: '1',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'absolute',
    minHeight: 0,
    bottom: -50,
    left: 120
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    height: 62,
    position: 'absolute',
    top: 323,
    left: 814,
    right: -2960
  },
  title: {
    font: '400 33.33300018310547px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '28px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '20px'
    },
    '@media (max-width: 383px)': {
      fontSize: '16px'
    },
    position: 'absolute',
    top: 0,
    bottom: 0,
    minHeight: 0,
    left: 0,
    right: 0
  },
  hero_title: {
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    width: '460px',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px'
    },
    position: 'absolute',
    top: -98,
    bottom: 58,
    minHeight: '120px',
    margin:'20px',
    left: -8
  }
});

const section3Styles = StyleSheet.create({
  section3: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor:'rgba(35,35,41,.9)',
    flexGrow: 1,
    height:'auto',
    minHeight: 0,
    },
  decorator1: {
    width: 'calc(130% -200px)',
    height: 1295,
    zIndex:0,
    aspectRatio: '1.2',
    objectPosition: 'center center',
    position: 'absolute',
    transform:'skewX(5deg)',
    minHeight: 0,
    bottom: -1240,
    left: -45,
    right: -450
  },
  decorator: {
    width: 791,
    height: 1012,
    aspectRatio: '1',
    verticalAlign: 'top',
    objectPosition: 'center center',
    position: 'absolute',
    minHeight: 0,
    bottom: -497,
    right: -321
  },
  group3: {
    display: 'flex',
    flexDirection: 'column',
    width: '27.64%',
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    top:798,
    left:-25,
    margin: '10px 8.47% 44px 13.89%'
  },
  title3: {
    font: '400 33.33300018310547px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    height: 58,
    '@media (max-width: 1199px)': {
      fontSize: '28px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '20px'
    },
    '@media (max-width: 383px)': {
      fontSize: '16px'
    },
    position: 'absolute',
  top:399,
    left: 1,
    right: -3000
  },
  title: {
    font: '400 33.33300018310547px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    height: 58,
    '@media (max-width: 1199px)': {
      fontSize: '28px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '20px'
    },
    '@media (max-width: 383px)': {
      fontSize: '16px'
    },
    position: 'absolute',
    bottom: -53,
    left: 1,
    right: -3189
  },
  hero_title: {
      top:235,
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 88
  }
});

const section4Styles = StyleSheet.create({
  section4: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'rgba(35,35,41,.9)',
  zIndex:-1,
    position: 'relative',
    flexGrow: 1,
    minHeight: 0
  },
  desc14:{
      position:'relative',
      margin:'2px',
      display:'flex',
      textAlign:'center',
      left:'2px',
      padding:'15px',
      top:-146,
      color:'white',
  },
  section41: {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--src) center center / cover no-repeat',
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '2683px 0px 0px'
  },
  highlights: {
    font: '400 16.66699981689453px/1.19 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    height: 20,
    '@media (max-width: 991px)': {
      fontSize: '12px',
      textAlign: 'left'
    },
    position: 'absolute',
    bottom: -763,
    left: 962,
    right: -692
  },
  content_box1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(23,23,30,0.8)',
    outline: '10px solid rgb(254,144,0)',
    outlineOffset: -5,
    width: '50.42%',
    '@media (min-width: 1920px) and (max-width: 99999px)': {},
    '@media (min-width: 1920px) and (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 1199px)': {},
    '@media (max-width: 991px)': {},
    '@media (max-width: 767px)': {
      width: '57.55%'
    },
    '@media (max-width: 575px)': {
      width: '64.39%'
    },
    '@media (max-width: 479px)': {
      width: '70.68%'
    },
    '@media (max-width: 383px)': {
      width: '76.27%'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '193px auto'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    font: '400 33.33300018310547px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px',
    height: 61,
    '@media (max-width: 1199px)': {
      fontSize: '28px',
      textAlign: 'center'
    },
    '@media (max-width: 991px)': {
      fontSize: '24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '20px'
    },
    '@media (max-width: 383px)': {
      fontSize: '16px'
    },
    position: 'absolute',
    top: 165,
    left: -1695,
    right: -1165
  },
  hero_title14: {
    display: 'flex',
    justifyContent: 'center',
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: '49.59%',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'center'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px',
      width: '63.62%'
    },
    '@media (min-width: 1920px) and (max-width: 99999px)': {},
    '@media (min-width: 1920px) and (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {
      width: '56.74%'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 93,
    margin: '37px auto 250px'
  },
  hero_title: {
    display: 'flex',
    justifyContent: 'center',
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    letterSpacing: '0px',
    width: '49.59%',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'center'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px',
      width: '63.62%'
    },
    '@media (min-width: 1920px) and (max-width: 99999px)': {},
    '@media (min-width: 1920px) and (max-width: 2999px)': {},
    '@media (max-width: 1919px)': {},
    '@media (max-width: 1399px)': {},
    '@media (max-width: 479px)': {
      width: '56.74%'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 93,
    margin: '77px auto 404px'
  },
  hero_title1: {
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    width: 398,
    height: 'min-content',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px'
    },
    position: 'absolute',
    top: 1351,
    minHeight: 0,
    right: 512
  },
  decorator2: {
    width: 681,
    height: 'min-content',
    aspectRatio: '0.86',
    verticalAlign: 'top',
    objectPosition: 'center center',
    position: 'relative',
    top: 1268,
    zIndex:9999,
    minHeight: 0,
    right: -812
  },
  img:{
 width:330,
 height:380,
 position: 'relative',
 margin:'15px',
 '@media (max-width: 767px)': {
    width:230,
 height:280,
  },
  '@media (max-width: 383px)': {
    width:230,
    height:280,
  },
  },
  boxgalery:{
 width:'calc(100%-25px)',
 top:1560,
 justifyContent:'center',
 left:0,
 position:'absolute',
 display:'flex',
 flexDirection:'column',
 
 gap:'10px',
 '@media (max-width: 1199px)': {
    width:'calc(100%-25px)',
  },
  '@media (max-width: 767px)': {
    width:'calc(100%-3px)',
    position:'absolute',
    display:'flex',
    flexDirection:'column',
    top:1390,
    left:-10
  },
  '@media (max-width: 383px)': {
    position:'absolute',
    display:'flex',
    flexDirection:'column',
    overflow:'auto',
    top:1390,
    left:-10
  },
  },
     galery1:{
    width:'100%',
    position:'relative',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    left:'20%',
    justifyContent:'space-between',
    '@media (max-width: 1199px)': {
        width:'100%',
      },
      '@media (max-width: 767px)': {
        width:'100%',
        position:'relative',
        display:'flex',
        flexDirection:'row',
        left:-2,
      },
      '@media (max-width: 383px)': {
        position:'relative',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        left:-2,
      },
     },
     galery2:{
        maxWidth:'100%',
        height:'auto',
        left:'20%',
        position:'relative',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        '@media (max-width: 1199px)': {
            width:'100%',
          },
          '@media (max-width: 767px)': {
            width:'100%',
            position:'relative',
            display:'flex',
            flexDirection:'row',
            left:-2,
          },
          '@media (max-width: 383px)': {
            position:'relative',
            width:'100%',
            display:'flex',
            flexDirection:'row',
            left:-2,
          },
         },
    decorator3: {
    width: 430,
    height: 'min-content',
    aspectRatio: '1',
    verticalAlign: 'top',
    objectPosition: 'center center',
    position: 'absolute',
    top: 745,
    minHeight: 0,
    left: -35,
    
  }
});

const section5Styles = StyleSheet.create({
  section5: {
    display: 'flex',
    top:250,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor:'rgba(35,35,41,.9)',
    flexGrow: 1,
    minHeight: 0
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    width: '94.38%',
    position: 'relative',
    flexGrow: 1,
    minHeight: 0,
    margin: '168px 3.96% 7px 1.67%'
  },
  title: {
    font: '400 33.33300018310547px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    height: 40,
    '@media (max-width: 1199px)': {
      fontSize: '28px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '24px'
    },
    '@media (max-width: 767px)': {
      fontSize: '20px'
    },
    '@media (max-width: 383px)': {
      fontSize: '16px'
    },
    position: 'absolute',
    top: 1113,
    left: 669,
    right: -1141
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    minHeight: 0
  },
  hero_title: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'right',
    letterSpacing: '0px',
    width: '20.38%',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'right'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px'
    },
    position: 'relative',
    minHeight: 0,
    margin: '0px auto'
  },
  hero_title0: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'right',
    letterSpacing: '0px',
    width: '20.38%',
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'right'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px'
    },
    position: 'relative',
    minHeight: 0,
    margin:'0 auto 35px auto',
  },
  group1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: 0,
    margin: '477px 0px 0px'
  },
  flexCol1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 280,
    bottom: -107,
    minHeight: 0,
    left: -24,
    right: -57
  },
  flexCols:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: -400,
    width:'35%',
    justifyContent:'space-around',
    minHeight: 0,
  },
  rect1: {
    backgroundColor: 'rgb(254,144,0)',
    position: 'relative',
    minHeight: 504
  },
  rect55: {
    backgroundColor: 'rgb(49,49,57)',
    position: 'relative',
    minHeight: 25

    
  },
  group2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    top:-25,
    minHeight: 0
  },
  highlights: {
    font: '400 16.66699981689453px/1.19 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    height: 20,
    '@media (max-width: 991px)': {
      fontSize: '12px',
      textAlign: 'left'
    },
    position: 'absolute',
    top: 37,
    left: 499,
    right: -310
  },
  hero_title1: {
    font: '400 50.01599884033203px/1.21 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    width: 376,
    height: 76,
    '@media (max-width: 1199px)': {
      fontSize: '44px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '36px'
    },
    '@media (max-width: 767px)': {
      fontSize: '32px'
    },
    '@media (max-width: 575px)': {
      fontSize: '28px'
    },
    '@media (max-width: 383px)': {
      fontSize: '24px'
    },
    position: 'absolute',
    top: 429,
    right: 315
  },
  flexCol2: {
    display: 'flex',
    flexDirection: 'column',
    width: '96.76%',
    position: 'relative',
    minHeight: 0,
    margin: '0px 0% 0px 3.24%'
  },
  flexRow: {
    display: 'flex',
    position: 'relative',
    minHeight: 0
  },
  flexRowM: {
    display: 'flex',
    position: 'relative',
    flexDirection:'row',
    gap:'10px',
    alignItems: 'center',
    width:'100%',
    heigh:'auto',
    left:'10%',
    minHeight: 0
  },
  title1: {
    font: '400 29.16699981689453px/1.19 "Inter", Helvetica, Arial, serif',
    color: 'rgb(254,144,0)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '24px',
      textAlign: 'left'
    },
    '@media (max-width: 991px)': {
      fontSize: '20px'
    },
    '@media (max-width: 575px)': {
      fontSize: '16px'
    },
    position: 'relative',
    flex: '0 0 auto',
    minWidth: 423,
    minHeight: 0
  },
  flexRow__spacer: {
    flex: '0 1 30px'
  },
  flexRow__spacer1: {
    flex: '0 1 16px'
  },
  highlights1: {
    font: '400 16.66699981689453px/1.19 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    '@media (max-width: 991px)': {
      fontSize: '12px',
      textAlign: 'left'
    },
    position: 'relative',
    minHeight: 0,
    margin: '2px 2px 0px 10%'
  },
  flexRow1: {
    display: 'flex',
    '@media (max-width: 575px)': {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      rowGap: 16
    },
    position: 'relative',
    minHeight: 0,
    margin: '95px 3px 0px'
  },
  flexRow1__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 0 154px',
    minWidth: 154,
    '@media (max-width: 575px)': {
      flex: '0 0 calc(1/1 * 100% - 0px / 1)',
      minWidth: 'unset'
    }
  },
  medium_title: {
    font: '400 25px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(254,144,0)',
    letterSpacing: '0px',
    '@media (max-width: 1199px)': {
      fontSize: '20px',
      textAlign: 'left'
    },
    '@media (max-width: 767px)': {
      fontSize: '16px'
    },
    position: 'relative',
    flexGrow: 1,
    minHeight: 0
  },
  flexRow1__spacer: {
    flex: '0 1 297px',
    '@media (max-width: 575px)': {
      display: 'none'
    }
  },
  flexRow1__spacer1: {
    flex: '0 1 285px',
    '@media (max-width: 575px)': {
      display: 'none'
    }
  },
  flexCol3: {
    display: 'flex',
    flexDirection: 'column',
    width: '65.27%',
    position: 'relative',
    minHeight: 0,
    margin: '161px 30.73% 0px 0%'
  },
  flexCol3__item: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    left:'10px',
  },
  flexCol3_box:{
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin:'10px',
    left:'10px',
    top:-390,
  },
  highlightsj:{
    font: '400 16.66699981689453px/1.19 "Inter", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    textAlign: 'left',
    width:'100%',
   left:-50,
   marginLeft:-139,
    top:65,

    '@media (max-width: 991px)': {
      fontSize: '12px',
     
    }
  },
  enjoyttl:{
      position:'relative',
      top:40,
      left:-156,
      width:'690px',
      font: '67px/1.2 "Inter", Helvetica, Arial, serif',
      color: 'rgb(255,255,255)',
      letterSpacing: '0px',
      '@media (max-width: 1199px)': {
        fontSize: '56px',
        textAlign: 'left'
      },
      '@media (max-width: 991px)': {
        fontSize: '48px'
  
      },
      '@media (max-width: 767px)': {
        fontSize: '40px',
      },
      '@media (max-width: 575px)': {
        fontSize: '36px',
    
      },
      '@media (max-width: 479px)': {
        fontSize: '32px',
      
      },
      
      
  },
  image5ms: {
    width: '64.37%',
    height: 'min-content',
    aspectRatio: '0.96',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    top:-36,
    left:0,
    margin: '0px 25.63% 0px 0%'
  },
  image5s: {
    width: '64.37%',
    height: 'min-content',
    aspectRatio: '0.96',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    top:-456,
    left:-30,
    margin: '0px 25.63% 0px 0%'
  },
  flexCol4: {
    display: 'flex',
    flexDirection: 'column',
    width: '80.98%',
    position: 'relative',
    minHeight: 0,
    margin: '-28px 15% 0px 10.02%',
    top:-289
  },
  flexCol4__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  
  },
  image: {
    width: '63.18%',
    height: 'min-content',
    aspectRatio: '4.82',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    left:'15%',
    margin: '0px 0% 0px 36.82%'
  },
  flexCol5: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    position: 'relative',
    minHeight: 0,
    left:'15%',
    margin: '40px 15.12% 0px 5%'
  },
  subtitle: {
    font: '400 20.83300018310547px/1.2 "Inter", Helvetica, Arial, serif',
    color: 'rgb(231,231,231)',
    letterSpacing: '0px',
    alignContent:'center',
    left:'35%',
    top:5,
    '@media (max-width: 991px)': {
      fontSize: '16px',
      textAlign: 'left'
    },
    position: 'relative',
    minHeight: 0
  },
  flexRow2: {
    display: 'flex',
    width: '47.79%',
    position: 'relative',
    minHeight: 0,
    margin: '59px 0% 0px 52.21%'
  },
  flexRow2__item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 46px'
  },
  icon: {
    width: 46,
    height: 'min-content',
    aspectRatio: '1',
    verticalAlign: 'top',
    objectFit: 'cover',
    objectPosition: 'center center',
    position: 'relative',
    minHeight: 0,
    minWidth: 46
  },
  flexRow2__spacer: {
    flex: '0 1 25px'
  }
});

const styles = StyleSheet.create({
    main: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 0px 0px 0px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 0,
   
    },
    main__item: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  });
  
