import { app } from "./server/Server";

app.listen(process.env.PORT || 3001, () => {
  console.log(`Projeto está rodando na porta: ${process.env.PORT}`);
});
