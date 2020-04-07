import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  EnumType,
  ScalarType
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;

    /**
     * fetch data from the table: "users"
     */
    users: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users[]
    >;

    /**
     * fetch aggregated fields from the table: "users"
     */
    users_aggregate: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users_aggregate
    >;

    /**
     * fetch data from the table: "users" using primary key columns
     */
    users_by_pk?: FieldsTypeArg<{ id: any }, t_users | null>;
    capsules?: FieldsTypeArg<
      {
        find?: CapsulesFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Capsule | null)[] | null
    >;
    capsulesPast?: FieldsTypeArg<
      {
        find?: CapsulesFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Capsule | null)[] | null
    >;
    capsulesUpcoming?: FieldsTypeArg<
      {
        find?: CapsulesFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Capsule | null)[] | null
    >;
    capsule?: FieldsTypeArg<{ id: string }, t_Capsule | null>;
    company?: t_Info | null;
    cores?: FieldsTypeArg<
      {
        find?: CoresFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Core | null)[] | null
    >;
    coresPast?: FieldsTypeArg<
      {
        find?: CoresFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Core | null)[] | null
    >;
    coresUpcoming?: FieldsTypeArg<
      {
        find?: CoresFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Core | null)[] | null
    >;
    core?: FieldsTypeArg<{ id: string }, t_Core | null>;
    dragons?: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_Dragon | null)[] | null
    >;
    dragon?: FieldsTypeArg<{ id: string }, t_Dragon | null>;
    histories?: FieldsTypeArg<
      {
        find?: HistoryFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_History | null)[] | null
    >;
    historiesResult?: FieldsTypeArg<
      {
        find?: HistoryFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      t_HistoriesResult | null
    >;
    history?: FieldsTypeArg<{ id: string }, t_History | null>;
    landpads?: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_Landpad | null)[] | null
    >;
    landpad?: FieldsTypeArg<{ id: string }, t_Landpad | null>;
    launches?: FieldsTypeArg<
      {
        find?: LaunchFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Launch | null)[] | null
    >;
    launchesPast?: FieldsTypeArg<
      {
        find?: LaunchFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Launch | null)[] | null
    >;
    launchesPastResult?: FieldsTypeArg<
      {
        find?: LaunchFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      t_LaunchesPastResult | null
    >;
    launchesUpcoming?: FieldsTypeArg<
      {
        find?: LaunchFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Launch | null)[] | null
    >;
    launch?: FieldsTypeArg<{ id: string }, t_Launch | null>;
    launchLatest?: FieldsTypeArg<{ offset?: number | null }, t_Launch | null>;
    launchNext?: FieldsTypeArg<{ offset?: number | null }, t_Launch | null>;
    launchpads?: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_Launchpad | null)[] | null
    >;
    launchpad?: FieldsTypeArg<{ id: string }, t_Launchpad | null>;
    missions?: FieldsTypeArg<
      {
        find?: MissionsFind | null;
        limit?: number | null;
        offset?: number | null;
      },
      (t_Mission | null)[] | null
    >;
    missionsResult?: FieldsTypeArg<
      {
        find?: MissionsFind | null;
        limit?: number | null;
        offset?: number | null;
      },
      t_MissionResult | null
    >;
    mission?: FieldsTypeArg<{ id: string }, t_Mission | null>;
    payloads?: FieldsTypeArg<
      {
        find?: PayloadsFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Payload | null)[] | null
    >;
    payload?: FieldsTypeArg<{ id: string }, t_Payload | null>;
    roadster?: t_Roadster | null;
    rockets?: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_Rocket | null)[] | null
    >;
    rocketsResult?: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      t_RocketsResult | null
    >;
    rocket?: FieldsTypeArg<{ id: string }, t_Rocket | null>;
    ships?: FieldsTypeArg<
      {
        find?: ShipsFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      (t_Ship | null)[] | null
    >;
    shipsResult?: FieldsTypeArg<
      {
        find?: ShipsFind | null;
        limit?: number | null;
        offset?: number | null;
        order?: string | null;
        sort?: string | null;
      },
      t_ShipsResult | null
    >;
    ship?: FieldsTypeArg<{ id: string }, t_Ship | null>;
  },
  Extension<"Query">
>;

/**
 * @name users_select_column
 * @type ENUM
 */
type t_users_select_column = EnumType<
  "id" | "name" | "rocket" | "timestamp" | "twitter"
>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name users_order_by
 * @type INPUT_OBJECT
 */
export type users_order_by = {
  id?: order_by | null;
  name?: order_by | null;
  rocket?: order_by | null;
  timestamp?: order_by | null;
  twitter?: order_by | null;
};

/**
 * @name order_by
 * @type ENUM
 */
type t_order_by = EnumType<
  | "asc"
  | "asc_nulls_first"
  | "asc_nulls_last"
  | "desc"
  | "desc_nulls_first"
  | "desc_nulls_last"
>;

/**
 * @name users_bool_exp
 * @type INPUT_OBJECT
 */
export type users_bool_exp = {
  _and?: (users_bool_exp | null)[] | null;
  _not?: users_bool_exp | null;
  _or?: (users_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  rocket?: String_comparison_exp | null;
  timestamp?: timestamptz_comparison_exp | null;
  twitter?: String_comparison_exp | null;
};

/**
 * @name uuid_comparison_exp
 * @type INPUT_OBJECT
 */
export type uuid_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name uuid
 * @type SCALAR
 */
type t_uuid<T extends any = any> = ScalarType<T, Extension<"uuid">>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name String_comparison_exp
 * @type INPUT_OBJECT
 */
export type String_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
};

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name timestamptz_comparison_exp
 * @type INPUT_OBJECT
 */
export type timestamptz_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name timestamptz
 * @type SCALAR
 */
type t_timestamptz<T extends any = any> = ScalarType<
  T,
  Extension<"timestamptz">
>;

/**
 * @name users
 * @type OBJECT
 */
type t_users = FieldsType<
  {
    __typename: t_String<"users">;
    id: t_uuid;
    name?: t_String | null;
    rocket?: t_String | null;
    timestamp: t_timestamptz;
    twitter?: t_String | null;
  },
  Extension<"users">
