import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import Box from "@mui/material/Box"

export const CreateCard = () => {
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
            value={'as'}
            onChange={() => { }}
          />
          <TextField
            id="description"
            label="Description"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={'as'}
            onChange={() => { }}
          />

          <FormControlLabel control={<Checkbox />} label="Know" />
          <FormControlLabel control={<Checkbox />} label="Almost know" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Don't know" />

          <section>

            <Button variant="contained">Create</Button>
          </section>
        </>
      </Box>
    </section>
  )
}