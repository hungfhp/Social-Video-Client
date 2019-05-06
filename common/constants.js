import _ from 'lodash'
// import { swap } from './utils/helpers'

const data = {
  conditions: {
    USED: 1,
    NEW: 2
  },
  statuses: {
    DRAFT: 1,
    LIST: 2,
    LISTING: 2,
    UNLIST: 3,
    UNLISTED: 3,
    RESERVED: 4,
    SOLD: 5,
    REMOVE: 6,
    REMOVED: 6
  },
  driveTypes: {
    '2WD': 1,
    '4WD': 2,
    ALL: 3,
    '2': 1,
    '4': 2
  },
  currencies: {
    USD: 1,
    JPY: 2
  },
  currencySymbols: {
    $: 1,
    '￥': 2
  },
  steerings: {
    LEFT: 1,
    RIGHT: 2,
    CENTER: 3,
    OTHER: 4
  },
  bodyTypes: {
    BUS_MINIBUS: 10,
    BIKE: 20,
    CONVERTIBLE: 6,
    COUPE: 5,
    HATCHBACK: 1,
    MACHINERY: 11,
    MINI_VEHICLE: 12,
    SEDAN: 2,
    SUV: 3,
    TRUCK: 9,
    UTE: 8,
    VAN_MINIVAN: 7,
    WAGON: 4,
    OTHER: 13
  },

  fuels: {
    BIODIESEL: 1,
    CNG: 2,
    DIESEL: 3,
    ELECTRIC: 4,
    ETHANOL: 5,
    GASOLINE_PETROL: 6,
    'GASOLINE/PETROL': 6,
    GASOLINE: 6,
    PETROL: 6,
    HYBRID: 7,
    LPG: 8,
    STEAM: 9,
    OTHER: 10
  },

  colors: {
    BEIGE: 1,
    BLACK: 2,
    BLUE: 3,
    BRONZE: 4,
    BROWN: 5,
    BURGUNDY: 6,
    CHAMPAGNE: 7,
    CHARCOAL: 8,
    CREAM: 9,
    DARK_BLUE: 10,
    DARK_GREEN: 11,
    GOLD: 12,
    GRAY: 13,
    GREEN: 14,
    IVORY: 15,
    LIGHT_BLUE: 16,
    MAROON: 17,
    OFF_WHITE: 18,
    ORANGE: 19,
    OTHER: 20,
    PEARL: 21,
    PEWTER: 22,
    PINK: 23,
    PURPLE: 24,
    RED: 25,
    SILVER: 26,
    TAN: 32,
    TEAL: 33,
    TITANIUM: 27,
    TURQUOISE: 28,
    WHITE: 29,
    WINE_RED: 30,
    YELLOW: 31
  },

  transmissions: {
    AUTOMANUAL: 3,
    AUTOMATIC: 1,
    CVT: 5,
    MANUAL: 2,
    UNSPECIFIED: 4
  },

  bodyVolumes: {
    CONVERTIABLE: 12,
    COUPE: 12,
    HATCHBACK: 11,
    MINI_VEHICLE: 10,
    SEDAN: 15,
    SUV: 17,
    UTE: 15,
    VAN_MINIVAN: 16.5,
    WAGON: 17
  },
  userStatus: {
    ACTIVE: 1,
    DEACTIVATE: 2
  }
}
export const transmissionMap = {
  AUTOMANUAL: 'AMT',
  AUTOMATIC: 'AT',
  CVT: 'CVT',
  MANUAL: 'MT',
  UNSPECIFIED: 'NA'
}
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const statics = _.extend(
  {},
  {
    finance: {
      taxVAT: 1.08,
      insurance: 40,
      buyerProtection: 95,
      inspection: 300
    }
  },
  data
)

export const CURRENCY_EN_NAME = {
  USD: 'US Dollar',
  AED: 'United Arab Emirates Dirham',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  EUR: 'Euro',
  GBP: 'Pound Sterling',
  KES: 'Kenyan Shilling',
  MWK: 'Malawian Kwacha',
  NZD: 'New Zealand Dollar',
  RUB: 'Russian Ruble',
  TZS: 'Tanzanian Shilling',
  UGX: 'Ugandan Shilling',
  ZAR: 'South African Rand',
  ZMW: 'Zambian Kwacha',
  JPY: 'Japanese Yen'
}

