import styled from 'styled-components';
import ApplicationForm from './ApplicationForm';

export default function HomePage() {
  return (
    <>
      <CoverImage>
        <img
          src='https://67dc2d.p3cdn1.secureserver.net/wp-content/themes/twentytwenty/assets/images/bg-header.jpg'
          alt='Home Page'
        />
      </CoverImage>
      <ApplicationForm />
    </>
  );
}

const CoverImage = styled.div`
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