>;

/**
 * @name users_aggregate
 * @type OBJECT
 */
type t_users_aggregate = FieldsType<
  {
    __typename: t_String<"users_aggregate">;
    aggregate?: t_users_aggregate_fields | null;
    nodes: t_users[];
  },
  Extension<"users_aggregate">
>;

/**
 * @name users_aggregate_fields
 * @type OBJECT
 */
type t_users_aggregate_fields = FieldsType<
  {
    __typename: t_String<"users_aggregate_fields">;
    count?: FieldsTypeArg<
      { columns?: users_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_users_max_fields | null;
    min?: t_users_min_fields | null;
  },
  Extension<"users_aggregate_fields">
>;

/**
 * @name users_max_fields
 * @type OBJECT
 */
type t_users_max_fields = FieldsType<
  {
    __typename: t_String<"users_max_fields">;
    name?: t_String | null;
    rocket?: t_String | null;
    timestamp?: t_timestamptz | null;
    twitter?: t_String | null;
  },
  Extension<"users_max_fields">
>;

/**
 * @name users_min_fields
 * @type OBJECT
 */
type t_users_min_fields = FieldsType<
  {
    __typename: t_String<"users_min_fields">;
    name?: t_String | null;
    rocket?: t_String | null;
    timestamp?: t_timestamptz | null;
    twitter?: t_String | null;
  },
  Extension<"users_min_fields">
>;

/**
 * @name CapsulesFind
 * @type INPUT_OBJECT
 */
export type CapsulesFind = {
  id?: string | null;
  landings?: number | null;
  mission?: string | null;
  original_launch?: string | null;
  reuse_count?: number | null;
  status?: string | null;
  type?: string | null;
};

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Date
 * @type SCALAR
 */
type t_Date<T extends string = string> = ScalarType<T, Extension<"Date">>;

/**
 * @name Capsule
 * @type OBJECT
 */
type t_Capsule = FieldsType<
  {
    __typename: t_String<"Capsule">;
    id?: t_ID | null;
    landings?: t_Int | null;
    missions?: (t_CapsuleMission | null)[] | null;
    original_launch?: t_Date | null;
    reuse_count?: t_Int | null;
    status?: t_String | null;
    type?: t_String | null;
    dragon?: t_Dragon | null;
  },
  Extension<"Capsule">
>;

/**
 * @name CapsuleMission
 * @type OBJECT
 */
type t_CapsuleMission = FieldsType<
  {
    __typename: t_String<"CapsuleMission">;
    flight?: t_Int | null;
    name?: t_String | null;
  },
  Extension<"CapsuleMission">
>;

/**
 * @name Dragon
 * @type OBJECT
 */
type t_Dragon = FieldsType<
  {
    __typename: t_String<"Dragon">;
    active?: t_Boolean | null;
    crew_capacity?: t_Int | null;
    description?: t_String | null;
    diameter?: t_Distance | null;
    dry_mass_kg?: t_Int | null;
    dry_mass_lb?: t_Int | null;
    first_flight?: t_String | null;
    heat_shield?: t_DragonHeatShield | null;
    height_w_trunk?: t_Distance | null;
    id?: t_ID | null;
    launch_payload_mass?: t_Mass | null;
    launch_payload_vol?: t_Volume | null;
    name?: t_String | null;
    orbit_duration_yr?: t_Int | null;
    pressurized_capsule?: t_DragonPressurizedCapsule | null;
    return_payload_mass?: t_Mass | null;
    return_payload_vol?: t_Volume | null;
    sidewall_angle_deg?: t_Float | null;
    thrusters?: (t_DragonThrust | null)[] | null;
    trunk?: t_DragonTrunk | null;
    type?: t_String | null;
    wikipedia?: t_String | null;
  },
  Extension<"Dragon">
>;

/**
 * @name Distance
 * @type OBJECT
 */
type t_Distance = FieldsType<
  {
    __typename: t_String<"Distance">;
    feet?: t_Float | null;
    meters?: t_Float | null;
  },
  Extension<"Distance">
>;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name DragonHeatShield
 * @type OBJECT
 */
type t_DragonHeatShield = FieldsType<
  {
    __typename: t_String<"DragonHeatShield">;
    dev_partner?: t_String | null;
    material?: t_String | null;
    size_meters?: t_Float | null;
    temp_degrees?: t_Int | null;
  },
  Extension<"DragonHeatShield">
>;

/**
 * @name Mass
 * @type OBJECT
 */
type t_Mass = FieldsType<
  {
    __typename: t_String<"Mass">;
    kg?: t_Int | null;
    lb?: t_Int | null;
  },
  Extension<"Mass">
>;

/**
 * @name Volume
 * @type OBJECT
 */
type t_Volume = FieldsType<
  {
    __typename: t_String<"Volume">;
    cubic_feet?: t_Int | null;
    cubic_meters?: t_Int | null;
  },
  Extension<"Volume">
>;

/**
 * @name DragonPressurizedCapsule
 * @type OBJECT
 */
type t_DragonPressurizedCapsule = FieldsType<
  {
    __typename: t_String<"DragonPressurizedCapsule">;
    payload_volume?: t_Volume | null;
  },
  Extension<"DragonPressurizedCapsule">
>;

/**
 * @name DragonThrust
 * @type OBJECT
 */
type t_DragonThrust = FieldsType<
  {
    __typename: t_String<"DragonThrust">;
    amount?: t_Int | null;
    fuel_1?: t_String | null;
    fuel_2?: t_String | null;
    pods?: t_Int | null;
    thrust?: t_Force | null;
    type?: t_String | null;
  },
  Extension<"DragonThrust">
>;

/**
 * @name Force
 * @type OBJECT
 */
type t_Force = FieldsType<
  {
    __typename: t_String<"Force">;
    kN?: t_Float | null;
    lbf?: t_Float | null;
  },
  Extension<"Force">
>;

/**
 * @name DragonTrunk
 * @type OBJECT
 */
type t_DragonTrunk = FieldsType<
  {
    __typename: t_String<"DragonTrunk">;
    cargo?: t_DragonTrunkCargo | null;
    trunk_volume?: t_Volume | null;
  },
  Extension<"DragonTrunk">
>;

/**
 * @name DragonTrunkCargo
 * @type OBJECT
 */
type t_DragonTrunkCargo = FieldsType<
  {
    __typename: t_String<"DragonTrunkCargo">;
    solar_array?: t_Int | null;
    unpressurized_cargo?: t_Boolean | null;
  },
  Extension<"DragonTrunkCargo">
>;

/**
 * @name Info
 * @type OBJECT
 */
type t_Info = FieldsType<
  {
    __typename: t_String<"Info">;
    ceo?: t_String | null;
    coo?: t_String | null;
    cto_propulsion?: t_String | null;
    cto?: t_String | null;
    employees?: t_Int | null;
    founded?: t_Int | null;
    founder?: t_String | null;
    headquarters?: t_Address | null;
    launch_sites?: t_Int | null;
    links?: t_InfoLinks | null;
    name?: t_String | null;
    summary?: t_String | null;
    test_sites?: t_Int | null;
    valuation?: t_Float | null;
    vehicles?: t_Int | null;
  },
  Extension<"Info">
>;

/**
 * @name Address
 * @type OBJECT
 */
type t_Address = FieldsType<
  {
    __typename: t_String<"Address">;
    address?: t_String | null;
    city?: t_String | null;
    state?: t_String | null;
  },
  Extension<"Address">
>;

/**
 * @name InfoLinks
 * @type OBJECT
 */
type t_InfoLinks = FieldsType<
  {
    __typename: t_String<"InfoLinks">;
    elon_twitter?: t_String | null;
    flickr?: t_String | null;
    twitter?: t_String | null;
    website?: t_String | null;
  },
  Extension<"InfoLinks">
>;

/**
 * @name CoresFind
 * @type INPUT_OBJECT
 */
export type CoresFind = {
  asds_attempts?: number | null;
  asds_landings?: number | null;
  block?: number | null;
  id?: string | null;
  missions?: string | null;
  original_launch?: string | null;
  reuse_count?: number | null;
  rtls_attempts?: number | null;
  rtls_landings?: number | null;
  status?: string | null;
  water_landing?: boolean | null;
};

/**
 * @name Core
 * @type OBJECT
 */
type t_Core = FieldsType<
  {
    __typename: t_String<"Core">;
    asds_attempts?: t_Int | null;
    asds_landings?: t_Int | null;
    block?: t_Int | null;
    id?: t_ID | null;
    missions?: (t_CapsuleMission | null)[] | null;
    original_launch?: t_Date | null;
    reuse_count?: t_Int | null;
    rtls_attempts?: t_Int | null;
    rtls_landings?: t_Int | null;
    status?: t_String | null;
    water_landing?: t_Boolean | null;
  },
  Extension<"Core">
>;

/**
 * @name HistoryFind
 * @type INPUT_OBJECT
 */
export type HistoryFind = {
  end?: string | null;
  flight_number?: number | null;
  id?: string | null;
  start?: string | null;
};

/**
 * @name History
 * @type OBJECT
 */
type t_History = FieldsType<
  {
    __typename: t_String<"History">;
    details?: t_String | null;
    event_date_unix?: t_Date | null;
    event_date_utc?: t_Date | null;
    id?: t_ID | null;
    links?: t_Link | null;
    title?: t_String | null;
    flight?: t_Launch | null;
  },
  Extension<"History">
>;

/**
 * @name Link
 * @type OBJECT
 */
type t_Link = FieldsType<
  {
    __typename: t_String<"Link">;
    article?: t_String | null;
    reddit?: t_String | null;
    wikipedia?: t_String | null;
  },
  Extension<"Link">
>;

/**
 * @name Launch
 * @type OBJECT
 */
type t_Launch = FieldsType<
  {
    __typename: t_String<"Launch">;
    details?: t_String | null;
    id?: t_ID | null;
    is_tentative?: t_Boolean | null;
    launch_date_local?: t_Date | null;
    launch_date_unix?: t_Date | null;
    launch_date_utc?: t_Date | null;
    launch_site?: t_LaunchSite | null;
    launch_success?: t_Boolean | null;
    launch_year?: t_String | null;
    links?: t_LaunchLinks | null;
    mission_id?: (t_String | null)[] | null;
    mission_name?: t_String | null;
    rocket?: t_LaunchRocket | null;
    static_fire_date_unix?: t_Date | null;
    static_fire_date_utc?: t_Date | null;
    telemetry?: t_LaunchTelemetry | null;
    tentative_max_precision?: t_String | null;
    upcoming?: t_Boolean | null;
    ships?: (t_Ship | null)[] | null;
  },
  Extension<"Launch">
>;

/**
 * @name LaunchSite
 * @type OBJECT
 */
type t_LaunchSite = FieldsType<
  {
    __typename: t_String<"LaunchSite">;
    site_id?: t_String | null;
    site_name_long?: t_String | null;
    site_name?: t_String | null;
  },
  Extension<"LaunchSite">
>;

/**
 * @name LaunchLinks
 * @type OBJECT
 */
type t_LaunchLinks = FieldsType<
  {
    __typename: t_String<"LaunchLinks">;
    article_link?: t_String | null;
    flickr_images?: (t_String | null)[] | null;
    mission_patch_small?: t_String | null;
    mission_patch?: t_String | null;
    presskit?: t_String | null;
    reddit_campaign?: t_String | null;
    reddit_launch?: t_String | null;
    reddit_media?: t_String | null;
    reddit_recovery?: t_String | null;
    video_link?: t_String | null;
    wikipedia?: t_String | null;
  },
  Extension<"LaunchLinks">
>;

/**
 * @name LaunchRocket
 * @type OBJECT
 */
type t_LaunchRocket = FieldsType<
  {
    __typename: t_String<"LaunchRocket">;
    fairings?: t_LaunchRocketFairings | null;
    first_stage?: t_LaunchRocketFirstStage | null;
    rocket_name?: t_String | null;
    rocket_type?: t_String | null;
    rocket?: t_Rocket | null;
    second_stage?: t_LaunchRocketSecondStage | null;
  },
  Extension<"LaunchRocket">
>;

/**
 * @name LaunchRocketFairings
 * @type OBJECT
 */
type t_LaunchRocketFairings = FieldsType<
  {
    __typename: t_String<"LaunchRocketFairings">;
    recovered?: t_Boolean | null;
    recovery_attempt?: t_Boolean | null;
    reused?: t_Boolean | null;
    ship?: t_String | null;
  },
  Extension<"LaunchRocketFairings">
>;

/**
 * @name LaunchRocketFirstStage
 * @type OBJECT
 */
type t_LaunchRocketFirstStage = FieldsType<
  {
    __typename: t_String<"LaunchRocketFirstStage">;
    cores?: (t_LaunchRocketFirstStageCore | null)[] | null;
  },
  Extension<"LaunchRocketFirstStage">
>;

/**
 * @name LaunchRocketFirstStageCore
 * @type OBJECT
 */
type t_LaunchRocketFirstStageCore = FieldsType<
  {
    __typename: t_String<"LaunchRocketFirstStageCore">;
    block?: t_Int | null;
    core?: t_Core | null;
    flight?: t_Int | null;
    gridfins?: t_Boolean | null;
    land_success?: t_Boolean | null;
    landing_intent?: t_Boolean | null;
    landing_type?: t_String | null;
    landing_vehicle?: t_String | null;
    legs?: t_Boolean | null;
    reused?: t_Boolean | null;
  },
  Extension<"LaunchRocketFirstStageCore">
>;

/**
 * @name Rocket
 * @type OBJECT
 */
type t_Rocket = FieldsType<
  {
    __typename: t_String<"Rocket">;
    active?: t_Boolean | null;
    boosters?: t_Int | null;
    company?: t_String | null;
    cost_per_launch?: t_Int | null;
    country?: t_String | null;
    description?: t_String | null;
    diameter?: t_Distance | null;
    engines?: t_RocketEngines | null;
    first_flight?: t_Date | null;
    first_stage?: t_RocketFirstStage | null;
    height?: t_Distance | null;
    id?: t_ID | null;
    landing_legs?: t_RocketLandingLegs | null;
    mass?: t_Mass | null;
    name?: t_String | null;
    payload_weights?: (t_RocketPayloadWeight | null)[] | null;
    second_stage?: t_RocketSecondStage | null;
    stages?: t_Int | null;
    success_rate_pct?: t_Int | null;
    type?: t_String | null;
    wikipedia?: t_String | null;
  },
  Extension<"Rocket">
>;

/**
 * @name RocketEngines
 * @type OBJECT
 */
type t_RocketEngines = FieldsType<
  {
    __typename: t_String<"RocketEngines">;
    number?: t_Int | null;
    type?: t_String | null;
    version?: t_String | null;
    layout?: t_String | null;
    engine_loss_max?: t_String | null;
    propellant_1?: t_String | null;
    propellant_2?: t_String | null;
    thrust_sea_level?: t_Force | null;
    thrust_vacuum?: t_Force | null;
    thrust_to_weight?: t_Float | null;
  },
  Extension<"RocketEngines">
>;

/**
 * @name RocketFirstStage
 * @type OBJECT
 */
type t_RocketFirstStage = FieldsType<
  {
    __typename: t_String<"RocketFirstStage">;
    burn_time_sec?: t_Int | null;
    engines?: t_Int | null;
    fuel_amount_tons?: t_Float | null;
    reusable?: t_Boolean | null;
    thrust_sea_level?: t_Force | null;
    thrust_vacuum?: t_Force | null;
  },
  Extension<"RocketFirstStage">
>;

/**
 * @name RocketLandingLegs
 * @type OBJECT
 */
type t_RocketLandingLegs = FieldsType<
  {
    __typename: t_String<"RocketLandingLegs">;
    number?: t_Int | null;
    material?: t_String | null;
  },
  Extension<"RocketLandingLegs">
>;

/**
 * @name RocketPayloadWeight
 * @type OBJECT
 */
type t_RocketPayloadWeight = FieldsType<
  {
    __typename: t_String<"RocketPayloadWeight">;
    id?: t_String | null;
    kg?: t_Int | null;
    lb?: t_Int | null;
    name?: t_String | null;
  },
  Extension<"RocketPayloadWeight">
>;

/**
 * @name RocketSecondStage
 * @type OBJECT
 */
type t_RocketSecondStage = FieldsType<
  {
    __typename: t_String<"RocketSecondStage">;
    burn_time_sec?: t_Int | null;
    engines?: t_Int | null;
    fuel_amount_tons?: t_Float | null;
    payloads?: t_RocketSecondStagePayloads | null;
    thrust?: t_Force | null;
  },
  Extension<"RocketSecondStage">
>;

/**
 * @name RocketSecondStagePayloads
 * @type OBJECT
 */
type t_RocketSecondStagePayloads = FieldsType<
  {
    __typename: t_String<"RocketSecondStagePayloads">;
    option_1?: t_String | null;
    composite_fairing?: t_RocketSecondStagePayloadCompositeFairing | null;
  },
  Extension<"RocketSecondStagePayloads">
>;

/**
 * @name RocketSecondStagePayloadCompositeFairing
 * @type OBJECT
 */
type t_RocketSecondStagePayloadCompositeFairing = FieldsType<
  {
    __typename: t_String<"RocketSecondStagePayloadCompositeFairing">;
    height?: t_Distance | null;
    diameter?: t_Distance | null;
  },
  Extension<"RocketSecondStagePayloadCompositeFairing">
>;

/**
 * @name LaunchRocketSecondStage
 * @type OBJECT
 */
type t_LaunchRocketSecondStage = FieldsType<
  {
    __typename: t_String<"LaunchRocketSecondStage">;
    block?: t_Int | null;
    payloads?: (t_Payload | null)[] | null;
  },
  Extension<"LaunchRocketSecondStage">
>;

/**
 * @name Payload
 * @type OBJECT
 */
type t_Payload = FieldsType<
  {
    __typename: t_String<"Payload">;
    customers?: (t_String | null)[] | null;
    id?: t_ID | null;
    manufacturer?: t_String | null;
    nationality?: t_String | null;
    norad_id?: (t_Int | null)[] | null;
    orbit_params?: t_PayloadOrbitParams | null;
    orbit?: t_String | null;
    payload_mass_kg?: t_Float | null;
    payload_mass_lbs?: t_Float | null;
    payload_type?: t_String | null;
    reused?: t_Boolean | null;
  },
  Extension<"Payload">
>;

/**
 * @name PayloadOrbitParams
 * @type OBJECT
 */
type t_PayloadOrbitParams = FieldsType<
  {
    __typename: t_String<"PayloadOrbitParams">;
    apoapsis_km?: t_Float | null;
    arg_of_pericenter?: t_Float | null;
    eccentricity?: t_Float | null;
    epoch?: t_Date | null;
    inclination_deg?: t_Float | null;
    lifespan_years?: t_Float | null;
    longitude?: t_Float | null;
    mean_anomaly?: t_Float | null;
    mean_motion?: t_Float | null;
    periapsis_km?: t_Float | null;
    period_min?: t_Float | null;
    raan?: t_Float | null;
    reference_system?: t_String | null;
    regime?: t_String | null;
    semi_major_axis_km?: t_Float | null;
  },
  Extension<"PayloadOrbitParams">
>;

/**
 * @name LaunchTelemetry
 * @type OBJECT
 */
type t_LaunchTelemetry = FieldsType<
  {
    __typename: t_String<"LaunchTelemetry">;
    flight_club?: t_String | null;
  },
  Extension<"LaunchTelemetry">
>;

/**
 * @name Ship
 * @type OBJECT
 */
type t_Ship = FieldsType<
  {
    __typename: t_String<"Ship">;
    abs?: t_Int | null;
    active?: t_Boolean | null;
    attempted_landings?: t_Int | null;
    class?: t_Int | null;
    course_deg?: t_Int | null;
    home_port?: t_String | null;
    id?: t_ID | null;
    image?: t_String | null;
    imo?: t_Int | null;
    missions?: (t_ShipMission | null)[] | null;
    mmsi?: t_Int | null;
    model?: t_String | null;
    name?: t_String | null;
    position?: t_ShipLocation | null;
    roles?: (t_String | null)[] | null;
    speed_kn?: t_Float | null;
    status?: t_String | null;
    successful_landings?: t_Int | null;
    type?: t_String | null;
    url?: t_String | null;
    weight_kg?: t_Int | null;
    weight_lbs?: t_Int | null;
    year_built?: t_Int | null;
  },
  Extension<"Ship">
>;

/**
 * @name ShipMission
 * @type OBJECT
 */
type t_ShipMission = FieldsType<
  {
    __typename: t_String<"ShipMission">;
    flight?: t_String | null;
    name?: t_String | null;
  },
  Extension<"ShipMission">
>;

/**
 * @name ShipLocation
 * @type OBJECT
 */
type t_ShipLocation = FieldsType<
  {
    __typename: t_String<"ShipLocation">;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
  },
  Extension<"ShipLocation">
>;

/**
 * @name HistoriesResult
 * @type OBJECT
 */
type t_HistoriesResult = FieldsType<
  {
    __typename: t_String<"HistoriesResult">;
    result?: t_Result | null;
    data?: (t_History | null)[] | null;
  },
  Extension<"HistoriesResult">
>;

/**
 * @name Result
 * @type OBJECT
 */
type t_Result = FieldsType<
  {
    __typename: t_String<"Result">;
    totalCount?: t_Int | null;
  },
  Extension<"Result">
>;

/**
 * @name Landpad
 * @type OBJECT
 */
type t_Landpad = FieldsType<
  {
    __typename: t_String<"Landpad">;
    attempted_landings?: t_String | null;
    details?: t_String | null;
    full_name?: t_String | null;
    id?: t_ID | null;
    landing_type?: t_String | null;
    location?: t_Location | null;
    status?: t_String | null;
    successful_landings?: t_String | null;
    wikipedia?: t_String | null;
  },
  Extension<"Landpad">
>;

/**
 * @name Location
 * @type OBJECT
 */
type t_Location = FieldsType<
  {
    __typename: t_String<"Location">;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    name?: t_String | null;
    region?: t_String | null;
  },
  Extension<"Location">
>;

/**
 * @name LaunchFind
 * @type INPUT_OBJECT
 */
export type LaunchFind = {
  apoapsis_km?: number | null;
  block?: number | null;
  cap_serial?: string | null;
  capsule_reuse?: string | null;
  core_flight?: number | null;
  core_reuse?: string | null;
  core_serial?: string | null;
  customer?: string | null;
  eccentricity?: number | null;
  end?: string | null;
  epoch?: string | null;
  fairings_recovered?: string | null;
  fairings_recovery_attempt?: string | null;
  fairings_reuse?: string | null;
  fairings_reused?: string | null;
  fairings_ship?: string | null;
  gridfins?: string | null;
  id?: string | null;
  inclination_deg?: number | null;
  land_success?: string | null;
  landing_intent?: string | null;
  landing_type?: string | null;
  landing_vehicle?: string | null;
  launch_date_local?: string | null;
  launch_date_utc?: string | null;
  launch_success?: string | null;
  launch_year?: string | null;
  legs?: string | null;
  lifespan_years?: number | null;
  longitude?: number | null;
  manufacturer?: string | null;
  mean_motion?: number | null;
  mission_id?: string | null;
  mission_name?: string | null;
  nationality?: string | null;
  norad_id?: number | null;
  orbit?: string | null;
  payload_id?: string | null;
  payload_type?: string | null;
  periapsis_km?: number | null;
  period_min?: number | null;
  raan?: number | null;
  reference_system?: string | null;
  regime?: string | null;
  reused?: string | null;
  rocket_id?: string | null;
  rocket_name?: string | null;
  rocket_type?: string | null;
  second_stage_block?: string | null;
  semi_major_axis_km?: number | null;
  ship?: string | null;
  side_core1_reuse?: string | null;
  side_core2_reuse?: string | null;
  site_id?: string | null;
  site_name_long?: string | null;
  site_name?: string | null;
  start?: string | null;
  tbd?: string | null;
  tentative_max_precision?: string | null;
  tentative?: string | null;
};

/**
 * @name LaunchesPastResult
 * @type OBJECT
 */
type t_LaunchesPastResult = FieldsType<
  {
    __typename: t_String<"LaunchesPastResult">;
    result?: t_Result | null;
    data?: (t_Launch | null)[] | null;
  },
  Extension<"LaunchesPastResult">
>;

/**
 * @name Launchpad
 * @type OBJECT
 */
type t_Launchpad = FieldsType<
  {
    __typename: t_String<"Launchpad">;
    attempted_launches?: t_Int | null;
    details?: t_String | null;
    id?: t_ID | null;
    location?: t_Location | null;
    name?: t_String | null;
    status?: t_String | null;
    successful_launches?: t_Int | null;
    vehicles_launched?: (t_Rocket | null)[] | null;
    wikipedia?: t_String | null;
  },
  Extension<"Launchpad">
>;

/**
 * @name MissionsFind
 * @type INPUT_OBJECT
 */
export type MissionsFind = {
  id?: string | null;
  manufacturer?: string | null;
  name?: string | null;
  payload_id?: string | null;
};

/**
 * @name Mission
 * @type OBJECT
 */
type t_Mission = FieldsType<
  {
    __typename: t_String<"Mission">;
    description?: t_String | null;
    id?: t_ID | null;
    manufacturers?: (t_String | null)[] | null;
    name?: t_String | null;
    twitter?: t_String | null;
    website?: t_String | null;
    wikipedia?: t_String | null;
    payloads?: (t_Payload | null)[] | null;
  },
  Extension<"Mission">
>;

/**
 * @name MissionResult
 * @type OBJECT
 */
type t_MissionResult = FieldsType<
  {
    __typename: t_String<"MissionResult">;
    result?: t_Result | null;
    data?: (t_Mission | null)[] | null;
  },
  Extension<"MissionResult">
>;

/**
 * @name PayloadsFind
 * @type INPUT_OBJECT
 */
export type PayloadsFind = {
  apoapsis_km?: number | null;
  customer?: string | null;
  eccentricity?: number | null;
  epoch?: string | null;
  inclination_deg?: number | null;
  lifespan_years?: number | null;
  longitude?: number | null;
  manufacturer?: string | null;
  mean_motion?: number | null;
  nationality?: string | null;
  norad_id?: number | null;
  orbit?: string | null;
  payload_id?: string | null;
  payload_type?: string | null;
  periapsis_km?: number | null;
  period_min?: number | null;
  raan?: number | null;
  reference_system?: string | null;
  regime?: string | null;
  reused?: boolean | null;
  semi_major_axis_km?: number | null;
};

/**
 * @name Roadster
 * @type OBJECT
 */
type t_Roadster = FieldsType<
  {
    __typename: t_String<"Roadster">;
    apoapsis_au?: t_Float | null;
    details?: t_String | null;
    earth_distance_km?: t_Float | null;
    earth_distance_mi?: t_Float | null;
    eccentricity?: t_Float | null;
    epoch_jd?: t_Float | null;
    inclination?: t_Float | null;
    launch_date_unix?: t_Date | null;
    launch_date_utc?: t_Date | null;
    launch_mass_kg?: t_Int | null;
    launch_mass_lbs?: t_Int | null;
    longitude?: t_Float | null;
    mars_distance_km?: t_Float | null;
    mars_distance_mi?: t_Float | null;
    name?: t_String | null;
    norad_id?: t_Int | null;
    orbit_type?: t_Float | null;
    periapsis_arg?: t_Float | null;
    periapsis_au?: t_Float | null;
    period_days?: t_Float | null;
    semi_major_axis_au?: t_Float | null;
    speed_kph?: t_Float | null;
    speed_mph?: t_Float | null;
    wikipedia?: t_String | null;
  },
  Extension<"Roadster">
>;

/**
 * @name RocketsResult
 * @type OBJECT
 */
type t_RocketsResult = FieldsType<
  {
    __typename: t_String<"RocketsResult">;
    result?: t_Result | null;
    data?: (t_Rocket | null)[] | null;
  },
  Extension<"RocketsResult">
>;

/**
 * @name ShipsFind
 * @type INPUT_OBJECT
 */
export type ShipsFind = {
  id?: string | null;
  name?: string | null;
  model?: string | null;
  type?: string | null;
  role?: string | null;
  active?: boolean | null;
  imo?: number | null;
  mmsi?: number | null;
  abs?: number | null;
  class?: number | null;
  weight_lbs?: number | null;
  weight_kg?: number | null;
  year_built?: number | null;
  home_port?: string | null;
  status?: string | null;
  speed_kn?: number | null;
  course_deg?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  successful_landings?: number | null;
  attempted_landings?: number | null;
  mission?: string | null;
};

/**
 * @name ShipsResult
 * @type OBJECT
 */
type t_ShipsResult = FieldsType<
  {
    __typename: t_String<"ShipsResult">;
    result?: t_Result | null;
    data?: (t_Ship | null)[] | null;
  },
  Extension<"ShipsResult">
>;

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<"Mutation">;

    /**
     * delete data from the table: "users"
     */
    delete_users?: FieldsTypeArg<
      { where: users_bool_exp },
      t_users_mutation_response | null
    >;

    /**
     * insert data into the table: "users"
     */
    insert_users?: FieldsTypeArg<
      { objects: users_insert_input[]; on_conflict?: users_on_conflict | null },
      t_users_mutation_response | null
    >;

    /**
     * update data of the table: "users"
     */
    update_users?: FieldsTypeArg<
      { _set?: users_set_input | null; where: users_bool_exp },
      t_users_mutation_response | null
    >;
  },
  Extension<"Mutation">
