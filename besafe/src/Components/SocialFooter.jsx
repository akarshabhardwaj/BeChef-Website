import React, { useEffect, useState } from "react";
import styles from "./SocialFooter.module.css";

function SocialFooter() {
  return (
    <div className={styles.main}>
      <div className={styles.follow}>
        FOLLOW US
        <div>
          <img
            src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/images.png"
            alt="logo"
          />
          <img
            src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/twitter%20logo.png"
            alt="logo"
          />
          <img
            src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/main/insta%20logo.jpg"
            alt="logo"
          />
          <img
            src="https://raw.githubusercontent.com/shubhamkr2/UploadImages/e74d0d9799d9a0d9ae0e4e1ff986ef27ffe0882c/pinterest%20logo.jpg"
            alt="logo"
          />
        </div>
      </div>
      <div className={styles.discover}>
        DISCOVER WHAT'S COOKIN'
        <div>
          <input type="text" placeholder="Email Address" />
          <button>Go</button>
        </div>
        <span>Sign up for offers, recipes, news & more</span>
      </div>
      <div className={styles.blog}>
        FROM THE BLOG
        <div>
          <img
            src="https://i0.wp.com/blog.blueapron.com/wp-content/uploads/2023/01/image-7.jpg?resize=100%2C100&ssl=1"
            alt="img"
          />
          <p>
            3 Biscotti Recipes You’ll<br></br> Love
          </p>
        </div>
      </div>
    </div>
  );
}

export { SocialFooter };
