import { colors } from 'components/UI/variables';
import IChildren from 'interfaces/IChildren';
import styled from 'styled-components';

interface CardProps extends IChildren {
  className?: string;
}

const StyledCard = styled.div`
  background-color: ${colors.branca};
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 0.25rem ${colors.sombra};
  box-sizing: border-box;
  display: grid;
  max-height: 23.125rem;
  max-width: 34.375rem;
  padding: 1rem;
  place-items: center;
`;

const Card = ({ className, children }: CardProps) => (
  <StyledCard className={className}>{children}</StyledCard>
);

export default Card;
