var socket = WebSocket("ws://localhost:9000/ws")

let connect = (cb) => {
    console.log("connecting...")

    socket.onopen = () => {
        console.log("Connected Success!")
    }

    socket.onmessage = (msg) => {
        console.log("Message from web socket:", msg)
    }

    socket.onclose = (event) => {
        console.log("Socket connection closed:", event)
    }

    socket.onerror = (err) => {
        console.log("Socket Error:", err)
    }
}

let sendMessage = (msg) => {
    console.log("Sending Message:", msg)
    socket.send(msg)
}

export { connect, sendMessage };