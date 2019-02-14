import React from 'react';

import { storiesOf } from '@storybook/react';
import ProfileIntro from './ProfileIntro';

storiesOf('Components/ProfileIntro', module).add('ProfileIntro component', () => {
  return (
    <div style={{ background: '#000', height: '100vh' }}>
      <ProfileIntro > some content</ProfileIntro>
    </div>

  )

});