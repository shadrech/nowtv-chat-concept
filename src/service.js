import { getMessages, getMembers } from "./data";

export default async function getChatLog(withMembers = false) {
  const promises = [getMessages(), getMembers()];
  const [messages, members] = await Promise.all(promises);

  const chatData = members.reduce((acc, member) => {
    const {id, email, avatar, lastName, firstName} = member;
    const memberMessages = messages.filter(({userId}) => userId === id);
    acc.chatLog = acc.chatLog.concat(memberMessages.map(message => ({
      messageId: message.id,
      userId: id,
      fullName: `${firstName} ${lastName}`,
      timestamp: message.timestamp,
      email,
      message: message.message,
      avatar
    })));
    acc.members.push({
      ...member,
      messageCount: memberMessages.length
    });
    
    return acc;
  }, {chatLog: [], members: []});

  const chatLog = chatData.chatLog.sort((c1, c2) => {
    const d1 = new Date(c1.timestamp);
    const d2 = new Date(c2.timestamp);
    return d2 - d1;
  });

  return withMembers ? {chatLog, members: chatData.members} : chatLog;
};