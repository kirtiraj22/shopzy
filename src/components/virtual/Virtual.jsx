import React from 'react';
import css from './Virtual.module.css';
import Shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import BeforeImage from '../../assets/before.png';
import AfterImage from '../../assets/after.png';
const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>Virtual Try-on</span>
        <span>Never Buy the wrong shade Again!</span>
        <span>Try Now!</span>
        <img
          src={Shade}
          alt=''
        />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage
            leftImage={BeforeImage}
            rightImage={AfterImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
