var svnRevision = 2201;
var ToastType = {
  Success: 1,
  Info: 2,
  Warning: 3,
  Error: 4
};
var ToastCode = {
  None: 1,
  BindingNotFound: 2,
  AuthenticationError: 3,
  InternalError: 4,
  LinkRemoved: 5,
  LinkSaved: 6,
  VerificationMailSent: 7,
  SummonerAlreadyUpdating: 8,
  RiotApi: 9,
  MalformedTwitchLink: 10,
  SignInSummonerNotFound: 11,
  SummonerNotRegistered: 12,
  SignInWrongPassword: 13,
  AlreadyFollowingSummoner: 14,
  NotFollowingSummoner: 15,
  SummonerRecentlyUpdated: 16,
  AlreadyFollowingTeam: 17,
  NotFollowingTeam: 18,
  ReportNotFound: 19,
  SummonerNotFound: 20,
  SummonerAlreadyBound: 21,
  VerificationCodeEmpty: 22,
  VerificationCodeMismatch: 23,
  BindingNotVerified: 24,
  TeamAlreadyOwner: 25,
  TeamMaxMember: 26,
  SummonerIsAlreadyMember: 27,
  YouHaveAlreadyAppliedToTeam: 28,
  YouHavePendingInviteForTeam: 29,
  YouAreAlreadyMemberOfTeam: 30,
  JoinRequestNotFound: 31,
  TeamMaxTrials: 32,
  InviteNotFound: 33,
  InsufficentPermissions: 34,
  MaxTeams: 35,
  TeamNotFound: 36,
  TeamNameLenghtValidation: 37,
  TeamNameInvalidCharValidation: 38,
  TeamNameAlreadyTaken: 39,
  TeamTagLenghtValidation: 40,
  TeamTagInvalidCharValidation: 41,
  TeamColorValidation: 42,
  SummonerIsNotPartOfTeam: 43,
  DuplicatedTeamMembers: 44,
  InvalidAction: 45,
  TournamentAlreadyStarted: 46,
  WinnerMustBeOneOfTheBracketOpponents: 47,
  TournamentValidationWinnersIncoherence: 48,
  YouHaveAlreadyJoinedTheTournament: 49,
  YouAreNotListedForTheTournament: 50,
  YouAreAlreadyScheduledForAMatch: 51,
  SummonerIsAlreadyScheduledForAMatch: 52,
  TheSummonerIsNotListedForTheTournament: 53,
  NotEnoughParticipantsToStartTournament: 54,
  CurrentRoundInProgress: 55,
  AllRoundsAlreadyStarted: 56,
  DuplicatedParticipantInTournament: 57,
  MalformedYouTubeLink: 58
};
var Configuration = {
  TeamLeaderboardPagination: 5,
  FeedRetentionDays: 7,
  TeamLeaderboardShownTeams: 10,
  TeamLeaderboardShownTeams: 10,
  IngameFeedRetentionMinutes: 20,
  FollowListPageSize: 25,
  GetNewNotificationDelaySeconds: 120,
  CheckForUserLiveGameIntervalSeconds: 300,
  SummonerUpdateCooldownSeconds: 600
};
var QueueType = {
  CUSTOM: 0,
  SR_OLDBP: 2,
  SR_OLDRS: 4,
  SR_OLDRP: 6,
  SR_OLDCOVSAI: 7,
  TT_OLD3V3N: 8,
  TT_OLD3V3RF: 9,
  SR_OLDDP: 14,
  CS_OLDDBP: 16,
  CS_OLDDDP: 17,
  CS_OLDDCOVSAI: 25,
  SR_OLDCOVSAIINTRO: 31,
  SR_OLDCOVSAIB: 32,
  SR_OLDCOVSAIINTE: 33,
  TT_OLD3V3RT: 41,
  SR_OLDRT: 42,
  TT_OLDCOVSAI: 52,
  SR_OLDTB: 61,
  HA_OLDARAM: 65,
  HA_OLDCOVSAIARAM: 67,
  SR_OLDOFA: 70,
  HA_1V1SS: 72,
  HA_2V2SS: 73,
  SR_6V6H: 75,
  SR_URF: 76,
  SR_MOFA: 78,
  SR_COVSAIURF: 83,
  SR_DBR1: 91,
  SR_DBR2: 92,
  SR_DBR5: 93,
  CS_A: 96,
  TT_6V6H: 98,
  BB_5V5ARAM: 100,
  HA_KP: 300,
  SR_N: 310,
  SR_BMB: 313,
  SR_OLDNS: 315,
  CS_DND: 317,
  SR_ARURF: 318,
  SR_AR: 325,
  SR_5V5DP: 400,
  SR_RD: 410,
  SR_5V5RS: 420,
  SR_5V5BP: 430,
  SR_5V5RF: 440,
  HA_5V5ARAM: 450,
  TT_3V3BP: 460,
  TT_3V3RF: 470,
  SR_BHA: 600,
  CR_DS: 610,
  SR_CLASH: 700,
  TT_COVSAIIB: 800,
  TT_COVSAIINTROB: 810,
  TT_COVSAIBB: 820,
  SR_COVSAIINTROB: 830,
  SR_COVSAIBB: 840,
  SR_COVSAIIB: 850,
  SR_5V5ARURF: 900,
  CS_AN: 910,
  HA_POROKING: 920,
  SR_NS: 940,
  SR_DBWDV: 950,
  SR_DB: 960,
  VC_SGIN: 980,
  VC_SGIO: 990,
  OC_PH: 1000,
  SR_SARURF: 1010,
  SR_OFA: 1020,
  CS_OE1: 1030,
  CS_OE2: 1040,
  CS_OE3: 1050,
  CS_OE4: 1060,
  CS_OE5: 1070,
  CV_TFTNORMAL: 1090,
  CV_TFTRANKED: 1100,
  NB_NEXUSBLITZ: 1200
};
var TeamRoleType = {
  Trial: 1,
  Member: 2,
  Administrator: 3,
  Owner: 4
};
var FeedType = {
  CurrentlyInGame: 1,
  TeamCreation: 2,
  TeamJoin: 3,
  TeamLeave: 4,
  TeamDisband: 5,
  TeamRename: 6,
  Pentakill: 7,
  SummonerPromoted: 8,
  TeamPromoted: 9,
  SummonerAnniversary: 10,
  TeamAnniversary: 11,
  ChampionAnniversary: 12,
  NewFollowers: 13
};
var FeedParameterType = {
  QueueType: 1,
  ChampionId: 2,
  TeamOldName: 3,
  MainTarget: 4,
  SummonerName: 5,
  TeamName: 6,
  SummonerId: 7,
  TeamId: 8,
  TeamOldTag: 9,
  RankTier: 10,
  MatchId: 11,
  Years: 12,
  SecondaryTarget: 13,
  NewFollowFollower: 14,
  NewFollowFollowed: 15,
  RegionalFeed: 16
};
var ReactionType = {
  Like: 1,
  Heart: 2,
  Angry: 3,
  Sad: 4
};
var TournamentMatchStatus = {
  Pending: 1,
  Played: 2,
  Remake: 3
};
var TournamentTeamSize = {
  One: 1,
  Five: 5
};
var EntityType = {
  ClientError: 2,
  Curriculum: 3,
  Match: 4,
  MatchData: 5,
  MatchDataTeam: 6,
  Notification: 7,
  PlayerMatchData: 8,
  Summoner: 9,
  SummonerBinding: 10,
  Team: 11,
  TeamInvite: 12,
  TeamJoinRequest: 13,
  Contract: 14,
  VersionCode: 15,
  LeaguePosition: 17,
  Feedback: 18,
  SocialLink: 19,
  UserProfile: 21,
  Follow: 22,
  LeaderboardTeamEntry: 23,
  SuggestedTeam: 24,
  Torunament: 26,
  TournamentBracket: 27,
  BracketMembers: 28,
  TournamentGameResult: 29,
  TournamentTeam: 30,
  SentMail: 31,
  Badge: 32,
  TeamStatistics: 33,
  TeamMemberStatistics: 34,
  ScheduleStatus: 35,
  SummonerPlayedWith: 37,
  SummonerSeasonStatistics: 38,
  FeedEntry: 39,
  FeedStringParameter: 40,
  FeedIntParameter: 41,
  FeedHolder: 42,
  FeedReaction: 43,
  GlobalSummonerInfo: 44,
  GlobalTeamInfo: 45,
  Achievement: 46,
  Report: 47,
  WebmethodData: 48,
  SummonerSeasonStatisticsTemporary: 49,
  SummonerSeasonStatisticsBase: 50,
  SummonerSeasonStatisticsExtended: 51,
  Text: 52,
  TeamWeeklyScheduleEntry: 53,
  PerformanceScoreRow: 54,
  TournamentParticipant: 55,
  TournamentProvider: 56,
  TournamentMatch: 57
};
var SearchEntryType = {
  Summoner: 0,
  Team: 1,
  Champion: 2
};
var NotificationType = {
  YouHaveBeenInvitedToJoinATeam: 1,
  ASummonerLeftYourTeam: 3,
  ASummonerDisbandedYourTeam: 7,
  YouHaveBeenKickedFromTheTeam: 8,
  ASummonerRequestedToJoinYourTeam: 9,
  ASummonerHasBeenKickedFromYourTeam: 10,
  AJoinRequestHasBeenAccepted: 11,
  AJoinRequestHasBeenDeclined: 12,
  AJoinRequestHasBeenCanceled: 13,
  AnInviteHasBeenAccepted: 14,
  AnInviteHasBeenDeclined: 15,
  AnInviteHasBeenCanceled: 16,
  AJoinRequestIsAboutToExpire: 17,
  AnInviteIsAboutToExpire: 18,
  YourJoinRequestHasBeenAccepted: 19,
  YourJoinRequestHasBeenDeclined: 20,
  ASummonerHasBeenInvitedToYourTeam: 21,
  YourInviteHasBeenCanceled: 22,
  TextModerationWarning: 23
};
var UnavailabilityReason = {
  NoRights: 1,
  AlreadyInTeam: 2,
  AlreadyInvited: 3,
  HeRequestedToJoin: 4,
  TeamFull: 5
};
var SocialLinkTarget = {
  Team: 1,
  User: 2
};
var SocialLinkType = {
  Twitch: 1,
  YouTube: 2
};
var RoleType = {
  Top: 1,
  Jungle: 2,
  Mid: 3,
  Adc: 4,
  Support: 5,
  Fill: 6
};
var RankTierDivision = {
  Placement: 1,
  IronIV: 2,
  IronIII: 3,
  IronII: 4,
  IronI: 5,
  BronzeIV: 6,
  BronzeIII: 7,
  BronzeII: 8,
  BronzeI: 9,
  SilverIV: 10,
  SilverIII: 11,
  SilverII: 12,
  SilverI: 13,
  GoldIV: 14,
  GoldIII: 15,
  GoldII: 16,
  GoldI: 17,
  PlatinumIV: 18,
  PlatinumIII: 19,
  PlatinumII: 20,
  PlatinumI: 21,
  DiamondIV: 22,
  DiamondIII: 23,
  DiamondII: 24,
  DiamondI: 25,
  Master: 26,
  Grandmaster: 27,
  Challenger: 28
};
var RankTier = {
  Placement: 1,
  Iron: 2,
  Bronze: 3,
  Silver: 4,
  Gold: 5,
  Platinum: 6,
  Diamond: 7,
  Master: 8,
  Grandmaster: 9,
  Challenger: 10
};
var RankDivision = {
  IV: 1,
  III: 2,
  II: 3,
  I: 4
};
var SchedulesRange = {
  Morning_6am_to_12am: 1,
  Afternoon_12am_to_6pm: 2,
  Evening_6pm_to_12pm: 3,
  Late_evening_12pm_to_6am: 4
};
var BadgeType = {
  FirstBlood: 1,
  FirstTower: 2,
  DragonControl: 3,
  HeraldControl: 4,
  BaronControl: 5,
  ScuttleCrabControl: 6,
  Vision: 7,
  Kills: 8,
  Assists: 9,
  Deaths: 10,
  Comeback: 11,
  EnemyJungle: 12,
  Active: 13
};
var Season = {
  Preseason_3: 0,
  Season_3: 1,
  Preseason_4: 2,
  Season_4: 3,
  Preseason_5: 4,
  Season_5: 5,
  Preseason_6: 6,
  Season_6: 7,
  Preseason_7: 8,
  Season_7: 9,
  Preseason_8: 10,
  Season_8: 11,
  Preseason_9: 12,
  Season_9: 13,
  Preseason_10: 14,
  Season_10: 15,
  Preseason_11: 16,
  Season_11: 17,
  Preseason_12: 18,
  Season_12: 19
};
var QueueTypeStatistics = {
  Ranked_Flex_5v5: 1,
  Ranked_Solo: 3,
  Normal: 4,
  Other: 5
};
var RegionId = {
  BR: 1,
  EUNE: 2,
  EUW: 3,
  LAN: 4,
  LAS: 5,
  NA: 6,
  OCE: 7,
  RU: 8,
  TR: 9,
  JP: 10,
  SEA: 11,
  KR: 12
};
var AchievementType = {
  Registration: 1,
  CompileCurriculum: 2,
  GetTeam: 3,
  BetaTester: 4
};
var RankInformation = {
  IsChallenger: 1,
  IsGrandMaster: 2,
  Other: 3
};
var TextValidationStatus = {
  WaitingForValidation: 1,
  AutoValidated: 2,
  ManuallyValidated: 3
};
var WeekDay = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7
};
var TimeSlot = {
  Morning: 1,
  Afternoon: 2,
  Evening: 3,
  LateEvening: 4
};
var ReportStatus = {
  Waiting: 1,
  Ignored: 2,
  Approved: 3
};
var ReportCategory = {
  Other: 1,
  Hate_speech: 2,
  Harassment_or_bullying: 3,
  Pornography_or_sexually_explicit_material: 4,
  Child_abuse: 5
};
var AboutPageTemplate = '<div class="page"><div class="row"><div class="col s12"><div class="logo"><img class="hero" src="{{ cdnLink(\'/images/logo/logo.svg\') }}"></div></div></div><div class="row"><div class="col s12"><h2 class="center"><b class="tracking-in-expand">{{ babel("about.aboutbrand") }}</b></h2></div></div></div><div class="page"><div class="row"><div class="col s12"><h4><b>{{ babel("about.founders") }}</b></h4><div class="col s12 founder"><img src="https://ddragon.leagueoflegends.com/cdn/10.4.1/img/profileicon/4249.png" /><h4 class="blue-text"><b>{{ babel("about.michele") }}</b><label>#EUW</label></h4><h5>{{ babel("about.frontenddeveloper") }}</h5></div><br /><br /><br /><div class="col s12 founder"><img src="https://ddragon.leagueoflegends.com/cdn/10.4.1/img/profileicon/1149.png" /><h4 class="red-text"><b>{{ babel("about.jacopo") }}</b><label>#EUW</label></h4><h5>{{ babel("about.backenddeveloper") }}</h5></div><br /><br /><br /><div class="col s12 founder"><img src="https://ddragon.leagueoflegends.com/cdn/10.4.1/img/profileicon/589.png" /><h4 class="green-text"><b>{{ babel("about.daniele") }}</b><label>#EUW</label></h4><h5>{{ babel("about.spokesman") }}</h5></div></div></div></div><div class="page"><div class="row"><div class="col s12"><h4><b>{{ babel("about.ourstory") }}</b></h4></div><div class="col s12"><div class="card"><div class="card-content"><p>{{ babel("about.ourstory1") }}<br />{{ babel("about.ourstory2") }}<br /><br />{{ babel("about.ourstory3") }}<br />{{ babel("about.ourstory4") }}<br />{{ babel("about.ourstory5") }}<br /><br />{{ babel("about.ourstory6") }}<br />{{ babel("about.ourstory7") }}<br /><br />{{ babel("about.ourstory8") }}<br /><br /><div class="right-align"><i>"{{ babel("about.michele") }}"</i></div></p></div></div></div></div></div><div class="page"><div class="row"><div class="col s12"><h4><b>{{ babel("about.ourgoals") }}</b></h4></div><div class="col s12"><div class="card"><div class="card-content"><p>{{ babel("about.ourgoalsdesc") }}</p></div></div></div></div></div><div class="page"><div class="row"><div class="col s12"><h4><b>{{ babel("about.partners") }}</b></h4></div><div class="col s12"><div class="card"><div class="card-content"><div class="sponsor fb-group"><img src="{{ cdnLink("/images/partners/lol-ita-1.jpg") }}" /><h5>League of Legeds - Italia</h5><span>Gruppo italiano su League of Legends</span><div><a href="https://www.facebook.com/groups/leagueoflegends.lol.ita/" target="_blank" rel="noopener"><i class="fab fa-facebook"></i></a></div></div><div class="sponsor fb-group"><img src="{{ cdnLink("/images/partners/lol-ita-2.jpg") }}" /><h5>League of Legends - Cerco Player/team/coach/amici</h5><span>Gruppo italiano per la ricerca di player di League of Legends</span><div><a href="https://www.facebook.com/groups/lolitalia/" target="_blank" rel="noopener"><i class="fab fa-facebook"></i></a></div></div><div class="sponsor community"><img src="{{ cdnLink("/images/partners/outplayed.jpg") }}" /><h5>Outplayed</h5><span>Gruppo ufficiale della community degli Outplayed su League of Legends</span><div><a href="https://www.facebook.com/groups/lolitaly/" target="_blank" rel="noopener"><i class="fab fa-facebook"></i></a></div></div><div class="sponsor streamer"><img src="{{ cdnLink("/images/partners/wobbletondo.png") }}" /><h5>Wobbletondo</h5><span>Streamer</span><div><a href="https://www.twitch.tv/wobbletondo/" target="_blank" rel="noopener"><i class="fab fa-twitch"></i></a><a href="https://www.instagram.com/wobbletondoita/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/wobbletondo/" target="_blank" rel="noopener"><i class="fab fa-facebook"></i></a></div></div><div class="sponsor streamer"><img src="{{ cdnLink("/images/partners/annyka.jpg") }}" /><h5>Annyka</h5><span>Streamer</span><div><a href="https://www.twitch.tv/Annyka/" target="_blank" rel="noopener"><i class="fab fa-twitch"></i></a><a href="https://www.instagram.com/annykatv/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></div></div><div class="sponsor streamer"><img src="{{ cdnLink("/images/partners/msmicia.jpg") }}" /><h5>MsMicia</h5><span>Streamer</span><div><a href="https://www.twitch.tv/msmicia/" target="_blank" rel="noopener"><i class="fab fa-twitch"></i></a></div></div></div></div></div></div></div><div class="page"><div class="row"><div class="col s12"><h4><b>{{ babel("about.contacts") }}</b></h4></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><span><i class="far fa-envelope" style="text-align:center;width:20px;margin-right:12px"></i>info.lolsquare@gmail.com</span><br /><span><i class="fab fa-twitter" style="text-align:center;width:20px;margin-right:12px"></i>https://twitter.com/SocialLoLSquare</span></div></div></div></div></div></div></div><div class="page"><div class="row"><div class="col s12"><h4><b>Legal Jibber Jabber</b></h4></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><p>LoLSquare.com isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p><br /><p>Twemoji (emoji icons) made by&nbsp;<a href="https://twemoji.twitter.com/" title="Twitter" target="_blank" rel="noopener">Twitter</a>&nbsp;is licensed by&nbsp;<a href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons BY 4.0" target="_blank" rel="noopener">CC BY 4.0</a></p></div></div></div></div></div></div></div>';
var AccountDataPageTemplate = '<div class="row"><div class="col s12"><h5>{{ babel("accountdata.clearcookies") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("accountdata.clearcookiesdesc") }}</p></div></div></div></div></div><div class="col col-buttons s12"><a onclick="AccountDataClearData();" class="btn-large waves-effect red white-text">{{ babel("accountdata.clearcookiesconfirm") }}</a></div></div><div class="row"><div class="col s12"><h5>{{ babel("accountdata.deleteaccount") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("accountdata.deleteaccountdesc") }}</p></div></div></div></div></div><div class="col col-buttons s12"><a onclick="AccountDataShowDeleteAccount();" class="btn-large waves-effect red white-text">{{ babel("accountdata.deleteaccountshowconfirm") }}</a><a id="btnDeleteAccount" onclick="AccountDataDeleteAccount();" class="btn-large waves-effect white red-text left dnone"><i class="far fa-trash left"></i>{{ babel("accountdata.deleteaccountconfirm") }}</a></div></div><div class="row"><div class="col col-buttons s12"><a class="btn-large left white black-text" onclick="navigate(\'User\');"><i class="far fa-arrow-left left"></i>{{ babel("base.usersettings") }}</a></div></div>';
var AchievementsPageTemplate = '<div class="row nmb"><div class="col s12"><h5>Achievements</h5></div></div><div id="row_achievements" class="row wnc"></div><div class="nocontent"><i class="fad fa-award"></i><br /><span>No achievement found</span></div>{{? isUserLogged() }}<div class="row"><div class="col col-buttons s12"><a class="btn-large left white black-text" onclick="navigate(\'User\');"><i class="far fa-arrow-left left"></i>User settings</a></div></div>{{?}}';
var ChampionPageTemplate = '<div class="row dnone"><div class="col s12 card"><ul class="tabs"><li class="tab col s4"><a class="active" href="#Champion">Champion</a></li><li class="tab col s4 disabled"><a href="#Rankings">Rankings</a></li><li class="tab col s4 disabled"><a href="#Stats">Stats</a></li></ul></div></div><div class="row dnone champ-not-found" style="margin: 100px auto;"><div class="col s12 nocontent"><i title="No champion found" class="fad fa-search"></i><br /><span>The champion you are looking for does not exist or an error occured</span><br /><a onclick="navigate(\'Home\')" class="btn-large waves-effect"><i class="far fa-home left"></i>Home</a></div></div><div class="row rowLoadPage"><div class="col s12 center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div><div id="Champion" class="dnone"><div class="row"><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12 m4 center" style="margin-bottom:10px;"><img id="ChampionLoadingArt" style="width: 100%;max-height: 560px;max-width: 308px;" src="" alt="Champion loading art"/><div class="divider"></div><img class="champ-class 1 dnone tooltipped" data-position="top" data-tooltip="" src="" alt="Champion class 1 icon" /><img class="champ-class 2 dnone tooltipped" data-position="top" data-tooltip="" src="" alt="Champion class 2 icon" /><div class="divider"></div><div class="info attack"><span>Attack:</span></div><div class="info defense"><span>Defense:</span></div><div class="info magic"><span>Magic:</span></div><div class="info difficulty"><span>Difficulty:</span></div><div class="divider"></div></div><div class="col s12 m8"><h2 id="ChampionName" style="margin-top: 0;"></h2><h5 id="ChampionTitle"></h5><p id="ChampionLore"></p></div><div class="col s12 m8"><table id="champ-base-stats"><tbody><tr><th><label>Icon</label></th><th><label>Base stat</label></th><th><label>Increase per level</label></th><th><label>Description</label></th></tr></tbody></table></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>Skills</h5></div><div class="col s12"><div class="card"><div class="card-content"><div id="ChampSkills"></div></div></div></div></div><div class="row"><div class="col s12"><h5>Tips</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><i class="far fa-info-square green-text" style="position: absolute;margin-top: -2px;"></i><b style="padding-left: 2.4rem;">Ally tips</b><ul id="allytips" class="browser-default"></ul><i class="far fa-info-square red-text" style="position: absolute;margin-top: -2px;"></i><b style="padding-left: 2.4rem;">Enemy tips</b><ul id="enemytips" class="browser-default"></ul></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>Skins</h5></div><div class="col s12"><div class="card"><div class="card-content"><div id="ChampionSkins" class="row nmb"></div></div></div></div></div></div><div id="Rankings" class="row"><div class="col s12 center"><h2>Coming soon</h2></div></div><div id="Stats" class="row"><div class="col s12 center">Coming soon</div></div>';
var ChangeLogPageTemplate = '<div class="timeline"></div>';
var CheckErrorsPageTemplate = '<div class="row"><div class="col s12"><h5>Client errors</h5></div></div><div id="PageErrorsContainer"></div>';
var CheckFeedbackPageTemplate = '<div class="row nmb"></div>';
var CurriculumPageTemplate = '<div class="row nmb"><div class="col s12"><h5>{{ babel("curriculum.pagetitle") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="input-field col s12 m6"><i class="far fa-user-tag prefix"></i><select id="selectPrimaryRole"><option value="" disabled selected>{{ babel("curriculum.chooseprimaryrole") }}</option></select><label>{{ babel("curriculum.askprimaryrole") }}</label></div><div class="input-field col s12 m6"><i class="far fa-user-tag prefix"></i><select id="selectSecondaryRole"><option value="" disabled selected>{{ babel("curriculum.choosesecondaryrole") }}</option></select><label>{{ babel("curriculum.asksecondaryrole") }}</label></div><div class="input-field col s12 m6 max-5-result"><i class="far fa-globe-europe prefix"></i><input type="text" id="autocompleteNationality" class="autocomplete" autocomplete="off"><label for="autocompleteNationality">{{ babel("curriculum.asknationality") }}</label></div><div class="input-field col s12 m6"><i class="far fa-calendar-alt prefix"></i><select id="selectSchedules" multiple></select><label>{{ babel("curriculum.askschedule") }}</label></div><div class="input-field col s12 m6"><i class="far fa-birthday-cake prefix"></i><input id="age" type="number" min="13" max="99" step="1" /><label for="age">{{ babel("curriculum.askage") }}</label></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("curriculum.otheroptions") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("curriculum.blockinvitationdesc") }}</p></div><div class="input-field col s12"><div class="switch"><label><input id="checkBlockInvitations" type="checkbox" onclick="CurriculumCallBlockInvitations()"><span class="lever"></span>{{ babel("curriculum.blockinvitation") }}</label></div></div></div></div></div></div></div><div class="row"><div class="col col-buttons s12"><a id="cvSave" onclick="CurriculumSaveCurriculum()" class="btn-large waves-effect"><i class="far fa-check left"></i>{{ babel("base.save") }}</a><a class="btn-large left white black-text" onclick="navigate(\'User\');"><i class="far fa-arrow-left left"></i>{{ babel("base.usersettings") }}</a></div></div>';
var DisableAdBlockPageTemplate = '<div class="row" style="max-width: 800px;"><div class="col s12"><i class="far fa-exclamation-triangle left" style="font-size: 160px;"></i><a class="waves-effect btn-large right" style="margin: 52px 0;" onclick="window.location.reload()"><i class="far fa-sync-alt left"></i>refresh</a></div><div class="col s12"><h3 class="header">Disable adblock</h3><h4 class="header">Chrome:</h4><blockquote>Enter<b>chrome://extensions</b>in the address bar.<br />Find AdBlock in the list of extensions.<br />Clear the<b>Enabled</b>check box to disable AdBlock, then click the check box again to re-enable AdBlock.</blockquote><h4 class="header">Safari:</h4><blockquote>Choose<b>Preferences</b>from the Safari menu and select<b>Extensions</b>.<br />Find AdBlock in the list.<br />Clear the<b>Enable</b>check box to disable AdBlock, then click the check box again to re-enable AdBlock.</blockquote><h4 class="header">Edge:</h4><blockquote>Click the<b>More (...)</b>menu and select<b>Extensions</b>.<br />Point to AdBlock in the list and click the cog icon.<br />Click the<b>On</b>button to turn AdBlock off, then click<b>Off</b>to toggle AdBlock on again.</blockquote><h4 class="header">Firefox:</h4><blockquote>Click the menu button and then click<b>Add-ons</b>.<br />In the<b>Add-ons Manager</b>tab, select<b>Extensions</b>.<br />Find AdBlock in the list.<br />Click<b>Disable</b>to turn AdBlock off, then click<b>Enable</b>to turn AdBlock on again.</blockquote></div></div>';
var EditTeamPageTemplate = '<div id="EditTeamVisitorInfo" class="row dnone"><div class="col s12 bindpromo" style="padding:0;"><blockquote class="special" style="margin-top: 0;">{{ babel("editteam.registerpromo") }}<a onclick="{{ getPageOnclick(\'SearchSummoner\', \'Register\') }}" style="margin: 8px 12px" class="btn white black-text waves-effect">{{ babel("base.register") }}</a></blockquote></div></div><div class="row edit-row"><div class="col s12"><h5>{{ babel("editteam.pagetitle") }}<a class="btn-flat waves-effect right tooltipped" onclick="EditTeamRandomizeButton(); false;" style="margin-top: -0.4rem;" data-position="top" data-tooltip="{{ babel("editteam.getrandomteam") }}"><i class="far fa-random"></i></a></h5></div><div class="col s12 l6"><div class="card"><div class="card-content"><div class="row"><div class="input-field col s12 m6 l12"><i class="far fa-tag prefix"></i><input id="team_tag" type="text" maxlength="5" data-length="5"><label for="team_tag">{{ babel("base.tag") }}</label></div><div class="input-field col s12 m6 l12"><i class="far fa-signature prefix"></i><input id="team_name" type="text" maxlength="30" data-length="30"><label for="team_name">{{ babel("base.name") }}</label></div></div></div></div><div class="card"><div class="card-content"><div class="row"><div class="input-field col s12 m6 l12 max-5-result"><i class="far fa-globe-europe prefix"></i><input type="text" id="teamNationality" class="autocomplete" autocomplete="off"><label for="teamNationality">{{ babel("base.nationality") }}</label></div></div></div></div><div class="card"><div class="card-content"><div class="row"><div class="input-field col s12"><i class="far fa-file-alt prefix"></i><textarea id="team_desc" class="materialize-textarea" maxlength="1000" data-length="1000"></textarea><label for="team_desc">{{ babel("base.description") }}</label></div></div></div></div></div><div class="col s12 l6"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><span class="grey-text left">{{ babel("base.logo") }}</span><div class="selected-logo modal-trigger" href="#modalTeamLogos"><img alt="Choosen team icon" src=""></div></div><div class="col s12 color-options-container"></div></div></div></div><div class="card"><div class="card-content"><div class="row"><div class="col s12"><span class="grey-text">{{ babel("base.color") }}</span></div><div class="col s12 team-color-container"></div></div></div></div></div><div class="col col-buttons s12"><a id="btnBack" class="btn-large left white black-text dnone" onclick="EditTeamGoBack();"><i class="far fa-arrow-left left"></i>{{ babel("base.back") }}</a><a id="btnConfirm" class="btn-large waves-effect" onclick="EditTeamCallApplyEditTeam()"><i class="far fa-check left"></i>{{ babel("base.confirm") }}</a></div><div class="col col-buttons s12" style="margin-top:5rem;"><a id="btnShowDelete" class="btn-large waves-effect white red-text" onclick="EditTeamShowDeleteTeam()"><i class="far fa-trash left"></i>{{ babel("editteam.showdeleteteam") }}</a><a id="btnDelete" class="btn-large waves-effect left red white-text hidden" onclick="EditTeamDeleteTeam()"><i class="far fa-trash left"></i>{{ babel("editteam.confirmdeleteteam") }}</a></div></div><div id="modalTeamLogos" class="modal"><div class="modal-content"><div class="icon-grid"></div></div></div>';
var EditTournamentPageTemplate = '<div class="row"><div class="col s12"><h5>Create tournament</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="input-field col s12 m6"><input placeholder="Tournament name" id="tournament_name" type="text"><label class="active" for="tournament_name">Name</label></div><div class="input-field col s12 m6"><input placeholder="Host id" id="tournament_host" type="text"><label class="active" for="tournament_host">Host id</label></div></div><div class="row"><div class="col s12 m4"><label>Icon</label><div id="tournament_icon" class="selected-logo modal-trigger hoverable-mini" href="#modalTournamentIcon"><img class="tournament-icon" alt="Choosen tournament icon" src=""></div></div><div class="tournament-team-size col s12 m8"><label>Mode</label><div id="tts-1v1" onclick="EditTournamentSelectTeamSize({{ TournamentTeamSize.One }})" class="waves-effect hoverable-mini">1V1</div><div id="tts-5v5" onclick="EditTournamentSelectTeamSize({{ TournamentTeamSize.Five }})" class="waves-effect hoverable-mini">5V5</div></div></div><div class="row row-tournament-size" style="display: grid;grid-template-columns: 1fr 1fr 1fr;place-items: center;"><div class="col s12" style="grid-column:span 3"><label>Size</label></div><div id="ts-8" onclick="EditTournamentSelectSize(8)" class="col s12 tournament-container waves-effect hoverable-mini"><span class="truncate">8 PARTICIPANTS</span><div></div></div><div id="ts-16" onclick="EditTournamentSelectSize(16)" class="col s12 tournament-container waves-effect hoverable-mini"><span class="truncate">16 PARTICIPANTS</span><div></div></div><div id="ts-32" onclick="EditTournamentSelectSize(32)" class="col s12 tournament-container waves-effect hoverable-mini"><span class="truncate">32 PARTICIPANTS</span><div></div></div></div></div></div></div></div><div class="row"><div class="col s12 col-buttons"><a class="btn" onclick="EditTournamentCreate()">Create tournament</a></div></div><div id="modalTournamentIcon" class="modal"><div class="modal-content"><div class="icon-grid"></div></div></div>';
var FAQPageTemplate = '<div id="row-faq-list" class="row dnone"><div class="col s12"><h5>{{ babel("faq.pagetitlefaq") }}</h5></div><div class="col s12"><ul id="faq-collection" class="collapsible popout"></ul></div></div><div id="row-faq-card" class="row dnone"><div class="col s12"><h5></h5></div><div class="col s12"><div class="card"><div class="card-content"></div></div></div></div><div id="row-back-btn" class="row dnone"><div class="col s12 col-buttons"><a class="btn-large left white black-text" onclick="navigate(\'FAQ\');"><i class="far fa-arrow-left left"></i>{{ babel("faq.faqlist") }}</a></div></div>';
var HomePageTemplate = '<div class="row"><div class="col s12 center"><img style="height:96px;" src="{{ cdnLink(\'/images/logo/android-chrome-192x192.png\') }}" alt="LoLSqaure logo" /><h2 style="margin-top:1.5rem"><b>{{ babel("base.welcometololsquare") }}</b></h2></div></div><div class="row"><div class="col s12"><div id="search-your-summoner"><i class="far fa-search prefix grey-text"></i><input placeholder="{{ isUserLogged() ? babel("base.searchsummonerorteam") : babel("base.searchyoursummoner") }}" type="text"><a onclick="HomeCallLoadSummBtnClick();" class="btn-flat waves-effect"><i class="far fa-arrow-right grey-text text-darken-1"></i></a></div></div></div><div style="margin: 3rem auto;" class="divider"></div><div id="rowHomeTournament" class="row nmb dnone"><div class="col s12 ttl"><h5>{{ babel("home.featuredtournamentstitle") }}</h5></div></div><div id="rowHomeNoTournament" class="row dnone"><div class="wnc"></div><div class="nocontent small"><i class="fad fa-trophy"></i><br /><span>{{ babel("home.notournaments") }}</span></div><div class="col s12 center" style="padding:0;margin-top:1rem"><a class="chip hoverable-light" style="cursor:pointer;" {{* getPageNavigations("FAQ",4) }}><i class="far fa-question-circle left"></i>{{ babel("tournament.createatorunamentpromo") }}</a></div></div><div id="user-first-steps" class="row dnone"></div>';
var MatchPageTemplate = '<div class="row rowLoadPage"><div class="col s12 center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div><div class="matchdata"></div>';
var MyTeamsPageTemplate = '<div class="row nmb"><div class="col s12"><h5>{{ babel("myteams.pagetitle") }}</h5></div></div><div id="teamscontainer" class="row teamslist"></div><div class="row ad"></div><div class="row"><div class="col s12"><h5>{{ babel("myteams.pendinginvite") }}</h5></div><div id="row_invites" class="col s12 wnc"></div><div class="nocontent small"><i class="fad fa-mailbox"></i><br /><span>{{ babel("myteams.nopendinginvite") }}</span></div></div><div class="row"><div class="col s12"><h5 class="header">{{ babel("myteams.pendingjoin") }}</h5></div><div id="row_requests" class="col s12 wnc"></div><div class="nocontent small"><i class="fad fa-mailbox"></i><br /><span>{{ babel("myteams.nopendingjoin") }}</span></div></div>';
var MyTournamentsPageTemplate = '';
var NoContentPageTemplate = '<div class="row" style="margin: 100px auto;"><div class="wnc"></div><div class="col s12 nocontent"><i class="fad fa-file-search"></i><br /><span>{{ babel("base.404desc") }}</span></div><div style="margin: 2rem;display: inline-block;"></div><div class="col s12 center"><a onclick="navigate(\'Home\')" class="btn-large waves-effect"><i class="far fa-home left"></i>{{ babel("base.home") }}</a></div></div>';
var PageXPageTemplate = '<div class="row"><div class="col s12 m6"><div class="card hoverable-mini waves-effect" onclick="navigate(\'Reports\')"><div class="card-content"><i class="fad fa-flag-alt"></i><span class="truncate">Reports</span></div></div></div><div class="col s12 m6"><div class="card hoverable-mini waves-effect" onclick="navigate(\'CheckFeedback\')"><div class="card-content"><i class="fad fa-comment-exclamation"></i><span class="truncate">Feedbacks</span></div></div></div><div class="col s12 m6"><div class="card hoverable-mini waves-effect" onclick="navigate(\'CheckErrors\')"><div class="card-content"><i class="fad fa-bug"></i><span class="truncate">Client errors</span></div></div></div><div class="col s12 m6"><a class="no-color" href="https://static.lolsquare.com/LandingPage.html" target="_blank"><div class="card hoverable-mini waves-effect"><div class="card-content"><i class="fad fa-ad"></i><span class="truncate">Landing page</span></div></div></a></div><div class="col s12 m6"><div class="card hoverable-mini waves-effect" onclick="navigate(\'EditTournament\')"><div class="card-content"><i class="fad fa-trophy-alt"></i><span class="truncate">Create tournament</span></div></div></div></div><div class="row"><div class="col s12"><h5>Give tournament featured status</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row nmb" style="display: grid;grid-template-columns: 1fr auto;place-items: center;"><div class="input-field col s12"><input id="tournament_id" type="text"><label for="tournament_id">Tournament id</label></div><a id="btnPageXSearchTournament" class="btn" onclick="PageXLoadTournament()">Search</a></div><div class="row featured-info" style="display:none;"><div class="input-field col s12"><div class="switch"><label>Featured off<input id="tournament_featured" type="checkbox"><span class="lever"></span>Featured on</label></div></div><div class="input-field col s12"><textarea id="tournament_desc" class="materialize-textarea"></textarea><label for="tournament_desc">Tournament desc</label></div><div class="input-field col s12 m6"><input id="tournament_url" type="text"><label for="tournament_url">Tournament url</label></div><div class="input-field col s12 m6"><input id="tournament_image" type="text" placeholder="/images/tournament/file.jpg"><label for="tournament_image">Tournament image</label></div><div class="input-field col s12 m6"><input id="tournament_primary_color" type="text" placeholder="pink"><label for="tournament_primary_color">Tournament primary color</label></div><div class="input-field col s12 m6"><input id="tournament_triadic_color" type="text" placeholder="#000000"><label for="tournament_triadic_color">Tournament triadic color</label></div></div></div></div></div><div class="col s12 col-buttons"><a id="btnSetFeatured" class="btn" onclick="PageXSetFeaturedInfo()">Set featured info</a></div></div>';
var ReportsPageTemplate = '<div class="row row-mode"><div class="col s6"><a onclick="ReportsCallGetWaitingValidation()" class="btn-large blue lighten-5 black-text waves-effect"><i class="fad fa-comment-dots blue-text left"></i>Waiting validation</a></div><div class="col s6"><a onclick="ReportsCallGetReport()" class="btn-large red lighten-5 black-text waves-effect"><i class="fad fa-comment-exclamation red-text left"></i><span class="truncate">Reports</span></a></div></div>';
var SearchMemberPageTemplate = '<div class="row"><div class="col s12"><h5>{{ babel("base.filter",\'p\') }}<a class="waves-effect btn-flat right" onclick="$(\'.more-filter\').slideToggle()">{{ babel("base.morefilters") }}</a></h5></div><div class="col s12"><div class="card filters"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("searchmember.promouseheader") }}</p></div></div><div class="row"><div class="input-field col s12 m6"><select id="filterRole"><option value="" selected>{{ babel("base.any") }}</option></select><label>{{ babel("base.role") }}</label></div><div class="input-field col s12 m6 max-5-result"><input type="text" id="filterNationality" class="autocomplete" autocomplete="off"><label for="filterNationality">{{ babel("base.nationality") }}</label></div><div class="input-field col s12 m6 l4 more-filter" style="display: none;"><select multiple id="filterSchedules"><option value="" disabled selected>{{ babel("base.any") }}</option></select><label>{{ babel("searchmember.playtimeschedules") }}</label></div><div class="input-field col s12 m6 l4 more-filter" style="display: none;margin: 1.8rem 0;"><p><label><input id="filterHasNoTeam" type="checkbox"><span>{{ babel("searchmember.hasnoteam") }}</span></label></p></div><div id="filterQueue" class="input-field col s12 l4"><label class="active">{{ babel("searchmember.rankqueue") }}</label><p><label><input name="radioQueue" type="radio" value="{{ QueueType.SR_5V5RF }}" checked /><span>{{ babel("queuetypestatistics.ranked_flex_5v5") }}</span></label></p><p><label><input name="radioQueue" type="radio" value="{{ QueueType.SR_5V5RS }}" /><span>{{ babel("queuetypestatistics.ranked_solo") }}</span></label></p></div><div class="input-field col s12 l8 slider-rank"><label class="active">{{ babel("base.rankrange") }}</label><div class="selected-ranks"><span class="left">{{ babel("base.unranked") }}</span><span class="right">{{ babel("ranktier.challenger") }}</span></div><div id="rankslider"></div></div></div></div></div></div><div class="col col-buttons s12"><a class="btn-large waves-effect" onclick="SearchMemberOnclickSearch()"><i class="far fa-search left"></i>{{ babel("base.search") }}</a><a class="btn-large waves-effect white black-text" onclick="SearchMemberOnclickReset();"><i class="far fa-times left"></i>{{ babel("base.reset") }}</a></div></div><div class="row ad"></div><div class="row"><div class="col s12"><ul id="membersFound" class="members-results collection wnc"></ul><div class="nocontent"><i class="fad fa-search"></i><br /><span>{{ babel("searchmember.pagetitle") }}</span></div></div></div>';
var SearchResultsPageTemplate = '<div class="row"><div class="col s12"><h4 id="SearchResultsTitle">{{ babel("searchresults.pagetitle") }}</h4></div></div><div class="wnc"><div id="waiting_text" class="row dnone"><div class="col s12"><div class="wnc"></div><div class="nocontent small"><i class="fad fa-info"></i><br /><span>{{ babel("searchresults.waitingtext") }}</span></div></div></div><div id="SearchResultsSummoners" class="row dnone"><div class="col s12"><h5>{{ babel("base.summoner",\'p\') }}</h5></div><div class="col s12"><ul class="collection search-results summoners"><li class="collection-item"><label class="center">{{ babel("base.icon") }}</label><label>{{ babel("base.name") }}</label><label class="center">{{ babel("queuetypestatistics.ranked_solo") }}</label><label class="center">{{ babel("queuetypestatistics.ranked_flex_5v5") }}</label></li></ul></div></div><div id="SearchResultsTeams" class="row dnone"><div class="col s12"><h5>{{ babel("base.team",\'p\') }}</h5></div><div class="col s12"><ul class="collection search-results teams"><li class="collection-item"><label class="center">{{ babel("base.icon") }}</label><label>{{ babel("base.name") }}</label><label class="center">{{ babel("base.rank") }}</label></li></ul></div></div></div><div class="nocontent"><i class="fad fa-search"></i><br /><span>{{ babel("base.nothingfound") }}</span></div>';
var SearchSummonerPageTemplate = '<div class="row nmb row-base dnone"><div class="col s12 center"><h4><b>{{ babel("searchsummoner.pagetitle") }}</b></h4></div><div class="col s12 center"><p class="flow-text">{{ babel("searchsummoner.desc1") }}<b style="font-weight:500" class="region-change-text"></b>{{ babel("searchsummoner.desc2") }}<b style="font-weight:500" onclick="pulseChangeRegion()" class="link">{{ babel("searchsummoner.desc3") }}</b>!<br />{{ babel("searchsummoner.desc4") }}</p></div></div><div class="row nmb row-register dnone"><div class="col s12 center"><h4><b>{{ babel("base.register") }}</b></h4></div><div class="col s12 center"><p class="flow-text">{{ babel("searchsummoner.registerdesc1") }}</p></div></div><div class="row nmb row-changepassword dnone"><div class="col s12 center"><h4><b>{{ babel("base.changepassword") }}</b></h4></div><div class="col s12 center"><p class="flow-text">{{ babel("searchsummoner.changepassworddesc1") }}<br />{{ babel("searchsummoner.changepassworddesc2") }}<br /><b style="font-weight:500">{{ babel("searchsummoner.changepassworddesc3") }}</b></p></div></div><div class="row"><div class="col s12"><div id="search-your-summoner"><i class="far fa-search prefix grey-text"></i><input placeholder="{{ babel("searchsummoner.pagetitle") }}" type="text"><a onclick="SearchSummonerCallLoadSummBtnClick();" class="btn-flat waves-effect"><i class="far fa-arrow-right grey-text text-darken-1"></i></a></div></div><div style="margin-top:1rem;" class="col s12 center"><a onclick="SearchSummonerCallLoadSummBtnClick();" class="btn waves-effect white black-text">{{ babel("base.search") }}</a></div></div>';
var SearchTeamPageTemplate = '<div class="row"><div class="col s12"><h5>{{ babel("base.filter",\'p\') }}</h5></div><div class="col s12"><div class="card filters"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("searchteam.promouseheader") }}</p></div></div><div class="row"><div class="input-field col s12 m6 l4"><select multiple id="filterRoles"></select><label>{{ babel("searchteam.teamsopenpositions") }}</label></div><div class="input-field col s12 m6 l4 max-5-result"><input type="text" id="filterNationality" class="autocomplete" autocomplete="off"><label for="filterNationality">{{ babel("base.nationality") }}</label></div><div class="input-field col s6 m6 l2"><input placeholder="{{ babel("base.minimum",\'s\') }}" id="filterMembersMin" class="validate" type="number" min="0" step="1"><label for="filterMembersMin" class="active" style="display: block;white-space: nowrap;text-overflow: ellipsis;">{{ babel("base.member",\'p\') }}</label></div><div class="input-field col s6 m6 l2"><input placeholder="{{ babel("base.maximum",\'s\') }}" id="filterMembersMax" class="validate" type="number" min="0" step="1"></div><div class="input-field col s12 slider-rank"><label class="active">{{ babel("base.rankrange") }}</label><div class="selected-ranks"><span class="left">{{ babel("base.unranked") }}</span><span class="right">{{ babel("ranktier.challenger") }}</span></div><div id="rankslider"></div></div><div class="input-field col s6 m6 l2 dnone"><input placeholder="{{ babel("base.minimum",\'s\') }}" id="filterGamesMin" class="validate" type="number" min="0" step="1"><label for="filterGamesMin" class="active" style="display: block;white-space: nowrap;text-overflow: ellipsis;">{{ babel("base.gameplayed",\'p\') }}</label></div><div class="input-field col s6 m6 l2 dnone"><input placeholder="{{ babel("base.maximum",\'s\') }}" id="filterGamesMax" class="validate" type="number" min="0" step="1"></div></div></div></div></div><div class="col col-buttons s12"><a class="btn-large waves-effect" onclick="SearchTeamOnclickSearch()"><i class="far fa-search left"></i>{{ babel("base.search") }}</a><a class="btn-large waves-effect left" onclick="SearchTeamSuggestedTeams();">{{ babel("searchteam.suggestedteams") }}</a><a class="btn-large waves-effect white black-text" onclick="SearchTeamOnclickReset();"><i class="far fa-times left"></i>{{ babel("base.reset") }}</a></div></div><div class="row ad"></div><div class="row"><div class="col s12"><ul id="teamsFound" class="teams-results collection wnc"></ul><div class="nocontent"><i class="fad fa-search"></i><br /><span>{{ babel("searchteam.pagetitle") }}</span></div></div></div>';
var SearchTournamentPageTemplate = '<div class="row"><div class="col s12 tournament-team-size-selection"><div class="btn-large hoverable-light" id="tts_{{ TournamentTeamSize.One }}" onclick="SearchTournamentSearch(\'{{ TournamentTeamSize.One }}\')"><span>{{ babelEnum("TournamentTeamSize", TournamentTeamSize.One) }}</span></div><div class="btn-large hoverable-light" id="tts_{{ TournamentTeamSize.Five }}" onclick="SearchTournamentSearch(\'{{ TournamentTeamSize.Five }}\')"><span>{{ babelEnum("TournamentTeamSize", TournamentTeamSize.Five) }}</span></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("searchtournament.opentournamentstitle") }}</h5></div><div class="col s12"><div id="open_tournaments_list" class="collection wnc tournaments-list"></div><div class="nocontent small"><i class="fad fa-search"></i><br /><span>{{ babel("searchtournament.opentournamentsnothingfound") }}</span></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("searchtournament.closedtournamentstitle") }}</h5></div><div class="col s12"><div id="closed_tournaments_list" class="collection wnc tournaments-list"></div><div class="nocontent small"><i class="fad fa-search"></i><br /><span>{{ babel("searchtournament.closedtournamentsnothingfound") }}</span></div></div></div><div class="row nmb"><div class="col s12 center" style="padding:0;margin-top:1rem"><a class="chip hoverable-light" style="cursor:pointer;" {{* getPageNavigations("FAQ",4) }}><i class="far fa-question-circle left"></i>{{ babel("tournament.createatorunamentpromo") }}</a></div></div>';
var ServerErrorPageTemplate = '<div class="row" style="margin-bottom: 100px;"><div class="col s12 nocontent"><i title="Server error" class="fad fa-server"></i><h1>500</h1><br /><span>An error occurred and your request couldn\'t be completed, sorry</span><br /><a onclick="navigate(\'Home\')" class="btn-large waves-effect"><i class="far fa-home left"></i>Home</a></div></div>';
var SocialLinksPageTemplate = '<div class="row"><div class="col s12"><h5>{{ babel("sociallinks.managesociallinks") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("sociallinks.summonersocialdesc") }}</p></div></div><div class="row social-links"></div></div></div></div><div class="col col-buttons s12"><a id="btnSocialLinksSave" onclick="UserSaveSocialLinksSettings();" class="btn-large waves-effect"><i class="far fa-check left"></i>{{ babel("base.savelink",\'p\') }}</a><a class="btn-large left white black-text" onclick="navigate(\'User\');"><i class="far fa-arrow-left left"></i>{{ babel("base.usersettings") }}</a></div></div>';
var SummonerPageTemplate = '<div class="row rowLoadPage"><div class="col s12 center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div><div class="row nmb social-links"></div><div id="rowSummInfo"></div><div id="rowUpdateSmall" class="row hide-on-med-and-up dnone"><div class="col s12 center" style="line-height: 14px"><label class="labelUpdate">{{ babel("base.lastupdate") }}: {{ babel("base.never") }}</label></div><div class="col s12" style="padding: 8px 0;display: flex;"><a style="margin:auto" onclick="SummonerUpdate();" class="btnUpdate z-depth-0 waves-effect btn"><i class="far fa-sync left"></i><span>{{ babel("base.update") }}</span><div class="progress dnone"><div class="indeterminate"></div></div></a><a style="margin:auto" onclick="SummonerOpenModalInviteSummoner()" class="btnInvite waves-effect btn dnone">{{ babel("base.invite") }}</a></div></div><div class="row ad"></div><div id="Home" style="display: none;"><div class="row nmb"><div class="col s12 dnone bindpromo" style="padding:0;"><blockquote class="special" style="margin-top: 0;">{{ babel("summoner.claimyouraccountpromo") }}<a onclick="SummonerBindSummoner();" style="margin: 8px 12px" class="btn white black-text waves-effect">{{ babel("base.register") }}</a></blockquote></div></div><div class="row pending-invitations dnone"></div><div class="row rowneverupdated dnone"><div class="wnc"></div><div class="nocontent"><i class="fad fa-sync"></i><br /><span>{{ babel("summoner.summonerneverupdated") }}</span></div></div><div class="row rowranks"><div class="col s12"><h5>Ranks</h5></div></div><div class="row rowteams"><div class="col s12"><h5>{{ babel("base.team",\'p\') }}</h5></div></div><div class="row rowfriends"><div class="col s12"><h5>{{ babel("summoner.recentlyplayedwith") }}</h5></div><div class="col s12"><ul class="collection"></ul></div></div></div><div id="Matchlist" style="display: none;"><div id="rowMatchlistSettings" class="row matchlist-settings dnone"><div class="col s12"><h5>{{ babel("base.filter",\'p\') }}</h5></div><div class="col s12"><div class="card"><div class="card-content" style="padding: 0px 24px;"><div class="row"><div class="col s12 m7 l8"><div id="chipsFilter" class="chips chips-placeholder chips-autocomplete"></div></div><div class="input-field col s12 m5 l4"><select id="ddFilters"><option value="" disabled selected>{{ babel("summoner.filterbyqueuetype") }}</option></select></div></div></div></div></div></div><div id="summoner-matchlist" class="row dnone"><div class="col s12"><ul class="collapsible with-header wnc"></ul><div class="nocontent"><i class="fad fa-swords"></i><br /><span>{{ babel("summoner.nomatchtoshow") }}</span></div></div></div><div id="SummonerMatchesEndLine" class="dnone"><div class="row"><div class="col s12 end-line"><div class="divider"></div><label>{{ babel("base.end") }}</label><div class="divider"></div></div></div></div><div id="rowLoadMoreMatches" class="row"><div class="col s12 center"><div class="fixed-action-btn horizontal btnloading" title="{{ babel("base.loadmorematches") }}"><a id="loadMatchButton" class="btn-floating btn-large waves-effect teal accent-3" onclick="SummonerLoadMatchPage()"><i class="far fa-chevron-down large"></i></a></div><div id="loadMatchLoader" class="dnone preloader-wrapper big btnloading active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div></div><div id="Statistics" style="display: none;"><div class="row"><div class="col s12"><h5>{{ babel("base.seasonalstatistics") }}<label id="labelLastStatsUpdate" class="right" title="{{ babel("summoner.laststatisticsupdate") }}"></label></h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div id="statsSeasonsButtons" class="col s12"></div></div><div class="row"><div id="statsQueuesButtons" class="col s12"><a id="btnQueue{{ QueueTypeStatistics.Ranked_Solo }}" class="btn waves-effect active" onclick="SummonerStatisticsChangeQueue({{ QueueTypeStatistics.Ranked_Solo }});">{{ babel("QueueTypeStatistics.Ranked_Solo") }}</a><a id="btnQueue{{ QueueTypeStatistics.Ranked_Flex_5v5 }}" class="btn waves-effect white black-text" onclick="SummonerStatisticsChangeQueue({{ QueueTypeStatistics.Ranked_Flex_5v5 }});">{{ babel("QueueTypeStatistics.Ranked_Flex_5v5") }}</a><a id="btnQueue{{ QueueTypeStatistics.Normal }}" class="btn waves-effect white black-text" onclick="SummonerStatisticsChangeQueue({{ QueueTypeStatistics.Normal }});">{{ babel("QueueTypeStatistics.Normal") }}</a><a id="btnQueue{{ QueueTypeStatistics.Other }}" class="btn waves-effect white black-text" onclick="SummonerStatisticsChangeQueue({{ QueueTypeStatistics.Other }});">{{ babel("QueueTypeStatistics.Other") }}</a></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("base.total") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row total center"><div class="col s12 m3"><label>{{ babel("base.winrate",\'s\') }}</label><div id="totalStatsDonut" class="lolsquare-donut circle grey lighten-3"></div></div><div class="col s4 m3"><label>{{ babel("base.match",\'p\') }}</label><span id="totalStatsGames"></span></div><div class="col s4 m3"><label>{{ babel("base.win",\'p\') }}</label><span id="totalStatsWins"></span></div><div class="col s4 m3"><label>{{ babel("base.lost",\'p\') }}</label><span id="totalStatsLosses"></span></div></div></div></div></div></div><div id="championsPlayed" class="row"><div class="col s12"><h5>{{ babel("base.championplayed",\'p\') }}</h5></div><div class="col s12"><ul class="collection"></ul></div></div><div id="playedWith" class="row"><div class="col s12"><h5>{{ babel("summoner.playedwithseason") }}</h5></div><div class="col s12"><ul class="collection wnc"></ul></div></div></div><div id="SummonerFollow" style="display: none;"><div id="SummonerFollowers" class="row"><div class="col s12"><h5>{{ babel("base.follower",\'p\') }}</h5></div><div class="col s12"><ul class="collection wnc follow-list"><li class="collection-item transparent"><div class="center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></li></ul><div class="nocontent"><i class="fad fa-user-slash"></i><br /><span>{{ babel("summoner.notfollowinganyone") }}</span></div></div><div class="col s12 center"><a class="btn btn-load-more dnone" onclick="SummonerFollowCallLoadFollowers()">{{ babel("base.loadmore") }}</a></div></div><div id="SummonerFollowing" class="row"><div class="col s12"><h5>{{ babel("base.following") }}</h5></div><div class="col s12"><ul class="collection wnc follow-list"><li class="collection-item transparent"><div class="center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></li></ul><div class="nocontent"><i class="fad fa-user-slash"></i><br /><span>{{ babel("summoner.nofollowers") }}</span></div></div><div class="col s12 center"><a class="btn btn-load-more dnone" onclick="SummonerFollowCallLoadFollowing()">{{ babel("base.loadmore") }}</a></div></div></div><div id="LiveGame" style="display: none;"><div class="row title dnone"><div class="col"><h5 id="titleQueue"></h5></div><div class="col"><span id="titleTime"></span></div><div class="col"><a id="btnResetLiveGame" class="btn-flat waves-effect dnone" onclick="LiveGameResetPage()">{{ babel("base.reset") }}</a></div><div class="col right"><a class="btn waves-effect" onclick="LiveGameToggleRunes()">{{ babel("base.rune",\'p\') }}</a></div></div><div id="rowLiveGameCardParticipants" class="row dnone"><div class="col s12"><div class="card"><div class="card-content"><div class="grid-participants wnc"></div></div></div></div></div><div id="LiveGameLoading" class="row dnone"><div class="col s12 center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div><div id="LiveGameNoContent" class="row"><div class="col s12"><div class="wnc"></div><div class="nocontent"><i class="fad fa-gamepad"></i><br /><span>{{ babel("summoner.notingame") }}</span><br /><br /><a id="btnRefreshLiveGame" class="btn">{{ babel("summoner.checkiflive") }}</a></div></div></div></div>';
var TeamPageTemplate = '<div class="row rowLoadPage"><div class="col s12 center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div><div class="row nmb social-links"></div><div id="rowTeamCard"></div><div class="row ad"></div><div class="row youareinvited dnone"><div class="col s12 card"><span>{{ babel("team.invitedbythisteam") }}</span><a onclick="TeamCallAcceptInvite();" class="waves-effect btn green right"><i class="far fa-check left"></i>{{ babel("base.accept") }}</a><a onclick="TeamCallDeclineInvite();" class="waves-effect btn red right"><i class="far fa-times left"></i>{{ babel("base.decline") }}</a></div></div><div class="row youaskedjoin dnone"><div class="col s12 card"><span></span><a onclick="TeamCallCancelJoin();" class="waves-effect btn red right"><i class="far fa-times left"></i>{{ babel("base.canceljoin") }}</a></div></div><div id="Home" style="display: none;"><div class="row home-recap"><div class="col s12"><h5>{{ babel("team.recap") }}</h5></div><div class="col s12"></div></div><div class="row team-members"><div class="col s12"><h5>{{ babel("base.member",\'p\') }}<span id="members_count" class="badge" style="margin: 8px;float: none;"></span></h5></div><div class="col s12"><ul id="members-collection" class="collection"></ul></div><div class="col s12 col-buttons"><a id="team-btn-invite" onclick="TeamInviteSummoner();" class="waves-effect btn white black-text dnone">{{ babel("base.invite") }}</a></div></div><div class="row row-trials"><div class="col s12"><h5>{{ babel("team.trial",\'p\') }}<span id="trials_count" class="badge" style="margin: 8px;float: none;"></span></h5></div><div class="col s12"><div class="card amber lighten-5"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("team.trialdesc1") }}<br>{{ babel("team.trialdesc2") }}<br>{{ babel("team.trialdesc3") }}<br>{{ babel("team.trialdesc4") }}</p></div></div></div></div></div><div class="col s12"><ul id="trials-collection" class="collection"></ul></div></div><div class="row joinrequests dnone"><div class="col s12"><h5 class="accent-color">{{ babel("base.joinrequest",\'p\') }}<span class="badge">0</span><a class="btn-flat waves-effect right" onclick="$(\'.joinrequests\').toggleClass(\'less\'); return false;"><i class="far fa-angle-up expand_less"></i><i class="far fa-angle-down expand_more"></i></a></h5></div><div class="col s12"><ul class="invite-join collection"></ul></div></div><div class="row pendinginvites dnone"><div class="col s12"><h5 class="accent-color">{{ babel("base.pendinginvite",\'p\') }}<span class="badge">0</span><a class="btn-flat waves-effect right" onclick="$(\'.pendinginvites\').toggleClass(\'less\'); return false;"><i class="far fa-angle-up expand_less"></i><i class="far fa-angle-down expand_more"></i></a></h5></div><div class="col s12"><ul class="invite-join collection"></ul></div></div></div><div id="Matchlist" style="display: none;"><div id="rowInfoMatches" class="row dnone"><div class="col s12 divider"></div><div class="col s12 center"><label>{{ babel("team.matchlistdesc") }}</label></div><div class="col s12 divider"></div></div><div id="team-matchlist" class="row dnone"><div class="col s12"><ul class="collapsible with-header wnc"></ul><div class="nocontent"><i class="fad fa-swords"></i><br /><span>{{ babel("team.nomatches") }}</span></div></div></div><div id="TeamMatchesEndLine" class="dnone"><div class="row"><div class="col s12 end-line"><div class="divider"></div><label>{{ babel("base.end") }}</label><div class="divider"></div></div></div></div><div id="rowLoadMoreMatches" class="row"><div class="col s12 center"><div class="fixed-action-btn horizontal btnloading" title="{{ babel("base.loadmorematches") }}"><a id="loadMatchButton" class="btn-floating btn-large waves-effect teal accent-3" onclick="TeamLoadMatchPage()"><i class="far fa-chevron-down large"></i></a></div><div id="loadMatchLoader" class="dnone preloader-wrapper big btnloading active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div></div><div id="Statistics" style="display: none;"><div class="row row-filters"><div class="col s12"><h5>{{ babel("base.seasonalstatistics") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div id="statsSeasonsButtons" class="col s12"></div></div><div class="row"><div id="statsQueuesButtons" class="col s12"><a id="btnQueue{{ QueueTypeStatistics.Ranked_Flex_5v5 }}" class="btn waves-effect white black-text" onclick="TeamStatisticsChangeQueue({{ QueueTypeStatistics.Ranked_Flex_5v5 }});">{{ babel("QueueTypeStatistics.Ranked_Flex_5v5") }}</a><a id="btnQueue{{ QueueTypeStatistics.Normal }}" class="btn waves-effect white black-text" onclick="TeamStatisticsChangeQueue({{ QueueTypeStatistics.Normal }});">{{ babel("QueueTypeStatistics.Normal") }}</a></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("base.championplayed",\'p\') }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row stats-played-champions"><div class="col s12"><div class="grid-table"></div></div></div></div></div></div></div></div><div id="TeamFollow" style="display: none;"><div class="row"><div class="col s12"><h5>{{ babel("base.follower",\'p\') }}</h5></div><div class="col s12"><ul class="collection wnc follow-list"><li class="collection-item transparent"><div class="center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></li></ul><div class="nocontent"><i class="fad fa-user-slash"></i><br /><span>{{ babel("team.nofollowers") }}</span></div></div><div class="col s12 center"><a class="btn btn-load-more dnone" onclick="TeamFollowCallLoadFollowers()">{{ babel("base.loadmore") }}</a></div></div></div><div id="Settings" style="display: none;"><div class="row"><div class="col s12"><h5>{{ babel("team.managejoinrequests") }}</h5></div><div class="col s12"><div class="card card-join-settings"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("team.managejoinrequestsdesc") }}</p></div><div class="input-field col s12"><p><label><input id="checkOpenToJoins" type="checkbox" class="filled-in" /><span>{{ babel("team.opentojoinrequests") }}</span></label></p></div><div class="col s12"><p>{{ babel("team.openpositionsdesc") }}</p></div><div id="openPositionsSettings"></div></div></div></div></div><div class="col col-buttons s12"><a id="btnJoinSave" onclick="TeamSaveJoinSettings();" class="btn white black-text waves-effect"><i class="far fa-check left"></i>{{ babel("base.savesetting",\'p\') }}</a></div></div><div class="row row-week-schedule"><div class="col s12"><h5>{{ babel("team.manageschedule") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("team.managescheduledesc") }}</p></div></div><div class="row"><div class="col s12 week-schedule"></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("sociallinks.managesociallinks") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><p>{{ babel("sociallinks.teamsocialdesc") }}</p></div><div id="TeamSettingsSocialLinks"></div></div></div></div></div><div class="col col-buttons s12"><a id="btnSocialLinksSave" onclick="TeamSaveSocialLinksSettings();" class="btn white black-text waves-effect"><i class="far fa-check left"></i>{{ babel("base.savelink",\'p\') }}</a></div></div></div>';
var TeamLeaderboardPageTemplate = '<div class="row"><div class="col s12"><h5>{{ babel("teamleaderboard.pagetitle") }}</h5></div><div class="col s12"><ul id="ulTeamLeaderboardTeams" class="collection team-leaderboard wnc"></ul><div class="card nocontent"><div class="card-content"><div class="row"><div class="col s12"><i class="fad fa-list-ol"></i><br /><span>{{ babel("base.nothingfound") }}</span></div></div></div></div></div><div class="col s12 center"><ul class="pagination"></ul></div></div><div id="rowTeamLeaderboardMyTeams" class="row"><div class="col s12"><h5>{{ babel("base.myteams") }}</h5></div></div>';
var TournamentPageTemplate = '<div class="row rowLoadPage dnone"><div class="col s12 center"><div class="preloader-wrapper big active"><div class="spinner-layer accent-border"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div><div class="row nmb social-links dnone"></div><div id="rowTournamentCard"></div><div class="row ad"></div><div id="tournament_checkin_timer" class="row nmb dnone"><div class="col s12"><blockquote class="special"><i class="fad fa-clipboard-list-check fa-swap-opacity"></i><span>{{ babel("tournament.checkinphase") }}</span><h5></h5><div id="tournament_checkin_actions" class="dnone">{{ babel("tournament.checkinaskifready") }}<a onclick="TournamentCheckInActionConfirm();" style="margin: 8px 12px" class="btn white black-text waves-effect">{{ babel("base.confirm") }}</a></div></blockquote></div></div><div id="Overview" style="display: none;"><div id="tournaments_informations" class="row"><div class="col s12"><h5>{{ babel("base.detail", \'p\') }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12"><label>{{ babel("tournament.host") }}</label></div><div id="tournament_host" class="col s12"></div></div><div id="tournament_row_info_date" class="row"><div class="col s12"><label>{{ babel("tournament.startdate") }}</label></div><div class="col s12 view"><p></p></div><div class="edit col s12 m6 dnone"><label for="tournament_start_day">{{ babel("time.day") }}</label><input id="tournament_start_day" type="text" class="datepicker"></div><div class="edit col s12 m6 dnone"><label class="active" for="tournament_start_time">{{ babel("time.time") }}</label><input id="tournament_start_time" type="text" class="timepicker"></div></div><div id="tournament_row_info_description" class="row"><div class="col s12"><label>{{ babel("base.description") }}</label></div><div class="col s12 view"><p style="white-space: pre-wrap;"></p></div><div class="edit col s12 dnone"><textarea class="materialize-textarea"></textarea></div></div><div id="tournament_row_info_rules" class="row"><div class="col s12"><label>{{ babel("base.rule", \'p\') }}</label></div><div class="col s12 view"><p style="white-space: pre-wrap;"></p></div><div class="edit col s12 dnone"><textarea class="materialize-textarea"></textarea></div></div><div id="tournament_row_info_contacts" class="row"><div class="col s12"><label>{{ babel("base.contact", \'p\') }}</label></div><div class="col s12 view"><p style="white-space: pre-wrap;"></p></div><div class="edit col s12 dnone"><textarea class="materialize-textarea"></textarea></div></div><div id="tournament_row_info_buttons" class="row dnone"><div class="col s12 col-buttons"><a onclick="TournamentSaveDescription()" class="btn">{{ babel("base.save") }}</a></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("base.participant", \'p\') }}</h5></div><div class="col s12"><div class="card"><div class="card-content tournament-participants wnc"></div><div class="card-content nocontent small"><i class="fad fa-users"></i><br /><span>{{ babel("tournament.noparticipants") }}</span></div></div></div></div></div><div id="Schedule" style="display: none;"><div id="row_bracket" class="row" style="margin-bottom: 2rem"><div class="col s12"><h5>{{ babel("tournament.bracket") }}</h5></div><div id="schedule_tournament_container" class="col s12 tournament-container"><div></div></div></div><div id="row_match_details" class="row" style="display:none"><div class="col s12"><h5></h5></div><div class="col s12"><div class="card"><div class="card-content tournament-match-details"></div></div></div></div><div id="row_schedule" class="row" style="min-height: 50vh"><div class="col s12" style="display: grid;grid-template-columns: 1fr auto;grid-gap: 8px 4px;align-items: center;"><h5>{{ babel("tournament.schedule") }}</h5><div class="dropdown-trigger btn waves-effect" data-target="ddSelectRound">{{ babel("tournament.selectround") }}</div><ul id="ddSelectRound" class="dropdown-content"></ul></div><div class="wnc"></div><div class="nocontent"><i class="fad fa-calendar"></i><br /><span>{{ babel("tournament.noschedule") }}</span></div></div></div><div id="Management" style="display: none;"><div id="row_manage_participant" class="row dnone"><div class="col s12"><h5>{{ babel("tournament.manageparticipants") }}<label id="ready_counter" style="margin-left:12px"></label></h5></div><div class="col s12"><ul class="collection wnc"></ul><div class="card nocontent"><div class="card-content"><span>{{ babel("tournament.manageparticipantsnocontent") }}</span></div></div></div></div><div id="row_manage_match" class="row dnone"><div class="col s12"><h5>{{ babel("tournament.managetournament") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div id="management_tournament_container" class="col s12 tournament-container"><label class="truncate center">{{ babel("tournament.choosematchtomanage") }}</label><div></div></div></div><div class="row" style="display:none"><div class="col s12"><div class="divider" style="margin: 1.5rem 0;"></div></div></div><div class="row circle-img nmb" style="display:none"><div class="input-field col s12 m6"><select id="selectParticipantBlue"></select><label>{{ babel("tournament.participantblueside") }}</label></div><div class="input-field col s12 m6"><select id="selectParticipantRed"></select><label>{{ babel("tournament.participantredside") }}</label></div></div><div class="row nmb dnone" style="display:none"><div class="input-field col s12 m6"><input id="match_day" type="text" class="datepicker"><label for="match_day">{{ babel("tournament.matchdate") }}</label></div><div class="input-field col s12 m6"><input id="match_time" type="text" class="timepicker"><label class="active" for="match_time">{{ babel("tournament.matchtime") }}</label></div></div><div class="row" style="display:none"><div class="col s12"><label class="active">{{ babel("tournament.choosebracketwinner") }}</label></div><div id="check_bracket_winner_group" class="input-field col s12"><p><label><input id="check_bracket_winner_0" name="groupBracketWinner" type="radio" value="0" checked="checked" /><span>TBD</span></label></p><p><label><input id="check_bracket_winner_1" name="groupBracketWinner" type="radio" value="" /><span id="text_radio_bracket_winner_1">{{ babel("tournament.bluesidewon") }}</span></label></p><p><label><input id="check_bracket_winner_2" name="groupBracketWinner" type="radio" value="" /><span id="text_radio_bracket_winner_2">{{ babel("tournament.redsidewon") }}</span></label></p></div></div><div class="row" style="display:none"><div class="col s12 col-buttons"><a id="mng_save" onclick="TournamentManageSave()" class="btn">{{ babel("base.save") }}</a></div></div></div></div></div></div><div id="row_manage_options" class="row"><div class="col s12"><h5>{{ babel("tournament.settings") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row nmb checkin-fields dnone"><div class="col s12"><p>{{ babel("tournament.checkinmanagedescription") }}</p><br /></div></div><div class="row checkin-fields dnone"><div class="input-field col s12"><input id="checkin_minutes" class="validate" type="number"><label for="checkin_minutes">{{ babel("tournament.checkinminutes") }}</label></div><div class="col s12 col-buttons"><a id="btnManageCheckIn" class="btn white black-text" onclick="TournamentManageCheckIn()"><i class="far fa-tasks left"></i>{{ babel("tournament.checkinstart") }}</a><a id="btnManageResetReadyStates" class="btn white black-text" onclick="TournamentManageResetReadyCheck()">{{ babel("tournament.resetreadystates") }}</a></div></div><div class="row divider checkin-fields"></div><div class="row"><div class="col s12 col-buttons"><a id="btnManageStart" class="btn dnone" onclick="TournamentManageStart()"><i class="far fa-clipboard-check left"></i>{{ babel("tournament.start") }}</a><a id="btnManageClose" class="btn dnone" onclick="TournamentManageClose()">{{ babel("tournament.end") }}</a></div><div class="col s12 col-buttons admin-only dnone"><br /><br /><label class="right">Admin only</label><br /><a id="btnManageReopen" class="btn white black-text dnone" onclick="TournamentManageReopen()">{{ babel("tournament.reopen") }}</a><a id="btnManageShow" class="btn white black-text dnone" onclick="TournamentManageShow()">Show tournament</a><a id="btnManageHide" class="btn white black-text dnone" onclick="TournamentManageHide()">Hide tournament</a></div></div></div></div></div></div></div>';
var UserPageTemplate = '<div class="row"><div class="col s12 user-icon-image"><img alt="Profile picture" class="circle z-depth-1" src="{{ cdnLink(\'/images/Transparent.png\') }}"></div><div class="col s12 user-icon-image"><h4>{{ babel("base.hi") }}</h4></div><div class="col s12 user-icon-image center"><p>{{ babel("user.pagedesc") }}</p></div></div><div class="row btn-navigate-settings"><div class="col"><div class="card waves-effect" onclick="navigate(\'Curriculum\')"><div class="card-content"><span class="card-title">{{ babel("user.card-cv-title") }}</span><i class="fad fa-address-card green-text"></i><p>{{ babel("user.card-cv-desc") }}</p></div></div></div><div class="col"><div class="card waves-effect" onclick="navigate(\'SocialLinks\')"><div class="card-content"><span class="card-title">{{ babel("user.card-sociallinks-title") }}</span><i class="fad fa-link blue-text"></i><p>{{ babel("user.card-sociallinks-desc") }}</p></div></div></div><div class="col"><div class="card waves-effect" onclick="navigate(\'Achievements\')"><div class="card-content"><span class="card-title">{{ babel("user.card-achievements-title") }}</span><i class="fad fa-award amber-text"></i><p>{{ babel("user.card-achievements-desc") }}</p></div></div></div><div class="col"><div class="card waves-effect" onclick="navigate(\'AccountData\')"><div class="card-content"><span class="card-title">{{ babel("user.card-accountdata-title") }}</span><i class="fad fa-trash-alt grey-text"></i><p>{{ babel("user.card-accountdata-desc") }}</p></div></div></div></div>';
var CarouselSliderItemTemplate = '<div id="{{ objPar.sId }}" class="carousel-slider"><div class="fade fade-left"></div><div class="carousel-slider-container iscroll"><div class="row"></div></div><div class="fade fade-right"></div></div>';
var AchievementItemTemplate = '<div class="achievement {{ objPar.sCss }}"><div class="circle center"><img src="{{ cdnLink("/images/emoji/" + objPar.sEmoji) }}" alt="Achievement icon" /></div></div>';
var AchievementShowcaseItemTemplate = '<div class="col"><div class="card"><div class="card-content">{{* getTemplateHtml(AchievementItemTemplate, objPar) }}</div><div class="divider"></div><div class="card-content"><label class="truncate">{{ objPar.achievement ? timeShow(objPar.achievement.dtCompleted, \'dd / MM / yyyy\') : \'Locked\' }}</label><span class="truncate">{{ objPar.sTitle }}</span><label class="truncate" title="{{ objPar.sDescription }}">{{ objPar.sDescription }}</label></div></div></div>';
var AdPromoBugReportItemTemplate = '<div class="col s12"><div class="card teal lighten-5 teal-text text-darken-4" onclick="callFeedbackModal(); return false;"><div></div><i class="fad fa-bug teal-text text-accent-4"></i><span class="title">{{ babel("base.promofeedbackbugtitle") }}</span><span>{{ babel("base.promofeedbackbugtext") }}</span><div></div></div></div>';
var AdPromoFeedbackItemTemplate = '<div class="col s12"><div class="card teal lighten-5 teal-text text-darken-4" onclick="callFeedbackModal(); return false;"><div></div><i class="fad fa-comment-smile teal-text text-accent-4"></i><span class="title">{{ babel("base.promofeedbacktitle") }}</span><span>{{ babel("base.promofeedbacktitle") }}</span><div></div></div></div>';
var CookieConsentItemTemplate = '<div id="storageConsentCard"><div class="card"><div class="card-content"><h5>{{ babel("base.cookieconsenttitle") }}</h5><p>{{ babel("base.cookieconsent1") }}<br />{{ babel("base.cookieconsent2") }}</p><a onclick="consentStorage();" class="btn-large waves-effect orange" style="margin-top: 24px;">{{ babel("base.ok") }}</a></div></div></div>';
var GoogleAdItemTemplate = '<div>{{? objPar.bMainContent }}<ins class="adsbygoogle"         style="display:block;height: {{ Math.floor(objPar.iHeight) }}px;width: {{ Math.floor(objPar.iWidth) }}px;"         data-ad-client="ca-pub-1036411287221244"         data-ad-slot="8555962542"></ins>{{?}}    {{? !objPar.bMainContent }}<ins class="adsbygoogle"         style="display:block;"         data-ad-client="ca-pub-1036411287221244"         data-ad-slot="5563855742"         data-ad-format="vertical"         data-full-width-responsive="true"></ins>{{?}}</div>';
var GoogleAdEndMainContentItemTemplate = '<div><ins class="adsbygoogle"         style="display:block;height: {{ Math.floor(objPar.iHeight) }}px;width: {{ Math.floor(objPar.iWidth) }}px;"         data-ad-client="ca-pub-1036411287221244"         data-ad-slot="8461196414"></ins></div>';
var Modal_CookiePoliciesItemTemplate = '<div id="modalPrivacyPolicies" class="modal modal-fixed-footer"><div class="modal-content"><h5>LoLSquare</h5><h5>Privacy Policy</h5><p>Last Updated: 23/05/2019</p><p>LolSquare ("us", "we", or "our") operates https://lolsquare.com (the            "Site"). This page informs you of our policies regarding the collection, use and disclosure of            Personal Information we receive from users of the Site.</p><p>We use your Personal Information for providing and improving the Site. By using the Site, you            agree to the collection and use of information in accordance with this policy</p><h5>Information Collection And Use</h5><p>While using our Site, we may ask you to provide us with certain personally identifiable information            that can be used to contact or identify you. Personally identifiable information may include, but is not            limited to your email address ("Personal Information").</p><h5>Log Data</h5><p>Like many site operators, we collect information that your browser sends whenever you visit our Site            ("Log Data").</p><p>This Log Data may include information such as your computer\'s Internet Protocol ("IP") address,            browser type, browser version, the pages of our Site that you visit, the time and date of your visit,            the time spent on those pages and other statistics.</p><p>In addition, we may use third party services such as Google Analytics that collect, monitor and analyze            this type of information in order to increase our Service’s functionality. These third party service            providers have their own privacy policies addressing how they use such information.</p><h5>Communications</h5><p>We may use your Personal Information to contact you with newsletters, marketing or promotional            materials and other information that may be of interest to you. You may opt out of receiving any,            or all, of these communications from us by following the unsubscribe link or instructions provided            in any email we send</p><h5>Cookies</h5><p>Cookies are files with a small amount of data, which may include an anonymous unique identifier.            Cookies are sent to your browser from a web site and transferred to your device. We use cookies            to collect information in order to improve our services for you.</p><p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.            The Help feature on most browsers provide information on how to accept cookies, disable cookies            or to notify you when receiving a new cookie.</p><p>If you do not accept cookies, you may not be able to use some features of our Service and we            recommend that you leave them turned on.</p><h5>Children’s Privacy</h5><p>We do not knowingly collect personally identifiable information from children under 13. If you are            a parent or guardian and you learn that your Children have provided us with Personal Information,            please contact us. If we become aware that we have collected Personal Information from a children            under age 13 without verification of parental consent, we take steps to remove that information            from our servers.</p><h5>Security</h5><p>The security of your Personal Information is important to us, but remember that no method of            transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to            use commercially acceptable means to protect your Personal Information, we cannot guarantee its            absolute security.</p><h5>Business Transaction</h5><p>If LolSquare is involved in a merger, acquisition or asset sale, your Personal Information may be            transferred as a business asset. In such cases, we will provide notice before your Personal Information            is transferred and/or becomes subject to a different Privacy Policy.</p><h5>Ads</h5><p>Third party vendors, including Google, use cookies to serve ads based on a user\'s prior visits to your            website or other websites.</p><p>Google\'s use of advertising cookies enables it and its partners to serve ads to your users based            on their visit to your sites and/or other sites on the Internet.</p><p>You may opt out of personalized advertising by visiting Google\'s &nbsp;<a href="https://adssettings.google.com/authenticated">Ads Settings</a>&nbsp; page.</p><h5>Links To Other Sites</h5><p>Our Service may contain links to other sites that are not operated by us. If you click on a third            party link, you will be directed to that third party’s site. We strongly advise you to review the            Privacy Policy of every site you visit.</p><p>We have no control over, and assume no responsibility for the content, privacy policies or practices            of any third party sites or services.</p><h5>Changes To This Privacy Policy</h5><p>This Privacy Policy is effective as of 23/05/2019 and will remain in effect except with respect to any            changes in its provisions in the future, which will be in effect immediately after being posted on this            page.</p><p>We reserve the right to update or change our Privacy Policy at any time and you should check this            Privacy Policy periodically. Your continued use of the Service after we post any modifications to the            Privacy Policy on this page will constitute your acknowledgment of the modifications and your            consent to abide and be bound by the modified Privacy Policy.</p><p>If we make any material changes to this Privacy Policy, we will notify you either through the email            address you have provided us, or by placing a prominent notice on our website.</p><h5>Contact Us</h5><p>If you have any questions about this Privacy Policy, please contact us.</p><p>LoLSquare<br />info.lolsquare@gmail.com<br /></p></div><div class="modal-footer grey lighten-2"><a class="modal-action modal-close waves-effect btn-flat">Close</a></div></div>';
var Modal_FeedbackItemTemplate = '<div id="modalFeedback" class="modal"><div class="modal-content"><div class="row nmb"><div class="col s12"><h4>{{ babel("base.feedback") }}</h4></div><div class="input-field col s12 m6 l4"><select><option value="bug" selected="selected">Bug</option><option value="suggestion">Suggestion</option><option value="question">Question</option><option value="other">Other</option></select><label>Feedback type</label></div><div class="input-field col s12"><textarea id="textareaFeedback" class="materialize-textarea"></textarea><label for="textareaFeedback">{{ babel("base.message") }}</label></div></div></div><div class="modal-footer"><a onclick="callSendFeedback()" class="modal-action modal-close waves-effect btn-large">{{ babel("base.send") }}</a></div></div>';
var Modal_FindTeamItemTemplate = '<div id="modalFindTeam" class="modal"><div class="modal-content"><div class="row"><div class="col s12"><h5>{{ babel("base.joinateam") }}</h5></div><div class="col s12 m4"><a href="{{ getPageLink(\'EditTeam\') }}" onclick="navigate(\'EditTeam\');return false;"><div class="card hoverable center waves-effect modal-close"><div class="card-content"><i class="fad fa-plus blue-text"></i><p class="blue-text text-darken-3">{{ babel("base.createteam") }}</p><p>{{ babel("base.createteampromo") }}</p></div></div></a></div><div class="col s12 m4"><a href="{{ getPageLink(\'SearchTeam\') }}" onclick="navigate(\'SearchTeam\');return false;"><div class="card hoverable center waves-effect modal-close"><div class="card-content"><i class="fad fa-search-plus green-text"></i><p class="green-text text-darken-3">{{ babel("base.findteam") }}</p><p>{{ babel("base.searchteampromo") }}</p></div></div></a></div><div class="col s12 m4"><div class="card hoverable center waves-effect modal-close"><div class="card-content"><i class="fad fa-times amber-text"></i><p class="amber-text text-darken-3">{{ babel("base.notnow") }}</p><p>{{ babel("base.findteamnotnowpromo") }}</p></div></div></div></div></div></div>';
var Modal_ReportItemTemplate = '<div id="modalReport" class="modal"><div class="modal-content"><div class="row"><div class="col s12"><h5>{{ babel("base.reporttext") }}</h5></div></div><div class="row"><div class="input-field col s12 l6"><select id="selectReportCategory"></select><label>{{ babel("base.reason") }}</label></div></div><div class="row"><div class="input-field col s12"><textarea id="textarea1" class="materialize-textarea"></textarea><label for="textarea1">{{ babel("base.reportmessagetext") }}</label></div></div></div><div class="modal-footer"><a onclick="callSendReport(\'{{ objPar.iEntityType }}\',\'{{ objPar.iTargetId }}\')" class="waves-effect btn-large">{{ babel("base.send") }}</a></div></div>';
var Modal_TermsOfServiceItemTemplate = '<div id="modalToS" class="modal modal-fixed-footer"><div class="modal-content"><h5>LoLSquare</h5><h5>Terms of Service ("Terms")</h5><p>Last Updated: 23/05/2019</p><p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the            http://lolsquare.com website and the LolSquare mobile            application (the "Service") operated by LolSquare ("us", "we", or "our").</p><p>Your access to and use of the Service is conditioned on your acceptance of and compliance with            these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p><p><b>By accessing or using the Service you agree to be bound by these Terms. If you disagree                with any part of the terms then you may not access the Service.</b></p><h5>Termination</h5><p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for            any reason whatsoever, including without limitation if you breach the Terms.</p><p>All provisions of the Terms which by their nature should survive termination shall survive            termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and            limitations of liability.</p><h5>Content</h5><p>Our Service allows you to post, link, store, share and otherwise make available certain information,            text, graphics, photos, videos, or other material ("Content"). You are responsible for the Content            that you post to the Service, including its legality, reliability, and appropriateness.</p><p>By posting Content to the Service, you grant us the right and license to use, modify, publicly perform,            publicly display, reproduce, and distribute such Content on and through the Service. You retain any and            all of your rights to any Content you submit, post or display on or through the Service and you are            responsible for protecting those rights. You agree that this license includes the right for us to make            your Content available to other users of the Service, who may also use your Content subject to these Terms.            You agree that all photos that you upload through our upload form are published and licensed under            the Creative Commons Zero license.</p><p>You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it            and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content            on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract            rights or any other rights of any person.</p><h5>Accounts</h5><p>When you create an account with us, you must provide us information that is accurate, complete,            and current at all times. Failure to do so constitutes a breach of the Terms, which may result            in immediate termination of your account on our Service.</p><p>You are responsible for safeguarding the password that you use to access the Service and for            any activities or actions under your password.</p><p>You agree not to disclose your password to any third party. You must notify us immediately            upon becoming aware of any breach of security or unauthorized use of your account.</p><h5>Termination</h5><p>We may terminate or suspend your account immediately, without prior notice or liability,            for any reason whatsoever, including without limitation if you breach the Terms.</p><p>Upon termination, your right to use the Service will immediately cease. If you wish            to terminate your account, you may simply discontinue using the Service.</p><h5>Purchases</h5><p>If you wish to purchase any product or service made available through the Service            ("Purchase"), you may be asked to supply certain information relevant to your Purchase            including, without limitation, your credit card number, the expiration date of your credit            card, your billing address, and your shipping information.</p><p>You represent and warrant that: (i) you have the legal right to use any credit card(s)            or other payment method(s) in connection with any Purchase; and that (ii) the information            you supply to us is true, correct and complete.</p><p>By submitting such information, you grant us the right to provide the information to            third parties for purposes of facilitating the completion of Purchases.</p><p>We reserve the right to refuse or cancel your order at any time for certain reasons            including but not limited to: product or service availability, errors in the description            or price of the product or service, error in your order or other reasons.</p><p>We reserve the right to refuse or cancel your order if fraud or an unauthorised or illegal transaction            is suspected.</p><h5>Availability, Errors and Inaccuracies</h5><p>We are constantly updating our offerings of products and services on the Service. The products or            services available on our Service may be mispriced, described inaccurately, or unavailable, and we            may experience delays in updating information on the Service and in our advertising on other web sites.</p><p>We cannot and do not guarantee the accuracy or completeness of any information, including prices,            product images, specifications, availability, and services. We reserve the right to change or update            information and to correct errors, inaccuracies, or omissions at any time without prior notice.</p><h5>Contests, Sweepstakes and Promotions</h5><p>Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through            the Service may be governed by rules that are separate from these Terms. If you participate in any            Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a            Promotion conflict with these Terms, the Promotion rules will apply.</p><h5>Subscriptions</h5><p>Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be            billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either            on a monthly or annual basis, depending on the type of subscription plan you select when purchasing            a Subscription.</p><p>At the end of each Billing Cycle, your Subscription will automatically renew under the exact same            conditions unless you cancel it or LolSquare cancels it. You may cancel your Subscription renewal            either through your online account management page or by contacting LolSquare.</p><p>A valid payment method, including credit card or PayPal, is required to process the payment for            your Subscription. You shall provide LolSquare with accurate and complete billing information            including full name, address, state, zip code, and a valid payment method information. By submitting            such payment information, you automatically authorize LolSquare to charge all Subscription fees            incurred through your account to any such payment instruments.</p><p>Should automatic billing fail to occur for any reason, LolSquare will issue an electronic invoice            indicating that you must proceed manually, within a certain deadline date, with the full payment            corresponding to the billing period as indicated on the invoice.</p><h5>Fee Changes</h5><p>LolSquare, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions.            Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</p><p>LolSquare will provide you with a reasonable prior notice of any change in Subscription fees to give            you an opportunity to terminate your Subscription before such change becomes effective.</p><p>Your continued use of the Service after the Subscription fee change comes into effect constitutes            your agreement to pay the modified Subscription fee amount.</p><h5>Refunds</h5><p>Except when required by law, paid Subscription fees are non-refundable.</p><h5>Links To Other Web Sites</h5><p>Our Service may contain links to third-party web sites or services that are not owned or controlled            by LolSquare.</p><p>LolSquare has no control over, and assumes no responsibility for, the content,            privacy policies, or practices of any third party web sites or services. You further acknowledge and            agree that LolSquare shall not be responsible or liable, directly or indirectly, for any            damage or loss caused or alleged to be caused by or in connection with use of or reliance on any            such content, goods or services available on or through any such web sites or services.</p><h5>Changes</h5><p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a            revision is material we will try to provide at least 30 days notice prior to any new terms            taking effect. What constitutes a material change will be determined at our sole discretion.</p><h5>Contact Us</h5><p>If you have any questions about these Terms, please contact us.</p><p>LoLSquare<br />info.lolsquare@gmail.com<br /></p></div><div class="modal-footer grey lighten-2"><a class="modal-action modal-close waves-effect btn-flat">Close</a></div></div>';
var Modal_WelcomeItemTemplate = '<div id="welcomeModal" class="welcome modal" style="max-width: 600px;"><div class="row nmb"><a class="btn-flat waves-effect right modal-close"><i class="far fa-times"></i></a></div><div class="modal-content"><div class="row"><div class="col s12 center"><img style="height: 120px;width: 120px;" src="{{ cdnLink(\'/images/logo/android-chrome-192x192.png\') }}" alt="LoLSquare logo"></div></div><div class="row"><div class="col s12 center"><h1 class="light teal-text text-darken-1 hide-on-small-only">{{ babel("base.welcometololsquare") }}</h1><h3 class="light teal-text text-darken-1 hide-on-med-and-up">{{ babel("base.welcometololsquare") }}</h3><p style="font-size: 18px;">{{ babel("base.modalwelcometext1") }}<br />{{ babel("base.modalwelcometext2") }}</p></div></div></div><div class="modal-footer" style="padding:20px;padding-top:0;"><a class="modal-action modal-close waves-effect btn-large orange accent-3" onclick="navigate(\'Curriculum\')">{{ babel("base.curriculumreview") }}</a><a class="modal-action modal-close waves-effect btn-large left">{{ babel("base.later") }}</a></div></div>';
var NotificationListItemItemTemplate = '<li class="collection-item avatar {{? objPar.lNotificationId >WebUser.summoner.lLastSeenNotification }}new{{?}}"    {{? !isNullOrEmpty(objPar.sOnclick) }} onclick="{{ objPar.sOnclick }}" {{?}}    {{? !isNullOrEmpty(objPar.sHref) }} href="{{ objPar.sHref }}" {{?}}><img src="{{ objPar.sSrcImage }}" class="circle" alt="Actor icon"><p>{{* objPar.sInnerHtml }}</p><label title="{{ timeShow(objPar.lCreationDate * 1000, \'dd MMM at HH:mm\') }}">{{ getRelativeTime(objPar.lCreationDate * 1000) }}</label><a class="secondary-content"><i class="{{ objPar.sIcon }}"></i></a></li>';
var ToastItemTemplate = '<div id="{{ objPar.sId }}" onclick="{{ objPar.sOnClick }}" class="lolsquare-toast card {{ objPar.sColor }} darken-2 {{? objPar.bPersistent }}persistent{{?}}"><div class="card-content">{{? !isNullOrEmpty(objPar.sIcon) }}<i class="{{ objPar.sIcon }}"></i>{{?}}        {{* objPar.sAchievementHtml }}<p>{{ objPar.sText }}{{? !isNullOrEmpty(objPar.sAchievementName) }}<br />{{ objPar.sAchievementName }}{{?}}</p>{{* !isNullOrEmpty(objPar.sActionsHtml) ? objPar.sActionsHtml : \'\' }}</div></div>';
var ChampionImageItemTemplate = '{{? objPar.bNavigate }}<a style="cursor:pointer;" {{* getChampionNavigations(objPar.id) }}>{{?}}<img class="{{ objPar.css }}" src="{{ GetChampionIconById(objPar.id) }}" alt="{{ GetChampionNameById(objPar.id) }} icon" title="{{ GetChampionNameById(objPar.id) }}">{{? objPar.bNavigate }}</a>{{?}}';
var CheckItemTemplate = '<p class="{{ objPar.sCss }} {{? !isNullOrEmpty(objPar.sImgSrc) }}img-check{{?}}"><label><input {{? !isNullOrEmpty(objPar.sId) }} id="{{ objPar.sId }}" {{?}}               type="checkbox"               class="filled-in {{ objPar.sInputCss }}"               {{? objPar.bChecked }} checked {{?}}               value="{{ objPar.sValue }}" /><span>{{? !isNullOrEmpty(objPar.sImgSrc) }}<img src="{{ objPar.sImgSrc }}" alt="Check image">{{?}}            {{ objPar.sText }}</span></label></p>';
var ChipItemTemplate = '<a     title="{{ objPar.sTitle }}"     class="chip {{ objPar.sCss }}"     {{? (!isNullOrEmpty(objPar.sHref)) }} href="{{ objPar.sHref }}" {{?}}    {{? (!isNullOrEmpty(objPar.sOnclick)) }} onclick="{{ objPar.sOnclick }}return false;" {{?}}    >{{? (!isNullOrEmpty(objPar.sIcon)) }}<i class="{{ objPar.sIcon }}"></i>{{?}}<span>{{ objPar.sText }}</span></a>';
var DonutProgressItemTemplate = '<svg id="{{ objPar.sId }}" class="donut-progress" width="{{ objPar.iPixel }}" height="{{ objPar.iPixel }}"><circle class="meter" /><circle class="value" /></svg>';
var FlagImageItemTemplate = '{{? !isNullOrEmpty(objPar.id) }}<img class="{{ objPar.css }}" src="{{ getFlagUrl(objPar.id) }}" title="{{ getCountryNameFromCode(objPar.id) }}" alt="{{ getCountryNameFromCode(objPar.id) }} flag" />{{?}}';
var Modal_DefaultItemTemplate = '<div id="defaultModal" class="modal"><div class="modal-content"><div class="row"><div class="col s12"><h5>{{ objPar.sTitle }}</h5></div><div class="col s12"><p>{{* objPar.sContent }}</p></div></div></div><div class="row"><div class="col s12 col-buttons"><a class="btn-flat waves-effect left modal-action modal-close">{{ babel("base.nevermind") }}</a><a class="btn waves-effect modal-action modal-close" onclick="{{ objPar.sOnClickConfirm }}">{{ objPar.sOnClickConfirmText }}</a></div></div></div>';
var NavLinkItemTemplate = '<a {{? (!isNullOrEmpty(objPar.sId)) }}id="{{ objPar.sId }}"{{?}} href="{{ objPar.sHref }}" {{? (!isNullOrEmpty(objPar.sOnclick)) }} onclick="{{ objPar.sOnclick }}" {{?}} class="truncate waves-effect {{ objPar.sCss }}" title="{{ objPar.sTitle }}" style="{{ objPar.sStyle }}">{{? (!isNullOrEmpty(objPar.sImage)) }}<img src="{{ objPar.sImage }}" alt="Menu link icon">{{?}}    {{? (!isNullOrEmpty(objPar.sIcon)) }}<i class="{{ objPar.sIcon }}"></i>{{?}}    {{ objPar.sText }}</a>';
var NoContentItemTemplate = '{{? objPar.bWnc }}<div class="wnc"></div>{{?}}<div class="nocontent{{ objPar.bSmall ? \' small\' : \'\' }}"><i class="{{ objPar.sIcon }}"></i><br /><span>{{* objPar.sText }}</span></div>';
var PaginationItemTemplate = '<li class="{{? objPar.bDisabled }}disabled{{?}}{{? objPar.bActive }}active{{?}}{{? !objPar.bDisabled && !objPar.bActive }}waves-effect{{?}}"><a {{? !isNullOrEmpty(objPar.sHref) }}       href="{{ objPar.sHref }}"       {{?}}       {{? !isNullOrEmpty(objPar.sOnClick) }}       onclick="{{ objPar.sOnClick }}"       {{?}}>{{? objPar.bLeft }}<i class="far fa-chevron-left"></i>{{?}}        {{? objPar.bRight }}<i class="far fa-chevron-right"></i>{{?}}        {{ objPar.sText }}</a></li>';
var RadioItemTemplate = '<p class="{{ objPar.sCss }} {{? !isNullOrEmpty(objPar.sImgSrc) }}img-radio{{?}}"><label><input name="{{ objPar.sGroupName}}" type="radio" value="{{ objPar.sValue }}" {{? objPar.bChecked }} checked {{?}} /><span>{{? !isNullOrEmpty(objPar.sImgSrc) }}<img src="{{ objPar.sImgSrc }}" alt="Radio icon">{{?}}            {{ objPar.sText }}</span></label></p>';
var RankImageItemTemplate = '<img         class="{{ objPar.css }}"         style="{{ objPar.style }}"        src="{{ getRankSrcByTLP(objPar.rank) }}"         alt="{{ getRankDescByTLP(objPar.rank, \'tier\') }} icon"         title="{{ getRankDescByTLP(objPar.rank, \'tier division - points LP\') }}">';
var RoleImageItemTemplate = '<img class="{{ objPar.css }}" src="{{ getRoleIcon(objPar.iRole) }}" alt="{{ babelEnum("RoleType", objPar.iRole) }} icon" title="{{ babelEnum("RoleType", objPar.iRole) }}" />';
var RuneImageItemTemplate = '<img src="{{ GetRuneIconById(objPar.id) }}"     alt="{{ GetRuneNameById(objPar.id) }} icon"     class="{{ objPar.css }} tooltipped"     data-position="top" data-tooltip="{{ GetRuneShortDescById(objPar.id) }}">';
var SummonerImageItemTemplate = '{{? objPar.bNavigate }}<a style="cursor:pointer;" {{* getSummonerNavigations(objPar.summoner) }}>{{?}}<img class="{{ objPar.css }}"         style="{{ objPar.style }}"         title="{{ objPar.bNavigate ? babel("base.viewsummonernameprofile", null, { SummonerName: objPar.summoner.sName }) : babel("base.summonernameicon", null, { SummonerName: objPar.summoner.sName }) }}"         src="{{ getUrlProfileIcon(null, null, objPar.summoner) }}"         alt="{{ objPar.summoner.sName }} icon" />{{? objPar.bNavigate }}</a>{{?}}';
var TeamImageItemTemplate = '{{? objPar.bNavigate }}<a class="{{ objPar.wrapperCss }}" style="cursor:pointer;" {{* getTeamNavigations(objPar.team) }}>{{?}}<img class="{{ objPar.css }}"         style="{{ objPar.style }}"         title="{{ objPar.bNavigate ? babel("base.viewteamnameprofile", null, { TeamName: objPar.team.sName }) : babel("base.teamnameicon", null, { SummonerName: objPar.team.sName }) }}"         src="{{ getTeamLogoLinkById(objPar.team.sIcon || objPar.team.iIcon) }}"         alt="{{ objPar.team.sName }} icon" />{{? objPar.bNavigate }}</a>{{?}}';
var EditTournamentRowPhaseItemTemplate = '<div class="row"><div class="col s12"><span>Phase {{ objPar.iPhase }}</span></div><div class="input-field col s12"><select><option value="" disabled selected>Choose your option</option><option value="1">Girone (double round robin)</option><option value="2">Eliminazione diretta</option></select><label>Phase type</label></div><div class="input-field col s12"><input id="number_of_groups" type="number" class="validate"><label for="number_of_groups">Number of groups</label></div><div class="input-field col s12"><input id="participants_for_groups" type="number" class="validate"><label for="participants_for_groups">Participants for group</label></div><div class="input-field col s12"><input id="winners_for_groups" type="number" class="validate"><label for="winners_for_groups">Winners for group</label></div><div class="col s12"><span>Total number of participants<b id="tot_number_of_participants"></b></span></div><div class="col s12"><span>Total number of rounds<b id="tot_number_of_rounds"></b></span></div><div class="col s12"><span>Total number of winners<b id="tot_number_of_participants"></b></span></div></div>';
var ErrorCollapsibleItemTemplate = '<li><div class="collapsible-header" style="padding:8px"><div class="row" style="margin:0;width:100%"><div class="col s2 m1"><label class="truncate">ID</label><span class="truncate">{{ objPar.iId }}</span></div><div class="col s2 m1"><label class="truncate">Count</label><span class="truncate">{{ objPar.iCount }}</span></div><div class="col s8 m6"><label class="truncate">Error</label><span class="truncate">{{ objPar.sError }}</span></div><div class="col s6 m2"><label class="truncate">Browser</label><span class="truncate">{{ objPar.sBrowser }}</span></div><div class="col s6 m2"><label class="truncate">Date</label><span class="truncate">{{ timeShow(objPar.iTimestamp, "dd/MM/yyyy HH:mm") }}</span></div></div></div><div class="collapsible-body" style="word-break: break-all;white-space: pre-line;"><p><b>ID:</b>&ensp;{{ objPar.iId }}<br /><b>Count:</b>&ensp;{{ objPar.iCount }}<br /><b>Page:</b>&ensp;{{ objPar.sPage }}<br /><b>Filename:</b>&ensp;{{ objPar.sFilename }}<br /><b>Line:</b>&ensp;{{ objPar.iLine }}<br /><b>Column:</b>&ensp;{{ objPar.iColumn }}<br /><b>Browser:</b>&ensp;{{ objPar.sBrowser }}<br /><b>OS:</b>&ensp;{{ objPar.sOs }}<br /><b>Date:</b>&ensp;{{ timeShow(objPar.iTimestamp, "dd/MM/yyyy HH:mm") }}<br /><b>Error:</b>&ensp;{{ objPar.sError }}</p><div class="divider"></div><p><b>Message:</b><br />{{ objPar.sMessage }}</p><p><b>Stack:</b><br />{{ objPar.sStack }}</p><p><b>UserAgent:</b><br />{{ objPar.sUserAgent }}</p></div></li>';
var FeedbackCollapsibleItemTemplate = '<li><div class="row collapsible-header" style="margin:0;padding:8px;"><div class="col s2 truncate"><label>ID</label><br />{{ objPar.iFeedbackId }}</div><div class="col s3 truncate"><label>Page</label><br />{{ objPar.sPage }}</div><div class="col s2 truncate"><label>Type</label><br />{{ objPar.sType }}</div><div class="col s3 truncate"><label>Browser</label><br />{{ objPar.sBrowser }}</div><div class="col s2 truncate"><label>Version</label><br />{{ objPar.sVersion }}</div></div><div class="collapsible-body" style="word-break: break-all;white-space: pre-line;"><p><b>Summoner ID:</b>&ensp;{{ objPar.iSummonerId }}</p><p><b>Message:</b><br />{{ objPar.sMessage }}</p></div></li>';
var HomeTournamentHeroCardItemTemplate = '<a {{* getTournamentNavigations(objPar) }}><div class="tournament-card-hero {{ objPar.sFeaturedMainColor }} accent-1"><div class="head" style="background-color: {{ hexColorPalette(objPar.sFeaturedMainColor, \'50\') }};"><i class="fad fa-trophy amber-text left"></i><span>Torneo</span><div class="counter">{{ objPar.summonerPool.length + "/" + objPar.iSize }}</div></div><div class="main"><span class="name">{{ objPar.sName }}</span><span class="desc">{{ objPar.sFeaturedDescription }}</span></div><div class="footer"><div class="participants-preview" style="border-color: {{ hexColorPalette(objPar.sFeaturedMainColor, \'A100\') }};">{{* HomeTournamentGetThreeParticipants(objPar) }}                {{? objPar.summonerPool.length > 4 }}<span class="{{ objPar.sFeaturedMainColor }}-text text-darken-3">+ {{ objPar.summonerPool.length - 4 }}</span>{{?}}</div><span class="host-name" style="background-color: {{ objPar.sFeaturedSecondaryColor }};">{{ !isNullOrEmpty(objPar.sFeaturedUrl) ? objPar.sFeaturedUrl.split("/").pop() : \'\' }}</span></div><div class="host-img"><img src="{{ cdnLink(objPar.sFeaturedImage) }}" /></div></div></a>';
var UserFirstStepsItemTemplate = '<div class="col s12"><h5>{{ babel("home.firststepstitle") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12 steps"><div onclick="{{ !objPar.bRegisterComplete && !objPar.bRegisterLocked ? getPageOnclick(\'SearchSummoner\', \'Register\') : \'\' }}" class="step {{ objPar.bRegisterComplete ? \'completed\' : objPar.bRegisterLocked ? \'locked\' : \'hoverable-light waves-effect\' }}"><div>{{? objPar.bRegisterComplete }}<i class="fad fa-check orange-text"></i>{{?}}                            {{? objPar.bRegisterLocked }}<i class="fad fa-lock grey-text grey lighten-4"></i>{{?}}                            {{? !objPar.bRegisterComplete && !objPar.bRegisterLocked }}<i class="fad fa-door-open green-text green lighten-5"></i>{{?}}</div><h5><b>{{ babel("base.register") }}</b></h5><p>{{ objPar.bRegisterComplete ? babel("base.completed") : babel("home.stepregister") }}</p></div><i class="fad fa-angle-right {{ objPar.bRegisterComplete ? \'teal-text text-accent-4\' : \'grey-text\' }}"></i><div onclick="{{ !objPar.bCompileCvComplete && !objPar.bCompileCvLocked ? getPageOnclick(\'Curriculum\') : \'\' }}" class="step {{ objPar.bCompileCvComplete ? \'completed\' : objPar.bCompileCvLocked ? \'locked\' : \'hoverable-light waves-effect\' }}"><div>{{? objPar.bCompileCvComplete }}<i class="fad fa-check orange-text"></i>{{?}}                            {{? objPar.bCompileCvLocked }}<i class="fad fa-lock grey-text grey lighten-4"></i>{{?}}                            {{? !objPar.bCompileCvComplete && !objPar.bCompileCvLocked }}<i class="fad fa-id-badge blue-text blue lighten-5"></i>{{?}}</div><h5><b>{{ babel("base.compilecv") }}</b></h5><p>{{ objPar.bCompileCvComplete ? babel("base.completed") : babel("home.stepcompilecv") }}</p></div><i class="fad fa-angle-right {{ objPar.bCompileCvComplete ? \'teal-text text-accent-4\' : \'grey-text\' }}"></i><div {{? !objPar.bFindTeamComplete && !objPar.bFindTeamLocked }} onclick="showModalFindTeam()" {{?}} class="step {{ objPar.bFindTeamComplete ? \'completed\' : objPar.bFindTeamLocked ? \'locked\' : \'hoverable-light waves-effect\' }}"><div>{{? objPar.bFindTeamComplete }}<i class="fad fa-check orange-text"></i>{{?}}                            {{? objPar.bFindTeamLocked }}<i class="fad fa-lock grey-text grey lighten-4"></i>{{?}}                            {{? !objPar.bFindTeamComplete && !objPar.bFindTeamLocked }}<i class="fad fa-users amber-text amber lighten-5"></i>{{?}}</div><h5><b>{{ babel("base.findateam") }}</b></h5><p>{{ objPar.bFindTeamComplete ? babel("base.completed") : babel("home.stepfindteam") }}</p></div></div></div></div></div></div>';
var InviteSummonerSearchResultsSummonerItemTemplate = '<li id="misSummonerResult{{ objPar.iSummonerId }}" class="collection-item waves-effect" onclick="misSelectSummoner({{ objPar.iSummonerId }}, \'{{ objPar.sName }}\')"><i title="{{ babel("base.selected") }}" class="fad fa-check-circle selected teal-text"></i>{{* getTemplateHtml(SummonerImageItemTemplate, { css: \'profile\', summoner: objPar }) }}<p><span class="name">{{* getTemplateHtml(FlagImageItemTemplate, { css: \'flag\', id: objPar.sNationality }) }}{{ objPar.sName }}</span><span>{{ babel("base.follower", objPar.iFollowers == 1 ? \'\' : \'p\') }} {{ objPar.iFollowers }} / {{ babel("base.lastactivity") }} {{ getRelativeTime(objPar.iRevisionDate) }}</span></p>{{* getTemplateHtml(RankImageItemTemplate, { css: \'rank\', rank: objPar.soloRank }) }}    {{* getTemplateHtml(RankImageItemTemplate, { css: \'rank\', rank: objPar.flexRank }) }}</li>';
var Modal_InviteSummonerItemTemplate = '<div id="{{ objPar.sId }}" class="modal"><div class="modal-content"><div id="misRowSummoner"><div class="row"><div class="col s12"><h5>{{ babel("base.choosesummonertoinvite") }}</h5></div><div class="col s12 input-field"><input id="misSummonerName" type="text" style="width: calc(100% - 120px);" tabindex="1"><label for="misSummonerName">{{ babel("base.summonername") }}</label><a onclick="misSearchSummoner()" class="misbtnsearchsummoner waves-effect btn right" tabindex="2">{{ babel("base.search") }}<div class="progress dnone"><div class="indeterminate"></div></div></a></div></div><div class="row misSummInfo"></div></div><div id="misRowTeam"><div class="row"><div class="col s12"><h5>{{ babel("base.chooseteamtoinvite") }}</h5></div></div></div><div id="misRowRole"><div class="row"><div class="col s12"><h5>{{ babel("base.chooseroletoinvite") }}</h5></div></div></div><div class="row"><div class="col s12"><a onclick="misBtnConfirmInvite()" class="btn right">{{ babel("base.invite") }}</a></div></div>{{? !isNullOrEmpty(objPar.sTeamLink) }}<div class="divider"></div><div class="row nmb"><div class="col s12"><p>{{ babel("base.linktoteamprofile") }}:                    &nbsp;<code style="background-color: #eee;padding: 4px 8px;border-radius: 4px;word-break: break-word;user-select: all;-webkit-user-select: all;">{{ objPar.sTeamLink }}</code></p></div></div>{{?}}</div></div>';
var MatchCompactBodyItemTemplate = '<div class="row" style="margin: 0px;padding: 12px 16px 24px;"><div class="col s12"><span class="truncate center"><label>{{ timeShow(objPar.gameCreation, \'MMM dd\') }}&emsp;&emsp;{{ timeShow(objPar.gameCreation, \'HH:mm - \') }}{{ timeShow(objPar.gameCreation + (objPar.gameDuration * 1000), \'HH:mm\') }}&emsp;&emsp;{{ timeShow(new Date(objPar.gameDuration * 1000), \'mmm sss\') }}</label></span></div><div class="col s12"><div class="match-compact"><div class="blue-team team-stats blue lighten-4"><div title="{{ babel("base.goldearned") }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-gold.png\') }}" alt="gold icon" /><span>{{ objPar.iGoldEarnedTeam1 }}</span></div><div title="{{ babel("base.kill",\'p\') }} / {{ babel("base.death",\'p\') }} / {{ babel("base.assist",\'p\') }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-kills.png\') }}" alt="Kills icon" /><span>{{ objPar.iKillsTeam1 }} / {{ objPar.iDeathsTeam1 }} / {{ objPar.iAssistsTeam1 }}</span></div><div title="{{ babel("base.dragonskilled") }}"><div class="obj-icons drake" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="dragon icon"></div><span>{{ objPar.teamCollection[0].dragonKills }}</span></div><div title="{{ babel("base.riftheraldskilled") }}"><div class="obj-icons herald" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="herald icon"></div><span>{{ objPar.teamCollection[0].riftHeraldKills }}</span></div><div title="{{ babel("base.baronskilled") }}"><div class="obj-icons baron" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="baron icon"></div><span>{{ objPar.teamCollection[0].baronKills + objPar.teamCollection[0].vilemawKills }}</span></div><div title="{{ babel("base.towersdestroyed") }}"><div class="obj-icons tower" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="tower icon"></div><span>{{ objPar.teamCollection[0].towerKills }}</span></div><div title="{{ babel("base.inhibitorsdestroyed") }}"><div class="obj-icons inhibitor" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="inhibitor icon"></div><span>{{ objPar.teamCollection[0].inhibitorKills }}</span></div></div><div class="red-team team-stats red lighten-4"><div title="{{ babel("base.goldearned") }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-gold.png\') }}" alt="gold icon" /><span>{{ objPar.iGoldEarnedTeam2 }}</span></div><div title="{{ babel("base.kill",\'p\') }} / {{ babel("base.death",\'p\') }} / {{ babel("base.assist",\'p\') }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-kills.png\') }}" alt="Kills icon" /><span>{{ objPar.iKillsTeam2 }} / {{ objPar.iDeathsTeam2 }} / {{ objPar.iAssistsTeam2 }}</span></div><div title="{{ babel("base.dragonskilled") }}"><div class="obj-icons drake" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="dragon icon"></div><span>{{ objPar.teamCollection[1].dragonKills }}</span></div><div title="{{ babel("base.riftheraldskilled") }}"><div class="obj-icons herald" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="herald icon"></div><span>{{ objPar.teamCollection[1].riftHeraldKills }}</span></div><div title="{{ babel("base.baronskilled") }}"><div class="obj-icons baron" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="baron icon"></div><span>{{ objPar.teamCollection[1].baronKills + objPar.teamCollection[1].vilemawKills }}</span></div><div title="{{ babel("base.towersdestroyed") }}"><div class="obj-icons tower" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="tower icon"></div><span>{{ objPar.teamCollection[1].towerKills }}</span></div><div title="{{ babel("base.inhibitorsdestroyed") }}"><div class="obj-icons inhibitor" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="inhibitor icon"></div><span>{{ objPar.teamCollection[1].inhibitorKills }}</span></div></div></div></div><div class="col s12 right-align" style="margin-top: 2rem;margin-bottom: -1rem;"><a class="link" href="https://matchhistory.{{ getRegion() }}.leagueoflegends.com/en/#match-details/{{ objPar.platformId }}/{{ objPar.gameId }}" target="_blank" rel="noopener"><i class="far fa-external-link" style="margin-right: 12px;"></i>{{ babel("base.viewmatchonofficialwebsite") }}</a></div></div><div class="row row-footer grey lighten-4" style="margin:0;padding-top: 6px"><div class="col s12 col-buttons"><a class="btn-flat waves-effect" onclick="{{ getPageOnclick(\'Match\', objPar.gameId) }}"><i class="far fa-glasses left"></i>{{ babel("base.fullmatch") }}</a><a class="btn-flat waves-effect tooltipped" onclick="copyTextToClipboard(\'{{ getPageLink(\'Match\', objPar.gameId) }}\');return false;" data-position="bottom" data-tooltip="{{ babel("base.clicktocopymatchlink") }}"><i class="far fa-link left"></i>{{ babel("base.share") }}</a></div></div>';
var MatchCompactParticipantItemTemplate = '<div class="participant {{ (objPar.teamId == 100 ? "blue" : "red") }}-team"><div class="name">{{? !isNullOrEmpty(objPar.sName) }}<a {{* getSummonerNavigations(objPar) }} title="{{ babel("base.viewsummonernameprofile", null, { SummonerName: objPar.sName }) }}"><span class="link">{{ objPar.sName }}</span></a>{{?}}        {{? isNullOrEmpty(objPar.sName) }}<span>{{ GetChampionNameById(objPar.championId) }} Bot</span>{{?}}                {{? objPar.iTLP != null }}        &emsp;<label title="{{ babel("base.lastrankdetected") }}">{{ getRankDescByTLP(objPar) }}</label>{{?}}</div><div class="participant-champion"><img src="{{ GetChampionIconById(objPar.championId) }}" alt="{{ GetChampionNameById(objPar.championId) }}" title="{{ GetChampionNameById(objPar.championId) }}"><span class="level">{{ objPar.champLevel }}</span></div><div class="participant-stats"><img src="{{ cdnLink("/images/stats_icons/icons-match.png") }}"><span>{{ objPar.kills }}/{{ objPar.deaths }}/{{ objPar.assists }}</span><span>{{ objPar.totalMinionsKilled + " (" + objPar.iCreepScorePerMinute + ")" }}</span><span>{{ mathAbbreviation(objPar.goldEarned) }}</span></div><div class="participant-runes">{{* getTemplateHtml(RuneImageItemTemplate, { id: objPar.perk0, css: "ss-main" }) }}        {{* getTemplateHtml(RuneImageItemTemplate, { id: objPar.perkSubStyle, css: "ss-secondary" }) }}<img class="rune" src="{{ GetSummonerSpellIconById(objPar.spell1Id) }}" title="{{ GetSummonerSpellNameById(objPar.spell1Id) }}" alt="{{ GetSummonerSpellNameById(objPar.spell1Id) }}"><img class="rune" src="{{ GetSummonerSpellIconById(objPar.spell2Id) }}" title="{{ GetSummonerSpellNameById(objPar.spell2Id) }}" alt="{{ GetSummonerSpellNameById(objPar.spell2Id) }}"></div><div class="participant-items"><div>{{* GetItemImgTagById(objPar.item0) }}</div><div>{{* GetItemImgTagById(objPar.item1) }}</div><div>{{* GetItemImgTagById(objPar.item2) }}</div><div>{{* GetItemImgTagById(objPar.item3) }}</div><div>{{* GetItemImgTagById(objPar.item4) }}</div><div>{{* GetItemImgTagById(objPar.item5) }}</div><div>{{* GetItemImgTagById(objPar.item6) }}</div></div><div class="participant-ps tooltipped" data-position="bottom" data-tooltip="{{ babel("base.performancescoredescription") }}" title="{{ objPar.iPerformanceScore }}"><span class="ps-color">{{ mathAbbreviation(objPar.iPerformanceScore) }}</span></div></div>';
var MatchDataItemTemplate = '<div class="matchdata"><div class="row rowtabs"><ul class="tabs transparent"><li class="tab col s6"><a class="active waves-effect" href="#{{ objPar.gameId }}_tab_participants">{{ babel("base.participant",\'p\') }}</a></li><li class="tab col s6"><a class="waves-effect" href="#{{ objPar.gameId }}_tab_statistics">{{ babel("base.statistic",\'p\') }}</a></li></ul></div><div id="{{ objPar.gameId }}_tab_participants"><div class="row participants"><div class="col s12 participants-header"><div class="center header"><div class="champimg"><span>{{ babel("base.champion") }}</span></div><div class="name"><span>{{ babel("base.name") }}</span></div><div class="kda"><span>{{ babel("base.kda") }}</span></div><div class="inventory"><span>{{ babel("base.item", \'p\') }}</span></div><div class="goldcs"><span>{{ babel("base.gold") }}</span></div><div class="perf-score" title="{{ babel("base.performancescore") }}"><span>{{ babel("base.performancescore",\'s\') }}</span></div></div></div></div></div><div id="{{ objPar.gameId }}_tab_statistics" class="tab-stats"><div class="row teams nmb"><div class="col s6 l4"><div class="team left"><div class="card z-depth-0 blue left blur-5">{{? objPar.teamCollection[0].win }}<i class="fad fa-medal" title="{{ babel("base.win") }}"></i>{{?}}</div><span>{{ babel("base.blue",\'u\') }}</span></div></div><div class="col s6 l4 push-l4"><div class="team right"><div class="card z-depth-0 red right blur-5">{{? objPar.teamCollection[1].win }}<i class="fad fa-medal" title="{{ babel("base.win") }}"></i>{{?}}</div><span class="right">{{ babel("base.red",\'u\') }}</span></div></div><div class="col s12 l4 pull-l4 center"><span title="{{ babel("base.teamkill",\'p\') }}" class="grey-text date">{{ babel("base.kill",\'p\') }}</span><br /><span title="{{ babel("base.teamkill",\'p\') }}" class="score">{{ objPar.iKillsTeam1 }} - {{ objPar.iKillsTeam2 }}</span><br /><span title="{{ babel("base.matchdateandlength") }}" class="grey-text date">{{ timeShow(objPar.gameCreation, \'MMM dd, HH:mm\') }} - {{ timeShow(new Date(objPar.gameDuration * 1000), \'mmm sss\') }}</span></div></div><div class="row objectives"><h5>{{ babel("base.objective",\'p\') }}</h5><div class="col s12 m6 blue lighten-4"><table class="centered"><tbody><tr><td colspan="2" title="{{ babel("base.goldearned") }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-gold.png\') }}" alt="gold icon" /><span>{{ objPar.iGoldEarnedTeam1 }}</span></td><td colspan="3" title="{{ babel("base.kill",\'p\') }} / {{ babel("base.death",\'p\') }} / {{ babel("base.assist",\'p\') }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-kills.png\') }}" alt="Kills icon" /><span>{{ objPar.iKillsTeam1 }} / {{ objPar.iDeathsTeam1 }} / {{ objPar.iAssistsTeam1 }}</span></td></tr><tr><td title="{{ babel("base.dragonskilled") }}"><div class="obj-icons drake" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="dragon icon"></div><span>{{ objPar.teamCollection[0].dragonKills }}</span></td><td title="{{ babel("base.riftheraldskilled") }}"><div class="obj-icons herald" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="herald icon"></div><span>{{ objPar.teamCollection[0].riftHeraldKills }}</span></td><td title="{{ babel("base.baronskilled") }}"><div class="obj-icons baron" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="baron icon"></div><span>{{ objPar.teamCollection[0].baronKills + objPar.teamCollection[0].vilemawKills }}</span></td><td title="{{ babel("base.towersdestroyed") }}"><div class="obj-icons tower" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="tower icon"></div><span>{{ objPar.teamCollection[0].towerKills }}</span></td><td title="{{ babel("base.inhibitorsdestroyed") }}"><div class="obj-icons inhibitor" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="inhibitor icon"></div><span>{{ objPar.teamCollection[0].inhibitorKills }}</span></td></tr></tbody></table></div><div class="col s12 m6 red lighten-4"><table class="centered"><tbody><tr><td colspan="3" title="{{ babel("base.kill",\'p\') }} / {{ babel("base.death",\'p\') }} / {{ babel("base.assist",\'p\') }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-kills.png\') }}" alt="Kills icon" /><span>{{ objPar.iKillsTeam2 }} / {{ objPar.iDeathsTeam2 }} / {{ objPar.iAssistsTeam2 }}</span></td><td colspan="2" title="{{ babel("base.goldearned") }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-gold.png\') }}" alt="gold icon" /><span>{{ objPar.iGoldEarnedTeam2 }}</span></td></tr><tr><td title="{{ babel("base.dragonskilled") }}"><div class="obj-icons drake" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="dragon icon"></div><span>{{ objPar.teamCollection[1].dragonKills }}</span></td><td title="{{ babel("base.riftheraldskilled") }}"><div class="obj-icons herald" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="herald icon"></div><span>{{ objPar.teamCollection[1].riftHeraldKills }}</span></td><td title="{{ babel("base.baronskilled") }}"><div class="obj-icons baron" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="baron icon"></div><span>{{ objPar.teamCollection[1].baronKills + objPar.teamCollection[1].vilemawKills }}</span></td><td title="{{ babel("base.towersdestroyed") }}"><div class="obj-icons tower" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="tower icon"></div><span>{{ objPar.teamCollection[1].towerKills }}</span></td><td title="{{ babel("base.inhibitorsdestroyed") }}"><div class="obj-icons inhibitor" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="inhibitor icon"></div><span>{{ objPar.teamCollection[1].inhibitorKills }}</span></td></tr></tbody></table></div></div><div class="row damage-dealt"><h5>{{ babel("base.damagedealttochampions") }}</h5><div class="col s12"><table class="centered"><tbody></tbody></table></div></div><div class="row"><a href="https://matchhistory.{{ getRegion() }}.leagueoflegends.com/en/#match-details/{{ objPar.platformId }}/{{ objPar.gameId }}" class="link" target="_blank" rel="noopener"><i class="far fa-external-link" style="margin-right:8px"></i>{{ babel("base.viewmatchonofficialwebsite") }}</a></div></div><div class="row grey lighten-3" style="margin: 0 -24px;padding: 12px;"><div class="col s12 share-button-link"><div><div id="divLinkShare{{ objPar.gameId }}" class="input-field" style="display:none"><input disabled value="{{ getPageLink(\'Match\', objPar.gameId) }}" id="matchLink" type="text"><label class="active" for="matchLink">{{ babel("base.matchlink") }}</label></div></div><a onclick="copyTextToClipboard(\'{{ getPageLink(\'Match\', objPar.gameId) }}\');$(\'#divLinkShare{{ objPar.gameId }}\').toggle(\'slide\');return false;" class="btn-flat waves-effect tooltipped" data-position="bottom" data-tooltip="{{ babel("base.clicktocopymatchlink") }}" target="_blank"><i class="far fa-link left"></i>{{ babel("base.share") }}</a></div></div></div>';
var MatchDataPageItemTemplate = '<div class="row"><div class="col s12"><h5>{{ babel("base.objective",\'p\') }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row teams"><div class="col s6 l4"><div class="team left"><div class="card z-depth-0 blue left blur-5">{{? objPar.teamCollection[0].win }}<i class="fad fa-medal"></i>{{?}}</div><span>{{ babel("base.blue",\'u\') }}</span></div></div><div class="col s6 l4 push-l4"><div class="team right"><div class="card z-depth-0 red right blur-5">{{? objPar.teamCollection[1].win }}<i class="fad fa-medal"></i>{{?}}</div><span class="right">{{ babel("base.red",\'u\') }}</span></div></div><div class="col s12 l4 pull-l4 center"><span title="{{ babel("base.teamkill",\'p\') }}" class="grey-text date">{{ babel("base.kill",\'p\') }}</span><br /><span title="{{ babel("base.teamkill",\'p\') }}" class="score">{{ objPar.iKillsTeam1 }} - {{ objPar.iKillsTeam2 }}</span><br /><span title="{{ babel("base.matchdateandlength") }}" class="grey-text date">{{ timeShow(objPar.gameCreation, \'MMM dd, HH:mm\') }} - {{ timeShow(new Date(objPar.gameDuration * 1000), \'mmm sss\') }}</span></div></div><div class="row objectives"><div class="col s12 m6 blue lighten-4"><table class="centered"><tbody><tr><td colspan="2" title="{{ babel("base.goldearned") }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-gold.png\') }}" alt="gold icon" /><span>{{ objPar.iGoldEarnedTeam1 }}</span></td><td colspan="3" title="{{ babel("base.kill",\'p\') }} / {{ babel("base.death",\'p\') }} / {{ babel("base.assist",\'p\') }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-kills.png\') }}" alt="Kills icon" /><span>{{ objPar.iKillsTeam1 }} / {{ objPar.iDeathsTeam1 }} / {{ objPar.iAssistsTeam1 }}</span></td></tr><tr><td title="{{ babel("base.dragonskilled") }}"><div class="obj-icons drake" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="dragon icon"></div><span>{{ objPar.teamCollection[0].dragonKills }}</span></td><td title="{{ babel("base.riftheraldskilled") }}"><div class="obj-icons herald" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="herald icon"></div><span>{{ objPar.teamCollection[0].riftHeraldKills }}</span></td><td title="{{ babel("base.baronskilled") }}"><div class="obj-icons baron" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="baron icon"></div><span>{{ objPar.teamCollection[0].baronKills + objPar.teamCollection[0].vilemawKills }}</span></td><td title="{{ babel("base.towersdestroyed") }}"><div class="obj-icons tower" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="tower icon"></div><span>{{ objPar.teamCollection[0].towerKills }}</span></td><td title="{{ babel("base.inhibitorsdestroyed") }}"><div class="obj-icons inhibitor" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="inhibitor icon"></div><span>{{ objPar.teamCollection[0].inhibitorKills }}</span></td></tr></tbody></table></div><div class="col s12 m6 red lighten-4"><table class="centered"><tbody><tr><td colspan="3" title="{{ babel("base.kill",\'p\') }} / {{ babel("base.death",\'p\') }} / {{ babel("base.assist",\'p\') }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-kills.png\') }}" alt="Kills icon" /><span>{{ objPar.iKillsTeam2 }} / {{ objPar.iDeathsTeam2 }} / {{ objPar.iAssistsTeam2 }}</span></td><td colspan="2" title="{{ babel("base.goldearned") }}"><img src="{{ cdnLink(\'/images/stats_icons/icon-team-gold.png\') }}" alt="gold icon" /><span>{{ objPar.iGoldEarnedTeam2 }}</span></td></tr><tr><td title="{{ babel("base.dragonskilled") }}"><div class="obj-icons drake" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="dragon icon"></div><span>{{ objPar.teamCollection[1].dragonKills }}</span></td><td title="{{ babel("base.riftheraldskilled") }}"><div class="obj-icons herald" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="herald icon"></div><span>{{ objPar.teamCollection[1].riftHeraldKills }}</span></td><td title="{{ babel("base.baronskilled") }}"><div class="obj-icons baron" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="baron icon"></div><span>{{ objPar.teamCollection[1].baronKills + objPar.teamCollection[1].vilemawKills }}</span></td><td title="{{ babel("base.towersdestroyed") }}"><div class="obj-icons tower" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="tower icon"></div><span>{{ objPar.teamCollection[1].towerKills }}</span></td><td title="{{ babel("base.inhibitorsdestroyed") }}"><div class="obj-icons inhibitor" style="background: url({{ urlLoLSquareCDN }}/images/stats_icons/right_icons.png);" alt="inhibitor icon"></div><span>{{ objPar.teamCollection[1].inhibitorKills }}</span></td></tr></tbody></table></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("base.participant",\'p\') }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row participants"><div class="col s12 participants-header"><div class="center header"><div class="champimg"><span>{{ babel("base.champion") }}</span></div><div class="name"><span>{{ babel("base.name") }}</span></div><div class="kda"><span>{{ babel("base.kda") }}</span></div><div class="inventory"><span>{{ babel("base.item",\'p\') }}</span></div><div class="goldcs"><span>{{ babel("base.gold") }}</span></div><div class="perf-score" title="{{ babel("base.performancescore") }}"><span>{{ babel("base.performancescore",\'s\') }}</span></div></div></div></div></div></div></div></div><div class="row"><div class="col s12"><h5>{{ babel("base.damagedealttochampions") }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row damage-dealt"><div class="col s12"><table class="centered"><tbody></tbody></table></div></div></div></div></div></div><div class="row"><div class="col s12 right-align"><a class="link" href="https://matchhistory.{{ getRegion() }}.leagueoflegends.com/en/#match-details/{{ objPar.platformId }}/{{ objPar.gameId }}" target="_blank" rel="noopener"><i class="far fa-external-link" style="margin-right: 12px;"></i>{{ babel("base.viewmatchonofficialwebsite") }}</a></div></div><div class="row"><div class="col s12 share-button-link"><div><div id="divLinkShare" class="input-field" style="display:none"><input disabled value="{{ getPageLink(\'Match\', objPar.gameId) }}" id="matchLink" type="text"><label class="active" for="matchLink">{{ babel("base.matchlink") }}</label></div></div><a onclick="copyTextToClipboard(\'{{ getPageLink(\'Match\', objPar.gameId) }}\');$(\'#divLinkShare\').toggle(\'slide\');return false;" class="btn-flat waves-effect tooltipped" data-position="bottom" data-tooltip="{{ babel("base.clicktocopymatchlink") }}" target="_blank"><i class="far fa-link left"></i>{{ babel("base.share") }}</a></div></div>';
var MatchDataParticipantItemTemplate = '<div class="col s12 {{ (objPar.teamId == 100 ? "blue" : "red") }} lighten-5"><div class="participant center"><div class="champimg"><img src="{{ GetChampionIconById(objPar.championId) }}" alt="{{ GetChampionNameById(objPar.championId) }}" title="{{ GetChampionNameById(objPar.championId) }}"><span class="level">{{ objPar.champLevel }}</span></div><div class="row runesspells"><div class="col s6">{{* getTemplateHtml(RuneImageItemTemplate, { id: objPar.perk0 }) }}</div><div class="col s6">{{* getTemplateHtml(RuneImageItemTemplate, { id: objPar.perkSubStyle }) }}</div><div class="col s6"><img src="{{ GetSummonerSpellIconById(objPar.spell1Id) }}" title="{{ GetSummonerSpellNameById(objPar.spell1Id) }}" alt="{{ GetSummonerSpellNameById(objPar.spell1Id) }}"></div><div class="col s6"><img src="{{ GetSummonerSpellIconById(objPar.spell2Id) }}" title="{{ GetSummonerSpellNameById(objPar.spell2Id) }}" alt="{{ GetSummonerSpellNameById(objPar.spell2Id) }}"></div></div><div class="name">{{? !isNullOrEmpty(objPar.sName) }}<a {{* getSummonerNavigations(objPar) }} title="{{ babel("base.viewsummonernameprofile", null, { SummonerName: objPar.sName }) }}" class="link"><span class="truncate">{{ objPar.sName }}</span></a>{{?}}            {{? isNullOrEmpty(objPar.sName) }}<span class="truncate">{{ GetChampionNameById(objPar.championId) }} Bot</span>{{?}}            {{? objPar.iTLP != null }}<label class="truncate grey-text text-darken-1" title="{{ babel("base.lastrankdetected") }}">{{ getRankDescByTLP(objPar) }}</label>{{?}}</div><div class="row kda"><div class="col s12 center"><span class="truncate">{{ objPar.kills }}/{{ objPar.deaths }}/{{ objPar.assists }}</span><span>{{ mathKDA(objPar.kills, objPar.deaths, objPar.assists) }}</span></div></div><div class="row inventory"><div class="col">{{* GetItemImgTagById(objPar.item0) }}</div><div class="col">{{* GetItemImgTagById(objPar.item1) }}</div><div class="col">{{* GetItemImgTagById(objPar.item2) }}</div><div class="col">{{* GetItemImgTagById(objPar.item3) }}</div><div class="col">{{* GetItemImgTagById(objPar.item4) }}</div><div class="col">{{* GetItemImgTagById(objPar.item5) }}</div><div class="col">{{* GetItemImgTagById(objPar.item6) }}</div></div><div class="row goldcs"><div class="col s12 center"><span class="truncate" title="{{ babel("base.gold") }}">{{ mathAbbreviation(objPar.goldEarned) }}</span><span class="truncate">{{ objPar.totalMinionsKilled }}<label>{{ babel("base.creepscore",\'su\') }}</label>{{ " " + objPar.iCreepScorePerMinute}}<label>/{{ babel("time.minute",\'s\') }}</label></span></div></div><div class="row perf-score" title="{{ babel("base.performancescore") }}"><div class="col s12 center"><span class="ps-color">{{ mathAbbreviation(objPar.iPerformanceScore) }}</span></div></div></div></div>';
var MyTeams_NewTeamItemTemplate = '<div class="col s12 m4"><div class="card addteam grey lighten-2"><a class="waves-effect" href="{{ getPageLink(\'SearchTeam\') }}" onclick="navigate(\'SearchTeam\'); return false;"><div class="card-content center"><i class="fad fa-search-plus blue-grey-text"></i><br /><span class="blue-grey-text text-darken-2">{{ babel("base.searchteam") }}</span></div></a><div class="divider grey lighten-1"></div><a class="waves-effect" href="{{ getPageLink(\'EditTeam\') }}" onclick="navigate(\'EditTeam\'); return false;"><div class="card-content center"><i class="fad fa-users-medical blue-grey-text"></i><br /><span class="blue-grey-text text-darken-2">{{ babel("base.createteam") }}</span></div></a></div></div>';
var MyTeams_TeamCardItemTemplate = '<div class="card card-team {{ classColorPalette(objPar.sColor) }} white-text" style="background-image: {{ backgroundTeam(objPar.sColor) }};"><div class="card-content"><a class="team-tag" {{* getTeamNavigations(objPar) }}>{{* getTemplateHtml(FlagImageItemTemplate, { css:\'team-flag\', id: objPar.sNationality }) }}            {{ objPar.sTag }}</a><a class="team-name">{{ objPar.sName }}</a>{{* getTemplateHtml(TeamImageItemTemplate, { wrapperCss:\'team-icon\', team: objPar, bNavigate: true }) }}                {{? imOwner(objPar) }}<a title="{{ babel("editteam.pagetitle") }}" href="{{ getPageLink(\'EditTeam\', objPar.iTeamId) }}" onclick="navigate(\'EditTeam\',\'{{ objPar.iTeamId }}\');return false;" class="btn-floating halfway-fab waves-effect white-text {{ classColorPalette(objPar.sColor) }} accent-3"><i class="far fa-pen"></i></a>{{?}}</div></div>';
var TicketInviteItemTemplate = '<div class="ticket {{ objPar.team.iTeamId }}"><div class="head {{ classColorPalette(objPar.team.sColor) }}" style="background-image: {{ backgroundTeam(objPar.team.sColor) }};">{{* getTemplateHtml(FlagImageItemTemplate, { css:\'flagimg\', id: objPar.team.sNationality }) }}<span class="truncate {{? (textColorFromHex(objPar.team.sColor) == "FFF") }}white-text{{?}}">{{ objPar.team.sTag }}</span>{{* getTemplateHtml(TeamImageItemTemplate, { css:\'teamlogo\', team: objPar.team }) }}</div><div class="rip"><div></div></div><div class="body"><div><label>{{ timeShow(objPar.team.junctionData.creationDate, \'dd/MM/yyyy\') }}</label>{{? objPar.bInvite }}<i title="{{ babel("myteams.teaminvite") }}" class="fad fa-ticket blue-grey-text"></i>{{?}}            {{? objPar.bJoinRequest }}<i title="{{ babel("myteams.summonerjoinrequest") }}" class="fad fa-envelope blue-grey-text"></i>{{?}}                        {{* getTemplateHtml(RoleImageItemTemplate, { css: "role-img", iRole: objPar.team.junctionData.role }) }}</div><div><label class="rank-desc">{{ babel("base.teamrank") }}</label>{{* getTemplateHtml(RankImageItemTemplate, { css:\'rank-img\', rank: objPar.team.rank }) }}</div><div>{{? objPar.bInvite }}<p class="truncate">{{ babel("myteams.youhaveinvite") }}:</p>{{?}}            {{? objPar.bJoinRequest }}<p>{{ babel("myteams.yourequestedjoin") }}:</p>{{?}}<a class="link" {{* getTeamNavigations(objPar.team) }}><span title="{{ babel("base.viewteamnameprofile", null, { TeamName: objPar.team.sName }) }}">{{ objPar.team.sName }}</span></a></div></div><div class="tail">{{? objPar.bInvite }}<a onclick="MyTeamsCallAcceptInvite({{ objPar.team.iTeamId }})" title="{{ babel("myteams.jointeam") }}" class="waves-effect btn-flat"><i class="far fa-check left green-text"></i>{{ babel("base.accept") }}</a><a onclick="MyTeamsCallDeclineInvite({{ objPar.team.iTeamId }})" title="{{ babel("myteams.declineinvite") }}" class="waves-effect btn-flat"><i class="far fa-times left red-text"></i>{{ babel("base.decline") }}</a>{{?}}        {{? objPar.bJoinRequest }}<a onclick="MyTeamsCallCancelJoin({{ objPar.team.iTeamId }})" title="{{ babel("myteams.canceljoin") }}" class="waves-effect btn-flat"><i class="far fa-times left red-text"></i>{{ babel("base.cancel") }}</a>{{?}}</div></div>';
var ReportsCardReportItemTemplate = '<div id="row-report-{{ objPar.iReportId }}" class="row row-report"><div class="col s12"><div class="card red lighten-5"><div class="card-content"><div class="row"><div class="col s12"><div class="col s12 m6"><p><b>ID:</b>{{ objPar.iReportId }}</p></div><div class="col s12 m6 right-align"><p><b>Date:</b>{{ timeShow(objPar.dtDate,\'yyyy/MM/dd HH:mm:ss\') }}</p></div><div class="col s12 m6">{{? objPar.iTargetType == EntityType.Team }}<p><b>Type:</b><a target="_blank" href="{{ getTeamPageLink({ iTeamId: objPar.iTextId }) }}">Team</a></p>{{?}}                            {{? objPar.iTargetType != EntityType.Team }}<p><b>Type:</b>{{ getDescriptionFromEnum(objPar.iTargetType, EntityType) }}</p>{{?}}</div><div class="col s12 m6 right-align"><p><b>Reason:</b>{{ getDescriptionFromEnum(objPar.iCategoryType, ReportCategory) }}</p></div><div class="col s12"><p><b>Original text:</b></p><p>{{ objPar.sOriginalText }}</p></div><div class="col s12"><p><b>Current text:</b></p><p>{{ objPar.sCurrentText }}</p></div>{{? !isNullOrEmpty(objPar.sComment) }}<div class="col s12"><p><b>Message:</b></p><p>{{ objPar.sComment }}</p></div>{{?}}</div></div></div></div></div><div class="col s12 col-buttons"><a onclick="ReportActionIgnoreReport({{ objPar.iReportId }})" class="btn-large grey lighten-3 black-text left">Ignore</a><a onclick="ReportActionAcceptReport({{ objPar.iReportId }})" class="btn-large red lighten-3 black-text">Accept</a></div></div>';
var ReportsCardValidationItemTemplate = '<div id="row-validation-{{ objPar.iTextId }}" class="row row-validation"><div class="col s12"><div class="card blue lighten-5"><div class="card-content"><div class="row"><div class="col s12"><div class="col s12 m6"><p><b>ID:</b>{{ objPar.iTextId }}</p></div><div class="col s12 m6 right-align"><p><b>Date:</b>{{ timeShow(objPar.dtDate,\'yyyy/MM/dd HH:mm:ss\') }}</p></div><div class="col s12"><p><b>Text content:</b></p><p>{{ objPar.sText }}</p></div></div></div></div></div></div><div class="col s12 col-buttons"><a onclick="ReportActionApproveText({{ objPar.iTextId }})" class="btn-large green lighten-3 black-text">Approve</a><a onclick="ReportActionRemoveText({{ objPar.iTextId }})" class="btn-large red lighten-3 black-text left">Remove</a></div></div>';
var SearchMemberListItemItemTemplate = '<li class="collection-item"><div>{{* getTemplateHtml(SummonerImageItemTemplate, { css: \'member-icon\', summoner: objPar, bNavigate: true }) }}</div><div class="member-info"><div style="display: grid;"><a class="link" {{* getSummonerNavigations(objPar) }}><span class="member-name truncate" title="{{ babel("base.viewsummonernameprofile", null, { SummonerName: objPar.sName }) }}">{{ objPar.sName }}</span></a></div><div class="roles">{{* getTemplateHtml(RoleImageItemTemplate, { iRole: objPar.junctionData.iPrimaryRole }) }}            {{* getTemplateHtml(RoleImageItemTemplate, { iRole: objPar.junctionData.iSecondaryRole }) }}            {{* getTemplateHtml(FlagImageItemTemplate, { css: \'member-flag\', id: objPar.junctionData.sNationality }) }}</div></div><div class="hide-on-med-and-down">{{* getBadgesSchedule(objPar.junctionData) }}</div><div class="hide-on-med-and-down"><span class="new badge" data-badge-caption="{{ babel("base.team", objPar.teamCount == 1 ? \'\' : \'p\') }}">{{ objPar.teamCount }}</span><span class="new badge" data-badge-caption="{{ babel("base.follower", objPar.iFollowers == 1 ? \'\' : \'p\') }}">{{ objPar.iFollowers }}</span></div><div class="member-ranksolo">{{* getTemplateHtml(RankImageItemTemplate, { css: \'member-rank\', rank: objPar.soloRank }) }}</div><div class="member-rankflex">{{* getTemplateHtml(RankImageItemTemplate, { css: \'member-rank\', rank: objPar.flexRank }) }}</div><div class="member-extra hide-on-large-only">{{* getBadgesSchedule(objPar.junctionData) }}<span class="new badge" data-badge-caption="{{ babel("base.team", objPar.teamCount == 1 ? \'\' : \'p\') }}">{{ objPar.teamCount }}</span><span class="new badge" data-badge-caption="{{ babel("base.follower", objPar.iFollowers == 1 ? \'\' : \'p\') }}">{{ objPar.iFollowers }}</span></div><div><a class="btn-flat dropdown-trigger" data-target="ddSearchedMember_{{ objPar.iSummonerId }}"><i class="far fa-ellipsis-v"></i></a><ul id="ddSearchedMember_{{ objPar.iSummonerId }}" class="dropdown-content"><li><a {{* getSummonerNavigations(objPar) }}><i class="far fa-portrait left"></i>{{ babel("base.viewprofile") }}</a></li>{{? objPar.bBlockInvites }}<li class="disabled"><a>{{ babel("summoner.summonerblockinvitations") }}</a></li>{{?}}            {{? !objPar.bBlockInvites }}<li><a onclick="SearchMemberInviteSummoner({{ objPar.iSummonerId }});"><i class="far fa-ticket left"></i>{{ babel("base.invite") }}</a></li>{{?}}</ul></div></li>';
var SearchMemberListItemHeaderItemTemplate = '<li class="collection-item"><div><label>{{ babel("base.icon") }}</label></div><div class="member-info"><label>{{ babel("base.nameandmainroles") }}</label></div><div class="hide-on-med-and-down"><label>{{ babel("base.schedule") }}</label></div><div class="hide-on-med-and-down"><label>{{ babel("base.extra") }}</label></div><div class="hide-on-small-only"><label>{{ babel("queuetypestatistics.ranked_solo") }}</label></div><div class="hide-on-small-only"><label>{{ babel("queuetypestatistics.ranked_flex_5v5") }}</label></div><div><label>{{ babel("base.option",\'p\') }}</label></div><div class="member-rankflex hide-on-med-and-up"><label>{{ babel("base.rank",\'p\') }}</label></div></li>';
var SearchResultsSummonerItemTemplate = '<li class="collection-item"><a class="link" {{* getSummonerNavigations(objPar) }}>{{* getTemplateHtml(SummonerImageItemTemplate, { css: \'profile\', summoner: objPar }) }}        {{* getTemplateHtml(FlagImageItemTemplate, { css: \'flag\', id: objPar.sNationality }) }}<p><span class="name">{{ objPar.sName }}</span><span>{{ babel("base.follower",\'p\') }} {{ objPar.iFollowers }} / {{ babel("base.lastactivity") }} {{ getRelativeTime(objPar.iRevisionDate) }}</span></p>{{* getTemplateHtml(RankImageItemTemplate, { css: \'rank\', rank: objPar.soloRank }) }}        {{* getTemplateHtml(RankImageItemTemplate, { css: \'rank\', rank: objPar.flexRank }) }}</a></li>';
var SearchResultsTeamItemTemplate = '<li class="collection-item"><a class="link" {{* getTeamNavigations(objPar) }}>{{* getTemplateHtml(TeamImageItemTemplate, { css: \'profile\', team: objPar }) }}        {{* getTemplateHtml(FlagImageItemTemplate, { css: \'flag\', id: objPar.sNationality }) }}<p><span class="name">{{ getTeamFullName(objPar) }}</span><span class="">{{ babel("base.follower", \'p\') }} {{ objPar.iFollowers }} / {{ babel("base.lastmatch") }} {{ timeDateHasValue(objPar.dtLastMatch) ? getRelativeTime(objPar.dtLastMatch) : babel("base.never") }}</span></p>{{* getTemplateHtml(RankImageItemTemplate, { css: \'rank\', rank: objPar.rank }) }}</a></li>';
var SearchTeamListItemItemTemplate = '<li id="searchedTeam_{{ objPar.iTeamId }}" class="collection-item"><div>{{* getTemplateHtml(TeamImageItemTemplate, { css: \'team-logo\', team: objPar, bNavigate: true }) }}</div><div class="team-info"><a class="link" {{* getTeamNavigations(objPar) }}><span class="team-tag">{{ objPar.sTag }}</span>{{* getTemplateHtml(FlagImageItemTemplate, { css: \'team-flag\', id: objPar.sNationality }) }}<br><span class="team-name">{{ objPar.sName }}</span></a></div><div class="hide-on-med-and-up"></div><div>{{* getTemplateHtml(RankImageItemTemplate, { css: \'team-rank\', rank: objPar.rank }) }}</div><div class="hide-on-small-only"><span class="new badge" data-badge-caption="{{ babel("base.member", objPar.teamMembers.length == 1 ? \'\' : \'p\') }}">{{ objPar.teamMembers.length }}</span><span class="new badge" data-badge-caption="{{ babel("base.follower", objPar.iFollowers == 1 ? \'\' : \'p\') }}">{{ objPar.iFollowers }}</span></div><div><a class="btn-flat dropdown-trigger" data-target="ddSearchedTeam_{{ objPar.iTeamId }}"><i class="far fa-ellipsis-v"></i></a><ul id="ddSearchedTeam_{{ objPar.iTeamId }}" class="dropdown-content">{{* SearchTeamOptionsLI(objPar.iTeamId) }}</ul></div></li>';
var SearchTeamListItemHeaderItemTemplate = '<li class="collection-item"><div><label>{{ babel("base.logo") }}</label></div><div class="team-info"><label>{{ babel("base.tagandname") }}</label></div><div class="hide-on-med-and-up"></div><div><label>{{ babel("base.rank") }}</label></div><div class="hide-on-small-only"><label>{{ babel("base.extra") }}</label></div><div><label>{{ babel("base.option",\'p\') }}</label></div></li>';
var SearchTournamentListItemItemTemplate = '<a {{* getTournamentNavigations(objPar) }} class="collection-item"><div class="icon"><img class="tournament-icon" src="{{ getTournamentIconLinkById(objPar.iIcon) }}" /></div><div class="name"><span>{{ objPar.sName }}<label>{{ objPar.bStarted ? \' - \' + babel("base.started") : \'\' }}</label></span></div><div class="date"><span>{{ timeDateHasValue(objPar.dtDate) ? timeShow(objPar.dtDate, \'MMMM dd\') : "" }}</span></div><div class="size"><span>{{ TournamentGetParticipantCount(objPar) }}/{{ objPar.iSize }}</span></div><div class="host"><label class="truncate">{{ babel("tournament.host") }}</label>{{* getTemplateHtml(SummonerImageItemTemplate, { summoner: objPar.hostSummoner }) }}<span>{{ objPar.hostSummoner.sName }}</span></div></a>';
var FollowButtonItemTemplate = '<a class="chip {{ objPar.css }} follow hoverable-light waves-effect" onclick="{{ objPar.click }}">{{? objPar.bFollowBack }}<span title="{{ babel("base.thissummonerfollowsyou") }}" class="f">{{ babel("base.followback") }}</span><span class="af">{{ babel("base.friend",\'p\') }}</span>{{?}}    {{? !objPar.bFollowBack }}<span class="f">{{ babel("base.follow") }}</span><span class="af">{{ babel("base.following") }}</span>{{?}}<span class="uf">{{ babel("base.unfollow") }}</span></a>';
var SocialLink_ChipItemTemplate = '<a class="chip social hoverable-light waves-effect" target="_blank" href="{{ objPar.sLink }}" rel="noopener"><i class="left {{ objPar.sCssIcon }}"></i><span class="{{ objPar.sSpanCss }}">{{ objPar.sText }}</span></a>';
var SocialLink_InputItemTemplate = '<div class="input-field col s12"><i class="fab {{ objPar.cssIcon }} prefix"></i><input id="{{ objPar.id }}" type="text" class="validate" style="width: calc(100% - 100px);"><label for="{{ objPar.id }}">{{ objPar.description }} {{ babel("base.link",\'l\') }}</label><a onclick="clearInput(\'{{ objPar.id }}\')" class="waves-effect btn-flat right"><i class="far fa-times"></i></a></div>';
var FollowListItemTemplate = '<li id="{{ objPar.sIdPrefix + objPar.iId }}" class="collection-item avatar">{{* objPar.bIsSummoner ? getTemplateHtml(SummonerImageItemTemplate, { summoner: { iSummonerId: objPar.iId, iProfileIconId: objPar.iIcon, sName: objPar.sName }, css: "circle", bNavigate: true }) : \'\' }}    {{* !objPar.bIsSummoner ? getTemplateHtml(TeamImageItemTemplate, { css: "circle", team: objPar }) : \'\' }}    {{? objPar.bIsSummoner }}<a class="link" {{* getSummonerNavigations({ iSummonerId: objPar.iId, sName: objPar.sName }) }}><span class="title" title="{{ babel("base.viewsummonernameprofile", null, { SummonerName: objPar.sName }) }}">{{ objPar.sName }}</span></a>{{?}}    {{? !objPar.bIsSummoner }}<a class="link" {{* getTeamNavigations({ iTeamId: objPar.iId, sTag: objPar.sTag, sName: objPar.sName}) }}><span class="title" title="{{ babel("base.viewsummonernameprofile", null, { SummonerName: objPar.sName }) }}">{{ objPar.sName }}</span></a>{{?}}        {{? (objPar.bBtnFollow && objPar.bIsSummoner) }}<a class="btn right waves-effect" onclick="callFollowSummoner(\'{{ objPar.sCode }}\', {{ objPar.iId }}, {{ objPar.iRegion }}, \'{{ objPar.iId }}\', \'{{ objPar.sIdPrefix + objPar.iId }}\', false);">{{ babel("base.follow") }}</a>{{?}}    {{? (objPar.bBtnFollow && !objPar.bIsSummoner) }}<a class="btn right waves-effect" onclick="callFollowTeam(\'{{ objPar.sCode }}\', {{ objPar.iId }}, {{ objPar.iRegion }}, \'{{ objPar.iId }}\', \'{{ objPar.sIdPrefix + objPar.iId }}\', false);">{{ babel("base.follow") }}</a>{{?}}        {{? (objPar.bBtnUnfollow && objPar.bIsSummoner) }}<a class="btn right waves-effect" onclick="callUnfollowSummoner(\'{{ objPar.sCode }}\', {{ objPar.iId }}, {{ objPar.iRegion }}, \'{{ objPar.iId }}\', \'{{ objPar.sIdPrefix + objPar.iId }}\', false);">{{ babel("base.unfollow") }}</a>{{?}}    {{? (objPar.bBtnUnfollow && !objPar.bIsSummoner) }}<a class="btn right waves-effect" onclick="callUnfollowTeam(\'{{ objPar.sCode }}\', {{ objPar.iId }}, {{ objPar.iRegion }}, \'{{ objPar.iId }}\', \'{{ objPar.sIdPrefix + objPar.iId }}\', false);">{{ babel("base.unfollow") }}</a>{{?}}<br><label>{{ timeShow(objPar.dtCreationDate, \'dd/MM/yyyy\') }}</label>{{? objPar.iRegion != getRegion(true) }}<span class="new badge" data-badge-caption="" style="float: none;display: inline-block;">{{ getRegionKeyById(objPar.iRegion) }}</span>{{?}}</li>';
var LiveGameChampionStatsItemTemplate = '{{? objPar.iGames > 0 }}<div class="games-champion center"><span class="truncate {{ classTextColor(objPar.fWinrate * 100, "%") }}" title="{{ babel("base.winrate") }}">{{ mathAverage(objPar.fWinrate * 100, 1) }}% {{ babel("base.winrate",\'s\') }}</span><label class="truncate">{{ objPar.iGames }} {{ babel("base.match",objPar.iGames == 1 ? \'\' : \'p\') }}</label></div><div class="kda-champion center"><span class="truncate {{ classTextColor(mathKDA(objPar.fKills, objPar.fDeaths, objPar.fAssists), "kda") }}">{{ mathKDA(objPar.fKills, objPar.fDeaths, objPar.fAssists) }} {{ babel("base.kda") }}</span><span class="truncate" title="{{ babel("base.kill",\'p\') + " / " + babel("base.death",\'p\') + " / " + babel("base.assist",\'p\') }}">{{ mathAverage(objPar.fKills, 1) }} / {{  mathAverage(objPar.fDeaths, 1) }} / {{  mathAverage(objPar.fAssists, 1) }}</span></div>{{?}}{{? objPar.iGames == 0 }}<div id="loader-rank-{{ objPar.iSummonerId }}" class="loader-rank"><label class="truncate center">{{ babel("base.nodata") }}</label></div>{{?}}';
var LiveGameParticipantItemTemplate = '<div class="border-top grey lighten-2"></div><div class="border {{* objPar.liveInfo.iRiotTeamId === 100 ? \'blue\' : \'red\' }}"></div><div class="champion">{{* getTemplateHtml(ChampionImageItemTemplate, { id: objPar.liveInfo.iChampionId }) }}</div><div class="summoner-spells"><img src="{{ GetSummonerSpellIconById(objPar.liveInfo.iSpell1) }}" title="{{ GetSummonerSpellNameById(objPar.liveInfo.iSpell1) }}" alt="{{ GetSummonerSpellNameById(objPar.liveInfo.iSpell1) }}"><img src="{{ GetSummonerSpellIconById(objPar.liveInfo.iSpell2) }}" title="{{ GetSummonerSpellNameById(objPar.liveInfo.iSpell2) }}" alt="{{ GetSummonerSpellNameById(objPar.liveInfo.iSpell2) }}"></div><div class="summoner"><a class="link" {{* getSummonerNavigations(objPar) }} title="{{ babel("base.viewsummonernameprofile", null, { SummonerName : objPar.sName }) }}"><span class="truncate">{{ objPar.sName }}</span><label class="truncate">{{ babel("base.level") }} {{ objPar.iSummonerLevel }}</label></a></div><div class="vertical-divider grey lighten-2"></div><div class="rank">{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.liveInfo.rank }) }}</div><div class="rank-info center"><span class="truncate">{{ getRankDescByTLP(objPar.liveInfo.rank, \'tier division\') }}</span><label class="truncate">{{ getRankDescByTLP(objPar.liveInfo.rank, \'points LP\') }}</label></div><div class="games-rank center"><span class="truncate {{ objPar.liveInfo.rank.iWins + objPar.liveInfo.rank.iLosses >0 ? classTextColor(mathPercentage(objPar.liveInfo.rank.iWins, objPar.liveInfo.rank.iWins + objPar.liveInfo.rank.iLosses), "%") : \'\' }}" title="{{ babel("base.winrate") }}">        {{ mathPercentage(objPar.liveInfo.rank.iWins, objPar.liveInfo.rank.iWins + objPar.liveInfo.rank.iLosses) }}% {{ babel("base.winrate",\'s\') }}</span><label class="truncate">{{ objPar.liveInfo.rank.iWins + objPar.liveInfo.rank.iLosses }} {{ babel("base.game", \'p\') }}</label></div><div class="vertical-divider grey lighten-2"></div>{{? !objPar.bStatsLoaded }}<div id="loader-rank-{{ objPar.iSummonerId }}" class="loader-rank"><div class="progress blue-grey lighten-5"><div class="indeterminate blue-grey lighten-4"></div></div></div>{{?}}{{? objPar.bStatsLoaded && objPar.liveInfo.iGames > 0 }}<div class="games-champion center"><span class="truncate {{ classTextColor(objPar.liveInfo.fWinrate * 100, "%") }}" title="{{ babel("base.winrate") }}">{{ mathAverage(objPar.liveInfo.fWinrate * 100, 1) }}% {{ babel("base.winrate",\'s\') }}</span><label class="truncate">{{ objPar.liveInfo.iGames }} {{ babel("base.game", \'p\') }}</label></div><div class="kda-champion center"><span class="truncate {{ classTextColor(mathKDA(objPar.liveInfo.fKills, objPar.liveInfo.fDeaths, objPar.liveInfo.fAssists), "kda") }}">{{ mathKDA(objPar.liveInfo.fKills, objPar.liveInfo.fDeaths, objPar.liveInfo.fAssists) }} {{ babel("base.kda") }}</span><span class="truncate">{{ mathAverage(objPar.liveInfo.fKills, 1) }} / {{  mathAverage(objPar.liveInfo.fDeaths, 1) }} / {{  mathAverage(objPar.liveInfo.fAssists, 1) }}</span></div>{{?}}{{? objPar.bStatsLoaded && objPar.liveInfo.iGames == 0 }}<div id="loader-rank-{{ objPar.iSummonerId }}" class="loader-rank"><label class="truncate center">{{ babel("base.nodata") }}</label></div>{{?}}<div class="border {{* objPar.liveInfo.iRiotTeamId === 100 ? \'blue\' : \'red\' }} second-row"></div><div class="runes second-row">{{*        var sHtml = "";        if (objPar.liveInfo.iRunes && objPar.liveInfo.iRunes.length > 5)            for (var i = 0;i< 6;i++)                sHtml += getTemplateHtml(RuneImageItemTemplate, { id: objPar.liveInfo.iRunes[i] });        sHtml;    }}</div>';
var Modal_BindSummonerItemTemplate = '<div id="modalBindSummoner" class="modal"><div><div class="modal-media"></div><div class="modal-header"><img src="https://static.lolsquare.com/images/logo/android-chrome-96x96.png"><span class="grey-text">LoLSquare</span><a class="btn-flat waves-effect right modal-close btn-close-modal"><i class="far fa-times"></i></a><div class="steps-counter"><div id="step_counter_1"></div><div id="step_counter_2"></div><div id="step_counter_3"></div><div id="step_counter_4"></div></div></div><div class="modal-content"><div id="mbsStep1" class="row dnone"><div class="col s12 center"><h5><b>{{ babel("summoner.step1title") }}</b></h5></div><div class="col s12"><p>{{ babel("summoner.step1desc1") }}<br>{{ babel("summoner.step1desc2") }}</p></div></div><div id="mbsStep2" class="row dnone"><div class="col s12 center"><h5><b>{{ babel("summoner.step2title") }}</b></h5></div><div class="col s12"><p>{{ babel("summoner.step2desc1") }}<br />{{ babel("summoner.step2desc2") }}</p></div><div class="col s12"><img src="{{ cdnLink("/images/bind_summoner/BindSummonerSettings.png"); }}" /></div><div class="col s12"><img src="{{ cdnLink("/images/bind_summoner/BindSummonerVerification.png"); }}" /></div></div><div id="mbsStep3" class="row dnone"><div class="col s12 center"><h5><b>{{ babel("summoner.step3title") }}</b></h5></div><div class="col s12"><p>{{ babel("summoner.step3desc1") }}<a onclick="mbsCopyBindCode();" class="btn orange waves-effect tooltipped" data-position="right" data-tooltip="{{ babel("base.copytoclipboard") }}" style="margin-left:8px"><i class="far fa-clipboard right"></i><b class="bindcode" style="letter-spacing: 3px;">{{ objPar.sBindCode }}</b></a><br>{{ babel("summoner.step3desc2") }}</p></div><div class="col s12"><video style="width:100%" controls loop><source src="{{ cdnLink(\'/videos/registration.mp4\') }}" type="video/mp4"></video></div><div id="mbsAlert3" class="col s12 dnone"><p class="red-text">{{ babel("summoner.step3err1") }}<br />{{ babel("summoner.step3err2") }}</p></div></div><div id="mbsStep4" class="row dnone"><div class="col s12 center"><h5><b>{{ babel("summoner.step4title") }}</b></h5></div><div class="col s12"><p>{{ babel("summoner.step4desc") }}</p><p class="red-text">{{ babel("summoner.step4err") }}</p></div><div class="col s12 input-field"><input id="mbsPassword" type="password" class="validate"><label for="mbsPassword">{{ babel("base.password") }}</label></div></div><div id="mbsStep5" class="row dnone"><div class="col s12 center"><h5><b>{{ babel("summoner.step5title") }}</b></h5></div><div class="col s12"><p>{{ babel("summoner.step5desc") }}</p></div></div></div><div class="modal-footer"><div id="mbsStep1btns" class="col s12 col-buttons dnone"><a class="btn waves-effect" onclick="mbsGoNextStep()">{{ babel("base.next") }}</a></div><div id="mbsStep2btns" class="col s12 col-buttons dnone"><a class="btn waves-effect" onclick="mbsBtnGetBindCode()">{{ babel("base.next") }}</a><a class="btn waves-effect left" onclick="mbsGoPrevStep()"><i class="far fa-chevron-left"></i></a></div><div id="mbsStep3btns" class="col s12 col-buttons dnone"><a id="mbsBtnVerifyCode" class="btn waves-effect" onclick="mbsBtnVerifyCode()">{{ babel("base.verify") }}</a><a class="btn waves-effect left" onclick="mbsGoPrevStep()"><i class="far fa-chevron-left"></i></a></div><div id="mbsStep4btns" class="col s12 col-buttons dnone"><a class="btn waves-effect" onclick="mbsBtnPasswordConfirm()">{{ babel("base.complete") }}</a><a class="btn waves-effect left" onclick="mbsGoPrevStep()"><i class="far fa-chevron-left"></i></a></div><div id="mbsStep5btns" class="col s12 col-buttons dnone"><a class="btn waves-effect" onclick="mbsCloseAndWelcome()">{{ babel("base.finish") }}</a></div></div></div></div>';
var RankCardItemTemplate = '<div class="col s12"><h5>{{ getQueueDescription(objPar.iQueueType) }}</h5></div><div class="col s12"><div id="card-rank-{{ objPar.iQueueType }}" class="card card-rank"><i class="far fa-angle-down hide-on-med-and-up"           style="padding: 16px;position: absolute;right: 0;"           onclick="$(\'#card-rank-{{ objPar.iQueueType }} .champions\').slideToggle();$(this).toggleClass(\'fa-angle-down\').toggleClass(\'fa-angle-up\');"></i><div class="card-content"><div class="rank">{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar }) }}<span class="truncate">{{ getRankDescByTLP(objPar, \'tier division\') }}</span><span class="truncate">{{ getRankDescByTLP(objPar, \'pointsLP\') }}</span>{{* SummonerRankCardMiniSeriesHtml(objPar.sMiniSeries) }}<span class="truncate games-played">{{ objPar.iWins + objPar.iLosses }} {{ babel("base.gameplayed", (objPar.iWins + objPar.iLosses == 1 ? \'\' : \'p\')) }}</span><span class="truncate win-loss">{{ objPar.iWins }} {{ babel("base.win", objPar.iWins == 1 ? \'\' : \'p\') }} {{ objPar.iLosses }} {{ babel("base.lost", objPar.iLosses == 1 ? \'\' : \'p\') }}</span><span class="truncate">{{ mathPercentage(objPar.iWins, objPar.iWins + objPar.iLosses) }}% {{ babel("base.winrate") }}</span></div><div class="champions">{{* getTemplateHtml(RankCardChampionItemTemplate, objPar.ChampionPlayed1) }}                {{* objPar.ChampionPlayed2 != null ? getTemplateHtml(RankCardChampionItemTemplate, objPar.ChampionPlayed2) : \'\' }}                {{* objPar.ChampionPlayed3 != null ? getTemplateHtml(RankCardChampionItemTemplate, objPar.ChampionPlayed3) : \'\' }}</div></div></div></div>';
var RankCardChampionItemTemplate = '{{? objPar != null }}<div>{{* getTemplateHtml(ChampionImageItemTemplate, { id: objPar.iChampionId }) }}<span class="truncate">{{ GetChampionNameById(objPar.iChampionId) }}</span><span class="truncate center {{ classTextColor(mathKDA(objPar.iKills, objPar.iDeaths, objPar.iAssists), "kda") }}">{{ mathKDA(objPar.iKills, objPar.iDeaths, objPar.iAssists) }} {{ babel("base.kda",\'u\') }}</span><span class="truncate center {{ classTextColor(mathPercentage(objPar.iWins, objPar.iGames), "%") }}" title="{{ babel("base.winrate") }}">{{ mathPercentage(objPar.iWins, objPar.iGames) }}%  {{ babel("base.winrate",\'s\') }}</span><span class="truncate">{{ objPar.iGames }} {{ babel("base.game", objPar.iGames == 1 ? \'\' : \'p\') }}</span><span class="truncate center" title="{{ babel("base.kill",\'p\') + " / " + babel("base.death",\'p\') + " / " + babel("base.assist",\'p\') }}">{{ mathAverage(objPar.iKills, objPar.iGames) }} / {{ mathAverage(objPar.iDeaths, objPar.iGames) }} / {{ mathAverage(objPar.iAssists, objPar.iGames) }}</span><span class="truncate center" title="{{ babel("base.win",\'p\') + " " + babel("base.lost",\'p\') }}">{{ objPar.iWins }}{{ babel("base.win", \'s\') }} {{ objPar.iGames - objPar.iWins }}{{ babel("base.lost", \'s\') }}</span></div>{{?}}{{? objPar == null }}<div class="empty-stats"><label class="truncate">{{ babel("summoner.nochampionstat") }}</label></div>{{?}}';
var RankCardLevelItemTemplate = '<div class="col s12"><h5>{{ babel("summoner.rankcardleveltitle") }}</h5></div><div class="col s12"><div id="card-rank-normal" class="card card-rank"><div class="card-content"><div class="level"><span class="truncate">{{ babel("base.level") }} {{ objPar.iLevel }}</span><span class="truncate">{{ objPar.iWins + objPar.iLosses }} {{ babel("base.gameplayed", objPar.iWins + objPar.iLosses == 1 ? \'\' : \'p\') }}</span><span class="truncate">{{ objPar.iWins }} {{ babel("base.win", objPar.iWins == 1 ? \'\' : \'p\') }} {{ objPar.iLosses }} {{ babel("base.lost", objPar.iLosses == 1 ? \'\' : \'p\') }}</span><span class="truncate" title="{{ babel("base.winrate") }}">{{ mathPercentage(objPar.iWins, objPar.iWins + objPar.iLosses) }}% {{ babel("base.winrate",\'s\') }}</span></div><div class="champions">{{* getTemplateHtml(RankCardChampionItemTemplate, objPar.ChampionPlayed1) }}                {{* getTemplateHtml(RankCardChampionItemTemplate, objPar.ChampionPlayed2) }}                {{* getTemplateHtml(RankCardChampionItemTemplate, objPar.ChampionPlayed3) }}</div></div></div></div>';
var RecentlyPlayedSummonerItemTemplate = '<li class="collection-item avatar">{{* getTemplateHtml(SummonerImageItemTemplate, { css: "circle", summoner: objPar.summoner, bNavigate: true }) }}<div class="row nmb"><div class="col s9 m4"><a class="link" {{* getSummonerNavigations(objPar.summoner) }} title="{{ babel("base.viewsummonernameprofile", null, { SummonerName : objPar.summoner.sName }) }}"><span class="truncate">{{ objPar.summoner.sName }}</span></a><label class="truncate">{{ babel("summoner.lasttimeplayedwith") }}: {{ getRelativeTime(objPar.lLastGameTimestamp) }}</label></div><div class="col s3 m2 center"><label class="truncate">{{ babel("base.game",\'p\') }}</label><span class="truncate">{{ objPar.iGames }}</span></div><div class="col s12 m2 center hide-on-small-only"><label class="truncate">{{ babel("base.win",\'p\') }}</label><span class="truncate">{{ objPar.iWins }}</span></div><div class="col s12 m2 center hide-on-small-only"><label class="truncate">{{ babel("base.lost",\'p\') }}</label><span class="truncate">{{ objPar.iGames - objPar.iWins }}</span></div><div class="col s12 m2 center hide-on-small-only"><label class="truncate">{{ babel("base.winrate",\'s\') }}</label><span class="truncate {{ classTextColor(mathPercentage(objPar.iWins, objPar.iGames), "%") }}">{{ mathPercentage(objPar.iWins, objPar.iGames) }}%</span></div></div></li>';
var SummonerCardItemTemplate = '<div class="card summoner-card">{{* getTemplateHtml(SummonerImageItemTemplate, { css: "summoner-icon", summoner: objPar }) }}<div class="card-content"><div class="info"><div><span class="summoner-name truncate">{{ objPar.sName }}</span>{{* getTemplateHtml(FlagImageItemTemplate, { css:\'flag\', id: objPar.sNationality }) }}                {{* objPar.iPrimaryRole > 0 ? getTemplateHtml(RoleImageItemTemplate, { css: "role", iRole: objPar.iPrimaryRole }) : \'\' }}                {{* objPar.iSecondaryRole > 0 && objPar.iSecondaryRole != objPar.iPrimaryRole ? getTemplateHtml(RoleImageItemTemplate, { css: "role", iRole: objPar.iSecondaryRole }) : \'\' }}</div>{{? objPar.bIsRegistered }}<label class="truncate">{{ babel("summoner.registeredin") }} {{ timeShow(objPar.dtRegistration, \'MMMM yyyy\') }}</label>{{?}}<label class="truncate">{{ babel("base.lastactivity") }} {{ getRelativeTime(objPar.dtLastActivity) }}</label><label class="truncate summoner-level">{{ babel("base.level") }} {{ objPar.iLevel }}{{ !isNullOrEmpty(objPar.sExName) ? " - " + babel("summoner.lastnameused") + ": " + objPar.sExName : \'\' }}</label></div><div class="badges"><span id="btnTabSummonerFollowers" onclick="SummonerGoTabAlt(\'SummonerFollow\', \'SummonerFollowers\');" class="new badge left" data-badge-caption="{{ babel("base.follower", objPar.iFollowers == 1 ? \'\' : \'p\') }}">{{ objPar.iFollowers }}</span><span id="btnTabSummonerFollowing" onclick="SummonerGoTabAlt(\'SummonerFollow\', \'SummonerFollowing\');" class="new badge left" data-badge-caption="{{ babel("base.following", objPar.iFollowing == 1 ? \'\' : \'p\') }}">{{ objPar.iFollowing }}</span></div><div class="actions hide-on-small-only"><label class="labelUpdate">{{ babel("base.lastupdate") }}: {{ babel("base.never") }}</label><a onclick="SummonerUpdate()" class="btnUpdate btn waves-effect"><i class="far fa-sync left"></i><span>{{ babel("base.update") }}</span><div class="progress dnone"><div class="indeterminate"></div></div></a><a onclick="SummonerOpenModalInviteSummoner()" class="btnInvite btn waves-effect dnone">{{ babel("base.invite") }}</a></div></div><div class="row rowtabs grey lighten-3"><div class="col s12"><ul class="tabs transparent"><li id="summonerTabHome" class="tab col"><a class="waves-effect" href="#Home">{{ babel("base.home") }}</a></li><li id="summonerTabMatchlist" class="tab col"><a class="waves-effect" href="#Matchlist">{{ babel("base.matchlist") }}</a></li><li id="summonerTabStatistics" class="tab col"><a class="waves-effect" href="#Statistics">{{ babel("base.statistic",\'p\') }}</a></li><li class="tab col dnone"><a class="waves-effect" href="#SummonerFollow">{{ babel("base.follow",\'p\') }}</a></li><li id="summonerTabLiveGame" class="tab col"><a class="waves-effect" href="#LiveGame">{{ babel("base.livegame") }}</a></li></ul></div></div></div>';
var SummonerMatchItemTemplate = '<li id="match_summoner_{{ objPar.lGameId }}" class="{{ objPar.bScheduled ? "scheduled" : objPar.bRemake ? "remake" : objPar.player.win ? "win" : "loss" }}"><div class="collapsible-header {{ objPar.bScheduled ? "blue-grey" : objPar.bRemake ? "yellow" : objPar.player.win ? "green" : "red" }} lighten-4">{{? !objPar.bScheduled }}<div class="info"><span class="truncate">{{ getQueueDescription(objPar.iQueue) }}</span><span class="truncate" title="{{ babel("base.matchlenght") }}">{{ timeShow(new Date(objPar.matchData.gameDuration * 1000), \'mmm sss\') }}</span><span class="truncate" title="{{ babel("base.matchstartend") }}">{{ timeShow(objPar.lTimestamp, \'HH:mm\') }}                &nbsp;-&nbsp;                {{ timeShow(timeAddMs(objPar.lTimestamp, objPar.matchData.gameDuration * 1000), \'HH:mm\') }}</span></div><div class="champion">{{* getTemplateHtml(ChampionImageItemTemplate, { id: objPar.lChampion  }) }}<span>{{ objPar.player.champLevel }}</span></div><div class="spells-runes">{{* getTemplateHtml(RuneImageItemTemplate, { css: \'rune1\', id: objPar.player.perk0 }) }}            {{* getTemplateHtml(RuneImageItemTemplate, { css: \'rune2\', id: objPar.player.perkSubStyle }) }}<img class="spell" src="{{ GetSummonerSpellIconById(objPar.player.spell1Id) }}" title="{{ GetSummonerSpellNameById(objPar.player.spell1Id) }}" alt="{{ GetSummonerSpellNameById(objPar.player.spell1Id) }}"><img class="spell" src="{{ GetSummonerSpellIconById(objPar.player.spell2Id) }}" title="{{ GetSummonerSpellNameById(objPar.player.spell2Id) }}" alt="{{ GetSummonerSpellNameById(objPar.player.spell2Id) }}"></div><div class="stats"><span class="truncate">{{ getQueueDescription(objPar.iQueue) }}</span><span class="truncate"><span>{{ objPar.player.kills }}</span><span>&nbsp;/&nbsp;</span><span class="red-text text-darken-1">{{ objPar.player.deaths }}</span><span>&nbsp;/&nbsp;</span><span>{{ objPar.player.assists }}</span></span><span class="truncate" title="{{ babel("base.matchlenght") }}">{{ timeShow(new Date(objPar.matchData.gameDuration * 1000), \'mmm sss\') }}</span><span class="truncate"><span>{{ mathKDA(objPar.player.kills, objPar.player.deaths, objPar.player.assists) }}</span><label>{{ babel("base.kda",\'u\') }}</label>&ensp;                {{ mathPercentage(objPar.player.kills + objPar.player.assists, objPar.iPlayerTeamKills) }}<label title="{{ babel("base.killparticipation") }}">%{{ babel("base.killparticipation",\'su\') }}</label></span><span class="truncate" title="{{ babel("base.matchstartend") }}">{{ timeShow(objPar.lTimestamp, \'HH:mm\') }}                &nbsp;-&nbsp;                {{ timeShow(timeAddMs(objPar.lTimestamp, objPar.matchData.gameDuration * 1000), \'HH:mm\') }}</span><span class="truncate" title="{{ babel("summoner.creepscoreandcsmin") }}">{{ objPar.player.totalMinionsKilled }}<label>{{ babel("base.creepscore",\'us\') }}</label>&ensp;                {{ mathPerMinute(objPar.player.totalMinionsKilled, objPar.matchData.gameDuration * 1000) }}<label>/{{ babel("time.minute",\'s\') }}</label></span></div><div class="items">{{* GetItemImgTagById(objPar.player.item0) }}            {{* GetItemImgTagById(objPar.player.item1) }}            {{* GetItemImgTagById(objPar.player.item2) }}            {{* GetItemImgTagById(objPar.player.item3) }}            {{* GetItemImgTagById(objPar.player.item4) }}            {{* GetItemImgTagById(objPar.player.item5) }}            {{* GetItemImgTagById(objPar.player.item6) }}</div><div class="participants"><div>{{* SummonerMatchCreateParticipant(objPar.matchData.playerMatchDataCollection, 100) }}</div><div>{{* SummonerMatchCreateParticipant(objPar.matchData.playerMatchDataCollection, 200) }}</div></div>{{?}}        {{? objPar.bScheduled }}<i class="fad fa-history"></i><div class="schedule-info"><span class="truncate">{{ babel("summoner.scheduledforupdate") }}</span><span class="truncate">{{ getQueueDescription(objPar.iQueue) }}</span><span class="truncate" title="{{ babel("base.date") }}">{{ timeShow(objPar.lTimestamp, \'dd / MM / yyyy - HH : mm\') }}</span></div>{{?}}</div><div class="collapsible-body"></div></li>';
var SummonerMatch_ParticipantItemTemplate = '<a {{? !objPar.bIsBot }}    class="link"    title="{{ babel("base.viewsummonernameprofile", null, { SummonerName : objPar.sName }) }}"   href="{{ getSummonerPageLink(objPar) }}"   onclick="event.stopPropagation();{{* getSummonerPageOnclick(objPar) }};{{?}}return false;"      {{?}}   >{{* getTemplateHtml(ChampionImageItemTemplate, { id: objPar.iChampionId }) }}<span class="truncate {{? objPar.bIsMySummoner }}mine{{?}}">{{? (objPar.bIsMySummoner || objPar.bIsCurrentSummoner) }}<b>{{?}}            {{ objPar.sName }}        {{? (objPar.bIsMySummoner || objPar.bIsCurrentSummoner) }}</b>{{?}}</span></a>';
var SummonerPendingInvitationItemTemplate = '<blockquote class="team-invitation" {{* getTeamNavigations(objPar.team) }}>{{* getTemplateHtml(TeamImageItemTemplate, { team: objPar.team }) }}<span>{{ babel("summoner.pendinginvitefromteam", null, { TeamName: objPar.team.sTag }) }}{{ objPar.iRole > 0 ? (\' \' + babel("base.as",\'l\') + \' \' + babelEnum("RoleType", objPar.iRole, \'al\')) : \'\' }}</span></blockquote>';
var SummonerStatisticsBoxesChampionDetailsItemTemplate = '<div class="{{? objPar.bAlt }}alt{{?}} truncate image">{{* getTemplateHtml(ChampionImageItemTemplate, { id: objPar.stats.iChampionId }) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ GetChampionNameById(objPar.stats.iChampionId) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ mathPercentage(objPar.stats.iWins, objPar.stats.iGames) }}%</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ objPar.stats.iGames + babel("base.game",\'s\') }} - {{ objPar.stats.iWins + babel("base.win",\'s\') }} - {{ objPar.stats.iGames - objPar.stats.iWins + babel("base.lost",\'s\') }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ getAmountOfTime(objPar.stats.iGameLength * 1000) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ objPar.stats.iKills }} / {{ objPar.stats.iDeaths }} / {{ objPar.stats.iAssists }} ({{ mathKDA(objPar.stats.iKills, objPar.stats.iDeaths, objPar.stats.iAssists) }})</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ (objPar.stats.iCS / (objPar.stats.iGameLength / 60)).toFixed(1) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ mathAbbreviation(mathAverage(objPar.stats.iGolds, objPar.stats.iGames)) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ mathAbbreviation(mathAverage(objPar.stats.iDamageDealt, objPar.stats.iGames)) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ mathAbbreviation(mathAverage(objPar.stats.iDamageTaken, objPar.stats.iGames)) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate">{{ mathAbbreviation(mathAverage(objPar.stats.iDamageHealed, objPar.stats.iGames)) }}</div><div class="{{? objPar.bAlt }}alt{{?}} truncate" title="{{ babel("summoner.doubletriplequadrapenta") }}">{{ objPar.stats.iDoubleKills }} / {{ objPar.stats.iTripleKills }} / {{ objPar.stats.iQuadraKills }} / {{ objPar.stats.iPentaKills }}</div>';
var SummonerStatisticsChampionPlayedLIItemTemplate = '<li class="collection-item avatar">{{* getTemplateHtml(ChampionImageItemTemplate, { id: objPar.iChampionId, css: \'circle\' }) }}<div class="row nmb center"><div class="col"><label>{{ babel("base.champion") }}</label><span>{{ GetChampionNameById(objPar.iChampionId) }}</span></div><div class="col"><label>{{ babel("base.game",\'p\') }}</label><span>{{ objPar.iGames }}</span></div><div class="col"><label>{{ babel("base.winrate",\'s\') }}</label><span class="{{ classTextColor(mathPercentage(objPar.iWins, objPar.iGames), "%") }}">{{ mathPercentage(objPar.iWins, objPar.iGames) }}%</span></div><div class="col"><label>{{ babel("base.kda") }}</label><span class="{{ classTextColor(mathKDA(objPar.iKills, objPar.iDeaths, objPar.iAssists), "kda") }}">{{ mathKDA(objPar.iKills, objPar.iDeaths, objPar.iAssists) }}</span></div></div></li>';
var SummonerStatisticsModalChampsUsedItemTemplate = '<div id="modalStatmodalChampsUsed" class="modal modal-champ-used"><div class="modal-content"><div class="row"><div class="wrapper"><div class="head truncate"></div><div class="head truncate">{{ babel("base.champion") }}</div><div class="head truncate">{{ babel("base.winrate",\'s\') }}</div><div class="head truncate">{{ babel("base.game",\'p\') }}</div><div class="head truncate">{{ babel("base.timeplayed") }} ({{ babel("time.minute",\'s\') }})</div><div class="head truncate">{{ babel("base.kda") }}</div><div class="head truncate">{{ babel("base.creepscore",\'su\') }}/{{ babel("time.minute",\'s\') }}</div><div class="head truncate">{{ babel("base.goldearned") }}</div><div class="head truncate">{{ babel("base.dmgdealt") }}</div><div class="head truncate">{{ babel("base.dmgtaken") }}</div><div class="head truncate">{{ babel("base.heal") }}</div><div class="head truncate" title="{{ babel("summoner.doubletriplequadrapenta") }}">{{ babel("summoner.multikills") }}</div></div></div></div></div>';
var SummonerStatisticsPlayedWithLIItemTemplate = '<li class="collection-item avatar"><i class="fad fa-user-circle blue-grey-text text-lighten-2"></i><div class="row nmb center"><div class="col"><label>{{ babel("base.name") }}</label><a class="link" {{* getSummonerNavigations(objPar.summoner) }}><span title="{{ babel("base.viewsummonernameprofile", null, { SummonerName : objPar.summoner.sName }) }}" class="truncate">{{ objPar.summoner.sName }}</span></a></div><div class="col"><label>{{ babel("base.match",\'p\') }}</label><span>{{ objPar.iGames }}</span></div><div class="col"><label>{{ babel("base.win",\'p\') }}</label><span>{{ objPar.iWins }}</span></div><div class="col"><label>{{ babel("base.winrate",\'s\') }}</label><span>{{ mathPercentage(objPar.iWins, objPar.iGames) }}%</span></div></div></li>';
var TeamCardItemTemplate = '<div class="card team-card {{? (textColorFromHex(objPar.sColor) == "FFF") }}white-text{{?}}" style="background: {{ backgroundTeam(objPar.sColor) }}"><a class="btn-floating transparent hoverable dropdown-trigger" data-target="ddTeamSettings"><i class="far fa-ellipsis-v large"></i></a><ul id="ddTeamSettings" class="dropdown-content">{{? imAdmin(objPar) || imOwner(objPar) }}<li><a onclick="navigate(\'EditTeam\', \'{{ objPar.iTeamId }}\');return false;"><i class="far fa-edit left"></i>{{ babel("base.edit") }}</a></li>{{?}}<li><a onclick="openModalReport(\'{{ EntityType.Team }}\',\'{{ objPar.iTeamId }}\');"><i class="far fa-flag left"></i>{{ babel("base.report") }}</a></li><li class="divider" tabindex="-1"></li>{{? !imOwner(objPar) && imMember(objPar) }}<li><a onclick="TeamLeaveTeam();return false;" class="red-text"><i class="far fa-door-open left"></i>{{ babel("base.leaveteam") }}</a></li>{{?}}        {{? imOwner(objPar) }}<li><a onclick="TeamDisbandTeam();return false;" class="red-text"><i class="far fa-tombstone left"></i>{{ babel("base.disbandteam") }}</a></li>{{?}}</ul><div class="card-content">{{* getTemplateHtml(TeamImageItemTemplate, { css: "teamlogo", team: objPar }) }}<span class="name tag">{{ objPar.sTag }}            {{* getTemplateHtml(FlagImageItemTemplate, { css:\'flagimg\', id: objPar.sNationality }) }}</span><span class="name truncate">{{ objPar.sName }}</span><span id="btnTabTeamFollowers" onclick="TeamGoTabAlt(\'TeamFollow\');" class="new badge left" data-badge-caption="{{ babel("base.follower", objPar.iFollowers == 1 ? \'\' : \'p\') }}">{{ objPar.iFollowers }}</span></div><div class="row nmb rowtabs"><div class="col s12"><ul class="tabs tabs-transparent"><li id="teamTabHome" class="tab col"><a class="waves-effect" href="#Home">{{ babel("base.home") }}</a></li><li id="teamTabMatchlist" class="tab col"><a class="waves-effect" href="#Matchlist">{{ babel("base.matchlist") }}</a></li><li id="teamTabStatistics" class="tab col"><a class="waves-effect" href="#Statistics">{{ babel("base.statistic",\'p\') }}</a></li><li class="tab col dnone"><a class="waves-effect" href="#TeamFollow">{{ babel("base.follower",\'p\') }}</a></li><li id="teamTabSettings" class="tab col {{? !imAdmin(objPar) && !imOwner(objPar) }}dnone{{?}}"><a class="waves-effect" href="#Settings">{{ babel("base.setting",\'p\') }}</a></li></ul></div></div></div>';
var TeamContractItemTemplate = '<li id="contract{{ objPar.summoner.iSummonerId }}" class="collection-item">{{* getTemplateHtml(SummonerImageItemTemplate, { css: "img-icon", summoner: objPar.summoner, bNavigate: true }) }}        {{* getTemplateHtml(FlagImageItemTemplate, { css : \'img-flag\', id: objPar.summoner.sNationality }) }}<div class="name"><a class="link truncate" {{* getSummonerNavigations(objPar.summoner) }}><span>{{ objPar.summoner.sName }}</span></a><label class="truncate">{{ babel("base.membersince") }}: {{ timeShow(objPar.contract.dtJoinDate, \'dd/MM/yyyy\') }}</label><label class="truncate">{{ objPar.bOwner ?  babel("base.owner") : objPar.bAdmin ?  babel("base.admin") : \'\' }}</label></div>{{* getTemplateHtml(RoleImageItemTemplate, { css: \'img-role\', iRole: objPar.contract.iRole }) }}<div class="rank-info">{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.summoner.soloRank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.Ranked_Solo", \'s\') }}</label>{{? objPar.summoner.soloRank && objPar.summoner.soloRank.iTLP > 0 }}<span class="truncate">{{ getRankDescByTLP(objPar.summoner.soloRank, \'tier division\') }}</span><span class="truncate">{{ getRankDescByTLP(objPar.summoner.soloRank, \'pointsLP\') }}</span>{{?}}        {{? !objPar.summoner.soloRank || !objPar.summoner.soloRank.iTLP > 0 }}<span style="grid-row:span 2" class="truncate">{{ getRankDescByTLP(objPar.summoner.soloRank, \'tier\') }}</span>{{?}}</div><div class="rank-info">{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.summoner.flexRank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.ranked_flex_5v5", \'s\') }}</label>{{? objPar.summoner.flexRank && objPar.summoner.flexRank.iTLP > 0 }}<span class="truncate">{{ getRankDescByTLP(objPar.summoner.flexRank, \'tier division\') }}</span><span class="truncate">{{ getRankDescByTLP(objPar.summoner.flexRank, \'pointsLP\') }}</span>{{?}}        {{? !objPar.summoner.flexRank || !objPar.summoner.flexRank.iTLP > 0 }}<span style="grid-row:span 2" class="truncate">{{ getRankDescByTLP(objPar.summoner.flexRank, \'tier\') }}</span>{{?}}</div>{{? WebUser.bIsAdmin && false }}<div class="aps" title="{{ babel("base.averageperformancescore") }}"><span class="ps-color">0</span><label class="truncate">{{ babel("base.averageperformancescore",\'su\') }}</label></div>{{?}}        {{* ((objPar.bImOwner || objPar.bImAdmin) && !objPar.bNoOptions) ? getTemplateHtml(TeamContractBtnMoreItemTemplate, objPar) : \'<div class="options"></div>\' }}</li>';
var TeamContractBtnMoreItemTemplate = '<a class="dropdown-trigger btn-flat options" data-target="dropdown{{ objPar.summoner.iSummonerId }}"><i class="far fa-ellipsis-v"></i></a><ul id="dropdown{{ objPar.summoner.iSummonerId }}" class="dropdown-content">{{? objPar.bOptChangeRole }}<li><a onclick="contractModalChangeRole(\'{{ objPar.summoner.iSummonerId }}\',\'{{ objPar.summoner.sName }}\',\'{{ objPar.contract.iRole }}\');return false;"><i class="far fa-user-tag left"></i>{{ babel("base.changerole") }}</a></li>{{?}}    {{? objPar.bOptMakeOwner }}<li><a onclick="contractAskConfirmSetOwner(\'{{ objPar.summoner.iSummonerId }}\',\'{{ objPar.summoner.sName }}\');return false;"><i class="far fa-user-crown left"></i>{{ babel("base.makeowner") }}</a></li>{{?}}    {{? objPar.bOptMakeAdmin }}<li><a onclick="contractAskConfirmPromoteToAdmin(\'{{ objPar.summoner.iSummonerId }}\',\'{{ objPar.summoner.sName }}\');return false;"><i class="far fa-user-shield left"></i>{{ babel("base.makeadmin") }}</a></li>{{?}}    {{? objPar.bOptRevokeAdmin }}<li><a onclick="contractAskConfirmDemoteToMember(\'{{ objPar.summoner.iSummonerId }}\',\'{{ objPar.summoner.sName }}\');return false;"><i class="far fa-user left"></i>{{ babel("base.revokeadmin") }}</a></li>{{?}}    {{? objPar.bOptKick }}<li><a onclick="contractAskConfirmKickMember(\'{{ objPar.summoner.iSummonerId }}\',\'{{ objPar.summoner.sName }}\');return false;"><i class="far fa-user-slash left"></i>{{ babel("base.kick") }}</a></li>{{?}}</ul>';
var TeamMatchItemTemplate = '<li id="match_team_{{ objPar.gameId }}"><div class="collapsible-header {{ objPar.allyTeam.win ? \'win green lighten-4\' : \'lose red lighten-4\' }}"><div class="header-info"><span class="left-align">{{ getQueueDescription(objPar.queueId) }}</span><span>{{ objPar.queueId == QueueType.SR_5V5RF ? (objPar.allyTeam.iLpChange >= 0 ? \'+\' : \'\') + objPar.allyTeam.iLpChange + \'LP\' : \'\' }}</span><label class="right-align">{{ timeShow(objPar.dtGameCreation, \'HH:mm\') }} / {{ timeShow(objPar.lGameDuration * 1000, \'mmm sss\') }}</label></div><div><span class="truncate team-tag">{{ objPar.allyTeam.team.sTag }}</span><span class="truncate team-name">{{ objPar.allyTeam.team.sName }}</span></div><div style="position: relative;">{{* getTemplateHtml(FlagImageItemTemplate, { css:\'team-flag team-ally\', id: objPar.allyTeam.team.sNationality }) }}<img src="{{ getTeamLogoLinkById(objPar.allyTeam.team.sIcon) }}" alt="Team icon"></div><div class="kills"><label class="truncate">{{ babel("base.kill",\'p\') }}</label><span class="truncate">{{ objPar.allyTeam.kills }} - {{ objPar.enemyTeam.kills }}</span></div><div style="position: relative;">{{* getTemplateHtml(FlagImageItemTemplate, { css:\'team-flag team-enemy\', id: objPar.enemyTeam.team.sNationality }) }}<img src="{{ getTeamLogoLinkById(objPar.enemyTeam.team.sIcon) }}" {{? objPar.enemyTeam.team.bNotRegistered }} style="padding:8px 4px 0;" {{?}} alt="Team icon"></div><div><span class="truncate team-tag">{{ objPar.enemyTeam.team.sTag }}</span><span class="truncate team-name">{{ objPar.enemyTeam.team.sName }}</span></div></div><div class="collapsible-body"></div></li>';
var TeamPendingInviteJoinItemTemplate = '<li id="{{ objPar.sId }}" class="collection-item">{{? objPar.dto.summoner != null}}<div class="summoner-profile">{{* getTemplateHtml(FlagImageItemTemplate, { css : \'flag\', id: objPar.dto.summoner.sNationality }) }}        {{* getTemplateHtml(SummonerImageItemTemplate, { css: "circle", summoner: objPar.dto.summoner, bNavigate: true }) }}</div>{{* objPar.dto.summoner != null ? getTemplateHtml(RankImageItemTemplate, { rank: objPar.dto.summoner.flexRank }) : \'\' }}<a class="link" {{* getSummonerNavigations(objPar.dto.summoner) }}><span class="title truncate">{{ objPar.dto.summoner.sName }}{{* getTemplateHtml(RoleImageItemTemplate, { css : \'role\', iRole: objPar.dto.iRole }) }}<br /><label>{{ timeShow(objPar.dto.dtCreation, \'dd/MM/yyyy\') }}</label>{{? objPar.iDaysLeft< 7 }}            <label class="red-text">- {{ babel("base.expiresin",\'l\') }} {{ objPar.iDaysLeft > 0 ? (objPar.iDaysLeft + " " + babel("time.day", objPar.iDaysLeft == 1 ? \'\' : \'p\')) : babel("time.today") }}</label>{{?}}</span></a>{{?}}<div class="col-buttons">{{? objPar.bOwnerAdmin && objPar.bJoinRequest }}<a onclick="TeamCallAcceptJoinRequest({{ objPar.dto.summoner.iSummonerId }},\'{{ objPar.sId }}\')" class="btn right">{{ babel("base.accept") }}</a><a onclick="TeamCallDeclineJoinRequest({{ objPar.dto.summoner.iSummonerId }},\'{{ objPar.sId }}\')" class="btn right">{{ babel("base.decline") }}</a>{{?}}        {{? objPar.bOwnerAdmin && objPar.bInvite }}<a onclick="TeamCallCancelInvite({{ objPar.dto.summoner.iSummonerId }},\'{{ objPar.sId }}\')" class="btn right">{{ babel("base.cancel") }}</a>{{?}}</div></li>';
var TeamRecapItemTemplate = '<div class="card card-recap"><div class="card-content"><div class="rank">{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.rank }) }}<span class="truncate">{{ getRankDescByTLP(objPar.rank, \'tier division\') }}</span><span class="truncate">{{ objPar.iGames + " " + babel("base.gameplayed", objPar.iGames == 1 ? \'\' : \'p\') }}</span><span class="truncate">{{ objPar.iWins + " " + babel("base.win", objPar.iWins == 1 ? \'\' : \'p\') }} {{ (objPar.iGames - objPar.iWins) + " " + babel("base.lost", objPar.iGames - objPar.iWins == 1 ? \'\' : \'p\') }}</span><span class="truncate">{{ mathPercentage(objPar.iWins, objPar.iGames) + "% " + babel("base.winrate") }}</span></div><div class="week-schedule" title="{{ babel("team.teamschedule") }}"></div><div class="description"><label>{{ babel("base.description") }}</label><a id="btnDescriptionOptions" style="margin-top: 6px;" class="btn-flat dropdown-trigger right" data-target="ddDescriptionRecap"><i class="far fa-ellipsis-v"></i></a><ul id="ddDescriptionRecap" class=\'dropdown-content\'><li><a onclick="openModalReport(\'{{ EntityType.Text }}\',\'{{ objPar.iTextId }}\');"><i class="far fa-flag left"></i>{{ babel("base.report") }}</a></li></ul><p style="white-space: pre-wrap;"></p><a onclick="TeamRecapToggleDesc()" class="link teal-text text-accent-4">{{ babel("base.more",\'l\') }}</a></div><div class="open-positions"><label class="truncate">{{ babel("base.openposition",\'p\') }}</label><div style="display: inline-block;" title="{{ babel("team.searchingforroles") }}"></div><a id="team-btn-join" class="btn orange dropdown-trigger right" data-target="ddOPAskJoin">{{ babel("base.join") }}</a><ul id="ddOPAskJoin" class="dropdown-content"></ul></div></div></div>';
var TeamStatsTableItemTemplate = '<div id="{{ objPar.id }}" class="row team-data-card"><div class="col s12"><h5>{{ objPar.title }}</h5></div><div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="input-field col"><p onclick="TeamStatsRadioChanged(\'Average\')"><label><input name="group{{ objPar.id }}AverageTotal" type="radio" value="Average" checked /><span>{{ babel("base.average") }}</span></label></p></div><div class="input-field col"><p onclick="TeamStatsRadioChanged(\'Total\')"><label><input name="group{{ objPar.id }}AverageTotal" type="radio" value="Total" /><span>{{ babel("base.total") }}</span></label></p></div></div><div class="row nmb stats-total"><div class="col s12"><div class="grid-table"></div></div></div><div class="row nmb stats-average"><div class="col s12"><div class="grid-table"></div></div></div></div></div></div></div>';
var TeamTrialItemTemplate = '<li id="contract{{ objPar.summoner.iSummonerId }}" class="collection-item"><div class="row row-grid"><div class="col">{{* getTemplateHtml(SummonerImageItemTemplate, { css: "img-profile", summoner: objPar.summoner, bNavigate: true }) }}</div><div class="col"><a class="link" {{* getSummonerNavigations(objPar.summoner) }}><span class="truncate name">{{ objPar.summoner.sName }}</span></a><label class="truncate">{{ babel("team.intrialsince") + " " + timeShow(objPar.contract.dtJoinDate, \'dd/MM/yyyy\') }}</label></div><div class="col">{{* getTemplateHtml(RoleImageItemTemplate, { iRole: objPar.contract.iRole, css: \'img-role\' }) }}</div><div class="col">{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.summoner.flexRank, css: \'img-rank\' }) }}</div></div>{{? objPar.bImOwner || objPar.bImAdmin }}<div class="row"><div class="col s12 col-buttons"><a class="btn waves-effect" onclick="contractCallPromoteToMember(\'{{ objPar.summoner.iSummonerId }}\');return false;">{{ babel("team.promotetomember") }}</a><a class="btn waves-effect red" onclick="contractCallKickMember(\'{{ objPar.summoner.iSummonerId }}\');return false;">{{ babel("base.kick") }}</a></div></div>{{?}}</li>';
var TeamLeaderboardListItemHeaderItemTemplate = '<li class="collection-item"><div><label>{{ babel("base.position") }}</label></div><div><label>{{ babel("base.rank") }}</label></div><div><label>{{ babel("base.logo") }}</label></div><div class="team-info"><label>{{ babel("base.tagandname") }}</label></div><div><label>{{ babel("base.tlp",\'s\') }}</label></div></li>';
var TeamLeaderboardTeamListItemItemTemplate = '<li class="collection-item {{ objPar.css }}"><div><span class="team-position">{{ objPar.team.iPosition }}</span></div><div>{{* getTemplateHtml(RankImageItemTemplate, { css: \'team-rank\', rank: objPar.team.rank }) }}</div><div>{{* getTemplateHtml(TeamImageItemTemplate, { css: \'team-logo\', team: objPar.team, bNavigate: true }) }}</div><div class="team-info"><a class="link" {{* getTeamNavigations(objPar.team) }}><span class="team-tag truncate">{{ objPar.team.sTag }}{{* getTemplateHtml(FlagImageItemTemplate, { css: \'team-flag\', id: objPar.team.sNationality }) }}</span><span class="team-name truncate">{{ objPar.team.sName }}</span></a></div><div><span class="new badge" data-badge-caption="{{ babel("base.tlp",\'s\') }}" title="{{ babel("base.tlp") }}">{{ objPar.team.rank.iTLP }}</span></div></li>';
var TeamLeaderboard_ButtonTeamItemTemplate = '<a href="{{ getPageLink(\'TeamLeaderboard\', objPar.lPosition) }}" onclick="navigateTeamLeaderboard({{ objPar.lPosition }});return false;"   class="team-btn btn-large waves-effect {{? objPar.lPosition == 0 }}disabled tooltipped{{?}} {{ classColorPalette(objPar.sColor) }}"   {{? objPar.lPosition == 0 }} data-position="top" data-tooltip="{{ babel("teamleaderboard.teambuttontooltip") }}" {{?}}   title="{{ babel("teamleaderboard.viewteamnameposition", null, { TeamName: objPar.sName}) }}"      ><i class="far fa-search-location left"></i>{{ objPar.sTag }}   {{? objPar.lPosition > 0 }}<span class="position right">#{{ objPar.lPosition }}</span>{{?}}</a>';
var TournamentBracketParticipantItemTemplate = '<div class="        {{? objPar.summoner != null }}p-{{ objPar.summoner.iSummonerId }} summoner {{ objPar.match.winnerId >0 ? (objPar.match.winnerId == objPar.summoner.iSummonerId ? \'won\' : \'lost\') : \'\' }}{{?}}        {{? objPar.team != null }}p-{{ objPar.team.iTeamId }} team {{ objPar.match.winnerId > 0 ? (objPar.match.winnerId == objPar.team.iTeamId ? \'won\' : \'lost\') : \'\' }}{{?}}        "         {{? objPar.summoner != null }}onmouseover="TournamentBracketParticipantHover({{ objPar.summoner.iSummonerId }})" onmouseout="TournamentBracketParticipantOut()"{{?}}         {{? objPar.team != null }}onmouseover="TournamentBracketParticipantHover({{ objPar.team.iTeamId }})" onmouseout="TournamentBracketParticipantOut()"{{?}}>        {{? objPar.summoner == null && objPar.team == null }}<img src="{{ cdnLink("/images/Transparent.png") }}" /><span></span>{{?}}        {{? objPar.summoner != null }}<img src="{{ getUrlProfileIcon(null, null, objPar.summoner) }}" title="{{ objPar.summoner.sName }}" /><span {{* isMySummoner(objPar.summoner) ? \'class="special"\' : \'\' }} title="{{ objPar.summoner.sName }}">{{ objPar.summoner.sName }}</span>{{?}}        {{? objPar.team != null }}    {{* getTemplateHtml(TeamImageItemTemplate, { team: objPar.team }) }}<span {{* imMember(objPar.team) ? \'class="special"\' : \'\' }} title="{{ getTeamFullName(objPar.team) }}">{{ objPar.team.sTag }}</span>{{?}}        {{? objPar.summoner != null && objPar.match.winnerId > 0 }}<span class="result" title="{{ objPar.summoner.sName }}">{{ objPar.match.winnerId == objPar.summoner.iSummonerId ? 1 : 0 }}</span>{{?}}    {{? objPar.team != null && objPar.match.winnerId > 0 }}<span class="result" title="{{ getTeamFullName(objPar.team) }}">{{ objPar.match.winnerId == objPar.team.iTeamId ? 1 : 0 }}</span>{{?}}</div>';
var TournamentBracketsMatchItemTemplate = '<div class="match match-{{ objPar.iIndex }} {{ objPar.winnerId >0 ? \'ended\' : \'\' }}" onclick="TournamentShowMatchDetails({{ objPar.iIndex }})"><label>{{ objPar.iIndex }}</label>{{* getTemplateHtml(TournamentBracketParticipantItemTemplate, { match: objPar, summoner: objPar.summonerOne, team: objPar.teamOne }) }}<p class="divider"></p>{{* getTemplateHtml(TournamentBracketParticipantItemTemplate, { match: objPar, summoner: objPar.summonerTwo, team: objPar.teamTwo }) }}</div>';
var TournamentHeaderCardItemTemplate = '<div class="card tournament-card"><div class="card-content"><div class="info"><img class="tournament-icon" src="{{ getTournamentIconLinkById(objPar.iIcon) }}" /><span class="label truncate grey-text text-darken-2"><i class="fad fa-trophy"></i>{{ babel("tournament.tournament") }}</span><span id="tournament_name" class="name truncate">{{ objPar.sName }}</span><span id="tournament_map_mode" class="map-mode truncate">{{ babel("tournament.modefixed") }}</span><label id="tournament_phase"></label></div><div id="tournament_card_info_join" class="join center dnone"><span style="font-weight: 500"></span><div class="counter"><span></span>&nbsp;<label></label></div><a></a><div class="tournament-progress dnone"><div class="divider" style="margin-bottom:.5rem"></div><span class="truncate">{{ babel("base.gameplayed", \'p\') }}</span><span class="truncate"><b></b></span></div></div></div><div class="row rowtabs grey lighten-3"><div class="col s12"><ul class="tabs transparent"><li id="tournamentTabOverview" class="tab col"><a class="waves-effect" href="#Overview">{{ babel("tournament.Overview") }}</a></li><li id="tournamentTabSchedule" class="tab col"><a class="waves-effect" href="#Schedule">{{ babel("tournament.Schedule") }}</a></li><li id="tournamentTabManagement" class="tab col dnone"><a class="waves-effect" href="#Management">{{ babel("tournament.Management") }}</a></li></ul></div></div></div>';
var TournamentManagementMatchItemTemplate = '<div id="mng_match_{{ objPar }}" onclick="TournamentManageMatch({{ objPar }})" class="match hoverable-mini"><i class="fas fa-exclamation-triangle alert"></i><label>{{ objPar }}</label></div>';
var TournamentManagementParticipantSummonerItemTemplate = '<li id="mngParticipantColl{{ objPar.iSummonerId }}"    class="collection-item"><img src="{{ getUrlProfileIcon(null, null, objPar) }}" /><span>{{ objPar.sName }}<label class="status"></label></span>{{? objPar.bHasPriority == true }}<a class="btn-flat" onclick="TournamentManageTogglePriority({{ objPar.iSummonerId }}, false)" title="{{ babel("tournament.removepriority") }}"><i class="fas fa-star"></i></a>{{?}}    {{? objPar.bHasPriority != true }}<a class="btn-flat" onclick="TournamentManageTogglePriority({{ objPar.iSummonerId }}, true)" title="{{ babel("tournament.givepriority") }}"><i class="far fa-star"></i></a>{{?}}<a class="btn-flat" onclick="TournamentManageConfirmKick({{ objPar.iSummonerId }})">{{ babel("base.kick") }}</a></li>';
var TournamentManagementParticipantTeamItemTemplate = '<li id="mngParticipantColl{{ objPar.iTeamId }}"    class="collection-item"><img src="{{  getTeamLogoLinkById(objPar.sIcon) }}" /><span>{{ getTeamFullName(objPar) }}<label class="status"></label></span>{{? objPar.bHasPriority == true }}<a class="btn-flat" onclick="TournamentManageTogglePriority({{ objPar.iTeamId }}, false)" title="{{ babel("tournament.removepriority") }}"><i class="fas fa-star"></i></a>{{?}}    {{? objPar.bHasPriority != true }}<a class="btn-flat" onclick="TournamentManageTogglePriority({{ objPar.iTeamId }}, true)" title="{{ babel("tournament.givepriority") }}"><i class="far fa-star"></i></a>{{?}}<a class="btn-flat" onclick="TournamentManageConfirmKick({{ objPar.iTeamId }})">{{ babel("base.kick") }}</a></li>';
var TournamentMatchDetailsBodyItemTemplate = '<div class="row"><div class="col s12"><span class="truncate"><b>{{ babel("base.match") + " " + objPar.iIndex + (objPar.winnerId > 0 ? " - " + babel("base.end", \'l\') : "") }}</b></span><span class="truncate">{{ babel("tournament.directelimination") }}</span>{{? timeDateHasValue(objPar.dtGameStart) }}<span class="truncate">{{ babel("time.time") + ": " + timeShow(objPar.dtGameStart, \'dddd, dd MMMM - HH:mm\') }}</span>{{?}}</div></div><div class="row"><div class="col s12 match-details-participants {{ objPar.winnerId >0 ? \'ended\' : \'\' }}">        {{* TournamentTournament.iTeamSize == TournamentTeamSize.One ? getTemplateHtml(TournamentMatchDetailsSummonerItemTemplate, { winnerId: objPar.winnerId, summoner: objPar.summonerOne, bLost: objPar.bTwoWin }) : getTemplateHtml(TournamentMatchDetailsTeamItemTemplate, { winnerId: objPar.winnerId, team: objPar.teamOne, bLost: objPar.bTwoWin }) }}        {{? objPar.winnerId< 1 }}        <label class="vs">VS</label>{{?}}        {{? objPar.bOneWin }}<span class="vs"><b><i class="fas fa-caret-left" style="left:-4px"></i>&nbsp;1&nbsp;-&nbsp;0</b></span>{{?}}        {{? objPar.bTwoWin }}<span class="vs"><b>0&nbsp;-&nbsp;1&nbsp;<i class="fas fa-caret-right" style="right:-4px"></i></b></span>{{?}}        {{* TournamentTournament.iTeamSize == TournamentTeamSize.One ? getTemplateHtml(TournamentMatchDetailsSummonerItemTemplate, { winnerId: objPar.winnerId, summoner: objPar.summonerTwo, bLost: objPar.bOneWin }) : getTemplateHtml(TournamentMatchDetailsTeamItemTemplate, { winnerId: objPar.winnerId, team: objPar.teamTwo, bLost: objPar.bOneWin }) }}</div></div>';
var TournamentMatchDetailsSummonerItemTemplate = '{{? objPar.summoner != null }}<a class="no-color" style="cursor:pointer;" {{* getSummonerNavigations(objPar.summoner) }} title="{{ babel("base.viewsummonerprofile") }}"><div class="summoner hoverable-mini waves-effect {{ isMySummoner(objPar.summoner) ? \'me\' : \'\' }} {{ objPar.bLost ? \'lost\' : \'\' }}"><img class="profile" src="{{ getUrlProfileIcon(null, null, objPar.summoner) }}" /><span class="truncate">{{ objPar.summoner.sName }}</span><div class="rank"><div>{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.summoner.soloRank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.Ranked_Solo", \'s\') }}</label><label class="truncate">{{ getRankDescByTLP(objPar.summoner.soloRank, \'tier division\') }}</label></div><div>{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.summoner.flexRank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.ranked_flex_5v5", \'s\') }}</label><label class="truncate">{{ getRankDescByTLP(objPar.summoner.flexRank, \'tier division\') }}</label></div></div>{{* TournamentShowMatchDetailsTopChampions(objPar.summoner.iSummonerId) }}</div></a>{{?}}{{? objPar.summoner == null }}<a class="no-color"><div class="summoner"><img class="circle grey lighten-2" src="{{ cdnLink("/images/Transparent.png") }}" /><span class="truncate grey-text text-lighten-1">TBD</span></div></a>{{?}}';
var TournamentMatchDetailsTeamItemTemplate = '{{? objPar.team != null }}<a class="no-color" style="cursor:pointer;" {{* getTeamNavigations(objPar.team) }} title="{{ babel("base.viewteamprofile") }}"><div class="team hoverable-mini waves-effect {{ imMember(objPar.team) ? \'me\' : \'\' }} {{ objPar.bLost ? \'lost\' : \'\' }}">{{* getTemplateHtml(TeamImageItemTemplate, { css: \'profile\', team: objPar.team }) }}<span class="truncate">{{ getTeamFullName(objPar.team) }}</span><div class="rank"><div>{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.team.rank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.ranked_flex_5v5", \'s\') }}</label><label class="truncate">{{ getRankDescByTLP(objPar.team.rank, \'tier division\') }}</label></div></div></div></a>{{?}}{{? objPar.team == null }}<a class="no-color"><div class="summoner"><img class="circle grey lighten-2" src="{{ cdnLink("/images/Transparent.png") }}" /><span class="truncate grey-text text-lighten-1">TBD</span></div></a>{{?}}';
var TournamentParticipantSummonerItemTemplate = '<a class="no-color" style="cursor:pointer;" {{* getSummonerNavigations(objPar) }}><div class="summoner hoverable-light waves-effect"><img class="circle" src="{{ getUrlProfileIcon(null, null, objPar) }}" /><span class="truncate">{{ objPar.sName }}</span>{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.soloRank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.Ranked_Solo", \'s\') }}</label><label class="truncate">{{ getRankDescByTLP(objPar.soloRank, \'tier division\') }}</label>{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.flexRank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.ranked_flex_5v5", \'s\') }}</label><label class="truncate">{{ getRankDescByTLP(objPar.flexRank, \'tier division\') }}</label>{{? objPar.bHasPriority == true }}<i title="{{ babel("tournament.haspriority") }}" class="fas fa-star priority amber-text"></i>{{?}}</div></a>';
var TournamentParticipantTeamItemTemplate = '<a class="no-color" style="cursor:pointer;" {{* getTeamNavigations(objPar) }}><div class="team hoverable-light waves-effect">{{* getTemplateHtml(TeamImageItemTemplate, { css: \'circle\', team: objPar }) }}<span class="truncate">{{ getTeamFullName(objPar) }}</span>{{* getTemplateHtml(RankImageItemTemplate, { rank: objPar.rank }) }}<label class="truncate">{{ babel("QueueTypeStatistics.ranked_flex_5v5", \'s\') }}</label><label class="truncate">{{ getRankDescByTLP(objPar.rank, \'tier division\') }}</label>{{? objPar.bHasPriority == true }}<i title="{{ babel("tournament.haspriority") }}" class="fas fa-star priority amber-text"></i>{{?}}</div></a>';
var TournamentScheduleBracketLIItemTemplate = '<li class="collection-item {{ objPar.winnerId >0 ? \'ended\' : \'\' }}"><label>{{ babel("base.match") + " " + objPar.iIndex }}</label><label class="info">{{ babel("tournament.directelimination") }}</label><div class="time" title="{{ babel("time.time") }}">{{? timeDateHasValue(objPar.dtGameStart) }}<h4>{{ timeShow(objPar.dtGameStart, \'HH\') }}<span>{{ timeShow(objPar.dtGameStart, \'mm\') }}</span></h4>{{?}}        {{? !timeDateHasValue(objPar.dtGameStart) }}<h4></h4>{{?}}</div>{{* TournamentTournament.iTeamSize == TournamentTeamSize.One ? getTemplateHtml(TournamentScheduleParticipantSummonerItemTemplate, { summoner: objPar.summonerOne, bLost: objPar.bTwoWin }) : getTemplateHtml(TournamentScheduleParticipantTeamItemTemplate, { team: objPar.teamOne, bLost: objPar.bTwoWin }) }}    {{? objPar.winnerId< 1 }}    <label class="vs">VS</label>{{?}}    {{? objPar.bOneWin }}<span class="vs"><b><i class="fas fa-caret-left" style="left:-4px"></i>&nbsp;1&nbsp;-&nbsp;0</b></span>{{?}}    {{? objPar.bTwoWin }}<span class="vs"><b>0&nbsp;-&nbsp;1&nbsp;<i class="fas fa-caret-right" style="right:-4px"></i></b></span>{{?}}    {{* TournamentTournament.iTeamSize == TournamentTeamSize.One ? getTemplateHtml(TournamentScheduleParticipantSummonerItemTemplate, { summoner: objPar.summonerTwo, bLost: objPar.bOneWin }) : getTemplateHtml(TournamentScheduleParticipantTeamItemTemplate, { team: objPar.teamTwo, bLost: objPar.bOneWin }) }}</li>';
var TournamentScheduleBracketULItemTemplate = '<ul class="collection with-header ul-{{ objPar.id }}"><li class="collection-header"><span>{{? !isNullOrEmpty(objPar.sRelativeDate) }}<b>{{ objPar.sRelativeDate }}</b>&nbsp;-&nbsp;            {{ timeShow(objPar.date, objPar.dateFormat) }}            {{?}}            {{ !isNullOrEmpty(objPar.sAltTitle) ? objPar.sAltTitle : \'\' }}</span><label></label><div class="btn-flat waves-effect" data-collapsed="false" onclick="TournamentScheduleToggleBrackets(\'ul-{{ objPar.id }}\')"><i class="far fa-angle-down"></i></div></li></ul>';
var TournamentScheduleParticipantSummonerItemTemplate = '{{? objPar.summoner != null }}<a class="no-color" style="cursor:pointer;" {{* getSummonerNavigations(objPar.summoner) }}><div class="summoner hoverable-mini waves-effect {{ isMySummoner(objPar.summoner) ? \'me\' : \'\' }} {{ objPar.bLost ? \'lost\' : \'\' }}"><img class="circle" src="{{ getUrlProfileIcon(null, null, objPar.summoner) }}" /><span class="truncate">{{ objPar.summoner.sName }}</span></div></a>{{?}}{{? objPar.summoner == null }}<a class="no-color"><div class="summoner"><img class="circle grey lighten-2" src="{{ cdnLink("/images/Transparent.png") }}" /><span class="truncate grey-text text-lighten-1">TBD</span></div></a>{{?}}';
var TournamentScheduleParticipantTeamItemTemplate = '{{? objPar.team != null }}<a class="no-color" style="cursor:pointer;" {{* getTeamNavigations(objPar.team) }}><div class="team hoverable-mini waves-effect {{ imMember(objPar.team) ? \'me\' : \'\' }} {{ objPar.bLost ? \'lost\' : \'\' }}">{{* getTemplateHtml(TeamImageItemTemplate, { css: \'circle\', team: objPar.team }) }}<span class="truncate">{{ getTeamFullName(objPar.team) }}</span></div></a>{{?}}{{? objPar.team == null }}<a class="no-color"><div class="team"><img class="circle grey lighten-2" src="{{ cdnLink("/images/Transparent.png") }}" /><span class="truncate grey-text text-lighten-1">TBD</span></div></a>{{?}}';
var TournamentTeamJoinModalItemTemplate = '<div id="chooseTeamTournament" class="modal"><div class="modal-content"><div class="row"><div class="col s12"><h5>{{ babel("tournament.chooseteamjoin") }}</h5></div><div class="col s12">{{*                    var sHtml = "";                    for (var i in WebUser.teams) {                        var radio = {                            sGroupName: "group-team",                            sImgSrc: getTeamLogoLinkById(WebUser.teams[i].sIcon),                            sText: WebUser.teams[i].sTag,                            sValue: WebUser.teams[i].iTeamId                        };                        sHtml += getTemplateHtml(RadioItemTemplate, radio);                    }                    sHtml;                }}</div></div><div class="row"><div class="col s12 col-buttons"><a onclick="TournamentJoin()" class="btn">{{ babel("tournament.join") }}</a></div></div></div></div>';
var headerAppTemplate = '<header><div class="header-container"><a href="#" data-target="nav" class="sidenav-trigger"><i class="far fa-bars"></i></a><div class="valign-wrapper"><a href="{{ getPageLink(\'Home\') }}" onclick="navigate(\'Home\'); return false;" title="Home" style="display: inline-block;"><img alt="LoLSquare Logo" class="lolsquare-logo" src="{{ cdnLink(\'/images/logo/logo-white-transparent-40x40.png\') }}" /><span class="logo-text" title="{{ babel("base.home") }}">LoLSquare</span></a><a id="ddRegion" class="dropdown-trigger btn" data-target="ddRegionStructure" onclick="removePulseChangeRegion();" title="{{ babel("base.changeregion") }}">EUW</a><ul id="ddRegionStructure" class="dropdown-content">{{* populateRegionsDropdown() }}</ul></div><div></div><div class="search input-field"><label class="label-icon" for="search"><i class="far fa-search"></i></label><input id="search" class="autocomplete" type="search" placeholder="{{ babel("base.searchsummonerorteam") }}" autocomplete="off"></div><div class="search-mobile"><i class="far fa-search" onclick="SearchMobileShow();"></i></div><div></div><a id="ddLanguage" title="{{ babel("base.changelanguage") }}" class="dropdown-trigger" data-target="ulLanguage"><i class="fal fa-language"></i></a><ul id="ulLanguage" class="dropdown-content">{{* htmlChangeLanguageListItem() }}</ul><a id="idNotificationsBtn" class="center"></a><a id="idAccountBtn"></a></div><div id="SearchListMobile"><div class="row nmb"><div class="input-field col s12"><i class="far fa-arrow-left prefix black-text waves-effect" onclick="SearchMobileHide();"></i><input id="search-mobile" placeholder="{{ babel("base.searchsummonerorteam") }}" type="search"><i class="far fa-times suffix black-text waves-effect" onclick="SearchMobileClear();"></i></div></div><div class="row search-results-mobile"><div class="col s12"><ul class="collection wnc"></ul>{{* getTemplateHtml(NoContentItemTemplate, { bSmall: true, sIcon: \'fad fa-search\', sText: babel("base.nothingfoundsearchheader") }) }}</div></div></div></header>';
var InitialLoadingFacadeAppTemplate = '<div id="initial-loading-facade"><div class="logo"><div class="border"><div class="bteal"></div></div><div class="inner"></div><div class="square-out"><div class="single-pulse"></div></div><div class="square-in"></div></div><span></span></div>';
var mainAppTemplate = '<main><div class="sidecontent sx"></div><div class="maincontent"></div><div class="sidecontent dx"></div><footer><a href="https://twitter.com/SocialLoLSquare" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a><a class="center" onclick="callToSModal()" style="cursor: pointer;">TERMS OF SERVICE</a><a class="center" onclick="callPrivacyPoliciesModal()" style="cursor: pointer;">PRIVACY POLICY</a><p>All rights reserved.            LoLSquare.com isn\'t endorsed by Riot Games.</p></footer></main>';
var navAppTemplate = '<nav id="nav" class="sidenav sidenav-fixed"><div class="menu"><a href="{{ getPageLink(\'Home\') }}" onclick="navigate(\'Home\');return false;" title="{{ babel("base.home") }}" class="nav-home truncate waves-effect not-as-guest"><i class="far fa-home"></i>{{ babel("base.home") }}</a><div class="divider not-as-guest"></div><a onclick="changeRegion(null,true);return false;" title="{{ babel("base.backtohomeregion") }}" class="truncate waves-effect guest-only"><i class="far fa-arrow-left"></i>{{ babel("base.backtohomeregion") }}</a><div class="divider guest-only"></div><a href="{{ getPageLink(\'MyTeams\') }}" onclick="navigate(\'MyTeams\');return false;" title="{{ babel("base.myteams") }}" class="nav-myteams account-only myteams not-as-guest truncate waves-effect"><i class="far fa-users-crown"></i>{{ babel("base.myteams") }}</a><a href="{{ getPageLink(\'SearchTeam\') }}" onclick="navigate(\'SearchTeam\'); return false;" title="{{ babel("base.searchteam") }}" class="nav-searchteam truncate waves-effect"><i class="far fa-users"></i>{{ babel("base.searchteam") }}</a><a href="{{ getPageLink(\'EditTeam\') }}" onclick="navigate(\'EditTeam\');return false;" title="{{ babel("base.createteam") }}" class="nav-editteam signed-out-only not-as-guest truncate waves-effect"><i class="far fa-pen-nib"></i>{{ babel("base.createteam") }}</a><a href="{{ getPageLink(\'SearchMember\') }}" onclick="navigate(\'SearchMember\'); return false;" title="{{ babel("base.searchmember") }}" class="nav-searchmember truncate waves-effect"><i class="far fa-user"></i>{{ babel("base.searchmember") }}</a><a href="{{ getPageLink(\'TeamLeaderboard\') }}" onclick="navigate(\'TeamLeaderboard\'); return false;" title="{{ babel("base.teamsleaderboard") }}" class="nav-teamleaderboard truncate waves-effect"><i class="far fa-list-ol"></i>{{ babel("base.teamsleaderboard") }}</a><a href="{{ getPageLink(\'SearchTournament\') }}" onclick="navigate(\'SearchTournament\'); return false;" title="{{ babel("base.tournament",\'p\') }}" class="nav-searchtournament truncate waves-effect"><i class="far fa-trophy"></i>{{ babel("base.tournament",\'p\') }}</a><a onclick="callFeedbackModal(); return false;" title="{{ babel("base.sendfeedback") }}" class="truncate waves-effect nav-sub-item" style="margin-top:auto"><i class="far fa-comment-alt-exclamation"></i>{{ babel("base.sendfeedback") }}</a><a href="{{ getPageLink(\'FAQ\') }}" onclick="navigate(\'FAQ\'); return false;" title="{{ babel("base.faq") }}" class="nav-faq truncate waves-effect nav-sub-item"><i class="far fa-question-circle"></i>{{ babel("base.faq") }}</a><a href="{{ getPageLink(\'ChangeLog\') }}" onclick="navigate(\'ChangeLog\'); return false;" title="{{ babel("base.changelog") }}" class="nav-changelog truncate waves-effect nav-sub-item"><i class="far fa-clipboard-list"></i>{{ babel("base.changelog") }}</a><a href="{{ getPageLink(\'About\') }}" onclick="navigate(\'About\'); return false;" title="{{ babel("base.aboutus") }}" class="nav-about truncate waves-effect nav-sub-item"><i class="far fa-info-circle"></i>{{ babel("base.aboutus") }}</a></div></nav>';
var notificationsCenterAppTemplate = '<div id="idNotificationsCenter" class="card z-depth-3" style="display: none;"><div class="card-action card-header"><span class="title">{{ babel("base.notification",\'p\') }}</span><div class="preloader-wrapper active right"><div class="spinner-layer spinner-orange-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div><div class="card-content contain-scroll"><ul id="idNotificationsCollection" class="collection wnc"></ul><div class="nocontent" style="margin-top: 30px;"><i class="fad fa-bell-slash"></i><br><span style="font-size: 1.5rem;padding: 0 4rem;display: block;">{{ babel("base.nonotifications") }}</span></div></div></div>';
var userCenterAppTemplate = '<div id="idUserCenter" class="card"><div class="card-content profile loggedin"><a class="btn-flat transparent link"><img alt="Profile picture" class="circle left profile-icon" src=""><span class="name truncate"></span></a></div><div class="card-action loggedin"><a class="waves-effect waves-dark btn-flat right" onclick="userSignOut(true);">{{ babel("base.logout") }}</a><a class="waves-effect waves-dark btn-flat" href="{{ getPageLink(\'User\') }}" onclick="navigate(\'User\'); return false;"><i class="far fa-user-cog left"></i>{{ babel("base.setting",\'p\') }}</a></div><div class="card-content loggedout row nmb"><div class="col s12"><span class="title truncate">{{ babel("base.login") }}</span></div><div class="col s12 input-field"><input id="loginSummonerName" type="text" onkeypress="userKeypressLoginInputs(event);"><label for="loginSummonerName">{{ babel("base.summonername") }}</label></div><div class="col s12 input-field"><input id="loginPassword" type="password" onkeypress="userKeypressLoginInputs(event);"><label for="loginPassword" class="active">{{ babel("base.password") }}</label></div><div class="col s12"><a class="btn waves-effect" style="width: 100%" onclick="userSignIn();">{{ babel("base.login") }}</a></div><div id="loginErrorSuggestion" class="col s12 dnone"><p class="red-text">{{ babel("base.loginerrorsuggestion") }}</p></div></div><div class="card-action loggedout"><span href="{{ getPageLink(\'SearchSummoner\', \'Register\') }}" onclick="{{ getPageOnclick(\'SearchSummoner\', \'Register\') }}" class="link" style="opacity: 0.7">{{ babel("base.register") }}</span><span href="{{ getPageLink(\'SearchSummoner\', \'ChangePassword\') }}" onclick="{{ getPageOnclick(\'SearchSummoner\', \'ChangePassword\') }}" class="link right" style="opacity: 0.7">{{ babel("base.lostpassword") }}</span></div></div>';
var sModalBindId = "modalBindSummoner";
var $modalBindSummoner;
var mbsSummonerBinding;

function openModalBindSummoner(sSummonerName, iSummonerId) {
  closeModal(sModalBindId);
  if (isNullOrEmpty(sSummonerName) || iSummonerId < 0) {
      toastError(babel("toast.summonernotfound"));
      return;
  }
  mbsSummonerBinding = getLocal("Binding", sSummonerName);
  if (!mbsSummonerBinding)
      mbsSummonerBinding = {
          sName: sSummonerName,
          iSummonerId: iSummonerId,
          sCode: '',
          lId: 0,
          iCurrentStep: 0,
          iMediaCount: 0,
          bVerified: false
      };
  openModal(sModalBindId, getTemplateHtml(Modal_BindSummonerItemTemplate, {
      sSummonerName: mbsSummonerBinding.sName,
      sBindCode: mbsSummonerBinding.sCode
  }), false);
  $modalBindSummoner = $('#' + sModalBindId);
  $modalBindSummoner.find('#mbsPassword').keypress(function(event) {
      if (event.keyCode != 13)
          return;
      mbsBtnPasswordConfirm();
      event.preventDefault();
  });
  $('#' + sModalBindId + ' .tooltipped').tooltip();
  if (mbsSummonerBinding.iCurrentStep == 0)
      mbsSummonerBinding.iCurrentStep = 1;
  if (!isNullOrEmpty(mbsSummonerBinding.bVerified))
      $('#mbsBtnVerifyCode').text(babel("base.next"));
  if (mbsSummonerBinding.bVerified)
      mbsSummonerBinding.iCurrentStep = 4;
  mbsGoToStep(mbsSummonerBinding.iCurrentStep);
  if (windowLarge())
      for (var ind in mbsMedia)
          preloadImage(GetChampionSplashById(mbsMedia[ind].sChampId, mbsMedia[ind].iSkinId));
}

function pendModalBindSummoner() {
  $modalBindSummoner.find(".modal-content a").addClass("disabled");
  $modalBindSummoner.find(".modal-footer a").addClass("disabled");
  $modalBindSummoner.find("input").attr("disabled", "disabled");
}

function doneModalBindSummoner() {
  $modalBindSummoner.find("a").removeClass("disabled");
  $modalBindSummoner.find("input").removeAttr("disabled");
}

function mbsCopyBindCode() {
  copyTextToClipboard(mbsSummonerBinding.sCode.toUpperCase());
}
var mbsMedia = [{}, {
  sChampId: 'Mordekaiser',
  iSkinId: 0
}, {
  sChampId: 'Lux',
  iSkinId: 8
}, {
  sChampId: 'Pantheon',
  iSkinId: 0
}, {
  sChampId: 'Fiora',
  iSkinId: 4
}, {
  sChampId: 'Annie',
  iSkinId: 12
}];

function mbsChangeMedia() {
  $modalBindSummoner.find(".modal-media").css('background-image', 'url(' + GetChampionSplashById(mbsMedia[mbsSummonerBinding.iCurrentStep].sChampId, mbsMedia[mbsSummonerBinding.iCurrentStep].iSkinId) + ')');
}

function mbsGoNextStep() {
  mbsGoToStep(mbsSummonerBinding.iCurrentStep + 1);
}

function mbsGoPrevStep() {
  mbsGoToStep(mbsSummonerBinding.iCurrentStep - 1);
}

function mbsGoToStep(iStep) {
  $modalBindSummoner.find(".steps-counter > div").removeClass("done active");
  $("#step_counter_" + iStep).addClass("active");
  for (var i = iStep; i > 0; i--)
      $("#step_counter_" + i).addClass("done");
  $modalBindSummoner.find(".modal-content > div").addClass("dnone");
  $('#mbsStep' + iStep).removeClass("dnone");
  $modalBindSummoner.find(".modal-footer > div").addClass("dnone");
  $('#mbsStep' + iStep + 'btns').removeClass("dnone");
  mbsSummonerBinding.iCurrentStep = iStep;
  mbsChangeMedia();
}

function mbsBtnGetBindCode(bReloadCode) {
  if (!isNullOrEmpty(mbsSummonerBinding.sCode)) {
      mbsGoNextStep();
      return;
  }
  var ajaxObj = {
      sCode: 'mbs',
      sSvcPage: 'Summoner',
      sMethod: 'GetBindCode',
      moreParams: bReloadCode
  };
  var fnHandlers = {
      fnPend: function() {
          pendModalBindSummoner();
      },
      fnDone: function() {
          doneModalBindSummoner();
      },
      fnOs: function(ajax, obj) {
          if (ajax.moreParams)
              toastSuccess(babel("toast.bindcodeupdated"));
          mbsSummonerBinding.lId = obj.value.iBindID;
          mbsSummonerBinding.sCode = obj.value.sCode;
          setLocal("Binding", mbsSummonerBinding.sName, mbsSummonerBinding);
          $modalBindSummoner.find('.bindcode').text(mbsSummonerBinding.sCode);
          mbsGoNextStep();
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: mbsSummonerBinding.iSummonerId
  }, fnHandlers);
}

function mbsBtnVerifyCode() {
  if (mbsSummonerBinding.bVerified) {
      mbsGoNextStep();
      return;
  }
  var ajaxObj = {
      sCode: 'mbs',
      sSvcPage: 'Summoner',
      sMethod: 'VerifyBindCode'
  };
  var fnHandlers = {
      fnPend: function() {
          pendModalBindSummoner();
      },
      fnDone: function() {
          doneModalBindSummoner();
      },
      fnOe: function() {
          $("#mbsAlert3").removeClass("dnone");
      },
      fnOs: function(ajax, obj) {
          mbsSummonerBinding.bVerified = true;
          setLocal("Binding", mbsSummonerBinding.sName, mbsSummonerBinding);
          $('#mbsBtnVerifyCode').text(babel("base.next"));
          mbsGoNextStep();
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerBindingId: mbsSummonerBinding.lId
  }, fnHandlers);
}

function mbsBtnPasswordConfirm() {
  var sPassword = $modalBindSummoner.find('#mbsPassword').val();
  if (isNullOrEmpty(sPassword)) {
      toastError(babel("toast.choosepassword"));
      return;
  }
  var ajaxObj = {
      sCode: 'mbs',
      sSvcPage: 'Summoner',
      sMethod: 'SetBindPassword'
  };
  var fnHandlers = {
      fnPend: function() {
          pendModalBindSummoner();
      },
      fnDone: function() {
          doneModalBindSummoner();
      },
      fnOe: function() {
          $("#mbsAlert3").removeClass("dnone");
      },
      fnOs: function(ajax, obj) {
          setLocal("Binding", "isFirstRegistration", obj.value.isFirstRegistration);
          delLocal("Binding", mbsSummonerBinding.sName);
          setLocal("user", "token", {
              id: mbsSummonerBinding.iSummonerId,
              region: getRegion(true),
              token: obj.value.sToken
          });
          toastSuccess(babel("toast.summonersuccesfullybound"));
          userRestoreSignIn();
          mbsGoNextStep();
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerBindingId: mbsSummonerBinding.lId,
      sPassword: sPassword
  }, fnHandlers);
}

function mbsCloseAndWelcome() {
  closeModal(sModalBindId);
  if (getLocal("Binding", "isFirstRegistration"))
      registrationWelcomeModal();
  delLocal("Binding", "isFirstRegistration");
}

function mbsBindingNotFound() {
  delLocal("Binding", mbsSummonerBinding.sName);
  closeModal(sModalBindId);
  toastError(babel("toast.bindingcodeexpired"));
}

function updateDonutProgress(id, value) {
  var svg = $("#" + id);
  var progressValue = $('#' + id + ' .value');
  if (!svg.length)
      return;
  var w = svg[0].getAttribute("width").replace("px", "").replace("rem", "").replace("%", "").replace("vw", "").replace("vh", "");
  var thickness = w / 10;
  var radius = w * 45 / 100;
  var circumference = 2 * Math.PI * radius;
  var progress = value / 100;
  var dashoffset = circumference * (1 - progress);
  svg.attr("viewBox", "0 0 " + w + " " + w);
  svg.children().attr("cx", w / 2).attr("cy", w / 2).attr("r", radius).attr("stroke-width", thickness);
  progressValue.css("stroke-dasharray", circumference);
  progressValue.css("stroke-dashoffset", dashoffset);
}
var reactionEmoji = {
  1: ['134-like-5.svg', "Like"],
  2: ['014-heart-12.svg', "Love"],
  3: ['065-angry-2.svg', "Angry"],
  4: ['064-crying-1.svg', "Sad"]
};

function getHtmlImgEmoji(iEmojiIndex) {
  return '<img src="' + cdnLink("/images/emoji/" + reactionEmoji[iEmojiIndex][0]) + '" alt="' + reactionEmoji[iEmojiIndex][1] + ' reaction emoji" />';
}

function FeedCreateReactionsCounters(feed) {
  var sHtml = "";
  for (var i in feed.reactionCounts) {
      if (i === "myReaction") continue;
      var iCount = feed.reactionCounts[i];
      if (feed.iMyReactionClient) {
          if (feed.iMyReaction == i && feed.iMyReactionClient != i)
              iCount--;
          if (feed.iMyReaction != i && feed.iMyReactionClient == i)
              iCount++;
      }
      if (iCount > 0)
          sHtml += '<div class="reaction" title="' + reactionEmoji[i][1] + ' reaction count: ' + iCount + '">' + getHtmlImgEmoji(i) + iCount + '</div>';
  }
  return sHtml;
}

function FeedCreateReactionsOptionsButtonText(feed) {
  var iMyReaction = feed.iMyReactionClient;
  if (!iMyReaction)
      iMyReaction = feed.iMyReaction;
  var sText = "";
  if (iMyReaction != 0)
      sText += getHtmlImgEmoji(iMyReaction);
  else
      sText += '<i class="far fa-smile-plus"></i>';
  return sText;
}

function FeedCreateReactionsOptions(iFeedEntryId) {
  var feed = HomeGetFeedEntryFromId(iFeedEntryId);
  var sHtml = "";
  var iMyReaction;
  for (var i in reactionEmoji) {
      iMyReaction = feed.iMyReactionClient;
      if (!iMyReaction)
          iMyReaction = feed.iMyReaction;
      if (i != iMyReaction)
          sHtml += '<li><a onclick="FeedSetReaction(' + iFeedEntryId + ',' + i + ')" class="waves-effect">' + getHtmlImgEmoji(i) + reactionEmoji[i][1] + '</a></li>';
      else
          sHtml += '<li><a onclick="FeedSetReaction(' + iFeedEntryId + ',' + 0 + ')" class="waves-effect"><i class="far fa-times"></i>Clear</a></li>';
  }
  return sHtml;
}

function FeedUpdateReactions(iFeedEntryId, iReactionType) {
  var feed = HomeGetFeedEntryFromId(iFeedEntryId);
  if (iReactionType == 0)
      feed["iMyReactionClient"] = null;
  else
      feed["iMyReactionClient"] = iReactionType;
  if (iReactionType == 0 && feed.iMyReaction != 0) {
      feed.reactionCounts[feed.iMyReaction]--;
      feed.iMyReaction = 0;
  }
  $("#feed_" + feed.lFeedEntryId + " .card-footer .reaction").remove();
  $("#feed_" + feed.lFeedEntryId + " .card-footer").append(FeedCreateReactionsCounters(feed));
  $("#dd_" + feed.lFeedEntryId).empty();
  $("#dd_" + feed.lFeedEntryId).append(FeedCreateReactionsOptions(feed.lFeedEntryId));
  $("#feed_" + feed.lFeedEntryId + " .card-footer a.dropdown-trigger").empty();
  $("#feed_" + feed.lFeedEntryId + " .card-footer a.dropdown-trigger").html(FeedCreateReactionsOptionsButtonText(feed));
}

function FeedSetReaction(iFeedEntryId, iReactionType) {
  if (!isUserLogged(true)) return;
  var objAjax = {
      sCode: 'Feed',
      sSvcPage: 'User',
      sMethod: 'SetReaction'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#feed_" + ajax.params.iFeedEntryId + " .card-footer a.dropdown-trigger").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#feed_" + ajax.params.iFeedEntryId + " .card-footer a.dropdown-trigger").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          FeedUpdateReactions(ajax.params.iFeedEntryId, ajax.params.iReactionType);
      }
  };
  ajaxCallObj(objAjax, {
      iFeedEntryId: iFeedEntryId,
      iReactionType: iReactionType
  }, fnHandlers);
}

function FeedCreateFeedHeader(objFeed) {
  if (!(objFeed.iType in feedTemplateContent))
      return "Feed entry type not handled";
  var sImgSrc = "";
  var sName = "";
  var sOnClick = "";
  var sHref = "";
  var i;
  if (feedTemplateContent[objFeed.iType].headerType == EntityType.Summoner) {
      for (i in objFeed.targetSummonersCollection)
          if (objFeed.targetSummonersCollection[i].junctionData.iType === FeedParameterType.MainTarget) {
              sImgSrc = getUrlProfileIcon(objFeed.targetSummonersCollection[i].sName, objFeed.targetSummonersCollection[i].iIcon);
              sName = objFeed.targetSummonersCollection[i].sName;
              sOnClick = getSummonerPageOnclick(objFeed.targetSummonersCollection[i]);
              sHref = getSummonerPageLink(objFeed.targetSummonersCollection[i]);
          }
  } else if (feedTemplateContent[objFeed.iType].headerType == EntityType.Team) {
      for (i in objFeed.targetTeamsCollection)
          if (objFeed.targetTeamsCollection[i].junctionData.iType === FeedParameterType.MainTarget) {
              sImgSrc = getTeamLogoLinkById(objFeed.targetTeamsCollection[i].sIcon);
              sName = getTeamFullName(objFeed.targetTeamsCollection[i]);
              if (!objFeed.targetTeamsCollection[i].bIsDeleted) {
                  sOnClick = getTeamPageOnclick(objFeed.targetTeamsCollection[i]);
                  sHref = getTeamPageLink(objFeed.targetTeamsCollection[i]);
              }
          }
  } else if (feedTemplateContent[objFeed.iType].headerType == "Champion") {
      for (i in objFeed.intParameterCollection)
          if (objFeed.intParameterCollection[i].iType === FeedParameterType.ChampionId) {
              sImgSrc = GetChampionIconById(objFeed.intParameterCollection[i].iValue);
              sName = GetChampionNameById(objFeed.intParameterCollection[i].iValue);
              sOnClick = getPageOnclick("Champion", GetChampionNameById(objFeed.intParameterCollection[i].iValue, true));
              sHref = getPageLink("Champion", GetChampionNameById(objFeed.intParameterCollection[i].iValue, true));
          }
  }
  if (!isNullOrEmpty(sOnClick) || !isNullOrEmpty(sHref))
      return '<div class="card-header link" onclick="' + sOnClick + ';return false;" href="' + sHref + '"><img class="main" src="' + sImgSrc + '" alt="Actor icon"><span class="truncate">' + sName + '</span></div>';
  else
      return '<div class="card-header"><img class="main" src="' + sImgSrc + '" alt="Actor icon"><span class="truncate">' + sName + '</span></div>';
}

function FeedCreateFeedContent(objFeed) {
  if (!(objFeed.iType in feedTemplateContent))
      return "Feed entry type not handled";
  var split = feedTemplateContent[objFeed.iType].html.split('#');
  var sHtml = "";
  for (var i = 0; i < split.length - 1; i++)
      sHtml += split[i] + FeedGetFeedParameterHtml(objFeed, feedTemplateContent[objFeed.iType].params[i]);
  sHtml += split[split.length - 1];
  return sHtml;
}

function FeedGetFeedParameterHtml(objFeed, objParameter) {
  var i = null;
  if (objParameter.bArrayAllOfType) {
      var sHtml = "";
      if (objParameter.iEntityType === EntityType.Summoner) {
          for (i in objFeed.targetSummonersCollection)
              if (objFeed.targetSummonersCollection[i].junctionData.iType === objParameter.iFeedParameterType) {
                  if (objParameter.bLink)
                      sHtml += getTemplateHtml(FeedSummonerLinkItemTemplate, objFeed.targetSummonersCollection[i]) + ", ";
              }
      }
      if (sHtml.length > 2)
          sHtml = sHtml.substring(0, sHtml.length - 2);
      return sHtml;
  }
  if (objParameter.iEntityType === EntityType.FeedStringParameter) {
      for (i in objFeed.stringParameterCollection)
          if (objFeed.stringParameterCollection[i].iType === objParameter.iFeedParameterType)
              return objFeed.stringParameterCollection[i].sValue;
  }
  if (objParameter.iEntityType === EntityType.FeedIntParameter) {
      for (i in objFeed.intParameterCollection)
          if (objFeed.intParameterCollection[i].iType === objParameter.iFeedParameterType) {
              if (objParameter.iFeedParameterType == FeedParameterType.ChampionId)
                  return getTemplateHtml(FeedChampionLinkItemTemplate, objFeed.intParameterCollection[i].iValue);
              else if (objParameter.iFeedParameterType == FeedParameterType.QueueType)
                  return getQueueDescription(objFeed.intParameterCollection[i].iValue);
              else if (objParameter.iFeedParameterType == FeedParameterType.Years) {
                  var sText = objFeed.intParameterCollection[i].iValue;
                  if (objParameter.bYearsText)
                      sText += " year" + (objFeed.intParameterCollection[i].iValue > 1 ? "s" : "");
                  return sText;
              } else
                  return objFeed.intParameterCollection[i].iValue;
          }
  }
  if (objParameter.iEntityType === EntityType.Summoner) {
      for (i in objFeed.targetSummonersCollection)
          if (objFeed.targetSummonersCollection[i].junctionData.iType === objParameter.iFeedParameterType) {
              if (objParameter.bLink)
                  return getTemplateHtml(FeedSummonerLinkItemTemplate, objFeed.targetSummonersCollection[i]);
          }
  }
  if (objParameter.iEntityType === EntityType.Team) {
      for (i in objFeed.targetTeamsCollection)
          if (objFeed.targetTeamsCollection[i].junctionData.iType === objParameter.iFeedParameterType) {
              if (objParameter.bLink)
                  return getTemplateHtml(FeedTeamLinkItemTemplate, objFeed.targetTeamsCollection[i]);
          }
  }
}
var feedTemplateContent = {
  1: {},
  2: {
      html: '<span># has created a new team #</span>',
      headerType: EntityType.Summoner,
      params: [{
          bLink: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          bLink: true,
          iEntityType: EntityType.Team,
          iFeedParameterType: FeedParameterType.MainTarget
      }]
  },
  3: {
      html: '<span># has joined the team #</span>',
      headerType: EntityType.Summoner,
      params: [{
          bLink: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          bLink: true,
          iEntityType: EntityType.Team,
          iFeedParameterType: FeedParameterType.MainTarget
      }]
  },
  4: {
      html: '<span># has left the team #</span>',
      headerType: EntityType.Summoner,
      params: [{
          bLink: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          bLink: true,
          iEntityType: EntityType.Team,
          iFeedParameterType: FeedParameterType.MainTarget
      }]
  },
  5: {
      html: '<span>The team # has been disbanded</span>',
      headerType: EntityType.Team,
      params: [{
          bLink: true,
          iEntityType: EntityType.Team,
          iFeedParameterType: FeedParameterType.MainTarget
      }]
  },
  6: {
      html: '<span>The team [#] # has been renamed to #</span>',
      headerType: EntityType.Team,
      params: [{
          iEntityType: EntityType.FeedStringParameter,
          iFeedParameterType: FeedParameterType.TeamOldTag
      }, {
          iEntityType: EntityType.FeedStringParameter,
          iFeedParameterType: FeedParameterType.TeamOldName
      }, {
          bLink: true,
          iEntityType: EntityType.Team,
          iFeedParameterType: FeedParameterType.MainTarget
      }]
  },
  7: {
      html: '<span>The summoner # scored a pentakill</span>',
      headerType: EntityType.Summoner,
      params: [{
          bLink: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.MainTarget
      }]
  },
  8: {
      html: '<span>The summoner # has made it to # in #</span>',
      headerType: EntityType.Summoner,
      params: [{
          bLink: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          iEntityType: EntityType.FeedStringParameter,
          iFeedParameterType: FeedParameterType.RankTier
      }, {
          iEntityType: EntityType.FeedIntParameter,
          iFeedParameterType: FeedParameterType.QueueType
      }]
  },
  9: {
      html: '<span>The team # has made it to # in Ranked Flex</span>',
      headerType: EntityType.Team,
      params: [{
          bLink: true,
          iEntityType: EntityType.Team,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          iEntityType: EntityType.FeedStringParameter,
          iFeedParameterType: FeedParameterType.RankTier
      }]
  },
  10: {
      html: '<span># has registered # ago today!</span>',
      headerType: EntityType.Summoner,
      params: [{
          bLink: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          bYearsText: true,
          iEntityType: EntityType.FeedIntParameter,
          iFeedParameterType: FeedParameterType.Years
      }]
  },
  11: {
      html: '<span># is now # old!</span>',
      headerType: EntityType.Team,
      params: [{
          bLink: true,
          iEntityType: EntityType.Team,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          bYearsText: true,
          iEntityType: EntityType.FeedIntParameter,
          iFeedParameterType: FeedParameterType.Years
      }]
  },
  12: {
      html: '<span>Today is # #° anniversary, here are some OTP: #</span>',
      headerType: "Champion",
      params: [{
          iEntityType: EntityType.FeedIntParameter,
          iFeedParameterType: FeedParameterType.ChampionId
      }, {
          iEntityType: EntityType.FeedIntParameter,
          iFeedParameterType: FeedParameterType.Years
      }, {
          bLink: true,
          bArrayAllOfType: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.SecondaryTarget
      }]
  },
  13: {
      html: '<span># is now following #</span>',
      headerType: EntityType.Summoner,
      params: [{
          bLink: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.MainTarget
      }, {
          bLink: true,
          bArrayAllOfType: true,
          iEntityType: EntityType.Summoner,
          iFeedParameterType: FeedParameterType.SecondaryTarget
      }]
  }
};

function FeedTestHandling() {
  for (var ind in FeedType)
      if (!(FeedType[ind] in feedTemplateContent))
          toastError("Feed entry type not handled " + ind);
}

function callFeedbackModal() {
  closeSideNav();
  openModal('modalFeedback', getTemplateHtml(Modal_FeedbackItemTemplate));
  $('select').formSelect();
  $('#textareaFeedback').focus();
}

function callSendFeedback() {
  var sMessage = $("#textareaFeedback").val();
  var sType = $("#modalFeedback select").val();
  $("#textareaFeedback").val('');
  if (isNullOrEmpty(sMessage)) return;
  var browserInfo = getBrowserInfo();
  var sBrowser = browserInfo.browserName + ' ' + browserInfo.majorVersion;
  ajaxCall(null, 'User', 'SaveFeedback', {
      sMessage: sMessage,
      sPage: getPageName(),
      sVersion: svnRevision,
      sType: sType,
      sBrowser: sBrowser
  });
  toastSuccess(babel("toast.thanksfeedback"), 'fad fa-heart-circle');
}

function clickFollowButton(bSummoner, lId, iRegion) {
  if (!isUserLogged(true)) return;
  var $chip = $(".chip.follow");
  var bFollow = !$chip.hasClass("f");
  var sCode = "fb";
  var bVProgress = false;
  if (bFollow) {
      if (bSummoner)
          callFollowSummoner(sCode, lId, iRegion, bVProgress);
      else
          callFollowTeam(sCode, lId, iRegion, bVProgress);
  } else {
      if (bSummoner)
          callUnfollowSummoner(sCode, lId, iRegion, bVProgress);
      else
          callUnfollowTeam(sCode, lId, iRegion, bVProgress);
  }
}

function fbPendFollow() {
  $(".chip.follow").addClass("disabled z-depth-0");
}

function fbDoneFollow() {
  $(".chip.follow").removeClass("disabled z-depth-0");
}

function fbOsFollow() {
  var $chip = $(".chip.follow");
  $chip.addClass("f");
  $chip.addClass("just-followed");
  $chip.off("mouseleave");
  $chip.off("mouseenter");
  $chip.mouseleave(function() {
      $chip.removeClass("just-followed");
      $chip.off("mouseleave");
      $chip.off("mouseenter");
  });
  $chip.mouseenter(function() {
      $chip.removeClass("just-followed");
      $chip.off("mouseleave");
      $chip.off("mouseenter");
  });
  if (getPageName() == "Summoner") {
      SummonerSummoner.iFollowers++;
      SummonerUpdateFollowersCount();
  }
  if (getPageName() == "Team") {
      TeamTeam.iFollowers++;
      TeamUpdateFollowersCount();
  }
}

function fbPendUnfollow() {
  $(".chip.follow").addClass("disabled z-depth-0");
}

function fbDoneUnfollow() {
  $(".chip.follow").removeClass("disabled z-depth-0");
}

function fbOsUnfollow() {
  $(".chip.follow").removeClass("f");
  if (getPageName() == "Summoner") {
      SummonerSummoner.iFollowers--;
      SummonerUpdateFollowersCount();
  }
  if (getPageName() == "Team") {
      TeamTeam.iFollowers--;
      TeamUpdateFollowersCount();
  }
}

function SummonerFollowPendLI(ajax) {
  $("#" + ajax.moreParams.sFollowListItemId + " a").addClass("disabled");
}

function SummonerFollowDoneLI(ajax) {
  $("#" + ajax.moreParams.sFollowListItemId + " a").removeClass("disabled");
}
var $search;
var $searchInput;
var SearchedList;
var SearchedIsStartedFromAutocomplete;

function SearchInitialization() {
  $search = $header.find(".search");
  $searchInput = $search.find("input");
  $searchInput.autocomplete({
      data: {},
      limit: 10,
      minLength: 0,
      onAutocomplete: function(val) {
          SearchOnAutocomplete(val);
      }
  });
  $searchInput.on('focus', SearchFocus);
  $searchInput.on('blur focusout', SearchBlur);
  $searchInput.on('keydown', SearchKeydown);
  $("#search-mobile").on('keyup', SearchMobileKeyUp);
  SearchGetSearchedList();
  SearchUpdateSearchHistory();
}

function SearchFocus(event) {
  SearchedIsStartedFromAutocomplete = false;
  $search.addClass("active");
  $searchInput.select();
}

function SearchBlur(event) {
  $search.removeClass("active");
}

function SearchOnAutocomplete(val) {
  SearchedIsStartedFromAutocomplete = true;
  var searchedItem = SearchGetSearchedBy(null, val);
  if (!searchedItem) return;
  switch (searchedItem.type) {
      case EntityType.Summoner:
          navigate('Summoner', searchedItem.id + "/" + searchedItem.name);
          break;
      case EntityType.Team:
          navigate('Team', searchedItem.id);
          break;
      default:
          break;
  }
  return false;
}

function SearchKeydown(event) {
  if (event.keyCode == 13) {
      if (SearchedIsStartedFromAutocomplete)
          return;
      var sSearched = $searchInput.val();
      if (!isNullOrEmpty(sSearched)) {
          navigate("SearchResults", sSearched);
          $searchInput.blur();
      }
      event.preventDefault();
      return false;
  }
  SearchedIsStartedFromAutocomplete = false;
}

function SearchClear() {
  $searchInput.val("");
}

function SearchSelect() {
  $searchInput.val("");
}

function SearchUpdateSearchHistory() {
  var data = {};
  for (var i in SearchedList) {
      var sIcon;
      if (SearchedList[i].type == EntityType.Summoner)
          sIcon = getUrlProfileIcon(SearchedList[i].name, SearchedList[i].icon);
      else if (SearchedList[i].type == EntityType.Team)
          sIcon = getTeamLogoLinkById(SearchedList[i].icon);
      data[SearchedList[i].name] = sIcon;
  }
  $searchInput.autocomplete('updateData', data);
}

function SearchGetSearchedBy(id, name) {
  if (id > 0)
      for (var i in SearchedList)
          if (SearchedList[i].id == id)
              return SearchedList[i];
  if (!isNullOrEmpty(name))
      for (var i in SearchedList)
          if (SearchedList[i].name.standardize() == name.standardize())
              return SearchedList[i];
}

function SearchGetSearchedList() {
  SearchedList = getLocal("Header", "SearchedList");
  if (!SearchedList)
      SearchedList = [];
}

function SearchAddSearchedListObj(type, obj, bUpdate) {
  if (!obj || !type) return;
  switch (type) {
      case EntityType.Summoner:
          SearchAddSearchedList(type, obj.iSummonerId, obj.sName, obj.iProfileIconId, bUpdate);
          break;
      case EntityType.Team:
          SearchAddSearchedList(type, obj.iTeamId, getTeamFullName(obj), obj.sIcon, bUpdate);
          break;
      default:
          break;
  }
}

function SearchAddSearchedList(type, id, name, icon, bUpdate) {
  if (!type || !id || isNullOrEmpty(name) || isNullOrEmpty(icon)) return;
  if (bUpdate) {
      SearchUpdateSearchedList(type, id, name, icon);
  } else {
      SearchRemoveSearchedList(type, id);
      SearchedList.unshift({
          'type': type,
          'id': id,
          'name': name,
          'icon': icon
      });
  }
  setLocal("Header", "SearchedList", SearchedList);
  SearchUpdateSearchHistory();
}

function SearchUpdateSearchedList(type, id, name, icon) {
  if (!type || !id || isNullOrEmpty(name) || isNullOrEmpty(icon)) return;
  for (var i = 0; i < SearchedList.length; i++)
      if (SearchedList[i].type == type && SearchedList[i].id == id) {
          SearchedList[i].name = name;
          SearchedList[i].icon = icon;
          break;
      }
}

function SearchRemoveSearchedList(type, id) {
  if (!type || !id) return;
  for (var i = 0; i < SearchedList.length; i++)
      if (SearchedList[i].type == type && SearchedList[i].id == id) {
          SearchedList.splice(i, 1);
          break;
      }
}

function SearchMobileShow() {
  $("html").addClass("overflow-hidden-search-mobile");
  $("#SearchListMobile").addClass("visible");
  $("#search-mobile").select();
  SearchMobilePopulateList("");
}

function SearchMobileHide() {
  $("html").removeClass("overflow-hidden-search-mobile");
  $("#SearchListMobile").removeClass("visible");
  $("#search-mobile").val("");
}

function SearchMobileClear() {
  $("#search-mobile").val("").select();
  SearchMobilePopulateList();
}

function SearchMobileKeyUp(event) {
  if (event.keyCode == 13) {
      var sSearched = $("#search-mobile").val();
      if (!isNullOrEmpty(sSearched))
          navigate("SearchResults", sSearched);
      event.preventDefault();
      return false;
  }
  SearchMobilePopulateList($("#search-mobile").val());
}

function SearchMobilePopulateList(sText) {
  var $list = $("#SearchListMobile ul");
  $list.empty();
  var iResultsCount = 0;
  var sClass = " slide-up";
  if (!isNullOrEmpty(sText)) {
      sClass = "";
      sText = sText.toLowerCase();
  }
  for (var i in SearchedList) {
      if (!isNullOrEmpty(sText) && !SearchedList[i].name.toLowerCase().contains(sText))
          continue;
      var sIcon;
      var sOnclick;
      if (SearchedList[i].type == EntityType.Summoner) {
          sIcon = getUrlProfileIcon(SearchedList[i].name, SearchedList[i].icon);
          sOnclick = getPageOnclick("Summoner", SearchedList[i].id + "/" + SearchedList[i].name);
      } else if (SearchedList[i].type == EntityType.Team) {
          sIcon = getTeamLogoLinkById(SearchedList[i].icon);
          sOnclick = getPageOnclick("Team", SearchedList[i].id);
      }
      $list.append('<li onclick="' + sOnclick + '" class="collection-item' + sClass + '"><img src="' + sIcon + '">' + SearchedList[i].name + '</li>');
      iResultsCount++;
      if (iResultsCount == 20)
          break;
  }
}
var sModalInviteSummonerId = "modalInviteSummoner";
var $modalInviteSummoner;
var misDTOSummoner;
var misDTOTeam;
var misFnOsInvite;

function openModalInviteSummoner(dtoSummoner, dtoTeam, fnOsInvite) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  misDTOSummoner = null;
  misDTOTeam = null;
  misFnOsInvite = fnOsInvite;
  closeModal(sModalInviteSummonerId);
  openModal(sModalInviteSummonerId, getTemplateHtml(Modal_InviteSummonerItemTemplate, {
      sId: sModalInviteSummonerId,
      sTeamLink: getTeamPageLink(dtoTeam)
  }));
  $modalInviteSummoner = $('#' + sModalInviteSummonerId);
  if (dtoSummoner && dtoSummoner.iSummonerId > 0) {
      misDTOSummoner = dtoSummoner;
      $modalInviteSummoner.find("#misRowSummoner").addClass("dnone");
  } else {
      $modalInviteSummoner.find('#misSummonerName').keypress(function(event) {
          if (event.keyCode != 13)
              return;
          misSearchSummoner();
          event.preventDefault();
      });
      $modalInviteSummoner.find('#misSummonerName').focus();
  }
  if (dtoTeam && dtoTeam.iTeamId > 0) {
      misDTOTeam = dtoTeam;
      $modalInviteSummoner.find("#misRowTeam").addClass("dnone");
  } else {
      misCreateTeamsRadio();
  }
  misCreateRolesRadio();
}

function misPendModal() {
  $modalInviteSummoner.find('a').addClass('disabled');
  $modalInviteSummoner.find('a').find('.progress').removeClass('dnone');
  $modalInviteSummoner.find('input').attr('disabled', 'disabled');
}

function misDoneModal() {
  $modalInviteSummoner.find('a').removeClass('disabled');
  $modalInviteSummoner.find('a').find('.progress').addClass('dnone');
  $modalInviteSummoner.find('input').attr('disabled', false);
}

function misSearchSummoner() {
  var ajaxObj = {
      sCode: 'mis',
      sSvcPage: 'Summoner',
      sMethod: 'SearchMembersByName'
  };
  var fnHandlers = {
      fnPend: function() {
          misDTOSummoner = null;
          misPendModal();
      },
      fnDone: function() {
          misDoneModal();
      },
      fnOe: function() {
          misSearchSummonerNotFound();
      },
      fnOs: function(ajax, obj) {
          if (!hasSome(obj.value)) {
              misSearchSummonerNotFound();
              return;
          }
          $modalInviteSummoner.find(".misSummInfo").empty();
          var sHtml = "";
          for (var i in obj.value)
              sHtml += getTemplateHtml(InviteSummonerSearchResultsSummonerItemTemplate, obj.value[i]);
          $modalInviteSummoner.find(".misSummInfo").append('<div class="col s12"><ul class="collection search-results">' + sHtml + '</ul></div>');
          misSelectSummoner(obj.value[0].iSummonerId, obj.value[0].sName);
      }
  };
  ajaxCallObj(ajaxObj, {
      sText: $modalInviteSummoner.find("#misSummonerName").val()
  }, fnHandlers);
}

function misSearchSummonerNotFound() {
  $modalInviteSummoner.find(".misSummInfo").empty().append(getTemplateHtml(NoContentItemTemplate, {
      bSmall: true,
      bWnc: true,
      sIcon: 'fad fa-search',
      sText: babel("toast.summonertoinvitenotfound")
  }));
  toastInfo(babel("toast.summonernotfound"));
}

function misSelectSummoner(iSummonerId, sName) {
  misDTOSummoner = {
      iSummonerId: iSummonerId,
      sName: sName
  };
  $(".misSummInfo .collection-item").removeClass("selected");
  $("#misSummonerResult" + iSummonerId).addClass("selected");
}

function misCreateTeamsRadio() {
  if (WebUser.teams && WebUser.teams.length > 0)
      for (var i in WebUser.teams) {
          var radio = {
              sGroupName: "group-team",
              sImgSrc: getTeamLogoLinkById(WebUser.teams[i].sIcon),
              sText: WebUser.teams[i].sTag,
              sValue: WebUser.teams[i].iTeamId
          };
          $modalInviteSummoner.find("#misRowTeam > .row").append('<div class="col s12 m4">' + getTemplateHtml(RadioItemTemplate, radio) + '</div>');
      }
  else
      $modalInviteSummoner.find("#misRowTeam > .row").append('<div class="col s12"><p>' + babel("base.youneedateamtoinvite") + '</p></div>');
}

function misCreateRolesRadio() {
  for (var i in RoleType) {
      var radio = {
          sGroupName: "group-role",
          sImgSrc: getRoleIcon(RoleType[i]),
          sText: babelEnum("RoleType", RoleType[i]),
          sValue: RoleType[i]
      };
      if (RoleType[i] == RoleType.Fill)
          radio.bChecked = true;
      $modalInviteSummoner.find("#misRowRole > .row").append('<div class="col s12 m4">' + getTemplateHtml(RadioItemTemplate, radio) + '</div>');
  }
}

function misBtnConfirmInvite() {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (!misDTOSummoner || misDTOSummoner.iSummonerId < 1) {
      toastInfo(babel("toast.needtochoosesummonertoinvite"));
      return;
  }
  var ajaxParams = {
      iTeamId: misDTOTeam ? misDTOTeam.iTeamId : getSelectedRadioValue('#misRowTeam', 'group-team'),
      iSummonerId: misDTOSummoner.iSummonerId,
      iRole: getSelectedRadioValue('#misRowRole', 'group-role')
  };
  if (!ajaxParams.iTeamId || ajaxParams.iTeamId == 0) {
      toastError(babel("toast.needtochooseteamtoinvite"));
      return;
  }
  if (ajaxParams.iRole == 0) {
      toastError(babel("toast.needtochooseroletoinvite"));
      return;
  }
  var ajaxObj = {
      sCode: 'mis',
      sSvcPage: 'Team',
      sMethod: 'Invite'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          misPendModal();
      },
      fnDone: function(ajax) {
          misDoneModal();
      },
      fnOs: function(ajax, obj) {
          if (hasSome(obj.AdditionalData.UnaivalabilityReasons))
              return;
          closeModal(sModalInviteSummonerId);
          if (misFnOsInvite != null)
              misFnOsInvite(ajax, obj);
      }
  };
  ajaxCallObj(ajaxObj, ajaxParams, fnHandlers);
}

function openModalReport(iEntityType, iTargetId) {
  closeModal("modalReport");
  openModal("modalReport", getTemplateHtml(Modal_ReportItemTemplate, {
      iEntityType: iEntityType,
      iTargetId: iTargetId
  }));
  $('#modalReport select').append(getSelectOptionFromEnum("ReportCategory"));
  $('#modalReport select').formSelect();
}

function callSendReport(iEntityType, iTargetId) {
  var ajaxObj = {
      sSvcPage: 'User',
      sMethod: 'Report'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#modalReport input, #modalReport select, #modalReport textarea").attr("disabled", "disabled");
          $("#modalReport a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#modalReport input, #modalReport select, #modalReport textarea").attr("disabled", false);
          $("#modalReport a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          closeModal("modalReport");
          toastSuccess(babel("toast.thanksreport"), "fad fa-hands-helping");
      }
  };
  ajaxCallObj(ajaxObj, {
      iEntityType: iEntityType,
      iTargetId: iTargetId,
      iReportCategory: $('#selectReportCategory').find(":selected").val(),
      sComment: $("#modalReport textarea").val()
  }, fnHandlers);
}

function createRanksSlider(sIdSlider, sIdInputField) {
  var slider = $(sIdSlider)[0];
  noUiSlider.create(slider, {
      start: [1, 28],
      connect: true,
      step: 1,
      range: {
          min: 1,
          max: 28
      },
      format: {
          to: function(value) {
              return Math.floor(value);
          },
          from: function(value) {
              return Math.floor(value);
          }
      }
  });
  slider.noUiSlider.on("update", function(values, handle) {
      updateSelectedValuesText(sIdSlider, sIdInputField);
  });
  updateSelectedValuesText(sIdSlider, sIdInputField);
}

function disableSlider(sIdSlider) {
  $(sIdSlider)[0].setAttribute('disabled', true);
}

function enableSlider(sIdSlider) {
  $(sIdSlider)[0].removeAttribute('disabled');
}

function updateSelectedValuesText(sIdSlider, sIdInputField) {
  var sliderValues = sliderMinMaxValues(sIdSlider);
  $(sIdInputField + " > .selected-ranks > span").first().text(tierDescFromValueRankSlider(sliderValues[0]));
  $(sIdInputField + " > .selected-ranks > span").last().text(tierDescFromValueRankSlider(sliderValues[1]));
}

function tierDescFromValueRankSlider(i) {
  var iTier = getTierFromRankSlider(i);
  var iDivision = getDivisionFromRankSlider(i);
  var sTier = babelEnum("RankTier", iTier);
  if (iTier == RankTier.Placement || iTier > RankTier.Diamond)
      return sTier;
  return sTier + " " + babelEnum("RankDivision", iDivision);
}

function getTLPMinFromRankSlider(sIdSlider) {
  var sliderValues = sliderMinMaxValues(sIdSlider);
  return getTLPFromRank(getTierFromRankSlider(sliderValues[0]), getDivisionFromRankSlider(sliderValues[0]), 0);
}

function getTLPMaxFromRankSlider(sIdSlider) {
  var sliderValues = sliderMinMaxValues(sIdSlider);
  return getTLPFromRank(getTierFromRankSlider(sliderValues[1]), getDivisionFromRankSlider(sliderValues[1]), 100);
}

function getTierFromRankSlider(i) {
  var iTier = RankTier.Placement;
  if (i > 1) {
      if (i == 28)
          iTier = RankTier.Challenger;
      else if (i == 27)
          iTier = RankTier.Grandmaster;
      else if (i == 26)
          iTier = RankTier.Master;
      else
          iTier = Math.floor((i - 2) / 4) + 2;
  }
  return iTier;
}

function getDivisionFromRankSlider(i) {
  var iDivision = RankDivision.I;
  if (i > 1 && i < 26)
      iDivision = Math.floor((i - 2) % 4) + 1;
  return iDivision;
}

function getMinRankFromRankSlider(sIdSlider) {
  return sliderMinMaxValues(sIdSlider)[0];
}

function getMaxRankFromRankSlider(sIdSlider) {
  return sliderMinMaxValues(sIdSlider)[1];
}

function sliderMinMaxValues(sIdSlider) {
  return $(sIdSlider)[0].noUiSlider.get();
}

function getSocialLinkInputTemplate(iSocialType) {
  for (var property in SocialLinkType)
      if (SocialLinkType[property] == iSocialType) {
          var sSocialName = formatEnumString(property);
          var input = {
              id: "sociaLink" + SocialLinkType[property],
              description: sSocialName,
              cssIcon: ""
          };
          if (SocialLinkType[property] == SocialLinkType.Facebook)
              input.cssIcon = "fa-facebook-f facebook";
          else
              input.cssIcon = "fa-" + sSocialName.toLowerCase() + " " + sSocialName.toLowerCase();
          return getTemplateHtml(SocialLink_InputItemTemplate, input);
      }
}

function getSocialLinkChipTemplate(objSocialLink) {
  if (objSocialLink == null || isNullOrEmpty(objSocialLink.sLink)) return "";
  var sSocialName = getPropertyNameFromEnum(objSocialLink.iSocialLinkType, SocialLinkType);
  var chip = {
      sSpanCss: sSocialName.toLowerCase(),
      sCssIcon: sSocialName.toLowerCase() + " fab fa-" + sSocialName.toLowerCase(),
      sText: sSocialName,
      sLink: objSocialLink.sLink
  };
  if (objSocialLink.iSocialLinkType == SocialLinkType.Facebook)
      chip.sCssIcon += "-f";
  return getTemplateHtml(SocialLink_ChipItemTemplate, chip);
}

function UserCenterInit() {
  toggleUserCenterVisibility(false);
}

function userKeypressLoginInputs(event) {
  if (event.keyCode != 13)
      return;
  userSignIn();
  event.preventDefault();
}

function updateUserCenter() {
  if (!isUserLogged()) {
      $userCenter.find('.loggedin').addClass('dnone');
      $userCenter.find('.loggedout').removeClass('dnone');
      $userCenter.find(".card-content img").attr("src", "");
      $userCenter.find(".card-content .name").text("");
      $userCenter.find(".card-content.profile .btn-flat").attr("href", "");
      $userCenter.find(".card-content.profile .btn-flat").attr('onclick', '');
      return;
  }
  $userCenter.find('.loggedin').removeClass('dnone');
  $userCenter.find('.loggedout').addClass('dnone');
  if (WebUser.summoner) {
      $userCenter.find(".card-content.profile img").attr("src", getUrlProfileIcon(null, null, WebUser.summoner));
      $userCenter.find(".card-content.profile .name").text(WebUser.summoner.sName);
      $userCenter.find(".card-content.profile .btn-flat").attr("href", getSummonerPageLink(WebUser.summoner));
      $userCenter.find(".card-content.profile .btn-flat").attr('onclick', getSummonerPageOnclick(WebUser.summoner));
  }
}

function showUserCenter() {
  toggleUserCenterVisibility(true);
  if (!isUserLogged())
      $userCenter.find('#loginSummonerName').focus();
  hideNotificationsCenter();
}

function hideUserCenter(e) {
  if (e == null || (!$userCenter.is(e.target) && $userCenter.has(e.target).length === 0))
      toggleUserCenterVisibility(false);
}

function toggleUserCenterVisibility(bShow) {
  $accountButton.unbind("mousedown");
  $(window).unbind("mousedown.UserCenter");
  $(window).unbind("scroll.UserCenter");
  if (bShow) {
      $userCenter.show();
      $accountButton.bind("mousedown", function() {
          hideUserCenter();
      });
      $(window).bind("scroll.UserCenter", function(event) {
          event.stopPropagation();
          hideUserCenter();
      });
      $(window).bind("mousedown.UserCenter", function(event) {
          event.stopPropagation();
          hideUserCenter(event);
      });
  } else {
      $userCenter.hide();
      $accountButton.bind("mousedown", function(event) {
          event.stopPropagation();
          showUserCenter();
      });
  }
}

function pendUserCenter() {
  $userCenter.find("input").attr("disabled", "disabled");
  $userCenter.find("a").addClass("disabled");
}

function doneUserCenter() {
  $userCenter.find("input").attr("disabled", false);
  $userCenter.find("a").removeClass("disabled");
}

function invalidSignInPassword() {
  $("#loginPassword").addClass("invalid");
}

function removeInvalidSignInPassword() {
  $("#loginPassword").removeClass("invalid");
}

function createWeekSchedule(container, team, bEditable) {
  container.append('<div></div>');
  for (var i in WeekDay)
      container.append('<div class="scheduleDay day' + WeekDay[i] + '"><span class="truncate">' + babelEnum("WeekDay", WeekDay[i]) + '</span></div>');
  for (var i in TimeSlot) {
      var sLabel = '';
      if (bEditable)
          sLabel = '<label class="truncate">' + TimeSlot[i] * 6 + ' - ' + (TimeSlot[i] + 1 > 4 ? 1 : TimeSlot[i] + 1) * 6 + '</label>';
      container.append('<div class="scheduleTime time' + TimeSlot[i] + '"><span class="truncate">' + babelEnum("TimeSlot", TimeSlot[i]) + '</span>' + sLabel + '</div>');
      for (var j in WeekDay) {
          var sCss = 'timeSlot timeSlot-' + team.iTeamId + '-' + WeekDay[j] + '-' + TimeSlot[i] + ' day' + WeekDay[j] + ' time' + TimeSlot[i];
          var sOnclick = "";
          if (bEditable) {
              sCss += " waves-effect";
              sOnclick = "toggleScheduleSlot(" + team.iTeamId + "," + WeekDay[j] + "," + TimeSlot[i] + ");return false;";
          }
          if (!isNullOrEmpty(sOnclick))
              sOnclick = 'onclick="' + sOnclick + '"';
          container.append('<div class="' + sCss + '" ' + sOnclick + '></div>');
      }
  }
  if (hasSome(team.schedule))
      for (var i in team.schedule)
          container.find('.timeSlot-' + team.iTeamId + '-' + team.schedule[i].iWeekDay + '-' + team.schedule[i].iTimeSlot).addClass("teal lighten-1");
}

function toggleScheduleSlot(iTeamId, iWeekDay, iTimeSlot) {
  if ($('.timeSlot-' + iTeamId + '-' + iWeekDay + '-' + iTimeSlot).hasClass("teal"))
      callUnsetScheduleSlot(iTeamId, iWeekDay, iTimeSlot);
  else
      callSetScheduleSlot(iTeamId, iWeekDay, iTimeSlot);
}

function callSetScheduleSlot(iTeamId, iWeekDay, iTimeSlot) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (iTeamId <= 0) {
      toastError(babel("toast.couldnotfindteam"));
      return;
  }
  var ajaxObj = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'SetScheduleSlot'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".week-schedule").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".week-schedule").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          addScheduleSlot(ajax.params.iTeamId, ajax.params.iWeekDay, ajax.params.iTimeSlot);
          $('.timeSlot-' + ajax.params.iTeamId + '-' + ajax.params.iWeekDay + '-' + ajax.params.iTimeSlot).addClass("teal lighten-1");
          $('.week-schedule > div:first-child').text(babel("base.saved"));
      }
  };
  $('.week-schedule > div:first-child').text("...");
  ajaxCallObj(ajaxObj, {
      iTeamId: iTeamId,
      iWeekDay: iWeekDay,
      iTimeSlot: iTimeSlot
  }, fnHandlers);
}

function callUnsetScheduleSlot(iTeamId, iWeekDay, iTimeSlot) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (iTeamId <= 0) {
      toastError(babel("toast.couldnotfindteam"));
      return;
  }
  var ajaxObj = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'UnsetScheduleSlot'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".week-schedule").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".week-schedule").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          removeScheduleSlot(ajax.params.iTeamId, ajax.params.iWeekDay, ajax.params.iTimeSlot);
          $('.timeSlot-' + ajax.params.iTeamId + '-' + ajax.params.iWeekDay + '-' + ajax.params.iTimeSlot).removeClass("teal lighten-1");
          $('.week-schedule > div:first-child').text(babel("base.saved"));
      }
  };
  $('.week-schedule > div:first-child').text("...");
  ajaxCallObj(ajaxObj, {
      iTeamId: iTeamId,
      iWeekDay: iWeekDay,
      iTimeSlot: iTimeSlot
  }, fnHandlers);
}

function addScheduleSlot(iTeamId, iWeekDay, iTimeSlot) {
  if (isNaN(iTeamId) || iTeamId === 0 || !hasSome(WebUser.teams))
      throw "addScheduleSlot: iTeamId not recognized (" + code + ")";
  for (var i in WebUser.teams)
      if (WebUser.teams[i].iTeamId == iTeamId) {
          if (WebUser.teams[i].schedule == null)
              WebUser.teams[i].schedule = [];
          WebUser.teams[i].schedule.push({
              iTeamId: parseInt(iTeamId),
              iTimeSlot: parseInt(iTimeSlot),
              iWeekDay: parseInt(iWeekDay)
          });
      }
  if (TeamTeam != null) {
      if (TeamTeam.schedule == null)
          TeamTeam.schedule = [];
      TeamTeam.schedule.push({
          iTeamId: parseInt(iTeamId),
          iTimeSlot: parseInt(iTimeSlot),
          iWeekDay: parseInt(iWeekDay)
      });
  }
}

function removeScheduleSlot(iTeamId, iWeekDay, iTimeSlot) {
  if (isNaN(iTeamId) || iTeamId === 0 || !hasSome(WebUser.teams))
      throw "addScheduleSlot: iTeamId not recognized (" + code + ")";
  for (var i in WebUser.teams)
      if (WebUser.teams[i].iTeamId == iTeamId)
          if (WebUser.teams[i].schedule != null)
              for (var j in WebUser.teams[i].schedule)
                  if (WebUser.teams[i].schedule[j].iWeekDay == iWeekDay || WebUser.teams[i].schedule[j].iTimeSlot == iTimeSlot) {
                      WebUser.teams[i].schedule.splice(j, 1);
                      break;
                  }
  if (TeamTeam != null) {
      if (TeamTeam.schedule != null)
          for (var i in TeamTeam.schedule)
              if (TeamTeam.schedule[i].iWeekDay == iWeekDay || TeamTeam.schedule[i].iTimeSlot == iTimeSlot) {
                  TeamTeam.schedule.splice(i, 1);
                  break;
              }
  }
}
var WebUser;

function initializeWebUser() {
  WebUser = {
      summoner: null,
      curriculum: null,
      teams: null,
      achievements: null,
      bHasTeam: false,
      iRegion: 0
  };
}

function isMySummoner(summoner) {
  return summoner != null && summoner.iSummonerId > 0 && WebUser.summoner && WebUser.summoner.iSummonerId == summoner.iSummonerId;
}

function updateSummonerBound(summoner) {
  WebUser.summoner = summoner;
  updateHeader();
}

function removeSummonerBound() {
  WebUser.summoner = null;
  userSignOut(true);
  updateHeader();
  callOnSignIn();
}
var timeoutUserLiveGame;

function UserLiveGame() {
  if (!isUserLogged() || isUserGuest()) {
      clearTimeout(timeoutUserLiveGame);
      return;
  }
  callLiveGameInfo('User', WebUser.summoner.iSummonerId);
}

function UserOsLiveGame(ajax, obj) {
  var bInGame = obj.value && obj.value.gameId > 0;
  UserLiveGameVisibility(bInGame);
  timeoutUserLiveGame = setTimeout(UserLiveGame, Configuration.CheckForUserLiveGameIntervalSeconds * 1000);
}

function UserLiveGameVisibility(bInGame) {
  if ($("#mySummonerLeftItem").hasClass("red-text")) {
      if (!bInGame) {
          $("#mySummonerLeftItem").removeClass("red-text");
          $("#mySummonerLeftItem > div.circle").remove();
      }
  } else {
      if (bInGame) {
          $("#mySummonerLeftItem").addClass("red-text").append('<div class="circle red pulse" style="height: 6px;width: 6px;margin-left: 8px;margin-top: -8px;float: right;z-index: 2;"></div>');
      }
  }
}

function imTrial(team) {
  if (isUserLogged() && team && hasSome(team.trials))
      for (var i in team.trials)
          if (team.trials[i].summoner.iSummonerId == WebUser.summoner.iSummonerId)
              return true;
  return false;
}

function imMember(team) {
  if (!isUserLogged() || !team) return false;
  if (hasSome(team.members))
      for (var i in team.members)
          if (team.members[i].summoner.iSummonerId == WebUser.summoner.iSummonerId)
              return true;
  if (hasSome(team.trials))
      for (var i in team.trials)
          if (team.trials[i].summoner.iSummonerId == WebUser.summoner.iSummonerId)
              return true;
  return false;
}

function imMemberByTeamId(iTeamId) {
  if (isNaN(iTeamId) || iTeamId === 0 || !hasSome(WebUser.teams)) return false;
  for (var i in WebUser.teams)
      if (WebUser.teams[i].iTeamId === iTeamId)
          return true;
  return false;
}

function isMember(team, lIdSummoner) {
  if (lIdSummoner > 0 && team) {
      if (hasSome(team.members))
          for (var i in team.members)
              if (team.members[i].summoner.iSummonerId == lIdSummoner)
                  return true;
      if (hasSome(team.trials))
          for (var i in team.trials)
              if (team.trials[i].summoner.iSummonerId == lIdSummoner)
                  return true;
  }
  return false;
}

function imOwner(team, bConErrori) {
  if (isUserLogged() && team) {
      if (hasSome(team.members))
          for (var i in team.members)
              if (team.members[i].summoner.iSummonerId == WebUser.summoner.iSummonerId) {
                  if (team.members[i].contract.iTeamRole == TeamRoleType.Owner)
                      return true;
                  break;
              }
      if (hasSome(WebUser.teams))
          for (var i in WebUser.teams)
              if (WebUser.teams[i].iTeamId == team.iTeamId) {
                  if (WebUser.teams[i].iMyRole == TeamRoleType.Owner)
                      return true;
                  break;
              }
  }
  if (bConErrori)
      toastWarning(babel("toast.donothavepermission"));
  return false;
}

function imAdmin(team, bConErrori) {
  if (isUserLogged() && team && team.members)
      for (var i in team.members)
          if (team.members[i].summoner.iSummonerId == WebUser.summoner.iSummonerId) {
              if (team.members[i].contract.iTeamRole == TeamRoleType.Administrator)
                  return true;
              break;
          }
  if (bConErrori)
      toastWarning(babel("toast.donothavepermission"));
  return false;
}

function userJoinedTeam() {
  WebUser.bHasTeam = true;
  callLoadMyTeamsSideNav();
}

function DeleteAllPersonalDataClient() {
  clearAllStorage();
  userSignOut();
  forceReload();
}
var iSideAdMinWidth = 1500;

function loadAdsOnNavigate(sPageName) {
  if (sPageName == "CheckFeedback" || sPageName == "CheckErrors")
      return;
  var iRand = mathRandomInt(0, 99);
  var bSideContent = windowWidth() > iSideAdMinWidth;
  var bRowAdExist = $mainContent.find('.ad').length > 0;
  if (iRand < 95 && !isLocalhost())
      loadAdGoogle(bSideContent, bRowAdExist);
  else
      loadPromoLoLSquare(bSideContent, bRowAdExist);
}

function AdsSetClass(iType) {
  $(".ad").removeClass("promo-feedback google-ad custom-banner");
  switch (iType) {
      case 0:
          $(".ad").addClass("promo-feedback");
          break;
      case 1:
          $(".ad").addClass("google-ad");
          break;
      case 2:
          $(".ad").addClass("custom-banner");
          break;
      default:
          break;
  }
}

function loadAdGoogle(bSideContent, bRowAdExist) {
  var iMaxWidth = $mainContent.width();
  var adOptions = {
      bMainContent: !bSideContent
  };
  if (iMaxWidth < 320) {
      adOptions.iWidth = 200;
      adOptions.iHeight = 200;
  }
  if (iMaxWidth < 468) {
      adOptions.iWidth = 320;
      adOptions.iHeight = 100;
  }
  if (iMaxWidth < 728) {
      adOptions.iWidth = 468;
      adOptions.iHeight = 60;
  }
  if (iMaxWidth < 970) {
      adOptions.iWidth = 728;
      adOptions.iHeight = 90;
  }
  var sAdHtml = getTemplateHtml(GoogleAdItemTemplate, adOptions);
  var sAdHtmlEndMainContent = getTemplateHtml(GoogleAdEndMainContentItemTemplate, adOptions);
  if (bSideContent)
      $(".sidecontent.dx").empty().append('<div class="row ad">' + sAdHtml + '</div>');
  else if (bRowAdExist)
      $mainContent.find('.ad').empty().append(sAdHtml);
  else
      $mainContent.prepend('<div class="row ad">' + sAdHtml + '</div>');
  $mainContent.append('<div class="row ad">' + sAdHtmlEndMainContent + '</div>');
  AdsSetClass(1);
  try {
      (adsbygoogle = window.adsbygoogle || []).push({});
      (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}
}

function loadPromoLoLSquare(bSideContent, bRowAdExist) {
  var htmlPromo = mathRand100(50) ? getTemplateHtml(AdPromoFeedbackItemTemplate) : getTemplateHtml(AdPromoBugReportItemTemplate);
  if (bSideContent)
      $(".sidecontent.dx").empty().append('<div class="row ad">' + htmlPromo + '</div>');
  else
  if (bRowAdExist)
      $mainContent.find('.ad').empty().append(htmlPromo);
  else
      $mainContent.prepend('<div class="row ad">' + htmlPromo + '</div>');
  AdsSetClass(0);
}

function loadCustomBanners(bSideContent, bRowAdExist) {
  var banners = [{
      name: "S",
      title: babel("base.visitfacebookgroup", null, {
          sName: "League of Legends Italia"
      }),
      link: 'https://www.facebook.com/groups/lolitalia/'
  }, {
      name: "Z",
      title: babel("base.visitfacebookgroup", null, {
          sName: "League of Legends Italia"
      }),
      link: 'https://www.facebook.com/groups/leagueoflegends.lol.ita/'
  }, {
      name: "O",
      title: babel("base.visitfacebookgroup", null, {
          sName: "Outplayed.it"
      }),
      link: 'https://www.facebook.com/groups/lolitaly/'
  }];
  var banner = randomProperty(banners);
  var htmlBanner = '<a title="' + banner.title + '" href="' + banner.link + '" target="_blank" rel="noopener"><img src="' + cdnLink('/images/banners/' + banner.name + '-' + (bSideContent ? 'V' : 'H') + '-min.png') + '" alt="banner facebook group" /></a>';
  if (bSideContent)
      $(".sidecontent.dx").empty().append('<div class="row ad">' + htmlBanner + '</div>');
  else
  if (bRowAdExist)
      $mainContent.find('.ad').empty().append(htmlBanner);
  else
      $mainContent.prepend('<div class="row ad">' + htmlBanner + '</div>');
  AdsSetClass(2);
}
var ajaxCallId = 0;
var ajaxCallList = {};
var bUpdateAsked = false;
var sApiUrl = "https://lolsquare.hopto.org";

function escapeBackslashes(sValue) {
  return sValue.split("%5C").join("%5C%5C");
}

function ajaxCall(sCode, sSvcPage, sMethod, params, bVProgress, moreParams, bSync, fnHandlers) {
  ajaxCallObj({
      sCode: sCode,
      sSvcPage: sSvcPage,
      sMethod: sMethod,
      bVProgress: bVProgress,
      moreParams: moreParams,
      bSync: bSync
  }, params, fnHandlers);
}

function ajaxCallObj(obj, params, fnHandlers) {
  ajaxCallId++;
  var userToken = getLocal("user", "token");
  if (userToken) {
      if (!params)
          params = {};
      params.u = userToken.id;
      params.t = userToken.token;
      params.r = userToken.region;
  }
  if (params) {
      Object.keys(params).forEach(function(key) {
          params[key] = escapeBackslashes(encodeURIComponent(params[key]));
      });
  }
  var ajaxCallCustom = {
      id: ajaxCallId,
      sPage: getPageName(),
      dtStartCall: null,
      dtEndCall: null,
      jqXHRResponse: null,
      textStatus: null,
      sCode: obj.sCode,
      sSvcPage: obj.sSvcPage,
      sMethod: obj.sMethod,
      moreParams: obj.moreParams,
      bVProgress: obj.bVProgress,
      bSync: obj.bSync,
      params: params
  };
  if (fnHandlers) {
      ajaxCallCustom.fnPend = fnHandlers.fnPend;
      ajaxCallCustom.fnDone = fnHandlers.fnDone;
      ajaxCallCustom.fnOs = fnHandlers.fnOs;
      ajaxCallCustom.fnOe = fnHandlers.fnOe;
  }
  addAjaxCall(ajaxCallCustom);
  var ajaxCallSettings = {
      type: "POST",
      dataType: "json",
      url: sApiUrl + "/webmethods/" + ajaxCallCustom.sSvcPage + ".ashx/" + ajaxCallCustom.sMethod + "?r=" + getRegion(),
      data: JSON.stringify(ajaxCallCustom.params),
      beforeSend: ajaxBeforeSend(ajaxCallCustom.id),
      xhrFields: {
          withCredentials: true
      },
      success: function(data, textStats, jqXHR) {
          ajaxSuccess(data, textStats, jqXHR, ajaxCallCustom.id);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
          ajaxError(XMLHttpRequest, textStatus, errorThrown, ajaxCallCustom.id);
      },
      complete: function(jqXHR, textStatus) {
          ajaxComplete(jqXHR, textStatus, ajaxCallCustom.id);
      },
      async: !ajaxCallCustom.bSync
  };
  $.ajax(ajaxCallSettings);
}

function ajaxBeforeSend(callId) {
  var ajaxCall = getAjaxCall(callId);
  if (ajaxCall == null) return;
  monitorAjaxStart(ajaxCall);
  ajaxCallHandlers('Pend', ajaxCall);
  ajaxCall.dtStartCall = new Date();
}

function ajaxSuccess(data, textStats, jqXHR, callId) {
  var ajaxCall = getAjaxCall(callId);
  if (ajaxCall == null) return;
  ajaxCall.dtEndCall = new Date();
  var obj = data;
  if (!showMessagesNoErrors(obj)) {
      ajaxCallHandlers('Oe', ajaxCall, obj);
      return;
  }
  ajaxAddResponseToSearched(ajaxCall, obj);
  addNewAchievementsUnlocked(obj);
  ajaxCallHandlers('Os', ajaxCall, obj);
  if (obj.AdditionalData && obj.AdditionalData.version != svnRevision && !bUpdateAsked) {
      bUpdateAsked = true;
      toastUpdateApp();
  }
}

function ajaxError(XMLHttpRequest, textStatus, errorThrown, callId) {
  var ajaxCall = getAjaxCall(callId);
  if (ajaxCall == null) return;
  ajaxCallHandlers('Oe', ajaxCall);
}

function ajaxComplete(jqXHR, textStatus, callId) {
  var ajaxCall = getAjaxCall(callId);
  if (ajaxCall == null) return;
  ajaxCall.jqXHRResponse = jqXHR.responseJSON;
  ajaxCall.textStatus = textStatus;
  if (ajaxCall.sMethod != "LogClientError") {
      if (jqXHR.status < 200 || jqXHR.status > 299) {
          if (!navigator.onLine && jqXHR.status == 0)
              toastError(babel("toast.cannotreachserver"), "fad fa-wifi-slash");
          else {
              if (jqXHR.status != 0 || ajaxCall.sMethod != "GetNewNotifications")
                  toastError(babel("toast.standarderrorajax", null, {
                      satus: jqXHR.status
                  }));
              throw "xhr: " + jqXHR.status + ". " + ajaxCall.sSvcPage + " - " + ajaxCall.sMethod + " - " + JSON.stringify(ajaxCall.params);
          }
      }
  }
  ajaxCallHandlers('Done', ajaxCall);
  delAjaxCall(callId);
}

function ajaxCallHandlers(sEvent, ajaxCall, obj) {
  var sFunction = sEvent.toLowerCase() + ajaxCall.sMethod;
  if (typeof window[sFunction] === "function")
      window[sFunction](ajaxCall, obj);
  if (ajaxCall["fn" + sEvent]) {
      ajaxCall["fn" + sEvent](ajaxCall, obj);
  } else if (!isNullOrEmpty(ajaxCall.sCode)) {
      sFunction = ajaxCall.sCode + sEvent + ajaxCall.sMethod;
      if (typeof window[sFunction] === "function")
          window[sFunction](ajaxCall, obj);
  }
}

function getAjaxCall(id) {
  return ajaxCallList[id];
}

function addAjaxCall(ajaxCall) {
  ajaxCallList[ajaxCall.id] = ajaxCall;
  VProgressSet();
}

function delAjaxCall(id, bAborted) {
  monitorAjaxEnd(getAjaxCall(id), bAborted);
  delete ajaxCallList[id];
  VProgressSet();
}

function abortPendingAjaxCallsOnNavigate() {
  for (var acIndex in ajaxCallList) {
      if (ajaxCallList[acIndex].sCode == 'User' || ajaxCallList[acIndex].sCode == 'Header' || ajaxCallList[acIndex].sCode == 'Notification' || ajaxCallList[acIndex].sMethod == 'SaveFeedback' || ajaxCallList[acIndex].sMethod == 'BindSummoner' || ajaxCallList[acIndex].sMethod == 'VerifyBindSummoner' || ajaxCallList[acIndex].sMethod == 'DeleteBind')
          continue;
      delAjaxCall(acIndex, true);
  }
}

function abortAllPendingAjaxCalls() {
  for (var acIndex in ajaxCallList)
      delAjaxCall(acIndex, true);
}

function abortPendingAjaxCallsSpecific(sCode, sMethod) {
  for (var acIndex in ajaxCallList)
      if (ajaxCallList[acIndex].sCode == sCode && ajaxCallList[acIndex].sMethod == sMethod)
          delAjaxCall(acIndex, true);
}

function ajaxAddResponseToSearched(ajaxCall, obj) {
  if (ajaxCall.sCode == "Summoner" && ajaxCall.sSvcPage == "Summoner" && (ajaxCall.sMethod == "LoadSummoner" || ajaxCall.sMethod == "LoadSummonerV2"))
      SearchAddSearchedListObj(EntityType.Summoner, obj.value);
  if (ajaxCall.sCode == "Team" && ajaxCall.sSvcPage == "Team" && ajaxCall.sMethod == "LoadTeam")
      SearchAddSearchedListObj(EntityType.Team, obj.value);
  if (ajaxCall.sSvcPage == "MyTeams" && ajaxCall.sMethod == "LoadMyTeams" && hasSome(obj.value))
      for (var i in obj.value)
          SearchAddSearchedListObj(EntityType.Team, obj.value[i], true);
  if (ajaxCall.sSvcPage == "User" && (ajaxCall.sMethod == "SignIn" || ajaxCall.sMethod == "RestoreSignIn"))
      SearchAddSearchedListObj(EntityType.Summoner, obj.value, true);
}

function getJSON(url, func) {
  $.ajax({
      dataType: "json",
      url: url,
      async: false,
      success: func
  });
}

function getJSONCDN(url, func, bAsync) {
  $.ajax({
      type: "GET",
      dataType: "json",
      contentType: "application/json; charset=iso-8859-1",
      cache: !isLocalhost(),
      url: (isLocalhost() ? urlLoLSquareCDN : '') + url,
      async: !!bAsync,
      beforeSend: function(jqXHR) {
          jqXHR.overrideMimeType('application/json;charset=iso-8859-1');
      },
      success: func
  });
}
var colorArrayMonitor = ['ef9a9a', 'f48fb1', 'ce93d8', 'b39ddb', '9fa8da', '90caf9', '81d4fa', '80deea', '80cbc4', 'a5d6a7', 'c5e1a5', 'e6ee9c', 'fff59d', 'ffe082', 'ffcc80', 'ffab91', 'bcaaa4', 'b0bec5'];
var bLogAjaxCalls;
var bLogAjaxResponse = false;

function monitorAjaxStart(ajaxCall) {
  if (!bLogAjaxCalls) return;
  var sLog = ajaxCall.id + ' | ' + ajaxCall.sMethod + ' | started ';
  if (ajaxCall.bVProgress)
      sLog += ' | VProgress';
  console.log('%c' + sLog, 'background: #' + monitorGetColor(ajaxCall.id) + ';padding:2px');
  if (ajaxCall.bSync)
      console.log("^^^ SYNC SYNC SYNC SYNC SYNC SYNC SYNC SYNC SYNC ^^^");
}

function monitorAjaxEnd(ajaxCall, bAborted) {
  if (!bLogAjaxCalls) return;
  var sLog = ajaxCall.id + ' | ' + ajaxCall.sMethod + ' | ';
  if (bAborted)
      sLog += 'aborted ';
  else {
      sLog += 'finished';
      var endTime = new Date();
      var msCall = endTime - ajaxCall.dtStartCall;
      var msRender = endTime - ajaxCall.dtEndCall;
      sLog += ' | Call: ' + msCall + 'ms | Render: ' + msRender + 'ms | Status: ' + ajaxCall.textStatus;
  }
  if (ajaxCall.bVProgress)
      sLog += ' | VProgress';
  console.log('%c' + sLog, 'background: #' + monitorGetColor(ajaxCall.id) + ';padding:2px');
  if (bLogAjaxResponse)
      console.log(ajaxCall.jqXHRResponse);
}

function monitorGetColor(id) {
  var arrayPos = id;
  if (id > colorArrayMonitor.length)
      arrayPos = id % colorArrayMonitor.length;
  return colorArrayMonitor[arrayPos];
}

function VProgressSet() {
  if (!$VProgress) return;
  var bAtLeastOneProgress = false;
  for (var acIndex in ajaxCallList)
      if (ajaxCallList[acIndex].bVProgress) {
          bAtLeastOneProgress = true;
          break;
      }
  if (bAtLeastOneProgress)
      $VProgress.removeClass("dnone");
  else
      $VProgress.addClass("dnone");
}
var AppLanguage;
var i18n;
var LanguageList = [{
  key: "EN",
  desc: "English",
  ddragon: "en_US"
}, {
  key: "IT",
  desc: "Italiano",
  ddragon: "it_IT"
}];

function changeLanguage(sLangKey) {
  setCurrentLanguage(sLangKey);
  resetDDragonStorage();
  location.reload();
}

function getLanguageFromBrowser() {
  var sLang = navigator.language || navigator.userLanguage;
  if (!isNullOrEmpty(sLang)) {
      sLang = sLang.toLowerCase();
      if (sLang.length > 2)
          sLang = sLang.substring(0, 2);
  }
  return sLang;
}

function htmlChangeLanguageListItem() {
  var sHtml = "";
  for (var i in LanguageList)
      sHtml += '<li><a onclick="changeLanguage(\'' + LanguageList[i].key + '\')">' + LanguageList[i].desc + '</a></li>';
  return sHtml;
}

function guessLanguage() {
  var sLanguage = getLanguageFromBrowser();
  if (!isNullOrEmpty(sLanguage)) {
      sLanguage = sLanguage.toUpperCase();
      for (var i in LanguageList)
          if (LanguageList[i].key == sLanguage)
              return LanguageList[i].key;
  }
  return "EN";
}

function getCurrentLanguage() {
  var sLangKey = getLocal("App", "Language");
  if (!isNullOrEmpty(sLangKey))
      return sLangKey.toUpperCase();
  else
      return guessLanguage();
}

function getCurrentLanguageDescription() {
  var sLangKey = getCurrentLanguage();
  for (var i in LanguageList)
      if (LanguageList[i].key == sLangKey)
          return LanguageList[i].desc;
  return sLang;
}

function setCurrentLanguage(sLangKey) {
  setLocal("App", "Language", sLangKey.toUpperCase());
}

function babel(key, codex, params) {
  var parts = key.toLowerCase().split('.');
  var bPlural = codex && codex.indexOf('p') !== -1;
  var bUpperCase = codex && codex.indexOf('u') !== -1;
  var bLowerCase = codex && codex.indexOf('l') !== -1;
  var bShort = codex && codex.indexOf('s') !== -1;
  var bActor = codex && codex.indexOf('a') !== -1;
  var sTemplate = AppLanguage[parts[0]][parts[1] + (bPlural ? "_plural" : "") + (bShort ? "_short" : "") + (bActor ? "_actor" : "")];
  if (isNullOrEmpty(sTemplate))
      sTemplate = AppLanguage[parts[0]][parts[1]];
  if (isNullOrEmpty(sTemplate))
      sTemplate = AppLanguageEN[parts[0]][parts[1] + (bPlural ? "_plural" : "") + (bShort ? "_short" : "") + (bActor ? "_actor" : "")];
  if (isNullOrEmpty(sTemplate))
      sTemplate = AppLanguageEN[parts[0]][parts[1]];
  if (isNullOrEmpty(sTemplate))
      return "_" + key.toLowerCase();
  var sText = htmlDecode(getTemplateHtml(sTemplate, params));
  if (bUpperCase)
      sText = sText.toUpperCase();
  if (bLowerCase)
      sText = sText.toLowerCase();
  return sText;
}

function babelEnum(sEnumName, value, codex) {
  var sEnumProperty = value;
  if (window[sEnumName] !== undefined)
      sEnumProperty = getPropertyNameFromEnum(value, window[sEnumName]);
  return babel(sEnumName + "." + sEnumProperty, codex);
}

function babeli18n() {
  if (i18n)
      return i18n;
  else
      return i18nEN;
}
var AppLanguageEN = {
  "base": {
      "loadmore": "Load more",
      "championplayed": "Champion played",
      "championplayed_plural": "Champions played",
      "ranksolo": "Rank solo",
      "rankflex": "Rank flex",
      "schedule": "Schedule",
      "schedule_plural": "Schedules",
      "rank": "Rank",
      "rank_plural": "Ranks",
      "welcometololsquare": "Welcome to LoLSquare",
      "searchyoursummoner": "Search your summoner",
      "icon": "Icon",
      "logo": "Logo",
      "info": "Info",
      "ingame": "In game",
      "follower": "Follower",
      "follower_plural": "Followers",
      "lolsquarerank": "LoLSquare rank",
      "created": "Created",
      "created_plural": "Created",
      "member": "Member",
      "member_plural": "Members",
      "viewsummonerprofile": "View summoner profile",
      "viewteamprofile": "View team profile",
      "register": "Register",
      "completed": "Completed",
      "compilecv": "Compile your curriculum",
      "findateam": "Find a team",
      "end": "End",
      "changeregion": "Change region",
      "home": "Home",
      "backtohomeregion": "Back to home region",
      "myteams": "My teams",
      "searchteam": "Search team",
      "createteam": "Create team",
      "searchmember": "Search member",
      "teamsleaderboard": "Teams leaderboard",
      "sendfeedback": "Send feedback",
      "faq": "FAQ",
      "changelog": "Change log",
      "aboutus": "About us",
      "searchsummonerorteam": "Search summoner or team",
      "nothingfoundsearchheader": "Nothing found in the search history",
      "notification": "Notification",
      "notification_plural": "Notifications",
      "nonotifications": "There are no notifications to show",
      "login": "Sign in",
      "logout": "Sign out",
      "setting": "Setting",
      "setting_plural": "Settings",
      "summonername": "Summoner name",
      "password": "Password",
      "lostpassword": "Lost password?",
      "loading": "Loading",
      "lolsquaresubtitle": "LoL Team Manager",
      "refresh": "Refresh",
      "error": "Error",
      "runedescnotfound": "Rune description not found.",
      "youneedateamtoinvite": "You need to create a team to invite a summoner.",
      "changememberrole": "Change {{ objPar.SummonerName }} role",
      "choosenewrole": "Choose the new role",
      "promotemembertoadmin": "Promote {{ objPar.SummonerName }} to admin",
      "promotemembertoadmintext": "Are you sure?",
      "demoteadmintomember": "Demote {{ objPar.SummonerName }} to member",
      "demoteadmintomembertext": "Are you sure?",
      "setowner": "Make {{ objPar.SummonerName }} the team owner",
      "setownertext": "Are you sure?",
      "kickmember": "Kick {{ objPar.SummonerName }}",
      "kickmembertext": "Are you sure?",
      "matchscheduled": "This match has not yet been loaded, LoLSquare processes a large number of games using a priority algorithm to determine which ones are most important to you.",
      "promofeedbacktitle": "Leave feedback",
      "promofeedbacktext": "Remember to leave some feedback, it means a lot for us!",
      "promofeedbackbugtitle": "Report bugs!",
      "promofeedbackbugtext": "If you notice any strange behavior, report it! it means a lot to us",
      "cookieconsenttitle": "This website uses cookies",
      "cookieconsent1": "LoLSquare uses cookies to deliver its services, to personalize ads, and to analyze traffic.",
      "cookieconsent2": "By using our services you accept our use of cookies.",
      "viewsummonernameprofile": "View {{ objPar.SummonerName }} profile",
      "summonernameicon": "{{ objPar.SummonerName }} icon",
      "viewteamnameprofile": "View {{ objPar.TeamName }}",
      "teamnameicon": "{{ objPar.TeamName }} icon",
      "ok": "Ok",
      "message": "Message",
      "send": "Send",
      "feedback": "Feedback",
      "joinateam": "Join a team",
      "createteampromo": "Create your own team and invite your friends to join",
      "searchteampromo": "Search the team by yourself with your criteria",
      "findteamnotnowpromo": "If you are waiting for an invitation or if you are not looking for a team",
      "findteam": "Find team",
      "notnow": "Not now",
      "reporttext": "Report text",
      "reason": "Reason",
      "reportmessagetext": "Describe the problem (optional)",
      "later": "Later",
      "curriculumreview": "Curriculum review",
      "modalwelcometext1": "A place to create and manage your LoL team.",
      "modalwelcometext2": "We have just tailored you a curriculum based on your last games.",
      "nevermind": "Nevermind",
      "lastactivity": "Last activity",
      "choosesummonertoinvite": "Choose the summoner to invite",
      "search": "Search",
      "invite": "Invite",
      "chooseteamtoinvite": "Choose for which team",
      "chooseroletoinvite": "Choose which role",
      "participant": "Participant",
      "participant_plural": "Participants",
      "statistic": "Statistic",
      "statistic_plural": "Statistics",
      "champion": "Champion",
      "name": "Name",
      "item": "Item",
      "item_plural": "Items",
      "kda": "KDA",
      "gold": "Gold",
      "damage": "Damage",
      "red": "Red",
      "blue": "Blue",
      "kill": "Kill",
      "kill_plural": "Kills",
      "death": "Death",
      "death_plural": "Deaths",
      "assist": "Assist",
      "assist_plural": "Assists",
      "teamkill": "Team kill",
      "teamkill_plural": "Teams kills",
      "matchdateandlength": "Match date and length",
      "objective": "Objective",
      "objective_plural": "Objectives",
      "goldearned": "Gold earned",
      "dragonskilled": "Dragons killed",
      "riftheraldskilled": "Rift Heralds killed",
      "towersdestroyed": "Towers destroyed",
      "inhibitorsdestroyed": "Inhibitors destroyed",
      "dmgdealt": "Dmg dealt",
      "dmgtaken": "Dmg taken",
      "heal": "Heal",
      "damagedealttochampions": "Damage dealt to champions",
      "viewmatchonofficialwebsite": "View match on League of Legends official website",
      "matchlink": "Match link",
      "clicktocopymatchlink": "Click to copy the link to this match",
      "share": "Share",
      "lastrankdetected": "Last rank detected",
      "creepscore": "Creep score",
      "creepscore_short": "Cs",
      "thissummonerfollowsyou": "This summoner follows you",
      "followback": "Follow back",
      "friend": "Friend",
      "friend_plural": "Friends",
      "follow": "Follow",
      "following": "Following",
      "following_plural": "Following",
      "unfollow": "Unfollow",
      "link": "Link",
      "unkwownqueue": "Unkwown queue",
      "season": "Season",
      "preseason": "Preseason",
      "lastupdate": "Last update",
      "never": "Never",
      "update": "Update",
      "updating": "Updating",
      "team": "Team",
      "team_plural": "Teams",
      "filter": "Filter",
      "filter_plural": "Filters",
      "loadmorematches": "Load more matches",
      "total": "Total",
      "winrate": "Winrate",
      "winrate_short": "WR",
      "win": "Win",
      "win_plural": "Wins",
      "win_short": "W",
      "lost": "Lost",
      "lost_plural": "Lost",
      "lost_short": "L",
      "rune": "Rune",
      "rune_plural": "Runes",
      "game": "Game",
      "game_plural": "Games",
      "game_short": "G",
      "match": "Match",
      "match_plural": "Match",
      "nodata": "No data",
      "baronskilled": "Barons killed",
      "level": "Level",
      "next": "Next",
      "needhelp": "Need help?",
      "verify": "Verify",
      "complete": "Complete",
      "finish": "Finish",
      "gameplayed": "Match played",
      "gameplayed_plural": "Matches played",
      "matchlist": "Matchlist",
      "livegame": "Live game",
      "matchlenght": "Match lenght",
      "matchstartend": "Match start - end",
      "killparticipation": "Kill participation",
      "killparticipation_short": "KP",
      "date": "Date",
      "as": "As",
      "timeplayed": "Time played",
      "email": "Email",
      "checkbacklater": "Check back later",
      "fullstatistics": "Full statistics",
      "notloaded": "Not loaded",
      "loaded": "Loaded",
      "highest": "Highest",
      "ended": "Ended",
      "usersettings": "User settings",
      "areyousure": "Are you sure?",
      "save": "Save",
      "tag": "Tag",
      "nationality": "Nationality",
      "description": "Description",
      "confirm": "Confirm",
      "preview": "Preview",
      "chooseateam": "Choose a team",
      "edit": "Edit",
      "accept": "Accept",
      "decline": "Decline",
      "cancel": "Cancel",
      "404desc": "The page you are looking for does not exist or an error occured",
      "morefilters": "More filters",
      "any": "Any",
      "rankrange": "Rank range",
      "unranked": "Unranked",
      "reset": "Reset",
      "summoner": "Summoner",
      "summoner_plural": "Summoners",
      "nothingfound": "Nothing found",
      "changepassword": "Change password",
      "teamrank": "Team rank",
      "role": "Role",
      "role_plural": "Roles",
      "lastmatch": "Last match",
      "nameandmainroles": "Name & main roles",
      "extra": "Extra",
      "option": "Option",
      "option_plural": "Options",
      "viewprofile": "View profile",
      "tagandname": "Tag & Name",
      "savelink": "Save link",
      "savelink_plural": "Save links",
      "position": "Position",
      "tlp": "Total League Points",
      "tlp_short": "TLP",
      "hi": "Hi",
      "canceljoin": "Cancel join",
      "joinrequest": "Join request",
      "joinrequest_plural": "Join requests",
      "pendinginvite": "Pending invite",
      "pendinginvite_plural": "Pending invites",
      "seasonalstatistics": "Seasonal Statistics",
      "savesetting": "Save setting",
      "savesetting_plural": "Save settings",
      "report": "Report",
      "leaveteam": "Leave team",
      "disbandteam": "Disband team",
      "membersince": "Member since",
      "owner": "Owner",
      "admin": "Admin",
      "changerole": "Change role",
      "makeowner": "Make owner",
      "makeadmin": "Make admin",
      "revokeadmin": "Revoke admin",
      "kick": "Kick",
      "expiresin": "Expires in",
      "more": "More",
      "less": "Less",
      "join": "Join",
      "average": "Average",
      "combat": "Combat",
      "goldandvision": "Gold and vision",
      "combatdetails": "Combat details",
      "multikills": "Multi kills",
      "damagedealt": "Damage dealt",
      "damagetaken": "Damage taken",
      "selfmitigateddamage": "Self mitigated damage",
      "appliedcc": "Applied CC",
      "firstblood": "First blood",
      "firsttower": "First tower",
      "tower": "Tower",
      "tower_plural": "Towers",
      "inhibitor": "Inhibitor",
      "inhibitor_plural": "Inhibitors",
      "dragon": "Dragon",
      "dragon_plural": "Dragons",
      "herald": "Herald",
      "herald_plural": "Heralds",
      "baron": "Baron",
      "baron_plural": "Barons",
      "cspermin": "CS/min",
      "double": "Double",
      "triple": "Triple",
      "quadra": "Quadra",
      "penta": "Penta",
      "visionscore": "Vision score",
      "notregistered": "Not registered",
      "notregistered_short": "NR",
      "openposition": "Open position",
      "openposition_plural": "Open positions",
      "color": "Color",
      "minimum": "Minimum",
      "minimum_short": "Min",
      "maximum": "Maximum",
      "maximum_short": "Max",
      "back": "Back",
      "copytoclipboard": "Copy to clipboard",
      "saved": "Saved",
      "highestrank": "Highest rank",
      "performancescore": "Performance Score",
      "performancescore_short": "PS",
      "averageperformancescore": "Average Performance Score",
      "averageperformancescore_short": "APS",
      "cost": "Cost",
      "sell": "Sell",
      "selected": "Selected",
      "fullmatch": "Full match",
      "changelanguage": "Change language",
      "visitfacebookgroup": "Visit the facebook group {{ objPar.sName }}",
      "linktoteamprofile": "Link to the team profile",
      "Until": "Until",
      "detail": "Detail",
      "detail_plural": "Details",
      "tobedetermined": "To be determined",
      "tobedetermined_short": "TBD",
      "round": "Round",
      "mymatch": "My match",
      "mymatch_plural": "My matches",
      "tournament": "Tournament",
      "tournament_plural": "Tournaments",
      "size": "Size",
      "started": "Started",
      "performancescoredescription": "The performance score sums up with a number the impact of the player on the game. The value takes into account various factors and is calculated on the base of individual performances in correlation with other participants.",
      "prize": "Prize",
      "prize_plural": "Prizes",
      "rule": "Rule",
      "rule_plural": "Rules",
      "contact": "Contact",
      "contact_plural": "Contacts",
      "ready": "Ready",
      "ready_plural": "Ready",
      "pending": "Pending",
      "waiting": "Waiting",
      "loginerrorsuggestion": "If you have recently changed your summoner name, remember to enter the new one to sign in"
  },
  "region": {
      "euw": "Europe West",
      "na": "North America"
  },
  "time": {
      "sunday": "Sunday",
      "monday": "Monday",
      "tuesday": "Tuesday",
      "wednesday": "Wednesday",
      "thursday": "Thursday",
      "friday": "Friday",
      "saturday": "Saturday",
      "january": "January",
      "february": "February",
      "march": "March",
      "april": "April",
      "may": "May",
      "june": "June",
      "july": "July",
      "august": "August",
      "september": "September",
      "october": "October",
      "november": "November",
      "december": "December",
      "second_short": "s",
      "minute_short": "min",
      "hour_short": "h",
      "day_short": "d",
      "fewsecondsago": "A few seconds ago",
      "secondago": "{{ objPar.value }} second ago",
      "secondago_plural": "{{ objPar.value }} seconds ago",
      "minuteago": "{{ objPar.value }} minute ago",
      "minuteago_plural": "{{ objPar.value }} minutes ago",
      "hourago": "{{ objPar.value }} hour ago",
      "hourago_plural": "{{ objPar.value }} hours ago",
      "dayago": "{{ objPar.value }} day ago",
      "dayago_plural": "{{ objPar.value }} days ago",
      "monthago": "{{ objPar.value }} month ago",
      "monthago_plural": "{{ objPar.value }} months ago",
      "yearago": "{{ objPar.value }} year ago",
      "yearago_plural": "{{ objPar.value }} years ago",
      "infiniteyearsago": "Infinite years ago",
      "today": "Today",
      "second": "Second",
      "second_plural": "Seconds",
      "minute": "Minute",
      "minute_plural": "Minutes",
      "hour": "Hour",
      "hour_plural": "Hours",
      "day": "Day",
      "day_plural": "Days",
      "allday": "All day",
      "time": "Time"
  },
  "toast": {
      "cookiesdisabled": "Cookies are currently disabled. The site will not work correctly.",
      "localstoragenotsupported": "LocalStorage is not supported by your browser. The site will not work correctly.",
      "cannotreachserver": "Can not reach server.",
      "standarderrorajax": "Error {{ objPar.status }}, we will fix it as soon as possible. Sorry for any inconvenience caused.",
      "seeyousoon": "See you soon",
      "notloggedinerror": "You need to be logged in for this functionality",
      "nothomeregionerror": "You are not in your home region",
      "welcomeback": "Welcome back, your last visit was {{ objPar.sRelativeTime }}",
      "updateavailable": "A new version of LoLSquare is available",
      "offline": "You appear to be offline",
      "achievementunlocked": "Achievement unlocked!",
      "donothavepermission": "You don't have the permission to perform this task",
      "bindcodeupdated": "Bind code updated",
      "choosepassword": "Choose a password",
      "summonersuccesfullybound": "Summoner successfully bound",
      "bindingcodeexpired": "This binding code seems to be expired, please try again",
      "summonernotfound": "Summoner not found",
      "thanksfeedback": "Thanks for the feedback!",
      "summonertoinvitenotfound": "No registered summoner was found",
      "needtochoosesummonertoinvite": "You need to choose a summoner to invite",
      "needtochooseteamtoinvite": "You need to choose a team to invite",
      "needtochooseroletoinvite": "You need to choose a role",
      "thanksreport": "Thanks for the feedback, let's keep LoLSquare civil togheter",
      "couldnotfindteam": "Couldn't find the choosen team",
      "memberpromotedtoadmin": "Member promoted to admin",
      "admindemotedtomember": "Admin role revoked",
      "memberpromotedtoowner": "The role of owner has been passed",
      "memberkicked": "Member kicked out",
      "promotedtomember": "Trial promoted to official member",
      "couldnotloadmatchdetails": "Couldn't load match details",
      "teamdisbanded": "Team succesfully disbanded",
      "summonerinvited": "{{ objPar.SummonerName }} was successfully invited in your team",
      "teaminviteaccepted": "Team joined!",
      "teaminvitedeclined": "Invite declined successfully",
      "opentoinvitations": "Open to invitations",
      "invitationsblocked": "Invitations successfully blocked",
      "joinrequestsent": "Join request successfully sent",
      "joinrequestcanceled": "Request successfully canceled",
      "summonerupdated": "Summoner updated successfully",
      "summonerchangedname": "This summoner changed his name from {{ objPar.SummonerNameEx }} to {{ objPar.SummonerNameNew }}!",
      "notinhomeregion": "You need to be in your home region to use this functionality",
      "curriculumsaved": "Curriculum saved succesfully",
      "sameroles": "Primary role and secondary role must be different",
      "scheduleobligatory": "You should specify your game schedules to find a team that is more suited to you",
      "ageerror": "Invalid age, age must be between 13 and 80 years",
      "teamsaved": "Team changes saved",
      "teamcreated": "Team created succesfully",
      "nochangestosave": "There are no changes to save",
      "choosensummonernotfound": "Couldn't find the choosen summoner",
      "summoneraccepted": "Summoner accepted in your team",
      "requestdeclined": "Request declined",
      "invitationcenceled": "The invitation has been canceled",
      "teamjoinsettingssaved": "Team join settings saved",
      "textcopied": "Text copied",
      "errtextcopied": "Could not copy text",
      "cantmatchsameparticipant": "It is not possible to have a participant twice in the same game",
      "descriptionsaved": "Description saved",
      "participantnotfound": "Participant not found",
      "participantkicked": "Participant kicked out",
      "tournamentnotfound": "Tournament not found",
      "tournamentcreated": "Tournament created",
      "tournamentstarted": "Tournament started",
      "tournamentclosed": "Tournament ended",
      "tournamentreopened": "Tournament reopened",
      "notournamenthost": "You must specify a summoner host",
      "notournamentname": "You must specify the tournament name",
      "wrongtournamentsize": "Accepted values for tournament size are 8, 16 and 32",
      "datenotvalid": "Enter a valid date",
      "participatetournamentnoteam": "You must be part of a team to participate in this tournament",
      "needtochooseteam": "You need to choose a team",
      "datenotvalidtimevalid": "Without a valid date the time will not be saved",
      "tournamentinfosaved": "Tournament information saved",
      "checkinminutesnotvalid": "Invalid check in minutes",
      "tournamentcheckedin": "Participation confirmed successfully",
      "tournamentcheckinstarted": "Check-in phase started",
      "tournamentreadycheckresetted": "List of participants confirmations resetted",
      "prioritygiven": "Priority assigned successfully",
      "prioritytaken": "Priority successfully removed"
  },
  "notification": {
      "asummonerleftyourteam": "# left the team #",
      "asummonerdisbandedyourteam": "The team # has been disbanded",
      "youhavebeenkickedfromtheteam": "You have been kicked from the team #",
      "asummonerhasbeenkickedfromyourteam": "# has been kicked from the team #",
      "yourjoinrequesthasbeenaccepted": "Your request to join the team # has been accepted",
      "yourjoinrequesthasbeendeclined": "Your request to join the team # has been declined",
      "youhavebeeninvitedtojoinateam": "You have been invited to join the team #",
      "yourinvitehasbeencanceled": "Your pending invitation for the team # has been canceled",
      "asummonerhasbeeninvitedtoyourteam": "# was invited to the team #",
      "aninvitehasbeenaccepted": "# accepted the invitation to join the team #",
      "aninvitehasbeendeclined": "# declined the invitation to join the team #",
      "aninvitehasbeencanceled": "#'s invitation to join the team # has been canceled",
      "aninviteisabouttoexpire": "An invitation to join the team # is about to expire",
      "asummonerrequestedtojoinyourteam": "The summoner # wants to join the team #",
      "ajoinrequesthasbeenaccepted": "# was accepted into the team #",
      "ajoinrequesthasbeendeclined": "#'s join request for team # was declined",
      "ajoinrequesthasbeencanceled": "# canceled his request to join the team #",
      "ajoinrequestisabouttoexpired": "A join request for the team # is about to expire",
      "textmoderationwarning": "One of your texts has been removed because it is considered inappropriate"
  },
  "home": {
      "news": "News",
      "discover": "Discover",
      "feed": "Feed",
      "summonerslooking": "Summoners looking for a team",
      "teamslooking": "Teams looking for members",
      "nameandmainroles": "Name & main roles",
      "stepregister": "Unlock all the features by registering your summoner",
      "stepcompilecv": "Let other teams know who you are",
      "stepfindteam": "Find a team",
      "topteams": "Top teams",
      "popularsummoners": "Popular summoners",
      "firststepstitle": "First steps",
      "featuredtournamentstitle": "Featured tournaments",
      "notournaments": "No featured tournaments scheduled"
  },
  "summoner": {
      "claimyouraccountpromo": "Is this your account? Claim it with the REGISTER button.",
      "summonerneverupdated": "This summoner has never been updated",
      "recentlyplayedwith": "Recently played with",
      "filterbyqueuetype": "Filter by queue type",
      "nomatchtoshow": "This summoner has no match to show",
      "laststatisticsupdate": "Last statistics update",
      "playedwithseason": "Played with (season)",
      "notfollowinganyone": "This summoner is not following anyone",
      "nofollowers": "No one is following this summoner",
      "menotfollowinganyone": "You are not following anyone",
      "menofollowers": "No one is following you",
      "notingame": "This summoner is not currently in game",
      "checkiflive": "Check if in game",
      "step1title": "Log on LoL",
      "step1desc1": "To register you need the client open and you must be logged in.",
      "step1desc2": "If you have these things in order press next.",
      "step2title": "LoL client settings",
      "step2desc1": "Open the LoL client settings (click the cogwheel in the top right corner of the LoL client window).",
      "step2desc2": "Select the voice VERIFICATION under the \"About\" section.",
      "step3title": "Insert verification code",
      "step3desc1": "Copy this verification code:",
      "step3desc2": "On the LoL client insert the above verification code and click save.",
      "step3err1": "The LoL Client sometimes fails to update the code.",
      "step3err2": "Try restarting it and inserting the code again.",
      "step4title": "Choose a password",
      "step4desc": "Verified! Now choose the password to be used together with your summoner name to sign in.",
      "step4err": "We suggest you to NOT use the same password as your LoL account.",
      "step5title": "Registration completed!",
      "step5desc": "Thanks and welcome to LoLSquare!",
      "nochampionstat": "Champion stats are being processed",
      "rankcardleveltitle": "Normals statistics",
      "lasttimeplayedwith": "Last time played together",
      "registeredin": "Registered in",
      "scheduledforupdate": "Scheduled for update",
      "pendinginvitefromteam": "This summoner has a pending invitation from the team {{ objPar.TeamName }}",
      "doubletriplequadrapenta": "Double / Triple / Quadra / Penta",
      "multikills": "Multikills",
      "sharesummoner": "Copy the link to this summoner",
      "sociallinksmanagement": "Social links management",
      "statsarebeingprocessed": "{{ objPar.SummonerName }}'s statistics are being processed",
      "summonerblockinvitations": "This summoner has blocked invitations",
      "summonernotregistered": "This summoner is not registered",
      "statsmysummonerarebeingdownloaded": "Statistics for your summoner are currently being downloaded from Riot servers.",
      "statsthissummonerarebeingdownloaded": "Statistics for this summoner are currently being downloaded from Riot servers.",
      "nostatstoshowfor": "No statistics to show for",
      "summonernomatch": "We have no matches to show for this summoner",
      "filterqueuetype": "Filter by queue type",
      "filterplaceholder": "Filter matches (by win/lose, champion, item, summoner name, runes and spells)",
      "addfilter": "+Filter",
      "championstats": "Champion stats",
      "summonernamenotingame": "{{ objPar.SummonerName }} is not currently in game",
      "loadlivegameerror": "We were unable to load the match statistics",
      "loadchampionstatserror": "Couldn't load champion stats",
      "creepscoreandcsmin": "Creep score and creep score per minute",
      "summoneralreadyinmyteams": "This summoner is already part of your teams",
      "lastnameused": "Previous name"
  },
  "about": {
      "aboutbrand": "About LoLSquare",
      "founders": "The team",
      "michele": "EndlessBlueSky",
      "jacopo": "God Took My Eyes",
      "daniele": "Ice Pick",
      "frontenddeveloper": "Frontend developer",
      "backenddeveloper": "Backend developer",
      "spokesman": "Coffee drinker",
      "ourstory": "Our story",
      "ourstory1": "League of legends has always been a passion of mine.",
      "ourstory2": "The bitter defeats, the satisfying victories and the many friendships made on LoL have always kept me tied up and invested in the game.",
      "ourstory3": "One day my friends and I decided to create a team. The game as I knew it had completely evolved.",
      "ourstory4": "Practicing with members, discussing team comps, playing for each other, finding your own team play style.",
      "ourstory5": "Playing in teams is one of the best experiences I've ever had on league of legends.",
      "ourstory6": "The lack of tools for creating and managing teams on lol left me disappointed, so I decided to create my own for anyone who plays or wants to play in teams.",
      "ourstory7": "I explained my project to Jacopo (we are both programmers) and together we are committed to this ambitious project.",
      "ourstory8": "And so LoLSquare began.",
      "ourgoals": "Our goals",
      "ourgoalsdesc": "Our goal is to provide a tool that allows players to have fun on LoL through what we believe is the best way to play a team game, playing with one.",
      "partners": "Partners",
      "contacts": "Contacts"
  },
  "accountdata": {
      "pagetitle": "Account data",
      "clearcookies": "Clear local information",
      "clearcookiesdesc": "This function will delete all LoLSquare data from your device, this informations are used to facilitate the use of the web application. Among the data that will be lost are the last summoner used to sign in and the list of previously searched summoner and teams.",
      "clearcookiesconfirm": "Clear data",
      "deleteaccount": "Delete your account",
      "deleteaccountdesc": "If you are no longer interested in using LoLSquare services, you can completely delete your LoLSquare account in this section.",
      "deleteaccountshowconfirm": "Delete account",
      "deleteaccountconfirm": "Confirm delete account"
  },
  "curriculum": {
      "pagetitle": "Curriculum",
      "chooseprimaryrole": "Choose your primary role",
      "choosesecondaryrole": "Choose your secondary role",
      "askprimaryrole": "Whats your primary role?",
      "asksecondaryrole": "Whats your secondary role?",
      "asknationality": "What's your nationality?",
      "askschedule": "When are you available to play?",
      "askage": "How old are you?",
      "otheroptions": "Other options",
      "blockinvitationdesc": "If you are not looking for a team we suggest you select the following check.",
      "blockinvitation": "Block invitations and hide me from search member"
  },
  "editteam": {
      "pagetitle": "Edit team",
      "pagetitlealt": "Create team",
      "registerpromo": "Only registered users can create a team.",
      "getrandomteam": "New casual team generalities",
      "logo": "Logo with color variations",
      "teamcolor": "Team color",
      "showdeleteteam": "Delete team",
      "confirmdeleteteam": "Confirm delete team",
      "chooselogo": "Choose as team logo"
  },
  "faq": {
      "pagetitle": "FAQ - LoLSquare",
      "pagetitlefaq": "Frequently asked questions",
      "faqlist": "FAQ list"
  },
  "myteams": {
      "pagetitle": "My teams",
      "pendinginvite": "Pending team invitations",
      "nopendinginvite": "There are no pending invitations",
      "pendingjoin": "Pending join requests",
      "nopendingjoin": "You don't have pending join requests",
      "teaminvite": "Team invite",
      "summonerjoinrequest": "Summoner join request",
      "youhaveinvite": "You have been invited by",
      "yourequestedjoin": "You requested to join",
      "jointeam": "Join team",
      "declineinvite": "Decline invitation",
      "canceljoin": "Cancel join request"
  },
  "searchmember": {
      "pagetitle": "Search member",
      "promouseheader": "If you want to search for a summoner by name use the search in the header",
      "playtimeschedules": "Play time schedules",
      "hasnoteam": "Has no team",
      "rankqueue": "Rank queue"
  },
  "searchresults": {
      "pagetitle": "Search results",
      "resultsfor": "Search results for",
      "selectyoursummoner": "Select your summoner",
      "waitingtext": "Did you know? Summoner names are case insensitive and spaces are ignored too!"
  },
  "searchsummoner": {
      "pagetitle": "Search summoner",
      "resultsfor": "Search results for",
      "selectyoursummoner": "Select your summoner",
      "desc1": "You are searching in the",
      "desc2": "server, if you need help to change region",
      "desc3": "click me",
      "desc4": "Remember that summoner name are not case sensitive and spaces are not considered too!",
      "registerdesc1": "To register just search your summoner, click the register button and follow the steps!",
      "changepassworddesc1": "If you lost your password or need to change it you can do it by simply re-doing the registration process,",
      "changepassworddesc2": "just search your summoner, click the register button and follow the steps.",
      "changepassworddesc3": "You will not lose any of your data by registering a second time!"
  },
  "searchteam": {
      "pagetitle": "Search team",
      "promouseheader": "If you want to search for a team by name use the search in the header",
      "teamsopenpositions": "Teams open positions",
      "suggestedteams": "Suggested teams",
      "alreadyinthisteam": "You are part of this team"
  },
  "searchtournament": {
      "opentournamentstitle": "Open tournaments",
      "opentournamentsnothingfound": "No open tournament found",
      "closedtournamentstitle": "Tournaments ended",
      "closedtournamentsnothingfound": "No ended tournament found"
  },
  "sociallinks": {
      "managesociallinks": "Manage social links",
      "summonersocialdesc": "Social media icons will be displayed on your summoner profile page. These small social media buttons link to services like Twitch and YouTube, allowing visitors to quickly access your social profiles.",
      "teamsocialdesc": "Social media icons will be displayed on your team page. These small social media buttons link to services like Twitch and YouTube, allowing visitors to quickly access your social profiles."
  },
  "teamleaderboard": {
      "pagetitle": "Teams leaderboard",
      "teambuttontooltip": "LoLSquare didn't rank this team",
      "viewteamnameposition": "View {{ objPar.TeamName }} position"
  },
  "user": {
      "pagedesc": "Here you can manage your user settings",
      "card-cv-title": "Curriculum",
      "card-cv-desc": "Manage your curriculum to best represent you and improve your experience on LoLSquare",
      "card-sociallinks-title": "Social links",
      "card-sociallinks-desc": "Add links to your social media profiles to increase your audience",
      "card-achievements-title": "Achievements",
      "card-achievements-desc": "View your unlocked achievements and those yet to be unlocked",
      "card-accountdata-title": "Account data",
      "card-accountdata-desc": "Manage your LoLSquare and local account data and information"
  },
  "team": {
      "invitedbythisteam": "This team invited you to join!",
      "recap": "Recap",
      "trial": "Trial",
      "trial_plural": "Trials",
      "trialdesc1": "When a player joins a team he will start as a trial player.",
      "trialdesc2": "Matches played with trial summoners are NOT counted as team matches!",
      "trialdesc3": "Add the players on LoL and get to know each other with a few games.",
      "trialdesc4": "Remember to promote trial players as a full member!",
      "matchlistdesc": "Only matches played by 5 team members (Trial members excluded) will be shown here. Due to how Riot API works, there may be a delay before we can detect a team match.Usually about 2 hours or less, and never more than 24.!",
      "nomatches": "This team has no match to show",
      "nofollowers": "No follower found",
      "managejoinrequests": "Manage join requests",
      "managejoinrequestsdesc": "Here you can choose if you want to receive join requests from summoners:",
      "opentojoinrequests": "Open to join requests",
      "openpositionsdesc": "Here you can choose the roles available in your team, a summoner can request to enter indicating for which role",
      "manageschedule": "Manage schedule",
      "managescheduledesc": "Weekly playing time, click on the time slot you want to set or unset",
      "searchingforroles": "This team is searching members for this roles",
      "intrialsince": "In trial since",
      "promotetomember": "Promote to member",
      "invitedas": "This team invited you to join as {{ objPar.Role }}",
      "shareteam": "Copy the link to this team",
      "summonerjoinedtoasthelp": "{{ objPar.SummonerName }} joined the team as trial, send him a friend request on the LoL client and get to know each other",
      "joinrequestassend": "You have sent a join request for this team as {{ objPar.Role }}",
      "joinas": "Join as {{ objPar.Role }}",
      "leaveteamdesc": "Are you sure you want to leave the team?",
      "disbandteamdesc1": "Disbanding the team will force all members to leave the team.",
      "disbandteamdesc2": "The team will be removed and all it's data will be lost.",
      "disbandteamdesc3": "This is action is permanent and cannot be undone.",
      "nostats": "This team has not yet played a game or the statistics are being processed",
      "youcannotedit": "You can't edit this team",
      "teamschedule": "Team schedule"
  },
  "tournament": {
      "tournament": "Tournament",
      "registrationopen": "Registrations are open!",
      "join": "Join the tournament",
      "requestsent": "Join request sent",
      "leave": "Leave the tournament",
      "leavemodaltext": "Are you sure you want to quit the tournament?",
      "canceljoin": "Cancel join request",
      "tournamentstarted": "Tournament started",
      "tournamentended": "Tournament ended",
      "host": "Host",
      "noparticipants": "No participant",
      "noschedule": "The tournament schedule have not yet been announced",
      "overview": "Overview",
      "bracket": "Bracket",
      "schedule": "Schedule",
      "modefixed": "Howling abyss | Blind pick | 1v1",
      "partofthetournament": "You are part of the tournament!",
      "management": "Management",
      "managetournament": "Manage tournament",
      "choosematchtomanage": "Choose match to manage",
      "participantblueside": "Participant (blue side)",
      "participantredside": "Participant (red side)",
      "matchdate": "Match date",
      "matchtime": "Match time",
      "directelimination": "Direct elimination",
      "choosebracketwinner": "Choose the winner of the match",
      "bluesidewon": "Blue side won",
      "redsidewon": "Red side won",
      "registrationphase": "Registration phase",
      "registrationclosed": "Registration phase completed",
      "manageparticipants": "Manage participants",
      "selectparticipantmanage": "Kick participant",
      "start": "Start the tournament",
      "end": "End the tournament",
      "reopen": "Reopen the tournament",
      "settings": "Tournament settings",
      "selectround": "Select round",
      "chooseteamjoin": "Choose the team to participate in the tournament",
      "matchdetails": "Match details",
      "startdate": "Tournament start date",
      "topchampions": "Most played champions (Solo + Flex)",
      "separatorextraparticipants": "Reserve participants",
      "joinfulltournament": "The tournament has reached it's full capacity. You will be added to the reserve queue and will be called to play only if participants preceding you don't show up. Join anyway?",
      "checkinmanagedescription": "Starting the check-in phase the participants can indicate (through a button on this tournament page) their presence, reconfirming their intention to participate in the tournament. The check in phase is not mandatory and will not limit the possibility of starting the tournament. During the check in process, registrations are still open. Restarting the check in during the check in phase will set the timer with the new timing chosen, also resetting the checkin will not reset the ready states.",
      "checkinminutes": "Duration of check in (minutes)",
      "checkinminutesph": "Min 5 - Max 30",
      "checkinstart": "Start check in phase",
      "checkinphase": "Check in phase",
      "manageparticipantsnocontent": "There are no participants yet to manage",
      "checkinaskifready": "The tournament is checking in, confirm your participation",
      "createatorunamentpromo": "Do you want to create your own tournament? Click here.",
      "givepriority": "Give priority",
      "removepriority": "Remove priority",
      "resetreadystates": "Reset participants confirmations",
      "haspriority": "Participant with priority assigned by the host",
      "confirmkick": "Kick participant",
      "confirmkicktext": "Are you sure you want to expel {{ objPar.ParticipantName }} from the tournament?"
  },
  "roletype": {
      "top": "Top",
      "jungle": "Jungle",
      "mid": "Mid",
      "adc": "Adc",
      "support": "Support",
      "fill": "Fill",
      "top_actor": "Toplaner",
      "jungle_actor": "Jungler",
      "mid_actor": "Midlaner",
      "adc_actor": "Adc",
      "support_actor": "Support",
      "fill_actor": "Fill"
  },
  "ranktier": {
      "placement": "Placement",
      "iron": "Iron",
      "bronze": "Bronze",
      "silver": "Silver",
      "gold": "Gold",
      "platinum": "Platinum",
      "diamond": "Diamond",
      "master": "Master",
      "grandmaster": "Grandmaster",
      "challenger": "Challenger"
  },
  "rankdivision": {
      "iv": "IV",
      "iii": "III",
      "ii": "II",
      "i": "I"
  },
  "season": {
      "preseason_3": "Preseason 3",
      "season_3": "Season 3",
      "preseason_4": "Preseason 4",
      "season_4": "Season 4",
      "preseason_5": "Preseason 5",
      "season_5": "Season 5",
      "preseason_6": "Preseason 6",
      "season_6": "Season 6",
      "preseason_7": "Preseason 7",
      "season_7": "Season 7",
      "preseason_8": "Preseason 8",
      "season_8": "Season 8",
      "preseason_9": "Preseason 9",
      "season_9": "Season 9",
      "preseason_10": "Preseason 10",
      "season_10": "Season 10",
      "preseason_11": "Preseason 11",
      "season_11": "Season 11",
      "preseason_12": "Preseason 12",
      "season_12": "Season 12"
  },
  "queuetypestatistics": {
      "ranked_flex_5v5": "Ranked Flex 5v5",
      "ranked_solo": "Ranked Solo/Duo",
      "ranked_flex_5v5_short": "Flex 5v5",
      "ranked_solo_short": "Solo/Duo",
      "normal": "Normal",
      "other": "Other"
  },
  "reportcategory": {
      "other": "Other",
      "hate_speech": "Hate speech",
      "harassment_or_bullying": "Harassment or bullying",
      "pornography_or_sexually_explicit_material": "Pornography or sexually explicit material",
      "child_abuse": "Child abuse"
  },
  "schedulesrange": {
      "morning_6am_to_12am": "Morning 6am to 12am",
      "afternoon_12am_to_6pm": "Afternoon 12am to 6pm",
      "evening_6pm_to_12pm": "Evening 6pm to 12pm",
      "late_evening_12pm_to_6am": "Late evening 12pm to 6am"
  },
  "weekday": {
      "monday": "Monday",
      "tuesday": "Tuesday",
      "wednesday": "Wednesday",
      "thursday": "Thursday",
      "friday": "Friday",
      "saturday": "Saturday",
      "sunday": "Sunday"
  },
  "timeslot": {
      "morning": "Morning",
      "afternoon": "Afternoon",
      "evening": "Evening",
      "lateevening": "Late evening"
  },
  "team-group-noun": {
      "knights": "{{ objPar.ChampionName }}'s knights",
      "heralds": "{{ objPar.ChampionName }}'s heralds",
      "force": "{{ objPar.ChampionName }}'s force",
      "legion": "{{ objPar.ChampionName }}'s legion",
      "family": "{{ objPar.ChampionName }}'s family",
      "friends": "{{ objPar.ChampionName }}'s friends",
      "warriors": "{{ objPar.ChampionName }}'s warriors",
      "cavaliers": "{{ objPar.ChampionName }}'s cavaliers",
      "court": "{{ objPar.ChampionName }}'s court",
      "sailors": "{{ objPar.ChampionName }}'s sailors",
      "peasants": "{{ objPar.ChampionName }}'s peasants",
      "runners": "{{ objPar.ChampionName }}'s runners",
      "farmers": "{{ objPar.ChampionName }}'s farmers",
      "archers": "{{ objPar.ChampionName }}'s archers",
      "assassins": "{{ objPar.ChampionName }}'s assassins",
      "tanks": "{{ objPar.ChampionName }}'s tanks",
      "mages": "{{ objPar.ChampionName }}'s mages",
      "supports": "{{ objPar.ChampionName }}'s supports",
      "bruisers": "{{ objPar.ChampionName }}'s bruisers",
      "marksmen": "{{ objPar.ChampionName }}'s marksmen",
      "fighters": "{{ objPar.ChampionName }}'s fighters",
      "disciples": "{{ objPar.ChampionName }}'s disciples"
  },
  "tournamentteamsize": {
      "one": "1v1",
      "five": "5v5"
  },
  "servertoast": {
      "1": "",
      "2": "This bind request does not exists",
      "3": "You must be logged in",
      "4": "Internal error",
      "5": "Link deleted",
      "6": "Link saved",
      "7": "A verification email has been sent to the new address",
      "8": "This summoner is being updated by another user",
      "9": "We had problems contacting Riot servers",
      "10": "Twitch link is not correct, we accept only direct link to channel",
      "11": "Summoner not found",
      "12": "This summoner is not registered",
      "13": "The password is not correct",
      "14": "You are already following this summoner",
      "15": "You are not following the target summoner",
      "16": "This summoner has been updated recently, please wait",
      "17": "You are already following this team",
      "18": "You are not following the target team",
      "19": "The report could not be found",
      "20": "Summoner not found",
      "21": "You have already bound this summoner",
      "22": "The verification code retrieved from the LoL client is empty",
      "23": "The verification code retrieved from the LoL client doesn't match",
      "24": "This bind request has not been verified yet",
      "25": "You are already the owner of the team",
      "26": "A team can have nine members at most",
      "27": "This summoner is already a member of the team",
      "28": "You have already applied for that team",
      "29": "You have a pending invite from that team, accept it to join",
      "30": "You are already a member of the team",
      "31": "Join request not found",
      "32": "A team can have twenty trials at most",
      "33": "Team invite not found",
      "34": "You do not have the necessary permission to do that",
      "35": "You can have a maximum of 3 teams",
      "36": "Team not found",
      "37": "The name you chose must be between 3 and 30 characters",
      "38": "The name you chose contains invalid characters",
      "39": "The name you chose is already taken",
      "40": "The tag you choose must be between 1 and 5 characters",
      "41": "The tag you choose contains invalid characters",
      "42": "Invalid team color",
      "43": "The target summoner is not part of the team",
      "44": "The summoner cannot join the team because there are overlapping combinations of members with another team. For more info check the FAQ",
      "45": "You can't do that",
      "46": "The tournament has already been started",
      "47": "The winner must be one of the two opponents of the bracket",
      "48": "Incoherence detected between winners and participants",
      "49": "You have already requested to participate",
      "50": "You are not listed for this tournament",
      "51": "You are already scheduled for a match",
      "52": "The player is already scheduled for a match",
      "53": "The target summoner not listed for this tournament",
      "54": "Not enough participants to start the tournament",
      "55": "The current round has not been completed yet",
      "56": "All rounds have already been started",
      "57": "Duplicated participant",
      "58": "YouTube link is not correct, we accept only direct link to channels and users"
  }
};
var i18nEN = {
  cancel: "Cancel",
  clear: "Clear",
  done: "Ok",
  previousMonth: "‹",
  nextMonth: "›",
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
var QueuesList = {
  "1021": {
      "name": "One For All",
      "shortName": "One For All",
      "description": "One For All",
      "detailedDescription": ""
  },
  "1020": {
      "name": "One For All",
      "shortName": "One For All",
      "description": "One For All",
      "detailedDescription": ""
  },
  "1022": {
      "name": "One For All",
      "shortName": "One For All",
      "description": "One For All",
      "detailedDescription": ""
  },
  "1050": {
      "name": "Odyssey (Crewmember)",
      "shortName": "Odyssey (Crewmember)",
      "description": "Crewmember",
      "detailedDescription": "Odyssey (Crewmember)"
  },
  "14": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Draft Pick",
      "detailedDescription": "Normal (Draft Pick)"
  },
  "440": {
      "name": "Ranked Flex",
      "shortName": "Ranked Flex",
      "description": "Ranked Flex",
      "detailedDescription": ""
  },
  "441": {
      "name": "Ranked Flex",
      "shortName": "Ranked Flex",
      "description": "Ranked Flex",
      "detailedDescription": ""
  },
  "442": {
      "name": "Ranked Flex",
      "shortName": "Ranked Flex",
      "description": "Ranked Flex",
      "detailedDescription": ""
  },
  "422": {
      "name": "Ranked Solo/Duo",
      "shortName": "Ranked Solo/Duo",
      "description": "Ranked Solo/Duo",
      "detailedDescription": ""
  },
  "1102": {
      "name": "2v0 (Ranked)",
      "shortName": "2v0 (Ranked)",
      "description": "2v0 (Ranked)",
      "detailedDescription": ""
  },
  "31": {
      "name": "Intro",
      "shortName": "Intro",
      "description": "Intro",
      "detailedDescription": ""
  },
  "452": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "420": {
      "name": "Ranked Solo/Duo",
      "shortName": "Ranked Solo/Duo",
      "description": "Ranked Solo/Duo",
      "detailedDescription": ""
  },
  "451": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "1100": {
      "name": "Teamfight Tactics (Ranked)",
      "shortName": "Teamfight Tactics (Ranked)",
      "description": "Ranked",
      "detailedDescription": "Teamfight Tactics (Ranked)"
  },
  "33": {
      "name": "Intermediate",
      "shortName": "Intermediate",
      "description": "Intermediate",
      "detailedDescription": ""
  },
  "421": {
      "name": "Ranked Solo/Duo",
      "shortName": "Ranked Solo/Duo",
      "description": "Ranked Solo/Duo",
      "detailedDescription": ""
  },
  "450": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "1101": {
      "name": "1v0 (Ranked)",
      "shortName": "1v0 (Ranked)",
      "description": "1v0 (Ranked)",
      "detailedDescription": ""
  },
  "32": {
      "name": "Beginner",
      "shortName": "Beginner",
      "description": "Beginner",
      "detailedDescription": ""
  },
  "92": {
      "name": "Level 100 Gauntlet",
      "shortName": "Level 100 Gauntlet",
      "description": "Level 100 Gauntlet",
      "detailedDescription": ""
  },
  "35": {
      "name": "Beginner",
      "shortName": "Beginner",
      "description": "Beginner",
      "detailedDescription": ""
  },
  "91": {
      "name": "The Teemoing",
      "shortName": "The Teemoing",
      "description": "The Teemoing",
      "detailedDescription": ""
  },
  "34": {
      "name": "Intro",
      "shortName": "Intro",
      "description": "Intro",
      "detailedDescription": ""
  },
  "90": {
      "name": "The Teemoing",
      "shortName": "The Teemoing",
      "description": "The Teemoing",
      "detailedDescription": ""
  },
  "431": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": ""
  },
  "97": {
      "name": "Ascension",
      "shortName": "Ascension",
      "description": "Ascension",
      "detailedDescription": ""
  },
  "36": {
      "name": "Intermediate",
      "shortName": "Intermediate",
      "description": "Intermediate",
      "detailedDescription": ""
  },
  "430": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": "Normal (Blind Pick)"
  },
  "96": {
      "name": "Ascension",
      "shortName": "Ascension",
      "description": "Ascension",
      "detailedDescription": ""
  },
  "1030": {
      "name": "Odyssey (Intro)",
      "shortName": "Odyssey (Intro)",
      "description": "Intro",
      "detailedDescription": "Odyssey (Intro)"
  },
  "41": {
      "name": "Team",
      "shortName": "Team",
      "description": "Team",
      "detailedDescription": ""
  },
  "433": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": "Normal (Blind Pick)"
  },
  "318": {
      "name": "Ultra Rapid Fire",
      "shortName": "URF",
      "description": "Ultra Rapid Fire",
      "detailedDescription": ""
  },
  "2020": {
      "name": "Tutorial Part 3",
      "shortName": "Tutorial Part 3",
      "description": "Tutorial Part 3",
      "detailedDescription": ""
  },
  "460": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": "Normal (Blind Pick)"
  },
  "42": {
      "name": "Team",
      "shortName": "Team",
      "description": "Team",
      "detailedDescription": ""
  },
  "432": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": ""
  },
  "319": {
      "name": "Ultra Rapid Fire",
      "shortName": "URF",
      "description": "Ultra Rapid Fire",
      "detailedDescription": ""
  },
  "901": {
      "name": "Ultra Rapid Fire",
      "shortName": "URF",
      "description": "Ultra Rapid Fire",
      "detailedDescription": ""
  },
  "900": {
      "name": "Ultra Rapid Fire",
      "shortName": "URF",
      "description": "Ultra Rapid Fire",
      "detailedDescription": ""
  },
  "314": {
      "name": "Nexus Siege",
      "shortName": "Nexus Siege",
      "description": "Nexus Siege",
      "detailedDescription": ""
  },
  "315": {
      "name": "Nexus Siege",
      "shortName": "Nexus Siege",
      "description": "Nexus Siege",
      "detailedDescription": ""
  },
  "301": {
      "name": "Legend of the Poro King",
      "shortName": "Poro King",
      "description": "Poro King",
      "detailedDescription": ""
  },
  "316": {
      "name": "Definitely Not Dominion",
      "shortName": "Definitely Not Dominion",
      "description": "Definitely Not Dominion",
      "detailedDescription": ""
  },
  "300": {
      "name": "Legend of the Poro King",
      "shortName": "Poro King",
      "description": "Poro King",
      "detailedDescription": ""
  },
  "317": {
      "name": "Definitely Not Dominion",
      "shortName": "Definitely Not Dominion",
      "description": "Definitely Not Dominion",
      "detailedDescription": ""
  },
  "990": {
      "name": "Invasion (Onslaught)",
      "shortName": "Invasion (Onslaught)",
      "description": "Onslaught",
      "detailedDescription": "Invasion (Onslaught)"
  },
  "981": {
      "name": "Invasion (Normal)",
      "shortName": "Invasion (Normal)",
      "description": "Normal",
      "detailedDescription": "Invasion (Normal)"
  },
  "980": {
      "name": "Invasion (Normal)",
      "shortName": "Invasion (Normal)",
      "description": "Normal",
      "detailedDescription": "Invasion (Normal)"
  },
  "982": {
      "name": "Invasion (Normal)",
      "shortName": "Invasion (Normal)",
      "description": "Normal",
      "detailedDescription": "Invasion (Normal)"
  },
  "921": {
      "name": "Legend of the Poro King",
      "shortName": "Poro King",
      "description": "Poro King",
      "detailedDescription": ""
  },
  "830": {
      "name": "Intro",
      "shortName": "Intro",
      "description": "Intro",
      "detailedDescription": ""
  },
  "920": {
      "name": "Legend of the Poro King",
      "shortName": "Poro King",
      "description": "Poro King",
      "detailedDescription": ""
  },
  "840": {
      "name": "Beginner",
      "shortName": "Beginner",
      "description": "Beginner",
      "detailedDescription": ""
  },
  "910": {
      "name": "Ascension",
      "shortName": "Ascension",
      "description": "Ascension",
      "detailedDescription": ""
  },
  "911": {
      "name": "Ascension",
      "shortName": "Ascension",
      "description": "Ascension",
      "detailedDescription": ""
  },
  "100": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": "Normal (Blind Pick)"
  },
  "820": {
      "name": "Beginner",
      "shortName": "Beginner",
      "description": "Beginner",
      "detailedDescription": ""
  },
  "701": {
      "name": "Clash",
      "shortName": "Clash",
      "description": "Clash",
      "detailedDescription": ""
  },
  "700": {
      "name": "Clash",
      "shortName": "Clash",
      "description": "Clash",
      "detailedDescription": ""
  },
  "1090": {
      "name": "Teamfight Tactics (Normal)",
      "shortName": "Teamfight Tactics (Normal)",
      "description": "Normal",
      "detailedDescription": "Teamfight Tactics (Normal)"
  },
  "1091": {
      "name": "1v0",
      "shortName": "1v0",
      "description": "1v0",
      "detailedDescription": ""
  },
  "1092": {
      "name": "2v0",
      "shortName": "2v0",
      "description": "2v0",
      "detailedDescription": ""
  },
  "470": {
      "name": "Ranked Flex",
      "shortName": "Ranked Flex",
      "description": "Ranked Flex",
      "detailedDescription": ""
  },
  "62": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "63": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "400": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Draft Pick",
      "detailedDescription": "Normal (Draft Pick)"
  },
  "401": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Draft Pick",
      "detailedDescription": "Normal (Draft Pick)"
  },
  "402": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Draft Pick",
      "detailedDescription": "Normal (Draft Pick)"
  },
  "64": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "403": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Draft Pick",
      "detailedDescription": "Normal (Draft Pick)"
  },
  "413": {
      "name": "Ranked",
      "shortName": "Ranked",
      "description": "Ranked Draft",
      "detailedDescription": ""
  },
  "65": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "412": {
      "name": "Ranked",
      "shortName": "Ranked",
      "description": "Ranked Draft",
      "detailedDescription": ""
  },
  "1040": {
      "name": "Odyssey (Cadet)",
      "shortName": "Odyssey (Cadet)",
      "description": "Cadet",
      "detailedDescription": "Odyssey (Cadet)"
  },
  "411": {
      "name": "Ranked",
      "shortName": "Ranked",
      "description": "Ranked Draft",
      "detailedDescription": ""
  },
  "0": {
      "name": "Custom",
      "shortName": "Custom",
      "description": "Custom",
      "detailedDescription": ""
  },
  "410": {
      "name": "Ranked",
      "shortName": "Ranked",
      "description": "Ranked Draft",
      "detailedDescription": ""
  },
  "1": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": "Normal (Blind Pick)"
  },
  "1010": {
      "name": "Snow Battle ARURF",
      "shortName": "Snow ARURF",
      "description": "Snow Battle ARURF",
      "detailedDescription": ""
  },
  "2": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": "Normal (Blind Pick)"
  },
  "1011": {
      "name": "Snow Battle ARURF",
      "shortName": "Snow ARURF",
      "description": "Snow Battle ARURF",
      "detailedDescription": ""
  },
  "1070": {
      "name": "Odyssey (Onslaught)",
      "shortName": "Odyssey (Onslaught)",
      "description": "Onslaught",
      "detailedDescription": "Odyssey (Onslaught)"
  },
  "1001": {
      "name": "Overcharge",
      "shortName": "Overcharge",
      "description": "Overcharge",
      "detailedDescription": ""
  },
  "321": {
      "name": "Blood Moon",
      "shortName": "Blood Moon",
      "description": "Blood Moon",
      "detailedDescription": ""
  },
  "1000": {
      "name": "Overcharge",
      "shortName": "Overcharge",
      "description": "Overcharge",
      "detailedDescription": ""
  },
  "320": {
      "name": "Blood Moon",
      "shortName": "Blood Moon",
      "description": "Blood Moon",
      "detailedDescription": ""
  },
  "8": {
      "name": "Normal",
      "shortName": "Normal",
      "description": "Blind Pick",
      "detailedDescription": "Normal (Blind Pick)"
  },
  "9": {
      "name": "Ranked Flex",
      "shortName": "Ranked Flex",
      "description": "Ranked Flex",
      "detailedDescription": ""
  },
  "325": {
      "name": "ARSR",
      "shortName": "ARSR",
      "description": "ARSR",
      "detailedDescription": ""
  },
  "1060": {
      "name": "Odyssey (Captain)",
      "shortName": "Odyssey (Captain)",
      "description": "Captain",
      "detailedDescription": "Odyssey (Captain)"
  },
  "324": {
      "name": "ARSR",
      "shortName": "ARSR",
      "description": "ARSR",
      "detailedDescription": ""
  },
  "1110": {
      "name": "Teamfight Tactics (Tutorial)",
      "shortName": "Teamfight Tactics (Tutorial)",
      "description": "Tutorial",
      "detailedDescription": ""
  },
  "52": {
      "name": "Beginner",
      "shortName": "Beginner",
      "description": "Beginner",
      "detailedDescription": ""
  },
  "2000": {
      "name": "Tutorial Part 1",
      "shortName": "Tutorial Part 1",
      "description": "Tutorial Part 1",
      "detailedDescription": ""
  },
  "970": {
      "name": "Hexakill",
      "shortName": "Hexakill",
      "description": "Hexakill",
      "detailedDescription": ""
  },
  "2010": {
      "name": "Tutorial Part 2",
      "shortName": "Tutorial Part 2",
      "description": "Tutorial Part 2",
      "detailedDescription": ""
  },
  "961": {
      "name": "The Teemoing",
      "shortName": "The Teemoing",
      "description": "The Teemoing",
      "detailedDescription": ""
  },
  "960": {
      "name": "The Teemoing",
      "shortName": "The Teemoing",
      "description": "The Teemoing",
      "detailedDescription": ""
  },
  "930": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "931": {
      "name": "ARAM",
      "shortName": "ARAM",
      "description": "ARAM",
      "detailedDescription": ""
  },
  "950": {
      "name": "Level 100 Gauntlet",
      "shortName": "Level 100 Gauntlet",
      "description": "Level 100 Gauntlet",
      "detailedDescription": ""
  },
  "1201": {
      "name": "1v1",
      "shortName": "1v1",
      "description": "1v1",
      "detailedDescription": "1v1"
  },
  "951": {
      "name": "Level 100 Gauntlet",
      "shortName": "Level 100 Gauntlet",
      "description": "Level 100 Gauntlet",
      "detailedDescription": ""
  },
  "1200": {
      "name": "Nexus Blitz",
      "shortName": "Nexus Blitz",
      "description": "Blind Pick",
      "detailedDescription": ""
  },
  "941": {
      "name": "Nexus Siege",
      "shortName": "Nexus Siege",
      "description": "Nexus Siege",
      "detailedDescription": ""
  },
  "940": {
      "name": "Nexus Siege",
      "shortName": "Nexus Siege",
      "description": "Nexus Siege",
      "detailedDescription": ""
  },
  "850": {
      "name": "Intermediate",
      "shortName": "Intermediate",
      "description": "Intermediate",
      "detailedDescription": ""
  },
  "800": {
      "name": "Intermediate",
      "shortName": "Intermediate",
      "description": "Intermediate",
      "detailedDescription": ""
  },
  "801": {
      "name": "Co-op vs. AI",
      "shortName": "Co-op vs. AI",
      "description": "Co-op vs. AI",
      "detailedDescription": ""
  },
  "810": {
      "name": "Intro",
      "shortName": "Intro",
      "description": "Intro",
      "detailedDescription": ""
  },
  "600": {
      "name": "Blood Moon",
      "shortName": "Blood Moon",
      "description": "Blood Moon",
      "detailedDescription": ""
  },
  "601": {
      "name": "Blood Moon",
      "shortName": "Blood Moon",
      "description": "Blood Moon",
      "detailedDescription": ""
  },
  "611": {
      "name": "Dark Star: Singularity",
      "shortName": "Dark Star",
      "description": "Dark Star: Singularity",
      "detailedDescription": ""
  },
  "610": {
      "name": "Dark Star: Singularity",
      "shortName": "Dark Star",
      "description": "Dark Star: Singularity",
      "detailedDescription": ""
  },
  "1300": {
      "name": "Nexus Blitz",
      "shortName": "Nexus Blitz",
      "description": "Nexus Blitz",
      "detailedDescription": ""
  }
};
window.onerror = function(message, source, lineno, colno, error) {
  clientErrorHandler(message, source, lineno, colno, error);
  return false;
};
window.onunhandledrejection = function(message, source, lineno, colno, error) {
  clientErrorHandler(message, source, lineno, colno, error);
  return false;
};

function clientErrorHandler(message, source, lineno, colno, error) {
  facadeChange("red", isLocalhost() ? message : babel("base.error"));
  if (isLocalhost()) {
      toastError("Client error: " + message, 'fad fa-bug');
      return;
  }
  var sErrorIdentifier = (message || "") + "-" + (source || "") + "-" + (lineno || 0) + "-" + (colno || 0);
  var objKnownErrors = getLocal("errors", "known");
  if (!objKnownErrors)
      objKnownErrors = [];
  if (objKnownErrors.includes(sErrorIdentifier))
      return;
  objKnownErrors.push(sErrorIdentifier);
  setLocal("errors", "known", objKnownErrors);
  var ajaxObj = {
      sCode: 'ClientError',
      sSvcPage: 'User',
      sMethod: 'LogClientError',
      moreParams: {
          error: error ? error.toString() : null,
          stack: error ? error.stack : (new Error).stack
      }
  };
  var dataObj = {
      sMessage: message,
      sSource: source,
      iLine: lineno,
      iColumn: colno
  };
  ajaxCallObj(ajaxObj, dataObj, {
      fnOs: function(ajax, obj) {
          if (!obj.value || parseInt(obj.value) == NaN || parseInt(obj.value) <= 0)
              return;
          var browserInfo = getBrowserInfo();
          var ajaxObj = {
              sCode: 'ClientError',
              sSvcPage: 'User',
              sMethod: 'LogClientErrorDetails'
          };
          var dataObj = {
              iErrorId: obj.value,
              iTimeStamp: timeNow(),
              sPage: getPageName(),
              sOS: getOS(),
              sBrowser: browserInfo.browserName,
              sUserAgent: browserInfo.userAgent,
              sError: ajax.moreParams.error,
              sStack: ajax.moreParams.stack
          };
          ajaxCallObj(ajaxObj, dataObj);
      }
  });
}

function hexColorPalette(sColor, sVar) {
  if (isNullOrEmpty(sColor))
      return;
  if (isNullOrEmpty(sVar))
      sVar = "500";
  sColor = sColor.replace("-", "").replace(" ", "").toUpperCase();
  sVar = sVar.toUpperCase();
  switch (sColor) {
      case 'RED':
      case 'F44336': {
          switch (sVar) {
              case '50':
                  return "#FFEBEE";
              case '100':
                  return "#FFCDD2";
              case '200':
                  return "#EF9A9A";
              case '300':
                  return "#E57373";
              case '400':
                  return "#EF5350";
              case '500':
                  return "#F44336";
              case '600':
                  return "#E53935";
              case '700':
                  return "#D32F2F";
              case '800':
                  return "#C62828";
              case '900':
                  return "#B71C1C";
              case 'A100':
                  return "#FF8A80";
              case 'A200':
                  return "#FF5252";
              case 'A400':
                  return "#FF1744";
              case 'A700':
                  return "#D50000";
          }
      }
      break;
      case 'PINK':
      case 'E91E63': {
          switch (sVar) {
              case '50':
                  return "#FCE4EC";
              case '100':
                  return "#F8BBD0";
              case '200':
                  return "#F48FB1";
              case '300':
                  return "#F06292";
              case '400':
                  return "#EC407A";
              case '500':
                  return "#E91E63";
              case '600':
                  return "#D81B60";
              case '700':
                  return "#C2185B";
              case '800':
                  return "#AD1457";
              case '900':
                  return "#880E4F";
              case 'A100':
                  return "#FF80AB";
              case 'A200':
                  return "#FF4081";
              case 'A400':
                  return "#F50057";
              case 'A700':
                  return "#C51162";
          }
      }
      break;
      case 'PURPLE':
      case '9C27B0': {
          switch (sVar) {
              case '50':
                  return "#F3E5F5";
              case '100':
                  return "#E1BEE7";
              case '200':
                  return "#CE93D8";
              case '300':
                  return "#BA68C8";
              case '400':
                  return "#AB47BC";
              case '500':
                  return "#9C27B0";
              case '600':
                  return "#8E24AA";
              case '700':
                  return "#7B1FA2";
              case '800':
                  return "#6A1B9A";
              case '900':
                  return "#4A148C";
              case 'A100':
                  return "#EA80FC";
              case 'A200':
                  return "#E040FB";
              case 'A400':
                  return "#D500F9";
              case 'A700':
                  return "#AA00FF";
          }
      }
      break;
      case 'DEEPPURPLE':
      case '673AB7': {
          switch (sVar) {
              case '50':
                  return "#EDE7F6";
              case '100':
                  return "#D1C4E9";
              case '200':
                  return "#B39DDB";
              case '300':
                  return "#9575CD";
              case '400':
                  return "#7E57C2";
              case '500':
                  return "#673AB7";
              case '600':
                  return "#5E35B1";
              case '700':
                  return "#512DA8";
              case '800':
                  return "#4527A0";
              case '900':
                  return "#311B92";
              case 'A100':
                  return "#B388FF";
              case 'A200':
                  return "#7C4DFF";
              case 'A400':
                  return "#651FFF";
              case 'A700':
                  return "#6200EA";
          }
      }
      break;
      case 'INDIGO':
      case '3F51B5': {
          switch (sVar) {
              case '50':
                  return "#E8EAF6";
              case '100':
                  return "#C5CAE9";
              case '200':
                  return "#9FA8DA";
              case '300':
                  return "#7986CB";
              case '400':
                  return "#5C6BC0";
              case '500':
                  return "#3F51B5";
              case '600':
                  return "#3949AB";
              case '700':
                  return "#303F9F";
              case '800':
                  return "#283593";
              case '900':
                  return "#1A237E";
              case 'A100':
                  return "#8C9EFF";
              case 'A200':
                  return "#536DFE";
              case 'A400':
                  return "#3D5AFE";
              case 'A700':
                  return "#304FFE";
          }
      }
      break;
      case 'BLUE':
      case '2196F3': {
          switch (sVar) {
              case '50':
                  return "#E3F2FD";
              case '100':
                  return "#BBDEFB";
              case '200':
                  return "#90CAF9";
              case '300':
                  return "#64B5F6";
              case '400':
                  return "#42A5F5";
              case '500':
                  return "#2196F3";
              case '600':
                  return "#1E88E5";
              case '700':
                  return "#1976D2";
              case '800':
                  return "#1565C0";
              case '900':
                  return "#0D47A1";
              case 'A100':
                  return "#82B1FF";
              case 'A200':
                  return "#448AFF";
              case 'A400':
                  return "#2979FF";
              case 'A700':
                  return "#2962FF";
          }
      }
      break;
      case 'LIGHTBLUE':
      case '03A9F4': {
          switch (sVar) {
              case '50':
                  return "#E1F5FE";
              case '100':
                  return "#B3E5FC";
              case '200':
                  return "#81D4FA";
              case '300':
                  return "#4FC3F7";
              case '400':
                  return "#29B6F6";
              case '500':
                  return "#03A9F4";
              case '600':
                  return "#039BE5";
              case '700':
                  return "#0288D1";
              case '800':
                  return "#0277BD";
              case '900':
                  return "#01579B";
              case 'A100':
                  return "#80D8FF";
              case 'A200':
                  return "#40C4FF";
              case 'A400':
                  return "#00B0FF";
              case 'A700':
                  return "#0091EA";
          }
      }
      break;
      case 'CYAN':
      case '00BCD4': {
          switch (sVar) {
              case '50':
                  return "#E0F7FA";
              case '100':
                  return "#B2EBF2";
              case '200':
                  return "#80DEEA";
              case '300':
                  return "#4DD0E1";
              case '400':
                  return "#26C6DA";
              case '500':
                  return "#00BCD4";
              case '600':
                  return "#00ACC1";
              case '700':
                  return "#0097A7";
              case '800':
                  return "#00838F";
              case '900':
                  return "#006064";
              case 'A100':
                  return "#84FFFF";
              case 'A200':
                  return "#18FFFF";
              case 'A400':
                  return "#00E5FF";
              case 'A700':
                  return "#00B8D4";
          }
      }
      break;
      case 'TEAL':
      case '009688': {
          switch (sVar) {
              case '50':
                  return "#E0F2F1";
              case '100':
                  return "#B2DFDB";
              case '200':
                  return "#80CBC4";
              case '300':
                  return "#4DB6AC";
              case '400':
                  return "#26A69A";
              case '500':
                  return "#009688";
              case '600':
                  return "#00897B";
              case '700':
                  return "#00796B";
              case '800':
                  return "#00695C";
              case '900':
                  return "#004D40";
              case 'A100':
                  return "#A7FFEB";
              case 'A200':
                  return "#64FFDA";
              case 'A400':
                  return "#1DE9B6";
              case 'A700':
                  return "#00BFA5";
          }
      }
      break;
      case 'GREEN':
      case '4CAF50': {
          switch (sVar) {
              case '50':
                  return "#E8F5E9";
              case '100':
                  return "#C8E6C9";
              case '200':
                  return "#A5D6A7";
              case '300':
                  return "#81C784";
              case '400':
                  return "#66BB6A";
              case '500':
                  return "#4CAF50";
              case '600':
                  return "#43A047";
              case '700':
                  return "#388E3C";
              case '800':
                  return "#2E7D32";
              case '900':
                  return "#1B5E20";
              case 'A100':
                  return "#B9F6CA";
              case 'A200':
                  return "#69F0AE";
              case 'A400':
                  return "#00E676";
              case 'A700':
                  return "#00C853";
          }
      }
      break;
      case 'LIGHTGREEN':
      case '8BC34A': {
          switch (sVar) {
              case '50':
                  return "#F1F8E9";
              case '100':
                  return "#DCEDC8";
              case '200':
                  return "#C5E1A5";
              case '300':
                  return "#AED581";
              case '400':
                  return "#9CCC65";
              case '500':
                  return "#8BC34A";
              case '600':
                  return "#7CB342";
              case '700':
                  return "#689F38";
              case '800':
                  return "#558B2F";
              case '900':
                  return "#33691E";
              case 'A100':
                  return "#CCFF90";
              case 'A200':
                  return "#B2FF59";
              case 'A400':
                  return "#76FF03";
              case 'A700':
                  return "#64DD17";
          }
      }
      break;
      case 'LIME':
      case 'CDDC39': {
          switch (sVar) {
              case '50':
                  return "#F9FBE7";
              case '100':
                  return "#F0F4C3";
              case '200':
                  return "#E6EE9C";
              case '300':
                  return "#DCE775";
              case '400':
                  return "#D4E157";
              case '500':
                  return "#CDDC39";
              case '600':
                  return "#C0CA33";
              case '700':
                  return "#AFB42B";
              case '800':
                  return "#9E9D24";
              case '900':
                  return "#827717";
              case 'A100':
                  return "#F4FF81";
              case 'A200':
                  return "#EEFF41";
              case 'A400':
                  return "#C6FF00";
              case 'A700':
                  return "#AEEA00";
          }
      }
      break;
      case 'YELLOW':
      case 'FFEB3B': {
          switch (sVar) {
              case '50':
                  return "#FFFDE7";
              case '100':
                  return "#FFF9C4";
              case '200':
                  return "#FFF59D";
              case '300':
                  return "#FFF176";
              case '400':
                  return "#FFEE58";
              case '500':
                  return "#FFEB3B";
              case '600':
                  return "#FDD835";
              case '700':
                  return "#FBC02D";
              case '800':
                  return "#F9A825";
              case '900':
                  return "#F57F17";
              case 'A100':
                  return "#FFFF8D";
              case 'A200':
                  return "#FFFF00";
              case 'A400':
                  return "#FFEA00";
              case 'A700':
                  return "#FFD600";
          }
      }
      break;
      case 'AMBER':
      case 'FFC107': {
          switch (sVar) {
              case '50':
                  return "#FFF8E1";
              case '100':
                  return "#FFECB3";
              case '200':
                  return "#FFE082";
              case '300':
                  return "#FFD54F";
              case '400':
                  return "#FFCA28";
              case '500':
                  return "#FFC107";
              case '600':
                  return "#FFB300";
              case '700':
                  return "#FFA000";
              case '800':
                  return "#FF8F00";
              case '900':
                  return "#FF6F00";
              case 'A100':
                  return "#FFE57F";
              case 'A200':
                  return "#FFD740";
              case 'A400':
                  return "#FFC400";
              case 'A700':
                  return "#FFAB00";
          }
      }
      break;
      case 'ORANGE':
      case 'FF9800': {
          switch (sVar) {
              case '50':
                  return "#FFF3E0";
              case '100':
                  return "#FFE0B2";
              case '200':
                  return "#FFCC80";
              case '300':
                  return "#FFB74D";
              case '400':
                  return "#FFA726";
              case '500':
                  return "#FF9800";
              case '600':
                  return "#FB8C00";
              case '700':
                  return "#F57C00";
              case '800':
                  return "#EF6C00";
              case '900':
                  return "#E65100";
              case 'A100':
                  return "#FFD180";
              case 'A200':
                  return "#FFAB40";
              case 'A400':
                  return "#FF9100";
              case 'A700':
                  return "#FF6D00";
          }
      }
      break;
      case 'DEEPORANGE':
      case 'FF5722': {
          switch (sVar) {
              case '50':
                  return "#FBE9E7";
              case '100':
                  return "#FFCCBC";
              case '200':
                  return "#FFAB91";
              case '300':
                  return "#FF8A65";
              case '400':
                  return "#FF7043";
              case '500':
                  return "#FF5722";
              case '600':
                  return "#F4511E";
              case '700':
                  return "#E64A19";
              case '800':
                  return "#D84315";
              case '900':
                  return "#BF360C";
              case 'A100':
                  return "#FF9E80";
              case 'A200':
                  return "#FF6E40";
              case 'A400':
                  return "#FF3D00";
              case 'A700':
                  return "#DD2C00";
          }
      }
      break;
      case 'BROWN':
      case '795548': {
          switch (sVar) {
              case '50':
                  return "#EFEBE9";
              case '100':
                  return "#D7CCC8";
              case '200':
                  return "#BCAAA4";
              case '300':
                  return "#A1887F";
              case '400':
                  return "#8D6E63";
              case '500':
                  return "#795548";
              case '600':
                  return "#6D4C41";
              case '700':
                  return "#5D4037";
              case '800':
                  return "#4E342E";
              case '900':
                  return "#3E2723";
          }
      }
      break;
      case 'GREY':
      case '9E9E9E': {
          switch (sVar) {
              case '50':
                  return "#FAFAFA";
              case '100':
                  return "#F5F5F5";
              case '200':
                  return "#EEEEEE";
              case '300':
                  return "#E0E0E0";
              case '400':
                  return "#BDBDBD";
              case '500':
                  return "#9E9E9E";
              case '600':
                  return "#757575";
              case '700':
                  return "#616161";
              case '800':
                  return "#424242";
              case '900':
                  return "#212121";
          }
      }
      break;
      case 'BLUEGREY':
      case '607D8B': {
          switch (sVar) {
              case '50':
                  return "#ECEFF1";
              case '100':
                  return "#CFD8DC";
              case '200':
                  return "#B0BEC5";
              case '300':
                  return "#90A4AE";
              case '400':
                  return "#78909C";
              case '500':
                  return "#607D8B";
              case '600':
                  return "#546E7A";
              case '700':
                  return "#455A64";
              case '800':
                  return "#37474F";
              case '900':
                  return "#263238";
          }
      }
      break;
  }
}

function textColorFromHex(sHexColor) {
  var bigint = parseInt(sHexColor, 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  var o = Math.round((r * 299 + g * 587 + b * 114) / 1000);
  if (o > 125)
      return '000';
  else
      return 'FFF';
}

function classColorPalette(sHex) {
  if (isNullOrEmpty(sHex)) return;
  if (!sHex.startsWith('#'))
      sHex = '#' + sHex;
  switch (sHex.toLowerCase()) {
      case '#ffebee':
          return "red lighten-5";
      case '#ffcdd2':
          return "red lighten-4";
      case '#ef9a9a':
          return "red lighten-3";
      case '#e57373':
          return "red lighten-2";
      case '#ef5350':
          return "red lighten-1";
      case '#f44336':
          return "red";
      case '#e53935':
          return "red darken-1";
      case '#d32f2f':
          return "red darken-2";
      case '#c62828':
          return "red darken-3";
      case '#b71c1c':
          return "red darken-4";
      case '#ff8a80':
          return "red accent-1";
      case '#ff5252':
          return "red accent-2";
      case '#ff1744':
          return "red accent-3";
      case '#d50000':
          return "red accent-4";
      case '#fce4ec':
          return "pink lighten-5";
      case '#f8bbd0':
          return "pink lighten-4";
      case '#f48fb1':
          return "pink lighten-3";
      case '#f06292':
          return "pink lighten-2";
      case '#ec407a':
          return "pink lighten-1";
      case '#e91e63':
          return "pink";
      case '#d81b60':
          return "pink darken-1";
      case '#c2185b':
          return "pink darken-2";
      case '#ad1457':
          return "pink darken-3";
      case '#880e4f':
          return "pink darken-4";
      case '#ff80ab':
          return "pink accent-1";
      case '#ff4081':
          return "pink accent-2";
      case '#f50057':
          return "pink accent-3";
      case '#c51162':
          return "pink accent-4";
      case '#f3e5f5':
          return "purple lighten-5";
      case '#e1bee7':
          return "purple lighten-4";
      case '#ce93d8':
          return "purple lighten-3";
      case '#ba68c8':
          return "purple lighten-2";
      case '#ab47bc':
          return "purple lighten-1";
      case '#9c27b0':
          return "purple";
      case '#8e24aa':
          return "purple darken-1";
      case '#7b1fa2':
          return "purple darken-2";
      case '#6a1b9a':
          return "purple darken-3";
      case '#4a148c':
          return "purple darken-4";
      case '#ea80fc':
          return "purple accent-1";
      case '#e040fb':
          return "purple accent-2";
      case '#d500f9':
          return "purple accent-3";
      case '#aa00ff':
          return "purple accent-4";
      case '#ede7f6':
          return "deep-purple lighten-5";
      case '#d1c4e9':
          return "deep-purple lighten-4";
      case '#b39ddb':
          return "deep-purple lighten-3";
      case '#9575cd':
          return "deep-purple lighten-2";
      case '#7e57c2':
          return "deep-purple lighten-1";
      case '#673ab7':
          return "deep-purple";
      case '#5e35b1':
          return "deep-purple darken-1";
      case '#512da8':
          return "deep-purple darken-2";
      case '#4527a0':
          return "deep-purple darken-3";
      case '#311b92':
          return "deep-purple darken-4";
      case '#b388ff':
          return "deep-purple accent-1";
      case '#7c4dff':
          return "deep-purple accent-2";
      case '#651fff':
          return "deep-purple accent-3";
      case '#6200ea':
          return "deep-purple accent-4";
      case '#e8eaf6':
          return "indigo lighten-5";
      case '#c5cae9':
          return "indigo lighten-4";
      case '#9fa8da':
          return "indigo lighten-3";
      case '#7986cb':
          return "indigo lighten-2";
      case '#5c6bc0':
          return "indigo lighten-1";
      case '#3f51b5':
          return "indigo";
      case '#3949ab':
          return "indigo darken-1";
      case '#303f9f':
          return "indigo darken-2";
      case '#283593':
          return "indigo darken-3";
      case '#1a237e':
          return "indigo darken-4";
      case '#8c9eff':
          return "indigo accent-1";
      case '#536dfe':
          return "indigo accent-2";
      case '#3d5afe':
          return "indigo accent-3";
      case '#304ffe':
          return "indigo accent-4";
      case '#e3f2fd':
          return "blue lighten-5";
      case '#bbdefb':
          return "blue lighten-4";
      case '#90caf9':
          return "blue lighten-3";
      case '#64b5f6':
          return "blue lighten-2";
      case '#42a5f5':
          return "blue lighten-1";
      case '#2196f3':
          return "blue";
      case '#1e88e5':
          return "blue darken-1";
      case '#1976d2':
          return "blue darken-2";
      case '#1565c0':
          return "blue darken-3";
      case '#0d47a1':
          return "blue darken-4";
      case '#82b1ff':
          return "blue accent-1";
      case '#448aff':
          return "blue accent-2";
      case '#2979ff':
          return "blue accent-3";
      case '#2962ff':
          return "blue accent-4";
      case '#e1f5fe':
          return "light-blue lighten-5";
      case '#b3e5fc':
          return "light-blue lighten-4";
      case '#81d4fa':
          return "light-blue lighten-3";
      case '#4fc3f7':
          return "light-blue lighten-2";
      case '#29b6f6':
          return "light-blue lighten-1";
      case '#03a9f4':
          return "light-blue";
      case '#039be5':
          return "light-blue darken-1";
      case '#0288d1':
          return "light-blue darken-2";
      case '#0277bd':
          return "light-blue darken-3";
      case '#01579b':
          return "light-blue darken-4";
      case '#80d8ff':
          return "light-blue accent-1";
      case '#40c4ff':
          return "light-blue accent-2";
      case '#00b0ff':
          return "light-blue accent-3";
      case '#0091ea':
          return "light-blue accent-4";
      case '#e0f7fa':
          return "cyan lighten-5";
      case '#b2ebf2':
          return "cyan lighten-4";
      case '#80deea':
          return "cyan lighten-3";
      case '#4dd0e1':
          return "cyan lighten-2";
      case '#26c6da':
          return "cyan lighten-1";
      case '#00bcd4':
          return "cyan";
      case '#00acc1':
          return "cyan darken-1";
      case '#0097a7':
          return "cyan darken-2";
      case '#00838f':
          return "cyan darken-3";
      case '#006064':
          return "cyan darken-4";
      case '#84ffff':
          return "cyan accent-1";
      case '#18ffff':
          return "cyan accent-2";
      case '#00e5ff':
          return "cyan accent-3";
      case '#00b8d4':
          return "cyan accent-4";
      case '#e0f2f1':
          return "teal lighten-5";
      case '#b2dfdb':
          return "teal lighten-4";
      case '#80cbc4':
          return "teal lighten-3";
      case '#4db6ac':
          return "teal lighten-2";
      case '#26a69a':
          return "teal lighten-1";
      case '#009688':
          return "teal";
      case '#00897b':
          return "teal darken-1";
      case '#00796b':
          return "teal darken-2";
      case '#00695c':
          return "teal darken-3";
      case '#004d40':
          return "teal darken-4";
      case '#a7ffeb':
          return "teal accent-1";
      case '#64ffda':
          return "teal accent-2";
      case '#1de9b6':
          return "teal accent-3";
      case '#00bfa5':
          return "teal accent-4";
      case '#e8f5e9':
          return "green lighten-5";
      case '#c8e6c9':
          return "green lighten-4";
      case '#a5d6a7':
          return "green lighten-3";
      case '#81c784':
          return "green lighten-2";
      case '#66bb6a':
          return "green lighten-1";
      case '#4caf50':
          return "green";
      case '#43a047':
          return "green darken-1";
      case '#388e3c':
          return "green darken-2";
      case '#2e7d32':
          return "green darken-3";
      case '#1b5e20':
          return "green darken-4";
      case '#b9f6ca':
          return "green accent-1";
      case '#69f0ae':
          return "green accent-2";
      case '#00e676':
          return "green accent-3";
      case '#00c853':
          return "green accent-4";
      case '#f1f8e9':
          return "light-green lighten-5";
      case '#dcedc8':
          return "light-green lighten-4";
      case '#c5e1a5':
          return "light-green lighten-3";
      case '#aed581':
          return "light-green lighten-2";
      case '#9ccc65':
          return "light-green lighten-1";
      case '#8bc34a':
          return "light-green";
      case '#7cb342':
          return "light-green darken-1";
      case '#689f38':
          return "light-green darken-2";
      case '#558b2f':
          return "light-green darken-3";
      case '#33691e':
          return "light-green darken-4";
      case '#ccff90':
          return "light-green accent-1";
      case '#b2ff59':
          return "light-green accent-2";
      case '#76ff03':
          return "light-green accent-3";
      case '#64dd17':
          return "light-green accent-4";
      case '#f9fbe7':
          return "lime lighten-5";
      case '#f0f4c3':
          return "lime lighten-4";
      case '#e6ee9c':
          return "lime lighten-3";
      case '#dce775':
          return "lime lighten-2";
      case '#d4e157':
          return "lime lighten-1";
      case '#cddc39':
          return "lime";
      case '#c0ca33':
          return "lime darken-1";
      case '#afb42b':
          return "lime darken-2";
      case '#9e9d24':
          return "lime darken-3";
      case '#827717':
          return "lime darken-4";
      case '#f4ff81':
          return "lime accent-1";
      case '#eeff41':
          return "lime accent-2";
      case '#c6ff00':
          return "lime accent-3";
      case '#aeea00':
          return "lime accent-4";
      case '#fffde7':
          return "yellow lighten-5";
      case '#fff9c4':
          return "yellow lighten-4";
      case '#fff59d':
          return "yellow lighten-3";
      case '#fff176':
          return "yellow lighten-2";
      case '#ffee58':
          return "yellow lighten-1";
      case '#ffeb3b':
          return "yellow";
      case '#fdd835':
          return "yellow darken-1";
      case '#fbc02d':
          return "yellow darken-2";
      case '#f9a825':
          return "yellow darken-3";
      case '#f57f17':
          return "yellow darken-4";
      case '#ffff8d':
          return "yellow accent-1";
      case '#ffff00':
          return "yellow accent-2";
      case '#ffea00':
          return "yellow accent-3";
      case '#ffd600':
          return "yellow accent-4";
      case '#fff8e1':
          return "amber lighten-5";
      case '#ffecb3':
          return "amber lighten-4";
      case '#ffe082':
          return "amber lighten-3";
      case '#ffd54f':
          return "amber lighten-2";
      case '#ffca28':
          return "amber lighten-1";
      case '#ffc107':
          return "amber";
      case '#ffb300':
          return "amber darken-1";
      case '#ffa000':
          return "amber darken-2";
      case '#ff8f00':
          return "amber darken-3";
      case '#ff6f00':
          return "amber darken-4";
      case '#ffe57f':
          return "amber accent-1";
      case '#ffd740':
          return "amber accent-2";
      case '#ffc400':
          return "amber accent-3";
      case '#ffab00':
          return "amber accent-4";
      case '#fff3e0':
          return "orange lighten-5";
      case '#ffe0b2':
          return "orange lighten-4";
      case '#ffcc80':
          return "orange lighten-3";
      case '#ffb74d':
          return "orange lighten-2";
      case '#ffa726':
          return "orange lighten-1";
      case '#ff9800':
          return "orange";
      case '#fb8c00':
          return "orange darken-1";
      case '#f57c00':
          return "orange darken-2";
      case '#ef6c00':
          return "orange darken-3";
      case '#e65100':
          return "orange darken-4";
      case '#ffd180':
          return "orange accent-1";
      case '#ffab40':
          return "orange accent-2";
      case '#ff9100':
          return "orange accent-3";
      case '#ff6d00':
          return "orange accent-4";
      case '#fbe9e7':
          return "deep-orange lighten-5";
      case '#ffccbc':
          return "deep-orange lighten-4";
      case '#ffab91':
          return "deep-orange lighten-3";
      case '#ff8a65':
          return "deep-orange lighten-2";
      case '#ff7043':
          return "deep-orange lighten-1";
      case '#ff5722':
          return "deep-orange";
      case '#f4511e':
          return "deep-orange darken-1";
      case '#e64a19':
          return "deep-orange darken-2";
      case '#d84315':
          return "deep-orange darken-3";
      case '#bf360c':
          return "deep-orange darken-4";
      case '#ff9e80':
          return "deep-orange accent-1";
      case '#ff6e40':
          return "deep-orange accent-2";
      case '#ff3d00':
          return "deep-orange accent-3";
      case '#dd2c00':
          return "deep-orange accent-4";
      case '#efebe9':
          return "brown lighten-5";
      case '#d7ccc8':
          return "brown lighten-4";
      case '#bcaaa4':
          return "brown lighten-3";
      case '#a1887f':
          return "brown lighten-2";
      case '#8d6e63':
          return "brown lighten-1";
      case '#795548':
          return "brown";
      case '#6d4c41':
          return "brown darken-1";
      case '#5d4037':
          return "brown darken-2";
      case '#4e342e':
          return "brown darken-3";
      case '#3e2723':
          return "brown darken-4";
      case '#fafafa':
          return "grey lighten-5";
      case '#f5f5f5':
          return "grey lighten-4";
      case '#eeeeee':
          return "grey lighten-3";
      case '#e0e0e0':
          return "grey lighten-2";
      case '#bdbdbd':
          return "grey lighten-1";
      case '#9e9e9e':
          return "grey";
      case '#757575':
          return "grey darken-1";
      case '#616161':
          return "grey darken-2";
      case '#424242':
          return "grey darken-3";
      case '#212121':
          return "grey darken-4";
      case '#eceff1':
          return "blue-grey lighten-5";
      case '#cfd8dc':
          return "blue-grey lighten-4";
      case '#b0bec5':
          return "blue-grey lighten-3";
      case '#90a4ae':
          return "blue-grey lighten-2";
      case '#78909c':
          return "blue-grey lighten-1";
      case '#607d8b':
          return "blue-grey";
      case '#546e7a':
          return "blue-grey darken-1";
      case '#455a64':
          return "blue-grey darken-2";
      case '#37474f':
          return "blue-grey darken-3";
      case '#263238':
          return "blue-grey darken-4";
      case '#000000':
          return "black";
      case '#ffffff':
          return "white";
      default:
          break;
  }
}

function classTextColor(value, sType) {
  if (!isNullOrEmpty(sType)) {
      if (sType === "%") {
          if (value > 95) return "amber-text";
          if (value > 74) return "green-text";
          if (value > 54) return "green-text text-darken-3";
          if (value > 45) return "";
          if (value > 22) return "red-text text-darken-3";
          return "red-text";
      }
      if (sType === "kda") {
          if (value > 4.9) return "amber-text";
          if (value > 2.9) return "green-text";
          if (value > 1.4) return "green-text text-darken-3";
          if (value > 0.9) return "";
          if (value > 0.5) return "red-text text-darken-3";
          return "red-text";
      }
  }
  return "";
}

function backgroundTeam(sColor) {
  var sColorName = classColorPalette(sColor);
  if (sColorName == "teal" || sColorName == "cyan" || sColorName == "light-green" || sColorName == "lime")
      return 'radial-gradient(circle farthest-side at center bottom,' + hexColorPalette(sColorName, 'A700') + ',' + hexColorPalette(sColorName, '900') + ' 100%)';
  else
      return 'radial-gradient(circle farthest-side at center bottom,' + hexColorPalette(sColorName, 'A400') + ',' + hexColorPalette(sColorName, '900') + ' 100%)';
}

function getPropertyNameFromEnum(iEnum, enumerato) {
  for (var property in enumerato)
      if (enumerato.hasOwnProperty(property) && enumerato[property] == iEnum)
          return property;
  return '';
}

function getDescriptionFromEnum(iEnum, enumerato) {
  return formatEnumString(getPropertyNameFromEnum(iEnum, enumerato)).toString();
}

function getSelectOptionFromEnum(sEnumName) {
  var sHtml = '';
  if (window[sEnumName])
      for (var property in window[sEnumName])
          if (window[sEnumName].hasOwnProperty(property))
              sHtml += '<option value="' + window[sEnumName][property] + '">' + babelEnum(sEnumName, window[sEnumName][property]) + '</option>';
  return sHtml;
}

function formatEnumString(s) {
  return s.replaceAll("_", " ");
}

function perkIconById(id) {
  if (id == null || id == 0)
      return cdnLink("/images/Transparent.png");
  return cdnLink('/images/perk/' + id + '.png');
}

function perkStyleIconById(id) {
  if (id == null || id == 0)
      return cdnLink("/images/Transparent.png");
  return cdnLink('/images/perkStyle/' + id + '.png');
}

function getRoleOptions(enumSelectedRole) {
  var sHtml = '';
  for (var property in RoleType)
      if (RoleType.hasOwnProperty(property)) {
          var imgSrc = cdnLink('/images/role/' + property.toLowerCase() + '.png"');
          if (enumSelectedRole == RoleType[property])
              sHtml += '<option selected value="' + RoleType[property] + '" data-icon="' + imgSrc + '>' + babelEnum("RoleType", RoleType[property]) + '</option>';
          else
              sHtml += '<option value="' + RoleType[property] + '" data-icon="' + imgSrc + '>' + babelEnum("RoleType", RoleType[property]) + '</option>';
      }
  return sHtml;
}

function getRoleListItem(enumSelectedRole) {
  var sHtml = '';
  for (var property in RoleType)
      if (RoleType.hasOwnProperty(property)) {
          if (enumSelectedRole != RoleType[property])
              sHtml += '<li><a>' + babelEnum("RoleType", property) + '</a></li>';
      }
  return sHtml;
}

function getRoleIcon(iRole) {
  var propName = getPropertyNameFromEnum(iRole, RoleType);
  if (!isNullOrEmpty(propName))
      return cdnLink('/images/role/' + propName.toLowerCase() + '.png');
  return cdnLink('/images/Transparent.png');
}

function getRankOptions() {
  var sHtml = '';
  for (var property in RankTier)
      if (RankTier.hasOwnProperty(property)) {
          var imgSrc = cdnLink('/images/emblems/' + property + '.png"');
          sHtml += '<option value="' + RankTier[property] + '" data-icon="' + imgSrc + '" />' + babel("RankTier", property) + '</option>';
      }
  return sHtml;
}

function rankIconSrc(iEnumTier, iEnumDivision) {
  var sTier = getDescriptionFromEnum(iEnumTier, RankTier).toLowerCase();
  return cdnLink('/images/emblems/' + sTier + '.png');
}

function getEnumTierFromTLP(dtoRank) {
  if (!dtoRank || !dtoRank.iTLP) return RankTier.Placement;
  if (dtoRank.iRankInformation === 1) return RankTier.Challenger;
  if (dtoRank.iRankInformation === 2) return RankTier.Grandmaster;
  if (dtoRank.iTLP >= 2425) return RankTier.Master;
  return Math.floor((dtoRank.iTLP - 1) / 404) + 2;
}

function getEnumDivisionFromTLP(dtoRank) {
  if (!dtoRank || !dtoRank.iTLP) return RankDivision.I;
  if (dtoRank.iTLP <= 0 || dtoRank.iTLP >= 2425 || dtoRank.iRankInformation === 1 || dtoRank.iRankInformation === 2) return RankDivision.I;
  return Math.floor(((dtoRank.iTLP - 1) % 404) / 101) + 1;
}

function getPointsByTLP(dtoRank) {
  if (!dtoRank || !dtoRank.iTLP) return 0;
  if (dtoRank.iTLP <= 0) return 0;
  if (dtoRank.iTLP >= 2425) return dtoRank.iTLP - 2425;
  return (dtoRank.iTLP - 1) % 101;
}

function getRankSrcByTLP(dtoRank) {
  return rankIconSrc(getEnumTierFromTLP(dtoRank), getEnumDivisionFromTLP(dtoRank));
}

function getRankDescByTLP(dtoRank, sFormat) {
  var iTier = getEnumTierFromTLP(dtoRank);
  var iDivision = getEnumDivisionFromTLP(dtoRank);
  var sTier = babelEnum("RankTier", iTier);
  var sDivision = babelEnum("RankDivision", iDivision);
  if (iTier === RankTier.Placement)
      return sTier;
  if (isNullOrEmpty(sFormat))
      sFormat = "tier division";
  if (iTier > RankTier.Diamond)
      if (sFormat.contains("division"))
          sFormat = sFormat.replace("division", "");
  if (sFormat.contains("tier"))
      sFormat = sFormat.replace("tier", sTier);
  if (sFormat.contains("division"))
      sFormat = sFormat.replace("division", sDivision);
  if (sFormat.contains("points"))
      sFormat = sFormat.replace("points", getPointsByTLP(dtoRank));
  sDesc = sFormat.replaceAll("  ", " ");
  return sDesc;
}

function getTLPFromRank(iTier, iDivision, iLP) {
  var iTLP = 0;
  if (iTier == RankTier.Placement)
      return iTLP;
  if (iTier > RankTier.Master)
      iTLP = 2526;
  else
      iTLP = (iTier - 2) * 404;
  if (iTier < RankTier.Master)
      iTLP += (iDivision - 1) * 101;
  iTLP = iTLP + iLP + 1;
  if (iTier.Challenger)
      iTLP *= -1;
  return iTLP;
}

function getTeamLogoLinkById(id, sBaseLink) {
  if (id == null || id == 0)
      if (sBaseLink != null)
          return sBaseLink;
      else
          return cdnLink('/images/fontawesome/users-solid.svg');
  return cdnLink("/images/team_logos/" + id + ".png");
}

function getTeamFullName(team) {
  if (!team)
      return "";
  return "[" + team.sTag + "] " + team.sName;
}
var TournamentIconsList = [{
  id: 1,
  file: 'bandle_city_emblem.png'
}, {
  id: 2,
  file: 'bilgewater_emblem.png'
}, {
  id: 3,
  file: 'demacia_emblem.png'
}, {
  id: 4,
  file: 'freljord_emblem.png'
}, {
  id: 5,
  file: 'ionia_emblem.png'
}, {
  id: 6,
  file: 'ixtal_emblem.png'
}, {
  id: 7,
  file: 'mt_targon_emblem.png'
}, {
  id: 8,
  file: 'noxus_emblem.png'
}, {
  id: 9,
  file: 'piltover_emblem.png'
}, {
  id: 10,
  file: 'shadow_isles_emblem.png'
}, {
  id: 11,
  file: 'shurima_emblem.png'
}, {
  id: 12,
  file: 'zaun_emblem.png'
}, ];

function getTournamentIconLinkById(id) {
  if (id != null && id > 0)
      for (var i in TournamentIconsList)
          if (TournamentIconsList[i].id === id)
              return cdnLink("/images/runeterra_emblems/" + TournamentIconsList[i].file);
  return cdnLink('/images/Transparent.png');
}

function getQueueDescription(iQueue) {
  for (var i in QueuesList)
      if (i == iQueue) {
          if (!isNullOrEmpty(QueuesList[i].detailedDescription))
              return QueuesList[i].detailedDescription;
          return QueuesList[i].description;
      }
  return 'New mode (' + iQueue + ')';
}
var lolSeasons = {
  0: {
      name: "PRESEASON 3",
      tsStart: 1352678400000,
      tsEnd: 1359676800000,
      bIsPreseason: true
  },
  1: {
      name: "SEASON 3",
      tsStart: 1359676800000,
      tsEnd: 1384128000000,
      bIsPreseason: false
  },
  2: {
      name: "PRESEASON 2014",
      tsStart: 1384128000000,
      tsEnd: 1389312000000,
      bIsPreseason: true
  },
  3: {
      name: "SEASON 2014",
      tsStart: 1389312000000,
      tsEnd: 1415664000000,
      bIsPreseason: false
  },
  4: {
      name: "PRESEASON 2015",
      tsStart: 1415664000000,
      tsEnd: 1421798400000,
      bIsPreseason: true
  },
  5: {
      name: "SEASON 2015",
      tsStart: 1421798400000,
      tsEnd: 1447200000000,
      bIsPreseason: false
  },
  6: {
      name: "PRESEASON 2016",
      tsStart: 1447200000000,
      tsEnd: 1453248000000,
      bIsPreseason: true
  },
  7: {
      name: "SEASON 2016",
      tsStart: 1453248000000,
      tsEnd: 1478563200000,
      bIsPreseason: false
  },
  8: {
      name: "PRESEASON 2017",
      tsStart: 1478563200000,
      tsEnd: 1481155200000,
      bIsPreseason: true
  },
  9: {
      name: "SEASON 2017",
      tsStart: 1481155200000,
      tsEnd: 1510012800000,
      bIsPreseason: false
  },
  10: {
      name: "PRESEASON 2018",
      tsStart: 1510012800000,
      tsEnd: 1516060800000,
      bIsPreseason: true
  },
  11: {
      name: "SEASON 2018",
      tsStart: 1516060800000,
      tsEnd: 1541980800000,
      bIsPreseason: false
  },
  12: {
      name: "PRESEASON 2019",
      tsStart: 1541980800000,
      tsEnd: 1548201600000,
      bIsPreseason: true
  },
  13: {
      name: "SEASON 2019",
      tsStart: 1548201600000,
      tsEnd: 1574035200000,
      bIsPreseason: false
  },
  14: {
      name: "PRESEASON 2020",
      tsStart: 1574035200000,
      tsEnd: 1578614400000,
      bIsPreseason: true
  },
  15: {
      name: "SEASON 2020",
      tsStart: 1578614400000,
      tsEnd: 9999999999999,
      bIsPreseason: false
  }
};

function getSeason(date) {
  var timestamp = timeToMs(date);
  for (var i in lolSeasons)
      if (timestamp >= lolSeasons[i].tsStart && timestamp < lolSeasons[i].tsEnd)
          return i;
}

function getCurrentSeason() {
  var timestamp = timeNow();
  for (var i in lolSeasons)
      if (timestamp >= lolSeasons[i].tsStart && timestamp < lolSeasons[i].tsEnd)
          return i;
}! function(global) {
  "use strict";

  function keydown(e) {
      var id, k = e ? e.keyCode : event.keyCode;
      if (!held[k]) {
          held[k] = !0;
          for (id in sequences) sequences[id].keydown(k)
      }
  }

  function keyup(e) {
      var k = e ? e.keyCode : event.keyCode;
      held[k] = !1
  }

  function resetHeldKeys() {
      var k;
      for (k in held) held[k] = !1
  }

  function on(obj, type, fn) {
      obj.addEventListener ? obj.addEventListener(type, fn, !1) : obj.attachEvent && (obj["e" + type + fn] = fn, obj[type + fn] = function() {
          obj["e" + type + fn](window.event)
      }, obj.attachEvent("on" + type, obj[type + fn]))
  }
  var cheet, Sequence, sequences = {},
      keys = {
          backspace: 8,
          tab: 9,
          enter: 13,
          "return": 13,
          shift: 16,
          "⇧": 16,
          control: 17,
          ctrl: 17,
          "⌃": 17,
          alt: 18,
          option: 18,
          "⌥": 18,
          pause: 19,
          capslock: 20,
          esc: 27,
          space: 32,
          pageup: 33,
          pagedown: 34,
          end: 35,
          home: 36,
          left: 37,
          L: 37,
          "←": 37,
          up: 38,
          U: 38,
          "↑": 38,
          right: 39,
          R: 39,
          "→": 39,
          down: 40,
          D: 40,
          "↓": 40,
          insert: 45,
          "delete": 46,
          0: 48,
          1: 49,
          2: 50,
          3: 51,
          4: 52,
          5: 53,
          6: 54,
          7: 55,
          8: 56,
          9: 57,
          a: 65,
          b: 66,
          c: 67,
          d: 68,
          e: 69,
          f: 70,
          g: 71,
          h: 72,
          i: 73,
          j: 74,
          k: 75,
          l: 76,
          m: 77,
          n: 78,
          o: 79,
          p: 80,
          q: 81,
          r: 82,
          s: 83,
          t: 84,
          u: 85,
          v: 86,
          w: 87,
          x: 88,
          y: 89,
          z: 90,
          "⌘": 91,
          command: 91,
          kp_0: 96,
          kp_1: 97,
          kp_2: 98,
          kp_3: 99,
          kp_4: 100,
          kp_5: 101,
          kp_6: 102,
          kp_7: 103,
          kp_8: 104,
          kp_9: 105,
          kp_multiply: 106,
          kp_plus: 107,
          kp_minus: 109,
          kp_decimal: 110,
          kp_divide: 111,
          f1: 112,
          f2: 113,
          f3: 114,
          f4: 115,
          f5: 116,
          f6: 117,
          f7: 118,
          f8: 119,
          f9: 120,
          f10: 121,
          f11: 122,
          f12: 123,
          equal: 187,
          "=": 187,
          comma: 188,
          ",": 188,
          minus: 189,
          "-": 189,
          period: 190,
          ".": 190
      },
      NOOP = function() {},
      held = {};
  Sequence = function(str, next, fail, done) {
      var i;
      for (this.str = str, this.next = next ? next : NOOP, this.fail = fail ? fail : NOOP, this.done = done ? done : NOOP, this.seq = str.split(" "), this.keys = [], i = 0; i < this.seq.length; ++i) this.keys.push(keys[this.seq[i]]);
      this.idx = 0
  }, Sequence.prototype.keydown = function(keyCode) {
      var i = this.idx;
      return keyCode !== this.keys[i] ? void(i > 0 && (this.reset(), this.fail(this.str), cheet.__fail(this.str))) : (this.next(this.str, this.seq[i], i, this.seq), cheet.__next(this.str, this.seq[i], i, this.seq), void(++this.idx === this.keys.length && (this.done(this.str), cheet.__done(this.str), this.reset())))
  }, Sequence.prototype.reset = function() {
      this.idx = 0
  }, cheet = function(str, handlers) {
      var next, fail, done;
      "function" == typeof handlers ? done = handlers : null !== handlers && void 0 !== handlers && (next = handlers.next, fail = handlers.fail, done = handlers.done), sequences[str] = new Sequence(str, next, fail, done)
  }, cheet.disable = function(str) {
      delete sequences[str]
  }, on(window, "keydown", keydown), on(window, "keyup", keyup), on(window, "blur", resetHeldKeys), on(window, "focus", resetHeldKeys), cheet.__next = NOOP, cheet.next = function(fn) {
      cheet.__next = null === fn ? NOOP : fn
  }, cheet.__fail = NOOP, cheet.fail = function(fn) {
      cheet.__fail = null === fn ? NOOP : fn
  }, cheet.__done = NOOP, cheet.done = function(fn) {
      cheet.__done = null === fn ? NOOP : fn
  }, cheet.reset = function(id) {
      var seq = sequences[id];
      return seq instanceof Sequence ? void seq.reset() : void console.warn("cheet: Unknown sequence: " + id)
  }, global.cheet = cheet, "function" == typeof define && define.amd ? define([], function() {
      return cheet
  }) : "undefined" != typeof module && null !== module && (module.exports = cheet)
}(this);
cheet('t h e r e i s n o u r f l e v e l', {
  done: function() {
      var ms = 350;
      setTimeout(function() {
          changeHeaderColor('red');
      }, ms * 1);
      setTimeout(function() {
          changeHeaderColor('orange');
      }, ms * 2);
      setTimeout(function() {
          changeHeaderColor('yellow');
      }, ms * 3);
      setTimeout(function() {
          changeHeaderColor('green');
      }, ms * 4);
      setTimeout(function() {
          changeHeaderColor('blue');
      }, ms * 5);
      setTimeout(function() {
          changeHeaderColor('purple');
      }, ms * 6);
      setTimeout(function() {
          changeHeaderColor('red');
      }, ms * 7);
      setTimeout(function() {
          changeHeaderColor('orange');
      }, ms * 8);
      setTimeout(function() {
          changeHeaderColor('yellow');
      }, ms * 9);
      setTimeout(function() {
          changeHeaderColor('green');
      }, ms * 10);
      setTimeout(function() {
          changeHeaderColor('blue');
      }, ms * 11);
      setTimeout(function() {
          changeHeaderColor('purple');
      }, ms * 12);
      setTimeout(function() {
          changeHeaderColor('teal');
      }, ms * 13);
      setTimeout(function() {
          changeHeaderColor();
      }, ms * 14);
  }
});

function changeHeaderColor(sMaterializeClass) {
  $header.removeClass();
  if (!isNullOrEmpty(sMaterializeClass))
      $header.addClass(sMaterializeClass);
}

function getRandomEmoji() {
  var emojis = "😄😃😊😉😍😘😚😗😙😜😝😛😳😁😌😂😪😨😱😠😡😤😆😋😎😴😵😲😈👿😮😬😇😏👶👦👧👨👩👴👵👱👼👸👹👺🙈🙉🙊💀👽💩🔥✨🌟💫💤👂👀👃👍👌👊✊👋✋👐🙌🙏☝👏💪🎩👑👘💼👓🎀💛💙💜💚💗💓💕💖💞💘💌💎🐶🐺🐱🐭🐹🐰🐸🐯🐨🐻🐷🐽🐮🐗🐵🐒🐴🐑🐘🐼🐧🐦🐤🐥🐣🐔🐍🐢🐛🐝🐜🐞🐌🐙🐚🐠🐟🐬🐳🐋🐄🐏🐀🐃🐅🐇🐉🐎🐐🐓🐕🐖🐁🐂🐲🐡🐊🐫🐪🐆🐈🐩🐾💐🌸🌷🍀🌹🌻🌺🍁🍃🍂🌿🌾🍄🌵🌴🌲🌳🌰🌱🌼🌐🌞🌝🌚🌑🌒🌓🌔🌕🌖🌗🌘🌜🌛🌙🌍🌎🌏🌋🌌🌠⭐🌀⛅🌁⚡🌈☔🌊⛄🎍💝🎎🎓🎏🎆🎇🎐🎑🎃👻🎅🎄🎁🎋🎉🎊🎈🎌🔮💡🔦🔆🔅🔋🔍🎨🎬🎤🎧🎼🎵🎶🎹🎻🎺🎷🎸👾🎮🃏🎴🀄🎲🎯🏈🏀⚾🎾🎱🏉🎳⛳🚵🚴🏁🏇🏆🎿🏂🏊🏄🎣☕🍵🍶🍼🍕🍔🍟🍗🍖🍝🍛🍤🍱🍣🍥🍙🍘🍚🍜🍲🍢🍡🍳🍞🍩🍮🍦🍨🍧🎂🍰🍪🍫🍬🍭🍯🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍍🍠🍆🍅🌽⚓🚲🏮🎰🗿🎪💟💮💯⚽";
  var split = emojis.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
  var arr = [];
  for (var i = 0; i < split.length; i++) {
      var char = split[i]
      if (char !== "")
          arr.push(char);
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

function consoleLogRandomEmoji() {
  console.log('%cLoLSquare ' + getRandomEmoji(), 'background: #009688; color: #eee; font-size:48px; font-family: Segoe Script; border-radius:10px;padding: 10px 20px 5px;');
}

function getCountryNameFromCode(code) {
  if (isoCountries.hasOwnProperty(code))
      return isoCountries[code].name;
  return "";
}

function getCountryCodeFromName(name) {
  if (isNullOrEmpty(name)) return "";
  for (var key in isoCountries)
      if (isoCountries[key].name == name)
          return key;
}

function getCountryPopulationFromName(name) {
  if (isNullOrEmpty(name)) return 0;
  for (var key in isoCountries)
      if (isoCountries[key].name.toLowerCase() == name)
          return isoCountries[key].population;
  return 0;
}

function getFlagSpan(code) {
  return '<span class="flag-icon flag-icon-' + code + '"></span>';
}

function getFlagUrl(code) {
  if (!isNullOrEmpty(code))
      return "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/" + code + ".svg";
}

function getNatiolalitiesData() {
  var data = {};
  for (var property in isoCountries)
      if (isoCountries.hasOwnProperty(property))
          data[getCountryNameFromCode(property)] = getFlagUrl(property);
  return data;
}

function natiolalityAutocompleteOptions() {
  return {
      data: getNatiolalitiesData(),
      minLength: 1,
      sortFunction: function(a, b, inputString) {
          return autcompleteSortFunctionCountries(a, b, inputString);
      }
  };
}

function guessNationality() {
  var iso3166 = "";
  var sLanguage = getLanguageFromBrowser();
  switch (getRegion()) {
      case 'EUW':
      case 'EUNE':
      case 'TR':
      case 'RU': {
          if (sLanguage == 'ab')
              iso3166 = "ge";
          if (sLanguage == 'sq')
              iso3166 = "al";
          if (sLanguage == 'an')
              iso3166 = "ar";
          if (sLanguage == 'hy')
              iso3166 = "am";
          if (sLanguage == 'az')
              iso3166 = "az";
          if (sLanguage == 'be')
              iso3166 = "by";
          if (sLanguage == 'bs')
              iso3166 = "ba";
          if (sLanguage == 'bg')
              iso3166 = "bg";
          if (sLanguage == 'ca')
              iso3166 = "ad";
          if (sLanguage == 'hr')
              iso3166 = "hr";
          if (sLanguage == 'cs')
              iso3166 = "cz";
          if (sLanguage == 'da')
              iso3166 = "dk";
          if (sLanguage == 'nl')
              iso3166 = "nl";
          if (sLanguage == 'en')
              iso3166 = "gb";
          if (sLanguage == 'et')
              iso3166 = "ee";
          if (sLanguage == 'fi')
              iso3166 = "fi";
          if (sLanguage == 'fr')
              iso3166 = "fr";
          if (sLanguage == 'ka')
              iso3166 = "ge";
          if (sLanguage == 'de')
              iso3166 = "de";
          if (sLanguage == 'el')
              iso3166 = "gr";
          if (sLanguage == 'hu')
              iso3166 = "hu";
          if (sLanguage == 'is')
              iso3166 = "is";
          if (sLanguage == 'ga')
              iso3166 = "ie";
          if (sLanguage == 'it')
              iso3166 = "it";
          if (sLanguage == 'kk')
              iso3166 = "kz";
          if (sLanguage == 'lv')
              iso3166 = "lv";
          if (sLanguage == 'lt')
              iso3166 = "lt";
          if (sLanguage == 'lb')
              iso3166 = "lu";
          if (sLanguage == 'mk')
              iso3166 = "mk";
          if (sLanguage == 'mt')
              iso3166 = "mt";
          if (sLanguage == 'cn')
              iso3166 = "me";
          if (sLanguage == 'no')
              iso3166 = "no";
          if (sLanguage == 'os')
              iso3166 = "ge";
          if (sLanguage == 'pl')
              iso3166 = "pl";
          if (sLanguage == 'pt')
              iso3166 = "pt";
          if (sLanguage == 'ro')
              iso3166 = "ro";
          if (sLanguage == 'ru')
              iso3166 = "ru";
          if (sLanguage == 'se')
              iso3166 = "no";
          if (sLanguage == 'sr')
              iso3166 = "rs";
          if (sLanguage == 'sk')
              iso3166 = "sk";
          if (sLanguage == 'sl')
              iso3166 = "sl";
          if (sLanguage == 'es')
              iso3166 = "es";
          if (sLanguage == 'sv')
              iso3166 = "se";
          if (sLanguage == 'tr')
              iso3166 = "tr";
          if (sLanguage == 'uk')
              iso3166 = "ua";
          if (sLanguage == 'aa')
              iso3166 = "aa";
          if (sLanguage == 'aa')
              iso3166 = "aa";
      }
      break;
      case 'NA': {
          if (sLanguage == 'fr')
              iso3166 = "ca";
          if (sLanguage == 'es')
              iso3166 = "mx";
      }
      break;
      case 'LAN':
      case 'LAS':
          break;
      case 'BR': {
          iso3166 = "br";
      }
      break;
      case 'KR': {
          iso3166 = "kr";
      }
      break;
      case 'OCE': {
          iso3166 = "au";
      }
      break;
      case 'JP': {
          iso3166 = "jp";
      }
      break;
      default:
          break;
  }
  return iso3166;
}

function autcompleteSortFunctionCountries(a, b, inputString) {
  var iA = 0;
  var iB = 0;
  if (!isNullOrEmpty(inputString)) {
      if (a.indexOf(inputString) > -1) {
          iA++;
          if (a.startsWith(inputString))
              iA++;
      }
      if (b.indexOf(inputString) > -1) {
          iB++;
          if (b.startsWith(inputString))
              iB++;
      }
  }
  if (iA === iB) {
      var iPopulationA = getCountryPopulationFromName(a);
      var iPopulationB = getCountryPopulationFromName(b);
      if (iPopulationA > iPopulationB)
          iA++;
      if (iPopulationA < iPopulationB)
          iB++;
  }
  if (iA === iB) {
      if (a > b)
          iA++;
      if (a < b)
          iB++;
  }
  if (iA > iB)
      return -1;
  else if (iA < iB)
      return 1;
  else
      return 0;
}
var regionsColl = ["EUW", "NA"];

function populateRegionsDropdown() {
  var a = getRegion();
  var sHtml = '';
  for (var i in regionsColl)
      sHtml += '<li><a class="waves-effect" onclick="changeRegion(\'' + regionsColl[i] + '\')">' + babel("region." + regionsColl[i]) + '</a></li>';
  return sHtml;
}

function getRegion(bReturnEnum) {
  var sRegion = 'EUW';
  if (isLocalhost()) {
      if (!isNullOrEmpty(getLocal("test", "region")))
          sRegion = getLocal("test", "region");
  } else {
      var subdomain = getSubDomain().toUpperCase();
      if (subdomain != "LOCALHOST" && includes(subdomain, regionsColl))
          sRegion = subdomain;
  }
  if (bReturnEnum)
      return RegionId[sRegion];
  else
      return sRegion;
}

function changeRegion(sRegion, bHome) {
  if (bHome)
      sRegion = getRegionKeyById(WebUser.iRegion);
  if (isLocalhost()) {
      setLocal("test", "region", sRegion);
      setRegionElements();
      applyGuestMode();
  } else {
      var n = "https://" + sRegion + "." + getRootDomain();
      window.location.replace(n.toLowerCase());
  }
}

function getDomainUrlByRegion(sRegion, bHome) {
  if (bHome && WebUser)
      sRegion = getRegionKeyById(WebUser.iRegion);
  var n = "https://" + sRegion + "." + getRootDomain();
  return n.toLowerCase();
}

function getRegionKeyById(iRegion) {
  return getPropertyNameFromEnum(iRegion, RegionId);
}

function pulseChangeRegion() {
  $header.find("#ddRegion").addClass('pulse');
}

function removePulseChangeRegion() {
  $header.find("#ddRegion").removeClass('pulse');
}
const isoCountries = {
  af: {
      name: "Afghanistan",
      population: 31575018
  },
  ax: {
      name: "Aland Islands",
      population: 29489
  },
  al: {
      name: "Albania",
      population: 2862427
  },
  dz: {
      name: "Algeria",
      population: 43378027
  },
  as: {
      name: "American Samoa",
      population: 55689
  },
  ad: {
      name: "Andorra",
      population: 76965
  },
  ao: {
      name: "Angola",
      population: 30175553
  },
  ai: {
      name: "Anguilla",
      population: 15156
  },
  aq: {
      name: "Antarctica",
      population: 1106
  },
  ag: {
      name: "Antigua And Barbuda",
      population: 102012
  },
  ar: {
      name: "Argentina",
      population: 44938712
  },
  am: {
      name: "Armenia",
      population: 2969200
  },
  aw: {
      name: "Aruba",
      population: 105264
  },
  au: {
      name: "Australia",
      population: 25354400
  },
  at: {
      name: "Austria",
      population: 8859992
  },
  az: {
      name: "Azerbaijan",
      population: 10001642
  },
  bs: {
      name: "Bahamas",
      population: 385340
  },
  bh: {
      name: "Bahrain",
      population: 1627629
  },
  bd: {
      name: "Bangladesh",
      population: 166527000
  },
  bb: {
      name: "Barbados",
      population: 287010
  },
  by: {
      name: "Belarus",
      population: 9465300
  },
  be: {
      name: "Belgium",
      population: 11463692
  },
  bz: {
      name: "Belize",
      population: 398050
  },
  bj: {
      name: "Benin",
      population: 11733059
  },
  bm: {
      name: "Bermuda",
      population: 64027
  },
  bt: {
      name: "Bhutan",
      population: 741672
  },
  bo: {
      name: "Bolivia",
      population: 11469896
  },
  ba: {
      name: "Bosnia And Herzegovina",
      population: 3502550
  },
  bw: {
      name: "Botswana",
      population: 2338851
  },
  bv: {
      name: "Bouvet Island",
      population: 0
  },
  br: {
      name: "Brazil",
      population: 209885000
  },
  io: {
      name: "British Indian Ocean Territory",
      population: 4000
  },
  bn: {
      name: "Brunei Darussalam",
      population: 428697
  },
  bg: {
      name: "Bulgaria",
      population: 7000039
  },
  bf: {
      name: "Burkina Faso",
      population: 20870060
  },
  bi: {
      name: "Burundi",
      population: 10953317
  },
  kh: {
      name: "Cambodia",
      population: 16289270
  },
  cm: {
      name: "Cameroon",
      population: 24348251
  },
  ca: {
      name: "Canada",
      population: 37471300
  },
  cv: {
      name: "Cape Verde",
      population: 546388
  },
  ky: {
      name: "Cayman Islands",
      population: 63415
  },
  cf: {
      name: "Central African Republic",
      population: 4813068
  },
  td: {
      name: "Chad",
      population: 15747993
  },
  cl: {
      name: "Chile",
      population: 19107216
  },
  cn: {
      name: "China",
      population: 1397270000
  },
  cx: {
      name: "Christmas Island",
      population: 1928
  },
  cc: {
      name: "Cocos (Keeling) Islands",
      population: 538
  },
  co: {
      name: "Colombia",
      population: 49849818
  },
  km: {
      name: "Comoros",
      population: 873724
  },
  cg: {
      name: "Congo",
      population: 5521755
  },
  cd: {
      name: "Congo, Democratic Republic",
      population: 86727573
  },
  ck: {
      name: "Cook Islands",
      population: 15200
  },
  cr: {
      name: "Costa Rica",
      population: 5058007
  },
  ci: {
      name: "Cote D'Ivoire",
      population: 25441318
  },
  hr: {
      name: "Croatia",
      population: 4105493
  },
  cu: {
      name: "Cuba",
      population: 11221060
  },
  cy: {
      name: "Cyprus",
      population: 864200
  },
  cz: {
      name: "Czech Republic",
      population: 10649800
  },
  dk: {
      name: "Denmark",
      population: 5811413
  },
  dj: {
      name: "Djibouti",
      population: 1078373
  },
  dm: {
      name: "Dominica",
      population: 74679
  },
  do: {
      name: "Dominican Republic",
      population: 10358320
  },
  ec: {
      name: "Ecuador",
      population: 17235000
  },
  eg: {
      name: "Egypt",
      population: 98654400
  },
  sv: {
      name: "El Salvador",
      population: 6704864
  },
  gq: {
      name: "Equatorial Guinea",
      population: 1358276
  },
  er: {
      name: "Eritrea",
      population: 5309659
  },
  ee: {
      name: "Estonia",
      population: 1324820
  },
  et: {
      name: "Ethiopia",
      population: 98665000
  },
  fk: {
      name: "Falkland Islands (Malvinas)",
      population: 3198
  },
  fo: {
      name: "Faroe Islands",
      population: 51540
  },
  fj: {
      name: "Fiji",
      population: 884887
  },
  fi: {
      name: "Finland",
      population: 5518393
  },
  fr: {
      name: "France",
      population: 66992000
  },
  gf: {
      name: "French Guiana",
      population: 250377
  },
  pf: {
      name: "French Polynesia",
      population: 275918
  },
  tf: {
      name: "French Southern Territories",
      population: 100
  },
  ga: {
      name: "Gabon",
      population: 2109099
  },
  gm: {
      name: "Gambia",
      population: 2228075
  },
  ge: {
      name: "Georgia",
      population: 3723500
  },
  de: {
      name: "Germany",
      population: 82979100
  },
  gh: {
      name: "Ghana",
      population: 30280811
  },
  gi: {
      name: "Gibraltar",
      population: 33573
  },
  gr: {
      name: "Greece",
      population: 10741765
  },
  gl: {
      name: "Greenland",
      population: 55992
  },
  gd: {
      name: "Grenada",
      population: 108825
  },
  gp: {
      name: "Guadeloupe",
      population: 395700
  },
  gu: {
      name: "Guam",
      population: 172400
  },
  gt: {
      name: "Guatemala",
      population: 17679735
  },
  gg: {
      name: "Guernsey",
      population: 62063
  },
  gn: {
      name: "Guinea",
      population: 12218357
  },
  gw: {
      name: "Guinea-Bissau",
      population: 1604528
  },
  gy: {
      name: "Guyana",
      population: 786508
  },
  ht: {
      name: "Haiti",
      population: 11577779
  },
  hm: {
      name: "Heard Island & Mcdonald Islands",
      population: 0
  },
  va: {
      name: "Holy See (Vatican City State)",
      population: 800
  },
  hn: {
      name: "Honduras",
      population: 9158345
  },
  hk: {
      name: "Hong Kong",
      population: 7482500
  },
  hu: {
      name: "Hungary",
      population: 9771000
  },
  is: {
      name: "Iceland",
      population: 358780
  },
  in: {
      name: "India",
      population: 1347010000
  },
  id: {
      name: "Indonesia",
      population: 268074600
  },
  ir: {
      name: "Iran, Islamic Republic Of",
      population: 82436200
  },
  iq: {
      name: "Iraq",
      population: 39127900
  },
  ie: {
      name: "Ireland",
      population: 4857000
  },
  im: {
      name: "Isle Of Man",
      population: 83314
  },
  il: {
      name: "Israel",
      population: 9026900
  },
  it: {
      name: "Italy",
      population: 60375749
  },
  jm: {
      name: "Jamaica",
      population: 2726667
  },
  jp: {
      name: "Japan",
      population: 126230000
  },
  je: {
      name: "Jersey",
      population: 105500
  },
  jo: {
      name: "Jordan",
      population: 10411900
  },
  kz: {
      name: "Kazakhstan",
      population: 18472424
  },
  ke: {
      name: "Kenya",
      population: 52214791
  },
  ki: {
      name: "Kiribati",
      population: 120100
  },
  kp: {
      name: "North Korea",
      population: 25450000
  },
  kr: {
      name: "South Korea",
      population: 51811167
  },
  kw: {
      name: "Kuwait",
      population: 4226920
  },
  kg: {
      name: "Kyrgyzstan",
      population: 6389500
  },
  la: {
      name: "Lao People's Democratic Republic",
      population: 7123205
  },
  lv: {
      name: "Latvia",
      population: 1916200
  },
  lb: {
      name: "Lebanon",
      population: 6065922
  },
  ls: {
      name: "Lesotho",
      population: 2007201
  },
  lr: {
      name: "Liberia",
      population: 4226920
  },
  ly: {
      name: "Libyan Arab Jamahiriya",
      population: 6569864
  },
  li: {
      name: "Liechtenstein",
      population: 38380
  },
  lt: {
      name: "Lithuania",
      population: 2790322
  },
  lu: {
      name: "Luxembourg",
      population: 613894
  },
  mo: {
      name: "Macau",
      population: 667400
  },
  mk: {
      name: "North Macedonia",
      population: 2075301
  },
  mg: {
      name: "Madagascar",
      population: 25450000
  },
  mw: {
      name: "Malawi",
      population: 17563749
  },
  my: {
      name: "Malaysia",
      population: 32719200
  },
  mv: {
      name: "Maldives",
      population: 378114
  },
  ml: {
      name: "Mali",
      population: 19973000
  },
  mt: {
      name: "Malta",
      population: 475701
  },
  mh: {
      name: "Marshall Islands",
      population: 53127
  },
  mq: {
      name: "Martinique",
      population: 376480
  },
  mr: {
      name: "Mauritania",
      population: 4077347
  },
  mu: {
      name: "Mauritius",
      population: 1265577
  },
  yt: {
      name: "Mayotte",
      population: 270372
  },
  mx: {
      name: "Mexico",
      population: 126577691
  },
  fm: {
      name: "Micronesia, Federated States Of",
      population: 105300
  },
  md: {
      name: "Moldova",
      population: 3547539
  },
  mc: {
      name: "Monaco",
      population: 38300
  },
  mn: {
      name: "Mongolia",
      population: 3256831
  },
  me: {
      name: "Montenegro",
      population: 622359
  },
  ms: {
      name: "Montserrat",
      population: 5220
  },
  ma: {
      name: "Morocco",
      population: 35014700
  },
  mz: {
      name: "Mozambique",
      population: 27909798
  },
  mm: {
      name: "Myanmar",
      population: 54339766
  },
  na: {
      name: "Namibia",
      population: 2458936
  },
  nr: {
      name: "Nauru",
      population: 11000
  },
  np: {
      name: "Nepal",
      population: 29609623
  },
  nl: {
      name: "Netherlands",
      population: 17317100
  },
  an: {
      name: "Netherlands Antilles",
      population: 227049
  },
  nc: {
      name: "New Caledonia",
      population: 282000
  },
  nz: {
      name: "New Zealand",
      population: 4962280
  },
  ni: {
      name: "Nicaragua",
      population: 6393824
  },
  ne: {
      name: "Niger",
      population: 22314743
  },
  ng: {
      name: "Nigeria",
      population: 202962417
  },
  nu: {
      name: "Niue",
      population: 1520
  },
  nf: {
      name: "Norfolk Island",
      population: 1756
  },
  mp: {
      name: "Northern Mariana Islands",
      population: 56200
  },
  no: {
      name: "Norway",
      population: 5328212
  },
  om: {
      name: "Oman",
      population: 4690603
  },
  pk: {
      name: "Pakistan",
      population: 204611000
  },
  pw: {
      name: "Palau",
      population: 17900
  },
  ps: {
      name: "Palestinian Territory, Occupied",
      population: 4780978
  },
  pa: {
      name: "Panama",
      population: 4218808
  },
  pg: {
      name: "Papua New Guinea",
      population: 8558800
  },
  py: {
      name: "Paraguay",
      population: 7152703
  },
  pe: {
      name: "Peru",
      population: 32495510
  },
  ph: {
      name: "Philippines",
      population: 107614000
  },
  pn: {
      name: "Pitcairn",
      population: 50
  },
  pl: {
      name: "Poland",
      population: 38413000
  },
  pt: {
      name: "Portugal",
      population: 10291027
  },
  pr: {
      name: "Puerto Rico",
      population: 3256831
  },
  qa: {
      name: "Qatar",
      population: 2772294
  },
  re: {
      name: "Reunion",
      population: 888982
  },
  ro: {
      name: "Romania",
      population: 19523621
  },
  ru: {
      name: "Russian Federation",
      population: 146793744
  },
  rw: {
      name: "Rwanda",
      population: 12374397
  },
  bl: {
      name: "Saint Barthelemy",
      population: 9793
  },
  sh: {
      name: "Saint Helena",
      population: 5633
  },
  kn: {
      name: "Saint Kitts And Nevis",
      population: 53345
  },
  lc: {
      name: "Saint Lucia",
      population: 180454
  },
  mf: {
      name: "Saint Martin",
      population: 40884
  },
  pm: {
      name: "Saint Pierre And Miquelon",
      population: 6.008
  },
  vc: {
      name: "Saint Vincent And Grenadines",
      population: 110520
  },
  ws: {
      name: "Samoa",
      population: 56700
  },
  sm: {
      name: "San Marino",
      population: 33420
  },
  st: {
      name: "Sao Tome And Principe",
      population: 201784
  },
  sa: {
      name: "Saudi Arabia",
      population: 33413660
  },
  sn: {
      name: "Senegal",
      population: 16209125
  },
  rs: {
      name: "Serbia",
      population: 7001444
  },
  sc: {
      name: "Seychelles",
      population: 96762
  },
  sl: {
      name: "Sierra Leone",
      population: 7901454
  },
  sg: {
      name: "Singapore",
      population: 5638700
  },
  sk: {
      name: "Slovakia",
      population: 5450421
  },
  si: {
      name: "Slovenia",
      population: 2080908
  },
  sb: {
      name: "Solomon Islands",
      population: 680806
  },
  so: {
      name: "Somalia",
      population: 15636171
  },
  za: {
      name: "South Africa",
      population: 57725600
  },
  gs: {
      name: "South Georgia And Sandwich Isl.",
      population: 30
  },
  ss: {
      name: "South Sudan",
      population: 12778250
  },
  es: {
      name: "Spain",
      population: 46733038
  },
  lk: {
      name: "Sri Lanka",
      population: 21670112
  },
  sd: {
      name: "Sudan",
      population: 41512716
  },
  sr: {
      name: "Suriname",
      population: 573085
  },
  sj: {
      name: "Svalbard And Jan Mayen",
      population: 2667
  },
  sz: {
      name: "Swaziland",
      population: 1411979
  },
  se: {
      name: "Sweden",
      population: 10246901
  },
  ch: {
      name: "Switzerland",
      population: 8542323
  },
  sy: {
      name: "Syrian Arab Republic",
      population: 18499181
  },
  tw: {
      name: "Taiwan",
      population: 23589192
  },
  tj: {
      name: "Tajikistan",
      population: 8931000
  },
  tz: {
      name: "Tanzania",
      population: 55890747
  },
  th: {
      name: "Thailand",
      population: 66361505
  },
  tl: {
      name: "Timor-Leste",
      population: 1387149
  },
  tg: {
      name: "Togo",
      population: 7538000
  },
  tk: {
      name: "Tokelau",
      population: 1400
  },
  to: {
      name: "Tonga",
      population: 100651
  },
  tt: {
      name: "Trinidad And Tobago",
      population: 1359193
  },
  tn: {
      name: "Tunisia",
      population: 11551448
  },
  tr: {
      name: "Turkey",
      population: 82003882
  },
  tm: {
      name: "Turkmenistan",
      population: 5942561
  },
  tc: {
      name: "Turks And Caicos Islands",
      population: 41369
  },
  tv: {
      name: "Tuvalu",
      population: 10200
  },
  ug: {
      name: "Uganda",
      population: 40006700
  },
  ua: {
      name: "Ukraine",
      population: 40101650
  },
  ae: {
      name: "United Arab Emirates",
      population: 9682088
  },
  gb: {
      name: "United Kingdom",
      population: 66040229
  },
  us: {
      name: "United States",
      population: 329176000
  },
  um: {
      name: "United States Outlying Islands",
      population: 300
  },
  uy: {
      name: "Uruguay",
      population: 3518552
  },
  uz: {
      name: "Uzbekistan",
      population: 33489233
  },
  vu: {
      name: "Vanuatu",
      population: 304500
  },
  ve: {
      name: "Venezuela",
      population: 32219521
  },
  vn: {
      name: "Vietnam",
      population: 95354000
  },
  vg: {
      name: "Virgin Islands, British",
      population: 32206
  },
  vi: {
      name: "Virgin Islands, U.S.",
      population: 104909
  },
  wf: {
      name: "Wallis And Futuna",
      population: 11700
  },
  eh: {
      name: "Western Sahara",
      population: 582478
  },
  ye: {
      name: "Yemen",
      population: 29579986
  },
  zm: {
      name: "Zambia",
      population: 17381168
  },
  zw: {
      name: "Zimbabwe",
      population: 15159624
  }
};
var $accountButton;
var $userCenter;

function initializeHeader() {
  $accountButton = $header.find("#idAccountBtn");
  $userCenter = $("#idUserCenter");
  SearchInitialization();
  UserCenterInit();
  NotificationInit();
  updateHeader();
}

function updateHeader() {
  if (!isUserLogged())
      $nav.removeClass("user-logged");
  else
      $nav.addClass("user-logged");
  menuAdmin();
  setAccountIcon();
  showMySummonerSideNav();
  showMyTeamsSideNav();
  updateUserCenter();
  setRegionElements();
  NotificationUpdate();
}

function setAccountIcon() {
  $accountButton.find('i').remove();
  $accountButton.find('img').remove();
  if (isUserLogged() && WebUser.summoner)
      $accountButton.append(getTemplateHtml(SummonerImageItemTemplate, {
          summoner: WebUser.summoner
      }));
  else
      $accountButton.append('<i class="fad fa-user-circle"></i>');
}

function getTemplateHtml(templatePar, objPar) {
  var item = templatePar;
  var startIndex;
  var endIndex;
  var evaluablePart;
  var evaluatedPart;
  var startConditionIndex;
  var closeConditionTagIndex;
  do {
      startConditionIndex = item.indexOf("{{?");
      startIndex = item.indexOf("{{");
      endIndex = item.indexOf("}}");
      if (startIndex != -1 && endIndex != -1) {
          if (startConditionIndex != -1 && startConditionIndex <= startIndex) {
              evaluablePart = item.substring(startIndex + 3, endIndex);
              closeConditionTagIndex = getClosingConditionTagIndex(item);
              if (eval(evaluablePart) == true) {
                  item = item.substring(0, startIndex) + item.substring(endIndex + 2, closeConditionTagIndex) + item.substring(closeConditionTagIndex + 5, item.length);
              } else {
                  item = item.substring(0, startIndex) + item.substring(closeConditionTagIndex + 5, item.length);
              }
          } else {
              evaluablePart = item.substring(startIndex + 2, endIndex);
              if (evaluablePart.indexOf('*') == 0) {
                  evaluablePart = evaluablePart.substring(1);
                  evaluatedPart = eval(evaluablePart);
              } else {
                  evaluatedPart = htmlEncode(eval(evaluablePart));
              }
              if (evaluatedPart == null)
                  evaluatedPart = '';
              item = item.substring(0, startIndex) + evaluatedPart + item.substring(endIndex + 2, item.length);
          }
      }
  } while (startIndex != -1 && endIndex != -1)
  return item;
}

function getClosingConditionTagIndex(template) {
  var delta = 0;
  var nextIndex = 0;
  do {
      var res = whatIsNextConditionTag(template, nextIndex);
      nextIndex = res[1];
      if (nextIndex == -1)
          return -1;
      if (res[0] == "close")
          delta--;
      if (res[0] == "open")
          delta++;
      if (delta <= 0)
          return res[1];
  } while (nextIndex != -1)
}

function whatIsNextConditionTag(template, startIndex) {
  var startConditionIndex = template.indexOf("{{?", startIndex + 1);
  var endConditionIndex = template.indexOf("{{?}}", startIndex + 1);
  if (startConditionIndex == -1 && endConditionIndex == -1)
      return ["", 0];
  if (endConditionIndex == startConditionIndex)
      return ["close", endConditionIndex];
  if (startConditionIndex < endConditionIndex)
      return ["open", startConditionIndex];
}

function htmlEncode(sValue) {
  if (typeof sValue == 'string')
      return sValue.replace('&', '&amp;').replace('"', '&quot;').replace('\'', '&#39;').replace('<', '&lt;').replace('>', '&gt;');
  else
      return sValue;
}

function htmlDecode(sValue) {
  if (typeof sValue == 'string')
      return sValue.replace('&quot;', '"').replace('&#39;', '\'').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&');
  else
      return sValue;
}
var pagesColl = ['About', 'AccountData', 'Achievements', 'Champion', 'ChangeLog', 'CheckErrors', 'CheckFeedback', 'Curriculum', 'DisableAdBlock', 'EditTeam', 'EditTournament', 'FAQ', 'Home', 'Match', 'MyTeams', 'MyTournaments', 'NoContent', 'PageX', 'Reports', 'SearchMember', 'SearchResults', 'SearchSummoner', 'SearchTeam', 'SearchTournament', 'ServerError', 'SocialLinks', 'Summoner', 'Team', 'TeamLeaderboard', 'Tournament', 'User'];
window.onpopstate = function(event) {
  if (event.state === null) {
      event.preventDefault();
      return false;
  }
  navigate(getPageName(), getQueryString(), true);
};
var tabHidden;
var bTabFocused = true;

function addDocumentVisibilityChangeEventListener() {
  var visibilityChange;
  if (typeof document.hidden !== "undefined") {
      tabHidden = "hidden";
      visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
      tabHidden = "msHidden";
      visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
      tabHidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
  }
  if (!isNullOrEmpty(visibilityChange))
      document.addEventListener(visibilityChange, tabVisibilityChanged, false);
}

function tabVisibilityChanged() {
  bTabFocused = !document[tabHidden];
  if (!bTabFocused)
      SearchBlur();
}
var pageVars = [];

function navigate(sPageName, sQuerystring, bDoNotAddToHistory) {
  if (!sPageName || sPageName.toLowerCase() == "home" || sPageName.toLowerCase() == "main")
      sPageName = "";
  sPageName = normalizePageName(sPageName);
  sQuerystring = vEncode(sQuerystring);
  var sNewUrl = getPageLink(sPageName, sQuerystring);
  if (window.event && window.event.ctrlKey) {
      window.open(sNewUrl);
      return;
  }
  if (isLocalhost())
      console.log('%cNavigate to ' + sPageName + (!isNullOrEmpty(sQuerystring) ? '/' + sQuerystring : '') + (bDoNotAddToHistory ? ' not added in history' : ''), 'background: #000;color:#fff;padding:2px');
  for (var i in pageVars)
      window[pageVars[i]] = null;
  hideUserCenter();
  hideNotificationsCenter();
  abortPendingAjaxCallsOnNavigate();
  SearchClear();
  $searchInput.blur();
  SearchMobileHide();
  teardownOnNavigate();
  $mainContent.empty();
  $mainContent.attr("class", "maincontent");
  if (sPageName.toLowerCase() == "nocontent")
      bDoNotAddToHistory = true;
  var sClassPage = 'hom';
  if (sPageName != "") {
      sClassPage = sPageName.replace(/[aeiouy]/ig, '').toLowerCase();
      if (sClassPage.length > 6)
          sClassPage = sClassPage.substring(0, 6);
  }
  $mainContent.addClass(sClassPage);
  if (!bDoNotAddToHistory)
      history.pushState({
          id: sPageName
      }, 'LoLSquare', sNewUrl);
  else
      history.replaceState({
          id: sPageName
      }, 'LoLSquare', sNewUrl);
  changeTitle('LoLSquare');
  changeCanonicalUrl();
  updateSEOTags();
  if (sPageName == "")
      sPageName = "Home";
  var sPageTemplate = window[sPageName + "PageTemplate"];
  if (!isNullOrEmpty(sPageTemplate))
      $mainContent.append(getTemplateHtml(sPageTemplate));
  callDocumentReady(sPageName);
  setActiveMenu(sPageName);
  closeSideNav();
  var region = getRegion();
  if (isNullOrEmpty(region))
      $(".region-change-text").text('None');
  else
      $(".region-change-text").text(region);
  materializeInitialization();
  if ($mainContent.is(':empty')) {
      sPageName = "404";
      $mainContent.append(getTemplateHtml(NoContentPageTemplate));
  }
  goToByScroll(0);
  loadAdsOnNavigate(sPageName);
}

function reloadPage() {
  navigate(getPageName(), getQueryString(), true);
}

function callDocumentReady(sPageName) {
  if (typeof window[sPageName + "DocumentReady"] === "function")
      window[sPageName + "DocumentReady"]();
}

function callOnSignIn(bUserIsLogging) {
  if (!$mainContent.is(':empty') && typeof window[getPageName() + "OnSignIn"] === "function")
      window[getPageName() + "OnSignIn"](bUserIsLogging);
}

function getPageLink(sPageName, sQuerystring, sRegion, bHome) {
  var sUrl = window.location.origin;
  if (!isNullOrEmpty(sRegion) || bHome)
      sUrl = getDomainUrlByRegion(sRegion, bHome);
  sUrl += '/' + sPageName;
  if (!isNullOrEmpty(sQuerystring)) {
      sQuerystring = sQuerystring.toString();
      sUrl += '/' + decodeURI(sQuerystring);
  }
  return sUrl;
}

function getPageOnclick(sPageName, sQuerystring) {
  if (!isNullOrEmpty(sQuerystring))
      return "navigate('" + sPageName + "', '" + sQuerystring + "');return false;";
  else
      return "navigate('" + sPageName + "');return false;";
}

function getPageNavigations(sPageName, sQuerystring) {
  return 'href="' + getPageLink(sPageName, sQuerystring) + '" onclick="' + getPageOnclick(sPageName, sQuerystring) + '"';
}

function getSummonerQuerystring(dtoSummoner) {
  if (!dtoSummoner) return "";
  if (!dtoSummoner.iSummonerId || dtoSummoner.iSummonerId == 0) {
      if (!isNullOrEmpty(dtoSummoner.sEncryptedId))
          return "0/" + vEncode(dtoSummoner.sName) + "/" + dtoSummoner.sEncryptedId;
      else
          return "";
  } else
      return dtoSummoner.iSummonerId + "/" + vEncode(dtoSummoner.sName);
}

function getSummonerPageLink(dtoSummoner) {
  if (!dtoSummoner) return "";
  return getPageLink('Summoner', getSummonerQuerystring(dtoSummoner));
}

function getSummonerPageOnclick(dtoSummoner) {
  if (!dtoSummoner) return "";
  return "navigate('Summoner', '" + getSummonerQuerystring(dtoSummoner) + "');return false;";
}

function getSummonerNavigations(dtoSummoner) {
  return 'href="' + getSummonerPageLink(dtoSummoner) + '" onclick="' + getSummonerPageOnclick(dtoSummoner) + '"';
}

function getTeamQuerystring(dtoTeam) {
  if (!dtoTeam) return "";
  return dtoTeam.iTeamId + "/" + vEncode(dtoTeam.sTag) + "/" + vEncode(dtoTeam.sName);
}

function getTeamPageLink(dtoTeam) {
  if (!dtoTeam) return "";
  return getPageLink('Team', getTeamQuerystring(dtoTeam));
}

function getTeamPageOnclick(dtoTeam) {
  if (!dtoTeam) return "";
  return "navigate('Team', '" + getTeamQuerystring(dtoTeam) + "');return false;";
}

function getTeamNavigations(team) {
  return 'href="' + getTeamPageLink(team) + '" onclick="' + getTeamPageOnclick(team) + '"';
}

function getTournamentQuerystring(dtoTournament) {
  if (!dtoTournament) return "";
  return dtoTournament.iTournamentId + "/" + vEncode(dtoTournament.sName);
}

function getTournamentPageLink(dtoTournament) {
  if (!dtoTournament) return "";
  return getPageLink('Tournament', getTournamentQuerystring(dtoTournament));
}

function getTournamentPageOnclick(dtoTournament) {
  if (!dtoTournament) return "";
  return "navigate('Tournament', '" + getTournamentQuerystring(dtoTournament) + "');return false;";
}

function getTournamentNavigations(dtoTournament) {
  return 'href="' + getTournamentPageLink(dtoTournament) + '" onclick="' + getTournamentPageOnclick(dtoTournament) + '"';
}

function getChampionNavigations(id) {
  return 'href="' + getPageLink('Champion', GetChampionNameById(id, true)) + '" onclick="navigate(\'Champion\', \'' + id + '\');return false;"';
}

function updateSEOTags(objSummoner, objTeam) {
  var infos = ["League of Legends team manager"];
  if (objSummoner) {
      infos = [];
      infos.push(objSummoner.sName);
      if (hasSome(objSummoner.leagues))
          for (var i in objSummoner.leagues) {
              var sRank = "";
              if (objSummoner.leagues[i].iQueueType == QueueType.SR_5V5RS)
                  sRank = "Solo: " + getRankDescByTLP(objSummoner.leagues[i], 'tier division pointsLP');
              else if (objSummoner.leagues[i].iQueueType == QueueType.SR_5V5RF)
                  sRank = "Flex: " + getRankDescByTLP(objSummoner.leagues[i], 'tier division pointsLP');
              else
                  continue;
              sRank += " " + objSummoner.leagues[i].iWins + "W " + objSummoner.leagues[i].iLosses + "L " + mathPercentage(objSummoner.leagues[i].iWins, objSummoner.leagues[i].iWins + objSummoner.leagues[i].iLosses) + "%WR";
              infos.push(sRank);
          }
      infos.push("Summoner profile");
  } else if (objTeam) {
      infos = [];
      infos.push(objTeam.sTag + " " + objTeam.sName);
      if (objTeam.rank && objTeam.rank.iTLP > 0)
          infos.push(getRankDescByTLP(objTeam.rank, 'tier division pointsLP'));
      infos.push("Position " + objTeam.iPosition);
      infos.push(objTeam.iFollowers + " followers");
      if (objTeam.description)
          infos.push(objTeam.description.sText);
      infos.push("Team profile");
  }
  infos.push("LoLSquare");
  $("meta[name=description]").attr("content", infos.join(' / '));
  $("meta[property='og\\:description']").attr("content", infos.join(' / '));
}

function changeTitle(sTitle) {
  sTitle += " | LoLSquare"
  document.title = sTitle;
  $("meta[property='og\\:title']").attr("content", sTitle);
  changeCanonicalUrl();
}

function changeUrl(sPageName, sNewUrl) {
  history.replaceState({
      id: sPageName
  }, 'Loading...', sNewUrl);
}

function changeUrlTab(sTab) {
  var sNewUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
  if (!isNullOrEmpty(sTab))
      sNewUrl += "#" + sTab;
  history.replaceState({
      id: getPageName()
  }, document.title, sNewUrl);
}

function getSelectedTab() {
  var sHashSplitted = window.location.hash.split('#');
  if (sHashSplitted.length > 1)
      return sHashSplitted[1];
}

function changeCanonicalUrl() {
  var sUrl = window.location.href.replace(window.location.hash, "");
  $('link[rel="canonical"]').attr('href', sUrl);
  $("meta[property='og\\:url']").attr("content", sUrl);
}

function getPageName() {
  var s = window.location.pathname.split("/");
  var sPageName = "";
  if (s.length > 1)
      if (s[1].lastIndexOf('.') > -1)
          sPageName = s[1].substring(0, s[1].indexOf('.'));
      else
          sPageName = s[1];
  if (isNullOrEmpty(sPageName))
      sPageName = "Home";
  return normalizePageName(sPageName);
}

function getQueryString() {
  var sQueryString = '';
  var s = window.location.pathname.split("/");
  if (s.length > 2)
      for (var i = 2; i < s.length; i++) {
          if (i > 2)
              sQueryString += "/";
          sQueryString += s[i];
      }
  return sQueryString + window.location.hash;
}

function getQueryStringByPos(iPos) {
  if (iPos == null) iPos = 0;
  iPos++;
  var s = window.location.pathname.substring(1).split("/");
  if (s.length > iPos)
      return decodeURI(s[iPos]);
  return '';
}

function queryStringContains(s) {
  var sQueryString = getQueryString().toLowerCase();
  return sQueryString.indexOf(s.toLowerCase()) !== -1;
}

function isLocalhost() {
  // return getRootDomain() == "localhost";
  return true;
}

function getSubDomain() {
  var full = getFullDomain();
  var root = getRootDomain();
  var subdomain = full.replace(root, "");
  return subdomain.replace(".", "");
}

function getRootDomain(url) {
  var domain = getFullDomain(url),
      splitArr = domain.split('.'),
      arrLen = splitArr.length;
  if (arrLen > 2) {
      domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
      if (splitArr[arrLen - 1].length == 2 && splitArr[arrLen - 1].length == 2) {
          domain = splitArr[arrLen - 3] + '.' + domain;
      }
  }
  return domain;
}

function getFullDomain(url) {
  if (isNullOrEmpty(url))
      url = window.location.hostname;
  var hostname;
  if (url.indexOf("://") > -1)
      hostname = url.split('/')[2];
  else
      hostname = url.split('/')[0];
  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];
  return hostname;
}

function shortenLink(url) {
  if (isNullOrEmpty(url))
      return "";
  var split = url.split('www.');
  if (split.length > 1)
      return split.pop();
  split = url.split("://");
  if (split.length > 1)
      return split.pop();
  return url;
}

function cleanUrl() {
  if (getPageName().toLowerCase().startsWith("main"))
      history.replaceState({
          id: ""
      }, 'LoLSquare - ' + babel("base.lolsquaresubtitle"), getPageLink(""));
}

function normalizePageName(sPageName) {
  if (!isNullOrEmpty(sPageName))
      for (var i = 0; i < pagesColl.length; i++)
          if (sPageName.toLowerCase() == pagesColl[i].toLowerCase())
              return pagesColl[i];
  return sPageName;
}

function forceReload() {
  location.reload(true);
}

function setRegionElements() {
  var region = getRegion();
  if (isNullOrEmpty(region)) {
      $header.find("#ddRegion").text("--");
      $(".region-change-text").text('None');
      pulseChangeRegion();
  } else {
      $header.find("#ddRegion").text(region);
      $(".region-change-text").text(region);
  }
}

function teardownOnNavigate() {
  materializeMaincontentTeardown();
  DestroyItemsTooltips();
  offAllNavigateOnly();
}
var $notificationsButton;
var $notificationsCenter;
var Notifications = {
  list: [],
  templates: null,
  interval: null,
  bNewNotifications: false
};

function NotificationInit() {
  Notifications.templates = {
      3: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-open",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      7: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-tombstone",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      8: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-open",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      10: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-open",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      19: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-file-check",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      20: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-file-times",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      1: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-ticket",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      22: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-closed",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      21: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-ticket",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      14: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-user-plus",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      15: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-closed",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      16: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-closed",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      18: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-hourglass-half",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      9: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-open",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      11: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-open",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      12: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-open",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      13: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-door-closed",
          params: [{
              iEntityType: EntityType.Summoner
          }, {
              iEntityType: EntityType.Team
          }]
      },
      17: {
          iImageType: EntityType.Team,
          sIcon: "fal fa-hourglass-half",
          params: [{
              iEntityType: EntityType.Team
          }]
      },
      23: {
          sIcon: "fal fa-exclamation-triangle",
          sOnclick: getPageOnclick("FAQ", "3"),
          sHref: getPageLink("FAQ", "3")
      }
  };
  $notificationsCenter = $("#idNotificationsCenter");
  NotificationDone();
}

function NotificationUpdate() {
  $header.find("#idNotificationsBtn").empty();
  $notificationsButton = null;
  if (isUserLogged()) {
      $header.find("#idNotificationsBtn").append('<i class="far fa-bell"></i>');
      $notificationsButton = $header.find("#idNotificationsBtn > i");
      toggleNotificationsCenterVisibility(false);
  }
}

function NotificationStart() {
  if (Notifications.interval) return;
  NotificationCallGetNotifications();
  Notifications.interval = setInterval(NotificationCallGetNotifications, Configuration.GetNewNotificationDelaySeconds * 1000);
}

function NotificationStop() {
  clearInterval(Notifications.interval);
}

function showNotificationsCenter() {
  toggleNotificationsCenterVisibility(true);
  hideUserCenter();
}

function hideNotificationsCenter(e) {
  if (e == null || (!$notificationsCenter.is(e.target) && $notificationsCenter.has(e.target).length === 0)) {
      toggleNotificationsCenterVisibility(false);
      if (Notifications.bNewNotifications)
          NotificationCallNotificationsSeen();
  }
}

function toggleNotificationsCenterVisibility(bShow) {
  if ($notificationsButton)
      $notificationsButton.unbind("mousedown");
  $(window).unbind("mousedown.NotificationsCenter");
  if (bShow) {
      $notificationsCenter.show();
      if ($notificationsButton)
          $notificationsButton.bind("mousedown", function() {
              hideNotificationsCenter();
          });
      $(window).bind("mousedown.NotificationsCenter", function(event) {
          event.stopPropagation();
          hideNotificationsCenter(event);
      });
  } else {
      $notificationsCenter.hide();
      if ($notificationsButton)
          $notificationsButton.bind("mousedown", function(event) {
              event.stopPropagation();
              showNotificationsCenter();
          });
  }
}

function NotificationTestHandling() {
  for (var ind in NotificationType)
      if (!(NotificationType[ind] in Notifications.templates))
          toastError("Notification type not handled " + ind);
}

function NotificationPend() {
  $notificationsCenter.find(".preloader-wrapper").addClass("active");
}

function NotificationDone() {
  $notificationsCenter.find(".preloader-wrapper").removeClass("active");
}

function NotificationCallGetNotifications() {
  if (!isUserLogged()) return;
  var ajaxObj = {
      sCode: 'Notification',
      sSvcPage: 'User',
      sMethod: 'GetNewNotifications'
  };
  var fnHandlers = {
      fnPend: function() {
          NotificationPend();
      },
      fnDone: function() {
          NotificationDone();
      },
      fnOs: function(ajax, obj) {
          if (!obj.value) return;
          for (var i in obj.value)
              if (jQuery.inArray(obj.value[i], Notifications.list) < 0) {
                  Notifications.list.push(obj.value[i]);
              }
          Notifications.list.sort(function(a, b) {
              return b.lNotificationId - a.lNotificationId;
          });
          NotificationPopulateNotificationsCenter();
      }
  };
  ajaxCallObj(ajaxObj, {
      sLastNotificationId: NotificationGetLastNotificationId()
  }, fnHandlers);
}

function NotificationPopulateNotificationsCenter() {
  var $notificationsContainer = $header.find("#idNotificationsBtn");
  var $notificationsCollection = $("#idNotificationsCollection");
  $notificationsCollection.empty();
  $notificationsContainer.find('.badge').remove();
  if (!isUserLogged()) return;
  if (Notifications.list.length === 0)
      return;
  var iNumNewNotifications = 0;
  for (var i in Notifications.list) {
      $notificationsCollection.append(NotificationCreateHtml(Notifications.list[i]));
      if (Notifications.list[i].lNotificationId > WebUser.summoner.lLastSeenNotification) {
          iNumNewNotifications++;
      }
  }
  Notifications.bNewNotifications = false;
  if (iNumNewNotifications > 0) {
      Notifications.bNewNotifications = true;
      if (iNumNewNotifications > 99) iNumNewNotifications = '99+';
      $notificationsContainer.append('<span class="new badge red white-text" data-badge-caption="">' + iNumNewNotifications + '</span>');
      $notificationsButton.removeClass('far').addClass('fas');
  } else
      $notificationsButton.removeClass('fas').addClass('far');
}

function NotificationCreateHtml(objNotification) {
  if (!(objNotification.iNotificationType in Notifications.templates))
      return "<li class=\"collection-item\">Notification type not handled: " + objNotification.iNotificationType + "</li>";
  if (!objNotification.bProcessed) {
      var template = Notifications.templates[objNotification.iNotificationType];
      if (template.iImageType == EntityType.Team)
          objNotification.sSrcImage = getTeamLogoLinkById(objNotification.targetTeam.sIcon);
      else if (template.iImageType == EntityType.Summoner)
          objNotification.sSrcImage = getUrlProfileIcon(null, objNotification.targetSummoner.iProfileIconId);
      else
          objNotification.sSrcImage = cdnLink('/images/logo/apple-touch-icon.png');
      objNotification.sIcon = template.sIcon;
      objNotification.sInnerHtml = "";
      var split = babel("notification." + getPropertyNameFromEnum(objNotification.iNotificationType, NotificationType)).split('#');
      for (var i = 0; i < split.length - 1; i++) {
          objNotification.sInnerHtml += split[i];
          if (template.params[i].iEntityType === EntityType.Summoner)
              objNotification.sInnerHtml += '<a class="link" ' + getSummonerNavigations(objNotification.targetSummoner) + '><b>' + objNotification.targetSummoner.sName + '</b></a>';
          if (template.params[i].iEntityType === EntityType.Team)
              objNotification.sInnerHtml += '<a class="link" ' + getTeamNavigations(objNotification.targetTeam) + '><b>' + objNotification.targetTeam.sName + '</b></a>';
      }
      objNotification.sInnerHtml += split[split.length - 1];
      if (!isNullOrEmpty(template.sOnclick)) {
          objNotification.sOnclick = template.sOnclick;
          objNotification.sHref = template.sHref;
      }
      objNotification.bProcessed = true;
  }
  return getTemplateHtml(NotificationListItemItemTemplate, objNotification);
}

function NotificationGetLastNotificationId() {
  if (Notifications.list.length === 0) return 0;
  return Notifications.list[0].lNotificationId;
}

function NotificationCallNotificationsSeen() {
  if (!isUserLogged()) return;
  var lLastNotificationId = NotificationGetLastNotificationId();
  if (lLastNotificationId <= 0) return;
  var ajaxObj = {
      sCode: 'Notification',
      sSvcPage: 'User',
      sMethod: 'SetSeenNotifications'
  };
  var fnHandlers = {
      fnPend: function() {
          NotificationPend();
      },
      fnDone: function() {
          NotificationDone();
      },
      fnOs: function(ajax, obj) {
          if (WebUser.summoner)
              WebUser.summoner.lLastSeenNotification = ajax.params.sLastNotificationId;
          NotificationPopulateNotificationsCenter();
      }
  };
  ajaxCallObj(ajaxObj, {
      sLastNotificationId: lLastNotificationId
  }, fnHandlers);
}

function setActiveMenu(sPageName) {
  $nav.find("a").removeClass('active');
  if (isNullOrEmpty(sPageName))
      return;
  var spage = sPageName.toLowerCase();
  if (spage == "summoner" || spage == "team")
      $nav.find(".nav-" + spage + "-" + getQueryStringByPos(0)).addClass("active");
  else
      $nav.find(".nav-" + spage).addClass('active');
}

function closeSideNav() {
  if (window.innerWidth < 993)
      $nav.sidenav('close');
}

function showMySummonerSideNav() {
  var bFirstTime = true;
  if ($nav.find('.mysummonerli').length)
      bFirstTime = false;
  $nav.find('.mysummonerli').remove();
  if (!WebUser.summoner) return;
  var sHtml = getTemplateHtml(NavLinkItemTemplate, {
      sCss: "account-only mysummonerli nav-summoner-" + WebUser.summoner.iSummonerId + (bFirstTime ? " slide-down not-as-guest" : ""),
      sStyle: "",
      sTitle: WebUser.summoner.sName,
      sOnclick: getSummonerPageOnclick(WebUser.summoner),
      sHref: getSummonerPageLink(WebUser.summoner),
      sImage: getUrlProfileIcon(null, null, WebUser.summoner),
      sText: WebUser.summoner.sName,
      sId: 'mySummonerLeftItem'
  });
  sHtml += '<div class="mysummonerli divider not-as-guest"></div>';
  $nav.find(".divider").first().after(sHtml);
  setActiveMenu(getPageName());
}

function callLoadMyTeamsSideNav() {
  callLoadMyTeams('Header');
}

function showMyTeamsSideNav() {
  var bFirstTime = true;
  if ($nav.find('.myteamsli').length)
      bFirstTime = false;
  $nav.find('.myteamsli').remove();
  if (WebUser.teams == null || WebUser.teams.length == 0) return;
  var sHtml = "";
  for (var ind in WebUser.teams) {
      var team = WebUser.teams[ind];
      sHtml += getTemplateHtml(NavLinkItemTemplate, {
          sCss: "account-only myteamsli nav-team-" + team.iTeamId + (bFirstTime ? " slide-down not-as-guest" : ""),
          sStyle: "",
          sTitle: team.sTag,
          sOnclick: "navigate('Team', '" + team.iTeamId + "/" + vEncode(team.sTag) + "/" + vEncode(team.sName) + "');return false;",
          sHref: getTeamPageLink(team),
          sImage: getTeamLogoLinkById(team.sIcon),
          sText: team.sTag
      });
  }
  sHtml += '<div class="myteamsli divider not-as-guest"></div>';
  if ($nav.find('.mysummonerli').length)
      $nav.find(".mysummonerli").last().after(sHtml);
  else
      $nav.find("a").first().before(sHtml);
  setActiveMenu(getPageName());
}

function menuAdmin() {
  $nav.find(".admin").remove();
  if (!WebUser.bIsAdmin) return;
  var sHtml = '<div class="account-only admin divider"></div>';
  sHtml += getTemplateHtml(NavLinkItemTemplate, {
      sCss: "account-only admin",
      sTitle: "Admin panel",
      sOnclick: "navigate('PageX');return false;",
      sHref: getPageLink('PageX'),
      sIcon: "far fa-user-shield",
      sText: "Admin panel"
  });
  $nav.find(".menu").children().not(".nav-sub-item").last().after(sHtml);
  if (!windowLarge())
      $nav.find("a").removeClass("waves-effect");
}

function setNotificationNav(sPageName, bNotify) {
  if (isNullOrEmpty(sPageName))
      return;
  var spage = sPageName.toLowerCase();
  if (spage == "summoner" || spage == "team")
      return;
  var htmlDot = '<div class="circle orange accent-3 pulse" style="height: 6px;width: 6px;left: -8px;margin-left: -6px;"></div>';
  $nav.find(".nav-" + spage).find(".circle.orange").remove();
  if (bNotify)
      $nav.find(".nav-" + spage).prepend(htmlDot);
}

function userSignIn() {
  var sSummonerName = $("#loginSummonerName").val();
  var sPassword = $("#loginPassword").val();
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'User',
      sMethod: 'SignIn',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function() {
          pendUserCenter();
      },
      fnDone: function() {
          doneUserCenter();
      },
      fnOs: function(ajax, obj) {
          $("#loginSummonerName").val("");
          $("#loginPassword").val("");
          $("#loginErrorSuggestion").addClass("dnone");
          hideUserCenter();
          setLocal("user", "token", {
              id: obj.value.iSummonerId,
              region: getRegion(true),
              token: obj.value.sToken
          });
          userDataReceived(ajax, obj);
      },
      fnOe: function() {
          userSignOut();
          $("#loginErrorSuggestion").removeClass("dnone");
      }
  };
  ajaxCallObj(ajaxObj, {
      sSummonerName: sSummonerName,
      sPassword: sPassword
  }, fnHandlers);
}

function userRestoreSignIn() {
  if (!isUserLogged()) {
      doneRestoreSignIn();
      return;
  }
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'User',
      sMethod: 'RestoreSignIn',
      bVProgress: true
  };
  var fnHandlers = {
      fnOs: function(ajax, obj) {
          userDataReceived(ajax, obj);
      },
      fnOe: function(ajax, obj) {
          userSignOut();
      }
  };
  ajaxCallObj(ajaxObj, null, fnHandlers);
}

function doneRestoreSignIn() {
  doneUserCenter();
  navigate(getPageName(), getQueryString(), true);
  facadeRemove();
}

function userDataReceived(ajax, obj) {
  if (obj.value && obj.value.iSummonerId > 0) {
      WebUser.summoner = obj.value;
      if (obj.AdditionalData) {
          WebUser.curriculum = obj.AdditionalData.Curriculum;
          WebUser.achievements = obj.AdditionalData.achievements;
          WebUser.iRegion = obj.AdditionalData.iRegion;
          WebUser.bHasTeam = obj.AdditionalData.bHasTeam;
          WebUser.bIsAdmin = obj.value.isAdmin;
          signInWelcomeMessage(obj.AdditionalData.dtLastLogin);
      }
  }
  updateHeader();
  callLoadMyTeamsSideNav();
  if (ajax.sMethod !== "RestoreSignIn")
      callOnSignIn(true);
  applyGuestMode();
  NotificationStart();
  UserLiveGame();
}

function userSignOut(bRegards) {
  if (bRegards)
      toastSuccess(babel('toast.seeyousoon'), 'fad fa-flower-daffodil');
  delLocal("user", "token");
  abortAllPendingAjaxCalls();
  NotificationStop();
  initializeWebUser();
  applyGuestMode();
  updateHeader();
  callOnSignIn();
  doneUserCenter();
}

function isUserLogged(bConErrori) {
  var userToken = getLocal("user", "token");
  if (userToken && userToken.id > 0)
      return true;
  if (bConErrori)
      toastInfo(babel('toast.notloggedinerror'), 'fad fa-user-circle');
  return false;
}

function isUserGuest(bConErrori) {
  if (WebUser.iRegion === getRegion(true))
      return false;
  if (bConErrori)
      toastInfo(babel('toast.nothomeregionerror'), 'fad fa-globe-europe');
  return true;
}

function applyGuestMode() {
  if (isUserLogged() && isUserGuest())
      $app.addClass("guest");
  else
      $app.removeClass("guest");
}

function signInWelcomeMessage(dtLastLogin) {
  var sRelativeTime = getRelativeTime(dtLastLogin, 24 * 60 * 60 * 1000, 10 * 365 * 24 * 60 * 60 * 1000);
  if (!isNullOrEmpty(sRelativeTime))
      toastSuccess(babel('toast.welcomeback', null, {
          sRelativeTime: sRelativeTime
      }), 'fad fa-flower-daffodil');
}

function registrationWelcomeModal() {
  openModal('welcomeModal', getTemplateHtml(Modal_WelcomeItemTemplate), false);
}
var urlLoLSquareCDN = "https://static.lolsquare.com";

function cdnLink(sLink) {
  if (!isNullOrEmpty(sLink)) {
      if (!sLink.startsWith("/"))
          sLink = "/" + sLink;
  } else
      sLink = "/images/Transparent.png";
  return urlLoLSquareCDN + sLink;
}
var defaultStaticDataVersion = '9.17.1';
var ddragon = 'https://ddragon.leagueoflegends.com/';
var ddragoncdn = "https://ddragon.leagueoflegends.com/cdn";
var StaticData;
var ChampionList;
var ItemList;
var SummonerSpellsList;
var RunesList;

function InitializeStaticData() {
  if (!StaticData)
      StaticData = getLocal("ddragon", 'StaticData');
  if (!StaticData)
      getJSON(ddragon + 'realms/' + getRegion().toLowerCase() + '.json', function(data) {
          StaticData = data;
          setLocal("ddragon", 'StaticData', data, 24 * 60 * 60);
      });
  if (StaticData) {
      var sLang = getDDragonLanguage();
      ddragoncdn = StaticData.cdn;
      defaultStaticDataVersion = StaticData.v;
      loadDDragonList("ChampionList", ddragoncdn + '/' + getDDragonVersion("Champion") + '/data/' + sLang + '/champion.json');
      loadDDragonList("ItemList", ddragoncdn + '/' + getDDragonVersion("Item") + '/data/' + sLang + '/item.json');
      loadDDragonList("SummonerSpellsList", ddragoncdn + '/' + getDDragonVersion("SummonerSpells") + '/data/' + sLang + '/summoner.json');
      loadDDragonList("RunesList", ddragoncdn + '/' + getDDragonVersion("Runes") + '/data/' + sLang + '/runesReforged.json');
      loadQueuesList();
  }
}

function loadDDragonList(sListName, sUrl) {
  if (!window[sListName])
      window[sListName] = getLocal("ddragon", sListName);
  if (window[sListName] && window[sListName].version == getDDragonVersion(sListName.replace("List", "")))
      return;
  getJSON(sUrl, function(data) {
      window[sListName] = data;
      setLocal("ddragon", sListName, data);
  });
}

function getDDragonVersion(sName) {
  var sVersion = defaultStaticDataVersion;
  if (sName == "Champion") {
      if (StaticData && StaticData.n && !isNullOrEmpty(StaticData.n.champion))
          sVersion = StaticData.n.champion;
  } else if (sName == "Item") {
      if (StaticData && StaticData.n && !isNullOrEmpty(StaticData.n.item))
          sVersion = StaticData.n.item;
  } else if (sName == "SummonerSpells") {
      if (StaticData && StaticData.n && !isNullOrEmpty(StaticData.n.summoner))
          sVersion = StaticData.n.summoner;
  } else if (sName == "ProfileIcon") {
      if (StaticData && StaticData.n && !isNullOrEmpty(StaticData.n.profileicon))
          sVersion = StaticData.n.profileicon;
  }
  return sVersion;
}

function getDDragonLanguage() {
  var sLangKey = getCurrentLanguage();
  for (var i in LanguageList)
      if (LanguageList[i].key == sLangKey)
          return LanguageList[i].ddragon;
  return "en_US";
}

function loadQueuesList() {
  var sLangKey = getCurrentLanguage();
  if (sLangKey == "EN") return;
  if (getLocalVersion("ddragon", "QueuesList") == svnRevision) {
      QueuesList = getLocal("ddragon", "QueuesList");
      return;
  }
  getJSONCDN('/languages/queues-' + getCurrentLanguage().toLowerCase() + '.json?' + svnRevision, function(data) {
      QueuesList = data;
      setLocal("ddragon", "QueuesList", data);
  }, true);
}

function resetDDragonStorage() {
  delLocal("ddragon", 'StaticData');
  delLocal("ddragon", 'ChampionList');
  delLocal("ddragon", 'ItemList');
  delLocal("ddragon", 'SummonerSpellsList');
  delLocal("ddragon", 'RunesList');
  delLocal("ddragon", 'QueuesList');
}

function LoadChampion(key) {
  if (isNullOrEmpty(key)) return;
  var champion = getLocal("ddragon", key);
  if (!champion || champion.version != getDDragonVersion("Champion"))
      getJSON(ddragoncdn + '/' + getDDragonVersion("Champion") + '/data/' + getDDragonLanguage() + '/champion/' + key + '.json', function(data) {
          champion = data;
          setLocal('ddragon', key, data);
      });
  return champion;
}

function GetChampionNameById(id, bEscaped) {
  if (ChampionList)
      for (var i in ChampionList.data)
          if (ChampionList.data[i].key == id) {
              if (bEscaped)
                  return ChampionList.data[i].name.replace('\'', '\\\'');
              return ChampionList.data[i].name;
          }
  return '';
}

function GetChampionKeyByName(name) {
  if (ChampionList)
      for (var i in ChampionList.data)
          if (ChampionList.data[i].name.standardize() == name.standardize())
              return ChampionList.data[i].id;
  return '';
}

function GetChampionIconById(id) {
  if (ChampionList)
      for (var i in ChampionList.data)
          if (ChampionList.data[i].key == id)
              return ddragoncdn + '/' + ChampionList.version + '/img/champion/' + ChampionList.data[i].image.full;
  return cdnLink('/images/Transparent.png');
}

function GetChampionLoadingById(id, skin) {
  if (!skin)
      skin = 0;
  return ddragoncdn + '/img/champion/loading/' + id + '_' + skin + '.jpg';
}

function GetChampionSplashById(id, skin) {
  if (!skin)
      skin = 0;
  return ddragoncdn + '/img/champion/splash/' + id + '_' + skin + '.jpg';
}

function GetItemNameById(id) {
  if (ItemList.data[id])
      return ItemList.data[id].name;
  return '';
}

function GetItemImgTagById(id) {
  var sStyle = '';
  var sName = '';
  if (ItemList.data[id]) {
      sStyle = "style=\"";
      sStyle += "width: " + ItemList.data[id].image.w + "px;";
      sStyle += "height: " + ItemList.data[id].image.h + "px;";
      sStyle += "background: url(" + ddragoncdn + '/' + ItemList.version + "/img/sprite/" + ItemList.data[id].image.sprite + ")";
      sStyle += " -" + ItemList.data[id].image.x + "px -" + ItemList.data[id].image.y + "px;\"";
      sName = ItemList.data[id].name;
  }
  var sImgTag = '<img class="item" data-item-id="' + id + '" src="' + cdnLink('/images/Transparent.png') + '" ' + sStyle + ' title="' + sName + '" alt="' + sName + ' icon" />';
  return sImgTag;
}
var _itemCreateTooltipListener = function() {
  ItemCreateTooltip(this);
};
var _itemRemoveTooltipListener = function() {
  ItemRemoveTooltip(this);
};
var listItemTooltipsElement = [];

function InitItemsTooltips(sSelector) {
  sSelector = sSelector || "";
  if (sSelector == "")
      ItemRemoveAllTooltips();
  $mainContent.find(sSelector + " .item").each(function() {
      this.addEventListener("mouseenter", _itemCreateTooltipListener);
      this.addEventListener("mouseleave", _itemRemoveTooltipListener);
      this.addEventListener("focus", _itemCreateTooltipListener, true);
      this.addEventListener("blur", _itemRemoveTooltipListener, true);
  });
}

function DestroyItemsTooltips(sSelector) {
  sSelector = sSelector || "";
  $mainContent.find(sSelector + " .item").each(function() {
      this.removeEventListener("mouseenter", _itemCreateTooltipListener);
      this.removeEventListener("mouseleave", _itemRemoveTooltipListener);
      this.removeEventListener("focus", _itemCreateTooltipListener, true);
      this.removeEventListener("blur", _itemRemoveTooltipListener, true);
  });
}

function ItemCreateTooltip(el) {
  var item = ItemList.data[$(el).data("item-id")];
  if (!item) return;
  var sDescription = item.description;
  for (var i in item.effect)
      sDescription.replace("@" + i + "@", item.effect[i]);
  var sHtml = "";
  sHtml += '<div class="tooltip-item">';
  sHtml += '<img src="' + ddragoncdn + '/' + defaultStaticDataVersion + '/img/item/' + item.image.full + '">';
  sHtml += '<span class="name">' + item.name + '</span>';
  sHtml += '<div>';
  sHtml += babel("base.cost") + ': <span class="amber-text">' + item.gold.total + ' (' + item.gold.base + ')</span>';
  sHtml += '<br>';
  sHtml += babel("base.sell") + ': <span class="amber-text">' + item.gold.sell + '</span>';
  sHtml += '</div>';
  sHtml += '<div class="desc">' + sDescription + '</div>';
  sHtml += '</div>';
  listItemTooltipsElement = listItemTooltipsElement.concat(M.Tooltip.init($(el), {
      enterDelay: 400,
      html: sHtml
  }));
  M.Tooltip.getInstance(el).open();
}

function ItemRemoveTooltip(el) {
  var instance = M.Tooltip.getInstance(el);
  if (!instance) return;
  instance.close()
  instance.destroy();
}

function ItemRemoveAllTooltips() {
  for (var i in listItemTooltipsElement) {
      listItemTooltipsElement[i].close();
      listItemTooltipsElement[i].destroy();
  }
  listItemTooltipsElement = [];
}

function GetSummonerSpellNameById(id) {
  for (var i in SummonerSpellsList.data)
      if (SummonerSpellsList.data[i].key == id)
          return SummonerSpellsList.data[i].name;
  return '';
}

function GetSummonerSpellIconById(id) {
  for (var i in SummonerSpellsList.data)
      if (SummonerSpellsList.data[i].key == id)
          return ddragoncdn + '/' + getDDragonVersion("SummonerSpells") + '/img/spell/' + SummonerSpellsList.data[i].id + '.png';
  return cdnLink('/images/Transparent.png');
}

function GetRuneNameById(id) {
  for (var ramoInd in RunesList) {
      var ramo = RunesList[ramoInd];
      if (ramo.id == id)
          return ramo.name;
      for (var slotInd in ramo.slots) {
          var slot = ramo.slots[slotInd];
          for (var runeInd in slot.runes)
              if (slot.runes[runeInd].id == id)
                  return slot.runes[runeInd].name;
      }
  }
  return '';
}

function GetRuneIconById(id) {
  for (var ramoInd in RunesList) {
      var ramo = RunesList[ramoInd];
      if (ramo.id == id)
          return ddragoncdn + '/img/' + ramo.icon;
      for (var slotInd in ramo.slots) {
          var slot = ramo.slots[slotInd];
          for (var runeInd in slot.runes)
              if (slot.runes[runeInd].id == id)
                  return ddragon + 'cdn/img/' + slot.runes[runeInd].icon;
      }
  }
  return cdnLink('/images/Transparent.png');
}

function GetRuneShortDescById(id) {
  for (var ramoInd in RunesList) {
      var ramo = RunesList[ramoInd];
      if (ramo.id == id)
          return ramo.name;
      for (var slotInd in ramo.slots) {
          var slot = ramo.slots[slotInd];
          for (var runeInd in slot.runes)
              if (slot.runes[runeInd].id == id)
                  return '<b>' + slot.runes[runeInd].name + '</b><br>' + slot.runes[runeInd].shortDesc;
      }
  }
  return babel("base.runedescnotfound");
}

function getUrlProfileIcon(sName, iIcon, summoner) {
  if (summoner) {
      sName = summoner.sName;
      iIcon = summoner.iProfileIconId;
  }
  if (iIcon && iIcon > 0)
      return ddragoncdn + '/' + getDDragonVersion("ProfileIcon") + "/img/profileicon/" + iIcon + ".png";
  if (!isNullOrEmpty(sName))
      return "https://avatar.leagueoflegends.com/" + getRegion() + "/" + sName.standardize() + ".png";
  return ddragoncdn + '/' + getDDragonVersion("ProfileIcon") + "/img/profileicon/0.png";
}
var bStorageSupported = true;

function isStorageSupported() {
  if (!navigator.cookieEnabled) {
      toastError(babel("toast.cookiesdisabled"));
      bStorageSupported = false;
      return bStorageSupported;
  }
  if (typeof Storage === "undefined") {
      toastError(babel("toast.localstoragenotsupported"));
      bStorageSupported = false;
      return bStorageSupported;
  }
  try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
  } catch (e) {
      toastError(babel("toast.localstoragenotsupported"));
      bStorageSupported = false;
      return bStorageSupported;
  }
  return bStorageSupported;
}

function getStorageKey(sModule, sKey) {
  var sName = "lolsquare_" + sModule + "_" + sKey;
  return sName.toLowerCase();
}

function clearAllStorage() {
  if (!bStorageSupported) return;
  localStorage.clear();
  sessionStorage.clear();
  var cookies = document.cookie.split(";");
  for (var i in cookies) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function storageCleaner() {
  for (var i in localStorage)
      if (i.startsWith("lolsquare")) {
          var lsObj = JSON.parse(localStorage[i]);
          if (lsObj.version < 1762) {
              localStorage.removeItem(i);
              continue;
          }
          if (i == "lolsquare_errors_known" && lsObj.version < 2168) {
              localStorage.removeItem(i);
              continue;
          }
      }
}

function askStorageConsent() {
  if (!bStorageSupported) return;
  if (isStorageConsented()) return;
  if (isUserLogged()) {
      consentStorage();
      return;
  }
  if (!$("#storageConsentCard").length)
      $body.append(getTemplateHtml(CookieConsentItemTemplate));
  setTimeout(function() {
      $("#storageConsentCard").addClass("visible");
  }, 200);
  $window.bind("scroll.ConsentStorage", function() {
      consentStorage();
  });
  $window.bind("mouseup.ConsentStorage", function() {
      consentStorage();
  });
}

function consentStorage() {
  if (!isStorageConsented())
      setLocal("storage", "consent", true, null, true);
  $("#storageConsentCard").removeClass("visible");
  $window.unbind("scroll.ConsentStorage");
  $window.unbind("mouseup.ConsentStorage");
}

function revokeStorageConsent() {
  clearAllStorage();
  askStorageConsent();
}

function isStorageConsented() {
  return getLocal("storage", "consent", true) === true;
}

function setLocal(sModule, sKey, data, expirySeconds, bBypassConsent) {
  if (!bBypassConsent)
      if (!isStorageConsented() || !bStorageSupported)
          return;
  if (!expirySeconds || expirySeconds < 1)
      expirySeconds = 365 * 24 * 60 * 60;
  expirySeconds = expirySeconds * 1000;
  var objLS = {
      version: svnRevision,
      creation: timeNow(),
      expiration: timeNow() + expirySeconds,
      data: data
  };
  localStorage.setItem(getStorageKey(sModule, sKey), JSON.stringify(objLS));
}

function getLocal(sModule, sKey, bBypassConsent) {
  if (!bBypassConsent)
      if (!isStorageConsented() || !bStorageSupported)
          return;
  var objLS = JSON.parse(localStorage.getItem(getStorageKey(sModule, sKey)));
  if (!objLS)
      return;
  if (timeToMs(objLS.expiration) < timeNow()) {
      delLocal(sModule, sKey);
      return;
  }
  return objLS.data;
}

function delLocal(sModule, sKey) {
  localStorage.removeItem(getStorageKey(sModule, sKey));
}

function getLocalVersion(sModule, sKey) {
  if (!isStorageConsented() || !bStorageSupported) return;
  var objLS = JSON.parse(localStorage.getItem(getStorageKey(sModule, sKey)));
  if (!objLS)
      return;
  if (timeToMs(objLS.expiration) < timeNow()) {
      delLocal(sModule, sKey);
      return;
  }
  return objLS.version;
}
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function timeToMs(dt) {
  return new Date(dt).getTime();
}

function timeToUTC(dt) {
  return timeToMs(dt) + (new Date().getTimezoneOffset() * 60000);
}

function timeToLocale(dt) {
  return timeToMs(dt) - (new Date().getTimezoneOffset() * 60000);
}

function timeNow() {
  return Date.now();
}

function timeDifferenceFromNow(dt) {
  return timeDifference(dt, timeNow());
}

function timeDifference(dtStart, dtEnd) {
  return timeToMs(dtEnd) - timeToMs(dtStart);
}

function timeHasPassed(dtStart, dtEnd, ms) {
  return timeDifference(dtStart, dtEnd) >= ms;
}

function timeCooldown(dt, msCD) {
  return msCD - timeDifferenceFromNow(dt);
}

function timeAddMs(dt, ms) {
  return new Date(timeToMs(dt) + ms);
}

function timeMsToDays(ms) {
  return Math.round(ms / 1000 / 60 / 60 / 24);
}

function timeDateHasValue(dt) {
  if (!dt) return false;
  return dt && timeToMs(dt) > 0;
}

function timeShow(date, sFormat) {
  if (date == null) {
      if (sFormat.contains("y"))
          sFormat = sFormat.replaceAll("y", "0");
      if (sFormat.contains("M"))
          sFormat = sFormat.replaceAll("M", "0");
      if (sFormat.contains("d"))
          sFormat = sFormat.replaceAll("d", "0");
      if (sFormat.contains("H"))
          sFormat = sFormat.replaceAll("H", "0");
      if (sFormat.contains("m"))
          sFormat = sFormat.replaceAll("m", "0");
      if (sFormat.contains("s"))
          sFormat = sFormat.replaceAll("s", "0");
      return;
  }
  date = new Date(date);
  if (sFormat.contains("yyyy"))
      sFormat = sFormat.replace("yyyy", date.getFullYear().padLeft(4, '0'));
  if (sFormat.contains("yy"))
      sFormat = sFormat.replace("yy", date.getFullYear().padLeft(2, '0').maxLength(2, true));
  if (sFormat.contains("MMMM"))
      sFormat = sFormat.replace("MMMM", babel("time." + monthNames[date.getMonth()]));
  if (sFormat.contains("MMM"))
      sFormat = sFormat.replace("MMM", babel("time." + monthNames[date.getMonth()]).substring(0, 3));
  if (sFormat.contains("MM"))
      sFormat = sFormat.replace("MM", (date.getMonth() + 1).padLeft(2, '0'));
  if (sFormat.contains("dddd"))
      sFormat = sFormat.replace("dddd", babel("time." + dayNames[date.getDay()]));
  if (sFormat.contains("dd"))
      sFormat = sFormat.replace("dd", date.getDate().padLeft(2, '0'));
  if (sFormat.contains("HH"))
      sFormat = sFormat.replace("HH", date.getHours().padLeft(2, '0'));
  if (sFormat.contains("mm"))
      sFormat = sFormat.replace("mm", date.getMinutes().padLeft(2, '0'));
  if (sFormat.contains("ss"))
      sFormat = sFormat.replace("ss", date.getSeconds().padLeft(2, '0'));
  return sFormat;
}

function getRelativeTime(date, msMinTimeSpan, msMaxTimeSpan) {
  if (!timeDateHasValue(date)) return '';
  var difference = timeDifferenceFromNow(date);
  if (msMinTimeSpan != null && difference < msMinTimeSpan)
      return '';
  if (msMaxTimeSpan != null && difference > msMaxTimeSpan)
      return '';
  var iXPassed = 0;
  var sStyle = "";
  var bPast = difference > 0;
  if (difference < 0)
      difference *= -1;
  difference /= 1000;
  var rtf = new Intl.RelativeTimeFormat(getCurrentLanguage(), {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "long"
  });
  if (difference < 60) {
      sStyle = "second";
      iXPassed = difference;
  } else if (difference < 60 * 60) {
      sStyle = "minute";
      iXPassed = difference / 60;
  } else if (difference < 24 * 60 * 60) {
      sStyle = "hour";
      iXPassed = difference / (60 * 60);
  } else if (difference < 7 * 24 * 60 * 60) {
      sStyle = "day";
      iXPassed = difference / (24 * 60 * 60);
  } else if (difference < 30 * 24 * 60 * 60) {
      sStyle = "week";
      iXPassed = difference / (7 * 24 * 60 * 60);
  } else if (difference < 365 * 24 * 60 * 60) {
      sStyle = "month";
      iXPassed = difference / (30 * 24 * 60 * 60);
  } else {
      sStyle = "year";
      iXPassed = difference / (365 * 24 * 60 * 60);
  }
  if (bPast)
      iXPassed *= -1;
  return rtf.format(parseInt(iXPassed), sStyle);
}

function getRelativeTimeWithStyle(date, msMinTimeSpan, msMaxTimeSpan, style) {
  if (!timeDateHasValue(date)) return '';
  var difference = timeDifferenceFromNow(date);
  if (msMinTimeSpan != null && difference < msMinTimeSpan)
      return '';
  if (msMaxTimeSpan != null && difference > msMaxTimeSpan)
      return '';
  var iXPassed = 0;
  var bPast = difference > 0;
  if (difference < 0)
      difference *= -1;
  difference /= 1000;
  var rtf = new Intl.RelativeTimeFormat(getCurrentLanguage(), {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "long"
  });
  if (style == "day")
      iXPassed = difference / (24 * 60 * 60);
  if (bPast)
      iXPassed *= -1;
  var sVal = rtf.format(parseInt(iXPassed), style);
  if (!isNullOrEmpty(sVal))
      sVal = sVal.charAt(0).toUpperCase() + sVal.slice(1)
  return sVal;
}

function getAmountOfTime(ms) {
  ms = parseInt(ms);
  var secondsPast = ms / 1000;
  var sTime = "";
  var secDay = 24 * 60 * 60;
  var secHour = 60 * 60;
  var secMinute = 60;
  if (secondsPast > secDay) {
      sTime += Math.floor(secondsPast / secDay) + babel("time.day", 's') + " ";
      secondsPast = secondsPast % secDay;
  }
  if (secondsPast > secHour) {
      sTime += Math.floor(secondsPast / secHour) + babel("time.hour", 's') + " ";
      secondsPast = secondsPast % secHour;
  }
  if (secondsPast > secMinute) {
      sTime += Math.floor(secondsPast / secMinute) + babel("time.minute", 's') + " ";
      secondsPast = secondsPast % secMinute;
  }
  sTime += Math.round(secondsPast) + babel("time.second", 's');
  return sTime;
}

function getDateFromInput(selector) {
  var tsDate = 0;
  var sSelectedDate = $(selector).val();
  if (isNullOrEmpty(sSelectedDate))
      return tsDate;
  var splitDate = sSelectedDate.split("/");
  if (splitDate.length === 3)
      tsDate = timeToMs(new Date(splitDate[2], splitDate[1] - 1, splitDate[0]));
  return tsDate;
}

function getTimeFromInput(selector) {
  var tsTime = 0;
  var sSelectedTime = $(selector).val();
  if (isNullOrEmpty(sSelectedTime))
      return tsTime;
  var splitTime = sSelectedTime.split(':');
  if (splitTime.length === 2)
      tsTime = (splitTime[0] * 60 * 60 * 1000) + (splitTime[1] * 60 * 1000);
  return tsTime;
}
var $toastsContainer;
var toastNumber = 0;

function createToastObject(desc, type, icon) {
  var sId = getToastId();
  var toast = {
      sId: sId,
      sOnClick: 'closeToast(\'' + sId + '\')',
      sColor: '',
      sIcon: icon,
      sText: desc,
      sActionsHtml: '',
      iType: type || ToastType.Error
  };
  switch (toast.iType) {
      case ToastType.Info:
          toast.sColor = 'blue';
          break;
      case ToastType.Success:
          toast.sColor = 'green';
          break;
      case ToastType.Warning:
          toast.sColor = 'yellow';
          break;
      default:
          toast.sColor = 'red';
          break;
  }
  if (isNullOrEmpty(toast.sIcon))
      switch (toast.iType) {
          case ToastType.Info:
              toast.sIcon = 'fad fa-info-circle';
              break;
          case ToastType.Success:
              toast.sIcon = 'fad fa-check-circle';
              break;
          case ToastType.Warning:
              toast.sIcon = 'fad fa-exclamation-circle';
              break;
          default:
              toast.sIcon = 'fad fa-exclamation-triangle';
              break;
      }
  if (isNullOrEmpty(toast.sText)) toast.sText = "Unknown error.";
  else if (toast.sText == "0: ") toast.sText = "Server error.";
  if (!isNullOrEmpty(toast.sActionsHtml))
      toast.sOnClick = '';
  return toast;
}

function appendToast(objToast) {
  console.log('%cLoLSquare message: ' + objToast.sText, 'background: ' + hexColorPalette(objToast.sColor, "200") + ';padding:2px 6px;border-radius:3px;');
  if (!$toastsContainer) {
      alert(objToast.iType + " - " + objToast.sText);
      return;
  }
  closeToastByText(objToast.sText);
  $toastsContainer.append(getTemplateHtml(ToastItemTemplate, objToast));
  if (isNullOrEmpty(objToast.sActionsHtml)) {
      var tsMin = 8 * 1000;
      if (objToast.iType === ToastType.Success)
          tsMin = 3 * 1000;
      var tsDuration = Math.min(Math.max(objToast.sText.length * 60, 20000), tsMin);
      setTimeout(function() {
          closeToast(objToast.sId);
      }, tsDuration);
  }
}

function toastError(desc, icon) {
  appendToast(createToastObject(desc, ToastType.Error, icon));
}

function toastInfo(desc, icon) {
  appendToast(createToastObject(desc, ToastType.Info, icon));
}

function toastWarning(desc, icon) {
  appendToast(createToastObject(desc, ToastType.Warning, icon));
}

function toastSuccess(desc, icon) {
  appendToast(createToastObject(desc, ToastType.Success, icon));
}

function toastWithButton(type, desc, icon, htmlButton) {
  var objToast = createToastObject(desc, type, icon);
  objToast.sActionsHtml = htmlButton;
  appendToast(objToast);
}

function toastUpdateApp() {
  var toast = {
      sId: getToastId(),
      sOnClick: "",
      sColor: "blue-grey",
      sIcon: "fad fa-sync",
      sText: babel("toast.updateavailable"),
      sActionsHtml: createToastButton(babel("base.refresh"), 'forceReload()'),
      bPersistent: true
  };
  appendToast(toast);
}

function toastOffline() {
  var toast = {
      sId: "toast_offline",
      sOnClick: "",
      sColor: "blue-grey",
      sIcon: "fad fa-wifi-slash",
      sText: babel("toast.offline"),
      bPersistent: true
  };
  $("#toast_offline").remove();
  appendToast(toast);
}

function toastAchievementUnlocked(objAchievement) {
  var sId = getToastId();
  var toast = {
      sId: sId,
      sOnClick: 'closeToast(\'' + sId + '\')',
      sColor: "teal",
      sText: babel("toast.achievementunlocked"),
      sAchievementName: objAchievement.title,
      sAchievementHtml: getTemplateHtml(AchievementItemTemplate, {
          sCss: "teal lighten-2",
          sEmoji: objAchievement.emoji
      })
  };
  appendToast(toast);
}

function getToastId() {
  toastNumber++;
  return 'toast' + toastNumber;
}

function closeToast(id) {
  var iHideTimeout = 200;
  if (!isNullOrEmpty(id)) {
      if ($("#" + id).hasClass("persistent")) return;
      $('#' + id).slideUp(iHideTimeout);
      return;
  }
  var divDiv = $(event.target);
  if (divDiv.hasClass("persistent")) return;
  if (divDiv.parent().is($toastsContainer))
      divDiv.slideUp(iHideTimeout);
  else
      divDiv.parent().slideUp(iHideTimeout);
}

function clearToasts() {
  $toastsContainer.children.not(".persistent").remove();
}

function showMessagesNoErrors(obj) {
  var bNoError = true;
  if (hasSome(obj.messages))
      for (var i in obj.messages) {
          if (obj.messages[i].messageType == ToastType.Error)
              bNoError = false;
          messageToToast(obj.messages[i]);
      }
  return bNoError;
}

function messageToToast(message) {
  if (!message) return;
  if (!isNullOrEmpty(message.sDescription))
      appendToast(createToastObject(message.sDescription, message.messageType));
  toastCodeAction(message.messageCode, message.messageType);
}

function toastCodeAction(code, type) {
  if (!code) return;
  switch (code) {
      case ToastCode.None:
          break;
      case ToastCode.AuthenticationError:
          userSignOut();
          break;
      case ToastCode.BindingNotFound:
          mbsBindingNotFound();
          break;
      default:
          break;
  }
  switch (type) {
      case ToastType.Info:
          toastInfo(babel("servertoast." + code));
          break;
      case ToastType.Success:
          toastSuccess(babel("servertoast." + code));
          break;
      case ToastType.Warning:
          toastWarning(babel("servertoast." + code));
          break;
      default:
          toastError(babel("servertoast." + code));
          break;
  }
}

function closeToastByText(sText) {
  $toastsContainer.find('.lolsquare-toast .card-content p:contains("' + sText + '")').closest(".lolsquare-toast").remove();
}

function createToastButton(text, sFn) {
  if (isNullOrEmpty(sFn))
      sFn = "closeToast()";
  return '<a onclick="' + sFn + '" class="btn-flat">' + text + '</a>';
}
String.prototype.standardize = function() {
  if (this)
      return this.replace(/\+/g, " ").replace(/ /g, "").toLowerCase();
  return "";
};
String.prototype.maxLength = function(iLength, bRemoveExcessLeft) {
  var str = this;
  if (str.length > iLength)
      if (bRemoveExcessLeft)
          return str.substring(str.length - iLength, str.length);
      else
          return str.substring(0, iLength);
};
String.prototype.replaceAll = function(searchStr, replaceStr) {
  var str = this;
  if (str.indexOf(searchStr) === -1)
      return str;
  return (str.replace(searchStr, replaceStr)).replaceAll(searchStr, replaceStr);
};

function isObjectEmpty(obj) {
  if (obj)
      for (var key in obj) {
          if (obj.hasOwnProperty(key))
              return false;
      }
  return true;
}

function isNullOrEmpty(str) {
  if (!str)
      return true;
  if ((typeof str === 'string' || str instanceof String) && str.trim() === "") return true;
  return false;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function materializeInitialization() {
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
  $('.tooltipped').tooltip();
  $('select').formSelect();
  $('input[data-length], textarea[data-length]').characterCounter();
}

function materializeMaincontentTeardown() {
  $(".modal.open").not("#" + sModalBindId).modal("close");
  try {
      $mainContent.find('.tabs').tabs('destroy');
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
  try {
      $mainContent.find('.modal').modal('destroy');
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
  try {
      $mainContent.find('select').formSelect('destroy');
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
  try {
      $mainContent.find('.collapsible').collapsible('destroy');
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
  try {
      materializeTooltipTeardown(null, $mainContent);
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
  try {
      $mainContent.find('.dropdown-trigger').dropdown('close').dropdown('destroy');
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
  try {
      $mainContent.find('.materialboxed').materialbox('close').materialbox('destroy');
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
  try {
      $mainContent.find('.autocomplete').autocomplete('close').autocomplete('destroy');
  } catch (e) {
      clientErrorHandler("materializeMaincontentTeardown", "library-utility", "", "", e);
  }
}

function materializeTooltipTeardown(sSelector, el) {
  var tooltips;
  if (el) {
      tooltips = el.find(".tooltipped");
  } else {
      sSelector = sSelector || "";
      tooltips = $(sSelector + " .tooltipped");
  }
  if (tooltips && tooltips.tooltip()) {
      tooltips.tooltip('close');
      tooltips.tooltip('destroy');
  }
  ItemRemoveAllTooltips();
}

function getGlobalOffsetTop(el) {
  var top = 0;
  while (el) {
      top += el.offsetTop;
      el = el.offsetParent;
  }
  return top;
}

function getBrowserInfo() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;
  if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 4);
  } else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
          fullVersion = nAgt.substring(verOffset + 8);
  } else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
      browserName = "Microsoft Internet Explorer";
      fullVersion = nAgt.substring(verOffset + 5);
  } else if ((verOffset = nAgt.indexOf("Edge")) != -1) {
      browserName = "Edge";
      fullVersion = nAgt.substring(verOffset + 5);
  } else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browserName = "Chrome";
      fullVersion = nAgt.substring(verOffset + 7);
  } else if ((verOffset = nAgt.indexOf("CriOS")) != -1) {
      browserName = "Chrome";
      fullVersion = nAgt.substring(verOffset + 7);
  } else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browserName = "Safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
          fullVersion = nAgt.substring(verOffset + 8);
  } else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browserName = "Firefox";
      fullVersion = nAgt.substring(verOffset + 8);
  } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
      browserName = nAgt.substring(nameOffset, verOffset);
      fullVersion = nAgt.substring(verOffset + 1);
      if (browserName.toLowerCase() == browserName.toUpperCase()) {
          browserName = navigator.appName;
      }
  }
  if ((ix = fullVersion.indexOf(";")) != -1)
      fullVersion = fullVersion.substring(0, ix);
  if ((ix = fullVersion.indexOf(" ")) != -1)
      fullVersion = fullVersion.substring(0, ix);
  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
      fullVersion = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
  }
  return {
      browserName: browserName,
      fullVersion: fullVersion,
      majorVersion: majorVersion,
      appName: navigator.appName,
      userAgent: navigator.userAgent
  };
}

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;
  if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
  } else if (/Android/.test(userAgent)) {
      os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
  } else
      os = platform;
  return os;
}

function getFromListByProperty(list, property, value) {
  for (var i = 0; i < list.length; i++) {
      var obj = list[i];
      if (obj[property] == value)
          return obj;
  }
}

function removeFromListByProperty(list, property, value) {
  for (var i = 0; i < list.length; i++) {
      if (list[i][property] == value) {
          list.splice(i, 1);
          return;
      }
  }
}

function orderListByProperty(list, property, bDesc) {
  if (bDesc)
      list.sort(function(a, b) {
          return b[property] - a[property];
      });
  else
      list.sort(function(a, b) {
          return a[property] - b[property];
      });
}

function clearInput(id) {
  $('#' + id).val("");
}

function randomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
}

function hasSome(coll) {
  if (coll && coll.length > 0)
      return true;
  return false;
}

function vEncode(s) {
  if (!isNullOrEmpty(s) && typeof s === "string") {
      s = s.replaceAll(" ", "");
      s = s.replaceAll("'", "");
      s = encodeURI(s);
  }
  return s;
}

function includes(s, array) {
  if (s && array)
      for (var i in array)
          if (array[i] === s)
              return true;
  return false;
}

function deepClone(o) {
  return $.extend(true, {}, o);
}
String.prototype.contains = function(sString) {
  return (~this.indexOf(sString));
};

function padLeft(str, iLength, sChar) {
  if (isNullOrEmpty(str)) str = '';
  str = '' + str;
  if (str.length > iLength) return str;
  var pad = "";
  for (var i = 0; i < iLength; i++)
      pad += sChar;
  return pad.substring(0, pad.length - str.length) + str;
}
String.prototype.padLeft = function(iLength, sChar) {
  return padLeft(this, iLength, sChar);
};
Number.prototype.padLeft = function(iLength, sChar) {
  str = '' + this;
  return padLeft(str, iLength, sChar);
};

function mathKDA(iKills, iDeaths, iAssists) {
  var iKDA;
  if (iDeaths == 0)
      return iKills + iAssists + ".00";
  else
      iKDA = (iKills + iAssists) / iDeaths;
  return parseFloat(Math.round(iKDA * 100) / 100).toFixed(2);
}

function mathPercentage(sub, tot) {
  if (sub == 0 || tot == 0) return 0;
  return Math.round((sub / tot) * 100);
}

function mathAverage(total, length) {
  if (total == 0 || length == 0) return 0;
  var avg = total / length;
  return Math.floor(avg * 10) / 10;
}

function mathAbbreviation(num) {
  var sResult = "";
  if (num < 0) {
      sResult += "-";
      num *= -1;
  }
  if (num > 999999)
      sResult += Math.floor(num / 100000) / 10 + "M";
  else if (num > 999)
      sResult += Math.floor(num / 100) / 10 + "K";
  else
      sResult += num;
  return sResult;
}

function mathPerMinute(num, timestamp) {
  var minutes = timeToMs(timestamp) / 1000 / 60;
  return (num / minutes).toFixed(1);
}

function mathRand100(perc) {
  return Math.floor(Math.random() * 100) + 1 <= perc;
}

function mathRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function goToByScroll(id) {
  var iFromTop = 0;
  if (id === 0)
      iFromTop = 0;
  else if (!windowLarge())
      iFromTop = $("#" + id)[0].offsetTop - 8;
  else
      iFromTop = $("#" + id)[0].offsetTop - ($header.height() + 8);
  $("html, body").animate({
      scrollTop: iFromTop
  }, 'slow');
}

function goToByScrollHorizontal(sContainerSelector, sElementSelector) {
  $(sContainerSelector).animate({
      scrollLeft: $(sElementSelector).position().left
  }, 500);
}

function preloadImages() {
  if (typeof [].includes !== "function")
      return;
  var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection && connection.downlink < 3)
      return;
  var sIcon, i, j;
  var searchedList = getLocal("Header", 'ListSearched');
  if (searchedList)
      for (i = 0; i < searchedList.length; i++) {
          if (searchedList[i].type != EntityType.Summoner)
              continue;
          sIcon = getUrlProfileIcon(searchedList[i].name, searchedList[i].icon);
          preloadImage(sIcon);
      }
  if (ItemList && ItemList.data) {
      var alreadyLoaded = [];
      for (i in ItemList.data) {
          if (alreadyLoaded.includes(ItemList.data[i].image.sprite))
              continue;
          alreadyLoaded.push(ItemList.data[i].image.sprite);
          sIcon = ddragoncdn + '/' + ItemList.version + "/img/sprite/" + ItemList.data[i].image.sprite;
          preloadImage(sIcon);
      }
  }
}

function preloadImage(src) {
  var my_image = new Image();
  if (isLocalhost()) {
      my_image.onerror = function() {
          console.log("COULDN'T LOAD THE IMAGE " + src);
      };
  }
  my_image.src = src;
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
  }
  navigator.clipboard.writeText(text).then(function() {
      toastSuccess(babel("toast.textcopied") + ': ' + text);
  }, function(err) {
      toastError(babel("toast.errtextcopied") + ': ', err);
  });
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
      var successful = document.execCommand('copy');
      if (successful)
          toastSuccess(babel("toast.textcopied") + ': ' + text);
      else
          toastError(babel("toast.errtextcopied"));
  } catch (e) {
      clientErrorHandler("fallbackCopyTextToClipboard", "library-utility", 0, 0, e);
      toastError(babel("toast.errtextcopied") + ': ', e);
  }
  document.body.removeChild(textArea);
}

function windowSmall() {
  return window.innerWidth < 601;
}

function windowMedium() {
  return window.innerWidth > 600 && window.innerWidth < 993;
}

function windowLarge() {
  return window.innerWidth > 992;
}

function windowWidth() {
  return window.innerWidth;
}

function getCheckboxValue(selector) {
  return $(selector).is(':checked');
}

function setCheckboxValue(selector, bool) {
  $(selector).prop('checked', bool);
}

function getSelectedRadioValue(sParentSelector, sGroupName) {
  return $((sParentSelector || "") + ' input:radio[name="' + sGroupName + '"]:checked').val();
}

function setRadioValue(sSelector, sValue) {
  $(sSelector).attr("value", sValue);
}

function selectRadioByValue(sParentSelector, sGroupName, sValue) {
  if (!isNullOrEmpty(sGroupName))
      sGroupName = '[name = "' + sGroupName + '"]';
  else
      sGroupName = "";
  $((sParentSelector || "") + ' input:radio[value="' + sValue + '"]' + sGroupName).prop('checked', true);
}

function appendModal(sTitle, sContent, sOnClickConfirm, sOnClickConfirmText) {
  closeModal('defaultModal');
  var objPar = {
      sTitle: sTitle,
      sContent: sContent,
      sOnClickConfirm: sOnClickConfirm,
      sOnClickConfirmText: sOnClickConfirmText || 'Confirm'
  };
  openModal('defaultModal', getTemplateHtml(Modal_DefaultItemTemplate, objPar));
}

function openModal(modalId, htmlModal, bDismissable, options) {
  if (!$("#" + modalId).length)
      $body.append(htmlModal);
  if (windowSmall())
      $("#" + modalId).addClass("bottom-sheet");
  if (!options)
      options = {};
  options.dismissible = bDismissable !== false;
  $("#" + modalId).modal(options);
  $("#" + modalId).modal("open");
}

function closeModal(modalId) {
  $('#' + modalId).modal('close');
  $('#' + modalId).remove();
}

function getActiveTabId(sTabsSelector) {
  var activeTab = $(sTabsSelector + " .active");
  if (activeTab && activeTab.length == 1)
      return activeTab[0].parentElement.id;
}

function resizeTextarea($textarea) {
  M.textareaAutoResize($textarea);
  $textarea.css('height', ($textarea.height() + 30) + 'px');
}

function getBadgesSchedule(objPar) {
  if (objPar.bScheduleMorning === true && objPar.bScheduleAfternoon === true && objPar.bScheduleEvening === true && objPar.bScheduleLateEvening === true)
      return '<span class="new badge" data-badge-caption="">' + babel("time.allday") + '</span>';
  var sHtml = '';
  if (objPar.bScheduleMorning === true)
      sHtml += '<span class="new badge" data-badge-caption="">' + babel("timeslot.morning") + '</span>';
  if (objPar.bScheduleAfternoon === true)
      sHtml += '<span class="new badge" data-badge-caption="">' + babel("timeslot.afternoon") + '</span>';
  if (objPar.bScheduleEvening === true)
      sHtml += '<span class="new badge" data-badge-caption="">' + babel("timeslot.evening") + '</span>';
  if (objPar.bScheduleLateEvening === true)
      sHtml += '<span class="new badge" data-badge-caption="">' + babel("timeslot.lateevening") + '</span>';
  return sHtml;
}

function getNodesCount(parent, bGetAllChildrens) {
  var relevantChildren = 0;
  var children = parent.childNodes.length;
  for (var i = 0; i < children; i++) {
      if (bGetAllChildrens)
          relevantChildren += getNodesCount(parent.childNodes[i], true);
      relevantChildren++;
  }
  return relevantChildren;
}
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
var CurrentEventsOnNavigate = [];

function onNavigateOnly(selector, events, handler) {
  if (selector === "window")
      $(window).on(events, handler);
  else
      $(selector).on(events, handler);
  CurrentEventsOnNavigate.push({
      selector: selector,
      events: events
  });
};

function offNavigateOnly(objEvent) {
  if (objEvent.selector === "window")
      $(window).off(objEvent.events);
  else
      $(objEvent.selector).off(objEvent.events);
}

function offAllNavigateOnly() {
  for (var i in CurrentEventsOnNavigate)
      offNavigateOnly(CurrentEventsOnNavigate[i]);
  CurrentEventsOnNavigate = [];
}
var appVersion;
var $window;
var $body;
var $app;
var $VProgress;
var $header;
var $nav;
var $main;
var $mainContent;
$(function() {
  AppLanguage = AppLanguageEN;
  // if (isLocalhost()) {
  //     sApiUrl = "https://localhost:44343";
  //     urlLoLSquareCDN = "/AppWebStatic";
  // } else {
  //     if (!includes(getSubDomain().toUpperCase(), regionsColl))
  //         changeRegion('EUW');
  // }
  // $.ajax({
  //     url: sApiUrl,
  //     type: "HEAD",
  //     timeout: 5000,
  //     cache: false,
  //     success: function() {
  //         callUpdateTemplates();
  //     },
  //     error: function() {
  //         facadeChange("blue-grey", "Server under maintenance");
  //     }
  // });
  callGetLanguagePack();
});

function callUpdateTemplates() {
  if (isLocalhost()) {
      facadeChange("blue-grey", "Loading app files");
      ajaxCall(null, 'User', 'GetEnumFile');
  } else
      callGetLanguagePack();
}

function osGetEnumFile(ajax, obj) {
  facadeChange("blue-grey", "Unpacking app files");
  eval.call(window, obj.value);
  callGetLanguagePack();
}

function callGetLanguagePack() {
  if (getCurrentLanguage().toLowerCase() == "en") {
      if (isLocalhost())
          facadeChange("teal", "App init");
      initializeApp();
  } else {
      if (isLocalhost())
          facadeChange("blue-grey", "Loading language pack");
      getJSONCDN('/languages/lang-' + getCurrentLanguage().toLowerCase() + '.json?' + svnRevision, function(data) {
          AppLanguage = data;
          getJSONCDN('/languages/i18n-' + getCurrentLanguage().toLowerCase() + '.json?' + svnRevision, function(data) {
              i18n = data;
              if (isLocalhost())
                  facadeChange("teal", "App init");
              initializeApp();
          });
      });
  }
}

function initializeApp() {
  storageCleaner();
  if (!navigator.onLine) appOffline();
  window.addEventListener('online', function() {
      appOnline();
  }, false);
  window.addEventListener('offline', function() {
      appOffline();
  }, false);
  addDocumentVisibilityChangeEventListener();
  appVersion = '0.0.' + svnRevision;
  createLayout();
  $main.find("footer > p").append('<label class="right">v' + appVersion + '</label>');
  cleanUrl();
  bLogAjaxCalls = isLocalhost();
  bLogAjaxResponse = isLocalhost();
  consoleLogRandomEmoji();
  isStorageSupported();
  askStorageConsent();
  InitializeStaticData();
  initializeWebUser();
  initializeHeader();
  preloadImages();
  if (isLocalhost()) {}
  userRestoreSignIn();
}

function createLayout() {
  $("html").addClass("lolsquare").css("overflow", "hidden");
  $("body").append('<div class="app"></div>');
  $app = $(".app");
  $app.append('<div id="VProgress" class="progress dnone"><div class="indeterminate"></div></div>');
  $app.append('<div id="toastsContainer"></div>');
  $app.append(getTemplateHtml(userCenterAppTemplate));
  $app.append(getTemplateHtml(notificationsCenterAppTemplate));
  $app.append(getTemplateHtml(headerAppTemplate));
  $app.append(getTemplateHtml(navAppTemplate));
  $app.append(getTemplateHtml(mainAppTemplate));
  $window = $(window);
  $body = $("body");
  $VProgress = $("#VProgress");
  $header = $("header");
  $nav = $("nav");
  $main = $("main");
  $mainContent = $(".maincontent");
  $toastsContainer = $("#toastsContainer");
  $(".sidenav").sidenav();
  if (!windowLarge())
      $nav.find("a").removeClass("waves-effect");
  else
      $window.scroll(function() {
          headerShadow();
      });
  if (isLocalhost())
      $app.append('<span class="new badge blue-grey white-text hide-on-med-and-down" style="position: fixed;top: 72px;right: 14px;cursor: default;z-index: -1;" data-badge-caption="">TEST</span>');
}

function headerShadow() {
  if (windowLarge()) {
      if ($("html").scrollTop() > 0) $header.addClass("z-depth-1");
      else $header.removeClass("z-depth-1");
  }
}

function appOnline() {
  $("#toast_offline").remove();
}

function appOffline() {
  toastOffline();
}

function facadeRemove() {
  $("html").css("overflow", "");
  $("#initial-loading-facade").remove();
}

function facadeChange(sColor, sMessage) {
  facadeSetColor(sColor);
  facadeSetMessage(sMessage);
}

function facadeSetColor(sColor) {
  $("#initial-loading-facade span").css("color", hexColorPalette(sColor, "800"));
  $("#initial-loading-facade .border > div").attr("class", "b" + sColor);
}

function facadeSetMessage(sMessage) {
  var $span = $("#initial-loading-facade span");
  $span.css("display", "none");
  $span.text(sMessage);
  $span.fadeIn("slow");
}

function callToSModal() {
  openModal('modalToS', Modal_TermsOfServiceItemTemplate);
}

function callPrivacyPoliciesModal() {
  openModal('modalPrivacyPolicies', Modal_CookiePoliciesItemTemplate);
}

function updateAchievementsProgress() {
  var bShowProgress = true;
  var iProgress = 0;
  if (isUserLogged()) {
      if (isAchievementUnlocked(AchievementType.Registration))
          iProgress += 33;
      if (isAchievementUnlocked(AchievementType.CompileCurriculum))
          iProgress += 33;
      if (isAchievementUnlocked(AchievementType.GetTeam))
          iProgress += 34;
      bShowProgress = iProgress < 100;
  }
  var $progress = $("#achievementProgress");
  if (!bShowProgress && $progress.length > 0)
      $("#achievementProgress").remove();
  if (bShowProgress && $progress.length < 1)
      $("#navAchievements").append(getTemplateHtml(DonutProgressItemTemplate, {
          sId: 'achievementProgress',
          iPixel: 36
      }));
  if (bShowProgress)
      updateDonutProgress("achievementProgress", iProgress);
}

function isAchievementUnlocked(iAchievementType) {
  if (isUserLogged() && WebUser.achievements)
      for (var i in WebUser.achievements)
          if (WebUser.achievements[i] && WebUser.achievements[i].iAchievementType == iAchievementType)
              return true;
  return false;
}

function getAchievementWebUser(iAchievementType) {
  if (isUserLogged() && WebUser.achievements)
      for (var i in WebUser.achievements)
          if (WebUser.achievements[i] && WebUser.achievements[i].iAchievementType == iAchievementType)
              return WebUser.achievements[i];
}

function callGetAchievements(sCode, iSummonerId) {
  ajaxCall(sCode, 'Summoner', 'GetAchievements', {
      iSummonerId: iSummonerId
  }, true);
}

function osGetAchievements(ajax, obj) {
  if (!isUserLogged()) return;
  WebUser.achievements = obj.value;
  updateAchievementsProgress();
}

function AchievementsTestHandling() {
  for (var ind in AchievementType)
      if (!(AchievementType[ind] in AchievementsColl))
          toastError("Achievement type not handled " + ind);
}

function addNewAchievementsUnlocked(obj) {
  if (obj && obj.unlockedAchievements) {
      for (var i in obj.unlockedAchievements)
          toastAchievementUnlocked(AchievementsColl[obj.unlockedAchievements[i]]);
      if (WebUser.summoner)
          callGetAchievements('User', WebUser.summoner.iSummonerId);
      setNotificationNav("Achievements", true);
  }
}
var AchievementsColl = {
  1: {
      achievement_type: 1,
      title: "New arrival",
      description: "Register",
      emoji: "1f382-birthday-cake.svg"
  },
  2: {
      achievement_type: 2,
      title: "Ready to work",
      description: "Compile your curriculum",
      emoji: "1f4cb-clipboard.svg"
  },
  3: {
      achievement_type: 3,
      title: "Official member",
      description: "Join a team",
      emoji: "270d-1f3fc-writing-hand.svg"
  },
  4: {
      achievement_type: 4,
      title: "Beta tester",
      description: "Contribute to the site",
      emoji: "1f6e0-hammer-and-wrench.svg"
  }
};

function contractDisable(iSummonerId) {
  $("#contract" + iSummonerId + ", #contract" + iSummonerId + " .btn, #contract" + iSummonerId + " .btn-flat").addClass("disabled");
}

function contractEnable(iSummonerId) {
  $("#contract" + iSummonerId + ", #contract" + iSummonerId + " .btn, #contract" + iSummonerId + " .btn-flat").removeClass("disabled");
}

function contractUpdateRole(iSummonerId, iRole) {
  for (var i in TeamTeam.members)
      if (TeamTeam.members[i].summoner.iSummonerId == iSummonerId) {
          TeamTeam.members[i].contract.iRole = iRole;
          return;
      }
  for (var i in TeamTeam.trials)
      if (TeamTeam.trials[i].summoner.iSummonerId == iSummonerId) {
          TeamTeam.trials[i].contract.iRole = iRole;
          return;
      }
}

function contractUpdateTeamRole(iSummonerId, iTeamRole) {
  for (var i in TeamTeam.members)
      if (TeamTeam.members[i].summoner.iSummonerId == iSummonerId)
          TeamTeam.members[i].contract.iTeamRole = iTeamRole;
}

function contractModalChangeRole(iSummonerId, sName, iRole) {
  appendModal(babel("base.changememberrole", null, {
      SummonerName: sName
  }), babel("base.choosenewrole"));
  $("#defaultModal .col-buttons").empty();
  var sHtml = "";
  for (var property in RoleType)
      if (RoleType.hasOwnProperty(property)) {
          var img = getTemplateHtml(RoleImageItemTemplate, {
              css: "left",
              iRole: RoleType[property]
          });
          if (iRole != RoleType[property])
              sHtml += '<a class="btn-large white black-text waves-effect" onclick="contractCallEditRole(\'' + iSummonerId + '\', ' + RoleType[property] + ')">' + img + babelEnum("RoleType", RoleType[property]) + '</a>';
      }
  $("#defaultModal .col-buttons").append(sHtml);
}

function contractCallEditRole(iSummonerId, iNewRole) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var ajaxObj = {
      sSvcPage: 'Team',
      sMethod: 'SaveContract'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          contractDisable(ajax.params.iSummonerId);
          $("#defaultModal a").addClass("disabled");
      },
      fnDone: function(ajax) {
          contractEnable(ajax.params.iSummonerId);
          $("#defaultModal a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          contractUpdateRole(ajax.params.iSummonerId, ajax.params.iRole);
          closeModal("defaultModal");
          TeamLoadContracts();
          TeamLoadTrials();
          toastSuccess("Role updated", "fad fa-user-tag");
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: iSummonerId,
      iTeamId: TeamTeam.iTeamId,
      iRole: iNewRole
  }, fnHandlers);
}

function contractAskConfirmPromoteToAdmin(iSummonerId, sName) {
  appendModal(babel("base.promotemembertoadmin", null, {
      SummonerName: sName
  }), babel("base.promotemembertoadmintext"), "contractCallPromoteToAdministrator('" + iSummonerId + "')");
}

function contractCallPromoteToAdministrator(iSummonerId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var ajaxObj = {
      sSvcPage: 'Team',
      sMethod: 'PromoteToAdministrator'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          contractDisable(ajax.params.iSummonerId);
      },
      fnDone: function(ajax) {
          contractEnable(ajax.params.iSummonerId);
      },
      fnOs: function(ajax, obj) {
          contractUpdateTeamRole(ajax.params.iSummonerId, TeamRoleType.Administrator);
          TeamLoadContracts();
          toastSuccess(babel("toast.memberpromotedtoadmin"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: iSummonerId,
      iTeamId: TeamTeam.iTeamId
  }, fnHandlers);
}

function contractAskConfirmDemoteToMember(iSummonerId, sName) {
  appendModal(babel("base.demoteadmintomember", null, {
      SummonerName: sName
  }), babel("base.demoteadmintomembertext"), "contractCallDemoteToMember('" + iSummonerId + "')");
}

function contractCallDemoteToMember(iSummonerId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var ajaxObj = {
      sSvcPage: 'Team',
      sMethod: 'DemoteToMember'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          contractDisable(ajax.params.iSummonerId);
      },
      fnDone: function(ajax) {
          contractEnable(ajax.params.iSummonerId);
      },
      fnOs: function(ajax, obj) {
          contractUpdateTeamRole(ajax.params.iSummonerId, TeamRoleType.Member);
          TeamLoadContracts();
          toastSuccess(babel("toast.admindemotedtomember"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: iSummonerId,
      iTeamId: TeamTeam.iTeamId
  }, fnHandlers);
}

function contractAskConfirmSetOwner(iSummonerId, sName) {
  appendModal(babel("base.setowner", null, {
      SummonerName: sName
  }), babel("base.setownertext"), "contractCallSetOwner('" + iSummonerId + "')");
}

function contractCallSetOwner(iSummonerId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var ajaxObj = {
      sSvcPage: 'Team',
      sMethod: 'SetOwner'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          contractDisable(ajax.params.iSummonerId);
      },
      fnDone: function(ajax) {
          contractEnable(ajax.params.iSummonerId);
      },
      fnOs: function(ajax, obj) {
          reloadPage();
          toastSuccess(babel("toast.memberpromotedtoowner"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: iSummonerId,
      iTeamId: TeamTeam.iTeamId
  }, fnHandlers);
}

function contractAskConfirmKickMember(iSummonerId, sName) {
  appendModal(babel("base.kickmember", null, {
      SummonerName: sName
  }), babel("base.kickmembertext"), "contractCallKickMember('" + iSummonerId + "')");
}

function contractCallKickMember(iSummonerId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var ajaxObj = {
      sSvcPage: 'Team',
      sMethod: 'KickMember'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          contractDisable(ajax.params.iSummonerId);
      },
      fnDone: function(ajax) {
          contractEnable(ajax.params.iSummonerId);
      },
      fnOs: function(ajax, obj) {
          removeMemberFromTeam(ajax.params.iSummonerId, TeamTeam);
          TeamLoadContracts();
          TeamLoadTrials();
          toastSuccess(babel("toast.memberkicked"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: iSummonerId,
      iTeamId: TeamTeam.iTeamId
  }, fnHandlers);
}

function contractCallPromoteToMember(iSummonerId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var ajaxObj = {
      sSvcPage: 'Team',
      sMethod: 'PromoteToMember'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          contractDisable(ajax.params.iSummonerId);
      },
      fnDone: function(ajax) {
          contractEnable(ajax.params.iSummonerId);
      },
      fnOs: function(ajax, obj) {
          for (var i in TeamTeam.trials)
              if (TeamTeam.trials[i].summoner.iSummonerId == ajax.params.iSummonerId) {
                  TeamTeam.trials[i].contract.iTeamRole = TeamRoleType.Member;
                  TeamTeam.members.push(TeamTeam.trials[i]);
                  TeamTeam.trials.splice(i, 1);
                  break;
              }
          TeamLoadContracts();
          TeamLoadTrials();
          toastSuccess(babel("toast.promotedtomember"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: iSummonerId,
      iTeamId: TeamTeam.iTeamId
  }, fnHandlers);
}

function SummonerMatchHtml(iSummonerId, match) {
  if (match.matchData && match.matchData.gameDuration > 0) {
      for (var ind in match.matchData.playerMatchDataCollection)
          if (match.matchData.playerMatchDataCollection[ind].iSummonerId == iSummonerId) {
              match["player"] = match.matchData.playerMatchDataCollection[ind];
              break;
          }
      if (!match.player) {
          clientErrorHandler("Player match not found - SummonerMatchHtml()", "class-Match");
          toastError("Match " + match.lGameId + " error");
      }
      match["iPlayerTeamKills"] = 0;
      for (var ind in match.matchData.playerMatchDataCollection) {
          var participant = match.matchData.playerMatchDataCollection[ind];
          if (participant.teamId == match.player.teamId)
              match["iPlayerTeamKills"] += participant.kills;
      }
      if (match.matchData.gameDuration < 6 * 60)
          match["bRemake"] = true;
      orderListByProperty(match.matchData.playerMatchDataCollection, "iRole");
      orderListByProperty(match.matchData.playerMatchDataCollection, "teamId");
  } else
      match["bScheduled"] = true;
  return getTemplateHtml(SummonerMatchItemTemplate, match);
}

function SummonerMatchCreateParticipant(participants, teamId) {
  var sHtml = '';
  for (var i in participants) {
      if (participants[i].teamId != teamId)
          continue;
      var objpar = {
          iSummonerId: participants[i].iSummonerId,
          sName: participants[i].sName || GetChampionNameById(participants[i].championId) + " Bot",
          iChampionId: participants[i].championId,
          bIsBot: isNullOrEmpty(participants[i].sName),
          bIsMySummoner: isMySummoner(participants[i]),
          bIsCurrentSummoner: participants[i].sName === SummonerSummoner.sName,
          sEncryptedId: participants[i].sEncryptedId
      };
      sHtml += getTemplateHtml(SummonerMatch_ParticipantItemTemplate, objpar);
  }
  return sHtml;
}

function MatchCompactInitializeCollapsible(sSelector) {
  $(sSelector).collapsible({
      inDuration: 400,
      outDuration: 400,
      onOpenStart: function(domMatch) {
          MatchCompactAppend(domMatch);
      },
      onOpenEnd: function(domMatch) {
          MatchCompactInit(domMatch);
      },
      onCloseEnd: function(domMatch) {
          MatchCompactTearDown(domMatch);
      }
  });
}

function MatchCompactGetInfoFromDomMatch(domMatch) {
  if (!domMatch || isNullOrEmpty(domMatch.id)) return null;
  var IdSplit = domMatch.id.split('_');
  var info = {
      sContainerId: domMatch.id,
      sType: IdSplit[1].toLowerCase(),
      lMatchId: parseInt(IdSplit[2])
  };
  if (info.lMatchId < 1) {
      toastError(babel("toast.couldnotloadmatchdetails"));
      return null;
  }
  return info;
}

function MatchCompactAppend(domMatch) {
  var matchInfo = MatchCompactGetInfoFromDomMatch(domMatch);
  if (!matchInfo) return;
  MatchCompactTearDown(domMatch);
  var match = null;
  switch (matchInfo.sType) {
      case "summoner":
          for (var i in SummonerSummoner.recentMatchCollection)
              if (SummonerSummoner.recentMatchCollection[i].lGameId == matchInfo.lMatchId) {
                  match = SummonerSummoner.recentMatchCollection[i];
                  continue;
              }
          break;
      case "team":
          for (var i in TeamTeam.matches)
              if (TeamTeam.matches[i].gameId == matchInfo.lMatchId) {
                  match = {
                      matchData: TeamTeam.matches[i]
                  };
                  continue;
              }
          break;
      default:
          break;
  }
  if (!match) {
      toastError(babel("toast.couldnotloadmatchdetails"));
      return;
  }
  var $matchCollapsibleBody = $("#" + matchInfo.sContainerId + " .collapsible-body");
  if (match.bScheduled) {
      $matchCollapsibleBody.append('<div class="row" style="margin:0"><div class="col s12"><p class="center">' + babel("base.matchscheduled") + '</p></div></div>');
      $matchCollapsibleBody.removeClass("white");
      $matchCollapsibleBody.addClass("grey lighten-4");
      return;
  }
  MatchDataExtrapolateMoreInformation(match.matchData);
  $matchCollapsibleBody.append(getTemplateHtml(MatchCompactBodyItemTemplate, match.matchData));
  orderListByProperty(match.matchData.playerMatchDataCollection, "iRole");
  orderListByProperty(match.matchData.playerMatchDataCollection, "teamId");
  for (var i in match.matchData.playerMatchDataCollection) {
      var participant = match.matchData.playerMatchDataCollection[i];
      $matchCollapsibleBody.find(".match-compact").append(getTemplateHtml(MatchCompactParticipantItemTemplate, participant));
  }
}

function MatchCompactInit(domMatch) {
  var matchInfo = MatchCompactGetInfoFromDomMatch(domMatch);
  if (!matchInfo) return;
  $("#" + matchInfo.sContainerId + " .collapsible-body .tooltipped").tooltip({
      enterDelay: 500
  });
  InitItemsTooltips("#" + matchInfo.sContainerId + " .collapsible-body");
}

function MatchCompactTearDown(domMatch) {
  var matchInfo = MatchCompactGetInfoFromDomMatch(domMatch);
  if (!matchInfo) return;
  var sContainerSelector = "#" + matchInfo.sContainerId + " .collapsible-body";
  materializeTooltipTeardown(sContainerSelector);
  DestroyItemsTooltips(sContainerSelector);
  $(sContainerSelector).empty();
}

function MatchDataExtrapolateMoreInformation(oMatchData) {
  if (!oMatchData || oMatchData.bWithMoreInfo)
      return;
  oMatchData.bWithMoreInfo = true;
  oMatchData["maxDamageDealtToChampions"] = 0;
  for (var ind in oMatchData.playerMatchDataCollection)
      if (oMatchData.playerMatchDataCollection[ind].totalDamageDealtToChampions > oMatchData.maxDamageDealtToChampions)
          oMatchData.maxDamageDealtToChampions = oMatchData.playerMatchDataCollection[ind].totalDamageDealtToChampions;
  oMatchData["iKillsTeam1"] = 0;
  oMatchData["iKillsTeam2"] = 0;
  oMatchData["iDeathsTeam1"] = 0;
  oMatchData["iDeathsTeam2"] = 0;
  oMatchData["iAssistsTeam1"] = 0;
  oMatchData["iAssistsTeam2"] = 0;
  oMatchData["iGoldEarnedTeam1"] = 0;
  oMatchData["iGoldEarnedTeam2"] = 0;
  for (var ind in oMatchData.playerMatchDataCollection) {
      var participant = oMatchData.playerMatchDataCollection[ind];
      var iTeam = participant.teamId === 100 ? 1 : 2;
      oMatchData["iKillsTeam" + iTeam] += participant.kills;
      oMatchData["iDeathsTeam" + iTeam] += participant.deaths;
      oMatchData["iAssistsTeam" + iTeam] += participant.assists;
      oMatchData["iGoldEarnedTeam" + iTeam] += participant.goldEarned;
      participant["maxMatchDamageDealtToChampions"] = oMatchData.maxDamageDealtToChampions;
      participant["iCreepScorePerMinute"] = mathPerMinute(participant.totalMinionsKilled, oMatchData.gameDuration * 1000);
  }
}

function MatchDataDetailDamageDealtToChamps($matchCollapsibleBody, oMatchData) {
  for (var ind in oMatchData.playerMatchDataCollection) {
      var sColor = oMatchData.playerMatchDataCollection[ind].teamId == 100 ? 'blue' : 'red';
      var sHtml = "";
      sHtml += '<tr>';
      sHtml += '  <td width="1">' + getTemplateHtml(ChampionImageItemTemplate, {
          id: oMatchData.playerMatchDataCollection[ind].championId
      }) + '</td>';
      sHtml += '  <td><div class="progress ' + sColor + ' lighten-4"><div class="determinate ' + sColor + ' lighten-1" style="width: ' + mathPercentage(oMatchData.playerMatchDataCollection[ind].totalDamageDealtToChampions, oMatchData.maxDamageDealtToChampions) + '%"></div></div></td>';
      sHtml += '  <td width="1"><span>' + mathAbbreviation(oMatchData.playerMatchDataCollection[ind].totalDamageDealtToChampions) + '</span></td>';
      sHtml += '</tr>';
      $matchCollapsibleBody.find(".damage-dealt tbody").append(sHtml);
  }
}

function osFollow(ajax, obj) {
  toastSuccess("Followed", "fad fa-bell");
}

function osUnfollow(ajax, obj) {
  toastSuccess("Unfollowed", "fad fa-bell-slash");
}

function callFollowSummoner(sCode, iSummonerId, iRegionId, iFollowId, sFollowListItemId, bVProgress) {
  if (!iRegionId)
      iRegionId = getRegion(true);
  ajaxCall(sCode, 'Summoner', 'Follow', {
      iSummonerId: iSummonerId,
      iRegionId: iRegionId
  }, bVProgress, {
      iFollowId: iFollowId,
      sFollowListItemId: sFollowListItemId
  });
}

function callUnfollowSummoner(sCode, iSummonerId, iRegionId, iFollowId, sFollowListItemId, bVProgress) {
  if (!iRegionId)
      iRegionId = getRegion(true);
  ajaxCall(sCode, 'Summoner', 'Unfollow', {
      iSummonerId: iSummonerId,
      iRegionId: iRegionId
  }, bVProgress, {
      iFollowId: iFollowId,
      sFollowListItemId: sFollowListItemId
  });
}

function callGetFollowingPageSummoner(sCode, iSummonerId, iPage, bVProgress) {
  ajaxCall(sCode, 'Summoner', 'GetFollowedPage', {
      iSummonerId: iSummonerId,
      iPage: iPage
  }, bVProgress);
}

function callGetFollowerPageSummoner(sCode, iSummonerId, iPage, bVProgress) {
  ajaxCall(sCode, 'Summoner', 'GetFollowerPage', {
      iSummonerId: iSummonerId,
      iPage: iPage
  }, bVProgress);
}

function callFollowTeam(sCode, iTeamId, iRegionId, iFollowId, sFollowListItemId, bVProgress) {
  if (!iRegionId)
      iRegionId = getRegion(true);
  ajaxCall(sCode, 'Team', 'Follow', {
      iTeamId: iTeamId,
      iRegionId: iRegionId
  }, bVProgress, {
      iFollowId: iFollowId,
      sFollowListItemId: sFollowListItemId
  });
}

function callUnfollowTeam(sCode, iTeamId, iRegionId, iFollowId, sFollowListItemId, bVProgress) {
  if (!iRegionId)
      iRegionId = getRegion(true);
  ajaxCall(sCode, 'Team', 'Unfollow', {
      iTeamId: iTeamId,
      iRegionId: iRegionId
  }, bVProgress, {
      iFollowId: iFollowId,
      sFollowListItemId: sFollowListItemId
  });
}

function callGetFollowerPageTeam(sCode, iTeamId, iPage, bVProgress) {
  ajaxCall(sCode, 'Team', 'GetFollowerPage', {
      iTeamId: iTeamId,
      iPage: iPage
  }, bVProgress);
}

function callSaveSocialLinksUser(sCode, sSocialType, sUrl) {
  if (isUserLogged(true) && !isUserGuest(true))
      ajaxCall(sCode, 'User', 'SaveSocialLinks', {
          sSocialType: sSocialType,
          sUrl: sUrl
      }, false);
}

function callSaveSocialLinksTeam(sCode, iTeamId, sSocialType, sUrl) {
  if (isUserLogged(true) && !isUserGuest(true))
      ajaxCall(sCode, 'Team', 'SaveSocialLinksTeam', {
          iTeamId: iTeamId,
          sSocialType: sSocialType,
          sUrl: sUrl
      }, false);
}

function callGetFeedPage(sCode, iPage, sHomeFeedMode, bVProgress) {
  ajaxCall(sCode, 'User', 'GetFeedPage', {
      iPage: iPage
  }, bVProgress, {
      sHomeFeedMode: sHomeFeedMode
  });
}

function callLiveGameInfo(sCode, iSummonerId) {
  ajaxCall(sCode, 'Summoner', 'LiveGame', {
      iSummonerId: iSummonerId
  }, false);
}

function removeMemberFromTeam(iSummonerId, team) {
  if (iSummonerId <= 0 || !team) return;
  if (team.members)
      for (var i in team.members)
          if (team.members[i].summoner.iSummonerId == iSummonerId) {
              team.members.splice(i, 1);
              return;
          }
  if (team.trials)
      for (var i in team.trials)
          if (team.trials[i].summoner.iSummonerId == iSummonerId) {
              team.trials.splice(i, 1);
              return;
          }
}

function callLoadTeam(iTeamId, bVProgress, sCode) {
  if (isNullOrEmpty(iTeamId)) return;
  ajaxCall(sCode, 'Team', 'LoadTeam', {
      iTeamId: iTeamId
  }, bVProgress);
}

function callLoadMyTeams(sCode, bVProgress) {
  if (!isUserLogged(true) || isUserGuest()) return;
  ajaxCall(sCode, 'MyTeams', 'LoadMyTeams', null, bVProgress);
}

function osLoadMyTeams(ajax, obj) {
  WebUser.teams = obj.value;
  showMyTeamsSideNav();
  setNotificationNav('MyTeams', (obj.AdditionalData != null && hasSome(obj.AdditionalData.invites)));
  if (getPageName() == "TeamLeaderboard")
      TeamLeaderboardShowMyTeams();
  else if (getPageName() == "Home")
      HomeLoadFirstSteps();
}

function callDisbandTeam(sTeamId, bVProgress, sCode, fnHandlers) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (isNullOrEmpty(sTeamId)) return;
  var ajaxObj = {
      sCode: sCode,
      sSvcPage: 'Team',
      sMethod: 'DisbandTeam',
      bVProgress: bVProgress
  };
  ajaxCallObj(ajaxObj, {
      sTeamId: sTeamId
  }, fnHandlers);
}

function osDisbandTeam(ajax, obj) {
  toastSuccess(babel("toast.teamdisbanded"));
}

function showModalFindTeam() {
  openModal('modalFindTeam', getTemplateHtml(Modal_FindTeamItemTemplate));
}

function callGetTeamLeaderboardPage(sCode, lPosition) {
  ajaxCall(sCode, 'Team', 'GetTeamLeaderboardPage', {
      lPosition: lPosition
  }, true);
}

function osInvite(ajax, obj) {
  if (obj.AdditionalData && obj.AdditionalData.UnaivalabilityReasons && obj.AdditionalData.UnaivalabilityReasons.length > 0) {
      for (var i in obj.AdditionalData.UnaivalabilityReasons)
          toastError(getUnaivalabilityReasonDescription(obj.AdditionalData.UnaivalabilityReasons[i]));
      return;
  }
  if (obj && obj.value && obj.value.summoner && !isNullOrEmpty(obj.value.summoner.sName))
      toastSuccess(babel("toast.summonerinvited", null, {
          SummonerName: obj.value.summoner.sName
      }));
}

function getUnaivalabilityReasonDescription(iEnum) {
  var sDesc = "";
  switch (iEnum) {
      case UnavailabilityReason.TeamFull:
          sDesc = "This team is full";
          break;
      case UnavailabilityReason.NoRights:
          sDesc = "You have no invite permissions";
          break;
      case UnavailabilityReason.AlreadyInTeam:
          sDesc = "This summoner is already in the team";
          break;
      case UnavailabilityReason.AlreadyInvited:
          sDesc = "This summoner has already been invited in the team";
          break;
      case UnavailabilityReason.HeRequestedToJoin:
          sDesc = "This summoner has requested to join. Accept the request in the team page.";
          break;
      default:
          sDesc = "You can't choose this team.";
          break;
  }
  return sDesc;
}

function callAcceptInvite(sCode, iTeamId, bVProgress, fnHandlers) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (isNullOrEmpty(iTeamId) || iTeamId <= 0) {
      toastError(babel("toast.couldnotfindteam"));
      return;
  }
  var ajaxObj = {
      sCode: sCode,
      sSvcPage: 'Team',
      sMethod: 'AcceptInvite',
      bVProgress: bVProgress
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: iTeamId
  }, fnHandlers);
}

function osAcceptInvite(ajax, obj) {
  userJoinedTeam();
  toastSuccess(babel("toast.teaminviteaccepted"), 'fad fa-users-medical');
}

function callDeclineInvite(sCode, iTeamId, bVProgress, fnHandlers) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (isNullOrEmpty(iTeamId) || iTeamId <= 0) {
      toastError(babel("toast.couldnotfindteam"));
      return;
  }
  var ajaxObj = {
      sCode: sCode,
      sSvcPage: 'Team',
      sMethod: 'DeclineInvite',
      bVProgress: bVProgress
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: iTeamId
  }, fnHandlers);
}

function osDeclineInvite(ajax, obj) {
  toastSuccess(babel("toast.teaminvitedeclined"));
}

function callBlockInvites(bBlock, bVProgress, sCode, fnHandlers) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var ajaxObj = {
      sCode: sCode,
      sSvcPage: 'Team',
      sMethod: 'BlockInvites',
      bVProgress: bVProgress
  };
  ajaxCallObj(ajaxObj, {
      sBlock: bBlock
  }, fnHandlers);
}

function osBlockInvites(ajax, obj) {
  WebUser.summoner.bBlockInvites = ajax.params.sBlock == "true";
  if (ajax.params.sBlock == "true")
      toastSuccess(babel("toast.invitationsblocked"));
  else
      toastSuccess(babel("toast.opentoinvitations"));
}

function callApplyToTeam(sCode, iTeamId, iRole, bVProgress, fnHandlers) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (isNullOrEmpty(iTeamId) || iTeamId <= 0) {
      toastError(babel("toast.couldnotfindteam"));
      return;
  }
  var ajaxObj = {
      sCode: sCode,
      sSvcPage: 'Team',
      sMethod: 'ApplyToTeam',
      bVProgress: bVProgress
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: iTeamId,
      iRole: iRole
  }, fnHandlers);
}

function osApplyToTeam(ajax, obj) {
  toastSuccess(babel("toast.joinrequestsent"));
}

function callCancelJoin(sCode, iTeamId, bVProgress, fnHandlers) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (isNullOrEmpty(iTeamId) || iTeamId <= 0) {
      toastError(babel("toast.couldnotfindteam"));
      return;
  }
  var ajaxObj = {
      sCode: sCode,
      sSvcPage: 'Team',
      sMethod: 'CancelJoin',
      bVProgress: bVProgress
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: iTeamId
  }, fnHandlers);
}

function osCancelJoin(ajax, obj) {
  toastSuccess(babel("toast.joinrequestcanceled"));
}

function callLeaveTeam(sCode, iTeamId, bVProgress, fnHandlers) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (isNullOrEmpty(iTeamId) || iTeamId <= 0) {
      toastError(babel("toast.couldnotfindteam"));
      return;
  }
  var ajaxObj = {
      sCode: sCode,
      sSvcPage: 'Team',
      sMethod: 'LeaveTeam',
      bVProgress: bVProgress
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: iTeamId
  }, fnHandlers);
}

function osLoadTournament(ajax, obj) {
  if (!obj || !obj.value)
      return;
  if (hasSome(obj.value.brackets))
      for (var i in obj.value.brackets) {
          obj.value.brackets[i].bOneWin = false;
          obj.value.brackets[i].bTwoWin = false;
          if (obj.value.brackets[i].winnerId < 1)
              continue;
          if ((obj.value.brackets[i].summonerOne && obj.value.brackets[i].summonerOne.iSummonerId === obj.value.brackets[i].winnerId) || (obj.value.brackets[i].teamOne && obj.value.brackets[i].teamOne.iTeamId === obj.value.brackets[i].winnerId))
              obj.value.brackets[i].bOneWin = true;
          if ((obj.value.brackets[i].summonerTwo && obj.value.brackets[i].summonerTwo.iSummonerId === obj.value.brackets[i].winnerId) || (obj.value.brackets[i].teamTwo && obj.value.brackets[i].teamTwo.iTeamId === obj.value.brackets[i].winnerId))
              obj.value.brackets[i].bTwoWin = true;
      }
  if (hasSome(obj.value.readyStates))
      for (var i in obj.value.readyStates)
          TournamentParticipantSetPriority(obj.value, obj.value.readyStates[i].iParticipantId, obj.value.readyStates[i].bHasPriority);
}

function CreateTournament(lSummonerId, sTournamentName, iTournamentSize, iTournamentTeamSize, iTournamentIcon) {
  if (!isUserLogged(true) || !WebUser.bIsAdmin) return;
  if (lSummonerId <= 0) {
      toastError(babel("toast.notournamenthost"));
      return;
  }
  if (isNullOrEmpty(sTournamentName)) {
      toastError(babel("toast.notournamentname"));
      return;
  }
  if (iTournamentSize != 8 && iTournamentSize != 16 && iTournamentSize != 32) {
      toastError(babel("toast.wrongtournamentsize"));
      return;
  }
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'CreateTournament'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#btnCreateTournament").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#btnCreateTournament").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          navigate("Tournament", obj.value);
          toastSuccess(babel("toast.tournamentcreated"), "fad fa-trophy");
      }
  };
  ajaxCallObj(ajaxObj, {
      sTournamentName: sTournamentName,
      iHostSummonerId: lSummonerId,
      iTournamentSize: iTournamentSize,
      iTournamentTeamSize: iTournamentTeamSize,
      iTournamentIcon: iTournamentIcon
  }, fnHandlers);
}

function tournamentSetFeaturedInfo(iTournamentId, bIsFeatured, sFeaturedDescription, sFeaturedUrl, sFeaturedMainColor, sFeaturedSecondaryColor, sFeaturedImage) {
  if (iTournamentId <= 0) {
      toastError(babel("tournament.tournamentnotfound"));
      return;
  }
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'SetFeaturedInfo'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#btnSetFeaturedInfo").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#btnSetFeaturedInfo").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          toastSuccess("Success");
      }
  };
  var params = {
      iTournamentId: iTournamentId,
      bIsFeatured: bIsFeatured,
      sFeaturedDescription: sFeaturedDescription,
      sFeaturedUrl: sFeaturedUrl,
      sFeaturedMainColor: sFeaturedMainColor,
      sFeaturedSecondaryColor: sFeaturedSecondaryColor,
      sFeaturedImage: sFeaturedImage
  };
  ajaxCallObj(ajaxObj, params, fnHandlers);
}

function TournamentRemoveParticipant(dtoTournament, iParticipantId) {
  if (iParticipantId <= 0 || !dtoTournament || !hasSome(dtoTournament.summonerPool)) return false;
  removeFromListByProperty(dtoTournament.summonerPool, "iSummonerId", iParticipantId);
}

function TournamentIAmPartOf(dtoTournament) {
  if (!isUserLogged() || !dtoTournament || !hasSome(dtoTournament.summonerPool)) return false;
  for (var i in dtoTournament.summonerPool)
      if (dtoTournament.summonerPool[i].iSummonerId == WebUser.summoner.iSummonerId)
          return true;
  return false;
}

function TournamentIAmHost(dtoTournament) {
  if (!isUserLogged() || !dtoTournament || !dtoTournament.hostSummoner || dtoTournament.hostSummoner.iSummonerId != WebUser.summoner.iSummonerId)
      return false;
  return true;
}

function TournamentICanEdit(dtoTournament) {
  if (!isUserLogged() || !dtoTournament)
      return false;
  if (WebUser.bIsAdmin)
      return true;
  if (dtoTournament.hostSummoner && dtoTournament.hostSummoner.iSummonerId == WebUser.summoner.iSummonerId)
      return true;
  return false;
}

function TournamentGetBracketByIndex(dtoTournament, iIndex) {
  if (!dtoTournament || iIndex < 1) return;
  for (var i in dtoTournament.brackets)
      if (dtoTournament.brackets[i].iIndex == iIndex)
          return dtoTournament.brackets[i];
  return;
}

function TournamentGetParticipantById(dtoTournament, iParticipantId) {
  if (!dtoTournament || iParticipantId < 1) return;
  if (hasSome(dtoTournament.summonerPool))
      for (var i in dtoTournament.summonerPool)
          if (dtoTournament.summonerPool[i].iSummonerId == iParticipantId)
              return dtoTournament.summonerPool[i];
  if (hasSome(dtoTournament.teamPool))
      for (var i in dtoTournament.teamPool)
          if (dtoTournament.teamPool[i].iTeamId == iParticipantId)
              return dtoTournament.teamPool[i];
  return;
}

function TournamentGetParticipantNameById(dtoTournament, iParticipantId) {
  var participant = TournamentGetParticipantById(dtoTournament, iParticipantId);
  if (!participant) return "";
  if (dtoTournament.iTeamSize == TournamentTeamSize.One)
      return participant.sName;
  if (dtoTournament.iTeamSize == TournamentTeamSize.Five)
      return getTeamFullName(participant);
  return "";
}

function TournamentParticipantIsInBracketsFromSameRound(dtoTournament, iParticipantId, iIndex) {
  if (!dtoTournament || !hasSome(dtoTournament.brackets) || iParticipantId < 1) return false;
  var iIndexesToIgnore = [];
  if (iIndex > 0 && iIndex < 5)
      iIndexesToIgnore = [1, 2, 3, 4];
  else if (iIndex < 7)
      iIndexesToIgnore = [5, 6];
  else
      iIndexesToIgnore = [7];
  for (var i in dtoTournament.brackets) {
      if (includes(dtoTournament.brackets[i].iIndex, iIndexesToIgnore))
          continue;
      if (dtoTournament.brackets[i].summonerOne && dtoTournament.brackets[i].summonerOne.iSummonerId == iParticipantId)
          return true;
      if (dtoTournament.brackets[i].summonerTwo && dtoTournament.brackets[i].summonerTwo.iSummonerId == iParticipantId)
          return true;
  }
  return false;
}

function TournamentAppendViewStructure(elContainer, iTournamentSize) {
  elContainer.addClass("tournament-view t" + iTournamentSize);
  var iParticipants = iTournamentSize;
  var iDepth = Math.log(iParticipants) / Math.log(2);
  var iMatchIndexCount = 0;
  var iRoundMatches = 0;
  var sHtml = '';
  for (var i = iDepth; i > 2; i--) {
      iRoundMatches = Math.pow(2, i - 1) / 2;
      sHtml += '<div class="round">';
      for (var j = 0; j < iRoundMatches / 2; j++) {
          sHtml += '<div>';
          iMatchIndexCount++;
          sHtml += `<div class="match match-${iMatchIndexCount}"></div>`;
          iMatchIndexCount++;
          sHtml += `<div class="match match-${iMatchIndexCount}"></div>`;
          sHtml += '</div>';
      }
      sHtml += '</div>';
      iMatchIndexCount += Math.pow(2, i - 2);
  }
  elContainer.append(sHtml);
  iMatchIndexCount++;
  elContainer.append('<div class="round">' + `<div class="match match-${iMatchIndexCount}"></div>` + '</div>');
  iMatchIndexCount += 2;
  elContainer.append('<div class="round final">' + `<div class="match match-${iMatchIndexCount}"></div>` + '</div>');
  iMatchIndexCount--;
  elContainer.append('<div class="round">' + `<div class="match match-${iMatchIndexCount}"></div>` + '</div>');
  sHtml = '';
  for (var iRound = iDepth - 2; iRound > 0; iRound--) {
      iRoundMatches = Math.pow(2, iDepth - iRound) / 2;
      iMatchIndexCount = Math.pow(2, iDepth) - Math.pow(2, iDepth - iRound) - iRoundMatches;
      sHtml += '<div class="round">';
      for (var k = 0; k < iRoundMatches / 2; k++) {
          sHtml += '<div>';
          iMatchIndexCount++;
          sHtml += `<div class="match match-${iMatchIndexCount}"></div>`;
          iMatchIndexCount++;
          sHtml += `<div class="match match-${iMatchIndexCount}"></div>`;
          sHtml += '</div>';
      }
      sHtml += '</div>';
      iMatchIndexCount += Math.pow(2, i - 2);
  }
  elContainer.append(sHtml);
}

function TournamentRoundCompleted(dtoTournament, iRound) {
  var iParticipants = dtoTournament.iSize;
  var iDepth = Math.log(iParticipants) / Math.log(2);
  if (iRound < 0 || iRound > iDepth)
      return false;
  var iRoundMatches = Math.pow(2, iRound) / 2;
  var iStartingMatchIndex = Math.pow(2, iDepth) - Math.pow(2, iRound) + 1;
  var match;
  for (var i = 0; i < iRoundMatches; i++) {
      match = TournamentGetBracketByIndex(dtoTournament, iStartingMatchIndex + i);
      if (match.winnerId <= 0)
          return false;
  }
  return true;
}

function TournamentMatchPlayed(dtoTournament) {
  var count = 0;
  for (var i in dtoTournament.brackets)
      if (dtoTournament.brackets[i].winnerId > 0)
          count++;
  return count;
}

function TournamentGetCurrentPhase(dtoTournament) {
  var bCheckInPhase = TournamentGetCheckInTimerMs(dtoTournament) > 0;
  if (bCheckInPhase && !dtoTournament.bStarted)
      return "checkin";
  else if (!dtoTournament.bStarted && !dtoTournament.bClosed)
      return "registration";
  else if (dtoTournament.bStarted && !dtoTournament.bClosed)
      return "started";
  else if (dtoTournament.bStarted && dtoTournament.bClosed)
      return "closed";
}

function TournamentGetCheckInTimerMs(dtoTournament) {
  if (!timeDateHasValue(dtoTournament.dtReadyCheckEnd))
      return 0;
  return timeDifference(timeNow(), dtoTournament.dtReadyCheckEnd);
}

function TournamentICheckedIn(dtoTournament) {
  if (!isUserLogged() || !dtoTournament || !hasSome(dtoTournament.readyStates)) return false;
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One)
      for (var i in dtoTournament.readyStates)
          if (dtoTournament.readyStates[i].iParticipantId == WebUser.summoner.iSummonerId && dtoTournament.readyStates[i].bIsReady)
              return true;
  return false;
}

function TournamentParticipantSetPriority(dtoTournament, iParticipantId, bPriority) {
  var participant = TournamentGetParticipantById(dtoTournament, iParticipantId);
  if (participant)
      participant.bHasPriority = bPriority;
}

function TournamentGetParticipantCount(dtoTournament) {
  if (!dtoTournament)
      return 0;
  if (dtoTournament.iTeamSize == TournamentTeamSize.One && hasSome(dtoTournament.summonerPool))
      return dtoTournament.summonerPool.length;
  else if (dtoTournament.iTeamSize == TournamentTeamSize.Five && hasSome(dtoTournament.teamPool))
      return dtoTournament.teamPool.length;
  else
      return 0;
}

function AboutDocumentReady() {
  changeTitle(babel("about.aboutbrand"));
  $("img.hero").addClass("appear");
}

function AboutOnSignIn() {}

function AccountDataDocumentReady() {
  if (!isUserLogged()) {
      navigate("Home");
      return;
  }
  if (isUserGuest(true)) {
      AccountDataPageLoggedOut();
      return;
  }
  changeTitle(babel("accountdata.pagetitle"));
}

function AccountDataOnSignIn() {
  reloadPage();
}

function AccountDataPageLoggedOut() {
  $mainContent.children().not(".ad").remove();
  $mainContent.append('<div class="row nocontent"><i class="fad fa-globe-europe"></i><br><span>' + babel("toast.notinhomeregion") + '</span></div>');
}

function AccountDataClearData() {
  if (confirm(babel("base.areyousure"))) {
      clearAllStorage();
      window.location.reload(true);
  }
}

function AccountDataShowDeleteAccount() {
  $('#btnDeleteAccount').removeClass('dnone');
}

function AccountDataDeleteAccount() {
  ajaxCall('User', 'User', 'DeletePersonalData', null, true);
}

function AccountDataOsDeletePersonalData() {
  DeleteAllPersonalDataClient();
  navigate('Home');
}

function AchievementsDocumentReady() {
  changeTitle('Achievements');
  AchievementsShowAchievements();
  AchievementsOnSignIn();
  setNotificationNav("Achievements", false);
}

function AchievementsOnSignIn() {
  if (WebUser && WebUser.summoner)
      callGetAchievements("Achievements", WebUser.summoner.iSummonerId);
}

function AchievementsShowAchievements() {
  $("#row_achievements").empty();
  for (var i in AchievementsColl)
      AchievementsAppendAchievement(i, AchievementsColl[i]);
}

function AchievementsAppendAchievement(iAchievementType, objAchievement) {
  var objPar = {
      sTitle: objAchievement.title,
      sDescription: objAchievement.description,
      sCss: "teal",
      sEmoji: objAchievement.emoji,
      achievement: getAchievementWebUser(iAchievementType)
  };
  if (!objPar.achievement)
      objPar.sCss += " locked";
  $("#row_achievements").append(getTemplateHtml(AchievementShowcaseItemTemplate, objPar));
}

function AchievementsOsGetAchievements(ajax, obj) {
  if (!isUserLogged()) return;
  AchievementsShowAchievements();
}

function ChampionDocumentReady() {
  changeTitle('Loading...');
  var key = GetChampionKeyByName(getQueryStringByPos(0));
  var champion = LoadChampion(key);
  if (champion)
      ChampionLoadChampion(champion.data[Object.keys(champion.data)[0]]);
  else
      ChampionNotFound();
  $(".chmpn ul.tabs").tabs({
      onShow: function(tab) {
          ChampionOnShowTab(tab);
      }
  });
}

function ChampionOnSignIn() {}

function ChampionOnShowTab(tab) {
  if (tab != null)
      switch (tab.id) {
          default:
              break;
      }
}

function ChampionNotFound() {
  changeTitle('404 champion not found');
  $mainContent.children(".row:not(.ad)").addClass("dnone");
  $mainContent.children(".row.champ-not-found").removeClass("dnone");
}

function ChampionLoadChampion(Champ) {
  changeTitle(Champ.name + " - LoLSquare");
  $(".rowLoadPage").addClass("dnone");
  $("#Champion").removeClass("dnone");
  $('#ChampionLoadingArt').attr("src", GetChampionLoadingById(Champ.id));
  $('.champ-class.1').attr("src", cdnLink('/images/classes/' + Champ.tags[0].toLowerCase() + '.png'));
  $('.champ-class.1').attr("data-tooltip", Champ.tags[0]);
  $('.champ-class.1').removeClass("dnone");
  if (Champ.tags.length > 1) {
      $('.champ-class.2').attr("src", cdnLink('/images/classes/' + Champ.tags[1].toLowerCase() + '.png'));
      $('.champ-class.2').attr("data-tooltip", Champ.tags[1]);
      $('.champ-class.2').removeClass("dnone");
  }
  for (var property in Champ.info) {
      $('.info.' + property).attr('title', property + ': ' + Champ.info[property] + '/10');
      $('.info.' + property).append('<span class="text center">' + Champ.info[property] + '/10</span>');
      for (var i = 0; i < 10; i++)
          if (Champ.info[property] > i)
              $('.info.' + property).append('<i class="far fa-circle"></i>');
          else
              $('.info.' + property).append('<i class="far fa-circle"></i>');
  }
  $('#ChampionName').append(Champ.name);
  $('#ChampionTitle').append(Champ.title);
  $('#ChampionLore').append(Champ.lore);
  for (var ind in Champ.allytips)
      $('#allytips').append('<li>' + Champ.allytips[ind] + '</li>');
  for (var ind in Champ.allytips)
      $('#enemytips').append('<li>' + Champ.enemytips[ind] + '</li>');
  ChampionCreateRowBaseStat("Health", "total-health", Champ.stats.hp, Champ.stats.hpperlevel);
  ChampionCreateRowBaseStat("Mana", "total-mana", Champ.stats.mp, Champ.stats.mpperlevel);
  ChampionCreateRowBaseStat("Attack Damage", "ad", Champ.stats.attackdamage, Champ.stats.attackdamageperlevel);
  var iAS = 0.625;
  if (Champ.stats.attackspeedoffset)
      iAS = 0.625 / (1 + Champ.stats.attackspeedoffset);
  ChampionCreateRowBaseStat("Attack Speed", "as", iAS.toFixed(3), Champ.stats.attackspeedperlevel + '%');
  ChampionCreateRowBaseStat("Armor", "armor", Champ.stats.armor, Champ.stats.armorperlevel);
  ChampionCreateRowBaseStat("Magic Resist", "mr", Champ.stats.spellblock, Champ.stats.spellblockperlevel);
  ChampionCreateRowBaseStat("Health regen", "hpr", Champ.stats.hpregen, Champ.stats.hpregenperlevel);
  ChampionCreateRowBaseStat("Mana regen", "parr", Champ.stats.mpregen, Champ.stats.mpregenperlevel);
  ChampionCreateRowBaseStat("Range", "range", Champ.stats.attackrange);
  ChampionCreateRowBaseStat("Movement speed", "movspeed", Champ.stats.movespeed);
  ChampionPassive(Champ.passive);
  ChampionSkill('Q', Champ.spells[0]);
  ChampionSkill('W', Champ.spells[1]);
  ChampionSkill('E', Champ.spells[2]);
  ChampionSkill('R', Champ.spells[3]);
  for (var ind in Champ.skins) {
      var sSkinName = (Champ.skins[ind].name == "default" ? "Default" : Champ.skins[ind].name);
      $('#ChampionSkins').append('<div class="col s12 m6"><span>' + sSkinName + '</span><img class="materialboxed" src="' + ddragoncdn + '/img/champion/splash/' + Champ.id + "_" + Champ.skins[ind].num + '.jpg" alt="' + sSkinName + ' skin"></div>');
  }
  $('#ChampionSkins .materialboxed').materialbox();
}

function ChampionCreateRowBaseStat(sStatName, sStatIcon, value, perlevel) {
  var sHtml = "";
  sHtml += '<tr>';
  sHtml += '  <td>';
  sHtml += '      <img src="' + cdnLink("/images/stats_icons/icon-" + sStatIcon + ".png") + '" alt="' + sStatName + ' icon" title="' + sStatName + '">';
  sHtml += '  </td>';
  sHtml += '  <td>' + value + '</td>';
  sHtml += '  <td>' + (!isNullOrEmpty(perlevel) ? '(+' + perlevel + ')' : '') + '</td>';
  sHtml += '  <td>' + sStatName + '</td>';
  sHtml += '</tr>';
  $('#champ-base-stats tbody').append(sHtml);
}

function ChampionPassive(Passive) {
  var sHtml = "";
  sHtml += '<div class="row">';
  sHtml += '  <div class="col s12 l8">';
  sHtml += '    <img src="' + ddragoncdn + '/8.19.1/img/' + Passive.image.group + '/' + Passive.image.full + '" alt="' + Passive.name + ' icon" title="' + Passive.name + '">';
  sHtml += '    <h5 class="name">Passive - ' + Passive.name + '</h5>';
  sHtml += '  </div>';
  sHtml += '  <div class="col s12 l4">';
  sHtml += '    <p>' + Passive.description + '</p>';
  sHtml += '  </div>';
  sHtml += '</div>';
  $('#ChampSkills').append(sHtml);
}

function ChampionSkill(sKeyBind, Spell) {
  var sHtml = "";
  sHtml += '<div class="row">';
  sHtml += '  <div class="col s12 l8">';
  sHtml += '    <img src="' + ddragoncdn + '/' + getDDragonVersion("Champion") + '/img/' + Spell.image.group + '/' + Spell.image.full + '" alt="' + Spell.name + ' icon" title="' + Spell.name + '">';
  sHtml += '    <h5 class="name">' + sKeyBind + ' - ' + Spell.name + '</h5>';
  sHtml += '    <b>Cooldown:</b><span>' + Spell.cooldownBurn + '</span>';
  sHtml += '    <br>';
  sHtml += '    <b>Cost:</b><span>' + Spell.costBurn + '</span>';
  sHtml += '    <br>';
  sHtml += '    <b>Range:</b><span>' + Spell.rangeBurn + '</span>';
  sHtml += '    <br>';
  sHtml += '  </div>';
  sHtml += '  <div class="col s12 l4">';
  sHtml += '    <p>' + Spell.description + '</p>';
  sHtml += '  </div>';
  sHtml += '</div>';
  $('#ChampSkills').append(sHtml);
}

function ChangeLogDocumentReady() {
  changeTitle('Change log');
  for (var i in ChangeLog)
      ChangeLogAppendVersion(ChangeLog[i]);
}

function ChangeLogOnSignIn() {}

function ChangeLogAppendVersion(ver) {
  var bCurrent = appVersion == ver.major + '.' + ver.minor + '.' + ver.revision;
  var sHtml = '';
  sHtml += '<div class="row' + (bCurrent ? ' current' : '') + '">';
  sHtml += '  <div class="col s12"><h5>Version ' + ver.major + '.' + ver.minor + '.' + ver.revision + '<label class="right">' + timeShow(ver.date, 'dd/MM/yyyy') + '</label></h5></div>';
  sHtml += '  <div class="col s12"><div class="card"><div class="card-content"><div class="row"><div class="col s12">';
  sHtml += '<i class="far fa-sparkles left green-text"></i><b>New features</b>';
  sHtml += '<ul class="browser-default">' + ChangeLogAppendVersionList(ver.newfeatures) + '</ul>';
  sHtml += '<i class="far fa-debug left red-text"></i><b>Bugfix</b>';
  sHtml += '<ul class="browser-default">' + ChangeLogAppendVersionList(ver.bugfix) + '</ul>';
  sHtml += '</div></div></div></div></div>';
  $('.chnglg .timeline').append(sHtml);
}

function ChangeLogAppendVersionList(array) {
  var sHtml = '';
  for (var i in array)
      sHtml += '<li>' + array[i] + '</li>';
  return sHtml;
}
var ChangeLog = [{
  major: 0,
  minor: 0,
  revision: 1638,
  date: new Date(2019, 7, 25),
  newfeatures: ["The search is now much more powerful and returns summoners and teams with similar names", "Teams and summoners can now be shared easily through the share button", "Added texts in discover section to describe our features (only visible when not logged in)", "Reintroduced ads, we can eat again. Hurrah!"],
  bugfix: ["Restored Champion anniversary posts", "Fixed a bug about outdated javascript files being cached by the browser", "Resetting the passwords no longer shows the 'Welcome tour'", "Fixed sitemap generation", "Improved overall speed when Riot API calls are involved", "Fixed various issues about notifications", "Fixed a ton of other graphic and logic bugs", "Reduced bandwitdh usage", "Improved server performance for vaious operations"]
}, {
  major: 0,
  minor: 0,
  revision: 1536,
  date: new Date(2019, 7, 1),
  newfeatures: ["Trial members are now public and visible to anyone", "Age is no longer mandatory in curriculum page", "An additional attempt to simplify the registration process has been made", "Views counters have been removed, as it seems to add little extra value after the 'follow' feature has been implemented", "Footer size has been reduced", "Changelog, FAQ, and Send feedback sections have been moved on the bottom of the menu", "A shareable page for single match has been introduced", "Improved 'Discover' section", "Team matches are now paginated", "Improved summoner statistics, they load faster and are no longer left in an 'incomplete' state for hours", "Server performance enhanced", "Updated emoji pack"],
  bugfix: ["Trials can now be seen when not logged in", "Summoners at 100LP and at 0LP of the next tier are no longer treated as having the same total LP", "Rank for challenger summoners is now being displayed correctly", "Role images are being displayed properly again", "Resolved issues with emails", "Fixed a problem where certain errors received from the server could leave the client in an inconsistent state", "Fixed rounding errors on client", "Team leaderobard page has been restored"]
}, {
  major: 0,
  minor: 0,
  revision: 1479,
  date: new Date(2019, 6, 4),
  newfeatures: ["Website name changed to LolSquare", "Display nationality for each team member", "Improved registration and password change procedure", "Reworked cookies handling", "Improved autocomplete suggestions", "Layout improvements for mobile", "Added herald count in match statistics", "Completed team page", "Added a button to follow back followers", "Reworked summoner statistics", "Updated Terms of Service and Privacy Policy", "Improved social feed style", "A simulation of the create team can now be used by non registered users", "Added some texts to help the users understand what's going on"],
  bugfix: ["Team rank history fixed", "NA region not working", "Text messages moved to the bottom right of the screen", "Duplicate messages are no longer displayed", "Fixed summoner statistics calculation", "Fixed scroll when multiple scrollable elements are present", "Various feed posts generation fixes", "Fixed a bug for summoners using greek characters", "Some characters could not be used for teams", "Various performance enhancements", "Team leaderboard is now visible even if not logged in", "Team matches are not being deleted anymore"]
}, {
  major: 0,
  minor: 0,
  revision: 1354,
  date: new Date(2019, 4, 1),
  newfeatures: ["Feed home", "App new version available handler", "App offline handler", "Server offline handler", "Rework user options and notifications", "Numbers of team joined in search member results", "Already invited page summoner", "Link riot match", "New registration process", "Achievements"],
  bugfix: ["Match calculated twice for statistics", "App self reload bug"]
}, {
  major: 0,
  minor: 0,
  revision: 1275,
  date: new Date(2019, 2, 6),
  newfeatures: ["Follow summoners & teams", "News from summoner and teams followed", "Cross regions interactions", "Reworked search results members & search results teams"],
  bugfix: ["Update summoner", "Team matches recognition", "Champion page adjusted", "Scheduled matches for update adjusted"]
}, {
  major: 0,
  minor: 0,
  revision: 1189,
  date: new Date(2019, 0, 31),
  newfeatures: ["Team members statistics", "Updated rank season 9", "TLP variations page summoner", "Summoner seasonal statistics", "Summoner ladder position", "Live game summoner info", "Updated page my teams", "Team invite / Summoner join request reworked", "New lolsquare layout", "Reworked team buttons page summoner"],
  bugfix: ["Duplicated summoners", "Strange behavior for games with BOTs", "Suggested teams fail adjusted", "Reset page Search team bugfixed", "Input password adjusted", "Queue name summoner statistics adjusted"]
}, {
  major: 0,
  minor: 0,
  revision: 1071,
  date: new Date(2018, 11, 6),
  newfeatures: ["Team statistics.", "Matchlist and match detail summoner rework.", "Introduced notifications and newsletters by email.", "Rank promos status now visible in the summoner page.", "Instagram added to social links.", "Invite summoner rework.", "Framework upgrade (Materialize 1.0.0).", "Generic improvements both graphic and technical."],
  bugfix: ["Special characters created problems on our databases.", "Champion page occasionally remained in infinite loading.", "Other minor bugfixes."]
}, {
  major: 0,
  minor: 0,
  revision: 923,
  date: new Date(2018, 7, 30),
  newfeatures: ["Improvements to the server and client performance."],
  bugfix: ["Inability to invite from the summoner page."]
}, {
  major: 0,
  minor: 0,
  revision: 892,
  date: new Date(2018, 7, 12),
  newfeatures: ["Introduced Change log page.", "Notifications reworked.", "Pending join requests are now shown on \"My teams\" page.", "Search members now shows flex rank of the summoner.", "Removed autofill features from contracts."],
  bugfix: ["Join request didn't generate a notification.", "Kick member visual bug.", "Wrong contract settings after accept join request."]
}];

function CurriculumDocumentReady() {
  changeTitle(babel("curriculum.pagetitle"));
  $("#autocompleteNationality").autocomplete(natiolalityAutocompleteOptions());
  $('#selectPrimaryRole').append(getRoleOptions());
  $('#selectSecondaryRole').append(getRoleOptions());
  $('#selectSchedules').append(getSelectOptionFromEnum("SchedulesRange"));
  $('select').formSelect();
  setCheckboxValue('#checkBlockInvitations', WebUser.summoner && WebUser.summoner.bBlockInvites);
  if (!isUserLogged(true) || isUserGuest(true))
      CurriculumPendPage();
  else
      CurriculumLoadPage(WebUser.curriculum);
}

function CurriculumOnSignIn() {
  reloadPage();
}

function CurriculumPendPage() {
  $(".crrclm a").addClass("disabled");
  $(".crrclm input").attr("disabled", "disabled");
  $(".crrclm select").attr("disabled", "disabled");
}

function CurriculumDonePage() {
  $(".crrclm a").removeClass("disabled");
  $(".crrclm input").attr("disabled", false);
  $(".crrclm select").attr("disabled", false);
}

function CurriculumLoadPage(curriculum) {
  $("#selectPrimaryRole").val(curriculum.iPrimaryRole);
  $("#selectSecondaryRole").val(curriculum.iSecondaryRole);
  if (curriculum.bScheduleMorning)
      $('#selectSchedules option[value=1]').prop('selected', true);
  if (curriculum.bScheduleAfternoon)
      $('#selectSchedules option[value=2]').prop('selected', true);
  if (curriculum.bScheduleEvening)
      $('#selectSchedules option[value=3]').prop('selected', true);
  if (curriculum.bScheduleLateEvening)
      $('#selectSchedules option[value=4]').prop('selected', true);
  if (!isNullOrEmpty(curriculum.sNationality))
      $("#autocompleteNationality").val(getCountryNameFromCode(curriculum.sNationality));
  if (!isNullOrEmpty(curriculum.iBirthYear) && curriculum.iBirthYear != 0)
      $("#age").val(new Date().getFullYear() - curriculum.iBirthYear);
  if (curriculum.bAutogenerated)
      $('#cvSave').addClass('pulse');
  $('.crrclm select').formSelect();
  M.updateTextFields();
}

function CurriculumGetCurriculumFromPage() {
  var curriculum = {
      sNationality: '',
      iPrimaryRole: RoleType.Fill,
      iSecondaryRole: RoleType.Fill,
      iAge: null,
      bScheduleMorn: false,
      bScheduleAfter: false,
      bScheduleEve: false,
      bScheduleLateEve: false
  };
  if (!isNullOrEmpty($('#selectPrimaryRole').find(":selected").val()))
      curriculum.iPrimaryRole = parseInt($('#selectPrimaryRole').find(":selected").val());
  if (!isNullOrEmpty($('#selectSecondaryRole').find(":selected").val()))
      curriculum.iSecondaryRole = parseInt($('#selectSecondaryRole').find(":selected").val());
  $("#selectSchedules option:selected").each(function() {
      switch ($(this).val()) {
          case '1':
              curriculum.bScheduleMorn = true;
              break;
          case '2':
              curriculum.bScheduleAfter = true;
              break;
          case '3':
              curriculum.bScheduleEve = true;
              break;
          case '4':
              curriculum.bScheduleLateEve = true;
              break;
          default:
              break;
      }
  });
  if (!isNullOrEmpty($("#age").val()))
      curriculum.iAge = parseInt($("#age").val());
  curriculum.sNationality = getCountryCodeFromName($("#autocompleteNationality").val());
  return curriculum;
}

function CurriculumSaveCurriculum() {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var objParams = CurriculumGetCurriculumFromPage();
  if (CurriculumVerifyCurriculum(objParams))
      return;
  var objAjax = {
      sCode: 'Curriculum',
      sSvcPage: 'Curriculum',
      sMethod: 'SaveCurriculum',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function() {
          CurriculumPendPage();
      },
      fnDone: function() {
          CurriculumDonePage();
      },
      fnOs: function(ajax, obj) {
          var bFirstTimeSave = WebUser.curriculum.bAutogenerated && !obj.value.bAutogenerated;
          WebUser.curriculum = obj.value;
          if (!WebUser.curriculum.bAutogenerated)
              $('#cvSave').removeClass('pulse');
          toastSuccess(babel("toast.curriculumsaved"));
          if (bFirstTimeSave)
              showModalFindTeam();
      }
  };
  ajaxCallObj(objAjax, objParams, fnHandlers);
}

function CurriculumVerifyCurriculum(curriculum) {
  var bErrors = false;
  if (curriculum.iPrimaryRole === curriculum.iSecondaryRole && curriculum.iPrimaryRole !== RoleType.Fill) {
      toastError(babel("toast.sameroles"), "fad fa-user-tag");
      bErrors = true;
  }
  if (!curriculum.bScheduleMorn && !curriculum.bScheduleAfter && !curriculum.bScheduleEve && !curriculum.bScheduleLateEve)
      toastWarning(babel("toast.scheduleobligatory"));
  if (curriculum.iAge < 13 || curriculum.iAge > 80) {
      toastError(babel("toast.ageerror"));
      bErrors = true;
  }
  return bErrors;
}

function CurriculumCallBlockInvitations() {
  var bChecked = getCheckboxValue('#checkBlockInvitations');
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#checkBlockInvitations").prop("disabled", true);
      },
      fnDone: function(ajax) {
          $("#checkBlockInvitations").prop("disabled", false);
      }
  };
  callBlockInvites(bChecked, false, 'Curriculum', fnHandlers);
}
var EditTeamTeamId;
var EditTeamTeamLogo;
var EditTeamTeamLogoColor;
var EditTeamTeamColor;
var EditTeamAvailableColors = ['F44336', 'E91E63', '9C27B0', '673AB7', '3F51B5', '2196F3', '03A9F4', '00BCD4', '009688', '4CAF50', '8BC34A', 'CDDC39', 'FFEB3B', 'FFC107', 'FF9800', 'FF5722'];

function EditTeamDocumentReady() {
  EditTeamTeamLogo = 1;
  EditTeamTeamLogoColor = 1;
  EditTeamTeamColor = EditTeamAvailableColors[0];
  var EditTeamTeamId = getQueryStringByPos(0);
  if (!isNullOrEmpty(EditTeamTeamId))
      EditTeamTeamId = parseInt(EditTeamTeamId);
  if (isNaN(EditTeamTeamId))
      EditTeamTeamId = 0;
  $("#teamNationality").autocomplete(natiolalityAutocompleteOptions());
  EditTeamInitLogo();
  EditTeamInitColor();
  if (EditTeamTeamId > 0) {
      $("#btnBack").removeClass("dnone");
      callLoadTeam(EditTeamTeamId, true, 'EditTeam');
  } else {
      EditTeamPopulateTeam(EditTeamGetRandomTeam());
      $('#btnShowDelete').addClass("dnone");
      if (!isUserLogged()) {
          $("#EditTeamVisitorInfo").removeClass("dnone");
          $mainContent.find(".edit-row").addClass("view-only");
      }
  }
}

function EditTeamOnSignIn() {
  reloadPage();
}

function EditTeamPopulateTeam(team) {
  if (team.iTeamId > 0)
      changeTitle(babel("base.edit") + ' ' + team.sTag);
  else
      changeTitle(babel("editteam.pagetitlealt"));
  if (!isNullOrEmpty(team.sTag)) {
      $("#team_tag").val(team.sTag);
      $("#team_tag").next().addClass("active");
  }
  if (!isNullOrEmpty(team.sName)) {
      $("#team_name").val(team.sName);
      $("#team_name").next().addClass("active");
  }
  if (team.description && !isNullOrEmpty(team.description.sText)) {
      $("#team_desc").val(team.description.sText);
      resizeTextarea($('#team_desc'));
  }
  if (!isNullOrEmpty(team.sNationality))
      $("#teamNationality").val(getCountryNameFromCode(team.sNationality));
  if (!isNullOrEmpty(team.sIcon)) {
      var iconSplit = team.sIcon.split('(');
      EditTeamChangeLogo(iconSplit[1].replace(')', ''), iconSplit[0]);
  }
  EditTeamChangeColor(team.sColor);
  M.updateTextFields();
  $('#team_tag, #team_name, #team_desc').characterCounter();
}

function EditTeamPendAll() {
  $('.dttm input').attr("disabled", "disabled");
  $('.dttm .iconchooser').addClass("disabled");
  $('.dttm .logo-colors').addClass("disabled");
  $('.dttm .color-chooser').addClass("disabled");
  $('.dttm a').addClass("disabled");
}

function EditTeamDoneAll() {
  $('.dttm input').attr("disabled", false);
  $('.dttm .iconchooser').removeClass("disabled");
  $('.dttm .logo-colors').removeClass("disabled");
  $('.dttm .color-chooser').removeClass("disabled");
  $('.dttm a').removeClass("disabled");
}

function EditTeamShowDeleteTeam() {
  $('#btnShowDelete').addClass("dnone");
  $('#btnDelete').removeClass("hidden");
}

function EditTeamRandomizeButton() {
  EditTeamPopulateTeam(EditTeamGetRandomTeam());
}

function EditTeamGoBack() {
  navigate("Team", EditTeamTeamId);
}

function EditTeamOsLoadTeam(ajax, obj) {
  EditTeamTeamId = obj.value.iTeamId;
  EditTeamPopulateTeam(obj.value);
}

function EditTeamPendLoadTeam() {
  EditTeamPendAll();
}

function EditTeamDoneLoadTeam() {
  EditTeamDoneAll();
}

function EditTeamInitColor() {
  var $colors = $(".dttm .team-color-container");
  for (var i in EditTeamAvailableColors)
      $colors.append('<div id="' + EditTeamAvailableColors[i] + '" onclick="EditTeamChangeColor(\'' + EditTeamAvailableColors[i] + '\')" class="card hoverable" style="background-color: #' + EditTeamAvailableColors[i] + ';" alt="Team color"></div>');
}

function EditTeamChangeColor(sHex) {
  EditTeamTeamColor = sHex;
  $(".dttm .team-color-container > div").removeClass("active");
  $("#" + sHex).addClass("active");
}

function EditTeamInitLogo() {
  var $iconGrid = $("#modalTeamLogos .icon-grid");
  for (var i = 1; i < 48; i++) {
      var sIcon = "1(" + i + ")";
      $iconGrid.append('<div class="modal-icon-' + i + '" onclick="EditTeamChangeLogo(' + i + ', 1);"><img src="' + getTeamLogoLinkById(sIcon) + '"></div>');
  }
  $("#modalTeamLogos").modal();
}

function EditTeamChangeLogo(iLogo, iColor) {
  EditTeamTeamLogo = iLogo;
  EditTeamTeamLogoColor = iColor || 1;
  EditTeamUpdateLogo();
  $('#modalTeamLogos').modal('close');
  $("#modalTeamLogos .icon-grid > div").removeClass("active");
  $("#modalTeamLogos .icon-grid > div.modal-icon-" + EditTeamTeamLogo).addClass("active");
}

function EditTeamUpdateLogo() {
  $(".dttm .selected-logo img").attr("src", cdnLink('/images/Transparent.png'));
  $(".dttm .selected-logo img").attr("src", getTeamLogoLinkById(EditTeamTeamLogoColor + "(" + EditTeamTeamLogo + ")"));
  var $logoColors = $(".dttm .color-options-container");
  $logoColors.empty();
  if (EditTeamTeamLogo == 0) return;
  for (var i = 1; i < 6; i++)
      $logoColors.append('<img onclick="EditTeamChangeLogo(\'' + EditTeamTeamLogo + '\',\'' + i + '\')" alt="Logo color variation" class="logo-color-options' + (EditTeamTeamLogoColor == i ? ' active' : '') + '" src="' + getTeamLogoLinkById(i + "(" + EditTeamTeamLogo + ")") + '">');
}

function EditTeamCallApplyEditTeam() {
  var bCanContinue = true;
  var team = {
      iTeamId: EditTeamTeamId,
      sTag: $("#team_tag").val() || '',
      sName: $("#team_name").val() || '',
      sColor: EditTeamTeamColor,
      sNationality: getCountryCodeFromName($("#teamNationality").val()) || "",
      sIcon: EditTeamTeamLogoColor + "(" + EditTeamTeamLogo + ")",
      sDescription: $("#team_desc").val() || ''
  };
  if (isNullOrEmpty(team.sTag)) {
      bCanContinue = false;
      $('#team_tag').addClass("validate invalid");
  } else
      $('#team_tag').removeClass("validate invalid");
  if (isNullOrEmpty(team.sName)) {
      bCanContinue = false;
      $('#team_name').addClass("validate invalid");
  } else
      $('#team_name').removeClass("validate invalid");
  if (isNullOrEmpty(team.sColor)) {
      bCanContinue = false;
      $(".dttm .logo-colors").addClass("validate invalid");
  } else
      $('.dttm .logo-colors').removeClass("validate invalid");
  if (bCanContinue && isUserLogged(true) && !isUserGuest(true)) {
      var ajaxObj = {
          sCode: 'EditTeam',
          sSvcPage: 'Team',
          sMethod: 'ApplyEditTeam',
          bVProgress: true
      };
      var fnHandlers = {
          fnPend: function(ajax) {
              EditTeamPendAll();
          },
          fnDone: function(ajax) {
              EditTeamDoneAll();
          },
          fnOs: function(ajax, obj) {
              userJoinedTeam();
              if (obj.value.iTeamId > 0)
                  navigate('Team', obj.value.iTeamId);
              else
                  navigate('MyTeams');
              if (ajax.params.sTeamId > 1)
                  toastSuccess(babel("toast.teamsaved"));
              else
                  toastSuccess(babel("toast.teamcreated"));
          }
      };
      ajaxCallObj(ajaxObj, team, fnHandlers);
  }
}

function EditTeamDeleteTeam() {
  var fnHandlers = {
      fnPend: function(ajax) {
          EditTeamPendAll();
      },
      fnDone: function(ajax) {
          EditTeamDoneAll();
      },
      fnOs: function(ajax, obj) {
          navigate("MyTeams");
      }
  };
  callDisbandTeam(EditTeamTeamId, true, 'EditTeam', fnHandlers);
}

function EditTeamGetRandomTeam() {
  var nouns = ["knights", "heralds", "force", "legion", "family", "friends", "warriors", "cavaliers", "court", "sailors", "peasants", "runners", "farmers", "archers", "assassins", "tanks", "mages", "supports", "bruisers", "marksmen", "fighters", "disciples"];
  var sChampionName = "Teemo";
  if (ChampionList && ChampionList.data) {
      var champ = randomProperty(ChampionList.data);
      sChampionName = champ.name;
  }
  var sNoun = randomProperty(nouns);
  var team = {
      iTeamId: 0
  };
  team.sTag = sChampionName.charAt(0) + sNoun.charAt(0).toUpperCase() + mathRandomInt(100, 999);
  team.sName = babel("team-group-noun." + sNoun, null, {
      ChampionName: sChampionName
  });
  if (team.sName.length > 30)
      team.sName = team.sName.substring(0, 31);
  team.sColor = randomProperty(EditTeamAvailableColors);
  team.sNationality = guessNationality();
  team.sIcon = mathRandomInt(1, 5) + "(" + mathRandomInt(1, 47) + ")";
  return team;
}
var EditTournamentSize;
var EditTournamentTeamSize;
var EditTournamentTournamentIcon;

function EditTournamentDocumentReady() {
  EditTournamentSize = 0;
  EditTournamentTeamSize = 0;
  EditTournamentTournamentIcon = 1;
  EditTournamentInitIconChooser();
  TournamentAppendViewStructure($("#ts-8 > div"), 8);
  TournamentAppendViewStructure($("#ts-16 > div"), 16);
  TournamentAppendViewStructure($("#ts-32 > div"), 32);
  $("#tournament_host").val(WebUser.summoner ? WebUser.summoner.iSummonerId : 0);
}

function EditTournamentOnSignIn() {
  reloadPage();
}

function EditTournamentInitIconChooser() {
  var $iconGrid = $("#modalTournamentIcon .icon-grid");
  for (var i in TournamentIconsList)
      $iconGrid.append('<div class="modal-icon-' + TournamentIconsList[i].id + '" onclick="EditTournamentChangeIcon(' + TournamentIconsList[i].id + ');"><img class="tournament-icon" src="' + cdnLink("/images/runeterra_emblems/" + TournamentIconsList[i].file) + '"></div>');
  $("#modalTournamentIcon").modal();
  EditTournamentUpdateIcon();
}

function EditTournamentChangeIcon(iIcon) {
  EditTournamentTournamentIcon = iIcon;
  EditTournamentUpdateIcon();
  $('#modalTournamentIcon').modal('close');
}

function EditTournamentUpdateIcon() {
  $("#tournament_icon img").attr("src", cdnLink('/images/Transparent.png'));
  $("#tournament_icon img").attr("src", getTournamentIconLinkById(EditTournamentTournamentIcon));
  $("#modalTournamentIcon .icon-grid > div").removeClass("active");
  $("#modalTournamentIcon .icon-grid > div.modal-icon-" + EditTournamentTournamentIcon).addClass("active");
}

function EditTournamentSelectTeamSize(iTournamentTeamSize) {
  $("#tts-1v1,#tts-5v5").removeClass("selected");
  if (iTournamentTeamSize == TournamentTeamSize.One)
      $("#tts-1v1").addClass("selected");
  else if (iTournamentTeamSize == TournamentTeamSize.Five)
      $("#tts-5v5").addClass("selected");
  EditTournamentTeamSize = iTournamentTeamSize;
}

function EditTournamentSelectSize(iSize) {
  $("#ts-8,#ts-16,#ts-32").removeClass("selected");
  $("#ts-" + iSize).addClass("selected");
  EditTournamentSize = iSize;
}

function EditTournamentCreate() {
  CreateTournament($('#tournament_host').val(), $('#tournament_name').val(), EditTournamentSize, EditTournamentTeamSize, EditTournamentTournamentIcon);
}

function FAQDocumentReady() {
  if (FAQlist)
      FAQLoadPage();
  else
      getJSONCDN('/languages/faq-' + getCurrentLanguage().toLowerCase() + '.json?' + svnRevision, function(data) {
          FAQlist = data;
          FAQLoadPage();
      });
}

function FAQOnSignIn() {}
var FAQlist;

function FAQLoadPage() {
  changeTitle(babel("faq.pagetitle"));
  var iFAQId = parseInt(getQueryStringByPos(0));
  if (iFAQId > 0) {
      $("#row-faq-card h5").text(FAQlist[iFAQId].title);
      $("#row-faq-card .card-content").append(FAQlist[iFAQId].html);
      $("#row-faq-card").removeClass("dnone");
      $("#row-back-btn").removeClass("dnone");
  } else {
      for (var i in FAQlist)
          $("#faq-collection").append('<li><div class="collapsible-header"><span>' + FAQlist[i].title + '</span></div><div class="collapsible-body">' + FAQlist[i].html + '</div></li>');
      $('#row-faq-list .collapsible').collapsible();
      $("#row-faq-list").removeClass("dnone");
  }
}

function CheckErrorsDocumentReady() {
  changeTitle('Check errors');
  CallGetClientErrors();
}

function CheckErrorsOnSignIn() {
  CallGetClientErrors();
}

function CheckFeedbackDocumentReady() {
  changeTitle('Check feedbacks');
  CallGetFeedbacks();
}

function CheckFeedbackOnSignIn() {
  CallGetFeedbacks();
}

function CallGetClientErrors() {
  if (!isUserLogged(true)) return;
  ajaxCall(null, 'User', 'GetClientErrors', null, true);
}

function osGetClientErrors(ajax, obj) {
  $("#PageErrorsContainer").empty();
  if (!hasSome(obj.value)) return;
  for (var i = 0; i < obj.value.length; i++)
      if (obj.value[i].sVersion < 2168) {
          obj.value.splice(i, 1);
          i--;
      }
  obj.value.sort(function(a, b) {
      return b.sVersion - a.sVersion;
  });
  var sVersion;
  var sCollapsible = '<div class="col s12"><ul class="collapsible"></ul></div>';
  for (var i in obj.value)
      if (sVersion != obj.value[i].sVersion) {
          sVersion = obj.value[i].sVersion;
          var sTitle = '<div class="col s12"><h5 ' + (svnRevision == sVersion ? 'class="orange-text"' : '') + '>LoLSquare version ' + sVersion + '</h5></div>';
          $("#PageErrorsContainer").append('<div id="errVersion' + sVersion + '"><div class="row">' + sTitle + sCollapsible + '</div></div>');
      }
  orderListByProperty(obj.value, "iId", true);
  orderListByProperty(obj.value, "iTimestamp", true);
  orderListByProperty(obj.value, "iCount", true);
  for (var i in obj.value)
      $('#errVersion' + obj.value[i].sVersion + ' ul').append(getTemplateHtml(ErrorCollapsibleItemTemplate, obj.value[i]));
  $('.collapsible').collapsible();
}

function PageErrorsShowHideStatusZero() {
  $("#PageErrorsContainer .status0").toggleClass("dnone");
}

function CallGetFeedbacks() {
  if (!isUserLogged(true)) return;
  ajaxCall(null, 'User', 'GetFeedbacks', null, true);
}

function osGetFeedbacks(ajax, obj) {
  $mainContent.empty();
  if (obj.value == null) return;
  obj.value.sort(function(a, b) {
      return b.iFeedbackId - a.iFeedbackId;
  });
  var sHtml = '<div class="row"><div class="col s12"><h5>Feedback</h5></div><div class="col s12"><ul class="collapsible">';
  for (var i in obj.value)
      sHtml += getTemplateHtml(FeedbackCollapsibleItemTemplate, obj.value[i]);
  sHtml += '</ul></div></div>';
  $mainContent.append(sHtml);
  $('.collapsible').collapsible();
}
var HomeTournament;

function HomeDocumentReady() {
  changeTitle('LoLSquare - LoL Team Manager');
  $('#search-your-summoner input').keypress(function(event) {
      if (event.keyCode != 13)
          return;
      HomeCallLoadSummBtnClick();
      event.preventDefault();
      return false;
  });
  HomeLoadFirstSteps();
}

function HomeOnSignIn() {
  reloadPage();
}

function HomeCallLoadSummBtnClick() {
  var sSearched = $("#search-your-summoner input").val();
  if (!isNullOrEmpty(sSearched)) {
      var sMode = getQueryStringByPos(0);
      if (!isNullOrEmpty(sMode))
          navigate("SearchResults", sSearched + "/" + sMode);
      else
          navigate("SearchResults", sSearched);
  }
}

function HomeLoadFirstSteps() {
  var objPar = {
      bRegisterComplete: isUserLogged(),
      bRegisterLocked: false,
      bCompileCvComplete: WebUser.curriculum && !WebUser.curriculum.bAutogenerated,
      bCompileCvLocked: false,
      bFindTeamComplete: hasSome(WebUser.teams),
      bFindTeamLocked: false
  };
  if (objPar.bFindTeamComplete) {
      $("#user-first-steps").addClass("dnone");
      return;
  }
  objPar.bCompileCvLocked = !objPar.bRegisterComplete;
  objPar.bFindTeamLocked = !objPar.bCompileCvComplete;
  $("#user-first-steps").empty().append(getTemplateHtml(UserFirstStepsItemTemplate, objPar)).removeClass("dnone");
}

function HomeCallLoadTournament() {
  if (HomeTournament) {
      HomeAppendTournamentList();
      return;
  }
  var objAjax = {
      sCode: 'Home',
      sSvcPage: 'Tournament',
      sMethod: 'GetTournamentList',
      bVProgress: true
  };
  var fnHandlers = {
      fnOs: function(ajax, obj) {
          if (!obj || !obj.value)
              return;
          HomeTournament = obj.value;
          HomeTournament.sort(function(a, b) {
              return timeToMs(a.dtDate) - timeToMs(b.dtDate);
          });
          HomeAppendTournamentList();
      }
  };
  ajaxCallObj(objAjax, {
      iTournamentTeamSize: TournamentTeamSize.One,
      bOnlyFeatured: true
  }, fnHandlers);
}

function HomeAppendTournamentList() {
  $("#rowHomeTournament > .col:not(.ttl)").remove();
  var bNoTournamentToShow = true;
  if (hasSome(HomeTournament))
      for (var i in HomeTournament)
          if (HomeTournament[i].bIsFeatured && !HomeTournament[i].bClosed) {
              bNoTournamentToShow = false;
              $('#rowHomeTournament').append('<div class="col s12 m6">' + getTemplateHtml(HomeTournamentHeroCardItemTemplate, HomeTournament[i]) + '</div>');
          }
  if (bNoTournamentToShow)
      $('#rowHomeNoTournament').removeClass("dnone");
  else
      $('#rowHomeNoTournament').addClass("dnone");
  $("#rowHomeTournament").removeClass("dnone");
}

function HomeTournamentGetThreeParticipants(dtoTournament) {
  var arrIndex = [];
  if (dtoTournament.summonerPool.length > 4)
      for (var i = 0; i < 4; i++) {
          var bFound = false;
          while (!bFound) {
              var j = mathRandomInt(0, dtoTournament.summonerPool.length - 1);
              if (!arrIndex.includes(j)) {
                  arrIndex.push(j);
                  bFound = true;
              }
          }
      }
  else
      for (var i = 0; i < dtoTournament.summonerPool.length; i++)
          arrIndex.push(i);
  var sHtml = "";
  for (var i in arrIndex)
      sHtml += getTemplateHtml(SummonerImageItemTemplate, {
          summoner: dtoTournament.summonerPool[arrIndex[i]]
      });
  return sHtml;
}

function MatchDocumentReady() {
  var iMatchId = parseInt(getQueryStringByPos(0));
  if (isNaN(iMatchId) || iMatchId < 0) {
      navigate('NoContent');
      return;
  }
  MatchCallGetMatchDetail(iMatchId);
}

function MatchOnSignIn() {}

function MatchCallGetMatchDetail(iMatchId) {
  var ajaxObj = {
      sCode: "Match",
      sSvcPage: 'Match',
      sMethod: 'GetMatchDetail',
      bVProgress: true
  };
  var fnHandlers = {
      fnOs: function(ajax, obj) {
          if (!obj.value) {
              navigate('NoContent');
              return;
          }
          MatchShowMatch(obj.value);
      }
  };
  ajaxCallObj(ajaxObj, {
      lGameId: iMatchId
  }, fnHandlers);
}

function MatchShowMatch(objMatchData) {
  changeTitle('Match');
  $mainContent.find(".rowLoadPage").remove();
  MatchDataExtrapolateMoreInformation(objMatchData);
  $mainContent.find(".matchdata").append(getTemplateHtml(MatchDataPageItemTemplate, objMatchData));
  orderListByProperty(objMatchData.playerMatchDataCollection, "iRole");
  orderListByProperty(objMatchData.playerMatchDataCollection, "teamId");
  for (var i in objMatchData.playerMatchDataCollection) {
      var participant = objMatchData.playerMatchDataCollection[i];
      $mainContent.find(".row.participants").append(getTemplateHtml(MatchDataParticipantItemTemplate, participant));
  }
  MatchDataDetailDamageDealtToChamps($mainContent, objMatchData);
  $mainContent.find(".tooltipped").tooltip({
      enterDelay: 500
  });
  InitItemsTooltips();
}
var MyTeamsInvitations;
var MyTeamJoinRequests;
pageVars.push("MyTeamsInvitations");
pageVars.push("MyTeamJoinRequests");

function MyTeamsDocumentReady() {
  MyTeamsInvitations = null;
  MyTeamJoinRequests = null;
  changeTitle(babel("myteams.pagetitle"));
  MyTeamsPopulatePage();
  MyTeamsOnSignIn();
}

function MyTeamsOnSignIn() {
  callLoadMyTeams('MyTeams', true);
}

function MyTeamsPopulatePage() {
  MyTeamsCreateTeamsList();
  MyTeamsCreateInvitationsList();
  MyTeamsCreateJoinRequestsList();
}

function MyTeamsOsLoadMyTeams(ajax, obj) {
  if (obj.AdditionalData != null && obj.AdditionalData.invites != null)
      MyTeamsInvitations = obj.AdditionalData.invites;
  if (obj.AdditionalData != null && obj.AdditionalData.joinrequests != null)
      MyTeamJoinRequests = obj.AdditionalData.joinrequests;
  MyTeamsPopulatePage();
}

function MyTeamsCreateTeamsList() {
  $("#teamscontainer").empty();
  if (WebUser.teams)
      for (var i = 0; i < WebUser.teams.length; i++)
          MyTeamsCreateTeam(WebUser.teams[i]);
  if (WebUser.teams == null || WebUser.teams.length < 3)
      $("#teamscontainer").append(getTemplateHtml(MyTeams_NewTeamItemTemplate));
}

function MyTeamsCreateTeam(team) {
  if (!team) return;
  $("#teamscontainer").append('<div class="col s12 m4">' + getTemplateHtml(MyTeams_TeamCardItemTemplate, team) + '</div>');
}

function MyTeamsCreateInvitationsList() {
  var $container = $("#row_invites");
  $container.empty();
  if (MyTeamsInvitations == null || MyTeamsInvitations.length == 0) return;
  for (var i in MyTeamsInvitations) {
      var invite = MyTeamsInvitations[i];
      var objPar = {
          team: invite,
          date: invite.junctionData.dtCreationDate,
          bInvite: true
      };
      $container.append(getTemplateHtml(TicketInviteItemTemplate, objPar));
  }
}

function MyTeamsCreateJoinRequestsList() {
  var $container = $("#row_requests");
  $container.empty();
  if (MyTeamJoinRequests == null || MyTeamJoinRequests.length == 0) return;
  for (var i in MyTeamJoinRequests) {
      var invite = MyTeamJoinRequests[i];
      var objPar = {
          team: invite,
          date: invite.junctionData.dtCreationDate,
          bJoinRequest: true
      };
      $container.append(getTemplateHtml(TicketInviteItemTemplate, objPar));
  }
}

function MyTeamsPendInvite(iTeamId) {
  $(".ticket." + iTeamId).addClass("disabled");
  $(".ticket." + iTeamId + " a").addClass("disabled");
}

function MyTeamsDoneInvite(iTeamId) {
  $(".ticket." + iTeamId).removeClass("disabled");
  $(".ticket." + iTeamId + " a").removeClass("disabled");
}

function MyTeamsRemoveInvite(iTeamId) {
  if (MyTeamsInvitations == null || MyTeamsInvitations.length == 0) return;
  for (var i in MyTeamsInvitations)
      if (MyTeamsInvitations[i].iTeamId == iTeamId) {
          MyTeamsInvitations.splice(i, 1);
          break;
      }
  if (MyTeamsInvitations.length == 0)
      setNotificationNav('MyTeams', false);
}

function MyTeamsRemoveRequest(iTeamId) {
  if (MyTeamJoinRequests == null || MyTeamJoinRequests.length == 0) return;
  for (var i in MyTeamJoinRequests)
      if (MyTeamJoinRequests[i].iTeamId == iTeamId) {
          MyTeamJoinRequests.splice(i, 1);
          break;
      }
}

function MyTeamsCallAcceptInvite(iTeamId) {
  var fnHandlers = {
      fnPend: function(ajax) {
          MyTeamsPendInvite(ajax.params.iTeamId);
      },
      fnOe: function(ajax) {
          MyTeamsDoneInvite(ajax.params.iTeamId);
      },
      fnOs: function(ajax) {
          MyTeamsOnSignIn();
      }
  };
  callAcceptInvite('MyTeams', iTeamId, false, fnHandlers);
}

function MyTeamsCallDeclineInvite(iTeamId) {
  var fnHandlers = {
      fnPend: function(ajax) {
          MyTeamsPendInvite(ajax.params.iTeamId);
      },
      fnOe: function(ajax) {
          MyTeamsDoneInvite(ajax.params.iTeamId);
      },
      fnOs: function(ajax) {
          MyTeamsRemoveInvite(ajax.params.iTeamId);
          MyTeamsCreateInvitationsList();
      }
  };
  callDeclineInvite('MyTeams', iTeamId, false, fnHandlers);
}

function MyTeamsCallCancelJoin(iTeamId) {
  var fnHandlers = {
      fnPend: function(ajax) {
          MyTeamsPendInvite(ajax.params.iTeamId);
      },
      fnOe: function(ajax) {
          MyTeamsDoneInvite(ajax.params.iTeamId);
      },
      fnOs: function(ajax) {
          MyTeamsRemoveRequest(ajax.params.iTeamId);
          MyTeamsCreateJoinRequestsList();
      }
  };
  callCancelJoin('MyTeams', iTeamId, false, fnHandlers);
}

function TournamentsDocumentReady() {
  changeTitle('Loading...');
  changeTitle('Tournaments');
}

function TournamentsOnSignIn() {}

function PageXDocumentReady() {
  changeTitle("PageX");
}

function PageXOnSignIn() {}

function PageXLoadTournament() {
  var iTournamentId = parseInt($('#tournament_id').val());
  if (isNaN(iTournamentId) || iTournamentId <= 0) {
      toastError(babel("tournament.tournamentnotfound"));
      return;
  }
  var objAjax = {
      sCode: 'PageX',
      sSvcPage: 'Tournament',
      sMethod: 'LoadTournament',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $mainContent.find('#btnPageXSearchTournament').addClass('disabled');
      },
      fnDone: function(ajax) {
          $mainContent.find('#btnPageXSearchTournament').removeClass('disabled');
      },
      fnOs: function(ajax, obj) {
          if (!obj || !obj.value) {
              toastError(babel("tournament.tournamentnotfound"));
              return;
          }
          setCheckboxValue('#tournament_featured', obj.value.bIsFeatured);
          $("#tournament_desc").text(obj.value.sFeaturedDescription);
          resizeTextarea($("#tournament_desc"));
          $("#tournament_url").val(obj.value.sFeaturedUrl);
          $("#tournament_image").val(obj.value.sFeaturedImage);
          $("#tournament_primary_color").val(obj.value.sFeaturedMainColor);
          $("#tournament_triadic_color").val(obj.value.sFeaturedSecondaryColor);
          M.updateTextFields();
          $mainContent.find(".featured-info").slideDown();
      }
  };
  ajaxCallObj(objAjax, {
      iTournamentId: iTournamentId
  }, fnHandlers);
}

function PageXSetFeaturedInfo() {
  tournamentSetFeaturedInfo(parseInt($('#tournament_id').val()), getCheckboxValue('#tournament_featured'), $('#tournament_desc').val(), $('#tournament_url').val(), $('#tournament_primary_color').val(), $('#tournament_triadic_color').val(), $('#tournament_image').val());
}
var ReportsMode;

function ReportsDocumentReady() {
  if (!isUserLogged(true) || !WebUser.bIsAdmin)
      return;
  ReportsMode = null;
  changeTitle('Reports');
}

function ReportsOnSignIn() {
  reloadPage();
}

function ReportsCleanPage() {
  $(".row-report, .row-validation").remove();
}

function ReportsCallGetWaitingValidation() {
  ReportsCleanPage();
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'Administration',
      sMethod: 'GetTextsWaitingForValidation',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".row-mode a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".row-mode a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          ReportsMode = "WV";
          for (var i in obj.value)
              $mainContent.append(getTemplateHtml(ReportsCardValidationItemTemplate, obj.value[i]));
      }
  };
  ajaxCallObj(ajaxObj, {}, fnHandlers);
}

function ReportActionApproveText(iTextId) {
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'Administration',
      sMethod: 'ApproveText',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#row-validation-" + iTextId + " a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#row-validation-" + iTextId + " a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          $("#row-validation-" + iTextId).remove();
      }
  };
  ajaxCallObj(ajaxObj, {
      iTextId: iTextId
  }, fnHandlers);
}

function ReportActionRemoveText(iTextId) {
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'Administration',
      sMethod: 'RemoveText',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#row-validation-" + iTextId + " a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#row-validation-" + iTextId + " a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          $("#row-validation-" + iTextId).remove();
      }
  };
  ajaxCallObj(ajaxObj, {
      iTextId: iTextId
  }, fnHandlers);
}

function ReportsCallGetReport() {
  ReportsCleanPage();
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'Administration',
      sMethod: 'GetReports',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".row-mode a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".row-mode a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          ReportsMode = "R";
          for (var i in obj.value)
              $mainContent.append(getTemplateHtml(ReportsCardReportItemTemplate, obj.value[i]));
      }
  };
  ajaxCallObj(ajaxObj, {}, fnHandlers);
}

function ReportActionIgnoreReport(iReportId) {
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'Administration',
      sMethod: 'IgnoreReport',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#row-report-" + iReportId + " a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#row-report-" + iReportId + " a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          $("#row-report-" + iReportId).remove();
      }
  };
  ajaxCallObj(ajaxObj, {
      iReportId: iReportId
  }, fnHandlers);
}

function ReportActionAcceptReport(iReportId) {
  var ajaxObj = {
      sCode: 'User',
      sSvcPage: 'Administration',
      sMethod: 'AcceptReport',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#row-report-" + iReportId + " a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#row-report-" + iReportId + " a").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          $("#row-report-" + iReportId).remove();
      }
  };
  ajaxCallObj(ajaxObj, {
      iReportId: iReportId
  }, fnHandlers);
}
var SearchMemberIdSlider = "#rankslider";
var SearchMemberIdSliderInputField = ".slider-rank";
var SearchMemberSearchedResults;

function SearchMemberDocumentReady() {
  changeTitle('Search member');
  $("#filterNationality").autocomplete(natiolalityAutocompleteOptions());
  $('#filterRole').append(getRoleOptions());
  $('#filterSchedules').append(getSelectOptionFromEnum("SchedulesRange"));
  createRanksSlider(SearchMemberIdSlider, SearchMemberIdSliderInputField);
  if (SearchMemberSearchedResults)
      SearchMemberShowMembers();
}

function SearchMemberOnSignIn() {}

function SearchMemberPendPage() {
  $(".srchmm a").addClass("disabled");
  $(".srchmm .card.filters input").attr("disabled", "disabled");
  $(".srchmm .card.filters select").attr("disabled", "disabled");
  disableSlider(SearchMemberIdSlider);
}

function SearchMemberDonePage() {
  $(".srchmm a").removeClass("disabled");
  $(".srchmm .card.filters input").attr("disabled", false);
  $(".srchmm .card.filters select").attr("disabled", false);
  enableSlider(SearchMemberIdSlider);
}

function SearchMemberOnclickReset() {
  SearchMemberSearchedResults = null;
  reloadPage();
}

function SearchMemberOnclickSearch() {
  var filters = {
      sNationality: '',
      iRole: '',
      sSchedules: '',
      iRankMin: 0,
      iRankMax: 0,
      iQueue: getSelectedRadioValue("#filterQueue", "radioQueue"),
      iTeamsMin: 0,
      iTeamsMax: 3
  };
  filters.sNationality = getCountryCodeFromName($("#filterNationality").val());
  filters.iRole = $('#filterRole').find(":selected").val();
  $("#filterSchedules option:selected").each(function() {
      filters.sSchedules += $(this).val() + ',';
  });
  if (filters.sSchedules !== "") {
      if (filters.sSchedules.startsWith(","))
          filters.sSchedules = filters.sSchedules.substr(1);
      filters.sSchedules = filters.sSchedules.substring(0, filters.sSchedules.length - 1);
  }
  if (getCheckboxValue("#filterHasNoTeam"))
      filters.iTeamsMax = 0;
  filters.iRankMin = getMinRankFromRankSlider(SearchMemberIdSlider);
  filters.iRankMax = getMaxRankFromRankSlider(SearchMemberIdSlider);
  var ajaxObj = {
      sCode: 'SearchMember',
      sSvcPage: 'Summoner',
      sMethod: 'SearchMembers',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          SearchMemberClearResults();
          SearchMemberPendPage();
      },
      fnDone: function(ajax) {
          SearchMemberDonePage();
      },
      fnOs: function(ajax, obj) {
          SearchMemberSearchedResults = obj.value;
          SearchMemberShowMembers();
          if (!windowLarge())
              goToByScroll("membersFound");
      }
  };
  ajaxCallObj(ajaxObj, filters, fnHandlers);
}

function SearchMemberClearResults() {
  $('#membersFound').empty();
}

function SearchMemberShowMembers() {
  SearchMemberClearResults();
  if (!SearchMemberSearchedResults || SearchMemberSearchedResults.length == 0) {
      $('.srchmm .nocontent span').text(babel('base.nothingfound'));
      return;
  }
  $('#membersFound').append(getTemplateHtml(SearchMemberListItemHeaderItemTemplate));
  for (var ind in SearchMemberSearchedResults)
      $('#membersFound').append(getTemplateHtml(SearchMemberListItemItemTemplate, SearchMemberSearchedResults[ind]));
  $('#membersFound li .dropdown-trigger').dropdown();
}

function SearchMemberInviteSummoner(iSummonerId) {
  if (iSummonerId > 0 && SearchMemberSearchedResults)
      for (var ind in SearchMemberSearchedResults)
          if (SearchMemberSearchedResults[ind].iSummonerId == iSummonerId) {
              openModalInviteSummoner(SearchMemberSearchedResults[ind]);
              return;
          }
  toastError("Something went wrong, try reloading the page.");
}
var SearchResultsList;

function SearchResultsDocumentReady() {
  changeTitle(babel("searchresults.pagetitle"));
  var sSearched = getQueryStringByPos(0);
  if (isNullOrEmpty(sSearched))
      return;
  $mainContent.find("#SearchResultsTitle").text(babel("searchresults.resultsfor") + ' "' + sSearched + '"');
  SearchResultsCallSearch(sSearched);
}

function SearchResultsOnSignIn() {}

function SearchResultsCallSearch(sSearched) {
  var ajaxObj = {
      sCode: 'Search',
      sSvcPage: 'User',
      sMethod: 'Search',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function() {
          $("#waiting_text").removeClass("dnone");
      },
      fnDone: function() {
          $("#waiting_text").remove();
      },
      fnOs: function(ajax, obj) {
          var $ul;
          if (hasSome(obj.value.summoners)) {
              $ul = $("#SearchResultsSummoners ul");
              for (var i in obj.value.summoners)
                  $ul.append(getTemplateHtml(SearchResultsSummonerItemTemplate, obj.value.summoners[i]));
              $("#SearchResultsSummoners").removeClass("dnone");
          } else
              $("#SearchResultsSummoners").remove();
          if (hasSome(obj.value.teams)) {
              $ul = $("#SearchResultsTeams ul");
              for (var i in obj.value.teams)
                  $ul.append(getTemplateHtml(SearchResultsTeamItemTemplate, obj.value.teams[i]));
              $("#SearchResultsTeams").removeClass("dnone");
          } else
              $("#SearchResultsTeams").remove();
          var sMode = getQueryStringByPos(1);
          if (!isNullOrEmpty(sMode)) {
              if (sMode.toLowerCase() == "register" || sMode.toLowerCase() == "changepassword") {
                  $("#SearchResultsSummoners > .col > h5").text(babel("searchresults.selectyoursummoner"));
                  $("#SearchResultsTeams").remove();
              }
          }
      }
  };
  ajaxCallObj(ajaxObj, {
      sSearched: sSearched
  }, fnHandlers);
}

function SearchSummonerDocumentReady() {
  var sMode = getQueryStringByPos(0);
  if (isNullOrEmpty(sMode))
      sMode = "";
  switch (sMode.toLowerCase()) {
      case "register":
          changeTitle(babel("base.register"));
          $mainContent.find(".row-register").removeClass("dnone");
          $("#search-your-summoner input").attr("placeholder", babel("base.searchyoursummoner"));
          break;
      case "changepassword":
          changeTitle(babel("base.changepassword"));
          $mainContent.find(".row-changepassword").removeClass("dnone");
          $("#search-your-summoner input").attr("placeholder", babel("base.searchyoursummoner"));
          break;
      default:
          changeTitle(babel("searchsummoner.pagetitle"));
          $mainContent.find(".row-base").removeClass("dnone");
          break;
  }
  $('#search-your-summoner input').keypress(function(event) {
      if (event.keyCode != 13)
          return;
      SearchSummonerCallLoadSummBtnClick();
      event.preventDefault();
      return false;
  });
}

function SearchSummonerOnSignIn() {}

function SearchSummonerCallLoadSummBtnClick() {
  var sSearched = $("#search-your-summoner input").val();
  if (!isNullOrEmpty(sSearched)) {
      var sMode = getQueryStringByPos(0);
      if (!isNullOrEmpty(sMode))
          navigate("SearchResults", sSearched + "/" + sMode);
      else
          navigate("SearchResults", sSearched);
  }
}
var SearchTeamIdSlider = "#rankslider";
var SearchTeamIdSliderInputField = ".slider-rank";
var SearchTeamSearchedResults;

function SearchTeamDocumentReady() {
  changeTitle('Search team');
  $("#filterNationality").autocomplete(natiolalityAutocompleteOptions());
  $('#filterRoles').append(getRoleOptions());
  $('#filterSchedules').append(getSelectOptionFromEnum("SchedulesRange"));
  createRanksSlider(SearchTeamIdSlider, SearchTeamIdSliderInputField);
  if (SearchTeamSearchedResults)
      SearchTeamShowTeams();
}

function SearchTeamOnSignIn() {}

function SearchTeamPendPage() {
  $(".srchtm .card.filters input, .card.filters select").prop({
      disabled: true
  });
  disableSlider(SearchTeamIdSlider);
  $('.srchtm a').addClass('disabled');
}

function SearchTeamDonePage() {
  $(".srchtm .card.filters input, .card.filters select").prop({
      disabled: false
  });
  enableSlider(SearchTeamIdSlider);
  $('.srchtm a').removeClass('disabled');
}

function SearchTeamOnclickReset() {
  SearchTeamSearchedResults = null;
  reloadPage();
}

function SearchTeamOnclickSearch() {
  var filters = {
      sNationality: '',
      sOpenPositions: '',
      sSchedules: '',
      iRankMin: 0,
      iRankMax: 0,
      iGamesMin: 0,
      iGamesMax: 0,
      iMembersMin: 0,
      iMembersMax: 0
  };
  filters.sNationality = getCountryCodeFromName($("#filterNationality").val());
  $("#filterRoles option:selected").each(function() {
      filters.sOpenPositions += $(this).val() + ',';
  });
  if (filters.sOpenPositions != "")
      filters.sOpenPositions = filters.sOpenPositions.substring(0, filters.sOpenPositions.length - 1);
  $("#filterSchedules option:selected").each(function() {
      filters.sSchedules += $(this).val() + ',';
  });
  if (filters.sSchedules !== "")
      filters.sSchedules = filters.sSchedules.substring(0, filters.sSchedules.length - 1);
  filters.iRankMin = getMinRankFromRankSlider(SearchTeamIdSlider);
  filters.iRankMax = getMaxRankFromRankSlider(SearchTeamIdSlider);
  filters.iGamesMin = $("#filterGamesMin").val();
  filters.iGamesMax = $("#filterGamesMax").val();
  filters.iMembersMin = $("#filterMembersMin").val();
  filters.iMembersMax = $("#filterMembersMax").val();
  var bErrors = false;
  if (filters.iGamesMax > 0 && filters.iGamesMin > filters.iGamesMax) {
      toastError('Minimum games played are greater than the maximum ones');
      bErrors = true;
  }
  if (filters.iMembersMin > 9 || filters.iMembersMax > 9) {
      toastError('A team can have a maximum of 9 members');
      bErrors = true;
  } else if (filters.iMembersMax > 0 && filters.iMembersMin > filters.iMembersMax) {
      toastError('Minimum members are greater than the maximum ones');
      bErrors = true;
  }
  if (bErrors)
      return;
  ajaxCall('SearchTeam', 'Team', 'SearchTeams', filters, true);
}

function SearchTeamPendSearchTeams() {
  SearchTeamClearTeams();
  SearchTeamPendPage();
}

function SearchTeamDoneSearchTeams() {
  SearchTeamDonePage();
}

function SearchTeamOsSearchTeams(ajax, obj) {
  SearchTeamSearchedResults = obj.value;
  SearchTeamShowTeams();
  if (!windowLarge())
      goToByScroll("teamsFound");
}

function SearchTeamSuggestedTeams() {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  ajaxCall('SearchTeam', 'Summoner', 'GetSuggestedTeams', null, true);
}

function SearchTeamPendGetSuggestedTeams() {
  SearchTeamClearTeams();
  SearchTeamPendPage();
}

function SearchTeamDoneGetSuggestedTeams() {
  SearchTeamDonePage();
}

function SearchTeamOsGetSuggestedTeams(ajax, obj) {
  SearchTeamSearchedResults = obj.value;
  SearchTeamShowTeams();
  if (!windowLarge())
      goToByScroll("teamsFound");
}

function SearchTeamClearTeams() {
  $('#teamsFound').empty();
}

function SearchTeamShowTeams() {
  SearchTeamClearTeams();
  if (!SearchTeamSearchedResults || SearchTeamSearchedResults.length == 0) {
      $('.srchtm .nocontent span').text(babel('base.nothingfound'));
      return;
  }
  $('#teamsFound').append(getTemplateHtml(SearchTeamListItemHeaderItemTemplate));
  for (var ind in SearchTeamSearchedResults)
      $('#teamsFound').append(getTemplateHtml(SearchTeamListItemItemTemplate, SearchTeamSearchedResults[ind]));
  $('#teamsFound li .dropdown-trigger').dropdown();
}

function SearchTeamOptionsLI(iTeamId) {
  var sHtml = "";
  if (imMemberByTeamId(iTeamId))
      sHtml = '<li class="disabled"><a>' + babel("searchteam.alreadyinthisteam") + '</a></li>';
  else
      for (var i in RoleType) {
          sHtml += '<li class="joinrequestbtn">';
          sHtml += '    <a onclick="SearchTeamCallApplyToTeam(' + iTeamId + ',' + RoleType[i] + ');">';
          sHtml += getTemplateHtml(RoleImageItemTemplate, {
              css: "left",
              iRole: RoleType[i]
          });
          sHtml += babel("team.joinas", null, {
              Role: babelEnum("RoleType", RoleType[i])
          });
          sHtml += '    </a>';
          sHtml += '</li>';
      }
  return sHtml;
}

function SearchTeamCallApplyToTeam(iTeamId, iRole) {
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#teamsFound #searchedTeam_" + ajax.params.sTeamId + " .joinrequestbtn").addClass("disabled");
      },
      fnOe: function(ajax) {
          $("#teamsFound #searchedTeam_" + ajax.params.sTeamId + " .joinrequestbtn").removeClass("disabled");
      }
  };
  callApplyToTeam('SearchTeam', iTeamId, iRole, true, fnHandlers);
}
var SearchTournamentSearchedResults;

function SearchTournamentDocumentReady() {
  SearchTournamentSearchedResults = {};
  changeTitle('Tournaments');
  SearchTournamentSearch(TournamentTeamSize.One);
}

function SearchTournamentOnSignIn() {}

function SearchTournamentSearch(iTournamentTeamSize) {
  $(".tournament-team-size-selection > div").removeClass("active");
  $("#tts_" + iTournamentTeamSize).addClass("active");
  SearchTournamentClearResults();
  if (SearchTournamentSearchedResults[iTournamentTeamSize]) {
      SearchTournamentShowResults(SearchTournamentSearchedResults[iTournamentTeamSize]);
      return;
  }
  if (iTournamentTeamSize <= 0)
      return;
  var ajaxObj = {
      sCode: 'Tournaments',
      sSvcPage: 'Tournament',
      sMethod: 'GetTournamentList',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".tournament-team-size-selection > div").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".tournament-team-size-selection > div").removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          SearchTournamentSearchedResults[ajax.params.iTournamentTeamSize] = obj.value;
          SearchTournamentShowResults(SearchTournamentSearchedResults[ajax.params.iTournamentTeamSize]);
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentTeamSize: iTournamentTeamSize,
      bOnlyFeatured: false
  }, fnHandlers);
}

function SearchTournamentClearResults() {
  $('#open_tournaments_list,#closed_tournaments_list').empty();
}

function SearchTournamentShowResults(results) {
  SearchTournamentClearResults();
  if (!results || results.length == 0)
      return;
  var sTitleHtml = '<a class="collection-item header"><label class="truncate">{{ babel("base.icon") }}</label><label class="truncate">{{ babel("base.name") }}</label><label class="truncate">{{ babel("base.date") }}</label><label class="truncate">{{ babel("base.size") }}</label><label class="truncate">{{ babel("tournament.host") }}</label></a>';
  results.sort(function(a, b) {
      return timeToMs(a.dtDate) - timeToMs(b.dtDate);
  });
  for (var i in results)
      if (!results[i].bClosed)
          if (!windowSmall()) {
              $('#open_tournaments_list').append(getTemplateHtml(sTitleHtml));
              break;
          }
  for (var i in results)
      if (!results[i].bClosed)
          $('#open_tournaments_list').append(getTemplateHtml(SearchTournamentListItemItemTemplate, results[i]));
  results.sort(function(a, b) {
      return timeToMs(b.dtDate) - timeToMs(a.dtDate);
  });
  for (var i in results)
      if (results[i].bClosed)
          if (!windowSmall()) {
              $('#closed_tournaments_list').append(getTemplateHtml(sTitleHtml));
              break;
          }
  for (var i in results)
      if (results[i].bClosed)
          $('#closed_tournaments_list').append(getTemplateHtml(SearchTournamentListItemItemTemplate, results[i]));
}
var slUserProfile;
var SocialLinksDisableInputs;
pageVars.push("slUserProfile");
pageVars.push("SocialLinksDisableInputs");

function SocialLinksDocumentReady() {
  slUserProfile = null;
  if (!isUserLogged()) {
      navigate("Home");
      return;
  }
  if (isUserGuest(true)) {
      SocialLinksPageLoggedOut();
      return;
  }
  changeTitle('My social links');
  SocialLinksLoad();
  SocialLinksLoadUserProfile();
}

function SocialLinksOnSignIn() {
  reloadPage();
}

function SocialLinksPageLoggedOut() {
  $mainContent.children().not(".ad").remove();
  $mainContent.append('<div class="row nocontent"><i class="fad fa-globe-europe"></i><br><span>You need to be in your home region to use this functionality</span></div>');
}

function SocialLinksLoadUserProfile() {
  var ajaxObj = {
      sCode: 'SocialLinks',
      sSvcPage: 'User',
      sMethod: 'LoadUserProfile',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $mainContent.find('a').addClass('disabled');
          $mainContent.find('input').attr("disabled", "disabled");
      },
      fnDone: function(ajax) {
          $mainContent.find('a').removeClass('disabled');
          $mainContent.find('input').attr("disabled", false);
      },
      fnOs: function(ajax, obj) {
          slUserProfile = obj.value;
          if (slUserProfile == null) return;
          SocialLinksReloadLinks();
          M.updateTextFields();
      }
  };
  ajaxCallObj(ajaxObj, {}, fnHandlers);
}

function SocialLinksLoad() {
  $mainContent.find('.social-links div.input-field').remove();
  SocialLinksDisableInputs = 0;
  for (var property in SocialLinkType)
      $mainContent.find('.social-links').append(getSocialLinkInputTemplate(SocialLinkType[property]));
}

function SocialLinksReloadLinks() {
  if (slUserProfile.socialLinks)
      for (var i in slUserProfile.socialLinks)
          $('#sociaLink' + slUserProfile.socialLinks[i].iSocialLinkType).val(slUserProfile.socialLinks[i].sLink);
  M.updateTextFields();
}

function UserSaveSocialLinksSettings() {
  for (var property in SocialLinkType)
      callSaveSocialLinksUser('User', SocialLinkType[property], SocialLinksGetSocialLink(SocialLinkType[property]));
}

function SocialLinksGetSocialLink(id) {
  var s = $('#sociaLink' + id).val();
  var n = s.indexOf('?');
  return s.substring(0, n != -1 ? n : s.length);
}

function SocialLinksPendSaveSocialLinks() {
  SocialLinksDisableInputs++;
  $('#btnSocialLinksSave').addClass('disabled');
}

function SocialLinksDoneSaveSocialLinks() {
  SocialLinksDisableInputs--;
  if (SocialLinksDisableInputs == 0)
      $('#btnSocialLinksSave').removeClass('disabled');
}

function SocialLinksOsSaveSocialLinks(ajax, obj) {
  if (obj.value == null) return;
  removeFromListByProperty(slUserProfile.socialLinks, "iSocialLinkType", obj.value.iSocialLinkType);
  slUserProfile.socialLinks.push(obj.value);
  SocialLinksReloadSocialLinks();
}
var SummonerFollowFollowers;
var SummonerFollowFollowing;
var SummonerFollowMode;
pageVars.push("SummonerFollowFollowers");
pageVars.push("SummonerFollowFollowing");

function SummonerFollowDocumentReady() {
  SummonerFollowFollowers = {
      iPageLoaded: 0,
      list: []
  };
  SummonerFollowFollowing = {
      iPageLoaded: 0,
      list: []
  };
  SummonerFollowMode = "SummonerFollowers";
}

function SummonerLoadTabFollow() {
  if (SummonerSummoner) {
      if (isMySummoner(SummonerSummoner)) {
          $("#SummonerFollowers .nocontent span").text(babel("summoner.menotfollowinganyone"));
          $("#SummonerFollowing .nocontent span").text(babel("summoner.menofollowers"));
      } else {
          $("#SummonerFollowers .nocontent span").text(babel("summoner.notfollowinganyone"));
          $("#SummonerFollowing .nocontent span").text(babel("summoner.nofollowers"));
      }
  }
  $("#SummonerFollowers").addClass("dnone");
  $("#SummonerFollowing").addClass("dnone");
  $("#" + SummonerFollowMode).removeClass("dnone");
  $("#btnTab" + SummonerFollowMode).addClass("active");
  if (SummonerFollowMode == "SummonerFollowers" && SummonerFollowFollowers.iPageLoaded === 0)
      SummonerFollowCallLoadFollowers();
  if (SummonerFollowMode == "SummonerFollowing" && SummonerFollowFollowing.iPageLoaded === 0)
      SummonerFollowCallLoadFollowing();
}

function SummonerFollowCallLoadFollowers() {
  callGetFollowerPageSummoner('SummonerFollow', SummonerSummoner.iSummonerId, SummonerFollowFollowers.iPageLoaded + 1, true);
}

function SummonerFollowPendGetFollowerPage() {
  $('#SummonerFollowers .btn-load-more').removeClass('waves-effect');
  $('#SummonerFollowers .btn-load-more').addClass('disabled');
}

function SummonerFollowDoneGetFollowerPage() {
  $('#SummonerFollowers .btn-load-more').addClass('waves-effect');
  $('#SummonerFollowers .btn-load-more').removeClass('disabled');
}

function SummonerFollowOsGetFollowerPage(ajax, obj) {
  if (hasSome(obj.value)) {
      $('#SummonerFollowers .btn-load-more').removeClass('dnone');
      SummonerFollowFollowers.iPageLoaded = ajax.params.iPage;
      Array.prototype.push.apply(SummonerFollowFollowers.list, obj.value);
  }
  if (!hasSome(obj.value) || SummonerFollowFollowers.list.length === SummonerSummoner.iFollowers)
      $('#SummonerFollowers .btn-load-more').addClass('dnone');
  SummonerFollowLoadFollowersPage();
}

function SummonerFollowLoadFollowersPage() {
  $('#SummonerFollowers ul.follow-list').empty();
  for (var i in SummonerFollowFollowers.list) {
      var objFollow = SummonerFollowFollowers.list[i];
      objFollow["sIdPrefix"] = "follower";
      objFollow["sCode"] = "SummonerFollow";
      if (isMySummoner(SummonerSummoner)) {
          objFollow["bBtnFollow"] = false;
          objFollow["bBtnUnfollow"] = false;
          if (objFollow.bNowFollowing)
              objFollow["bBtnUnfollow"] = true;
          else if (objFollow.bNowUnfollowed)
              objFollow["bBtnFollow"] = true;
          else if (objFollow.bIsMutual)
              objFollow["bBtnUnfollow"] = true;
          else
              objFollow["bBtnFollow"] = true;
      }
      SummonerFollowCreateFollow("SummonerFollowers", objFollow);
  }
}

function SummonerFollowCallLoadFollowing() {
  callGetFollowingPageSummoner('SummonerFollow', SummonerSummoner.iSummonerId, SummonerFollowFollowing.iPageLoaded + 1, true);
}

function SummonerFollowPendGetFollowedPage() {
  $('#SummonerFollowing .btn-load-more').removeClass('waves-effect');
  $('#SummonerFollowing .btn-load-more').addClass('disabled');
}

function SummonerFollowDoneGetFollowedPage() {
  $('#SummonerFollowing .btn-load-more').addClass('waves-effect');
  $('#SummonerFollowing .btn-load-more').removeClass('disabled');
}

function SummonerFollowOsGetFollowedPage(ajax, obj) {
  if (hasSome(obj.value)) {
      $('#SummonerFollowing .btn-load-more').removeClass('dnone');
      SummonerFollowFollowing.iPageLoaded = ajax.params.iPage;
      Array.prototype.push.apply(SummonerFollowFollowing.list, obj.value);
  }
  if (!hasSome(obj.value) || SummonerFollowFollowing.list.length === SummonerSummoner.iFollowing)
      $('#SummonerFollowing .btn-load-more').addClass('dnone');
  SummonerFollowLoadFollowingPage();
}

function SummonerFollowLoadFollowingPage() {
  $('#SummonerFollowing ul.follow-list').empty();
  for (var i in SummonerFollowFollowing.list) {
      var objFollow = SummonerFollowFollowing.list[i];
      objFollow["sIdPrefix"] = "followed";
      objFollow["sCode"] = "SummonerFollow";
      if (isMySummoner(SummonerSummoner)) {
          objFollow["bBtnFollow"] = false;
          objFollow["bBtnUnfollow"] = false;
          if (objFollow.bNowFollowing)
              objFollow["bBtnUnfollow"] = true;
          else if (objFollow.bNowUnfollowed)
              objFollow["bBtnFollow"] = true;
          else
              objFollow["bBtnUnfollow"] = true;
      }
      SummonerFollowCreateFollow("SummonerFollowing", objFollow);
  }
}

function SummonerFollowCreateFollow(id, objFollow) {
  $('#' + id + ' ul.follow-list').append(getTemplateHtml(FollowListItemTemplate, objFollow));
}

function SummonerFollowPendFollow(ajax) {
  SummonerFollowPendLI(ajax);
}

function SummonerFollowDoneFollow(ajax) {
  SummonerFollowDoneLI(ajax);
}

function SummonerFollowOsFollow(ajax, obj) {
  for (var i in SummonerFollowFollowers.list)
      if (SummonerFollowFollowers.list[i].iId == ajax.moreParams.iFollowId) {
          SummonerFollowFollowers.list[i]["bNowFollowing"] = true;
          SummonerFollowFollowers.list[i]["bNowUnfollowed"] = false;
          break;
      }
  for (var i in SummonerFollowFollowing.list)
      if (SummonerFollowFollowing.list[i].iId == ajax.moreParams.iFollowId) {
          SummonerFollowFollowing.list[i]["bNowFollowing"] = true;
          SummonerFollowFollowing.list[i]["bNowUnfollowed"] = false;
          break;
      }
  SummonerFollowLoadFollowersPage();
  SummonerFollowLoadFollowingPage();
  SummonerSummoner.iFollowing++;
  SummonerUpdateFollowingCount();
}

function SummonerFollowPendUnfollow(ajax) {
  SummonerFollowPendLI(ajax);
}

function SummonerFollowDoneUnfollow(ajax) {
  SummonerFollowDoneLI(ajax);
}

function SummonerFollowOsUnfollow(ajax, obj) {
  for (var i in SummonerFollowFollowers.list)
      if (SummonerFollowFollowers.list[i].iId == ajax.moreParams.iFollowId) {
          SummonerFollowFollowers.list[i]["bNowFollowing"] = false;
          SummonerFollowFollowers.list[i]["bNowUnfollowed"] = true;
          break;
      }
  for (var i in SummonerFollowFollowing.list)
      if (SummonerFollowFollowing.list[i].iId == ajax.moreParams.iFollowId) {
          SummonerFollowFollowing.list[i]["bNowFollowing"] = false;
          SummonerFollowFollowing.list[i]["bNowUnfollowed"] = true;
          break;
      }
  SummonerFollowLoadFollowersPage();
  SummonerFollowLoadFollowingPage();
  SummonerSummoner.iFollowing--;
  SummonerUpdateFollowingCount();
}
var LiveGameMatchLengthTimeout;
var LiveGameMatchLiveTimeout;
var LiveGameListOfChampionStatsToRequest;
var LiveGameAlreadyLoaded;
var LiveGameSummonerInGame;
pageVars.push("LiveGameListOfChampionStatsToRequest");

function SummonerLiveGameDocumentReady() {
  clearTimeout(LiveGameMatchLengthTimeout);
  clearTimeout(LiveGameMatchLiveTimeout);
  LiveGameListOfChampionStatsToRequest = [];
  LiveGameAlreadyLoaded = false;
  LiveGameSummonerInGame = false;
}

function SummonerLoadTabLiveGame() {
  if (LiveGameSummonerInGame)
      LiveGameLoadMatchInformation();
}

function LiveGameResetPage() {
  SummonerLiveGameDocumentReady();
  $("#btnResetLiveGame").addClass("dnone");
  $("#LiveGame .row.title").addClass("dnone");
  $("#rowLiveGameCardParticipants").addClass("dnone");
  $("#LiveGameNoContent").removeClass("dnone");
  $("#rowLiveGameCardParticipants .grid-participants").empty();
  SummonerCheckIfLiveGame(SummonerSummoner.iSummonerId);
}

function SummonerCheckIfLiveGame(iSummonerId) {
  clearTimeout(LiveGameMatchLiveTimeout);
  if (getPageName() != 'Summoner' || SummonerSummoner.iSummonerId != iSummonerId)
      return;
  callLiveGameInfo('LiveGame', SummonerSummoner.iSummonerId);
}

function LiveGamePendLiveGame() {
  $("#btnRefreshLiveGame").addClass("disabled");
}

function LiveGameDoneLiveGame() {
  $("#btnRefreshLiveGame").removeClass("disabled");
}

function LiveGameOsLiveGame(ajax, obj) {
  LiveGameMatchLiveTimeout = setTimeout(SummonerCheckIfLiveGame, 3 * 60 * 1000, ajax.params.iSummonerId);
  LiveGameSummonerInGame = obj.value && obj.value.gameId > 0;
  if (isMySummoner(SummonerSummoner))
      UserLiveGameVisibility(LiveGameSummonerInGame);
  if (LiveGameSummonerInGame) {
      $("#summonerTabLiveGame").addClass("live");
      if (!$("#summonerTabLiveGame > .circle").length)
          $("#summonerTabLiveGame").append('<div class="circle red pulse" style="height: 6px;width: 6px;margin-right: 14px;margin-top: -34px;float: right;z-index: 2;"></div>');
      if (getActiveTabId(".summoner-card ul.tabs") == "summonerTabLiveGame")
          LiveGameLoadMatchInformation();
  } else {
      $("#summonerTabLiveGame").removeClass("live");
      $("#summonerTabLiveGame > .circle").remove();
      LiveGameStopTimer();
  }
}

function LiveGameLoadMatchInformation() {
  if (LiveGameAlreadyLoaded) return;
  LiveGameAlreadyLoaded = true;
  var ajaxObj = {
      sCode: 'LiveGame',
      sSvcPage: 'Match',
      sMethod: 'GetLiveGameInformation'
  };
  var fnHandlers = {
      fnPend: function() {
          $("#LiveGameLoading").removeClass('dnone');
          $("#LiveGameNoContent").addClass('dnone');
      },
      fnDone: function() {
          $("#LiveGameLoading").addClass('dnone');
      },
      fnOe: function() {
          LiveGameNoContent(true);
      },
      fnOs: function(ajax, obj) {
          if (!hasSome(obj.value.summoners)) {
              LiveGameNoContent(true);
              return;
          }
          $("#LiveGameNoContent").addClass('dnone');
          $("#titleQueue").text(getQueueDescription(obj.value.gameInfo.gameQueueConfigId));
          LiveGameStartTimer(SummonerSummoner.iSummonerId, obj.value.gameInfo.gameLength);
          var sQueueName = getQueueDescription(obj.value.gameInfo.gameQueueConfigId);
          var sQueueNameRank = obj.value.gameInfo.gameQueueConfigId == QueueType.SR_5V5RS || obj.value.gameInfo.gameQueueConfigId == QueueType.SR_5V5RF ? sQueueName : babel("base.highestrank");
          $("#rowLiveGameCardParticipants .grid-participants").append('<div style="grid-column: 2 / span 4"><label class="truncate">' + babel("base.participant") + '</label></div>');
          $("#rowLiveGameCardParticipants .grid-participants").append('<div class="center" style="grid-column:span 2"><label class="truncate">' + sQueueNameRank + '</label></div>');
          $("#rowLiveGameCardParticipants .grid-participants").append('<div class="center" style="grid-column:span 2"><label class="truncate">' + babel("base.statistic", 'p') + '<br />' + sQueueName + '</label></div>');
          $("#rowLiveGameCardParticipants .grid-participants").append('<div class="center" style="grid-column:span 2"><label class="truncate">' + babel("summoner.championstats") + '<br />' + sQueueName + '</label></div>');
          for (var i in obj.value.summoners)
              if (obj.value.summoners[i].liveInfo.iRiotTeamId === 100)
                  $("#rowLiveGameCardParticipants .grid-participants").append(getTemplateHtml(LiveGameParticipantItemTemplate, obj.value.summoners[i]));
          $("#rowLiveGameCardParticipants .grid-participants").append('<div class="team-divider grey lighten-3"></div>');
          for (var i in obj.value.summoners)
              if (obj.value.summoners[i].liveInfo.iRiotTeamId === 200)
                  $("#rowLiveGameCardParticipants .grid-participants").append(getTemplateHtml(LiveGameParticipantItemTemplate, obj.value.summoners[i]));
          $("#rowLiveGameCardParticipants .second-row").css("display", "none");
          $('#rowLiveGameCardParticipants .grid-participants .tooltipped').tooltip();
          for (var i in obj.value.summoners)
              if (!obj.value.summoners[i].bStatsLoaded) {
                  if (isNullOrEmpty(obj.value.summoners[i].iSummonerId) || isNaN(parseInt(obj.value.summoners[i].iSummonerId)) || isNullOrEmpty(obj.value.summoners[i].liveInfo.iChampionId) || isNaN(parseInt(obj.value.summoners[i].liveInfo.iChampionId)) || isNullOrEmpty(obj.value.gameInfo.gameQueueConfigId) || isNaN(parseInt(obj.value.gameInfo.gameQueueConfigId))) {
                      LiveGameChampionStatsNoContent(obj.value.summoners[i].iSummonerId);
                      continue;
                  }
                  LiveGameListOfChampionStatsToRequest.push({
                      iSummonerId: obj.value.summoners[i].iSummonerId,
                      iChampionId: obj.value.summoners[i].liveInfo.iChampionId,
                      iQueueId: obj.value.gameInfo.gameQueueConfigId
                  });
              }
          LiveGameLoadSummonerChampionStats();
          $("#LiveGame .row.title").removeClass('dnone');
          $("#rowLiveGameCardParticipants").removeClass('dnone');
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: SummonerSummoner.iSummonerId
  }, fnHandlers);
}

function LiveGameNoContent(bError) {
  var sText = babel("summoner.summonernamenotingame", null, {
      SummonerName: SummonerSummoner.sName
  });
  if (bError)
      sText = babel("summoner.loadlivegameerror");
  $("#LiveGameNoContent .nocontent span").text(sText);
  $("#LiveGameNoContent").removeClass("dnone");
}

function LiveGameToggleRunes() {
  $("#rowLiveGameCardParticipants .second-row").slideToggle(200);
  $("#rowLiveGameCardParticipants .grid-participants").toggleClass("expanded");
}

function LiveGameStartTimer(iSummonerId, gameLength) {
  clearTimeout(LiveGameMatchLengthTimeout);
  if (getPageName() != 'Summoner' || SummonerSummoner.iSummonerId != iSummonerId)
      return;
  if (gameLength <= 0) {
      $("#titleTime").text(babel("base.loading"));
      return;
  }
  $("#titleTime").text(getAmountOfTime(gameLength * 1000));
  LiveGameMatchLengthTimeout = setTimeout(LiveGameStartTimer, 1000, iSummonerId, gameLength + 1);
}

function LiveGameStopTimer() {
  clearTimeout(LiveGameMatchLengthTimeout);
  $("#titleTime").text(babel("base.ended"));
  $("#btnResetLiveGame").removeClass("dnone");
}

function LiveGameLoadSummonerChampionStats() {
  if (!hasSome(LiveGameListOfChampionStatsToRequest)) return;
  var ajaxObj = {
      sCode: 'LiveGame',
      sSvcPage: 'Match',
      sMethod: 'GetSummonerChampionStats'
  };
  var fnHandlers = {
      fnDone: function() {
          LiveGameListOfChampionStatsToRequest.shift();
          LiveGameLoadSummonerChampionStats();
      },
      fnOe: function() {
          LiveGameChampionStatsNoContent(iSummonerId);
      },
      fnOs: function(ajax, obj) {
          if (!obj.value) {
              LiveGameChampionStatsNoContent(ajax.params.iSummonerId);
              return;
          }
          $("#loader-rank-" + ajax.params.iSummonerId).replaceWith(getTemplateHtml(LiveGameChampionStatsItemTemplate, obj.value));
      }
  };
  ajaxCallObj(ajaxObj, LiveGameListOfChampionStatsToRequest[0], fnHandlers);
}

function LiveGameChampionStatsNoContent(iSummonerId) {
  if (isNullOrEmpty(iSummonerId))
      return;
  $("#loader-rank-" + iSummonerId + " .progress").replaceWith('<label class="truncate center">' + babel("summoner.loadchampionstatserror") + '</label>');
}
var bSummonerMatchlistLoaded;
var bSummonerMatchlistLoading;
var SummonerLastMatchTimestamp;
var iSummonerLastDayMatch;
var SummonerMatchesIdTags;
var bChipProceduralInsertion;
var SummonerSelectedFilterQueue;
var SummonerSelectedFilterChips;
var SummonerMatchesAllTags;
pageVars.push("bSummonerMatchlistLoaded");
pageVars.push("SummonerMatchesIdTags");
pageVars.push("bChipProceduralInsertion");
pageVars.push("SummonerSelectedFilterQueue");
pageVars.push("SummonerSelectedFilterChips");
pageVars.push("SummonerMatchesAllTags");

function SummonerMatchlistDocumentReady() {
  bSummonerMatchlistLoaded = false;
  bSummonerMatchlistLoading = false;
  SummonerLastMatchTimestamp = 0;
  iSummonerLastDayMatch = 0;
  bChipProceduralInsertion = false;
  SummonerSelectedFilterQueue = null;
  SummonerSelectedFilterChips = [];
  onNavigateOnly("window", "scroll.SummonerMatchlistLoadMoreMatches", function() {
      if ($("#rowLoadMoreMatches").isInViewport())
          SummonerLoadMatchPage();
  });
}

function SummonerLoadTabMatchlist(matchesFromUpdate) {
  if (timeToMs(SummonerSummoner.dtLastUpdate) <= 0) {
      $("#summoner-matchlist .nocontent span").text(babel("summoner.summonerneverupdated"));
      $("#summoner-matchlist").removeClass("dnone");
      $("#rowLoadMoreMatches").addClass("dnone");
      return;
  } else
      $("#summoner-matchlist .nocontent span").text(babel("summoner.summonernomatch"));
  if (bSummonerMatchlistLoaded)
      return;
  bSummonerMatchlistLoaded = true;
  if (matchesFromUpdate)
      SummonerOsLoadMatchPage(null, matchesFromUpdate);
  else
      SummonerLoadMatchPage();
}

function SummonerMatchlistReset() {
  abortPendingAjaxCallsSpecific("Summoner", "LoadMatchPage");
  $("#rowMatchlistSettings").addClass("dnone");
  $("#summoner-matchlist").addClass("dnone");
  $("#SummonerMatchesEndLine").addClass("dnone");
  $("#rowLoadMoreMatches").removeClass("dnone");
  $("#summoner-matchlist ul").empty();
  SummonerMatchlistDocumentReady();
}

function SummonerLoadMatchPage() {
  if (bSummonerMatchlistLoading)
      return;
  var ajaxParams = {
      iSummonerId: SummonerSummoner.iSummonerId,
      sLastMatchTimestamp: SummonerLastMatchTimestamp
  };
  var ajaxObj = {
      sCode: 'Summoner',
      sSvcPage: 'Summoner',
      sMethod: 'LoadMatchPage',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function() {
          bSummonerMatchlistLoading = true;
          $('#loadMatchButton').addClass('disabled');
          $("#loadMatchLoader").removeClass('dnone');
      },
      fnDone: function() {
          bSummonerMatchlistLoading = false;
          $('#loadMatchButton').removeClass('disabled');
          $("#loadMatchLoader").addClass('dnone');
      }
  };
  ajaxCallObj(ajaxObj, ajaxParams, fnHandlers);
}

function SummonerOsLoadMatchPage(ajax, obj) {
  bSummonerMatchlistLoaded = true;
  $('#summoner-matchlist').removeClass('dnone');
  if (!hasSome(obj.value)) {
      if (hasSome(SummonerSummoner.recentMatchCollection))
          $("#SummonerMatchesEndLine").removeClass("dnone");
      $("#rowLoadMoreMatches").addClass('dnone');
      return;
  }
  if (!hasSome(SummonerSummoner.recentMatchCollection))
      SummonerSummoner.recentMatchCollection = [];
  SummonerSummoner.recentMatchCollection = SummonerSummoner.recentMatchCollection.concat(obj.value);
  for (var i in obj.value) {
      var match = obj.value[i];
      if (SummonerLastMatchTimestamp == 0 || SummonerLastMatchTimestamp > match.lTimestamp)
          SummonerLastMatchTimestamp = match.lTimestamp;
      var iCurrentDay = parseInt(timeShow(match.lTimestamp, 'yyyyMMdd'));
      if (iSummonerLastDayMatch == 0 || iSummonerLastDayMatch > iCurrentDay) {
          iSummonerLastDayMatch = iCurrentDay;
          var dateFormat = 'dddd dd MMMM' + (new Date(timeToMs(match.lTimestamp)).getFullYear() != new Date().getFullYear() ? ', yyyy' : '');
          $('#summoner-matchlist ul').append('<li class="collection-header"><h5>' + timeShow(match.lTimestamp, dateFormat) + '</h5></li>');
      }
      $('#summoner-matchlist ul').append(SummonerMatchHtml(SummonerSummoner.iSummonerId, match));
  }
  MatchCompactInitializeCollapsible('#summoner-matchlist ul.collapsible');
  $('#summoner-matchlist ul.collapsible .tooltipped').tooltip({
      enterDelay: 500
  });
  InitItemsTooltips();
  SummonerMatchFilterQueue();
  SummonerMatchFilterChips();
  $("#rowMatchlistSettings").removeClass('dnone');
  SummonerFilterMatches();
}

function SummonerMatchFilterQueue() {
  var $ddFilters = $('#ddFilters');
  var queueColl = [];
  for (var i = 0; i < SummonerSummoner.recentMatchCollection.length; i++)
      if ($.inArray(SummonerSummoner.recentMatchCollection[i].iQueue, queueColl) < 0)
          queueColl.push(SummonerSummoner.recentMatchCollection[i].iQueue);
  queueColl.sort();
  var sHtml = "";
  var bSelected = false;
  for (var i = 0; i < queueColl.length; i++) {
      if (SummonerSelectedFilterQueue == queueColl[i]) {
          bSelected = true;
          sHtml += '<option value="' + queueColl[i] + '" selected>' + getQueueDescription(queueColl[i]) + '</option>';
      } else
          sHtml += '<option value="' + queueColl[i] + '">' + getQueueDescription(queueColl[i]) + '</option>';
  }
  sHtml = '<option value="" ' + (!bSelected ? "selected" : "") + '>' + babel("summoner.filterqueuetype") + '</option>' + sHtml;
  $ddFilters.empty();
  $ddFilters.append(sHtml);
  $('#rowMatchlistSettings select').formSelect();
  $ddFilters.change(function() {
      var str = "";
      $ddFilters.find("option:selected").each(function() {
          str += $(this).val();
      });
      SummonerSelectedFilterQueue = str;
      SummonerFilterMatches();
  });
}

function SummonerMatchFilterChips() {
  SummonerMatchesIdTags = {};
  SummonerMatchesAllTags = [babel("base.win"), babel("base.lost"), babel("base.notloaded"), babel("base.loaded")];
  for (var i = 0; i < SummonerSummoner.recentMatchCollection.length; i++) {
      var match = SummonerSummoner.recentMatchCollection[i];
      var tags = [];
      tags.push("" + match.iQueue);
      tags.push(GetChampionNameById(match.lChampion));
      if (!match.bScheduled) {
          tags.push(babel("base.notloaded"));
          tags.push(babel("base.loaded"));
          match.player.win ? tags.push(babel("base.win")) : tags.push(babel("base.lost"));
          tags.push(GetRuneNameById(match.player.perk0));
          tags.push(GetSummonerSpellNameById(match.player.spell1Id));
          tags.push(GetSummonerSpellNameById(match.player.spell2Id));
          for (var j = 0; j < 8; j++)
              if (match.player["item" + j] > 0)
                  tags.push(GetItemNameById(match.player["item" + j]));
          for (var k in match.matchData.playerMatchDataCollection)
              tags.push(match.matchData.playerMatchDataCollection[k].sName);
          tags.push(babelEnum("RoleType", match.player.iRole));
      }
      SummonerMatchesIdTags[match.lGameId] = tags;
      for (var t in tags)
          if ($.inArray(tags[t], SummonerMatchesAllTags) < 0)
              SummonerMatchesAllTags.push(tags[t]);
  }
  var data = {};
  for (var ind in SummonerMatchesAllTags)
      data[SummonerMatchesAllTags[ind]] = null;
  $("#chipsFilter").chips({
      data: SummonerSelectedFilterChips,
      placeholder: babel("summoner.filterplaceholder"),
      secondaryPlaceholder: babel("summoner.addfilter"),
      autocompleteOptions: {
          data: data,
          limit: Infinity,
          minLength: 2
      },
      onChipAdd: FilterChipAdded,
      onChipDelete: FilterChipDeleted
  });
  $("#chipsFilter .chip i").replaceWith('<i class="fal fa-times close"></i>');
}

function FilterChipAdded(el, chip) {
  $(el).find("i").replaceWith('<i class="fal fa-times close"></i>');
  if (bChipProceduralInsertion) return;
  var $chipsFilter = $(el);
  var chips = M.Chips.getInstance($chipsFilter).chipsData;
  var sText = chip.firstChild.data;
  var bValidTag = false;
  for (var ind in SummonerMatchesAllTags)
      if (SummonerMatchesAllTags[ind] == sText) {
          bValidTag = true;
          break;
      }
  if (!bValidTag) {
      sText = "";
      if ($chipsFilter.find("ul li").first()[0])
          sText = $chipsFilter.find("ul li").first()[0].innerText;
      $chipsFilter.chips("deleteChip", chips.length - 1);
      if (isNullOrEmpty(sText))
          return;
      bChipProceduralInsertion = true;
      $chipsFilter.chips("addChip", {
          tag: sText
      });
      bChipProceduralInsertion = false;
  }
  if (sText == babel("base.win") || sText == babel("base.lost")) {
      for (var i in chips)
          if ((sText == babel("base.win") && chips[i].tag == babel("base.lost")) || (sText == babel("base.lost") && chips[i].tag == babel("base.win"))) {
              $chipsFilter.chips("deleteChip", i);
              break;
          }
  }
  SummonerSelectedFilterChips = M.Chips.getInstance($chipsFilter).chipsData;
  SummonerFilterMatches();
  $chipsFilter.find("input").blur();
  $chipsFilter.find("input").focus();
}

function FilterChipDeleted() {
  SummonerSelectedFilterChips = M.Chips.getInstance($("#chipsFilter")).chipsData;
  SummonerFilterMatches();
  $("#chipsFilter input").blur();
  $("#chipsFilter input").focus();
}

function SummonerFilterMatches() {
  $('#summoner-matchlist li').removeClass('dnone');
  for (var id in SummonerMatchesIdTags) {
      var tags = SummonerMatchesIdTags[id];
      if (!isNullOrEmpty(SummonerSelectedFilterQueue) && tags.indexOf(SummonerSelectedFilterQueue) == -1) {
          $('#match_summoner_' + id).addClass('dnone');
          continue;
      }
      for (var pos in SummonerSelectedFilterChips)
          if (tags.indexOf(SummonerSelectedFilterChips[pos].tag.trim()) == -1) {
              $('#match_summoner_' + id).addClass('dnone');
              break;
          }
  }
  $("#summoner-matchlist li").removeClass("session-start session-end");
  $("#summoner-matchlist li.collection-header").each(function() {
      var collMatch = $(this).nextUntil(".collection-header", "li:not(.dnone)");
      if (collMatch.length > 0) {
          $(this).removeClass("dnone");
          $(collMatch[0]).addClass("session-start");
          $(collMatch[collMatch.length - 1]).addClass("session-end");
      } else
          $(this).addClass("dnone");
  });
}
var bSummonerStatsInitialized;
var SummonerStatisticsActiveSeason;
var SummonerStatisticsActiveQueue;

function SummonerStatisticsDocumentReady() {
  bSummonerStatsInitialized = false;
  SummonerStatisticsActiveSeason = null;
  SummonerStatisticsActiveQueue = QueueTypeStatistics.Ranked_Solo;
}

function SummonerLoadTabStatistics() {
  if (bSummonerStatsInitialized) return;
  bSummonerStatsInitialized = true;
  if (!SummonerSummoner.statistics) {
      $("#Statistics").empty();
      SummonerStatisticsNoContent();
      return;
  }
  $("#labelLastStatsUpdate").text(babel("base.lastupdate") + ": " + timeShow(SummonerSummoner.dtLastStatsUpdate, "dd/MM/yyyy - HH:mm"));
  $("#Statistics > .wnc, #Statistics > .nocontent").remove();
  var collSeasons = Object.keys(SummonerSummoner.statistics);
  collSeasons.sort(function(a, b) {
      return b - a;
  });
  for (var i in collSeasons)
      $('#statsSeasonsButtons').append('<a id="btnSeason' + collSeasons[i] + '" class="btn waves-effect" onclick="SummonerStatisticsChangeSeason(' + collSeasons[i] + ')">' + babelEnum("Season", collSeasons[i]) + '</a>');
  SummonerStatisticsChangeSeason(collSeasons[0]);
}

function SummonerStatisticsProcessStats() {
  if (!hasSome(SummonerSummoner.statistics)) {
      SummonerSummoner.statistics = null;
      return;
  }
  orderListByProperty(SummonerSummoner.statistics, "iWins", true);
  orderListByProperty(SummonerSummoner.statistics, "iGames", true);
  orderListByProperty(SummonerSummoner.playedWith, "iWins", true);
  orderListByProperty(SummonerSummoner.playedWith, "iGames", true);
  var myStats = {};
  for (var i in SummonerSummoner.statistics) {
      var champion = SummonerSummoner.statistics[i];
      if (!myStats.hasOwnProperty(champion.iSeasonId))
          myStats[champion.iSeasonId] = [];
      myStats[champion.iSeasonId].push(champion);
  }
  SummonerSummoner.statistics = myStats;
}

function SummonerStatisticsNoContent() {
  var sText = babel("summoner.summonerneverupdated");
  if (timeToMs(SummonerSummoner.dtLastUpdate) > 0)
      sText = (isMySummoner(SummonerSummoner) ? babel("summoner.statsmysummonerarebeingdownloaded") : babel("summoner.statsthissummonerarebeingdownloaded")) + '<br />' + babel("base.checkbacklater");
  if ($('#Statistics > .nocontent').length)
      $('#Statistics > .nocontent span').html(sText);
  else
      $("#Statistics").append(getTemplateHtml(NoContentItemTemplate, {
          bWnc: true,
          sIcon: 'fad fa-chart-bar',
          sText: sText
      }));
}

function SummonerStatisticsChangeSeason(iSeason) {
  if (iSeason === SummonerStatisticsActiveSeason) return;
  $('#statsSeasonsButtons a.btn').addClass("white black-text");
  $('#btnSeason' + iSeason).removeClass("white black-text").addClass("active");
  SummonerStatisticsActiveSeason = iSeason;
  $("#statsQueuesButtons > a").addClass("disabled");
  for (var i in SummonerSummoner.statistics[iSeason])
      $("#btnQueue" + SummonerSummoner.statistics[iSeason][i].iQueue).removeClass("disabled");
  if ($("#btnQueue" + SummonerStatisticsActiveQueue).hasClass("disabled")) {
      $("#statsQueuesButtons > a:not(.disabled)")[0].click();
      return;
  }
  SummonerStatisticsLoadStats();
}

function SummonerStatisticsChangeQueue(iQueue) {
  if (iQueue === SummonerStatisticsActiveQueue) return;
  $('#statsQueuesButtons a.btn').addClass("white black-text");
  $('#btnQueue' + iQueue).removeClass("white black-text").addClass("active");
  SummonerStatisticsActiveQueue = iQueue;
  SummonerStatisticsLoadStats();
}

function SummonerStatisticsLoadStats() {
  SummonerStatisticsLoadChampionsPlayed(SummonerStatisticsActiveSeason, SummonerStatisticsActiveQueue);
  SummonerStatisticsLoadPlayedWith(SummonerStatisticsActiveSeason, SummonerStatisticsActiveQueue);
}

function SummonerStatisticsLoadChampionsPlayed(iSeason, iGameMode) {
  var bAtLeastOneStat = false;
  for (var i in SummonerSummoner.statistics[iSeason])
      if (SummonerSummoner.statistics[iSeason][i].iQueue == iGameMode) {
          bAtLeastOneStat = true;
          break;
      }
  if (!bAtLeastOneStat) {
      $("#Statistics > *:not(:first-child)").addClass("dnone");
      var sText = babel("summoner.nostatstoshowfor") + ":<br>" + babelEnum("Season", iSeason).toLowerCase() + " - " + babelEnum("QueueTypeStatistics", iGameMode, 'l');
      $("#Statistics").append('<div id="SummonerStatsNoDataForCombination">' + getTemplateHtml(NoContentItemTemplate, {
          bWnc: true,
          sIcon: 'fad fa-chart-bar',
          sText: sText
      }) + '</div>');
      return;
  } else {
      $("#Statistics > *").removeClass("dnone");
      $("#SummonerStatsNoDataForCombination").remove();
  }
  var iTotalWins = 0;
  var iTotalGames = 0;
  var $ulChampionsPlayed = $("#championsPlayed ul");
  $ulChampionsPlayed.empty();
  $("#championsPlayed h5 a").remove();
  var iNumChampionsPlayed = 0;
  for (var i in SummonerSummoner.statistics[iSeason])
      if (SummonerSummoner.statistics[iSeason][i].iQueue == iGameMode) {
          iTotalGames += SummonerSummoner.statistics[iSeason][i].iGames;
          iTotalWins += SummonerSummoner.statistics[iSeason][i].iWins;
          $ulChampionsPlayed.append(getTemplateHtml(SummonerStatisticsChampionPlayedLIItemTemplate, SummonerSummoner.statistics[iSeason][i]));
          iNumChampionsPlayed++;
      }
  if (iNumChampionsPlayed > 8) {
      $("#championsPlayed").addClass("show-less");
      $("#championsPlayed h5").append('<a class="btn-flat right btnToggleExpand" onclick="SummonerStatisticsToggleUnfoldList(\'championsPlayed\')"><i class="far fa-compress-alt fa-rotate-315"></i></a>');
  }
  $("#championsPlayed h5").append('<a class="btn-flat right tooltipped" data-position="bottom" data-tooltip="' + babel("base.fullstatistics") + '" onclick="SummonerStatisticsOpenChampionsPlayedModal(' + iSeason + ',' + iGameMode + ')"><i class="far fa-table"></i></a>');
  $("#championsPlayed .tooltipped").tooltip();
  var pctWinrate = mathPercentage(iTotalWins, iTotalGames);
  $("#totalStatsDonut").empty();
  $("#totalStatsDonut").append(getTemplateHtml(DonutProgressItemTemplate, {
      sId: 'totalStatsDonutSVG',
      iPixel: 64
  }));
  $("#totalStatsDonut").append("<span>" + pctWinrate + "</span>");
  updateDonutProgress("totalStatsDonutSVG", pctWinrate);
  $("#totalStatsGames").text(iTotalGames);
  $("#totalStatsWins").text(iTotalWins);
  $("#totalStatsLosses").text(iTotalGames - iTotalWins);
}

function SummonerStatisticsOpenChampionsPlayedModal(iSeason, iGameMode) {
  openModal("modalStatmodalChampsUsed", getTemplateHtml(SummonerStatisticsModalChampsUsedItemTemplate, iSeason));
  var $WrapperChampsDetailed = $("#modalStatmodalChampsUsed .wrapper");
  $WrapperChampsDetailed.children().not(".head").remove();
  var bAlt = false;
  for (var i in SummonerSummoner.statistics[iSeason])
      if (SummonerSummoner.statistics[iSeason][i].iQueue == iGameMode) {
          bAlt = !bAlt;
          $WrapperChampsDetailed.append(getTemplateHtml(SummonerStatisticsBoxesChampionDetailsItemTemplate, {
              bAlt: bAlt,
              stats: SummonerSummoner.statistics[iSeason][i]
          }));
      }
}

function SummonerStatisticsLoadPlayedWith(iSeason, iGameMode) {
  var $playedWith = $("#playedWith ul");
  $playedWith.empty();
  $("#playedWith h5 a").remove();
  var iNumPlayedWith = 0;
  for (var i in SummonerSummoner.playedWith)
      if (SummonerSummoner.playedWith[i].iSeason == iSeason) {
          $playedWith.append(getTemplateHtml(SummonerStatisticsPlayedWithLIItemTemplate, SummonerSummoner.playedWith[i]));
          iNumPlayedWith++;
      }
  if (iNumPlayedWith == 0) {
      $("#playedWith").addClass("dnone");
      return;
  }
  if (iNumPlayedWith > 8) {
      $("#playedWith").addClass("show-less");
      $("#playedWith h5").append('<a class="btn-flat right btnToggleExpand" onclick="SummonerStatisticsToggleUnfoldList(\'playedWith\')"><i class="far fa-compress-alt fa-rotate-315"></i></a>');
  }
  $("#playedWith").removeClass("dnone");
}

function SummonerStatisticsToggleUnfoldList(sId) {
  var $row = $("#" + sId);
  $row.toggleClass("show-less");
  $row.find("a.btnToggleExpand i").toggleClass("fa-expand-alt fa-compress-alt");
}
var SummonerSummoner;
var $btnUpdate;
var SummonerUpdating;
pageVars.push("SummonerSummoner");
pageVars.push("$btnUpdate");
pageVars.push("SummonerUpdating");

function SummonerDocumentReady() {
  SummonerSummoner = null;
  SummonerMatchlistDocumentReady();
  SummonerStatisticsDocumentReady();
  SummonerFollowDocumentReady();
  SummonerLiveGameDocumentReady();
  SummonerCallLoadSummoner(getQueryStringByPos(0), getQueryStringByPos(2));
}

function SummonerOnSignIn() {
  if (SummonerSummoner == null) {
      reloadPage();
      return;
  }
  SummonerLoadSocial();
  SummonerSetBindState();
  SummonerSetInviteStatus();
}

function SummonerOnShowTab(tab) {
  if (tab == null) return;
  $("#btnTabSummonerFollowers").removeClass("active");
  $("#btnTabSummonerFollowing").removeClass("active");
  switch (tab.id) {
      case 'Home':
          break;
      case 'Matchlist':
          SummonerLoadTabMatchlist();
          break;
      case 'Statistics':
          SummonerLoadTabStatistics();
          break;
      case 'SummonerFollow':
          SummonerLoadTabFollow();
          break;
      case 'LiveGame':
          SummonerLoadTabLiveGame();
          break;
      default:
          break;
  }
  changeUrlTab(tab.id != "Home" && tab.id != "SummonerFollow" ? tab.id : "");
  if (windowSmall() && tab.id != "SummonerFollow")
      goToByScrollHorizontal(".summoner-card .rowtabs ul", '#summonerTab' + tab.id);
}

function SummonerGoTabAlt(idTab, sFollowListMode) {
  if (!isNullOrEmpty(sFollowListMode))
      SummonerFollowMode = sFollowListMode;
  $(".summoner-card ul.tabs").tabs('select', idTab);
}

function SummonerGetSelectedTab() {
  var sTab = getSelectedTab();
  if (!isNullOrEmpty(sTab)) {
      sTab = sTab.toLowerCase();
      switch (sTab) {
          case 'matchlist':
              return 'Matchlist';
          case 'statistics':
              return 'Statistics';
          case 'follow':
              return 'Follow';
          case 'livegame':
              return 'LiveGame';
          default:
              break;
      }
  }
  return "Home";
}

function SummonerCallLoadSummoner(iSummonerId, sEncryptedId) {
  var bUseEncryptedId = false;
  iSummonerId = parseInt(iSummonerId);
  if (isNaN(iSummonerId) || iSummonerId < 1)
      if (!isNullOrEmpty(sEncryptedId))
          bUseEncryptedId = true;
      else {
          navigate('NoContent');
          toastInfo(babel("toast.summonernotfound"));
          return;
      }
  var ajaxObj = {
      sCode: 'Summoner',
      sSvcPage: 'Summoner',
      sMethod: bUseEncryptedId ? 'LoadSummonerByEncryptedId' : 'LoadSummoner',
      bVProgress: true
  };
  var ajaxParams;
  if (bUseEncryptedId)
      ajaxParams = {
          sEncryptedId: sEncryptedId
      };
  else
      ajaxParams = {
          iSummonerId: iSummonerId
      };
  var fnHandlers = {
      fnDone: function() {
          $('.rowLoadPage').addClass('dnone');
      },
      fnOs: function(ajax, obj) {
          if (!obj.value || obj.value.iSummonerId < 1) {
              navigate('NoContent');
              toastInfo(babel("toast.summonernotfound"));
              return;
          }
          SummonerSummoner = obj.value;
          SummonerStatisticsProcessStats();
          $('#rowUpdateSmall').removeClass("dnone");
          SummonerLoadSocial();
          SummonerLoadSummonerInfo();
          SummonerShowSummonerTeams();
          SummonerSetBindState();
          SummonerSetInviteStatus();
          SummonerShowSummonerFriends();
          SummonerUpdateSummonerPage();
          $(".summoner-card ul.tabs").tabs('select', SummonerGetSelectedTab());
          if (timeToMs(SummonerSummoner.dtLastUpdate) > 0)
              SummonerLoadTabMatchlist();
          SummonerCheckIfLiveGame(SummonerSummoner.iSummonerId);
          $("#btnRefreshLiveGame").click(function() {
              SummonerCheckIfLiveGame(SummonerSummoner.iSummonerId);
          });
          updateSEOTags(SummonerSummoner);
      }
  };
  ajaxCallObj(ajaxObj, ajaxParams, fnHandlers);
}

function SummonerUpdateSummonerPage() {
  if (isMySummoner(SummonerSummoner))
      updateSummonerBound(SummonerSummoner);
  changeUrl("Summoner", getSummonerPageLink(SummonerSummoner) + window.location.hash);
  changeTitle(SummonerSummoner.sName);
  SummonerUpdateSummonerInfo();
  SummonerRowInvitations();
  SummonerRowRanks();
  SummonerStatisticsNoContent();
  SummonerSetLastUpdateText();
  SummonerCheckUpdateTimer();
}

function SummonerLoadSocial() {
  var $SocialLinks = $('.smmnr .social-links');
  $SocialLinks.empty();
  var chip;
  if (hasSome(SummonerSummoner.socialLinks))
      for (var ind in SummonerSummoner.socialLinks)
          $SocialLinks.append(getSocialLinkChipTemplate(SummonerSummoner.socialLinks[ind]));
  chip = {
      sTitle: babel("summoner.sharesummoner"),
      sCss: "social waves-effect hoverable-light",
      sOnclick: "copyTextToClipboard('" + getSummonerPageLink(SummonerSummoner) + "');",
      sIcon: "far fa-link left",
      sText: babel("base.Share")
  };
  $SocialLinks.append(getTemplateHtml(ChipItemTemplate, chip));
  if (isMySummoner(SummonerSummoner)) {
      chip = {
          sTitle: babel("summoner.sociallinksmanagement"),
          sCss: "right hoverable-light waves-effect",
          sHref: getPageLink('User'),
          sOnclick: "navigate(\'User\');",
          sIcon: "far fa-user-cog left",
          sText: babel("base.setting", 'p')
      };
      $SocialLinks.append(getTemplateHtml(ChipItemTemplate, chip));
  } else {
      chip = {
          css: "right" + (SummonerSummoner.bIsFollowed ? " f" : ""),
          click: "clickFollowButton(true, " + SummonerSummoner.iSummonerId + ");",
          bFollowBack: SummonerSummoner.bIsFollower
      };
      $SocialLinks.append(getTemplateHtml(FollowButtonItemTemplate, chip));
  }
}

function SummonerLoadSummonerInfo() {
  $("#rowSummInfo").empty();
  $("#rowSummInfo").append(getTemplateHtml(SummonerCardItemTemplate, SummonerSummoner));
  $(".summoner-card ul.tabs").tabs({
      onShow: function(tab) {
          SummonerOnShowTab(tab);
      }
  });
  $btnUpdate = $('.btnUpdate');
  SummonerUpdating = false;
}

function SummonerUpdateSummonerInfo() {
  $(".summoner-card .summoner-icon").attr("src", getUrlProfileIcon(null, null, SummonerSummoner));
  $(".summoner-card .info .summoner-name").text(SummonerSummoner.sName);
  $(".summoner-card .summoner-level").text(babel("base.level") + " " + SummonerSummoner.iLevel + (!isNullOrEmpty(SummonerSummoner.sExName) ? " - " + babel("summoner.lastnameused") + ": " + SummonerSummoner.sExName : ''));
  SummonerUpdateFollowingCount();
  SummonerUpdateFollowersCount();
}

function SummonerUpdateFollowingCount() {
  $("#btnTabSummonerFollowing").text(SummonerSummoner.iFollowing);
}

function SummonerUpdateFollowersCount() {
  $("#btnTabSummonerFollowers").text(SummonerSummoner.iFollowers);
}

function SummonerRowInvitations() {
  var rowPendingInvitations = $(".pending-invitations");
  rowPendingInvitations.empty().addClass("dnone");
  if (!hasSome(SummonerSummoner.invites))
      return;
  for (var i in SummonerSummoner.invites)
      rowPendingInvitations.append(getTemplateHtml(SummonerPendingInvitationItemTemplate, SummonerSummoner.invites[i]));
  rowPendingInvitations.removeClass("dnone");
}

function SummonerRowRanks() {
  var $rowRanks = $('#Home .rowranks');
  $rowRanks.empty().addClass('dnone');
  if (hasSome(SummonerSummoner.leagues)) {
      $rowRanks.append(SummonerRankCard(QueueType.SR_5V5RS, QueueTypeStatistics.Ranked_Solo));
      $rowRanks.append(SummonerRankCard(QueueType.SR_5V5RF, QueueTypeStatistics.Ranked_Flex_5v5));
  }
  if ($rowRanks.is(':empty'))
      $rowRanks.append(SummonerRankCardNormal(QueueTypeStatistics.Normal));
  if ($rowRanks.is(':empty') && timeToMs(SummonerSummoner.dtLastUpdate) > 0)
      $rowRanks.append(getTemplateHtml(NoContentItemTemplate, {
          bWnc: true,
          sIcon: 'fad fa-tasks-alt',
          sText: babel("summoner.statsarebeingprocessed", null, {
              SummonerName: SummonerSummoner.sName
          }) + '<br>' + babel("base.checkbacklater")
      }));
  if (!$rowRanks.is(':empty'))
      $rowRanks.removeClass('dnone');
  if (windowSmall())
      $rowRanks.find(".champions").slideUp();
}

function SummonerRankCard(iQueue, iQueueStat) {
  var queueStats = null;
  for (var i in SummonerSummoner.leagues)
      if (SummonerSummoner.leagues[i].iQueueType == iQueue) {
          queueStats = SummonerSummoner.leagues[i];
          break;
      }
  if (!queueStats || (queueStats.iWins === 0 && queueStats.iLosses === 0))
      return "";
  var CurrentSeasonEnumId = getCurrentSeason();
  if (SummonerSummoner.statistics && SummonerSummoner.statistics[CurrentSeasonEnumId]) {
      var iChampionCount = 0;
      for (var i in SummonerSummoner.statistics[CurrentSeasonEnumId])
          if (SummonerSummoner.statistics[CurrentSeasonEnumId][i].iQueue == iQueueStat) {
              iChampionCount++;
              queueStats["ChampionPlayed" + iChampionCount] = SummonerSummoner.statistics[CurrentSeasonEnumId][i];
              if (iChampionCount === 3) break;
          }
  }
  return getTemplateHtml(RankCardItemTemplate, queueStats);
}

function SummonerRankCardNormal(iQueueStat) {
  var CurrentSeasonEnumId = getCurrentSeason();
  var objPar = {
      iLevel: SummonerSummoner.iLevel,
      iWins: 0,
      iLosses: 0
  };
  if (SummonerSummoner.statistics && SummonerSummoner.statistics[CurrentSeasonEnumId]) {
      var iChampionCount = 0;
      for (var i in SummonerSummoner.statistics[CurrentSeasonEnumId])
          if (SummonerSummoner.statistics[CurrentSeasonEnumId][i].iQueue == iQueueStat) {
              objPar.iWins += SummonerSummoner.statistics[CurrentSeasonEnumId][i].iWins;
              objPar.iLosses += SummonerSummoner.statistics[CurrentSeasonEnumId][i].iGames - SummonerSummoner.statistics[CurrentSeasonEnumId][i].iWins;
              if (iChampionCount < 3) {
                  iChampionCount++;
                  objPar["ChampionPlayed" + iChampionCount] = SummonerSummoner.statistics[CurrentSeasonEnumId][i];
              }
          }
  }
  if (objPar.iWins + objPar.iLosses === 0)
      return "";
  return getTemplateHtml(RankCardLevelItemTemplate, objPar);
}

function SummonerRankCardMiniSeriesHtml(sMiniSeries) {
  var sHtml = '';
  if (!isNullOrEmpty(sMiniSeries)) {
      sHtml = '<div class="mini-series">';
      sMiniSeries = sMiniSeries.toLowerCase();
      for (var i = 0; i < sMiniSeries.length; i++) {
          if (sMiniSeries.charAt(i) === "w")
              sHtml += '<span class="green" title="' + babel("base.win") + '">W</span>';
          else if (sMiniSeries.charAt(i) === "l")
              sHtml += '<span class="red" title="' + babel("base.lost") + '">L</span>';
          else
              sHtml += '<span class="grey">-</span>';
      }
      sHtml += '</div>';
  }
  return sHtml;
}

function SummonerShowSummonerTeams() {
  var $rowteams = $('#Home .rowteams');
  $rowteams.children('.col.m4').remove();
  $rowteams.addClass('dnone');
  if (!hasSome(SummonerSummoner.ownedTeams)) return;
  for (var i in SummonerSummoner.ownedTeams)
      $rowteams.append('<div class="col s12 m4">' + getTemplateHtml(MyTeams_TeamCardItemTemplate, SummonerSummoner.ownedTeams[i]) + '</div>');
  $rowteams.removeClass('dnone');
}

function SummonerShowSummonerFriends() {
  var $rowFriends = $('#Home .rowfriends');
  $rowFriends.addClass('dnone');
  if (!hasSome(SummonerSummoner.playedWithRecent)) return;
  orderListByProperty(SummonerSummoner.playedWithRecent, "iGames", true);
  $rowFriends.find("ul").empty();
  for (var i in SummonerSummoner.playedWithRecent)
      $rowFriends.find("ul").append(getTemplateHtml(RecentlyPlayedSummonerItemTemplate, SummonerSummoner.playedWithRecent[i]));
  $rowFriends.removeClass('dnone');
}

function SummonerSetBindState() {
  if (WebUser.summoner)
      $(".bindpromo").addClass('dnone');
  else
      $(".bindpromo").removeClass('dnone');
}

function SummonerBindSummoner() {
  openModalBindSummoner(SummonerSummoner.sName, SummonerSummoner.iSummonerId);
}

function SummonerSetInviteStatus() {
  var $btnInvite = $('.btnInvite');
  if (!isUserLogged() || isMySummoner(SummonerSummoner)) {
      $btnInvite.addClass('dnone');
      return;
  }
  $btnInvite.removeClass('dnone');
  var bAlreadyInMyTeams = false;
  if (hasSome(WebUser.teams) && hasSome(SummonerSummoner.ownedTeams)) {
      bAlreadyInMyTeams = true;
      for (var i in WebUser.teams) {
          var bIsPartOfThisTeam = false;
          for (var j in SummonerSummoner.ownedTeams)
              if (WebUser.teams[i].iTeamId == SummonerSummoner.ownedTeams[j].iTeamId) {
                  bIsPartOfThisTeam = true;
                  break;
              }
          if (!bIsPartOfThisTeam) {
              bAlreadyInMyTeams = false;
              break;
          }
      }
  }
  if (!SummonerSummoner.bIsRegistered || SummonerSummoner.bBlockInvites || bAlreadyInMyTeams) {
      var sMessage = "";
      if (SummonerSummoner.bBlockInvites)
          sMessage = babel("summoner.summonerblockinvitations");
      else if (bAlreadyInMyTeams)
          sMessage = babel("summoner.summoneralreadyinmyteams");
      else
          sMessage = babel("summoner.summonernotregistered");
      $btnInvite.addClass('disabled tooltipped');
      $btnInvite.attr('data-tooltip', sMessage);
      $btnInvite.prop('title', sMessage);
      $btnInvite.tooltip();
  }
}

function SummonerOpenModalInviteSummoner() {
  openModalInviteSummoner(SummonerSummoner, null, function(ajax, obj) {
      if (!hasSome(SummonerSummoner.invites))
          SummonerSummoner.invites = [];
      SummonerSummoner.invites.push(obj.value);
      SummonerRowInvitations();
  });
}

function SummonerUpdate() {
  var ajaxObj = {
      sCode: 'Summoner',
      sSvcPage: 'Summoner',
      sMethod: 'UpdateSummoner'
  };
  var fnHandlers = {
      fnPend: function() {
          SummonerUpdateButtonText(babel("base.updating"));
          SummonerUpdating = true;
          $btnUpdate.addClass('disabled');
          $btnUpdate.find('.progress').removeClass('dnone');
          $('#loadMatchButton').addClass('disabled');
      },
      fnDone: function() {
          SummonerUpdating = false;
          SummonerSummoner.dtLastUpdate = new Date();
          SummonerCheckUpdateTimer();
          $btnUpdate.find('.progress').addClass('dnone');
          $('#loadMatchButton').removeClass('disabled');
      }
  };
  ajaxCallObj(ajaxObj, {
      iSummonerId: SummonerSummoner.iSummonerId
  }, fnHandlers);
}

function SummonerOsUpdateSummoner(ajax, obj) {
  toastSuccess(babel("toast.summonerupdated"));
  SummonerSummoner.dtLastUpdate = timeNow();
  if (hasSome(obj.value)) {
      SummonerSummoner.recentMatchCollection = null;
      SummonerMatchlistReset();
      SummonerLoadTabMatchlist(obj);
  }
  if (obj.AdditionalData) {
      SummonerSummoner.leagues = obj.AdditionalData.leagues;
      SummonerSummoner.iLevel = obj.AdditionalData.summonerLevel;
      SummonerSummoner.iProfileIconId = obj.AdditionalData.iProfileIconId;
      if (!isNullOrEmpty(obj.AdditionalData.summonerName) && obj.AdditionalData.summonerName != SummonerSummoner.sName) {
          toastInfo(babel("toast.summonerchangedname", null, {
              SummonerNameEx: SummonerSummoner.sName,
              SummonerNameNew: obj.AdditionalData.summonerName
          }));
          SummonerSummoner.dtLastNameChange = new Date();
          SummonerSummoner.sExName = SummonerSummoner.sName;
          SummonerSummoner.sName = obj.AdditionalData.summonerName;
          if (WebUser.summoner && WebUser.summoner.sName == SummonerSummoner.sExName) {
              WebUser.summoner.sName = SummonerSummoner.sName;
              WebUser.summoner.iProfileIconId = SummonerSummoner.iProfileIconId;
              updateHeader();
          }
          SearchAddSearchedListObj(SummonerSummoner);
      }
      SearchAddSearchedListObj(EntityType.Summoner, SummonerSummoner, true);
  }
  SummonerUpdateSummonerPage();
}

function SummonerUpdateCooldown() {
  return timeCooldown(SummonerSummoner.dtLastUpdate, Configuration.SummonerUpdateCooldownSeconds * 1000);
}

function SummonerCheckUpdateTimer() {
  if (getPageName() != 'Summoner' || SummonerSummoner == null) return;
  var msCD = SummonerUpdateCooldown();
  if (msCD > 0) {
      $btnUpdate.addClass('disabled');
      SummonerUpdateButtonText(Math.trunc(msCD / 1000) + 's');
      setTimeout(SummonerCheckUpdateTimer, 500);
  } else {
      SummonerUpdateButtonText(babel("base.update", 'u'));
      if (!SummonerUpdating)
          $btnUpdate.removeClass('disabled');
  }
}

function SummonerUpdateButtonText(sText) {
  $btnUpdate.children('span').text(sText);
}

function SummonerSetLastUpdateText() {
  if (SummonerSummoner.dtLastUpdate == null) {
      $('.labelUpdate').text('');
      return;
  }
  var dtLastUpdoot = timeToMs(SummonerSummoner.dtLastUpdate);
  var sRelativeTime;
  if (timeDifferenceFromNow(dtLastUpdoot) > 500 * 24 * 60 * 60 * 1000)
      sRelativeTime = babel("base.never", 'l');
  else {
      sRelativeTime = getRelativeTime(dtLastUpdoot);
      if (isNullOrEmpty(sRelativeTime))
          sRelativeTime = babel("base.never", 'l');
  }
  if (sRelativeTime == babel("base.never", 'l'))
      $(".rowneverupdated").removeClass("dnone");
  else
      $(".rowneverupdated").addClass("dnone");
  $('.labelUpdate').text(babel("base.lastupdate") + ': ' + sRelativeTime);
}
var TeamFollowFollowers;
pageVars.push("TeamFollowFollowers");

function TeamFollowDocumentReady() {
  TeamFollowFollowers = {
      iPageLoaded: 0,
      list: []
  };
}

function TeamLoadTabFollow() {
  $("#btnTabTeamFollowers").addClass("active");
  if (TeamFollowFollowers.iPageLoaded === 0)
      TeamFollowCallLoadFollowers();
}

function TeamFollowCallLoadFollowers() {
  callGetFollowerPageTeam('TeamFollow', TeamTeam.iTeamId, TeamFollowFollowers.iPageLoaded + 1, true);
}

function TeamFollowPendGetFollowerPage() {
  $('#TeamFollow .btn-load-more').removeClass('waves-effect');
  $('#TeamFollow .btn-load-more').addClass('disabled');
}

function TeamFollowDoneGetFollowerPage() {
  $('#TeamFollow .btn-load-more').addClass('waves-effect');
  $('#TeamFollow .btn-load-more').removeClass('disabled');
}

function TeamFollowOsGetFollowerPage(ajax, obj) {
  if (hasSome(obj.value)) {
      $('#TeamFollow .btn-load-more').removeClass('dnone');
      TeamFollowFollowers.iPageLoaded = ajax.params.iPage;
      Array.prototype.push.apply(TeamFollowFollowers.list, obj.value);
  }
  if (!hasSome(obj.value) || TeamFollowFollowers.list.length === TeamTeam.iFollowers)
      $('#TeamFollow .btn-load-more').addClass('dnone');
  TeamFollowLoadFollowersPage();
}

function TeamFollowLoadFollowersPage() {
  $('#TeamFollow ul.follow-list').empty();
  for (var i in TeamFollowFollowers.list) {
      var objFollow = TeamFollowFollowers.list[i];
      objFollow["sIdPrefix"] = "follower";
      TeamFollowCreateFollow(objFollow);
  }
}

function TeamFollowCreateFollow(objFollow) {
  $('#TeamFollow ul.follow-list').append(getTemplateHtml(FollowListItemTemplate, objFollow));
}
var bTeamMatchlistLoaded;
var iTeamLastDayMatch;
var TeamLastMatchTimestamp;
pageVars.push("bTeamMatchlistLoaded");
pageVars.push("iTeamLastDayMatch");
pageVars.push("TeamLastMatchTimestamp");

function TeamMatchlistDocumentReady() {
  bTeamMatchlistLoaded = false;
  iTeamLastDayMatch = 0;
  TeamLastMatchTimestamp = 0;
}

function TeamLoadTabMatchlist() {
  if (bTeamMatchlistLoaded || !TeamTeam || TeamTeam.iTeamId == 0) return;
  bTeamMatchlistLoaded = true;
  TeamLoadMatchPage();
}

function TeamLoadMatchPage() {
  var ajaxParams = {
      iTeamId: TeamTeam.iTeamId,
      iLastMatchTimestamp: TeamLastMatchTimestamp
  };
  var ajaxObj = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'LoadMatchPage',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $('#loadMatchButton').addClass('disabled');
          $("#loadMatchLoader").removeClass('dnone');
      },
      fnDone: function(ajax) {
          $('#loadMatchButton').removeClass('disabled');
          $("#loadMatchLoader").addClass('dnone');
          $('#team-matchlist').removeClass('dnone');
      }
  };
  ajaxCallObj(ajaxObj, ajaxParams, fnHandlers);
}

function TeamOsLoadMatchPage(ajax, obj) {
  if (!hasSome(obj.value)) {
      if (hasSome(TeamTeam.matches))
          $("#TeamMatchesEndLine").removeClass("dnone");
      $("#rowLoadMoreMatches").addClass('dnone');
      return;
  }
  if (isUserLogged())
      $("#rowInfoMatches").removeClass("dnone");
  if (TeamTeam.matches == null)
      TeamTeam.matches = [];
  TeamTeam.matches = TeamTeam.matches.concat(obj.value);
  for (var i in obj.value) {
      var match = obj.value[i];
      if (TeamLastMatchTimestamp == 0 || TeamLastMatchTimestamp > match.gameCreation)
          TeamLastMatchTimestamp = match.gameCreation;
      var iCurrentDay = parseInt(timeShow(match.gameCreation, 'yyyyMMdd'));
      if (iTeamLastDayMatch == 0 || iTeamLastDayMatch > iCurrentDay) {
          iTeamLastDayMatch = iCurrentDay;
          var dateFormat = 'dddd dd MMMM' + (new Date(timeToMs(match.gameCreation)).getFullYear() != new Date().getFullYear() ? ', yyyy' : '');
          $('#team-matchlist ul').append('<li class="collection-header"><h5>' + timeShow(match.gameCreation, dateFormat) + '</h5></li>');
      }
      var objPar = {
          gameId: match.gameId,
          queueId: match.queueId,
          dtGameCreation: match.gameCreation,
          lGameDuration: match.gameDuration
      };
      for (var j in match.teamCollection) {
          match.teamCollection[j].kills = 0;
          for (var k in match.playerMatchDataCollection)
              if (match.playerMatchDataCollection[k].teamId == match.teamCollection[j].iRiotTeamId)
                  match.teamCollection[j].kills += match.playerMatchDataCollection[k].kills;
      }
      if (match.teamCollection[0].teamId == TeamTeam.iTeamId) {
          objPar.allyTeam = match.teamCollection[0];
          objPar.enemyTeam = match.teamCollection[1];
      } else {
          objPar.allyTeam = match.teamCollection[1];
          objPar.enemyTeam = match.teamCollection[0];
      }
      if (!objPar.enemyTeam.team)
          objPar.enemyTeam.team = {
              sTag: babel("base.notregistered", 's'),
              sName: babel("base.notregistered"),
              bNotRegistered: true
          };
      $('#team-matchlist ul').append(getTemplateHtml(TeamMatchItemTemplate, objPar));
  }
  MatchCompactInitializeCollapsible('#team-matchlist ul.collapsible');
  $("#team-matchlist li.collection-header").next().addClass("session-start");
  $("#team-matchlist li.collection-header").prev().addClass("session-end");
}
var bTeamSettingsInitialized;
var TeamDisableSocialLiksInput;
pageVars.push("bTeamSettingsInitialized");
pageVars.push("TeamDisableSocialLiksInput");

function TeamSettingsDocumentReady() {
  bTeamSettingsInitialized = false;
  TeamDisableSocialLiksInput = 0;
  for (var i in RoleType) {
      var check = {
          sImgSrc: getRoleIcon(RoleType[i]),
          sText: babelEnum("RoleType", RoleType[i]),
          sValue: RoleType[i]
      };
      $("#openPositionsSettings").append('<div class="col s12 m4 input-field">' + getTemplateHtml(CheckItemTemplate, check) + '</div>');
  }
  for (var property in SocialLinkType)
      $('#TeamSettingsSocialLinks').append(getSocialLinkInputTemplate(SocialLinkType[property]));
}

function TeamLoadTabSettings() {
  if (bTeamSettingsInitialized) return;
  bTeamSettingsInitialized = true;
  if (!imAdmin(TeamTeam) && !imOwner(TeamTeam)) {
      $("#Settings").empty().append(getTemplateHtml(NoContentItemTemplate, {
          bWnc: true,
          sIcon: "fad fa-lock-alt",
          sText: babel("team.youcannotedit")
      }));
      return;
  }
  setCheckboxValue("#checkOpenToJoins", !TeamTeam.settings.bBlockJoinRequests);
  for (var i in TeamTeam.settings.openPositions)
      setCheckboxValue('#openPositionsSettings input[value="' + TeamTeam.settings.openPositions[i] + '"]', true);
  TeamReloadSocialLinks();
  createWeekSchedule($("#Settings .week-schedule"), TeamTeam, true);
}

function TeamSaveJoinSettings() {
  var ajaxObj = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'SaveSettings'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".card-join-settings input").prop("disabled", true);
          $("#btnJoinSave").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".card-join-settings input").prop("disabled", false);
          $("#btnJoinSave").removeClass("disabled");
      },
      fnOs: function(ajax) {
          TeamTeam.settings.bBlockJoinRequests = ajax.params.bBlockJoinRequests.toLowerCase() == "true";
          var tempArray = decodeURIComponent(ajax.params.openPositions).split(",");
          TeamTeam.settings.openPositions = [];
          for (var i in tempArray)
              TeamTeam.settings.openPositions.push(parseInt(tempArray[i]));
          TeamLoadOpenPositions();
          toastSuccess(babel("toast.teamjoinsettingssaved"));
      }
  };
  var openPositions = "";
  $('#openPositionsSettings input:checkbox:checked').each(function() {
      openPositions += this.checked ? $(this).val() + "," : "";
  });
  if (!isNullOrEmpty(openPositions))
      openPositions = openPositions.substr(0, openPositions.length - 1);
  ajaxCallObj(ajaxObj, {
      iTeamId: TeamTeam.iTeamId,
      bBlockJoinRequests: !getCheckboxValue("#checkOpenToJoins"),
      openPositions: openPositions
  }, fnHandlers);
}

function TeamReloadSocialLinks() {
  if (TeamTeam.socialLinks && TeamTeam.socialLinks)
      for (var i in TeamTeam.socialLinks)
          $('#sociaLink' + TeamTeam.socialLinks[i].iSocialLinkType).val(TeamTeam.socialLinks[i].sLink);
  M.updateTextFields();
}

function TeamSaveSocialLinksSettings() {
  for (var property in SocialLinkType)
      callSaveSocialLinksTeam('Team', TeamTeam.iTeamId, SocialLinkType[property], TeamGetSocialLink(SocialLinkType[property]));
}

function TeamGetSocialLink(id) {
  var s = $('#sociaLink' + id).val();
  var n = s.indexOf('?');
  return s.substring(0, n != -1 ? n : s.length);
}

function TeamPendSaveSocialLinks() {
  TeamDisableSocialLiksInput++;
  $('#btnSocialLinksSave').addClass('disabled');
}

function TeamDoneSaveSocialLinks() {
  TeamDisableSocialLiksInput--;
  if (TeamDisableSocialLiksInput == 0)
      $('#btnSocialLinksSave').removeClass('disabled');
}

function TeamOsSaveSocialLinks(ajax, obj) {
  if (obj.value == null) return;
  removeFromListByProperty(TeamTeam.socialLinks, "iSocialLinkType", obj.value.iSocialLinkType);
  TeamTeam.socialLinks.push(obj.value);
  TeamReloadSocialLinks();
}
var TeamStatisticsInitialized;
var TeamStatisticsActiveSeason;
var TeamStatisticsActiveQueue;
var TeamStatisticsCurrentMode;

function TeamStatisticsDocumentReady() {
  TeamStatisticsInitialized = false;
}

function TeamLoadTabStatistics() {
  TeamLoadStatistics();
}

function TeamLoadStatistics() {
  if (TeamStatisticsInitialized) return;
  TeamStatisticsInitialized = true;
  TeamStatisticsActiveSeason = null;
  TeamStatisticsActiveQueue = null;
  TeamStatisticsCurrentMode = "Average";
  if (!hasSome(TeamTeam.statistics)) {
      TeamStatisticsNoStats(true);
      return;
  }
  for (var i in TeamTeam.statistics) {
      TeamTeam.statistics[i].lTotalKills = 0;
      TeamTeam.statistics[i].lTotalDeaths = 0;
      TeamTeam.statistics[i].lTotalAssists = 0;
      TeamTeam.statistics[i].lTotalDoubleKills = 0;
      TeamTeam.statistics[i].lTotalTripleKills = 0;
      TeamTeam.statistics[i].lTotalQuadraKills = 0;
      TeamTeam.statistics[i].lTotalPentaKills = 0;
      TeamTeam.statistics[i].lTotalGold = 0;
      TeamTeam.statistics[i].lTotalVisionScore = 0;
  }
  for (var i in TeamTeam.statistics) {
      for (var j in TeamTeam.members) {
          var memberStats = TeamTeam.members[j].statistics;
          if (!memberStats)
              continue;
          for (var x in memberStats) {
              if (TeamTeam.statistics[i].iSeason != memberStats[x].iSeason || TeamTeam.statistics[i].iQueueType != memberStats[x].iQueueType)
                  continue;
              TeamTeam.statistics[i].lTotalKills += memberStats[x].lTotalKills;
              TeamTeam.statistics[i].lTotalDeaths += memberStats[x].lTotalDeaths;
              TeamTeam.statistics[i].lTotalAssists += memberStats[x].lTotalAssists;
              TeamTeam.statistics[i].lTotalDoubleKills += memberStats[x].lTotalDoubleKills;
              TeamTeam.statistics[i].lTotalTripleKills += memberStats[x].lTotalTripleKills;
              TeamTeam.statistics[i].lTotalQuadraKills += memberStats[x].lTotalQuadraKills;
              TeamTeam.statistics[i].lTotalPentaKills += memberStats[x].lTotalPentaKills;
              TeamTeam.statistics[i].lTotalGold += memberStats[x].lTotalGold;
              TeamTeam.statistics[i].lTotalVisionScore += memberStats[x].lVisionScore;
          }
      }
  }
  var collSeasons = [];
  for (var i in TeamTeam.statistics)
      if (!collSeasons.includes(TeamTeam.statistics[i].iSeason))
          collSeasons.push(TeamTeam.statistics[i].iSeason);
  collSeasons.sort(function(a, b) {
      return b - a;
  });
  for (var i in collSeasons)
      $('#statsSeasonsButtons').append('<a id="btnSeason' + collSeasons[i] + '" class="btn waves-effect" onclick="TeamStatisticsChangeSeason(' + collSeasons[i] + ')">' + babelEnum("Season", collSeasons[i]) + '</a>');
  TeamStatisticsChangeSeason(collSeasons[0]);
}

function TeamStatisticsNoStats(bAllStats) {
  if (bAllStats) {
      $("#Statistics").empty().append(getTemplateHtml(NoContentItemTemplate, {
          bWnc: true,
          sIcon: 'fad fa-chart-bar',
          sText: babel("team.nostats")
      }));
      return;
  }
  $("#Statistics").children().not(".row-filters").addClass("dnone");
  $("#Statistics").append(getTemplateHtml(NoContentItemTemplate, {
      bWnc: true,
      sIcon: 'fad fa-chart-bar',
      sText: babel("team.nostats")
  }));
}

function TeamStatisticsChangeSeason(iSeason) {
  if (iSeason === TeamStatisticsActiveSeason) return;
  $('#statsSeasonsButtons a.btn').addClass("white black-text");
  $('#btnSeason' + iSeason).removeClass("white black-text").addClass("active");
  TeamStatisticsActiveSeason = iSeason;
  $("#statsQueuesButtons > a").addClass("disabled");
  for (var i in TeamTeam.statistics)
      if (TeamTeam.statistics[i].iSeason === iSeason) {
          var bAtLeastOneMemberHasSameQueueStats = false;
          for (var j in TeamTeam.members)
              if (hasSome(TeamTeam.members[j].statistics)) {
                  for (var y in TeamTeam.members[j].statistics)
                      if (TeamTeam.members[j].statistics[y].iSeason == iSeason && TeamTeam.members[j].statistics[y].iQueueType == TeamTeam.statistics[i].iQueueType) {
                          bAtLeastOneMemberHasSameQueueStats = true;
                          break;
                      }
                  if (bAtLeastOneMemberHasSameQueueStats)
                      break;
              }
          if (bAtLeastOneMemberHasSameQueueStats)
              $("#btnQueue" + TeamTeam.statistics[i].iQueueType).removeClass("disabled");
      }
  if (!TeamStatisticsActiveQueue || $("#btnQueue" + TeamStatisticsActiveQueue).hasClass("disabled")) {
      if ($("#statsQueuesButtons > a:not(.disabled)")[0])
          $("#statsQueuesButtons > a:not(.disabled)")[0].click();
      else
          TeamStatisticsNoStats();
      return;
  }
  TeamCalculateAndAppendStats();
}

function TeamStatisticsChangeQueue(iQueue) {
  if (iQueue === TeamStatisticsActiveQueue) return;
  $('#statsQueuesButtons a.btn').addClass("white black-text");
  $('#btnQueue' + iQueue).removeClass("white black-text").addClass("active");
  TeamStatisticsActiveQueue = iQueue;
  TeamCalculateAndAppendStats();
}

function TeamCalculateAndAppendStats() {
  var iSeason = TeamStatisticsActiveSeason;
  var iQueue = TeamStatisticsActiveQueue;
  var bAtLeastOneMemberStat = false;
  var objPlayedChamps = {
      titles: [""],
      roles: [babel("base.role")],
      champion1: ["#1"],
      champion2: ["#2"],
      champion3: ["#3"]
  };
  for (var i in TeamTeam.members) {
      var mStats = null;
      if (hasSome(TeamTeam.members[i].statistics))
          for (var j in TeamTeam.members[i].statistics)
              if (TeamTeam.members[i].statistics[j].iSeason === iSeason && TeamTeam.members[i].statistics[j].iQueueType === iQueue) {
                  mStats = TeamTeam.members[i].statistics[j];
                  break;
              }
      if (!mStats) continue;
      bAtLeastOneMemberStat = true;
      objPlayedChamps.titles.push(TeamTeam.members[i].summoner.sName);
      objPlayedChamps.roles.push(TeamTeam.members[i].contract.iRole);
      objPlayedChamps.champion1.push(mStats.iPlayedChampion1);
      objPlayedChamps.champion2.push(mStats.iPlayedChampion2);
      objPlayedChamps.champion3.push(mStats.iPlayedChampion3);
  }
  if (!bAtLeastOneMemberStat) {
      TeamStatisticsNoStats();
      return;
  }
  var tStats = null;
  for (var i in TeamTeam.statistics)
      if (TeamTeam.statistics[i].iSeason == iSeason && TeamTeam.statistics[i].iQueueType == iQueue) {
          tStats = TeamTeam.statistics[i];
          break;
      }
  var objTeamStatistics = {
      "gameplayed_plural": {
          "Team": {
              "gameplayed_plural": {
                  Total: {
                      value: tStats.lTotalGames
                  },
                  Average: {
                      value: tStats.lTotalGames
                  }
              },
              "win_plural": {
                  Total: {
                      value: tStats.lTotalWins
                  },
                  Average: {
                      value: tStats.lTotalWins
                  }
              },
              "lost_plural": {
                  Total: {
                      value: tStats.lTotalGames - tStats.lTotalWins
                  },
                  Average: {
                      value: tStats.lTotalGames - tStats.lTotalWins
                  }
              },
              "winrate": {
                  Total: {
                      value: mathPercentage(tStats.lTotalWins, tStats.lTotalGames),
                      suffix: '%'
                  },
                  Average: {
                      value: mathPercentage(tStats.lTotalWins, tStats.lTotalGames),
                      suffix: '%'
                  }
              },
              "matchlenght": {
                  Total: {
                      value: getAmountOfTime(tStats.lTotalGameDuration * 1000)
                  },
                  Average: {
                      value: getAmountOfTime(tStats.lTotalGameDuration * 1000 / tStats.lTotalGames)
                  }
              }
          }
      },
      "combat": {
          "Team": {
              "kill_plural": {
                  Total: {
                      value: tStats.lTotalKills
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalKills, tStats.lTotalGames)
                  }
              },
              "death_plural": {
                  Total: {
                      value: tStats.lTotalDeaths
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalDeaths, tStats.lTotalGames)
                  }
              },
              "assist_plural": {
                  Total: {
                      value: tStats.lTotalAssists
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalAssists, tStats.lTotalGames)
                  }
              },
              "kda": {
                  Total: {
                      value: mathKDA(tStats.lTotalKills, tStats.lTotalDeaths, tStats.lTotalAssists)
                  },
                  Average: {
                      value: mathKDA(tStats.lTotalKills, tStats.lTotalDeaths, tStats.lTotalAssists)
                  }
              },
              "firstblood": {
                  Total: {
                      value: tStats.lTotalFirstBloods
                  },
                  Average: {
                      value: mathPercentage(tStats.lTotalFirstBloods, tStats.lTotalGames),
                      suffix: '%'
                  }
              }
          }
      },
      "objective_plural": {
          "Team": {
              "firsttower": {
                  Total: {
                      value: tStats.lTotalFirstTowers
                  },
                  Average: {
                      value: mathPercentage(tStats.lTotalFirstTowers, tStats.lTotalGames),
                      suffix: '%'
                  }
              },
              "tower_plural": {
                  Total: {
                      value: tStats.lTotalTowers
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalTowers, tStats.lTotalGames)
                  }
              },
              "inhibitor_plural": {
                  Total: {
                      value: tStats.lTotalInhibitors
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalInhibitors, tStats.lTotalGames)
                  }
              },
              "dragon_plural": {
                  Total: {
                      value: tStats.lTotalDragons
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalDragons, tStats.lTotalGames)
                  }
              },
              "herald_plural": {
                  Total: {
                      value: tStats.lTotalHeralds
                  },
                  Average: {
                      value: mathPercentage(tStats.lTotalHeralds, tStats.lTotalGames),
                      suffix: '%'
                  }
              },
              "baron_plural": {
                  Total: {
                      value: tStats.lTotalBarons
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalBarons, tStats.lTotalGames)
                  }
              }
          }
      },
      "goldandvision": {
          "Team": {
              "gold": {
                  Total: {
                      value: tStats.lTotalGold
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalGold, tStats.lTotalGames)
                  }
              },
              "creepscore_short": {
                  Total: {
                      value: 0
                  },
                  Average: {
                      value: 0
                  }
              },
              "cspermin": {
                  Total: {
                      value: 0
                  },
                  Average: {
                      value: 0
                  }
              },
              "visionscore": {
                  Total: {
                      value: tStats.lTotalVisionScore
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalVisionScore, tStats.lTotalGames)
                  }
              }
          }
      },
      "combatdetails": {
          "Team": {
              "damagedealt": {
                  Total: {
                      value: 0
                  },
                  Average: {
                      value: 0
                  }
              },
              "damagetaken": {
                  Total: {
                      value: 0
                  },
                  Average: {
                      value: 0
                  }
              },
              "selfmitigateddamage": {
                  Total: {
                      value: 0
                  },
                  Average: {
                      value: 0
                  }
              },
              "heal": {
                  Total: {
                      value: 0
                  },
                  Average: {
                      value: 0
                  }
              },
              "appliedcc": {
                  Total: {
                      value: 0
                  },
                  Average: {
                      value: 0
                  }
              }
          }
      },
      "multikills": {
          "Team": {
              "Double": {
                  Total: {
                      value: tStats.lTotalDoubleKills
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalDoubleKills, tStats.lTotalGames)
                  }
              },
              "Triple": {
                  Total: {
                      value: tStats.lTotalTripleKills
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalTripleKills, tStats.lTotalGames)
                  }
              },
              "Quadra": {
                  Total: {
                      value: tStats.lTotalQuadraKills
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalQuadraKills, tStats.lTotalGames)
                  }
              },
              "Penta": {
                  Total: {
                      value: tStats.lTotalPentaKills
                  },
                  Average: {
                      value: mathAverage(tStats.lTotalPentaKills, tStats.lTotalGames)
                  }
              }
          }
      }
  };
  for (var i in TeamTeam.members) {
      var mStats = null;
      if (hasSome(TeamTeam.members[i].statistics))
          for (var j in TeamTeam.members[i].statistics)
              if (TeamTeam.members[i].statistics[j].iSeason == iSeason && TeamTeam.members[i].statistics[j].iQueueType == iQueue) {
                  mStats = TeamTeam.members[i].statistics[j];
                  break;
              }
      if (!mStats) continue;
      var sName = TeamTeam.members[i].summoner.sName;
      objTeamStatistics["combatdetails"].Team["damagedealt"].Total.value += mStats.lTotalDamageDealtToChampions;
      objTeamStatistics["combatdetails"].Team["damagetaken"].Total.value += mStats.lTotalDamageTaken;
      objTeamStatistics["combatdetails"].Team["selfmitigateddamage"].Total.value += mStats.lTotalSelfMitigatedDamage;
      objTeamStatistics["combatdetails"].Team["heal"].Total.value += mStats.lTotalHeal;
      objTeamStatistics["combatdetails"].Team["appliedcc"].Total.value += mStats.lTotalTimeCCingOthers;
      objTeamStatistics["goldandvision"].Team["creepscore_short"].Total.value += mStats.lTotalMinionsKilled;
      objTeamStatistics["combat"][sName] = {};
      objTeamStatistics["combat"][sName]["kill_plural"] = {
          Total: {
              value: mStats.lTotalKills
          },
          Average: {
              value: mathAverage(mStats.lTotalKills, mStats.lTotalGames)
          }
      };
      objTeamStatistics["combat"][sName]["death_plural"] = {
          Total: {
              value: mStats.lTotalDeaths
          },
          Average: {
              value: mathAverage(mStats.lTotalDeaths, mStats.lTotalGames)
          }
      };
      objTeamStatistics["combat"][sName]["assist_plural"] = {
          Total: {
              value: mStats.lTotalAssists
          },
          Average: {
              value: mathAverage(mStats.lTotalAssists, mStats.lTotalGames)
          }
      };
      objTeamStatistics["combat"][sName]["kda"] = {
          Total: {
              value: mathKDA(mStats.lTotalKills, mStats.lTotalDeaths, mStats.lTotalAssists)
          },
          Average: {
              value: mathKDA(mStats.lTotalKills, mStats.lTotalDeaths, mStats.lTotalAssists)
          }
      };
      objTeamStatistics["combat"][sName]["firstblood"] = {
          Total: {
              value: mStats.lTotalFirstBloods
          },
          Average: {
              value: mathPercentage(mStats.lTotalFirstBloods, mStats.lTotalGames),
              suffix: '%'
          }
      };
      objTeamStatistics["combatdetails"][sName] = {};
      objTeamStatistics["combatdetails"][sName]["damagedealt"] = {
          Total: {
              value: mStats.lTotalDamageDealtToChampions
          },
          Average: {
              value: mathAverage(mStats.lTotalDamageDealtToChampions, mStats.lTotalGames)
          }
      };
      objTeamStatistics["combatdetails"][sName]["damagetaken"] = {
          Total: {
              value: mStats.lTotalDamageTaken
          },
          Average: {
              value: mathAverage(mStats.lTotalDamageTaken, mStats.lTotalGames)
          }
      };
      objTeamStatistics["combatdetails"][sName]["selfmitigateddamage"] = {
          Total: {
              value: mStats.lTotalSelfMitigatedDamage
          },
          Average: {
              value: mathAverage(mStats.lTotalSelfMitigatedDamage, mStats.lTotalGames)
          }
      };
      objTeamStatistics["combatdetails"][sName]["heal"] = {
          Total: {
              value: mStats.lTotalHeal
          },
          Average: {
              value: mathAverage(mStats.lTotalHeal, mStats.lTotalGames)
          }
      };
      objTeamStatistics["combatdetails"][sName]["appliedcc"] = {
          Total: {
              value: getAmountOfTime(mStats.lTotalTimeCCingOthers * 1000)
          },
          Average: {
              value: getAmountOfTime(mStats.lTotalTimeCCingOthers * 1000 / mStats.lTotalGames)
          }
      };
      objTeamStatistics["gameplayed_plural"][sName] = {};
      objTeamStatistics["gameplayed_plural"][sName]["gameplayed_plural"] = {
          Total: {
              value: mStats.lTotalGames
          },
          Average: {
              value: mathPercentage(mStats.lTotalGames, tStats.lTotalGames),
              suffix: '%'
          }
      };
      objTeamStatistics["gameplayed_plural"][sName]["win_plural"] = {
          Total: {
              value: mStats.lTotalWins
          },
          Average: {
              value: mathPercentage(mStats.lTotalWins, mStats.lTotalGames),
              suffix: '%'
          }
      };
      objTeamStatistics["gameplayed_plural"][sName]["lost_plural"] = {
          Total: {
              value: mStats.lTotalGames - mStats.lTotalWins
          },
          Average: {
              value: mathPercentage(mStats.lTotalGames - mStats.lTotalWins, mStats.lTotalGames),
              suffix: '%'
          }
      };
      objTeamStatistics["gameplayed_plural"][sName]["winrate"] = {
          Total: {
              value: mathPercentage(mStats.lTotalWins, mStats.lTotalGames),
              suffix: '%'
          },
          Average: {
              value: mathPercentage(mStats.lTotalWins, mStats.lTotalGames),
              suffix: '%'
          }
      };
      objTeamStatistics["gameplayed_plural"][sName]["matchlenght"] = {
          Total: {
              value: getAmountOfTime(mStats.lTotalTimePlayed * 1000)
          },
          Average: {
              value: getAmountOfTime(mStats.lTotalTimePlayed * 1000 / mStats.lTotalGames)
          }
      };
      objTeamStatistics["goldandvision"][sName] = {};
      objTeamStatistics["goldandvision"][sName]["gold"] = {
          Total: {
              value: mStats.lTotalGold
          },
          Average: {
              value: mathAverage(mStats.lTotalGold, mStats.lTotalGames)
          }
      };
      objTeamStatistics["goldandvision"][sName]["creepscore_short"] = {
          Total: {
              value: mStats.lTotalMinionsKilled
          },
          Average: {
              value: mathAverage(mStats.lTotalMinionsKilled, mStats.lTotalGames)
          }
      };
      objTeamStatistics["goldandvision"][sName]["cspermin"] = {
          Total: {
              value: mathAverage(mStats.lTotalMinionsKilled / (mStats.lTotalTimePlayed / 60), 1)
          },
          Average: {
              value: mathAverage(mStats.lTotalMinionsKilled / (mStats.lTotalTimePlayed / 60), 1)
          }
      };
      objTeamStatistics["goldandvision"][sName]["visionscore"] = {
          Total: {
              value: mStats.lVisionScore
          },
          Average: {
              value: mathAverage(mStats.lVisionScore, mStats.lTotalGames)
          }
      };
      objTeamStatistics["multikills"][sName] = {};
      objTeamStatistics["multikills"][sName]["Double"] = {
          Total: {
              value: mStats.lTotalDoubleKills
          },
          Average: {
              value: mathAverage(mStats.lTotalDoubleKills, mStats.lTotalGames)
          }
      };
      objTeamStatistics["multikills"][sName]["Triple"] = {
          Total: {
              value: mStats.lTotalTripleKills
          },
          Average: {
              value: mathAverage(mStats.lTotalTripleKills, mStats.lTotalGames)
          }
      };
      objTeamStatistics["multikills"][sName]["Quadra"] = {
          Total: {
              value: mStats.lTotalQuadraKills
          },
          Average: {
              value: mathAverage(mStats.lTotalQuadraKills, mStats.lTotalGames)
          }
      };
      objTeamStatistics["multikills"][sName]["Penta"] = {
          Total: {
              value: mStats.lTotalPentaKills
          },
          Average: {
              value: mathAverage(mStats.lTotalPentaKills, mStats.lTotalGames)
          }
      };
      objTeamStatistics["objective_plural"][sName] = {};
      objTeamStatistics["objective_plural"][sName]["firsttower"] = {
          Total: {
              value: mStats.lTotalFirstTowers
          },
          Average: {
              value: mathPercentage(mStats.lTotalFirstTowers, mStats.lTotalGames),
              suffix: '%'
          }
      };
      objTeamStatistics["objective_plural"][sName]["tower_plural"] = {
          Total: {
              value: mStats.lTotalTowers
          },
          Average: {
              value: mathAverage(mStats.lTotalTowers, mStats.lTotalGames)
          }
      };
      objTeamStatistics["objective_plural"][sName]["inhibitor_plural"] = {
          Total: {
              value: mStats.lTotalInhibitors
          },
          Average: {
              value: mathAverage(mStats.lTotalInhibitors, mStats.lTotalGames)
          }
      };
      objTeamStatistics["objective_plural"][sName]["dragon_plural"] = {
          Total: {
              value: 0,
              suffix: '-',
              bDontShowValue: true
          },
          Average: {
              value: 0,
              suffix: '-',
              bDontShowValue: true
          }
      };
      objTeamStatistics["objective_plural"][sName]["herald_plural"] = {
          Total: {
              value: 0,
              suffix: '-',
              bDontShowValue: true
          },
          Average: {
              value: 0,
              suffix: '-',
              bDontShowValue: true
          }
      };
      objTeamStatistics["objective_plural"][sName]["baron_plural"] = {
          Total: {
              value: 0,
              suffix: '-',
              bDontShowValue: true
          },
          Average: {
              value: 0,
              suffix: '-',
              bDontShowValue: true
          }
      };
  }
  objTeamStatistics["combatdetails"].Team["damagedealt"].Average.value = mathAverage(objTeamStatistics["combatdetails"].Team["damagedealt"].Total.value, tStats.lTotalGames);
  objTeamStatistics["combatdetails"].Team["damagetaken"].Average.value = mathAverage(objTeamStatistics["combatdetails"].Team["damagetaken"].Total.value, tStats.lTotalGames);
  objTeamStatistics["combatdetails"].Team["selfmitigateddamage"].Average.value = mathAverage(objTeamStatistics["combatdetails"].Team["selfmitigateddamage"].Total.value, tStats.lTotalGames);
  objTeamStatistics["combatdetails"].Team["heal"].Average.value = mathAverage(objTeamStatistics["combatdetails"].Team["heal"].Total.value, tStats.lTotalGames);
  objTeamStatistics["combatdetails"].Team["appliedcc"].Average.value = getAmountOfTime(objTeamStatistics["combatdetails"].Team["appliedcc"].Total.value * 1000 / tStats.lTotalGames)
  objTeamStatistics["combatdetails"].Team["appliedcc"].Total.value = getAmountOfTime(objTeamStatistics["combatdetails"].Team["appliedcc"].Total.value * 1000);
  objTeamStatistics["goldandvision"].Team["creepscore_short"].Average.value = mathAverage(objTeamStatistics["goldandvision"].Team["creepscore_short"].Total.value, tStats.lTotalGames);
  objTeamStatistics["goldandvision"].Team["cspermin"].Average.value = mathAverage(objTeamStatistics["goldandvision"].Team["creepscore_short"].Total.value / (tStats.lTotalGameDuration / 60), 1);
  objTeamStatistics["goldandvision"].Team["cspermin"].Total.value = mathAverage(objTeamStatistics["goldandvision"].Team["creepscore_short"].Total.value / (tStats.lTotalGameDuration / 60), 1);
  TeamAppendStats(objPlayedChamps, objTeamStatistics);
}

function TeamAppendStats(objPlayedChamps, objTeamStatistics) {
  $("#Statistics").children().removeClass("dnone");
  $("#Statistics").children(".wnc").remove();
  var $tablePlayedChamps = $("#Statistics .stats-played-champions .grid-table");
  $tablePlayedChamps.empty();
  $tablePlayedChamps.css("grid-template-columns", "auto repeat(" + (objPlayedChamps.titles.length - 1) + ", minmax(0, 1fr))");
  for (var i in objPlayedChamps.titles)
      $tablePlayedChamps.append('<div><span class="title" title="' + objPlayedChamps.titles[i] + '">' + objPlayedChamps.titles[i] + '</span></div>');
  for (var i in objPlayedChamps.roles)
      if (i == 0)
          $tablePlayedChamps.append('<div class="striped"><span class="title" title="' + objPlayedChamps.roles[i] + '">' + objPlayedChamps.roles[i] + '</span></div>');
      else
          $tablePlayedChamps.append('<div class="striped">' + getTemplateHtml(RoleImageItemTemplate, {
              iRole: objPlayedChamps.roles[i]
          }) + '<span>' + babelEnum("RoleType", objPlayedChamps.roles[i]) + '</span></div>');
  for (var i in objPlayedChamps.champion1)
      if (i == 0)
          $tablePlayedChamps.append('<div><span class="title" title="' + objPlayedChamps.champion1[i] + '">' + objPlayedChamps.champion1[i] + '</span></div>');
      else if (objPlayedChamps.champion1[i] === 0)
      $tablePlayedChamps.append('<div><i class="fad fa-circle grey-text"></i></div>');
  else
      $tablePlayedChamps.append('<div>' + getTemplateHtml(ChampionImageItemTemplate, {
          id: objPlayedChamps.champion1[i]
      }) + '<span>' + GetChampionNameById(objPlayedChamps.champion1[i]) + '</span></div>');
  for (var i in objPlayedChamps.champion2)
      if (i == 0)
          $tablePlayedChamps.append('<div><span class="title" title="' + objPlayedChamps.champion2[i] + '">' + objPlayedChamps.champion2[i] + '</span></div>');
      else if (objPlayedChamps.champion2[i] === 0)
      $tablePlayedChamps.append('<div><i class="fad fa-circle grey-text"></i></div>');
  else
      $tablePlayedChamps.append('<div>' + getTemplateHtml(ChampionImageItemTemplate, {
          id: objPlayedChamps.champion2[i]
      }) + '<span>' + GetChampionNameById(objPlayedChamps.champion2[i]) + '</span></div>');
  for (var i in objPlayedChamps.champion3)
      if (i == 0)
          $tablePlayedChamps.append('<div><span class="title" title="' + objPlayedChamps.champion3[i] + '">' + objPlayedChamps.champion3[i] + '</span></div>');
      else if (objPlayedChamps.champion3[i] === 0)
      $tablePlayedChamps.append('<div><i class="fad fa-circle grey-text"></i></div>');
  else
      $tablePlayedChamps.append('<div>' + getTemplateHtml(ChampionImageItemTemplate, {
          id: objPlayedChamps.champion3[i]
      }) + '<span>' + GetChampionNameById(objPlayedChamps.champion3[i]) + '</span></div>');
  $("#Statistics .team-data-card").remove();
  var iTeamTotalGames = objTeamStatistics["gameplayed_plural"]["Team"]["gameplayed_plural"].Total.value;
  for (var i in objTeamStatistics) {
      var id = i.replaceAll(" ", "");
      $("#Statistics").append(getTemplateHtml(TeamStatsTableItemTemplate, {
          id: id,
          title: babel("base." + id)
      }));
      var $tableTotal = $("#" + id + " .stats-total .grid-table");
      var $tableAverage = $("#" + id + " .stats-average .grid-table");
      $tableTotal.css("grid-template-columns", "repeat(" + (Object.keys(objTeamStatistics[i].Team).length + 1) + ", minmax(0, auto))");
      $tableAverage.css("grid-template-columns", "repeat(" + (Object.keys(objTeamStatistics[i].Team).length + 1) + ", minmax(0, auto))");
      $tableTotal.append('<div title="Total games"><label>' + babel("base.total") + ' (' + iTeamTotalGames + ' ' + babel("base.game", iTeamTotalGames === 1 ? '' : 'p') + ')</label></div>');
      $tableAverage.append('<div title="Total games"><label>' + babel("base.average") + ' (' + iTeamTotalGames + ' ' + babel("base.game", iTeamTotalGames === 1 ? '' : 'p') + ')</label></div>');
      for (var j in objTeamStatistics[i].Team) {
          $tableTotal.append('<div><span class="title" title="' + babel("base." + j.replace("_short", "")) + '">' + babel("base." + j) + '</span></div>');
          $tableAverage.append('<div><span class="title" title="' + babel("base." + j.replace("_short", "")) + '">' + babel("base." + j) + '</span></div>');
      }
      for (var j in objTeamStatistics[i]) {
          var sCss = j == "Team" ? "striped" : "";
          $tableTotal.append('<div class="' + sCss + '"><span class="title" title="' + j + '">' + j + '</span></div>');
          $tableAverage.append('<div class="' + sCss + '"><span class="title" title="' + j + '">' + j + '</span></div>');
          for (var k in objTeamStatistics[i][j]) {
              var sColorAverage = "";
              if (i != "gameplayed_plural" && j != "Team") {
                  var bDivideByMatchTeamSize = (k != "kda" && k != "winrate");
                  sColorAverage = ' class="' + TeamStatsColor(objTeamStatistics[i][j][k].Average, objTeamStatistics[i]["Team"][k].Average, bDivideByMatchTeamSize) + '"';
              }
              $tableTotal.append('<div class="' + sCss + '"><span>' + (!objTeamStatistics[i][j][k].Total.bDontShowValue ? objTeamStatistics[i][j][k].Total.value : '') + (objTeamStatistics[i][j][k].Total.suffix || '') + '</span></div>');
              $tableAverage.append('<div class="' + sCss + '"><span' + sColorAverage + '>' + (!objTeamStatistics[i][j][k].Average.bDontShowValue ? objTeamStatistics[i][j][k].Average.value : '') + (objTeamStatistics[i][j][k].Average.suffix || '') + '</span></div>');
          }
      }
  }
  TeamStatsRadioChanged(TeamStatisticsCurrentMode);
}

function TeamStatsRadioChanged(value) {
  TeamStatisticsCurrentMode = value;
  selectRadioByValue("#Statistics .team-data-card", null, value);
  if (value == "Total") {
      $("#Statistics .team-data-card .stats-total").removeClass("dnone");
      $("#Statistics .team-data-card .stats-average").addClass("dnone");
  } else {
      $("#Statistics .team-data-card .stats-total").addClass("dnone");
      $("#Statistics .team-data-card .stats-average").removeClass("dnone");
  }
}

function TeamStatsColor(statMember, statTeam, bDivideByMatchTeamSize) {
  var valueToCompare = statTeam.value;
  if (bDivideByMatchTeamSize)
      valueToCompare /= 5;
  if (statMember.bDontShowValue)
      return "";
  if (statMember.value < valueToCompare)
      return "red-text";
  if (statMember.value > valueToCompare)
      return "green-text";
  return "";
}
var TeamTeam;
pageVars.push("TeamTeam");

function TeamDocumentReady() {
  TeamTeam = null;
  TeamMatchlistDocumentReady();
  TeamStatisticsDocumentReady();
  TeamFollowDocumentReady();
  TeamSettingsDocumentReady();
  TeamCallLoadTeam();
}

function TeamOnSignIn() {
  reloadPage();
}

function TeamOnShowTab(tab) {
  if (tab == null) return;
  $("#btnTabTeamFollowers").removeClass("active");
  switch (tab.id) {
      case 'Home':
          break;
      case 'Matchlist':
          TeamLoadTabMatchlist();
          break;
      case 'Statistics':
          TeamLoadTabStatistics();
          break;
      case 'TeamFollow':
          TeamLoadTabFollow();
          break;
      case 'Settings':
          TeamLoadTabSettings();
          break;
      default:
          break;
  }
  changeUrlTab(tab.id != "Home" && tab.id != "TeamFollow" ? tab.id : "");
  if (windowSmall() && tab.id != "TeamFollow")
      goToByScrollHorizontal(".team-card .rowtabs ul", '#teamTab' + tab.id);
}

function TeamGoTabAlt(idTab) {
  $("#rowTeamCard ul.tabs").tabs('select', idTab);
}

function TeamGetSelectedTab() {
  var sTab = getSelectedTab();
  if (!isNullOrEmpty(sTab)) {
      sTab = sTab.toLowerCase();
      switch (sTab) {
          case 'matchlist':
              return 'Matchlist';
          case 'statistics':
              return 'Statistics';
          case 'teamfollow':
              return 'TeamFollow';
          case 'settings':
              return 'Settings';
          default:
              break;
      }
  }
  return "Home";
}

function TeamNotFound() {
  navigate('NoContent');
}

function TeamCallLoadTeam() {
  var sTeamId = getQueryStringByPos(0);
  if (isNullOrEmpty(sTeamId)) {
      TeamNotFound();
      return;
  }
  var objAjax = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'LoadTeam',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $('.rowLoadPage').removeClass('dnone');
      },
      fnDone: function(ajax) {
          $('.rowLoadPage').addClass('dnone');
      },
      fnOe: function(ajax) {
          TeamNotFound();
      },
      fnOs: function(ajax, obj) {
          if (!obj || !obj.value || isNullOrEmpty(obj.value.sName)) {
              TeamNotFound();
              return;
          }
          TeamTeam = obj.value;
          if (TeamTeam.members)
              TeamTeam.members.sort(function(a, b) {
                  return a.contract.iRole - b.contract.iRole
              });
          changeUrl("Team", getTeamPageLink(TeamTeam) + window.location.hash);
          changeTitle(TeamTeam.sName);
          TeamUpdateTeamPage();
          $("#rowTeamCard ul.tabs").tabs('select', TeamGetSelectedTab());
          updateSEOTags(null, TeamTeam);
      }
  };
  ajaxCallObj(objAjax, {
      iTeamId: sTeamId
  }, fnHandlers);
}

function TeamUpdateTeamPage() {
  TeamLoadSocial();
  TeamLoadTeamHeader();
  if (TeamTeam.iInvitePendingRole > 0) {
      $(".tm .youareinvited span").replaceWith('<span>' + getTemplateHtml(RoleImageItemTemplate, {
          iRole: TeamTeam.iInvitePendingRole
      }) + babel("team.invitedas", null, {
          Role: babelEnum("RoleType", TeamTeam.iInvitePendingRole, 'al')
      }) + '</span>');
      $(".tm .youareinvited").removeClass("dnone");
  } else
      $(".tm .youareinvited").addClass("dnone");
  if (TeamTeam.iJoinPendingRole > 0) {
      TeamUpdateMyJoinRequest();
      $(".tm .youaskedjoin").removeClass("dnone");
  } else
      $(".tm .youaskedjoin").addClass("dnone");
  TeamLoadPendingJoinRequests();
  TeamLoadPendingInvites();
  TeamLoadHomeRecap();
  TeamLoadContracts();
  TeamLoadTrials();
}

function TeamLoadTeamHeader() {
  $("#rowTeamCard").empty();
  $("#rowTeamCard").append(getTemplateHtml(TeamCardItemTemplate, TeamTeam));
  $("#rowTeamCard .dropdown-trigger").dropdown();
  $("#rowTeamCard ul.tabs").tabs({
      onShow: function(tab) {
          TeamOnShowTab(tab);
      }
  });
}

function TeamUpdateFollowersCount() {
  $("#btnTabTeamFollowers").text(TeamTeam.iFollowers);
}

function TeamLoadSocial() {
  var $SocialLinks = $('.tm .social-links');
  $SocialLinks.empty();
  var chip;
  if (hasSome(TeamTeam.socialLinks))
      for (var ind in TeamTeam.socialLinks)
          $SocialLinks.append(getSocialLinkChipTemplate(TeamTeam.socialLinks[ind]));
  chip = {
      sTitle: babel("team.shareteam"),
      sCss: "social waves-effect hoverable-light",
      sOnclick: "copyTextToClipboard('" + getTeamPageLink(TeamTeam) + "');",
      sIcon: "far fa-link left",
      sText: babel("base.share")
  };
  $SocialLinks.append(getTemplateHtml(ChipItemTemplate, chip));
  chip = {
      css: "social right" + (isUserLogged() && TeamTeam.bFollowed ? " f" : ""),
      click: "clickFollowButton(false, " + TeamTeam.iTeamId + ");"
  };
  $SocialLinks.append(getTemplateHtml(FollowButtonItemTemplate, chip));
}

function TeamLoadPendingJoinRequests() {
  var $joinRequests = $(".joinrequests");
  $joinRequests.addClass('dnone');
  $joinRequests.find(".collection-item").remove();
  if (!imMember(TeamTeam) || !hasSome(TeamTeam.joinRequests))
      return;
  $joinRequests.find('h5 .badge').text(TeamTeam.joinRequests.length);
  var bOwnerAdmin = imOwner(TeamTeam) || imAdmin(TeamTeam);
  for (var i in TeamTeam.joinRequests) {
      var objPar = {
          sId: "join" + TeamTeam.joinRequests[i].summoner.iSummonerId,
          dto: TeamTeam.joinRequests[i],
          iDaysLeft: timeMsToDays(timeDifferenceFromNow(TeamTeam.joinRequests[i].dtExpiry)) * -1,
          bOwnerAdmin: bOwnerAdmin,
          bJoinRequest: true
      };
      $joinRequests.find(".collection").append(getTemplateHtml(TeamPendingInviteJoinItemTemplate, objPar));
  }
  $joinRequests.removeClass('dnone');
}

function TeamCallAcceptJoinRequest(iSummonerId, sId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (iSummonerId <= 0) {
      toastError(babel("toast.choosensummonernotfound"));
      return;
  }
  var ajaxObj = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'AcceptJoin',
      moreParams: sId
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#" + ajax.moreParams).addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#" + ajax.moreParams).removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          for (var i in TeamTeam.joinRequests)
              if (TeamTeam.joinRequests[i].summoner.iSummonerId == ajax.params.iSummonerId) {
                  var newTrial = {
                      contract: {
                          dtJoinDate: new Date(),
                          iRole: TeamTeam.joinRequests[i].iRole,
                          iTeamRole: TeamRoleType.Trial
                      },
                      statistics: null,
                      summoner: TeamTeam.joinRequests[i].summoner
                  };
                  TeamTeam.trials.push(newTrial);
                  TeamTeam.joinRequests.splice(i, 1);
                  toastSuccess(babel("toast.summoneraccepted"));
                  toastWithButton(ToastType.Info, babel("team.summonerjoinedtoasthelp", null, {
                      SummonerName: newTrial.summoner.sName
                  }), "fad fa-user-friends", createToastButton(babel("base.ok")));
                  break;
              }
          TeamLoadPendingJoinRequests();
          TeamLoadContracts();
          TeamLoadTrials();
      }
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: TeamTeam.iTeamId,
      iSummonerId: iSummonerId
  }, fnHandlers);
}

function TeamCallDeclineJoinRequest(iSummonerId, sId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (iSummonerId <= 0) {
      toastError(babel("toast.choosensummonernotfound"));
      return;
  }
  var ajaxObj = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'DeclineJoin',
      moreParams: sId
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#" + ajax.moreParams).addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#" + ajax.moreParams).removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          for (var i in TeamTeam.joinRequests)
              if (TeamTeam.joinRequests[i].summoner.iSummonerId == ajax.params.iSummonerId) {
                  TeamTeam.joinRequests.splice(i, 1);
                  break;
              }
          TeamLoadPendingJoinRequests();
          TeamLoadOpenPositions();
          toastSuccess(babel("toast.requestdeclined"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: TeamTeam.iTeamId,
      iSummonerId: iSummonerId
  }, fnHandlers);
}

function TeamCallApplyToTeam(iRole) {
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#team-btn-join").addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#team-btn-join").removeClass("disabled");
      },
      fnOs: function(ajax) {
          TeamTeam.iJoinPendingRole = parseInt(ajax.params.iRole);
          TeamUpdateMyJoinRequest();
          $(".tm .youaskedjoin").removeClass("dnone");
          TeamLoadOpenPositions();
      }
  };
  callApplyToTeam('Team', TeamTeam.iTeamId, iRole, false, fnHandlers);
}

function TeamCallCancelJoin() {
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".tm .youaskedjoin a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".tm .youaskedjoin a").removeClass("disabled");
      },
      fnOs: function(ajax) {
          TeamTeam.iJoinPendingRole = 0;
          $(".tm .youaskedjoin").addClass("dnone");
          TeamLoadOpenPositions();
      }
  };
  callCancelJoin('Team', TeamTeam.iTeamId, false, fnHandlers);
}

function TeamUpdateMyJoinRequest() {
  var sText = babel("team.joinrequestassend", null, {
      Role: babelEnum("roletype", TeamTeam.iJoinPendingRole, 'al')
  });
  $(".tm .youaskedjoin span").replaceWith('<span>' + getTemplateHtml(RoleImageItemTemplate, {
      iRole: TeamTeam.iJoinPendingRole
  }) + sText + '</span>');
}

function TeamLoadPendingInvites() {
  var $pendingInvite = $(".pendinginvites");
  $pendingInvite.addClass('dnone');
  $pendingInvite.find(".collection-item").remove();
  if (!imMember(TeamTeam) || !hasSome(TeamTeam.invites))
      return;
  $pendingInvite.find('h5 .badge').text(TeamTeam.invites.length);
  var bOwnerAdmin = imOwner(TeamTeam) || imAdmin(TeamTeam);
  for (var i in TeamTeam.invites) {
      var objPar = {
          sId: "invite" + TeamTeam.invites[i].summoner.iSummonerId,
          dto: TeamTeam.invites[i],
          iDaysLeft: timeMsToDays(timeDifferenceFromNow(TeamTeam.invites[i].dtExpiry)) * -1,
          bOwnerAdmin: bOwnerAdmin,
          bInvite: true
      };
      $pendingInvite.find(".collection").append(getTemplateHtml(TeamPendingInviteJoinItemTemplate, objPar));
  }
  $pendingInvite.removeClass('dnone');
}

function TeamCallCancelInvite(iSummonerId, sId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (iSummonerId <= 0) {
      toastError(babel("toast.choosensummonernotfound"));
      return;
  }
  var ajaxObj = {
      sCode: 'Team',
      sSvcPage: 'Team',
      sMethod: 'CancelInvite',
      moreParams: sId
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#" + ajax.moreParams).addClass("disabled");
      },
      fnDone: function(ajax) {
          $("#" + ajax.moreParams).removeClass("disabled");
      },
      fnOs: function(ajax) {
          for (var i in TeamTeam.invites)
              if (TeamTeam.invites[i].summoner.iSummonerId == ajax.params.iSummonerId) {
                  TeamTeam.invites.splice(i, 1);
                  break;
              }
          TeamLoadPendingInvites();
          TeamLoadOpenPositions();
          toastSuccess(babel("toast.invitationcenceled"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTeamId: TeamTeam.iTeamId,
      iSummonerId: iSummonerId
  }, fnHandlers);
}

function TeamCallAcceptInvite() {
  var fnHandlers = {
      fnPend: function() {
          $(".youareinvited a").addClass("disabled");
      },
      fnDone: function() {
          $(".youareinvited a").removeClass("disabled");
      },
      fnOs: function() {
          reloadPage();
      }
  };
  callAcceptInvite('Team', TeamTeam.iTeamId, false, fnHandlers);
}

function TeamCallDeclineInvite() {
  var fnHandlers = {
      fnPend: function(ajax) {
          $(".youareinvited a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $(".youareinvited a").removeClass("disabled");
      },
      fnOs: function(ajax) {
          $(".youareinvited").addClass("dnone");
          TeamTeam.iInvitePendingRole = 0;
          TeamLoadOpenPositions();
      }
  };
  callDeclineInvite('Team', TeamTeam.iTeamId, false, fnHandlers);
}

function TeamInviteSummoner() {
  openModalInviteSummoner(null, TeamTeam, function(ajax, obj) {
      if (obj == null || obj.value == null)
          return;
      if (TeamTeam.invites == null)
          TeamTeam.invites = [];
      TeamTeam.invites.push(obj.value);
      TeamLoadPendingInvites();
  });
}

function TeamLoadHomeRecap() {
  var $colRecap = $("#Home .home-recap .col:nth-child(2)");
  var recap = {
      rank: TeamTeam.rank,
      iGames: 0,
      iWins: 0,
      iTextId: TeamTeam.description ? TeamTeam.description.iTextId : 0
  };
  var CurrentSeasonEnumId = getCurrentSeason();
  if (hasSome(TeamTeam.statistics))
      for (var i in TeamTeam.statistics)
          if (TeamTeam.statistics[i].iSeason == CurrentSeasonEnumId && TeamTeam.statistics[i].iQueueType == QueueTypeStatistics.Ranked_Flex_5v5) {
              recap.iGames = TeamTeam.statistics[i].lTotalGames;
              recap.iWins = TeamTeam.statistics[i].lTotalWins;
              continue;
          }
  $colRecap.append(getTemplateHtml(TeamRecapItemTemplate, recap));
  TeamLoadSchedule();
  TeamLoadOpenPositions();
  TeamRecapToggleDesc(true);
  $('.tm #Home .card-recap .dropdown-trigger').dropdown();
}

function TeamRecapToggleDesc(bCompact) {
  var $description = $(".tm #Home .card-recap .card-content .description");
  $description.addClass("dnone");
  if (!TeamTeam.description || isNullOrEmpty(TeamTeam.description.sText))
      return;
  $description.removeClass("dnone");
  if (TeamTeam.description.sText.length < 100) {
      $description.children("p").text(TeamTeam.description.sText);
      $description.children("a.link").remove();
      return;
  }
  if (!$description.hasClass("compact") || bCompact) {
      $description.addClass("compact");
      $description.children("a.link").text(babel("base.more"));
      $description.children("p").text(TeamTeam.description.sText.substring(0, 100) + "...");
  } else {
      $description.removeClass("compact");
      $description.children("a.link").text(babel("base.less"));
      $description.children("p").text(TeamTeam.description.sText);
  }
}

function TeamLoadSchedule() {
  createWeekSchedule($("#Home .week-schedule"), TeamTeam, false);
}

function TeamLoadOpenPositions() {
  var $openPositions = $mainContent.find("#Home .open-positions");
  $openPositions.addClass("dnone");
  $openPositions.children("div").empty();
  $openPositions.find("#ddOPAskJoin").empty();
  if (TeamTeam.settings.bBlockJoinRequests || TeamTeam.iInvitePendingRole > 0 || TeamTeam.iJoinPendingRole > 0) return;
  $openPositions.removeClass("dnone");
  for (var i in RoleType) {
      bOpen = TeamTeam.settings.openPositions.includes(RoleType[i]);
      $openPositions.children("div").append('<img ' + (!bOpen ? 'class="disabled"' : '') + ' src="' + getRoleIcon(RoleType[i]) + '">');
      if (bOpen)
          $openPositions.find("#ddOPAskJoin").append('<li><a onclick="TeamCallApplyToTeam(' + RoleType[i] + ')">' + getTemplateHtml(RoleImageItemTemplate, {
              iRole: RoleType[i]
          }) + babel("team.joinas", null, {
              Role: babelEnum("RoleType", RoleType[i])
          }) + '</a></li>');
  }
  if (imMember(TeamTeam))
      $("#team-btn-join").addClass("dnone");
  else {
      $("#team-btn-join").removeClass("dnone").dropdown();
  }
}

function TeamLoadContracts() {
  TeamInviteBtnVisibility();
  var $contractsContainer = $("#members-collection");
  $contractsContainer.empty();
  if (!hasSome(TeamTeam.members)) return;
  var iMembersCount = TeamTeam.members.length;
  var bImOwner = imOwner(TeamTeam);
  var bImAdmin = imAdmin(TeamTeam);
  $('#members_count').text(iMembersCount + '/9');
  var bWithOptions = false;
  for (var i in TeamTeam.members) {
      var objPar = deepClone(TeamTeam.members[i]);
      objPar.bImOwner = bImOwner;
      objPar.bImAdmin = bImAdmin;
      objPar.bOwner = objPar.contract.iTeamRole == TeamRoleType.Owner;
      objPar.bAdmin = objPar.contract.iTeamRole == TeamRoleType.Administrator;
      objPar.bOptEdit = bImOwner || bImAdmin;
      objPar.bOptChangeRole = bImOwner || bImAdmin;
      objPar.bOptMakeOwner = bImOwner && !objPar.bOwner;
      objPar.bOptMakeAdmin = bImOwner && !objPar.bOwner && !objPar.bAdmin;
      objPar.bOptRevokeAdmin = bImOwner && objPar.bAdmin;
      objPar.bOptKick = !isMySummoner(objPar.summoner) && (bImOwner || (bImAdmin && !objPar.bOwner && !objPar.bAdmin));
      objPar.bNoOptions = !objPar.bOptEdit && !objPar.bOptChangeRole && !objPar.bOptMakeOwner && !objPar.bOptMakeAdmin && !objPar.bOptRevokeAdmin && !objPar.bOptKick;
      $contractsContainer.append(getTemplateHtml(TeamContractItemTemplate, objPar));
      if (!objPar.bNoOptions)
          bWithOptions = true;
  }
  if (bWithOptions)
      $contractsContainer.addClass("with-options");
  $contractsContainer.find('.dropdown-trigger').dropdown();
}

function TeamInviteBtnVisibility() {
  if (imAdmin(TeamTeam) || imOwner(TeamTeam))
      $("#team-btn-invite").removeClass("dnone");
  else
      $("#team-btn-invite").addClass("dnone");
}

function TeamLoadTrials() {
  var $ulTrials = $("#trials-collection");
  $ulTrials.empty();
  $('.row-trials').addClass("dnone");
  if (!hasSome(TeamTeam.trials)) return;
  $('.row-trials').removeClass("dnone");
  $('#trials_count').text(TeamTeam.trials.length + '/20');
  var bImOwner = imOwner(TeamTeam);
  var bImAdmin = imAdmin(TeamTeam);
  for (var i in TeamTeam.trials) {
      var objPar = deepClone(TeamTeam.trials[i]);
      objPar.bImOwner = bImOwner;
      objPar.bImAdmin = bImAdmin;
      $ulTrials.append(getTemplateHtml(TeamTrialItemTemplate, objPar));
  }
}

function TeamLeaveTeam() {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  appendModal(babel("base.leaveteam"), babel("team.leaveteamdesc"), "callLeaveTeam('Team', '" + TeamTeam.iTeamId + "', true);", babel("base.confirm"));
}

function TeamOsLeaveTeam() {
  reloadPage();
  callLoadMyTeamsSideNav();
}

function TeamDisbandTeam() {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  var sModalDescription = "";
  sModalDescription += babel("team.disbandteamdesc1") + '<br />';
  sModalDescription += babel("team.disbandteamdesc2") + '<br />';
  sModalDescription += babel("team.disbandteamdesc3");
  appendModal(babel("base.disbandteam"), sModalDescription, "callDisbandTeam('" + TeamTeam.iTeamId + "', true, 'Team');", babel("base.confirm"));
}

function TeamOsDisbandTeam() {
  navigate('MyTeams');
}
var $TeamLeaderboardTeams;
var TeamLeaderboardCurrentPosition;
var TeamLeaderboardLastPage = 0;
var TeamLeaderboardMaxPage = 0;

function TeamLeaderboardDocumentReady() {
  changeTitle('Teams leaderboard');
  TeamLeaderboardCurrentPosition = 1;
  var iPosition = parseInt(getQueryStringByPos(0));
  if (!isNaN(iPosition) && iPosition > 0)
      TeamLeaderboardCurrentPosition = iPosition;
  var iPage = TeamLeaderboardGetPageFromPosition(TeamLeaderboardCurrentPosition);
  if (iPage == TeamLeaderboardLastPage && $TeamLeaderboardTeams) {
      TeamLeaderboardShowTeams();
      TeamLeaderboardSetPagination();
  } else {
      TeamLeaderboardLoadPage(iPage);
  }
  TeamLeaderboardShowMyTeams();
}

function TeamLeaderboardOnSignIn() {
  reloadPage();
}

function navigateTeamLeaderboard(iPosition) {
  navigate("TeamLeaderboard", iPosition);
}

function TeamLeaderboardGetPageFromPageIndex(iPageNum) {
  if (iPageNum && !isNaN(iPageNum) && iPageNum > 1)
      return (iPageNum - 1) * Configuration.TeamLeaderboardShownTeams + 1;
  else
      return 1;
}

function TeamLeaderboardGetPageFromPosition(iPosition) {
  if (iPosition && !isNaN(iPosition) && iPosition > 0)
      return TeamLeaderboardGetPageFromPageIndex(Math.floor(iPosition / Configuration.TeamLeaderboardShownTeams) + 1);
  else
      return 1;
}

function TeamLeaderboardLoadPage(iPage) {
  var ajaxObj = {
      sCode: 'TeamLeaderboard',
      sSvcPage: 'Team',
      sMethod: 'GetTeamLeaderboardPage',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function() {
          TeamLeaderboardPendPagination();
      },
      fnOs: function(ajax, obj) {
          if (!hasSome(obj.value)) return;
          $TeamLeaderboardTeams = obj.value;
          TeamLeaderboardLastPage = ajax.params.iPosition;
          TeamLeaderboardMaxPage = obj.AdditionalData.PageCount;
          TeamLeaderboardShowTeams();
          TeamLeaderboardSetPagination();
      }
  };
  ajaxCallObj(ajaxObj, {
      iPosition: iPage
  }, fnHandlers);
}

function TeamLeaderboardShowTeams() {
  var $teamList = $("#ulTeamLeaderboardTeams");
  $teamList.empty();
  if (!hasSome($TeamLeaderboardTeams))
      return;
  $teamList.append(getTemplateHtml(TeamLeaderboardListItemHeaderItemTemplate));
  for (var i in $TeamLeaderboardTeams) {
      var objPar = {
          css: "",
          team: $TeamLeaderboardTeams[i]
      };
      if ($TeamLeaderboardTeams[i].iPosition === 1)
          objPar.css += " first ";
      else if ($TeamLeaderboardTeams[i].iPosition === 2)
          objPar.css += " second ";
      else if ($TeamLeaderboardTeams[i].iPosition === 3)
          objPar.css += " third ";
      if ($TeamLeaderboardTeams[i].iPosition > 101)
          objPar.css += " top-100 ";
      if (imMember($TeamLeaderboardTeams[i]))
          objPar.css += " im-member ";
      $teamList.append(getTemplateHtml(TeamLeaderboardTeamListItemItemTemplate, objPar));
  }
}

function TeamLeaderboardSetPagination() {
  var $pagination = $('.tmldrb ul.pagination');
  $pagination.empty();
  if (!hasSome($TeamLeaderboardTeams))
      return;
  var item;
  var iPage = Math.floor(TeamLeaderboardLastPage / Configuration.TeamLeaderboardShownTeams) + 1;
  var iNumPages = Configuration.TeamLeaderboardPagination;
  var iStartingPage = Math.floor((iPage - 1) / iNumPages) * iNumPages + 1;
  item = {
      bLeft: true,
      bDisabled: iPage < 2,
      sHref: getPageLink('TeamLeaderboard', TeamLeaderboardGetPageFromPageIndex(iPage - 1)),
      sOnClick: "navigateTeamLeaderboard('" + TeamLeaderboardGetPageFromPageIndex(iPage - 1) + "');return false;"
  };
  $pagination.append(getTemplateHtml(PaginationItemTemplate, item));
  for (var i = iStartingPage; i < iStartingPage + iNumPages; i++) {
      if (TeamLeaderboardMaxPage > 0 && i > TeamLeaderboardMaxPage)
          break;
      item = {
          sText: i,
          bActive: i === iPage,
          sHref: getPageLink('TeamLeaderboard', TeamLeaderboardGetPageFromPageIndex(i)),
          sOnClick: "navigateTeamLeaderboard('" + TeamLeaderboardGetPageFromPageIndex(i) + "');return false;"
      };
      $pagination.append(getTemplateHtml(PaginationItemTemplate, item));
  }
  item = {
      bRight: true,
      bDisabled: iPage === TeamLeaderboardMaxPage,
      sHref: getPageLink('TeamLeaderboard', TeamLeaderboardGetPageFromPageIndex(iPage + 1)),
      sOnClick: "navigateTeamLeaderboard('" + TeamLeaderboardGetPageFromPageIndex(iPage + 1) + "');return false;"
  };
  $pagination.append(getTemplateHtml(PaginationItemTemplate, item));
}

function TeamLeaderboardPendPagination() {
  $('.tmldrb ul.pagination li').removeClass('waves-effect').addClass('disabled');
}

function TeamLeaderboardShowMyTeams() {
  $rowMyTeams = $('#rowTeamLeaderboardMyTeams');
  if (!hasSome(WebUser.teams)) {
      $rowMyTeams.addClass('dnone');
      return;
  }
  for (var i in WebUser.teams)
      $rowMyTeams.append('<div class="col s12 m4" style="margin-bottom: 8px;">' + getTemplateHtml(TeamLeaderboard_ButtonTeamItemTemplate, WebUser.teams[i]) + '</div>');
  $rowMyTeams.find('.tooltipped').tooltip();
  $rowMyTeams.removeClass('dnone');
}
var TournamentCurrentBracketIndex;

function TournamentManagementDocumentReady() {
  TournamentCurrentBracketIndex = 0;
}

function TournamentLoadTabManagement() {
  TournamentSetManagementByPhase();
}

function TournamentManagePendPage() {
  $("#Management .tournament-example .match").css("pointer-events", "none");
  $("#Management input").attr("disabled", "disabled");
  $("#Management a").addClass("disabled");
}

function TournamentManageDonePage() {
  $("#Management .tournament-example .match").removeAttr("style");
  $("#Management input").removeAttr("disabled");
  $("#Management a").removeClass("disabled");
  if (TournamentCurrentBracketIndex > TournamentTournament.iSize / 2) {
      $("#selectParticipantBlue, #selectParticipantRed").attr("disabled", "disabled");
      $("#selectParticipantBlue, #selectParticipantRed").formSelect();
  }
}

function TournamentSetManagementByPhase() {
  $(".trnmnt #Management > div").not("#row_manage_options").addClass("dnone");
  $("#row_manage_options").addClass("dnone");
  $(".trnmnt #Management .checkin-fields").addClass("dnone");
  var sPhase = TournamentGetCurrentPhase(TournamentTournament);
  switch (sPhase) {
      case "registration": {
          TournamentManageResetParticipantCollection();
          $("#row_manage_participant").removeClass("dnone");
          $("#row_manage_options,.checkin-fields,#btnManageStart").removeClass("dnone");
      }
      break;
      case "checkin": {
          TournamentManageResetParticipantCollection();
          $("#row_manage_participant").removeClass("dnone");
          $("#row_manage_options,.checkin-fields,#btnManageStart").removeClass("dnone");
      }
      break;
      case "started": {
          TournamentManageResetVisualization();
          $("#row_manage_match").removeClass("dnone");
          if (WebUser.bIsAdmin)
              $("#row_manage_options,#btnManageClose").removeClass("dnone");
      }
      break;
      case "closed": {
          if (WebUser.bIsAdmin)
              $("#row_manage_options,#row_manage_options .admin-only,#btnManageReopen").removeClass("dnone");
      }
      break;
      default:
          break;
  }
  if (WebUser.bIsAdmin)
      $("#row_manage_options,#row_manage_options .admin-only,#btnManageShow,#btnManageHide").removeClass("dnone");
}

function TournamentManageResetParticipantCollection() {
  var $collection = $("#row_manage_participant .collection").empty();
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One && !hasSome(TournamentTournament.summonerPool)) return;
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five && !hasSome(TournamentTournament.teamPool)) return;
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One)
      for (var i in TournamentTournament.summonerPool)
          if (TournamentTournament.summonerPool[i].bHasPriority)
              $collection.append(getTemplateHtml(TournamentManagementParticipantSummonerItemTemplate, TournamentTournament.summonerPool[i]));
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five)
      for (var i in TournamentTournament.teamPool)
          if (TournamentTournament.teamPool[i].bHasPriority)
              $collection.append(getTemplateHtml(TournamentManagementParticipantTeamItemTemplate, TournamentTournament.teamPool[i]));
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One)
      for (var i in TournamentTournament.summonerPool)
          if (!TournamentTournament.summonerPool[i].bHasPriority)
              $collection.append(getTemplateHtml(TournamentManagementParticipantSummonerItemTemplate, TournamentTournament.summonerPool[i]));
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five)
      for (var i in TournamentTournament.teamPool)
          if (!TournamentTournament.teamPool[i].bHasPriority)
              $collection.append(getTemplateHtml(TournamentManagementParticipantTeamItemTemplate, TournamentTournament.teamPool[i]));
  $("#row_manage_participant .collection li:nth-child(n+" + (TournamentTournament.iSize + 1) + ")").addClass('blue-grey lighten-5');
  TournamentManageSetReadyParticipantCollection();
}

function TournamentManageSetReadyParticipantCollection() {
  var iNumberOfReady = 0;
  $("#row_manage_participant .collection li").removeClass("ready").addClass("waiting");
  for (var i in TournamentTournament.readyStates)
      if (TournamentTournament.readyStates[i].bIsReady) {
          iNumberOfReady++;
          $("#mngParticipantColl" + TournamentTournament.readyStates[i].iParticipantId).addClass("ready").removeClass("waiting");
      }
  $("#row_manage_participant .collection li .status").text(babel("base.waiting"));
  $("#row_manage_participant .collection li.ready .status").text(babel("base.ready"));
  if (iNumberOfReady > 0)
      $("#ready_counter").text(iNumberOfReady + '/' + TournamentTournament.readyStates.length + " " + babel("base.ready", 'p'));
}

function TournamentManageTogglePriority(iParticipantId) {
  if (iParticipantId == 0) {
      toastError(babel("toast.participantnotfound"));
      return;
  }
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'SetPriority'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          TournamentParticipantSetPriority(TournamentTournament, ajax.params.iParticipantId, ajax.params.bHasPriority == "true");
          TournamentLoadParticipants();
          TournamentManageResetParticipantCollection();
          if (ajax.params.bHasPriority == "true")
              toastSuccess(babel("toast.prioritygiven"));
          else
              toastSuccess(babel("toast.prioritytaken"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId,
      iParticipantId: iParticipantId,
      bHasPriority: !TournamentGetParticipantById(TournamentTournament, iParticipantId).bHasPriority
  }, fnHandlers);
}

function TournamentManageConfirmKick(iParticipantId) {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  appendModal(babel("tournament.confirmkick"), babel("tournament.confirmkicktext", '', {
      ParticipantName: TournamentGetParticipantNameById(TournamentTournament, iParticipantId)
  }), "TournamentManageKick(" + iParticipantId + ");", babel("base.kick"));
}

function TournamentManageKick(iParticipantId) {
  if (iParticipantId == 0) {
      toastError(babel("toast.participantnotfound"));
      return;
  }
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'KickParticipant'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          TournamentRemoveParticipant(TournamentTournament, ajax.params.iParticipantId);
          TournamentUpdatePage();
          TournamentManageResetParticipantCollection();
          toastSuccess(babel("toast.participantkicked"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId,
      iParticipantId: iParticipantId
  }, fnHandlers);
}

function TournamentManageCheckIn() {
  if (!isUserLogged(true)) return;
  var iMinutes = parseInt($("#checkin_minutes").val());
  if (isNaN(iMinutes)) {
      toastError(babel("toast.checkinminutesnotvalid"));
      return;
  }
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'StartReadyCheck'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
          toastSuccess(babel("toast.tournamentcheckinstarted"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId,
      iMinutes: iMinutes
  }, fnHandlers);
}

function TournamentManageResetReadyCheck() {
  if (!isUserLogged(true)) return;
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'ResetReadyCheck'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          TournamentTournament.dtReadyCheckEnd = timeNow();
          if (TournamentTournament.readyStates)
              for (var i in TournamentTournament.readyStates)
                  TournamentTournament.readyStates[i].bIsReady = false;
          TournamentManageSetReadyParticipantCollection();
          TournamentLoadCheckInActions();
          toastSuccess(babel("toast.tournamentreadycheckresetted"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function TournamentManageStart() {
  if (!isUserLogged(true)) return;
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'StartTournament'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
          toastSuccess(babel("toast.tournamentstarted"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function TournamentManageClose() {
  if (!isUserLogged(true)) return;
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'CloseTournament'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
          toastSuccess(babel("toast.tournamentclosed"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function TournamentManageReopen() {
  if (!isUserLogged(true)) return;
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'ReopenTournament'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
          toastSuccess(babel("toast.tournamentreopened"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function TournamentManageShow() {
  if (!isUserLogged(true)) return;
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'Show'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
          toastSuccess("Tournament visible");
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function TournamentManageHide() {
  if (!isUserLogged(true)) return;
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'Hide'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
          toastSuccess("Tournament hidden");
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function TournamentManageResetVisualization() {
  var tournamentContainer = $("#management_tournament_container > div");
  if (tournamentContainer.is(":empty")) {
      TournamentAppendViewStructure(tournamentContainer, TournamentTournament.iSize);
      for (var i in TournamentTournament.brackets)
          tournamentContainer.find(".match-" + TournamentTournament.brackets[i].iIndex).replaceWith(getTemplateHtml(TournamentManagementMatchItemTemplate, TournamentTournament.brackets[i].iIndex));
  }
  TournamentManageResetMatchParticipantIcons();
}

function TournamentManageResetMatchParticipantIcons() {
  $("#management_tournament_container .match img").remove();
  $("#management_tournament_container .match").append('<img src="' + cdnLink("/images/Transparent.png") + '" ><img src="' + cdnLink("/images/Transparent.png") + '" >');
  for (var i in TournamentTournament.brackets) {
      if (TournamentTournament.brackets[i].summonerOne) {
          $("#mng_match_" + TournamentTournament.brackets[i].iIndex + " > img:nth-child(3)").attr("src", getUrlProfileIcon(null, null, TournamentTournament.brackets[i].summonerOne)).attr("title", TournamentTournament.brackets[i].summonerOne.sName);
      }
      if (TournamentTournament.brackets[i].summonerTwo) {
          $("#mng_match_" + TournamentTournament.brackets[i].iIndex + " > img:nth-child(4)").attr("src", getUrlProfileIcon(null, null, TournamentTournament.brackets[i].summonerTwo)).attr("title", TournamentTournament.brackets[i].summonerTwo.sName);
      }
      if (TournamentTournament.brackets[i].teamOne) {
          $("#mng_match_" + TournamentTournament.brackets[i].iIndex + " > img:nth-child(3)").attr("src", getTeamLogoLinkById(TournamentTournament.brackets[i].teamOne.sIcon)).attr("title", getTeamFullName(TournamentTournament.brackets[i].teamOne));
      }
      if (TournamentTournament.brackets[i].teamTwo) {
          $("#mng_match_" + TournamentTournament.brackets[i].iIndex + " > img:nth-child(4)").attr("src", getTeamLogoLinkById(TournamentTournament.brackets[i].teamTwo.sIcon)).attr("title", getTeamFullName(TournamentTournament.brackets[i].teamTwo));
      }
  }
}

function TournamentManageMatch(iIndexId) {
  if (TournamentCurrentBracketIndex == iIndexId)
      return;
  TournamentCurrentBracketIndex = iIndexId;
  $("#management_tournament_container .match").removeClass("teal accent-4");
  $("#mng_match_" + iIndexId).addClass("teal accent-4");
  TournamentManageResetMatchSelect();
  TournamentManageResetMatchDate();
  TournamentManageResetMatchTime();
  TournamentManageResetMatchWinner();
  M.updateTextFields();
  $("#Management .card-content > .row").slideDown();
}

function TournamentManageResetMatchSelect() {
  var sHtml = '<option value="0" data-icon="' + cdnLink("/images/Transparent.png") + '">' + babel("base.tobedetermined", 's') + '</option>';
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One)
      for (var i in TournamentTournament.summonerPool)
          sHtml += '<option ' + 'value="' + TournamentTournament.summonerPool[i].iSummonerId + '" ' + 'data-icon="' + getUrlProfileIcon(null, null, TournamentTournament.summonerPool[i]) + '">' +
          TournamentTournament.summonerPool[i].sName + '</option>';
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five)
      for (var i in TournamentTournament.teamPool)
          sHtml += '<option ' + 'value="' + TournamentTournament.teamPool[i].iTeamId + '" ' + 'data-icon="' + getTeamLogoLinkById(TournamentTournament.teamPool[i].sIcon) + '">' +
          getTeamFullName(TournamentTournament.teamPool[i]) + '</option>';
  $("#selectParticipantBlue, #selectParticipantRed").formSelect('destroy').empty().append(sHtml).formSelect();
  var bracket = TournamentGetBracketByIndex(TournamentTournament, TournamentCurrentBracketIndex);
  if (bracket.summonerOne)
      $("#selectParticipantBlue").val(bracket.summonerOne.iSummonerId);
  if (bracket.summonerTwo)
      $("#selectParticipantRed").val(bracket.summonerTwo.iSummonerId);
  if (bracket.teamOne)
      $("#selectParticipantBlue").val(bracket.teamOne.iTeamId);
  if (bracket.teamTwo)
      $("#selectParticipantRed").val(bracket.teamTwo.iTeamId);
  if (TournamentCurrentBracketIndex > TournamentTournament.iSize / 2)
      $("#selectParticipantBlue, #selectParticipantRed").attr("disabled", "disabled");
  else
      $("#selectParticipantBlue, #selectParticipantRed").removeAttr("disabled");
  $("#selectParticipantBlue, #selectParticipantRed").off("change").change(function() {
      TournamentManageUpdateWinnersRadioText();
  });
  $("#selectParticipantBlue, #selectParticipantRed").formSelect();
}

function TournamentManageResetMatchDate() {
  if ($('#match_day').datepicker())
      $('#match_day').datepicker('close').datepicker('destroy').val('');
  var dtDefault = null;
  var bracket = TournamentGetBracketByIndex(TournamentTournament, TournamentCurrentBracketIndex);
  if (timeDateHasValue(bracket.dtGameStart))
      dtDefault = new Date(bracket.dtGameStart);
  var optDatepicker = {
      defaultDate: dtDefault,
      setDefaultDate: true,
      showDaysInNextAndPreviousMonths: true,
      firstDay: 1,
      i18n: babeli18n(),
      format: "dd/mm/yyyy",
      events: []
  };
  for (var i in TournamentTournament.brackets)
      if (timeDateHasValue(TournamentTournament.brackets[i].dtGameStart))
          optDatepicker.events.push(new Date(TournamentTournament.brackets[i].dtGameStart).toDateString());
  $('#match_day').datepicker(optDatepicker);
}

function TournamentManageResetMatchTime() {
  if ($('#match_time').timepicker())
      $('#match_time').timepicker('close').timepicker('destroy');
  var sDefaultTime = null;
  var bracket = TournamentGetBracketByIndex(TournamentTournament, TournamentCurrentBracketIndex);
  if (timeDateHasValue(bracket.dtGameStart))
      sDefaultTime = timeShow(bracket.dtGameStart, 'HH:mm');
  if (sDefaultTime)
      $('#match_time').val(sDefaultTime);
  $('#match_time').timepicker({
      defaultTime: sDefaultTime,
      i18n: babeli18n(),
      twelveHour: false
  });
}

function TournamentManageResetMatchWinner() {
  var bracket = TournamentGetBracketByIndex(TournamentTournament, TournamentCurrentBracketIndex);
  if (bracket.summonerOne && bracket.summonerOne.iSummonerId > 0)
      setRadioValue("#check_bracket_winner_1", bracket.summonerOne.iSummonerId);
  else if (bracket.teamOne && bracket.teamOne.iTeamId > 0)
      setRadioValue("#check_bracket_winner_1", bracket.teamOne.iTeamId);
  else
      setRadioValue("#check_bracket_winner_1", -1);
  if (bracket.summonerTwo && bracket.summonerTwo.iSummonerId > 0)
      setRadioValue("#check_bracket_winner_2", bracket.summonerTwo.iSummonerId);
  else if (bracket.teamTwo && bracket.teamTwo.iTeamId > 0)
      setRadioValue("#check_bracket_winner_2", bracket.teamTwo.iTeamId);
  else
      setRadioValue("#check_bracket_winner_2", -1);
  selectRadioByValue("#check_bracket_winner_group", "groupBracketWinner", bracket.winnerId);
  TournamentManageUpdateWinnersRadioText();
}

function TournamentManageUpdateWinnersRadioText() {
  var iParticipantBlue = $("#selectParticipantBlue").val();
  var iParticipantRed = $("#selectParticipantRed").val();
  $("#text_radio_bracket_winner_1").text(babel("tournament.bluesidewon"));
  $("#text_radio_bracket_winner_2").text(babel("tournament.redsidewon"));
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One && hasSome(TournamentTournament.summonerPool) && (iParticipantBlue > 0 || iParticipantRed > 0))
      for (var i in TournamentTournament.summonerPool) {
          if (TournamentTournament.summonerPool[i].iSummonerId == iParticipantBlue)
              $("#text_radio_bracket_winner_1").text(TournamentTournament.summonerPool[i].sName);
          if (TournamentTournament.summonerPool[i].iSummonerId == iParticipantRed)
              $("#text_radio_bracket_winner_2").text(TournamentTournament.summonerPool[i].sName);
      }
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five && hasSome(TournamentTournament.teamPool) && (iParticipantBlue > 0 || iParticipantRed > 0))
      for (var i in TournamentTournament.teamPool) {
          if (TournamentTournament.teamPool[i].iTeamId == iParticipantBlue)
              $("#text_radio_bracket_winner_1").text(getTeamFullName(TournamentTournament.teamPool[i]));
          if (TournamentTournament.teamPool[i].iTeamId == iParticipantRed)
              $("#text_radio_bracket_winner_2").text(getTeamFullName(TournamentTournament.teamPool[i]));
      }
}

function TournamentManageSave() {
  var iParticipantBlue = $("#selectParticipantBlue").val();
  var iParticipantRed = $("#selectParticipantRed").val();
  var tsMatch = 0;
  if (iParticipantBlue > 0 && iParticipantBlue == iParticipantRed) {
      toastError(babel("toast.cantmatchsameparticipant"));
      return;
  }
  var tsDate = getDateFromInput('#match_day');
  var tsTime = getTimeFromInput('#match_time');
  if (tsDate > 0)
      tsMatch = tsDate + tsTime;
  else if (tsTime > 0)
      toastWarning(babel("toast.datenotvalidtimevalid"));
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'SetBracket'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentManagePendPage();
      },
      fnDone: function(ajax) {
          TournamentManageDonePage();
      },
      fnOs: function(ajax, obj) {
          osLoadTournament(ajax, obj);
          TournamentTournament = obj.value;
          TournamentUpdateHeaderCardJoin();
          var iIndex = TournamentCurrentBracketIndex;
          TournamentCurrentBracketIndex = 0;
          TournamentManageMatch(iIndex);
          TournamentManageResetMatchParticipantIcons();
          toastSuccess(babel("base.saved"));
      }
  };
  var params = {
      iBracketId: TournamentGetBracketByIndex(TournamentTournament, TournamentCurrentBracketIndex).iTournamentBracketId,
      iParticipantOneId: iParticipantBlue,
      iParticipantTwoId: iParticipantRed,
      dtGameStart: tsMatch,
      iWinnerId: getSelectedRadioValue("#check_bracket_winner_group", "groupBracketWinner")
  };
  ajaxCallObj(ajaxObj, params, fnHandlers);
}
var TournamentScheduleMatchDetailsIndex;

function TournamentScheduleDocumentReady() {}

function TournamentLoadTabSchedule() {
  TournamentResetBracket();
  TournamentResetMatchDetails();
  TournamentResetSchedule();
}

function TournamentResetBracket() {
  var tournamentContainer = $("#schedule_tournament_container > div");
  if (tournamentContainer.is(":empty"))
      TournamentAppendViewStructure(tournamentContainer, TournamentTournament.iSize);
  for (var i in TournamentTournament.brackets)
      tournamentContainer.find(".match-" + TournamentTournament.brackets[i].iIndex).replaceWith(getTemplateHtml(TournamentBracketsMatchItemTemplate, TournamentTournament.brackets[i]));
  var final = TournamentGetBracketByIndex(TournamentTournament, TournamentTournament.brackets.length);
  if (final.winnerId > 0) {
      $("#schedule_tournament_container .tournament-view .final .match .p-" + final.winnerId).append('<i class="fas fa-crown amber-text text-accent-4"></i>');
  }
}

function TournamentBracketParticipantHover(id) {
  TournamentBracketParticipantOut();
  $("#schedule_tournament_container .tournament-view .match .p-" + id).addClass('teal lighten-4');
}

function TournamentBracketParticipantOut(id) {
  $("#schedule_tournament_container .tournament-view .match > div").removeClass('teal lighten-4');
}

function TournamentResetMatchDetails() {
  $("#row_match_details").hide();
  TournamentScheduleMatchDetailsIndex = null;
}

function TournamentShowMatchDetails(iBracketIndex) {
  if (TournamentScheduleMatchDetailsIndex === iBracketIndex) {
      TournamentScheduleMatchDetailsIndex = null;
      $("#row_match_details").slideUp();
      $("#schedule_tournament_container .match").removeClass("selected");
      return;
  }
  TournamentScheduleMatchDetailsIndex = iBracketIndex;
  $("#schedule_tournament_container .match").removeClass("selected");
  $("#schedule_tournament_container .match-" + iBracketIndex).addClass("selected");
  $("#row_match_details h5").text(babel("tournament.matchdetails") + " " + iBracketIndex);
  $("#row_match_details .tournament-match-details").empty().append(getTemplateHtml(TournamentMatchDetailsBodyItemTemplate, TournamentGetBracketByIndex(TournamentTournament, iBracketIndex)));
  $("#row_match_details").slideDown();
}

function TournamentShowMatchDetailsTopChampions(iParticipantId) {
  var participant = TournamentGetParticipantById(TournamentTournament, iParticipantId)
  if (!participant || !participant.playedChampionIds || participant.playedChampionIds.length == 0)
      return "";
  var sHtml = '<div class="top-champions"><label class="truncate">' + babel("tournament.topchampions") + '</label>';
  for (var i in participant.playedChampionIds)
      sHtml += getTemplateHtml(ChampionImageItemTemplate, {
          id: participant.playedChampionIds[i]
      });
  sHtml += '</div>';
  return sHtml;
}

function TournamentResetSchedule() {
  var i;
  var iDepth = Math.log(TournamentTournament.iSize) / Math.log(2);
  var $ddSelectRound = $("#ddSelectRound");
  $ddSelectRound.empty();
  if (TournamentIAmPartOf(TournamentTournament))
      $ddSelectRound.append('<li><a onclick="TournamentScheduleSelectRound(0)">' + babel("base.mymatch", 'p') + '</a></li>');
  for (i = 1; i <= iDepth; i++)
      $ddSelectRound.append('<li><a onclick="TournamentScheduleSelectRound(' + i + ')">' + babel("base.round") + " " + i + '</a></li>');
  $("#row_schedule .dropdown-trigger").dropdown();
  var iCurrentRound = iDepth;
  for (i = 0; i < iDepth; i++)
      if (!TournamentRoundCompleted(TournamentTournament, iDepth - i)) {
          iCurrentRound = i + 1;
          break;
      }
  TournamentScheduleSelectRound(iCurrentRound);
}

function TournamentScheduleSelectRound(iRound) {
  var $rowScheduleTitle = $("#row_schedule > .col:first-child");
  if (iRound === 0)
      $rowScheduleTitle.find("h5").text(babel("tournament.schedule") + ", " + babel("base.mymatch", 'p'));
  else
      $rowScheduleTitle.find("h5").text(babel("tournament.schedule") + ", " + babel("base.round") + " " + iRound);
  var $rowSchedule = $("#row_schedule > .wnc");
  $rowSchedule.empty();
  var objArrayMatches = [];
  var iLastDayMatch = 0;
  var iTotalGames = 0;
  var iEndedGames = 0;
  if (iRound === 0) {
      for (var i in TournamentTournament.brackets) {
          if (isMySummoner(TournamentTournament.brackets[i].summonerOne) || isMySummoner(TournamentTournament.brackets[i].summonerTwo) || imMember(TournamentTournament.brackets[i].teamOne) || imMember(TournamentTournament.brackets[i].teamTwo))
              objArrayMatches.push(TournamentTournament.brackets[i]);
      }
      $rowSchedule.append('<div class="col s12">' +
          getTemplateHtml(TournamentScheduleBracketULItemTemplate, {
              id: iLastDayMatch,
              sAltTitle: babel("base.mymatch", 'p')
          }) + '</div>');
      for (var i in objArrayMatches) {
          $rowSchedule.find("ul").last().append(getTemplateHtml(TournamentScheduleBracketLIItemTemplate, objArrayMatches[i]));
          iTotalGames++;
          if (objArrayMatches[i].winnerId > 0)
              iEndedGames++;
      }
      TournamentScheduleUpdateMatchesCount("ul-" + iLastDayMatch, iTotalGames, iEndedGames);
  } else {
      var iDepth = Math.log(TournamentTournament.iSize) / Math.log(2);
      var iIndexStart = Math.pow(2, iDepth) - Math.pow(2, iDepth - iRound + 1) + 1;
      var iIndexEnd = Math.pow(2, iDepth) - Math.pow(2, iDepth - iRound);
      for (var i in TournamentTournament.brackets) {
          if (TournamentTournament.brackets[i].iIndex < iIndexStart)
              continue;
          if (TournamentTournament.brackets[i].iIndex > iIndexEnd)
              break;
          objArrayMatches.push(TournamentTournament.brackets[i]);
      }
      objArrayMatches.sort(function(a, b) {
          return timeToMs(a.dtGameStart) - timeToMs(b.dtGameStart);
      });
      for (var i in objArrayMatches)
          if (timeDateHasValue(objArrayMatches[i].dtGameStart)) {
              objArrayMatches[i].bOneWin = false;
              objArrayMatches[i].bTwoWin = false;
              if (objArrayMatches[i].winnerId > 0) {
                  if (objArrayMatches[i].summonerOne != null && objArrayMatches[i].summonerOne.iSummonerId === objArrayMatches[i].winnerId)
                      objArrayMatches[i].bOneWin = true;
                  else if (objArrayMatches[i].teamOne != null && objArrayMatches[i].teamOne.iTeamId === objArrayMatches[i].winnerId)
                      objArrayMatches[i].bOneWin = true;
                  if (objArrayMatches[i].summonerTwo != null && objArrayMatches[i].summonerTwo.iSummonerId === objArrayMatches[i].winnerId)
                      objArrayMatches[i].bTwoWin = true;
                  else if (objArrayMatches[i].teamTwo != null && objArrayMatches[i].teamTwo.iTeamId === objArrayMatches[i].winnerId)
                      objArrayMatches[i].bTwoWin = true;
              }
              var iCurrentDay = parseInt(timeShow(objArrayMatches[i].dtGameStart, 'yyyyMMdd'));
              if (iLastDayMatch == 0 || iLastDayMatch < iCurrentDay) {
                  TournamentScheduleUpdateMatchesCount("ul-" + iLastDayMatch, iTotalGames, iEndedGames);
                  iTotalGames = 0;
                  iEndedGames = 0;
                  iLastDayMatch = iCurrentDay;
                  var dateFormat = 'dddd, dd MMMM' + (new Date(timeToMs(objArrayMatches[i].dtGameStart)).getFullYear() != new Date().getFullYear() ? ', yyyy' : '');
                  $rowSchedule.append('<div class="col s12">' +
                      getTemplateHtml(TournamentScheduleBracketULItemTemplate, {
                          id: iCurrentDay,
                          sRelativeDate: getRelativeTimeWithStyle(objArrayMatches[i].dtGameStart, null, 7 * 24 * 60 * 60 * 1000, 'day'),
                          date: objArrayMatches[i].dtGameStart,
                          dateFormat: dateFormat
                      }) + '</div>');
              }
              $rowSchedule.find("ul").last().append(getTemplateHtml(TournamentScheduleBracketLIItemTemplate, objArrayMatches[i]));
              iTotalGames++;
              if (objArrayMatches[i].winnerId > 0)
                  iEndedGames++;
          }
      TournamentScheduleUpdateMatchesCount("ul-" + iLastDayMatch, iTotalGames, iEndedGames);
      var bULCreated = false;
      iTotalGames = 0;
      iEndedGames = 0;
      iLastDayMatch = 99991231;
      for (var i in objArrayMatches)
          if (!timeDateHasValue(objArrayMatches[i].dtGameStart)) {
              if (!bULCreated) {
                  bULCreated = true;
                  $rowSchedule.append('<div class="col s12">' +
                      getTemplateHtml(TournamentScheduleBracketULItemTemplate, {
                          id: iLastDayMatch,
                          sAltTitle: babel("base.match", 'p')
                      }) + '</div>');
              }
              $rowSchedule.find("ul").last().append(getTemplateHtml(TournamentScheduleBracketLIItemTemplate, objArrayMatches[i]));
              iTotalGames++;
              if (objArrayMatches[i].winnerId > 0)
                  iEndedGames++;
          }
      TournamentScheduleUpdateMatchesCount("ul-" + iLastDayMatch, iTotalGames, iEndedGames);
  }
}

function TournamentScheduleToggleBrackets(sClassId) {
  var $list = $("#row_schedule ." + sClassId);
  if ($list.data("collapsed") === true) {
      $list.data("collapsed", false);
      $list.find(".collection-header i").removeClass("fa-rotate-180");
      $list.find("li:not(.collection-header)").slideDown();
  } else {
      $list.data("collapsed", true);
      $list.find(".collection-header i").addClass("fa-rotate-180");
      $list.find("li:not(.collection-header)").slideUp();
  }
}

function TournamentScheduleUpdateMatchesCount(sClassId, iTotalGames, iEndedGames) {
  $("#row_schedule ." + sClassId + " > .collection-header label").text(iEndedGames + "/" + iTotalGames + " " + babel("base.game", iTotalGames === 1 ? '' : 'p'));
}
var TournamentTournament;
pageVars.push("TournamentTournament");

function TournamentDocumentReady() {
  TournamentTournament = null;
  TournamentScheduleDocumentReady();
  TournamentManagementDocumentReady();
  TournamentCallLoadTournament();
}

function TournamentOnSignIn() {
  reloadPage();
}

function TournamentOnShowTab(tab) {
  if (tab == null) return;
  switch (tab.id) {
      case 'Overview':
          break;
      case 'Schedule':
          TournamentLoadTabSchedule();
          break;
      case 'Management':
          TournamentLoadTabManagement();
          break;
      default:
          break;
  }
  changeUrlTab(tab.id != "Overview" && tab.id != "TournamentFollow" ? tab.id : "");
  if (windowSmall() && tab.id != "TournamentFollow")
      goToByScrollHorizontal(".tournament-card .rowtabs ul", '#tournamentTab' + tab.id);
}

function TournamentGoTabAlt(idTab) {
  $("#rowTournamentCard ul.tabs").tabs('select', idTab);
}

function TournamentGetSelectedTab() {
  var sTab = getSelectedTab();
  if (!isNullOrEmpty(sTab)) {
      sTab = sTab.toLowerCase();
      switch (sTab) {
          case 'schedule':
              return 'Schedule';
          case 'management':
              return 'Management';
          default:
              break;
      }
  }
  return "Overview";
}

function TournamentNotFound() {
  navigate('NoContent');
}

function TournamentCallLoadTournament() {
  var iTournamentId = parseInt(getQueryStringByPos(0));
  if (isNaN(iTournamentId) || iTournamentId <= 0) {
      TournamentNotFound();
      return;
  }
  var objAjax = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'LoadTournament',
      bVProgress: true
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $mainContent.find('.rowLoadPage').removeClass('dnone');
      },
      fnDone: function(ajax) {
          $mainContent.find('.rowLoadPage').addClass('dnone');
      },
      fnOe: function(ajax) {
          TournamentNotFound();
      },
      fnOs: function(ajax, obj) {
          if (!obj || !obj.value) {
              TournamentNotFound();
              return;
          }
          TournamentTournament = obj.value;
          changeUrl("Tournament", getTournamentPageLink(TournamentTournament) + window.location.hash);
          changeTitle(TournamentTournament.sName + " - " + babel("tournament.tournament"));
          TournamentUpdatePage();
          $("#rowTournamentCard ul.tabs").tabs('select', TournamentGetSelectedTab());
      }
  };
  ajaxCallObj(objAjax, {
      iTournamentId: iTournamentId
  }, fnHandlers);
}

function TournamentUpdatePage() {
  TournamentLoadHeaderCard();
  TournamentLoadDetails();
  TournamentLoadParticipants();
  TournamentLoadCheckInActions();
  TournamentCheckInTimer();
  TournamentGetCheckInStatus();
}

function TournamentAskJoin() {
  if (!isUserLogged(true) || isUserGuest(true)) return;
  if (TournamentGetParticipantCount(TournamentTournament) >= TournamentTournament.iSize)
      appendModal(babel("tournament.join"), babel("tournament.joinfulltournament"), "TournamentJoin();", babel("tournament.join"));
  else
      TournamentJoin();
}

function TournamentJoin() {
  var iParticipantId = 0;
  if ($("#chooseTeamTournament").length) {
      iParticipantId = parseInt(getSelectedRadioValue("#chooseTeamTournament", "group-team"));
      if (isNaN(iParticipantId) || iParticipantId <= 0) {
          toastWarning(babel("toast.needtochooseteam"));
          return;
      }
      closeModal("chooseTeamTournament");
  } else if (TournamentTournament.iTeamSize == TournamentTeamSize.Five) {
      if (!WebUser.teams || WebUser.teams.length == 0) {
          toastInfo(babel("toast.participatetournamentnoteam"));
          return;
      }
      if (WebUser.teams && WebUser.teams.length > 1) {
          openModal("chooseTeamTournament", getTemplateHtml(TournamentTeamJoinModalItemTemplate));
          return;
      }
      iParticipantId = WebUser.teams[0].iTeamId;
  }
  var objAjax = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'RequestJoin'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentUpdateHeaderCardJoinPend();
      },
      fnDone: function(ajax) {
          TournamentUpdateHeaderCardJoinDone();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
      }
  };
  ajaxCallObj(objAjax, {
      iTournamentId: TournamentTournament.iTournamentId,
      iParticipantId: iParticipantId
  }, fnHandlers);
}

function TournamentLeave() {
  var objAjax = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'Leave'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          TournamentUpdateHeaderCardJoinPend();
      },
      fnDone: function(ajax) {
          TournamentUpdateHeaderCardJoinDone();
      },
      fnOs: function(ajax, obj) {
          reloadPage();
      }
  };
  ajaxCallObj(objAjax, {
      iTournamentId: TournamentTournament.iTournamentId,
      iParticipantId: 0
  }, fnHandlers);
}

function TournamentLoadHeaderCard() {
  $("#rowTournamentCard").empty().append(getTemplateHtml(TournamentHeaderCardItemTemplate, TournamentTournament));
  if (TournamentICanEdit(TournamentTournament))
      $("#tournamentTabManagement").removeClass("dnone");
  TournamentUpdateHeaderCardJoin();
  $("#rowTournamentCard ul.tabs").tabs({
      onShow: function(tab) {
          TournamentOnShowTab(tab);
      }
  });
}

function TournamentUpdateHeaderCardJoin() {
  var $joinDetails = $("#tournament_card_info_join");
  $joinDetails.children("a").off("click");
  $("#tournament_map_mode").text(babel("tournament.directelimination") + " | " + babelEnum("TournamentTeamSize", TournamentTournament.iTeamSize));
  var sPhase = TournamentGetCurrentPhase(TournamentTournament);
  if (sPhase == "checkin")
      $("#tournament_phase").text(babel("tournament.checkinphase"));
  else if (sPhase == "started")
      $("#tournament_phase").text(babel("tournament.tournamentstarted"));
  else if (sPhase == "closed")
      $("#tournament_phase").text(babel("tournament.tournamentended"));
  else if (sPhase == "registration")
      $("#tournament_phase").text(babel("tournament.registrationphase"));
  if (TournamentIAmPartOf(TournamentTournament))
      $joinDetails.children("span").addClass("orange-text").text(babel("tournament.partofthetournament")).css("max-width", "160px");
  else if (!TournamentTournament.bStarted)
      $joinDetails.children("span").addClass("orange-text").text(babel("tournament.registrationopen"));
  else if (!TournamentTournament.bClosed)
      $joinDetails.children("span").removeClass("orange-text").text("");
  else
      $joinDetails.children("span").removeClass("orange-text").text(babel("tournament.registrationclosed"));
  $joinDetails.find(".counter span").text(TournamentGetParticipantCount(TournamentTournament) + (!TournamentTournament.bStarted ? " / " + TournamentTournament.iSize : ""));
  $joinDetails.find(".counter label").text(babel("base.participant", TournamentGetParticipantCount(TournamentTournament) == 1 ? '' : 'p'));
  if (TournamentTournament.bStarted && !TournamentTournament.bClosed) {
      $joinDetails.find(".tournament-progress").removeClass("dnone");
      $joinDetails.find(".tournament-progress b").text(TournamentMatchPlayed(TournamentTournament) + " / " + TournamentTournament.brackets.length);
  } else
      $joinDetails.find(".tournament-progress").addClass("dnone");
  if (TournamentTournament.bStarted || TournamentTournament.bClosed)
      $joinDetails.children("a").addClass("dnone");
  else if (TournamentIAmPartOf(TournamentTournament))
      $joinDetails.children("a").attr("class", "btn-flat red-text").text(babel("tournament.leave")).click(function() {
          appendModal(babel("tournament.leave"), babel("tournament.leavemodaltext"), "TournamentLeave()", babel("tournament.leave"));
      });
  else
      $joinDetails.children("a").attr("class", "btn orange").text(babel("tournament.join")).click(TournamentAskJoin);
  $joinDetails.removeClass("dnone");
}

function TournamentUpdateHeaderCardJoinPend() {
  $("#tournament_card_info_join a").addClass("disabled");
}

function TournamentUpdateHeaderCardJoinDone() {
  $("#tournament_card_info_join a").removeClass("disabled");
}

function TournamentLoadCheckInActions() {
  if (!TournamentIAmPartOf(TournamentTournament))
      return;
  if (TournamentGetCurrentPhase(TournamentTournament) != "checkin")
      return;
  if (TournamentICheckedIn(TournamentTournament))
      return;
  $("#tournament_checkin_actions").removeClass("dnone");
}

function TournamentCheckInActionConfirm() {
  var ajaxObj = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'Ready'
  };
  var fnHandlers = {
      fnOs: function(ajax, obj) {
          $("#tournament_checkin_actions").addClass("dnone");
          toastSuccess(babel("toast.tournamentcheckedin"));
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function TournamentLoadDetails() {
  var bICanEdit = TournamentICanEdit(TournamentTournament);
  if (TournamentTournament.hostSummoner)
      $("#tournament_host").empty().append('<a class="link" ' + getSummonerNavigations(TournamentTournament.hostSummoner) + '><img class="circle left" src="' + getUrlProfileIcon(null, null, TournamentTournament.hostSummoner) + '" style="width: 32px" /><span style="padding-left: 12px;line-height:32px;font-size: 1.1rem;font-weight: 500">' + TournamentTournament.hostSummoner.sName + '</span></a>');
  if (!isNullOrEmpty(TournamentTournament.sFeaturedUrl))
      $("#tournament_host").append('<a class="link twitch" href="' + TournamentTournament.sFeaturedUrl + '" target="_blank" rel="noopener"><i class="fab fa-twitch"></i><span style="padding-left: 8px;line-height:32px;font-size: 1.1rem;font-weight: 500">' + shortenLink(TournamentTournament.sFeaturedUrl) + '</span></a>');
  TournamentLoadDetailsDate("tournament_row_info_date", bICanEdit, TournamentTournament.dtDate);
  TournamentLoadDetailsInput("tournament_row_info_description", bICanEdit, TournamentTournament.sDescription);
  TournamentLoadDetailsInput("tournament_row_info_rules", bICanEdit, TournamentTournament.sRulesDescription);
  TournamentLoadDetailsInput("tournament_row_info_contacts", bICanEdit, TournamentTournament.sContactsDescription);
  if (bICanEdit)
      $("#tournaments_informations input, #tournaments_informations textarea").focus(function() {
          $("#tournament_row_info_buttons").removeClass("dnone");
      });
}

function TournamentLoadDetailsDate(id, bEdit, tsDate) {
  if (!bEdit) {
      if (!timeDateHasValue(tsDate))
          $("#" + id).addClass("dnone");
      else
          $("#" + id + " p").text(timeShow(tsDate, "dd/MM/yyyy - HH:mm"));
      return;
  }
  var setDefaultDate = true;
  if (!timeDateHasValue(tsDate)) {
      tsDate = timeNow();
      setDefaultDate = false;
  }
  if ($('#tournament_start_day').datepicker())
      $('#tournament_start_day').datepicker('close').datepicker('destroy').val('');
  if ($('#tournament_start_time').timepicker())
      $('#tournament_start_time').timepicker('close').timepicker('destroy');
  var optDatepicker = {
      defaultDate: new Date(tsDate),
      setDefaultDate: setDefaultDate,
      showDaysInNextAndPreviousMonths: true,
      firstDay: 1,
      i18n: babeli18n(),
      format: "dd/mm/yyyy"
  };
  $('#tournament_start_day').datepicker(optDatepicker);
  var sDefaultTime = timeShow(tsDate, 'HH:mm');
  if (!setDefaultDate)
      sDefaultTime = "";
  if (sDefaultTime)
      $('#tournament_start_time').val(sDefaultTime);
  $('#tournament_start_time').timepicker({
      defaultTime: sDefaultTime,
      i18n: babeli18n(),
      twelveHour: false
  });
  $("#" + id).addClass("nmb");
  $("#" + id + " .col.view").addClass("dnone");
  $("#" + id + " .col.edit").removeClass("dnone");
}

function TournamentLoadDetailsInput(id, bEdit, val) {
  if (!bEdit) {
      if (isNullOrEmpty(val))
          $("#" + id).addClass("dnone");
      else
          $("#" + id + " p").text(val);
      return;
  }
  $("#" + id).addClass("nmb");
  $("#" + id + " .col.view").addClass("dnone");
  $("#" + id + " .col.edit").removeClass("dnone");
  $("#" + id + " textarea").val(val);
  resizeTextarea($("#" + id + " textarea"));
}

function TournamentSaveDescription() {
  var tsTournamentStart = 0;
  var tsDate = getDateFromInput('#tournament_start_day');
  var tsTime = getTimeFromInput('#tournament_start_time');
  if (tsDate > 0)
      tsTournamentStart = tsDate + tsTime;
  else if (tsTime > 0)
      toastWarning(babel("toast.datenotvalidtimevalid"));
  var objAjax = {
      sCode: 'Tournament',
      sSvcPage: 'Tournament',
      sMethod: 'SetDescription'
  };
  var fnHandlers = {
      fnPend: function(ajax) {
          $("#tournaments_informations input").attr("disabled", "disabled");
          $("#tournaments_informations a").addClass("disabled");
      },
      fnDone: function(ajax) {
          $('#tournaments_informations input').attr("disabled", false);
          $('#tournaments_informations a').removeClass("disabled");
      },
      fnOs: function(ajax, obj) {
          TournamentTournament.sDescription = ajax.params.sDescription;
          $("#tournament_row_info_buttons").addClass("dnone");
          toastSuccess(babel("toast.tournamentinfosaved"));
      }
  };
  var params = {
      iTournamentId: TournamentTournament.iTournamentId,
      sDescription: $("#tournament_row_info_description textarea").val(),
      sPrizeDescription: $("#tournament_row_info_prize textarea").val(),
      sRulesDescription: $("#tournament_row_info_rules textarea").val(),
      sContactDescription: $("#tournament_row_info_contacts textarea").val(),
      iDateTimestamp: tsTournamentStart
  };
  ajaxCallObj(objAjax, params, fnHandlers);
}

function TournamentLoadParticipants() {
  $("#Overview .tournament-participants").empty();
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One && !hasSome(TournamentTournament.summonerPool)) return;
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five && !hasSome(TournamentTournament.teamPool)) return;
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One)
      for (var i in TournamentTournament.summonerPool)
          if (TournamentTournament.summonerPool[i].bHasPriority)
              $("#Overview .tournament-participants").append(getTemplateHtml(TournamentParticipantSummonerItemTemplate, TournamentTournament.summonerPool[i]));
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five)
      for (var i in TournamentTournament.teamPool)
          if (TournamentTournament.teamPool[i].bHasPriority)
              $("#Overview .tournament-participants").append(getTemplateHtml(TournamentParticipantTeamItemTemplate, TournamentTournament.teamPool[i]));
  if (TournamentTournament.iTeamSize == TournamentTeamSize.One)
      for (var i in TournamentTournament.summonerPool)
          if (!TournamentTournament.summonerPool[i].bHasPriority)
              $("#Overview .tournament-participants").append(getTemplateHtml(TournamentParticipantSummonerItemTemplate, TournamentTournament.summonerPool[i]));
  if (TournamentTournament.iTeamSize == TournamentTeamSize.Five)
      for (var i in TournamentTournament.teamPool)
          if (!TournamentTournament.teamPool[i].bHasPriority)
              $("#Overview .tournament-participants").append(getTemplateHtml(TournamentParticipantTeamItemTemplate, TournamentTournament.teamPool[i]));
  if (TournamentGetParticipantCount(TournamentTournament) > TournamentTournament.iSize) {
      $("#Overview .tournament-participants > *:nth-child(" + TournamentTournament.iSize + ")").after('<div class="col s12 end-line"><div class="divider"></div><label>' + babel("tournament.separatorextraparticipants") + '</label><div class="divider"></div></div>');
      $("#Overview .tournament-participants > *:nth-child(n+" + (TournamentTournament.iSize + 1) + "):not(.end-line)").addClass('extra');
  }
}

function TournamentCheckInTimer() {
  if (getPageName() != 'Tournament' || TournamentTournament == null) return;
  var msTimer = TournamentGetCheckInTimerMs(TournamentTournament);
  if (msTimer > 0) {
      $("#tournament_checkin_timer").removeClass("dnone");
      $("#tournament_checkin_timer h5").text(timeShow(msTimer, "mm:ss"));
      setTimeout(TournamentCheckInTimer, 500);
  } else
      $("#tournament_checkin_timer").addClass("dnone");
}
var timeoutTournamentGetCheckInStatus;

function TournamentGetCheckInStatus() {
  if (getPageName() != 'Tournament' || TournamentTournament == null)
      return;
  if (!TournamentIAmHost(TournamentTournament) && !WebUser.bIsAdmin)
      return;
  if (TournamentGetCurrentPhase(TournamentTournament) != "checkin")
      return;
  if (timeoutTournamentGetCheckInStatus)
      clearTimeout(timeoutTournamentGetCheckInStatus);
  var ajaxObj = {
      sCode: 'RefreshTournament',
      sSvcPage: 'Tournament',
      sMethod: 'LoadTournament'
  };
  var fnHandlers = {
      fnOs: function(ajax, obj) {
          TournamentTournament = obj.value;
          TournamentUpdateHeaderCardJoin();
          TournamentLoadParticipants();
          TournamentManageResetParticipantCollection();
          timeoutTournamentGetCheckInStatus = setTimeout(TournamentGetCheckInStatus, 5000);
      }
  };
  ajaxCallObj(ajaxObj, {
      iTournamentId: TournamentTournament.iTournamentId
  }, fnHandlers);
}

function UserDocumentReady() {
  if (!isUserLogged()) {
      navigate("Home");
      return;
  }
  if (isUserGuest(true)) {
      UserPageLoggedOut();
      return;
  }
  changeTitle('My profile');
  UserLoadUserShield();
  $(".row-change-language").removeClass("dnone");
}

function UserOnSignIn() {
  reloadPage();
}

function UserPageLoggedOut() {
  $mainContent.children().not(".ad").remove();
  $mainContent.append('<div class="row nocontent"><i class="fad fa-globe-europe"></i><br><span>You need to be in your home region to use this functionality</span></div>');
}

function UserLoadUserShield() {
  if (!WebUser.summoner) return;
  $(".sr .user-icon-image img").attr("src", getUrlProfileIcon(null, null, WebUser.summoner));
  $(".sr .user-icon-image h4").text("Hi, " + WebUser.summoner.sName);
}