>;

/**
 * @name users_mutation_response
 * @type OBJECT
 */
type t_users_mutation_response = FieldsType<
  {
    __typename: t_String<"users_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_users[];
  },
  Extension<"users_mutation_response">
>;

/**
 * @name users_insert_input
 * @type INPUT_OBJECT
 */
export type users_insert_input = {
  id?: any | null;
  name?: string | null;
  rocket?: string | null;
  timestamp?: any | null;
  twitter?: string | null;
};

/**
 * @name users_on_conflict
 * @type INPUT_OBJECT
 */
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: users_update_column[];
};

/**
 * @name users_constraint
 * @type ENUM
 */
type t_users_constraint = EnumType<"users_pkey">;

/**
 * @name users_update_column
 * @type ENUM
 */
type t_users_update_column = EnumType<
  "id" | "name" | "rocket" | "timestamp" | "twitter"
>;

/**
 * @name users_set_input
 * @type INPUT_OBJECT
 */
export type users_set_input = {
  id?: any | null;
  name?: string | null;
  rocket?: string | null;
  timestamp?: any | null;
  twitter?: string | null;
};

/**
 * @name Subscription
 * @type OBJECT
 */
type t_Subscription = FieldsType<
  {
    __typename: t_String<"Subscription">;

    /**
     * fetch data from the table: "users"
     */
    users: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users[]
    >;

    /**
     * fetch aggregated fields from the table: "users"
     */
    users_aggregate: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: users_order_by[] | null;
        where?: users_bool_exp | null;
      },
      t_users_aggregate
    >;

    /**
     * fetch data from the table: "users" using primary key columns
     */
    users_by_pk?: FieldsTypeArg<{ id: any }, t_users | null>;
  },
  Extension<"Subscription">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    kind: t___TypeKind;
    name?: t_String | null;
    description?: t_String | null;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces?: t___Type[] | null;
    possibleTypes?: t___Type[] | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields?: t___InputValue[] | null;
    ofType?: t___Type | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description?: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    name: t_String;
    description?: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: t_String | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "VARIABLE_DEFINITION"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name conflict_action
 * @type ENUM
 */
