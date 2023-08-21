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
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem;
    place-items: center;
    text-decoration: none;
    ${props => {
      if (props.$variantType === 'secondary')
        return css`
          background: ${colors.gradienteAzul};
        `;
      return css`
        background-color: ${colors.mostarda};
      `;
    }}
  }
`;

type TagListProps = { tags: Tag[] | null | undefined; $variantType?: 'primary' | 'secondary' };
