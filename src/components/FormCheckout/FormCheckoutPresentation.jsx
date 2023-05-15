import { Button, Grid, TextField } from "@mui/material";

export const FormCheckoutPresentation = ({
  handleSubmit,
  handleChange,
  errors,
  values,
}) => {
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
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
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
              error={errors.email ? true : false}
              helperText={errors.email}
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
              error={errors.password ? true : false}
              helperText={errors.password}
              type="password"
            />
          </Grid>

          {values.password.length > 0 && (
            <Grid item xs={11} sm={7}>
              <TextField
                id="outlined-basic"
                label="Confirmar"
                variant="outlined"
                name="confirmPassword"
                fullWidth
                onChange={handleChange}
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword}
                type="password"
              />
            </Grid>
          )}

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
