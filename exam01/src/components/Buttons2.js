import React, { Component } from 'react';
import ProTypes from 'prop-types';

class Buttons2 extends Component {
    static propTypes = {
        color: ProTypes.string.isRequired,
    };
    
  render() {
    const { color, children } = this.props;

    //console.log('props', Object.getOwnPropertyDescriptors(this.props));
   // console.log('props', Object.isExtensible(this.props));
   // console.log('props', Object.isFrozen(this.props));
   
   const styles = {
      background: color ?? 'black',
    };

    return <button style={styles}>{children}</button>;
  }
}

/*
Buttons2.defaultProps = {
    color: 'black',
};

Buttons2.ProTypes = {
    color: ProTypes.string.isRequired, // 문자열, 필수 항목
};
*/

export default Buttons2;