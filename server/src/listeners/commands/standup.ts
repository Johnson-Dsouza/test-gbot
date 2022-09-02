const standupCommandCalled = async({}) => {
//    await ack();

//     try {
//       await client.chat.postMessage({
//         token: context.botToken,
//         // Channel to send message to
//         channel: payload.channel_id,
//         // Include a button in the message (or whatever blocks you want!)
  
//         blocks: [
//           {
//             type: "actions",
//             elements: [
//               {
//                 type: "button",
//                 text: {
//                   type: "plain_text",
//                   text: "Approve",
//                   emoji: true,
//                 },
//                 style: "primary",
//                 value: "approve",
//                 action_id: "button_approve",
//               },
//               {
//                 type: "button",
//                 text: {
//                   type: "plain_text",
//                   text: "Last Response",
//                   emoji: true,
//                 },
//                 value: "last_response",
//                 action_id: "button_last_response",
//               },
//               {
//                 type: "button",
//                 text: {
//                   type: "plain_text",
//                   text: "Not Working Today",
//                   emoji: true,
//                 },
//                 style: "danger",
//                 value: "not_working_today",
//                 action_id: "button_not_working_today",
//               },
//             ],
//           },
//         ],
  
//         // Text in the notification
//         text: "Message from Whatsup App",
//       });
//     } catch (error) {
//       await app.client.chat.postMessage({
//         token: context.botToken,
  
//         channel: payload.channel_id,
  
//         text: `${error}`,
//       });
//       console.error(error);
//     }
};

module.exports = {standupCommandCalled};