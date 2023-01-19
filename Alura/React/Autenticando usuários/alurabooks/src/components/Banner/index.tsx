import styled from 'styled-components';
import img from 'data/images.json';
import { colors } from 'components/UI/variables';
import InputField from 'components/InputField';

const StyledBanner = styled.section`
  background-image: url(${img.banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, max-content);
  height: 100vh;
  max-height: 23.5rem;
  place-content: center;
  place-items: center;
  width: 100vw;
  color: ${colors.branca};

  > h2 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 3.375rem;
  }

  > p {
    font-weight: 500;
    line-height: 1.5rem;
    margin-bottom: 1.75rem;
  }
`;

const CustomInput = styled(InputField)`
  height: 3.5rem;
  line-height: 1.5rem;
  width: 36.625rem;
`;

type BannerProps = {
  title?: string;
  subTitle?: string;
  haveSearchField: boolean;
};

const Banner = ({ title, subTitle, haveSearchField }: BannerProps) => {
  return (
    <StyledBanner>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      {haveSearchField && (
        <CustomInput
          inputVariable="secondary"
          placeholder="Qual será sua próxima leitura?"
          type="search"
        />
      )}
    </StyledBanner>
  );
};

export default Banner;
