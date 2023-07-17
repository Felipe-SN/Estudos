import { colors } from 'components/UI/variables';
import img from 'data/images.json';
import InputField from 'components/InputField';
import styled, { css } from 'styled-components';

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
  background-image: ${colors.gradienteAzul};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  color: ${colors.branca};
  display: grid;
  max-height: 23.5rem;
  padding: 2rem;
  place-content: center;
  place-items: center;
  width: 100%;

  ${props =>
    props.$variantType === 'img' &&
    css`
      background-image: url(${img.banner});
      grid-template-columns: auto;
      grid-template-rows: repeat(3, max-content);
      height: 100vh;
    `}

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

  .input-banner {
    height: 3.5rem;
    line-height: 1.5rem;
    width: 36.625rem;
  }
`;

type BannerProps = {
  haveSearchField?: boolean;
  subTitle?: string;
  title?: string;
  $variantType?: 'img' | 'gradient';
};
