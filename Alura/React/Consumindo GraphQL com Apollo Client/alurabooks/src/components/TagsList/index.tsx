import { colors } from 'components/UI/variables';
import { css, styled } from 'styled-components';
import Tag from 'types/Tag';

export default function TagList(props: TagListProps) {
  const { tags, $variantType = 'primary' } = props;
  return (
    <TagsList $variantType={$variantType}>
      {tags?.map(tag => (
        <li key={tag?.nome}>
          <a>{tag?.nome}</a>
        </li>
      ))}
    </TagsList>
  );
}

const TagsList = styled.ul<{ $variantType: 'primary' | 'secondary' }>`
  display: flex;
  gap: 1rem;
  & > li > a {
    color: ${colors.branca};
    display: flex;
    font-weight: 700;
    place-items: center;
    text-decoration: none;
    ${props => {
      if (props.$variantType === 'secondary')
        return css`
          background: ${colors.gradienteAzul};
          font-size: 1rem;
          padding-bottom: 1rem;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 1rem;
        `;
      return css`
        background-color: ${colors.mostarda};
        font-size: 1.5rem;
        padding-bottom: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 1.5rem;
      `;
    }}
  }
`;

type TagListProps = { tags: Tag[] | null | undefined; $variantType?: 'primary' | 'secondary' };
