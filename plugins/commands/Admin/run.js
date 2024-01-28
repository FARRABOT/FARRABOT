const config = {
    name: "run",
    aliases: ["eval", "execute", "exec"],
    permissions: [2],
    description: "Run bot scripts",
    usage: "<script>",
    credits: "Xuân Duy Farra",
    isAbsolute: true
}

function onCall({ message, args }) {
    eval(args.join(" "));
    message.send("Done!");
}

export default {
    config,
    onCall
}
