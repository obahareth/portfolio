import React from 'react';

import Button from 'components/Button';

const ContactButton = props => (
  <Button color="primary" icon="contact" tag="a" href="mailto:daniel@danieljs.tech" {...props}>
    Get in touch
  </Button>
);

export default ContactButton;
