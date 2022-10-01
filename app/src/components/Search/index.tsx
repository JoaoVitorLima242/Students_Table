import { FaSearch } from 'react-icons/fa'

// Styles
import * as S from './styles'
// Types
import { SearchProps } from './types'


const Search = ({ placeholder }: SearchProps) => {
  return (
    <S.Wrapper>
      <S.Input placeholder={placeholder} />
      <S.InputIcon>
        <FaSearch />
      </S.InputIcon>
    </S.Wrapper>
  )
}

export default Search
