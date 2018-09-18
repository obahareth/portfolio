import React from 'react';

import Button from 'components/Button';
import { CONTACT_EMAIL } from 'constants';

const ContactButton = props => (
  <Button
    color="primary"
    icon="contact"
    tag="a"
    href={`mailto:${CONTACT_EMAIL}`}
    {...props}
  >
    Get in touch
  </Button>
);

export default ContactButton;