type t_conflict_action = EnumType<"ignore" | "update">;

/**
 * @name users_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type users_aggregate_order_by = {
  count?: order_by | null;
  max?: users_max_order_by | null;
  min?: users_min_order_by | null;
};

/**
 * @name users_max_order_by
 * @type INPUT_OBJECT
 */
export type users_max_order_by = {
  name?: order_by | null;
  rocket?: order_by | null;
  timestamp?: order_by | null;
  twitter?: order_by | null;
};

/**
 * @name users_min_order_by
 * @type INPUT_OBJECT
 */
export type users_min_order_by = {
  name?: order_by | null;
  rocket?: order_by | null;
  timestamp?: order_by | null;
  twitter?: order_by | null;
};

/**
 * @name users_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type users_arr_rel_insert_input = {
  data: users_insert_input[];
  on_conflict?: users_on_conflict | null;
};

/**
 * @name users_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict?: users_on_conflict | null;
};

/**
 * @name ObjectID
 * @type SCALAR
 */
type t_ObjectID<T extends any = any> = ScalarType<T, Extension<"ObjectID">>;

/**
 * @name CoreMission
 * @type OBJECT
 */
type t_CoreMission = FieldsType<
  {
    __typename: t_String<"CoreMission">;
    name?: t_String | null;
    flight?: t_Int | null;
  },
  Extension<"CoreMission">
