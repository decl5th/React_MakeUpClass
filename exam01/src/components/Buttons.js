import React from 'react';

const Buttons = ({ color, children }) => {
    // 매개변수로 props 변수명 사용 => 속성값
  //const { color, children} = props;

  const styles = {
    background: color,
  };

  return <button style={styles}>{children}</button>;
}

export default Buttons;
