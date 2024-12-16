export interface PlaybackStatistics {
  backendVersion: string;

  bufferSize: number;

  codecs: string;

  displayResolution: string;

  fps: number;

  hlsLatencyBroadcaster: number;

  latencyMode: string;

  playbackRate: number;

  skippedFrames: number;

  videoResolution: string;
}