>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name users_select_column
 * @type ENUM
 */
export enum users_select_column {
  id = "id",
  name = "name",
  rocket = "rocket",
  timestamp = "timestamp",
  twitter = "twitter"
}

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name order_by
 * @type ENUM
 */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last"
}

/**
 * @name uuid
 * @type SCALAR
 */
export type uuid = TypeData<t_uuid>;

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name timestamptz
 * @type SCALAR
 */
export type timestamptz = TypeData<t_timestamptz>;

/**
 * @name users
 * @type OBJECT
 */
export type users = TypeData<t_users>;

/**
 * @name users_aggregate
 * @type OBJECT
 */
export type users_aggregate = TypeData<t_users_aggregate>;

/**
 * @name users_aggregate_fields
 * @type OBJECT
 */
export type users_aggregate_fields = TypeData<t_users_aggregate_fields>;

/**
 * @name users_max_fields
 * @type OBJECT
 */
export type users_max_fields = TypeData<t_users_max_fields>;

/**
 * @name users_min_fields
 * @type OBJECT
 */
export type users_min_fields = TypeData<t_users_min_fields>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Date
 * @type SCALAR
 */
export type Date = TypeData<t_Date>;

/**
 * @name Capsule
 * @type OBJECT
 */
export type Capsule = TypeData<t_Capsule>;

