import React from 'react';
import styled from 'styled-components';
import FileUpload from '../../commons/components/FileUpload';
import NoProfile from '../../images/profile.webp';

const Wrapper = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 70%;

`;

const ProfileImage = ({ gid, profileImage, fileUploadCallback, className }) => {
  return (
    <Wrapper className={className}>
      <FileUpload
        width={180}
        imageUrl={profileImage ?? NoProfile}
        gid={gid}
        imageOnly={true}
        single={true}
        done={true}
        callback={fileUploadCallback}
      />
    </Wrapper>
  );
};

export default React.memo(ProfileImage);