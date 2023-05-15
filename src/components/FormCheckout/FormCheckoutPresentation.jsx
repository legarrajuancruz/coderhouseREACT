import { Button, Grid, TextField } from "@mui/material";

export const FormCheckoutPresentation = ({ handleSubmit, handleChange }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent="center">
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="nombre"
              variant="outlined"
              name="nombre"
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              name="email"
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              name="password"
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
