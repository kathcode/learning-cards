import { Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import { cardCategories } from '../../../services/cardCategories'

interface CategoryListPorps {
  updateCard: (categoty: any) => void,
  category: string
}

export const CategoryList = ({ updateCard, category }: CategoryListPorps) => (
  <>
    {
      cardCategories.map(({ id, name }) =>
        <FormControlLabel
          key={id}
          control={<Checkbox
            onChange={() => updateCard({ category: id })}
            checked={id === category}
            value={category} />
          }
          label={name}
        />
      )
    }
  </>
)
