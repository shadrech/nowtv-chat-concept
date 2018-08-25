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
