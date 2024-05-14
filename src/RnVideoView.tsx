import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RnVideoViewProps } from './RnVideo.types';

const NativeView: React.ComponentType<RnVideoViewProps> =
  requireNativeViewManager('RnVideo');

export default function RnVideoView(props: RnVideoViewProps) {
  return <NativeView {...props} />;
}
