"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const standupCommandCalled = ({ client, context, ack, payload, }) => __awaiter(void 0, void 0, void 0, function* () {
    // await ack();
    // try {
    //   await client.chat.postMessage({
    //     token: context.botToken,
    //     // Channel to send message to
    //     channel: payload.channel_id,
    //     // Include a button in the message
    //     blocks: [
    //       {
    //         type: "actions",
    //         elements: [
    //           {
    //             type: "button",
    //             text: {
    //               type: "plain_text",
    //               text: "Approve",
    //               emoji: true,
    //             },
    //             style: "primary",
    //             value: "approve",
    //             action_id: "button_approve",
    //           },
    //           {
    //             type: "button",
    //             text: {
    //               type: "plain_text",
    //               text: "Not Working Today",
    //               emoji: true,
    //             },
    //             style: "danger",
    //             value: "not_working_today",
    //             action_id: "button_not_working_today",
    //           },
    //         ],
    //       },
    //     ],
    //     // Text in the notification
    //     text: "Message from Whatsup App",
    //   });
    // } catch (error) {
    //   await client.chat.postMessage({
    //     token: context.botToken,
    //     channel: payload.channel_id,
    //     text: `${error}`,
    //   });
    //   console.error(error);
    // }
    console.log("run /standup command");
});
module.exports = { standupCommandCalled };
//# sourceMappingURL=standup_command_called.js.map