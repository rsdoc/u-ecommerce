import React, { Component } from 'react';

import './directory.styles.scss';
import { sections } from './directory.data';
import { MenuItem } from '../menu-item/menu-item.component';

export class Directory extends Component {
  state = {
    sections: sections,
  };

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map((section) => (
          <MenuItem key={section.id} {...section} />
        ))}
      </div>
    );
  }
}
