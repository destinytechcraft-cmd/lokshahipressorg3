export type Language = 'mr' | 'en';

export interface BilingualText {
  mr: string;
  en: string;
}

export interface NavItem {
  key: string;
  href: string;
}

export type DictKey =
  | 'brand'
  | 'tagline'
  | 'values'
  | 'nav_home'
  | 'nav_about'
  | 'nav_org'
  | 'nav_leadership'
  | 'nav_rights'
  | 'nav_committees'
  | 'nav_social'
  | 'nav_media'
  | 'nav_media_live'
  | 'nav_media_social'
  | 'nav_events'
  | 'nav_roadmap'
  | 'nav_membership'
  | 'nav_helpdesk'
  | 'nav_gallery'
  | 'nav_contact'
  | 'btn_join'
  | 'btn_voice'
  | 'btn_helpdesk'
  | 'btn_submit'
  | 'btn_join_member'
  | 'btn_submit_issue'
  | 'sec_media_coverage'
  | 'sec_stats'
  | 'sec_about'
  | 'sec_role'
  | 'sec_vision'
  | 'sec_org'
  | 'sec_committees'
  | 'sec_rights'
  | 'sec_social'
  | 'sec_achievements'
  | 'sec_roadmap'
  | 'sec_media'
  | 'sec_events'
  | 'sec_membership'
  | 'sec_helpdesk'
  | 'sec_grievance'
  | 'sec_leadership'
  | 'sec_contact'
  | 'sec_org_network'
  | 'sec_gallery'
  | 'crumb_home'
  | 'page_subtitle'
  | 'image_ph'
  | 'logo'
  | 'wireframe';

export interface LeadershipMember {
  id: string;
  roleMr: string;
  roleEn: string;
  nameMr: string;
  nameEn: string;
  stateMr: string;
  stateEn: string;
  subtitleMr?: string;
  subtitleEn?: string;
  profileMr: string;
  profileEn: string;
  fullBioMr?: string[];
  fullBioEn?: string[];
  highlightsMr?: string[];
  highlightsEn?: string[];
  image?: string;
}