/**
 * @name CapsuleMission
 * @type OBJECT
 */
export type CapsuleMission = TypeData<t_CapsuleMission>;

/**
 * @name Dragon
 * @type OBJECT
 */
export type Dragon = TypeData<t_Dragon>;

/**
 * @name Distance
 * @type OBJECT
 */
export type Distance = TypeData<t_Distance>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name DragonHeatShield
 * @type OBJECT
 */
export type DragonHeatShield = TypeData<t_DragonHeatShield>;

/**
 * @name Mass
 * @type OBJECT
 */
export type Mass = TypeData<t_Mass>;

/**
 * @name Volume
 * @type OBJECT
 */
export type Volume = TypeData<t_Volume>;

/**
 * @name DragonPressurizedCapsule
 * @type OBJECT
 */
export type DragonPressurizedCapsule = TypeData<t_DragonPressurizedCapsule>;

/**
 * @name DragonThrust
 * @type OBJECT
 */
export type DragonThrust = TypeData<t_DragonThrust>;

/**
 * @name Force
 * @type OBJECT
 */
export type Force = TypeData<t_Force>;

/**
 * @name DragonTrunk
 * @type OBJECT
 */
export type DragonTrunk = TypeData<t_DragonTrunk>;

/**
 * @name DragonTrunkCargo
 * @type OBJECT
 */
