import { colors } from 'components/UI/variables';
import img from 'data/images.json';
import InputField from 'components/InputField';
import styled from 'styled-components';

export default function Banner({ ...props }: BannerProps) {
  const { title, subTitle, haveSearchField = false, $variantType = 'img' } = props;
  return (
    <StyledBanner $variantType={$variantType}>
      {title && <h2>{title}</h2>}
      {subTitle && <p>{subTitle}</p>}
      {haveSearchField && (
        <InputField
          className="input-banner"
          $inputVariable="secondary"
          placeholder="Qual será sua próxima leitura?"
          type="search"
        />
      )}
    </StyledBanner>
  );
}

const StyledBanner = styled.section<{ $variantType?: 'img' | 'gradient' }>`
  background-image: ${props => (props.$variantType === 'img' ? `url(${img.banner})` : `${colors.gradienteAzul}`)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.branca};
  display: grid;
  justify-items: center;
  padding-bottom: ${props => (props.$variantType === 'img' ? `2rem` : `1rem`)};
  padding-top: ${props => (props.$variantType === 'img' ? `2rem` : `1rem`)};
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  & > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: ${props => (props.$variantType === 'img' ? `0.5rem` : ``)};

    @media screen and (min-width: 1024px) {
      font-size: 2.25rem;
    }
  }

  & > p {
    font-weight: 500;
    width: 19.75rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;

    @media screen and (min-width: 1024px) {
      margin-bottom: 1.75rem;
      width: auto;
    }
  }

  & input {
    height: 2.75rem;
    width: 23.75rem;

    @media screen and (min-width: 1024px) {
      height: 3.5rem;
      width: 36.625rem;
    }
  }
`;

type BannerProps = {
  haveSearchField?: boolean;
  subTitle?: string;
  title?: string;
  $variantType?: 'img' | 'gradient';
};
