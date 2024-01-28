const config = {
    credits: "Xuân Duy Farra"
}

function onCall({ message }) {
    const { senderID, mentions, reply, type } = message;
    const msg = Object.keys(mentions).length == 0 ? type == "message_reply" ? message.messageReply.senderID : senderID : Object.entries(mentions).map(e => `${e[1].replace(/@/g, '')} - ${e[0]}`).join("\n");

    reply(msg);
}

export default {
    config,
    onCall
}
