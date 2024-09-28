import React from 'react';
import Lottie from 'react-lottie';
import animationData from "./loader.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={styles.loaderContainer}>
      <Lottie options={defaultOptions} height={200} width={200} />
      <p>Portfolio is opening ...</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
};


export default Loading;
