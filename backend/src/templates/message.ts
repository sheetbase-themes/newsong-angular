import { Message } from '@sheetbase/models';

export function MessageTemplating(message: Message) {
  const { name, email, message: msg } = message;
  return (`
    <p>Hello${ !!name ? (' ' + name) : '' },</p>
    <p>We recieved your contact message, will reply soon!</p>
    <p><strong>Contact info:</strong></p>
    <ul>
      <li>Name: <strong>${ name || 'n/a' }</strong></li>
      <li>Email: <strong>${ email }</strong></li>
    </ul>
    <p><strong>Detail:</strong></p>
    <p>${ msg.replace(/(?:\r\n|\r|\n)/g, '<br />') }</p>
  `);
}