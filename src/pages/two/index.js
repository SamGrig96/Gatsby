import React from 'react';
import { Link } from 'gatsby';
import LayoutOne from '../../components/layout-1';
import LayoutTwo from '../../components/layout-2';

const Depth2Page = () => (
  <LayoutOne>
    <LayoutTwo>
      <Link to="two/three">Go to depth 3</Link>
    </LayoutTwo>
  </LayoutOne>
);

export default Depth2Page;
