const net = require('net');

const port = process.argv[2];

const server = net.createServer(function (socket) {
    const currentDate = new Date();

    const formattedDate = `${currentDate.getFullYear()}-${padZero(currentDate.getMonth() + 1)}-${padZero(currentDate.getDate())} ${padZero(currentDate.getHours())}:${padZero(currentDate.getMinutes())}\n`;

    socket.write(formattedDate);
    socket.end();
});

server.listen(port);

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}
