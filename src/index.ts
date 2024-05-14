import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to RnVideo.web.ts
// and on native platforms to RnVideo.ts
import RnVideoModule from './RnVideoModule';
import RnVideoView from './RnVideoView';
import { ChangeEventPayload, RnVideoViewProps } from './RnVideo.types';

// Get the native constant value.
export const PI = RnVideoModule.PI;

export function hello(): string {
  return RnVideoModule.hello();
}

export async function setValueAsync(value: string) {
  return await RnVideoModule.setValueAsync(value);
}

const emitter = new EventEmitter(RnVideoModule ?? NativeModulesProxy.RnVideo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { RnVideoView, RnVideoViewProps, ChangeEventPayload };
