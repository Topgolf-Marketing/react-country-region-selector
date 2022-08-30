// Type definitions for react-country-region-selector 3.0.1 by
// Project: https://github.com/country-regions/react-country-region-selector
// Definitions by: Kyle Davis <https://github.com/kyledavisdev>, Ben Keen <https://github.com/benkeen>

import * as React from "react";

export type ValueType = "full" | "short";

export interface CountryDropdownProps<T = Element> {
  /**
   * The currently selected country. This should either
   * be the shortcode, or the full country name depending
   * on what you're using for your value attribute
   * (see the valueType option). By default it's the full country name.
   *
   * Default value: ""
   */
  value: string;

  /**
   * Callback that gets called when the user selects a country. Use
   * this to store the value in whatever store you're
   * using (or just the parent component state).
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onChange: (val: string, e: React.ChangeEvent<T>) => void;

  /**
   * Callback that gets called when the user blurs off the country field.
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onBlur?: (val: string, e: React.ChangeEvent<T>) => void;

  /**
   * The name attribute of the generated select box.
   *
   * Default value: "rcrs-country"
   */
  name?: string;

  /**
   * The ID of the generated select box. Not added by default.
   *
   * Default value: ""
   */
  id?: string;

  /**
   * Any additional space-separated classes you want to add.
   *
   * Default value: ""
   */

  classes?: string;

  /**
   *  Whether you want to show a default option.
   *
   * Default value: true
   */
  showDefaultOption?: boolean;

  /**
   * Lets you target countries that should appear at the top
   * of the dropdown. Should also be an array of country shortcodes.
   *
   * Default value: array
   */
  priorityOptions?: string[];

  /**
   * The default option label.
   *
   * Default value: "Select Country"
   */
  defaultOptionLabel?: string;

  /**
   * Either "full" or "short". This governs whether you see
   * country names or country short codes in the dropdown.
   *
   * Default value: "full"
   */
  labelType?: ValueType;

  /**
   * Either "full" or "short". This controls the actual value
   * attribute of each <option> in the dropdown. Please note,
   * if you set this to "short" you will need to let the
   * corresponding <RegionDropdown /> component know as well,
   * by passing a countryValueType="short" attribute.
   *
   * Default value: "full"
   */
  valueType?: ValueType;

  /**
   * This setting lets you target specific countries to appear
   * in the dropdown. Only those specified here will appear.
   * This should be an array of country shortcodes. See the
   * country-region-data repo for the data and the shortcodes.
   *
   * Default value: []
   */
  whitelist?: string[];

  /**
   * Lets you target countries that should not appear in the
   * dropdown. Should also be an array of country shortcodes.
   *
   * Default value: []
   */
  blacklist?: string[];

  /**
   * Disables the country field.
   *
   * Default value: false
   */
  disabled?: boolean;
}

export class CountryDropdown extends React.Component<CountryDropdownProps> {}