export const AVAILEBLE_LANGUAGES = [
  {
    key: 'en',
    name: 'English'
  },
  {
    key: 'ja',
    name: '日本語 - Japanese'
  }
  // ,
  // {
  //   key: 'fr',
  //   name: 'Français - French'
  // },
  // {
  //   key: 'bn',
  //   name: 'বাংলা - Bengali'
  // },
  // {
  //   key: 'ar',
  //   name: 'العربية - Arabic'
  // },
  // {
  //   key: 'pt',
  //   name: 'Português - Portuguese'
  // },
  // {
  //   key: 'ru',
  //   name: 'Русский - Russian'
  // },
  // {
  //   key: 'sw',
  //   name: 'Kiswahili'
  // },
  // {
  //   key: 'ka',
  //   name: 'ქართული - Georgian'
  // },
  // {
  //   key: 'es',
  //   name: 'Español - Spanish'
  // },
  // {
  //   key: 'my',
  //   name: 'မြန်မာဘာသာ - Burmese'
  // }
]

export const FILTER_COLORS = [
  { value: 29, color: '#FFFFFF', title: 'White' },
  { value: 2, color: '#343434', title: 'Black' },
  { value: 26, color: 'linear-gradient(135deg, #DDDCDA 0%, #9D9C9A 100%)', title: 'Silver' },
  { value: 3, color: '#48A2D7', title: 'Blue' },
  { value: 21, color: 'linear-gradient(133.23deg, #F0F1E9 0%, #DADBBA 97.09%)', title: 'Pearl' },
  { value: 25, color: '#DD5051', title: 'Red' },
  { value: 13, color: '#CCCCCC', title: 'Gray' },
  { value: 24, color: '#961891', title: 'Purple' },
  { value: 14, color: '#33CC33', title: 'Green' },
  { value: 23, color: '#F96BB9', title: 'Pink' },
  { value: 1, color: '#F6D19F', title: 'Beige' },
  { value: 5, color: '#9C7732', title: 'Brown' },
  { value: 19, color: '#FD7600', title: 'Orange' },
  { value: 12, color: 'linear-gradient(135deg, #F9EEBC 0%, #C79A2F 100%)', title: 'Gold' }
]

export const FILTER_BODYTYPES = [
  { value: 2, name: 'Sedan', icon: 'icon-bodytype-sedan' },
  { value: 7, name: 'Minivan', icon: 'icon-bodytype-mini-van' },
  { value: 3, name: 'SUV', icon: 'icon-bodytype-suv' },
  { value: 1, name: 'Hatchback', icon: 'icon-bodytype-hatchback' },
  { value: 6, name: 'Convertible', icon: 'icon-bodytype-convertible' },
  { value: 5, name: 'Coupe', icon: 'icon-bodytype-coupe' },
  { value: 12, name: 'Mini(<700cc)', icon: 'icon-bodytype-mini' },
  { value: 10, name: 'Bus', icon: 'icon-bodytype-bus' },
  { value: 9, name: 'Truck', icon: 'icon-bodytype-truck' }
]

// statics.conditionKeys = swap(statics.conditions)
// statics.statusKeys = swap(statics.statuses)
// statics.driveTypeKeys = swap(statics.driveTypes)
// statics.currencyKeys = swap(statics.currencies)
// statics.currencySymbolKeys = swap(statics.currencySymbols)
// statics.steeringKeys = swap(statics.steerings)
// statics.bodyTypeKeys = swap(statics.bodyTypes)
// statics.fuelKeys = swap(statics.fuels)
// statics.colorKeys = swap(statics.colors)
// statics.transmissionKeys = swap(statics.transmissions)

export const Car = statics
export const MUST_INSPECTION_COUNTRIES = [
  'Kenya',
  'Tanzania',
  'Zambia',
  'Mozambique',
  'Bahamas',
  'Jamaica',
  'Fiji',
  'Sri Lanka',
  'Mauritius',
  'Papua New Guinea',
  'New Zealand',
  'Australia',
  'Uganda'
]
export const isInspectionRequired = country => MUST_INSPECTION_COUNTRIES.includes(country)

export default data
