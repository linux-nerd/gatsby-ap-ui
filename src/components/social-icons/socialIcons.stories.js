import React from 'react';

import { storiesOf } from '@storybook/react';
import SocialIcons from './SocialIcons';

const social = [{ url: '#', icon: 'linkedin' }, { url: '#', icon: 'github' }, { url: '#', icon: 'twitter' }, { url: '#', icon: 'fb' }];
storiesOf('Components/SocialIcons', module).add('SocialIcons component', () => (<section style={{ background: 'red' }}><SocialIcons social={social} color='white' /></section>));