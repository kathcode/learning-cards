import Box from "@mui/material/Box"
import { Button, TextField } from "@mui/material"

import { useCard } from '../../hooks/useCard';
import { CategoryList } from './CategoryList';


export const CreateCard = () => {
  const { cardInfo, createCard, updateCard } = useCard();
  const { title, description, category } = cardInfo;

  return (
    <section>
      <h1>Create card</h1>
      <Box
        component="form"
      >
        <>
          <TextField
            id="title"
            label="Title"
            fullWidth
            margin="normal"
            maxRows={4}
            multiline
            value={title}
            onChange={(e) => updateCard({ title: e.target.value })}
          />
          <TextField
            id="description"
            label="Description"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => updateCard({ description: e.target.value })}
          />

          <CategoryList updateCard={updateCard} category={category} />

          <section>
            {cardInfo.id ?
              <Button onClick={updateCard} variant="contained">Edit</Button> :
              <Button onClick={createCard} variant="contained">Create</Button>
            }
          </section>
        </>
      </Box>
      {JSON.stringify(cardInfo)}
    </section>
  )
}