export type DragonTrunkCargo = TypeData<t_DragonTrunkCargo>;

/**
 * @name Info
 * @type OBJECT
 */
export type Info = TypeData<t_Info>;

/**
 * @name Address
 * @type OBJECT
 */
export type Address = TypeData<t_Address>;

/**
 * @name InfoLinks
 * @type OBJECT
 */
export type InfoLinks = TypeData<t_InfoLinks>;

/**
 * @name Core
 * @type OBJECT
 */
export type Core = TypeData<t_Core>;

/**
 * @name History
 * @type OBJECT
 */
export type History = TypeData<t_History>;

/**
 * @name Link
 * @type OBJECT
 */
export type Link = TypeData<t_Link>;

/**
 * @name Launch
 * @type OBJECT
 */
export type Launch = TypeData<t_Launch>;

/**
 * @name LaunchSite
 * @type OBJECT
 */
export type LaunchSite = TypeData<t_LaunchSite>;

/**
 * @name LaunchLinks
 * @type OBJECT
 */
export type LaunchLinks = TypeData<t_LaunchLinks>;

/**
 * @name LaunchRocket
 * @type OBJECT
 */
export type LaunchRocket = TypeData<t_LaunchRocket>;

/**
 * @name LaunchRocketFairings
 * @type OBJECT
 */
