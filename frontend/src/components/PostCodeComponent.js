import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const PostCodeComponent = ({selectPostCode}) => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 600,
    height: 450,
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
  };

  const onComplete = (data) => { selectPostCode(data) };

  return (
    <div>
      <DaumPostcode style={modalStyle} onComplete={onComplete}/>
    </div>
  );
};

export default PostCodeComponent;