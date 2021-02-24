import React from 'react';
import LayoutOne from '../../../components/layout-1';
import LayoutTwo from '../../../components/layout-2';
import LayoutThree from '../../../components/layout-3';

const Depth3Page = () => (
  <LayoutOne>
    <LayoutTwo>
      {/* <LayoutThree>
        <p>Content</p>
      </LayoutThree> */}
    </LayoutTwo>
  </LayoutOne>
);

export default Depth3Page;
