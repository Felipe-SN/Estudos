import { colors } from 'components/UI/variables';
import styled from 'styled-components';

export default function Card({ className, children }: CardProps) {
  return <StyledCard className={className}>{children}</StyledCard>;
}

const StyledCard = styled.div`
  background-color: ${colors.branca};
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 0.25rem ${colors.sombra};
  display: grid;
  padding: 1rem;
  place-items: center;
`;

type CardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
