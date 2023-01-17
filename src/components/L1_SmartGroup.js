import React from 'react';
import cn from 'classnames';

import styles from './L1_SmartGroup.module.scss';

export default function L1_SmartGroup(props) {
  return (
    <div className={cn(styles.root, 'l1-smart-group')}>
      <div className={styles.flexCol}>
        <div className={styles.flexCol1}>
          <h1 className={styles.big_title}>Lorem ipsum dolor</h1>
          <h3 className={styles.subtitle1}> Orci varius natoque penatibus et magnis dis parturient montes</h3>
        </div>

        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol2}>
              <div className={styles.flexCol2__item}>
                <div
                  className={styles.image}
                  style={{ '--src': `url(${require('assets/c0db9bc0628043fc31c7696dc9e52550.png')})` }}
                />
              </div>
              <h2 className={styles.medium_title}>Purchase Securely</h2>
              <h4 className={styles.highlights}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

              <div className={styles.content_box}>
                <h3 className={styles.subtitle}>Learn More</h3>
              </div>
            </div>
          </div>
          <div className={styles.flexRow__spacer} />
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol2}>
              <div className={styles.flexCol2__item1}>
                <div
                  className={styles.image}
                  style={{ '--src': `url(${require('assets/0f73a4da282743df25f6d21dc993f23b.png')})` }}
                />
              </div>
              <h2 className={styles.medium_title1}>Ships From Warehouse</h2>
              <h4 className={styles.highlights}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

              <div className={styles.content_box}>
                <h3 className={styles.subtitle}>Learn More</h3>
              </div>
            </div>
          </div>
          <div className={styles.flexRow__spacer} />
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol2}>
              <div className={styles.flexCol2__item2}>
                <div
                  className={styles.image1}
                  style={{ '--src': `url(${require('assets/ca57a267c6a7614807eca409a1ae2e06.png')})` }}
                />
              </div>
              <h2 className={styles.medium_title2}>Style Your Room</h2>
              <h4 className={styles.highlights}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

              <div className={styles.content_box}>
                <h3 className={styles.subtitle}>Learn More</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

L1_SmartGroup.inStorybook = true;
