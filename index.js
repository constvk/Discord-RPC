const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "teste",
        states: "teste",
        largeImageKey: "teste",
        largeImageText: "teste",
    })

    console.log("[ ! ] Online!")
})

rpc.login({
    clientId: "CLIENT_ID"
})
