import { Sheetbase, ApiKeyMiddleware, Gmail } from '../index';

export default () => {

    const router = Sheetbase.Router;

    // add contact message
    router.put('/app/message', ApiKeyMiddleware,
    (req, res) => {
        // input message
        const { message } = req.body;
        const { name, email, message: msg } = message;

        if (!email || !msg) {
            return res.error('app/no-data');
        }

        // send email
        try {
            Gmail.send({
                recipient: email,
                subject: 'Contact message' + (!!name ? (' from ' + name) : ''),
            }, 'message', { message });
            return res.success({ acknowledge: true });
        } catch (error) {
            return res.error('app/email-not-sent');
        }
    });

};
