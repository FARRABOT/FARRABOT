const config = {
    name: "uptime",
    aliases: ["upt"],
    credits: "Xuân Duy Farra"
}

function onCall({ message }) {
    let uptime = global.msToHMS(process.uptime() * 1000);
    message.reply(uptime);
}


export default {
    config,
    onCall
}
