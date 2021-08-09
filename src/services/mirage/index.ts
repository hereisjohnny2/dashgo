import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}) 
    },
    
    routes() {
      this.namespace = "api";
      this.timing = 750; // 750 ms para cada requisição 
      this.get("/users");
      this.post("/users");

      // Voltando o namespace para nulo para não prejudicar a rota api do next 
      this.namespace = ""; 

      // Permite que se uma rota não foi definida pelo mirage ela seja renderizada direto sem erros
      this.passthrough();
    }
  });

  return server;
}