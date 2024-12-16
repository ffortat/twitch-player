/**
 * Provides a list of subscribable Twitch player events.
 */
export enum TwitchPlayerEvent {
  /**
   * The video player is ready for API commands.
   */
  VIDEO_READY = 'video.ready',
  /**
   * The video started playing. This callback receives an object with a sessionId property.
   */
  VIDEO_PLAY = 'video.play',
  /**
   * Closed captions are found in the video content being played. This event will be emitted once for each new batch of captions, in sync with the corresponding video content. The event payload is a string containing the caption content.
   */
  CAPTIONS = 'captions',
  /**
   * Video or stream ends.
   */
  ENDED = 'ended',
  /**
   * Player is paused. Buffering and seeking is not considered paused.
   */
  PAUSE = 'pause',
  /**
   * Player just unpaused, will either start video playback or start buffering.
   */
  PLAY = 'play',
  /**
   * Player playback was blocked. Usually fired after an unmuted autoplay or unmuted programmatic call on `play()`.
   */
  PLAYBACK_BLOCKED = 'playbackBlocked',
  /**
   * Player started video playback.
   */
  PLAYING = 'playing',
  /**
   * Loaded channel goes offline.
   */
  OFFLINE = 'offline',
  /**
   * Loaded channel goes online.
   */
  ONLINE = 'online',
  /**
   * Player is ready to accept function calls.
   */
  READY = 'ready',
  /**
   * User has used the player controls to seek a VOD, the seek() method has been called, or live playback has seeked to sync up after being paused.
   */
  SEEK = 'seek',
}
