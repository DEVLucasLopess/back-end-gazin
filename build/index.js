"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.app.listen(process.env.PORT || 3001, () => {
    console.log(`Projeto está rodando na porta: ${process.env.PORT}`);
});
