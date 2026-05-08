export const RunEvent = {
  Start: 'run:start',
  Tick: 'run:tick',
  Pause: 'run:pause',
  Resume: 'run:resume',
  Finish: 'run:finish',
} as const;

export const TerritoryEvent = {
  Claimed: 'territory:claimed',
  Contested: 'territory:contested',
  Expired: 'territory:expired',
} as const;

export const PresenceEvent = {
  Join: 'presence:join',
  Leave: 'presence:leave',
  Move: 'presence:move',
} as const;