export type LaunchRocketFairings = TypeData<t_LaunchRocketFairings>;

/**
 * @name LaunchRocketFirstStage
 * @type OBJECT
 */
export type LaunchRocketFirstStage = TypeData<t_LaunchRocketFirstStage>;

/**
 * @name LaunchRocketFirstStageCore
 * @type OBJECT
 */
export type LaunchRocketFirstStageCore = TypeData<t_LaunchRocketFirstStageCore>;

/**
 * @name Rocket
 * @type OBJECT
 */
export type Rocket = TypeData<t_Rocket>;

/**
 * @name RocketEngines
 * @type OBJECT
 */
export type RocketEngines = TypeData<t_RocketEngines>;

/**
 * @name RocketFirstStage
 * @type OBJECT
 */
export type RocketFirstStage = TypeData<t_RocketFirstStage>;

/**
 * @name RocketLandingLegs
 * @type OBJECT
 */
export type RocketLandingLegs = TypeData<t_RocketLandingLegs>;

/**
 * @name RocketPayloadWeight
 * @type OBJECT
 */
export type RocketPayloadWeight = TypeData<t_RocketPayloadWeight>;

/**
 * @name RocketSecondStage
 * @type OBJECT
 */
export type RocketSecondStage = TypeData<t_RocketSecondStage>;

/**
 * @name RocketSecondStagePayloads
 * @type OBJECT
 */
export type RocketSecondStagePayloads = TypeData<t_RocketSecondStagePayloads>;

/**
 * @name RocketSecondStagePayloadCompositeFairing
 * @type OBJECT
 */
export type RocketSecondStagePayloadCompositeFairing = TypeData<
  t_RocketSecondStagePayloadCompositeFairing
>;

/**
 * @name LaunchRocketSecondStage
 * @type OBJECT
 */
export type LaunchRocketSecondStage = TypeData<t_LaunchRocketSecondStage>;

/**
 * @name Payload
 * @type OBJECT
 */
export type Payload = TypeData<t_Payload>;

/**
 * @name PayloadOrbitParams
 * @type OBJECT
 */
export type PayloadOrbitParams = TypeData<t_PayloadOrbitParams>;

/**
 * @name LaunchTelemetry
 * @type OBJECT
 */
export type LaunchTelemetry = TypeData<t_LaunchTelemetry>;

/**
 * @name Ship
 * @type OBJECT
 */
export type Ship = TypeData<t_Ship>;

/**
 * @name ShipMission
 * @type OBJECT
 */
export type ShipMission = TypeData<t_ShipMission>;

/**
 * @name ShipLocation
 * @type OBJECT
 */
export type ShipLocation = TypeData<t_ShipLocation>;

/**
 * @name HistoriesResult
 * @type OBJECT
 */
export type HistoriesResult = TypeData<t_HistoriesResult>;

/**
 * @name Result
 * @type OBJECT
 */
export type Result = TypeData<t_Result>;

/**
 * @name Landpad
 * @type OBJECT
 */
export type Landpad = TypeData<t_Landpad>;

/**
 * @name Location
 * @type OBJECT
 */
export type Location = TypeData<t_Location>;

/**
 * @name LaunchesPastResult
 * @type OBJECT
 */
export type LaunchesPastResult = TypeData<t_LaunchesPastResult>;

/**
 * @name Launchpad
 * @type OBJECT
 */
export type Launchpad = TypeData<t_Launchpad>;

/**
 * @name Mission
 * @type OBJECT
 */
export type Mission = TypeData<t_Mission>;

/**
 * @name MissionResult
 * @type OBJECT
 */
export type MissionResult = TypeData<t_MissionResult>;

/**
 * @name Roadster
 * @type OBJECT
 */
export type Roadster = TypeData<t_Roadster>;

/**
 * @name RocketsResult
 * @type OBJECT
 */
export type RocketsResult = TypeData<t_RocketsResult>;

/**
 * @name ShipsResult
 * @type OBJECT
 */
export type ShipsResult = TypeData<t_ShipsResult>;

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>;

/**
 * @name users_mutation_response
 * @type OBJECT
 */
export type users_mutation_response = TypeData<t_users_mutation_response>;

/**
 * @name users_constraint
 * @type ENUM
 */
export enum users_constraint {
  users_pkey = "users_pkey"
}

/**
 * @name users_update_column
 * @type ENUM
 */
export enum users_update_column {
  id = "id",
  name = "name",
  rocket = "rocket",
  timestamp = "timestamp",
  twitter = "twitter"
}

/**
 * @name Subscription
 * @type OBJECT
 */
export type Subscription = TypeData<t_Subscription>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  LIST = "LIST",
  NON_NULL = "NON_NULL"
}

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  QUERY = "QUERY",
  MUTATION = "MUTATION",
  SUBSCRIPTION = "SUBSCRIPTION",
  FIELD = "FIELD",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  VARIABLE_DEFINITION = "VARIABLE_DEFINITION",
  SCHEMA = "SCHEMA",
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  INPUT_OBJECT = "INPUT_OBJECT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
}

/**
 * @name conflict_action
 * @type ENUM
 */
export enum conflict_action {
  ignore = "ignore",
  update = "update"
}

/**
 * @name ObjectID
 * @type SCALAR
 */
export type ObjectID = TypeData<t_ObjectID>;

/**
 * @name CoreMission
 * @type OBJECT
 */
export type CoreMission = TypeData<t_CoreMission>;
