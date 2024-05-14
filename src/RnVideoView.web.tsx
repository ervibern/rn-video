import * as React from 'react';

import { RnVideoViewProps } from './RnVideo.types';

export default function RnVideoView(props: RnVideoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
