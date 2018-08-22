import { getMessages, getMembers } from "./data";

export default async function getChatLog() {
  const promises = [getMessages(), getMembers()];
  const [messages, members] = await Promise.all(promises);

  const chatData = members.reduce((acc, {id, email, avatar, lastName, firstName}) => {
    const memberMessages = messages.filter(({userId}) => userId === id);
    return acc.concat(memberMessages.map(message => ({
      messageId: message.id,
      userId: id,
      fullName: `${firstName} ${lastName}`,
      timestamp: message.timestamp,
      email,
      message: message.message,
      avatar
    })));
  }, []);

  return chatData.sort((c1, c2) => {
    const d1 = new Date(c1.timestamp);
    const d2 = new Date(c2.timestamp);
    return d2 - d1;
  });
};