export type RegionList = {AF?: string[], AX?: string[], AL?: string[], DZ?: string[], AS?: string[], AD?: string[], AO?: string[], AI?: string[], AQ?: string[], AG?: string[], AR?: string[], AM?: string[], AW?: string[], AU?: string[], AT?: string[], AZ?: string[], BS?: string[], BH?: string[], BD?: string[], BB?: string[], BY?: string[], BE?: string[], BZ?: string[], BJ?: string[], BM?: string[], BT?: string[], BO?: string[], BQ?: string[], BA?: string[], BW?: string[], BV?: string[], BR?: string[], IO?: string[], BN?: string[], BG?: string[], BF?: string[], BI?: string[], KH?: string[], CM?: string[], CA?: string[], CV?: string[], KY?: string[], CF?: string[], TD?: string[], CL?: string[], CN?: string[], CX?: string[], CC?: string[], CO?: string[], KM?: string[], CG?: string[], CD?: string[], CK?: string[], CR?: string[], CI?: string[], HR?: string[], CU?: string[], CW?: string[], CY?: string[], CZ?: string[], DK?: string[], DJ?: string[], DM?: string[], DO?: string[], EC?: string[], EG?: string[], SV?: string[], GQ?: string[], ER?: string[], EE?: string[], ET?: string[], FK?: string[], FO?: string[], FJ?: string[], FI?: string[], FR?: string[], GF?: string[], PF?: string[], TF?: string[], GA?: string[], GM?: string[], GE?: string[], DE?: string[], GH?: string[], GI?: string[], GR?: string[], GL?: string[], GD?: string[], GP?: string[], GU?: string[], GT?: string[], GG?: string[], GN?: string[], GW?: string[], GY?: string[], HT?: string[], HM?: string[], VA?: string[], HN?: string[], HK?: string[], HU?: string[], IS?: string[], IN?: string[], ID?: string[], IR?: string[], IQ?: string[], IE?: string[], IM?: string[], IL?: string[], IT?: string[], JM?: string[], JP?: string[], JE?: string[], JO?: string[], KZ?: string[], KE?: string[], KI?: string[], KP?: string[], KR?: string[], XK?: string[], KW?: string[], KG?: string[], LA?: string[], LV?: string[], LB?: string[], LS?: string[], LR?: string[], LY?: string[], LI?: string[], LT?: string[], LU?: string[], MO?: string[], MK?: string[], MG?: string[], MW?: string[], MY?: string[], MV?: string[], ML?: string[], MT?: string[], MH?: string[], MQ?: string[], MR?: string[], MU?: string[], YT?: string[], MX?: string[], FM?: string[], MD?: string[], MC?: string[], MN?: string[], ME?: string[], MS?: string[], MA?: string[], MZ?: string[], MM?: string[], NA?: string[], NR?: string[], NP?: string[], NL?: string[], NC?: string[], NZ?: string[], NI?: string[], NE?: string[], NG?: string[], NU?: string[], NF?: string[], MP?: string[], NO?: string[], OM?: string[], PK?: string[], PW?: string[], PS?: string[], PA?: string[], PG?: string[], PY?: string[], PE?: string[], PH?: string[], PN?: string[], PL?: string[], PT?: string[], PR?: string[], QA?: string[], RE?: string[], RO?: string[], RU?: string[], RW?: string[], BL?: string[], SH?: string[], KN?: string[], LC?: string[], MF?: string[], PM?: string[], VC?: string[], WS?: string[], SM?: string[], ST?: string[], SA?: string[], SN?: string[], RS?: string[], SC?: string[], SL?: string[], SG?: string[], SX?: string[], SK?: string[], SI?: string[], SB?: string[], SO?: string[], ZA?: string[], GS?: string[], SS?: string[], ES?: string[], LK?: string[], SD?: string[], SR?: string[], SZ?: string[], SE?: string[], CH?: string[], SY?: string[], TW?: string[], TJ?: string[], TZ?: string[], TH?: string[], TL?: string[], TG?: string[], TK?: string[], TO?: string[], TT?: string[], TN?: string[], TR?: string[], TM?: string[], TC?: string[], TV?: string[], UG?: string[], UA?: string[], AE?: string[], GB?: string[], US?: string[], UM?: string[], UY?: string[], UZ?: string[], VU?: string[], VE?: string[], VN?: string[], VG?: string[], VI?: string[], WF?: string[], EH?: string[], YE?: string[], ZM?: string[], ZW?: string[]};

export interface RegionDropdownProps<T = Element> {
  /**
   * The currently selected country.
   *
   * Default value: ""
   */
  country: string;

  /**
   * The currently selected region.
   *
   * Default value: ""
   */
  value: string;

  /**
   * Callback that gets called when the user selects a region.
   * Use this to store the value in whatever store you're
   * using (or just the parent component state).
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onChange: (val: string, e: React.ChangeEvent<T>) => void;

  /**
   * Callback that gets called when the user blurs off the region field.
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onBlur?: (val: string, e: React.ChangeEvent<T>) => void;

  /**
   * The name attribute of the generated select box.
   *
   * Default value: "rcrs-region"
   */
  name?: string;

  /**
   * The ID of the generated select box. Not added by default.
   *
   * Default value: ""
   */
  id?: string;

  /**
   * Any additional space-separated classes you want to add.
   *
   * Default value: ""
   */
  classes?: string;

  /**
   * The label that appears in the region dropdown when the user
   * hasn't selected a country yet.
   *
   * Default value: undefined
   */
  blankOptionLabel?: string;

  /**
   * Whether you want to show a default option. This is what the
   * user sees in the region dropdown after selecting a country.
   * It defaults to the defaultOptionLabel setting (see next).
   *
   * Default value: true
   */
  showDefaultOption?: string;

  /**
   * string	The default region option.
   *
   * Default value: "Select Region"
   */
  defaultOptionLabel?: string;

  /**
   * If you've changed the country dropdown valueType to short you
   * will need to set this value to short as well, so the component
   * knows what's being passed in the country property.
   *
   * Default value: "full"
   */
  countryValueType?: ValueType;

  /**
   * Either "full" or "short". This governs whether you see
   * region names or region short codes in the dropdown.
   *
   * Default value: "full"
   */
  labelType?: ValueType;

  /**
   * Either "full" or "short". This controls the actual value
   * attribute of each <option> in the dropdown.
   *
   * Default value: "full"
   */
  valueType?: ValueType;

  /**
   * Disables the region field when the user hasn't selected a country.
   *
   * Default value: false
   */
  disableWhenEmpty?: boolean;

  /**
   * Disables the region field. If set to true, it overrides disableWhenEmpty
   *
   * Default value: false
   */
  disabled?: boolean;

  /**
   * Appends a list of string to the every region dropdown,
   * regardless of the country selected.
   *
   * Default value: []
   */
  customOptions?: { regionName: string, regionShortCode: string }[];

  whitelist?: RegionList;
  blacklist?: RegionList;
}

export class RegionDropdown extends React.Component<RegionDropdownProps> {}

export const CountryRegionData: [string[]];
