import React from 'react';

import IntermediateChild1 from './IntermediateChild1';
import IntermediateChild2 from './IntermediateChild2';

export default function IntermediateParent() {
  return (
    <>
      <IntermediateChild1>
        <IntermediateChild1>
          <IntermediateChild1>
            <IntermediateChild1>
              <IntermediateChild2 />
            </IntermediateChild1>
          </IntermediateChild1>
        </IntermediateChild1>
      </IntermediateChild1>
    </>
  );
}
