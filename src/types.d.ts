export type Conversation = {
  zid: number
  topic: string
  description: string
  isAnon: boolean
  isActive: boolean
  isDraft: boolean
  isPublic: boolean
  emailDomain: string
  owner: number
  participantCount: number
  strictModeration: boolean
  profanityFilter: boolean
  spamFilter: boolean
  context: string
  ownerSeesParticipationStats: boolean
  courseId: number
  ltiUsersOnly: boolean
  linkUrl: string
  upvotes: number
  parentUrl: string
  visType: number
  writeType: number
  bgcolor: string
  helpType: number
  socialbtnType: number
  styleBtn: string
  authNeededToVote: boolean
  authNeededToWrite: boolean
  authOptFb: boolean
  authOptTw: boolean
  authOptAllow3rdparty: boolean
  helpBgcolor: string
  helpColor: string
  isDataOpen: boolean
  isSlack: boolean
  isCurated: boolean
  databaseExplanation: string
  writeHintType: number
  subscribeType: number
  orgId: number
  needSuzinvite: boolean
  useXidWhitelist: boolean
  prioritizeSeed: boolean
  created: string
  modified: string
}

export type Participant = {
  pid: number
  uid: number
  zid: number
  voteCount: number
  lastInteraction: string
  subscribed: number
  lastNotified: string
  mod: number
  nsli: number
  created: string
}

export type User = {
  uid: number
  hname: string
  username: string
  email: string
  isOwner: boolean
  zinvite: string
  oinvite: string
  plan: number
  tut: number
  siteId: string
  siteOwner: boolean
  test: boolean
  created: string
}
