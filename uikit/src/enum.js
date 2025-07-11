//@faq.js
export let ListBadgeColors;

(function (ListBadgeColors) {
  ListBadgeColors['WHITE'] = 'white';
  ListBadgeColors['PRIMARY'] = 'primary';
})(ListBadgeColors || (ListBadgeColors = {}));

//@footer.js
export let CopyrightType;

(function (CopyrightType) {
  CopyrightType['TYPE1'] = 'default';
  CopyrightType['TYPE2'] = 'type2';
  CopyrightType['TYPE3'] = 'type3';
})(CopyrightType || (CopyrightType = {}));

//@icon
export let IconType;

(function (IconType) {
  IconType['STROKE'] = 'stroke';
  IconType['FILL'] = 'fill';
  IconType['CUSTOM'] = 'custom';
})(IconType || (IconType = {}));

//@navbar.js
export let MegaMenuType;

(function (MegaMenuType) {
  MegaMenuType['MEGAMENU1'] = 'megamenu-1';
  MegaMenuType['MEGAMENU2'] = 'megamenu-2';
  MegaMenuType['MEGAMENU3'] = 'megamenu-3';
  MegaMenuType['MEGAMENU4'] = 'megamenu-4';
  MegaMenuType['MEGAMENU5'] = 'megamenu-5';
})(MegaMenuType || (MegaMenuType = {}));

//@root.js
export let DynamicComponentType;

(function (DynamicComponentType) {
  DynamicComponentType['ICON'] = 'icons';
  DynamicComponentType['IMAGE'] = 'images';
})(DynamicComponentType || (DynamicComponentType = {}));

//@dashboard.js - Tabs custom props `type` enum
export let TabsType;

(function (TabsType) {
  TabsType['SEGMENTED'] = 'segmented';
})(TabsType || (TabsType = {}));

//@dashboard.js - Chart custom view mode enum
export let ViewMode;

(function (ViewMode) {
  ViewMode['DAILY'] = 'Daily';
  ViewMode['MONTHLY'] = 'Monthly';
  ViewMode['YEARLY'] = 'Yearly';
})(ViewMode || (ViewMode = {}));

//@admin.js - Avatar size enum for admin components
export let AvatarSize;

(function (AvatarSize) {
  AvatarSize['XS'] = 'xs';
  AvatarSize['SM'] = 'sm';
  AvatarSize['MD'] = 'md';
  AvatarSize['LG'] = 'lg';
  AvatarSize['XL'] = 'xl';
})(AvatarSize || (AvatarSize = {}));

//@progress.js - Linear progress type enum
export let LinearProgressType;

(function (LinearProgressType) {
  LinearProgressType['LIGHT'] = 'light';
  LinearProgressType['DARK'] = 'dark';
  LinearProgressType['DEFAULT'] = 'default';
})(LinearProgressType || (LinearProgressType = {}));
