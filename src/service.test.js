import getChatLog from './service';

describe("getChatLog function", () => {
  test('should return correct format', () => {
    return getChatLog().then(([firstMessage]) => {
      expect(typeof firstMessage.messageId).toBe('string');
      expect(typeof firstMessage.userId).toBe('string');
      expect(typeof firstMessage.fullName).toBe('string');
      expect(typeof firstMessage.timestamp).toBe('string');
      expect(typeof firstMessage.email).toBe('string');
      expect(typeof firstMessage.message).toBe('string');
      expect(firstMessage.avatar === null || typeof firstMessage === 'string').toBeTruthy();
    });
  });

  test('should return member data if requested', () => {
    return getChatLog(true).then(({chatLog, members}) => {
      const message = chatLog[0];
      expect(typeof message.messageId).toBe('string');
      expect(typeof message.userId).toBe('string');

      const member = members[0];
      expect(typeof member.id).toBe('string');
      expect(typeof member.messageCount).toBe('number');
      expect(typeof member.email).toBe('string');
      expect(typeof member.firstName).toBe('string');
      expect(typeof member.lastName).toBe('string');
      expect(typeof member.ip).toBe('string');
    });
  });
});

export const dummyData = {
  members: [{
    avatar:null,
    email:"abakera@craigslist.org",
    firstName:"Amanda",
    id:"73f30d93-f87b-45ea-bda5-60fa4b3716b5",
    ip:"82.87.241.19",
    lastName:"Baker",
    messageCount:3
  }],
  messages: [{
    avatar:"http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
    email:"lowensm@earthlink.net",
    fullName:"Larry Owens",
    message:"Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    messageId:"b03569ae-ccbf-4975-8040-4daba638b407",
    timestamp:"2016-11-09T05:04:58Z",
    userId:"16373df5-da0a-4074-8295-f916b94269f4"
  }]
};
