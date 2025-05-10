import React from 'react';
import { Link } from 'react-router-dom'; // 假设你使用了 React Router
import '../assets/style/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code-container">
          <span className="digit first-digit">4</span>
          <span className="digit zero-digit">0</span>
          <span className="digit last-digit">4</span>
          <div className="ghost">
            <div className="ghost-eyes"></div>
            <div className="ghost-mouth"></div>
          </div>
        </div>
        <h2 className="error-message">哎呀！页面迷路了...</h2>
        <p className="error-description">
          您要查找的页面似乎不存在。
          也许它被移动了，或者您输入的网址有些小错误。
        </p>
        {/* <Link to="/" className="home-button">
          返回首页
        </Link> */}
      </div>
    </div>
  );
};

export default NotFound;